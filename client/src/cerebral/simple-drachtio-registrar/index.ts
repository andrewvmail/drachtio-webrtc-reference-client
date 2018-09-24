import { Module } from 'cerebral'

export default Module({
  state: {
    settings: {
      server: "127.0.0.1",
      domain: "ctel.com",
      username: "1234",
      password: "1234",
      autoRegister: true,
    }
  },
  signals: {
  },
})
