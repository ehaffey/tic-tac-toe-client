'use strict'
const store = require('./../store')

const signUpSuccess = function () {
  $('#message').text('Signed up successfully')
  $('#message').attr('class', 'success')
  //  $('#sign-up').reset()
  console.log('signUpSuccess ran')
}

const signUpFailure = function () {
  $('#message').text('Sign up failed')
  $('#message').attr('class', 'failure')
  console.error('signUpFailure ran')
}

const signInSuccess = function (data) {
  store.user = data.user

  $('#message').text('Signed in successfully')
  $('#message').attr('class', 'success')
  $('#auth').css('display', 'initial')
  $('#pre-auth').css('display', 'none')
  //  $('#sign-up').reset()
  console.log('signInSuccess ran')
}

const signInFailure = function () {
  $('#message').text('Sign in failed')
  $('#message').attr('class', 'failure')
  console.error('signInFailure ran')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Password updated')
  $('#message').attr('class', 'success')
  console.log('changePaswordSuccess ran')
}

const changePasswordFailure = function () {
  $('#message').text('Password couldn\'t be updated')
  $('#message').attr('class', 'failure')
  console.error('changePasswordFailure ran')
}

const newGameSuccess = function (data) {
  store.game = data.game
  $('#message').text('New game started')
  $('#message').attr('class', 'success')
  console.log('newGameSuccess ran')
}
const newGameFailure = function (data) {
  $('#message').text('Unable to start new game')
  $('#message').attr('class', 'failure')
  console.log('newGameFailure ran')
}

const signOutSuccess = function (data) {
  $('#message').text('Sign off complete')
  $('#message').attr('class', 'success')
  $('#auth').css('display', 'none')
  $('#pre-auth').css('display', 'initial')
  console.log('signOutSuccess ran')
}

const signOutFailure = function () {
  $('#message').text('Sorry, you couldn\'t be signed off')
  $('#message').attr('class', 'failure')
  console.error('signOutFailure ran')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  newGameSuccess,
  newGameFailure,
  signOutSuccess,
  signOutFailure
}
