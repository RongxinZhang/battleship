const assert = require('chai').assert;
const { Board } = require('../lib/Board');

describe("Board Class", function() {
  it("should create a new board with the right dimnesionss", function() {
    let board = new Board();
    assert.isArray(board.board);
    assert.strictEqual(board.board.length, 10);
    assert.strictEqual(board.board[0].length, 10);
  });

  it("should be able to add ship to board", function() { });
  it("should not be able to add ship to board in position is taken", function() { });
  it("should be able to remove ship from board", function() { });
  it("should have something that starts and ends the game", function() { });
});

