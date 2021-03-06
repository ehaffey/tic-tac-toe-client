'use strict'
const authEvents = require('./auth/events')
const gameLogic = require('./logic')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#new-game').on('click', authEvents.onNewGame)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('.tile').on('click', gameLogic.buttonClick)
  $('#player-stat').on('click', authEvents.onPlayerStat)
  $('#inferno-button').on('click', authEvents.onInferno)
})
