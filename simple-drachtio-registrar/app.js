const config = require('config');
const Srf = require('drachtio-srf');
const srf = new Srf() ;
const passport = require('./lib/passport');
const regMiddleware = require('drachtio-mw-registration-parser');
const parseUri = require('drachtio-sip').parser.parseUri;
const users = new Map() ;

srf.connect(config.get('drachtio'))
  .on('connect', (err, hostport) => {
    if (err) {
      return console.error(`error connecting: ${err.message}`);
    }
    console.log(`connected hostport: ${hostport}`);
  });

srf.use(passport.initialize());
// srf.use('register', passport.authenticate('digest', { session: false })) ;
// srf.use('invite', passport.authenticate('digest', { session: false })) ;

srf.register(regMiddleware, (req, res) => {
  console.log(`got a successful registration: ${JSON.stringify(req.registration)}`);
  const hasExpires = typeof req.registration.contact[0].params.expires !== 'undefined';
  const headers = {} ;
  if (!hasExpires) {
    headers['Contact'] = `${req.get('Contact')};expires=${req.get('expires') || 3600}`;
  }
  else {
    headers['Contact'] = `${req.get('Contact')}`;
  }
  res.send(200, { headers });

  const parsedUri = parseUri(req.registration.aor) ;
  if (req.registration.type === 'register') {
    users.set(parsedUri.user, req.registration.contact[0].uri);
  }
  else {
    users.delete(parsedUri.user);
  }
  console.log(`there are now ${users.size} registered users after dealing with ${parsedUri.user}`);
});

srf.invite(regMiddleware, (req, res) => {
  const dest = parseUri(req.uri).user ;
  if (dest && users.has(dest)) {
    const uri = `${users.get(dest)};transport=udp`;
    srf.createB2BUA(req, res, uri)
      .then(({uac, uas}) => {
        console.log('connected');
        uac.on('destroy', () => {uas.destroy();});
        uas.on('destroy', () => {uac.destroy();});
      })
      .catch((err) => {
        console.log(`Error connecting call: ${err.message}`);
      });
  }
  else {
    console.log(`invite to unknown user: ${req.uri}`);
    res.send(404);
  }
});
