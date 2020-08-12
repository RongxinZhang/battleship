class Board {
  constructor() {
    this._size = 10;
    this._board = [];
    // Create placeholder arrays on board
    for (let i = 0; i < this.size; i++) {
      this._board.push(new Array(this.size));
    }
  }

  get board() {
    return this._board;
  }

  addShip(obj) {
    let direction = obj.direction;
    let boatLength = obj.ship.size;
    let position = this._board[obj.row][obj.col];

    if (position)
  }

}

module.exports = {Board};