'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('./../store.js')

const onSignUp = function (event) {
  event.preventDefault()
  const signUpIn = function () {
    api.signIn(data)
      .then(ui.signUpSuccess)
      .catch(ui.signInFailure)
  }
  const data = getFormFields(event.target)
  //  console.log('sign up data is,', data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .then(signUpIn)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onNewGame = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.newGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const onPlayerStat = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.playerStat(data)
    .then(ui.playerStatSuccess)
    .catch(ui.playerStatFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  store.over = true
  const data = getFormFields(event.target)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onNewGame,
  onPlayerStat,
  onSignOut
}
