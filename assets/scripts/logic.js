'use strict'

// const api = require('./auth/api')
// const ui = require('./auth/ui')
const store = require('./store')
const api = require('./auth/api.js')
const ui = require('./auth/ui.js')

const checkForWinner = function (pos1, pos2, pos3) {
  if (pos1 === pos2 && pos2 === pos3 && (pos1 + pos2 + pos3).length === 3) {
    ui.winner()
    store.winner = true
  }
}

const checkBoard = function () {
  console.log('checkBoard ran ' + store.game.cells + store.gameLength)
  const board = store.game.cells
  checkForWinner(board[0], board[1], board[2])
  checkForWinner(board[3], board[4], board[5])
  checkForWinner(board[6], board[7], board[8])
  checkForWinner(board[0], board[3], board[6])
  checkForWinner(board[1], board[4], board[7])
  checkForWinner(board[2], board[5], board[8])
  checkForWinner(board[0], board[4], board[8])
  checkForWinner(board[2], board[4], board[6])
  if (store.gameLength === 9) {
    store.draw = true
    ui.draw()
  }

  if (store.currentPlayer === 'X' && store.winner === false && store.draw === false) {
    store.currentPlayer = 'O'
    $('#game-info').text('Next move: O')
  } else if (store.winner === false && store.draw === false) {
    store.currentPlayer = 'O'
    $('#game-info').text('Next move: X')
  }
}

const buttonClick = function (event) {
  // first set a new variable with the clicked square
  const clickTile = this.dataset.tile
  // check if tile has been used. If used no action taken
  if (store.game.cells[clickTile]) {
    ui.badTile()
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
  checkBoard()
  store.gameLength++
}

module.exports = {
  buttonClick
}
