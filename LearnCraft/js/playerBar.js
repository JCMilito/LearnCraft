class PlayerBar {

  constructor(x, y, bgColor, barColor) {

    this.config = {
      x: x,
      y: y,
      width: 230,
      height: 15,
      bg: {
        color: bgColor
      },
      bar: {
        color: barColor
      }
    };
    this.drawBackground();
    this.drawHealthBar();
  }

  drawBackground() {
    var bmd = game.add.bitmapData(this.config.width, this.config.height);
    bmd.ctx.fillStyle = this.config.bg.color;
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, this.config.width, this.config.height);
    bmd.ctx.fill();

    this.bgSprite = game.add.sprite(this.config.x, this.config.y, bmd);
    this.bgSprite.fixedToCamera = true;
  }

  drawHealthBar() {
    var bmd = game.add.bitmapData(this.config.width, this.config.height);
    bmd.ctx.fillStyle = this.config.bar.color;
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, this.config.width, this.config.height);
    bmd.ctx.fill();

    this.barSprite = game.add.sprite(this.config.x, this.config.y, bmd);
    this.barSprite.fixedToCamera = true;
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
