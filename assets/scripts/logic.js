'use strict'

// const api = require('./auth/api')
// const ui = require('./auth/ui')
const store = require('./store')
const api = require('./auth/api.js')
const ui = require('./auth/ui.js')

const checkForEnd = function () {
  console.log('checkforend ran ' + store.game.cells)
  const board = store.game.cells
  if (board[0] === board[1] && board[1] === board[2]) {
    ui.winner()
    return
  }
  if (store.currentPlayer === 'x') {
    store.currentPlayer = 'o'
    $('#game-info').text('Next move: O')
  } else {
    store.currentPlayer = 'x'
    $('#game-info').text('Next move: X')
  }
}

const buttonClick = function (event) {
  // first set a new variable with the clicked square
  const clickTile = this.dataset.tile
  // check if tile has been used. If used no action taken
  if (store.game.cells[clickTile]) {
    return
  }
  // If tile unused then update board, update current player
  // indicator, update API and store, and check for winner
  $('#' + clickTile).text(store.currentPlayer)
  const updateObject = {
    game: {
      cell: {
        index: clickTile,
        value: store.currentplayer
      },
      // need to add game over logic
      over: false
    }
  }
  api.updateGame(updateObject)
  ui.onGameUpdate(clickTile)
  checkForEnd()
}

module.exports = {
  buttonClick
}
