const config = require('config');
const passport       = require('passport') ;
const DigestStrategy = require('passport-http').DigestStrategy;


function findByUsername(username, fn)
{
  const users = config.get('users');
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.username === username) { return fn(null, user); }
  }
  return fn(null, null);
}

passport.use(
  new DigestStrategy({
    qop: 'auth',
    realm: config.get('domain')
  },
  (username, done) => {
    // Find the user by username. If there is no user with the given username
    // set the user to `false` to indicate failure. Otherwise, return the
    // user and user's password.

    findByUsername(username, (err, user) => {
      if (err)   { return done(err); }
      if (!user) { return done(null, false); }

      return done(null, user, user.password);
    });
  })
);

module.exports = passport ;


