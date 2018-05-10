
class World {

  constructor(contents, numberOfColumns, numberOfRows, towns) {
    this.numberOfColumns = numberOfColumns;
    this.numberOfRows = numberOfRows;
    this.contents = [];
    for (let i = 0; i < numberOfRows; i++) {
      for (let j = 0; j < numberOfColumns; j++) {
        this.contents.push({row: i, col:j, contents:contents[i][j]});
      }
    }
    this.towns = towns;
  }

  squareContents(col, row) {
    for (let i = 0; i < this.contents.length; i++) {
      let square = this.contents[i];
      if (square.col == col && square.row == row) {
        return square.contents;
      }
    }
  }

  townNameAndQuestionsAndHints(col, row) {
    for (let i = 0; i < this.towns.length; i++) {
      let town = this.towns[i];
      if (town.col == player.col && town.row == player.row) {
        return {"name": town.name, "questions": town.questions, "hints": town.hints};
      }
    }
  }
}
