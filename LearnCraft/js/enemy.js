class Enemy {

  constructor(kind, x, y) {
    this.kind = kind;
    this.maxHp = 200;
    this.hp = 200;
    this.strength = 10;
    this.frozen = 0;
    this.healthBar = null;
    this.initiateSprite(x, y);
    this.pickLoot();
  }

  initiateSprite(x, y) {
    let z = -20;
    if (this.kind == "frog" || this.kind == "rabbit") {
      console.log(this.kind);
      z = 0;
    }
    this.sprite = game.add.isoSprite(x, y, z, this.kind, 0, enemyGroup);
    game.physics.isoArcade.enable(this.sprite);
    this.sprite.animations.add("down", [0, 1, 2], 10, true);
    this.sprite.animations.add("up", [9, 10, 11], 10, true);
    this.sprite.animations.add("left", [3, 4, 5], 10, true);
    this.sprite.animations.add("right", [6, 7, 8], 10, true);
    this.sprite.anchor.set(0.5, 0.4);
    this.healthBar = new EnemyHealthBar(this.sprite.body.x, this.sprite.body.y);
    this.setVisible(false);
  }

  pickLoot() {
    switch (this.kind) {
      case "scorpion":
        this.loot = "scorpionSting"
        break;
      case "desertSnake":
        this.loot = "snakeSting"
        break;
      case "forestSnake":
        this.loot = "snakeSting"
        break;
      case "spider":
        this.loot = "spiderBody"
        break;
      case "rabbit":
        this.loot = "rabbitPaw"
        break;
      case "frog":
        this.loot = "frogFoot"
        break;
    }
  }

  moveX(dX) {
    this.sprite.body.x += dX;
    this.healthBar.moveX(dX);
  }

  moveY(dY) {
    this.sprite.body.y += dY;
    this.healthBar.moveY(dY);
  }

  changeHP(value) {
    this.hp -= 100;
    this.healthBar.setPercent((this.hp / this.maxHp) * 100);
  }

  destroy() {
    this.sprite.destroy();
    this.healthBar.destroy();
  }

  setVisible(isVisible) {
    this.sprite.visible = isVisible;
    this.healthBar.setVisible(isVisible);
  }


}
