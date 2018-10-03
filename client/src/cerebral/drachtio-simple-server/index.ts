import { Module } from 'cerebral'
import * as sequences from "./sequences"

export default Module({
  state: {
    settings: {
      server: "127.0.0.1",
      domain: "example.com",
      username: "user1",
      password: "pass123",
    },
    registered: false,
  },
  signals: {
    // call: sequences.callSequence,
    register: sequences.registerSequence,
    // unregister: sequences.unregisterSequence,
    // hangup: sequences.hangupSequence,
    // answer: sequences.answerSequence,
    // onRegistrationFailed: sequences.onRegistrationFailed
  },
})
