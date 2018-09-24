import { Module } from 'cerebral'
import * as sequences from "./sequences"

export default Module({
  state: {
    settings: {
      server: "127.0.0.1",
      domain: "ctel.com",
      username: "1234",
      password: "1234",
      // autoRegister: true,
    },
    lastDialed: "",
    toCall: "",
    registered: false
  },
  signals: {
    call: sequences.callSequence,
    register: sequences.registerSequence,
    unregister: sequences.unregisterSequence
  },
})

