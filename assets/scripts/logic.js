'use strict'

// const api = require('./auth/api')
// const ui = require('./auth/ui')
const store = require('./store')

const buttonClick = function (event) {
  const clickTile = this.dataset.tile
  console.log(clickTile)
  $('#' + clickTile).text(store.currentPlayer)
  store.game.cells[clickTile] = store.currentPlayer
  if (store.currentPlayer === 'x') {
    store.currentPlayer = 'o'
    $('#game-info').text('Next move: O')
  } else {
    store.currentPlayer = 'x'
    $('#game-info').text('Next move: X')
  }
}

module.exports = {
  buttonClick
}
