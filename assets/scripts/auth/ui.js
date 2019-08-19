'use strict'
const store = require('./../store')

store.inferno = false

const signUpSuccess = function (data) {
  store.user = data.user
  store.over = true
  $('#message').text('Registered and signed in successfully')
  $('#message').attr('class', 'success')
  $('#auth').css('display', 'initial')
  $('#pre-auth').css('display', 'none')
  $('.text-field').val('')
  setTimeout(function () { $('#message').text('Status: Signed in, games are being logged') }, 7500)
  //  $('#sign-up').reset()
  // console.log('signUpSuccess ran')
}

const signUpFailure = function () {
  $('#message').text('Sign up failed')
  $('#message').attr('class', 'failure')
  $('.text-field').val('')
  // console.error('signUpFailure ran')
}

const signInSuccess = function (data) {
  store.user = data.user
  store.over = true
  $('#message').text('Signed in successfully, games are being logged')
  $('#message').attr('class', 'success')
  $('#auth').css('display', 'initial')
  $('#pre-auth').css('display', 'none')
  $('.text-field').val('')
  //  $('#sign-up').reset()
  // console.log('signInSuccess ran')
}

const signInFailure = function () {
  $('#message').text('Sign in failed')
  $('#message').attr('class', 'failure')
  $('.text-field').val('')
  // console.error('signInFailure ran')
}

const changePasswordSuccess = function (data) {
  $('#game-info').text('Password updated')
  $('#message').attr('class', 'success')
  $('.text-field').val('')
  // console.log('changePaswordSuccess ran')
}

const changePasswordFailure = function () {
  $('#message').text('Password couldn\'t be updated. Please try again.')
  $('#message').attr('class', 'failure')
  $('.text-field').val('')
  // console.error('changePasswordFailure ran')
}

const newGameSuccess = function (data) {
  store.game = data.game
  store.currentPlayer = 'X'
  store.winner = false
  store.draw = false
  store.gameLength = 1
  store.over = false
  $('.tile').text('')
  $('#board').css('display', 'initial')
  //  $('.container').classList.add('animated', 'bounceOutLeft')
  $('#message').attr('class', 'success')
  $('#game-info').text('New game started, Next move: X')
  // console.log('newGameSuccess ran')
}

const playerStatSuccess = function (data) {
  store.games = data.games
  if (store.games.length === 1) {
    $('#game-info').text('You have played 1 game.')
  } else {
    $('#game-info').text('You have played ' + store.games.length + ' games.')
  }
  // console.log('playerStatSuccess ran')
  // console.log(store.games.length)
}

const playerStatFailure = function (data) {
  $('#message').text('Unable to get game data')
  $('#message').attr('class', 'failure')
  // console.log('playerStatFailure ran')
}

const newGameFailure = function (data) {
  $('#message').text('Unable to start new game')
  $('#message').attr('class', 'failure')
  // console.log('newGameFailure ran')
}

const signOutSuccess = function (data) {
  clearTimeout(setTimeout)
  $('#message').text('Sign off complete')
  $('#message').attr('class', 'success')
  $('#auth').css('display', 'none')
  $('#pre-auth').css('display', 'initial')
  $('.tile').text('')
  $('#game-info').text('Click new game to start')
  // console.log('signOutSuccess ran')
}

const signOutFailure = function () {
  $('#message').text('Sorry, you couldn\'t be signed off')
  $('#message').attr('class', 'failure')
  // console.error('signOutFailure ran')
}

const onGameUpdate = function (clickTile) {
  store.game.cells[clickTile] = store.currentPlayer
  $('#' + clickTile).text(store.currentPlayer)
}

const winner = function () {
  $('#game-info').text('Player ' + store.currentPlayer + ' wins!')
  for (let i = 0; i < 9; i++) {
    if (store.game.cells[i] === '') {
      store.game.cells[i] = ' '
    }
  }
}

const draw = function () {
  $('#game-info').text('Draw! No one wins!')
}

const badTile = function () {
  if (store.over) {
    $('#game-info').text('Please start a new game')
  } else {
    $('#game-info').text('Player ' + store.currentPlayer + ', please don\'t do that')
  }
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
  signOutFailure,
  onGameUpdate,
  winner,
  draw,
  badTile,
  playerStatSuccess,
  playerStatFailure
}
