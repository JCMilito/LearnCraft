class Portal {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = game.add.isoSprite(x, y, 0, "portal", 0, floorGroup);
    this.initializeSprite();
  }

  initializeSprite() {
    this.sprite.animations.add("turn", [0, 1, 2, 3], 5, true);
    this.sprite.animations.play("turn");
    this.sprite.anchor.set(0.5, 0.5);
    this.sprite.inputEnabled = true;
    this.sprite.events.onInputDown.add(this.listener, this);
  }

  listener() {
    if (player.turn == null) {
      if (player.sprite.body.x == 448 && player.sprite.body.y == 0) {
        square.reset();
        player.row -= 1;
        player.turn = "enterNorth";
        square = new Square(world.squareContents(player.col, player.row));
      }
      if (player.sprite.body.x == 448 && player.sprite.body.y == 896) {
        square.reset();
        player.row += 1;
        player.turn = "enterSouth";
        square = new Square(world.squareContents(player.col, player.row));

      }
      if (player.sprite.body.x == 896 && player.sprite.body.y == 448) {
        square.reset();
        player.col += 1;
        player.turn = "enterEast";
        square = new Square(world.squareContents(player.col, player.row));
      }
      if (player.sprite.body.x == 0 && player.sprite.body.y == 448) {
        square.reset();
        player.col -= 1;
        player.turn = "enterWest";
        square = new Square(world.squareContents(player.col, player.row));
      }
    }
  }
}
