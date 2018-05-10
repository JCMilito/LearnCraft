class EnemyHealthBar {

  constructor(x, y) {

    this.config = {
      x: x,
      y: y,
      width: 50,
      height: 4,
      bg: {
        color: '#FF0000'
      },
      bar: {
        color: '#00FF00'
      }
    };
    this.drawBackground();
    this.drawHealthBar();
    this.setPosition(this.config.x, this.config.y);
  }

  drawBackground() {
    var bmd = game.add.bitmapData(this.config.width, this.config.height);
    bmd.ctx.fillStyle = this.config.bg.color;
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, this.config.width, this.config.height);
    bmd.ctx.fill();

    this.bgSprite = game.add.isoSprite(this.config.x - 32, this.config.y, 16, bmd, 0, enemyGroup);
    game.physics.isoArcade.enable(this.bgSprite);
    this.bgSprite.anchor.set(0, 0);
  }

  drawHealthBar() {
    var bmd = game.add.bitmapData(this.config.width, this.config.height);
    bmd.ctx.fillStyle = this.config.bar.color;
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, this.config.width, this.config.height);
    bmd.ctx.fill();

    this.barSprite = game.add.isoSprite(this.config.x - 32, this.config.y, 16, bmd, 0, enemyGroup);
    game.physics.isoArcade.enable(this.barSprite);
    this.barSprite.anchor.set(0, 0);
  }

  setX(x) {
    if (this.bgSprite !== undefined && this.barSprite !== undefined) {
      this.bgSprite.body.x = x;
      this.barSprite.body.x = x;
    }
  }

  setY(y) {
    if (this.bgSprite !== undefined && this.barSprite !== undefined) {
      this.bgSprite.body.y = y;
      this.barSprite.body.y = y;
    }
  }

  setPosition(x, y) {
    this.setX(x);
    this.setY(y);
  }

  moveX(dX) {
    this.bgSprite.body.x += dX;
    this.barSprite.body.x += dX;
  }

  moveY(dY) {
    this.bgSprite.body.y += dY;
    this.barSprite.body.y += dY;
  }

  setPercent(newValue) {
    game.add.tween(this.barSprite).to({
      width: (newValue * this.config.width) / 100
    }, 200, Phaser.Easing.Linear.None, true);
  }

  setVisible(isVisible) {
    this.bgSprite.visible = isVisible;
    this.barSprite.visible = isVisible;
  }

  destroy() {
    this.bgSprite.destroy();
    this.barSprite.destroy();
  }

}
