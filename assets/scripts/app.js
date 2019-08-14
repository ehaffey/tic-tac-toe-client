'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/events')
const gameLogic = require('./logic')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#new-game').on('submit', authEvents.onNewGame)
  $('#sign-out').on('submit', authEvents.onSignOut)
  $('.tile').on('click', gameLogic.buttonClick)
  // your JS code goes here
})
