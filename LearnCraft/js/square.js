class Square {

  constructor(kind) {
    this.kind = kind;
    this.tileType = null;
    this.tiles = [];
    this.roadTiles = [];
    this.obstacles = [];
    this.enemyKind = [];
    this.portals = [];
    this.townStuff = [];
    this.enemies = [];
    this.col = player.col;
    this.row = player.row;
    this.questionIndex = 0;
    this.createPortals();
    this.setTilesAndSpawnStuff();
  }

  setTilesAndSpawnStuff() {
    if (this.kind == "forest") {
      this.tileType = "forestGround";
      this.spawnObstacles();
    }
    if (this.kind == "countryside") {
      this.tileType = "grass";
    }
    if (this.kind == "desert") {
      this.tileType = "sand";
      this.spawnObstacles();
    }
    if (this.kind == "town") {
      this.spawnTilesBuildingsAndNpcs();
    } else {
      this.spawnEnemies();
      this.updateTilesEnemiesAndObstacles();
    }
  }

  createPortals() {
    if (this.row > 0) {
      if (world.squareContents(this.col, this.row - 1) != "water") {
        this.portals.push(new Portal(448, -88));
      }
    }
    if (this.row < world.numberOfRows - 1) {
      if (world.squareContents(this.col, this.row + 1) != "water") {
        this.portals.push(new Portal(500, 1048));
      }
    }
    if (this.col < world.numberOfColumns - 1) {
      if (world.squareContents(this.col + 1, this.row) != "water") {
        this.portals.push(new Portal(1048, 500));
      }
    }
    if (this.col > 0) {
      if (world.squareContents(this.col - 1, this.row) != "water") {
        this.portals.push(new Portal(-88, 448));
      }
    }
  }

  spawnTilesBuildingsAndNpcs() {
    this.name = world.townNameAndQuestionsAndHints(this.col, this.row).name;
    this.questions = world.townNameAndQuestionsAndHints(this.col, this.row).questions;
    this.hints = world.townNameAndQuestionsAndHints(this.col, this.row).hints;
    this.questionIndex = 0;

    for (var x = 0; x < 15; x++) {
      for (var y = 0; y < 15; y++) {
        var tile = game.add.isoSprite(x * 64, y * 64, 0, "grass", 0, floorGroup);
        tile.anchor.set(0.5, 0);
      }
    }

    for (let y = 896; y >= 640; y -= 64) {
      let tile = game.add.isoSprite(448, y, 0, "cobblestone", 0, floorGroup);
      tile.anchor.set(0.5, 0);
      this.roadTiles.push({
        x: 448,
        y: y
      });
    }
    for (let x = 512; x <= 576; x += 64) {
      let tile = game.add.isoSprite(x, 640, 0, "cobblestone", 0, floorGroup);
      tile.anchor.set(0.5, 0);
      this.roadTiles.push({
        x: x,
        y: 640
      });
    }
    for (let y = 640; y >= 256; y -= 64) {
      let tile = game.add.isoSprite(576, y, 0, "cobblestone", 0, floorGroup);
      tile.anchor.set(0.5, 0);
      this.roadTiles.push({
        x: 576,
        y: y
      });
    }
    for (let x = 640; x <= 896; x += 64) {
      let tile = game.add.isoSprite(x, 448, 0, "cobblestone", 0, floorGroup);
      tile.anchor.set(0.5, 0);
      this.roadTiles.push({
        x: x,
        y: 448
      });
    }
    for (let x = 512; x >= 256; x -= 64) {
      let tile = game.add.isoSprite(x, 256, 0, "cobblestone", 0, floorGroup);
      tile.anchor.set(0.5, 0);
      this.roadTiles.push({
        x: x,
        y: 256
      });
    }
    for (let y = 192; y >= 0; y -= 64) {
      let tile = game.add.isoSprite(448, y, 0, "cobblestone", 0, floorGroup);
      tile.anchor.set(0.5, 0);
      this.roadTiles.push({
        x: 448,
        y: y
      });
    }
    for (let y = 320; y <= 640; y += 64) {
      let tile = game.add.isoSprite(256, y, 0, "cobblestone", 0, floorGroup);
      tile.anchor.set(0.5, 0);
      this.roadTiles.push({
        x: 256,
        y: y
      });
    }
    for (let x = 448; x >= 320; x -= 64) {
      let tile = game.add.isoSprite(x, 640, 0, "cobblestone", 0, floorGroup);
      tile.anchor.set(0.5, 0);
      this.roadTiles.push({
        x: x,
        y: 640
      });
    }
    for (let x = 192; x >= 0; x -= 64) {
      let tile = game.add.isoSprite(x, 448, 0, "cobblestone", 0, floorGroup);
      tile.anchor.set(0.5, 0);
      this.roadTiles.push({
        x: x,
        y: 448
      });
    }

    this.townStuff.push(game.add.isoSprite(-150, 700, 0, "hut", 0, floorGroup));
    this.townStuff.push(game.add.isoSprite(-480, -210, 0, "building", 0, floorGroup));
    this.townStuff.push(game.add.isoSprite(-30, 0, 0, "hut", 0, floorGroup));
    this.townStuff.push(game.add.isoSprite(250, 400, 0, "well", 0, floorGroup));
    this.townStuff.push(game.add.isoSprite(360, 0, 0, "hut", 0, floorGroup));
    this.townStuff.push(game.add.isoSprite(540, 0, 0, "hut", 0, floorGroup));
    this.townStuff.push(game.add.isoSprite(540, 700, 0, "hut", 0, floorGroup));

    this.townStuff.push(game.add.isoSprite(384, 320, 0, "npcPotionVendor", 0, npcGroup));
    this.townStuff.push(game.add.isoSprite(512, 192, 0, "npcRuneVendor", 0, npcGroup));
    this.townStuff.push(game.add.isoSprite(64, 192, 0, "npcTeacher", 0, npcGroup));
    this.townStuff.push(game.add.isoSprite(128, 640, 0, "npcStudent", 0, npcGroup));

    for (var i = 7; i < 11; i++) {
      this.townStuff[i].inputEnabled = true;
    }
    this.townStuff[7].events.onInputDown.add(this.listenerBuyer, this);
    this.townStuff[8].events.onInputDown.add(this.listenerPotionVendor, this);
    this.townStuff[9].events.onInputDown.add(this.listenerTeacher, this);
    this.townStuff[10].events.onInputDown.add(this.listenerHintVendor, this);

    let townName = world.townNameAndQuestionsAndHints(this.col, this.row).name;
    this.townStuff.push(game.add.text(640, 50, townName, {
      font: "80px Old English Text MT",
      fill: "#FFFF00"
    }));
    this.townStuff[11].alpha = 0.8;
    this.townStuff[11].anchor.set(0.5, 0.5);
    this.townStuff[11].fixedToCamera = true;
  }

  updateTilesEnemiesAndObstacles() {
    this.fogOfWar = game.add.isoSprite(485, 480, 0, this.tileType + "FogOfWar", 0, floorGroup);
    this.fogOfWar.anchor.set(0.5, 0.5);
    for (var x = 0; x < 15; x++) {
      for (var y = 0; y < 15; y++) {
        let distance = Math.hypot(player.sprite.body.x - x * 64, player.sprite.body.y - y * 64);
        if (distance <= 256) {
          let tile = game.add.isoSprite(x * 64, y * 64, 0, this.tileType, 0, floorGroup);
          tile.anchor.set(0.5, 0);
        }
      }
    }

    for (let i = 0; i < this.enemies.length; i++) {
      let distance = Math.hypot(player.sprite.body.x - this.enemies[i].sprite.body.x, player.sprite.body.y - this.enemies[i].sprite.body.y);
      this.enemies[i].setVisible(distance <= 256);
      if (this.enemies[i].ice) {
        this.enemies[i].ice.visible = distance <= 256;
      }
    }

    for (let i = 0; i < this.obstacles.length; i++) {
      let distance = Math.hypot(player.sprite.body.x - this.obstacles[i].body.x, player.sprite.body.y - this.obstacles[i].body.y);
      this.obstacles[i].visible = distance <= 256;

    }
  }

  spawnObstacles() {
    let numberOfObstacles = 16;
    if (this.kind == "forest") {
      numberOfObstacles = 48;
    }
    for (let i = 0; i < numberOfObstacles; i++) {
      let x = Math.ceil(Math.random() * 13) * 64;
      let y = Math.ceil(Math.random() * 13) * 64;
      let kind = Math.ceil(Math.random() * 3);
      if (this.kind == "forest") {
        this.obstacles.push(game.add.isoSprite(x, y, 20, "bush" + kind, 0, obstacleGroup));
      } else {
        this.obstacles.push(game.add.isoSprite(x, y, 10, "cactus", 0, obstacleGroup));
      }

      game.physics.isoArcade.enable(this.obstacles[i]);
      this.obstacles[i].anchor.set(0.5, 0);
    }
  }

  spawnEnemies() {
    if (this.kind == "forest") {
      this.enemyKind.push("forestSnake");
      this.enemyKind.push("spider");
    }
    if (this.kind == "desert") {
      this.enemyKind.push("desertSnake");
      this.enemyKind.push("scorpion");
    }
    if (this.kind == "countryside") {
      this.enemyKind.push("rabbit");
      this.enemyKind.push("frog");
    }

    for (let i = 0; i < 6; i++) {
      let x = Math.floor((Math.random() * 15)) * 64;
      let y = Math.floor((Math.random() * 15)) * 64;
      let distance = Math.hypot(player.sprite.body.x - x, player.sprite.body.y - y);
      if (distance >= 320 && this.checkForEnemiesAndObstacles(x, y)) {
        if (i < 3) {
          this.enemies.push(new Enemy(this.enemyKind[0], x, y));
        } else {
          this.enemies.push(new Enemy(this.enemyKind[1], x, y));
        }

      } else {
        i--;
      }
    }
  }

  checkForEnemiesAndObstacles(x, y) {
    for (let i = 0; i < this.enemies.length; i++) {
      if (this.enemies[i].sprite.body.x == x && this.enemies[i].sprite.body.y == y) {
        return false;
      }
    }

    for (let i = 0; i < this.obstacles.length; i++) {
      if (this.obstacles[i].body.x == x && this.obstacles[i].body.y == y) {
        return false;
      }
    }

    if (this.kind == "town") {
      for (var i = 0; i < this.roadTiles.length; i++) {
        if (x == this.roadTiles[i].x && y == this.roadTiles[i].y) {
          return true;
        }
      }
      return false;
    }

    return true;
  }

  reset() {
    if (this.fogOfWar) {
      console.log("fogOfWar!");
      this.fogOfWar.destroy();
    }
    for (let i = 0; i < this.portals.length; i++) {
      this.portals[i].sprite.destroy();
    }
    for (let i = 0; i < this.obstacles.length; i++) {
      this.obstacles[i].destroy();
    }
    for (let i = 0; i < this.enemies.length; i++) {
      this.enemies[i].destroy();
    }
    for (let i = 0; i < this.townStuff.length; i++) {
      this.townStuff[i].destroy();
    }
  }

  // Listeners do professor

  listenerTeacher() {
    if (player.turn == null || player.turn == "npcTeacher") {
      player.turn = "npcTeacher";
      let bmd = game.add.bitmapData(600, 260);
      bmd.ctx.fillStyle = "#000";
      bmd.ctx.beginPath();
      bmd.ctx.rect(0, 0, 600, 260);
      bmd.ctx.fill();
      this.panelTeacher = game.add.sprite(350, 100, bmd);
      this.panelTeacher.alpha = 0.5;
      this.panelTeacher.fixedToCamera = true;

      this.questionText = game.add.text(370, 120, this.questions[this.questionIndex].text, {
        font: "32px Arial",
        fill: "#FFFF00"
      });
      this.questionText.fixedToCamera = true;

      this.inputAnswer = game.add.inputField(370, 200, {
        font: '32px Arial',
        fill: '#000000',
        fontWeight: 'bold',
        width: 540,
        padding: 8,
        borderWidth: 1,
        borderColor: '#000',
        borderRadius: 6,
        placeHolder: 'Resposta',
        placeHolderColor: '#00FF00'
      });
      this.inputAnswer.fixedToCamera = true;
      this.inputAnswer.startFocus();

      this.okText = game.add.text(920, 260, "Ok", {
        font: "32px Arial",
        fill: "#00FF00"
      });
      this.okText.anchor.set(1, 0);
      this.okText.fixedToCamera = true;
      this.okText.inputEnabled = true;
      this.okText.events.onInputDown.add(this.listenerTeacherOk, this);
      this.okText.events.onInputOver.add(this.listenerOkOver, this);
      this.okText.events.onInputOut.add(this.listenerOkOut, this);

      this.cancelText = game.add.text(920, 300, "Cancelar", {
        font: "32px Arial",
        fill: "#FF0000"
      });
      this.cancelText.anchor.set(1, 0);
      this.cancelText.fixedToCamera = true;
      this.cancelText.inputEnabled = true;
      this.cancelText.events.onInputDown.add(this.listenerTeacherCancel, this);
      this.cancelText.events.onInputOver.add(this.listenerCancelOver, this);
      this.cancelText.events.onInputOut.add(this.listenerCancelOut, this);
    }

  }

  listenerTeacherOk() {
    this.panelTeacher.visible = false;
    this.questionText.visible = false;
    this.inputAnswer.visible = false;
    this.okText.visible = false;
    this.cancelText.visible = false;
    let answer = this.inputAnswer.text._text;
    let rightAnswers = [];
    for (var i = 0; i < this.questions[this.questionIndex].answers.length; i++) {
      rightAnswers.push(this.questions[this.questionIndex].answers[i].text);
    }
    let bmd = game.add.bitmapData(600, 170);
    bmd.ctx.fillStyle = "#000";
    bmd.ctx.beginPath();
    bmd.ctx.rect(0, 0, 600, 170);
    bmd.ctx.fill();
    this.panelResult = game.add.sprite(350, 180, bmd);
    this.panelResult.alpha = 0.5;
    this.panelResult.fixedToCamera = true;

    this.resultText = game.add.text(370, 200, "", {
      font: "32px Arial",
      fill: "#FFFF00"
    });
    this.resultText.fixedToCamera = true;

    if (rightAnswers.indexOf(answer) != -1) {
      this.resultText.text = "Resposta correta, parabéns";
      this.okText = game.add.text(920, 260, "Ok", {
        font: "32px Arial",
        fill: "#00FF00"
      });
      this.okText.anchor.set(1, 0);
      this.okText.fixedToCamera = true;
      this.okText.inputEnabled = true;
      this.okText.events.onInputDown.add(this.listenerRightAnswerOk, this);
      this.okText.events.onInputOver.add(this.listenerOkOver, this);
      this.okText.events.onInputOut.add(this.listenerOkOut, this);
    } else {
      this.resultText.text = "Resposta não registrada.\nDeseja contestar?";
      this.yesText = game.add.text(920, 260, "Sim", {
        font: "32px Arial",
        fill: "#00FF00"
      });
      this.yesText.anchor.set(1, 0);
      this.yesText.fixedToCamera = true;
      this.yesText.inputEnabled = true;
      this.yesText.events.onInputDown.add(this.listenerTeacherYes, this);
      this.yesText.events.onInputOver.add(this.listenerYesOver, this);
      this.yesText.events.onInputOut.add(this.listenerYesOut, this);

      this.noText = game.add.text(920, 300, "Não", {
        font: "32px Arial",
        fill: "#FF0000"
      });
      this.noText.anchor.set(1, 0);
      this.noText.fixedToCamera = true;
      this.noText.inputEnabled = true;
      this.noText.events.onInputDown.add(this.listenerTeacherNo, this);
      this.noText.events.onInputOver.add(this.listenerNoOver, this);
      this.noText.events.onInputOut.add(this.listenerNoOut, this);
    }
    this.questionIndex++;
    if (this.questionIndex == this.questions.length) {
      this.questionIndex = 0;
    }
    this.questionText.text = this.questions[this.questionIndex].text;
    this.inputAnswer.setText("");
    this.inputAnswer.startFocus();
  }

  listenerTeacherCancel() {
    this.panelTeacher.destroy();
    this.questionText.destroy();
    this.inputAnswer.destroy();
    this.okText.destroy();
    this.cancelText.destroy();
    player.turn = null;
  }

  listenerRightAnswerOk() {
    this.panelResult.destroy();
    this.resultText.destroy();
    this.okText.events.onInputDown.add(this.listenerTeacherOk, this);
    this.panelTeacher.visible = true;
    this.questionText.visible = true;
    this.inputAnswer.visible = true;
    this.cancelText.visible = true;
  }

  listenerTeacherYes() {
    this.panelResult.destroy();
    this.resultText.destroy();
    this.yesText.destroy();
    this.noText.destroy();
    this.panelTeacher.visible = true;
    this.questionText.visible = true;
    this.inputAnswer.visible = true;
    this.okText.visible = true;
    this.cancelText.visible = true;
  }

  listenerTeacherNo() {
    this.panelResult.destroy();
    this.resultText.destroy();
    this.yesText.destroy();
    this.noText.destroy();
    this.panelTeacher.visible = true;
    this.questionText.visible = true;
    this.inputAnswer.visible = true;
    this.okText.visible = true;
    this.cancelText.visible = true;
  }

  // Listeners do vendedor de poções

  listenerPotionVendor() {
    if (player.turn == null || player.turn == "npcPotionVendor") {
      player.turn = "npcPotionVendor";
      let bmd = game.add.bitmapData(600, 320);
      bmd.ctx.fillStyle = "#000";
      bmd.ctx.beginPath();
      bmd.ctx.rect(0, 0, 600, 320);
      bmd.ctx.fill();
      this.panelPotionVendor = game.add.sprite(350, 100, bmd);
      this.panelPotionVendor.alpha = 0.5;
      this.panelPotionVendor.fixedToCamera = true;

      this.greetingsText = game.add.text(370, 120, "Olá, eu vendo poções de vida e mana\n" +
        "aos aventureiros que passam por aqui.\nVocê gostaria de comprar alguma?", {
          font: "32px Arial",
          fill: "#FFFF00"
        });
      this.greetingsText.fixedToCamera = true;

      this.mpSprite = game.add.sprite(370, 260, "mp");
      this.mpSprite.fixedToCamera = true;
      this.mpMinusText = game.add.text(410, 265, "-", {
        font: "32px Arial",
        fill: "#FFFF00"
      });
      this.mpMinusText.fixedToCamera = true;
      this.mpText = game.add.text(430, 270, "0", {
        font: "24px Arial",
        fill: "#FFFF00"
      });
      this.mpText.fixedToCamera = true;
      this.mpPlusText = game.add.text(450, 265, "+", {
        font: "32px Arial",
        fill: "#FFFF00"
      });
      this.mpPlusText.fixedToCamera = true;

      this.hpSprite = game.add.sprite(370, 300, "hp");
      this.hpSprite.fixedToCamera = true;
      this.hpMinusText = game.add.text(410, 305, "-", {
        font: "32px Arial",
        fill: "#FFFF00"
      });
      this.hpMinusText.fixedToCamera = true;
      this.hpText = game.add.text(430, 310, "0", {
        font: "24px Arial",
        fill: "#FFFF00"
      });
      this.hpPlusText = game.add.text(450, 305, "+", {
        font: "32px Arial",
        fill: "#FFFF00"
      });
      this.hpPlusText.fixedToCamera = true;

      this.hpText.fixedToCamera = true;
      this.totalText = game.add.text(370, 350, "Total 0", {
        font: "24px Arial",
        fill: "#FFFF00"
      });
      this.totalText.fixedToCamera = true;

      this.okText = game.add.text(880, 360, "Ok", {
        font: "32px Arial",
        fill: "#00FF00"
      });
      this.okText.fixedToCamera = true;
      this.okText.inputEnabled = true;
      this.okText.events.onInputDown.add(this.listenerPotionVendorOk, this);
      this.okText.events.onInputOver.add(this.listenerOkOver, this);
      this.okText.events.onInputOut.add(this.listenerOkOut, this);

      this.cancelText = game.add.text(720, 360, "Cancelar", {
        font: "32px Arial",
        fill: "#FF0000"
      });
      this.cancelText.fixedToCamera = true;
      this.cancelText.inputEnabled = true;
      this.cancelText.events.onInputDown.add(this.listenerPotionVendorCancel, this);
      this.cancelText.events.onInputOver.add(this.listenerCancelOver, this);
      this.cancelText.events.onInputOut.add(this.listenerCancelOut, this);

      this.mpMinusText.inputEnabled = true;
      this.mpPlusText.inputEnabled = true;
      this.hpMinusText.inputEnabled = true;
      this.hpPlusText.inputEnabled = true;

      this.mpMinusText.events.onInputDown.add(this.listenerPotionVendorMpMinus, this);
      this.mpPlusText.events.onInputDown.add(this.listenerPotionVendorMpPlus, this);
      this.hpMinusText.events.onInputDown.add(this.listenerPotionVendorHpMinus, this);
      this.hpPlusText.events.onInputDown.add(this.listenerPotionVendorHpPlus, this);
    }


  }

  listenerPotionVendorOk() {
    player.buyStuff(Number(this.mpText.text), Number(this.hpText.text));
    this.panelPotionVendor.destroy();
    this.greetingsText.destroy();
    this.hpSprite.destroy();
    this.mpSprite.destroy();
    this.mpMinusText.destroy();
    this.mpText.destroy();
    this.mpPlusText.destroy();
    this.hpMinusText.destroy();
    this.hpText.destroy();
    this.hpPlusText.destroy();
    this.totalText.destroy();
    this.okText.destroy();
    this.cancelText.destroy();
    player.turn = null;
  }

  listenerPotionVendorCancel() {
    this.panelPotionVendor.destroy();
    this.greetingsText.destroy();
    this.hpSprite.destroy();
    this.mpSprite.destroy();
    this.mpMinusText.destroy();
    this.mpText.destroy();
    this.mpPlusText.destroy();
    this.hpMinusText.destroy();
    this.hpText.destroy();
    this.hpPlusText.destroy();
    this.totalText.destroy();
    this.okText.destroy();
    this.cancelText.destroy();
    player.turn = null;
  }

  listenerPotionVendorMpMinus() {
    let manaPotions = Number(this.mpText.text);
    let healthPotions = Number(this.hpText.text);
    if (manaPotions > 0) {
      manaPotions--;
      this.mpText.text = (manaPotions).toString();
      let total = (manaPotions + healthPotions) * 30;
      this.totalText.text = "Total " + total.toString();
    }
  }

  listenerPotionVendorMpPlus() {
    let manaPotions = Number(this.mpText.text);
    let healthPotions = Number(this.hpText.text);
    if (manaPotions < 9 && (healthPotions + manaPotions + 1) * 30 <= player.gold) {
      manaPotions++;
      this.mpText.text = (manaPotions).toString();
      let total = (manaPotions + healthPotions) * 30;
      this.totalText.text = "Total " + total.toString();
    }
  }

  listenerPotionVendorHpMinus() {
    let manaPotions = Number(this.mpText.text);
    let healthPotions = Number(this.hpText.text);
    if (healthPotions > 0) {
      healthPotions--;
      this.hpText.text = (healthPotions).toString();
      let total = (manaPotions + healthPotions) * 30;
      this.totalText.text = "Total " + total.toString();
    }
  }

  listenerPotionVendorHpPlus() {
    let manaPotions = Number(this.mpText.text);
    let healthPotions = Number(this.hpText.text);
    if (healthPotions < 9 && (healthPotions + manaPotions + 1) * 30 <= player.gold) {
      healthPotions++;
      this.hpText.text = (healthPotions).toString();
      let total = (manaPotions + healthPotions) * 30;
      this.totalText.text = "Total " + total.toString();
    }
  }

  // Listeners do comprador de itens

  listenerBuyer() {
    if (player.turn == null || player.turn == "npcBuyer") {
      player.turn = "npcBuyer";
      let bmd = game.add.bitmapData(600, 240);
      bmd.ctx.fillStyle = "#000";
      bmd.ctx.beginPath();
      bmd.ctx.rect(0, 0, 600, 240);
      bmd.ctx.fill();
      this.panelBuyer = game.add.sprite(350, 100, bmd);
      this.panelBuyer.alpha = 0.5;
      this.panelBuyer.fixedToCamera = true;

      this.greetingsText = game.add.text(370, 120, "Olá, eu compro itens dos aventureiros\n" +
        "que passam por aqui.\nVocê gostaria de vender os itens de sua\n" +
        "mochila?", {
          font: "32px Arial",
          fill: "#FFFF00"
        });
      this.greetingsText.fixedToCamera = true;

      this.okText = game.add.text(880, 280, "Ok", {
        font: "32px Arial",
        fill: "#00FF00"
      });
      this.okText.fixedToCamera = true;
      this.okText.inputEnabled = true;
      this.okText.events.onInputDown.add(this.listenerBuyerOk, this);
      this.okText.events.onInputOver.add(this.listenerOkOver, this);
      this.okText.events.onInputOut.add(this.listenerOkOut, this);
    }
  }

  listenerBuyerOk() {
    player.sellStuff();
    this.panelBuyer.destroy();
    this.greetingsText.destroy();
    this.okText.destroy();
    player.turn = null;
  }

  // Listeners do vendedor de dicas

  listenerHintVendor() {
    if (player.turn == null || player.turn == "npcHintVendor") {
      player.turn = "npcHintVendor";
      let bmd = game.add.bitmapData(600, 240);
      bmd.ctx.fillStyle = "#000";
      bmd.ctx.beginPath();
      bmd.ctx.rect(0, 0, 600, 240);
      bmd.ctx.fill();
      this.panelHintVendor = game.add.sprite(350, 100, bmd);
      this.panelHintVendor.alpha = 0.5;
      this.panelHintVendor.fixedToCamera = true;

      this.greetingsText = game.add.text(370, 120, "Olá, eu vendo preciosos pergaminhos\naos aventureiros " +
        "que vêm a esta cidade.\nVocê gostaria de comprar algum?", {
          font: "32px Arial",
          fill: "#FFFF00"
        });
      this.greetingsText.fixedToCamera = true;

      this.okText = game.add.text(880, 280, "Ok", {
        font: "32px Arial",
        fill: "#00FF00"
      });
      this.okText.fixedToCamera = true;
      this.okText.inputEnabled = true;
      this.okText.events.onInputDown.add(this.listenerHintVendorOk, this);
      this.okText.events.onInputOver.add(this.listenerOkOver, this);
      this.okText.events.onInputOut.add(this.listenerOkOut, this);

      this.cancelText = game.add.text(720, 280, "Cancelar", {
        font: "32px Arial",
        fill: "#FF0000"
      });
      this.cancelText.fixedToCamera = true;
      this.cancelText.inputEnabled = true;
      this.cancelText.events.onInputDown.add(this.listenerHintVendorCancel, this);
      this.cancelText.events.onInputOver.add(this.listenerCancelOver, this);
      this.cancelText.events.onInputOut.add(this.listenerCancelOut, this);
    }
  }

  listenerHintVendorOk() {
    this.panelHintVendor.destroy();
    this.greetingsText.destroy();
    this.okText.destroy();
    this.cancelText.destroy();
    player.turn = null;
  }

  listenerHintVendorCancel() {
    this.panelHintVendor.destroy();
    this.greetingsText.destroy();
    this.okText.destroy();
    this.cancelText.destroy();
    player.turn = null;
  }

  // Listeners de eventos Hover

  listenerOkOver() {
    this.okText.fill = "#FFFFFF";
  }

  listenerOkOut() {
    this.okText.fill = "#00FF00";
  }

  listenerCancelOver() {
    this.cancelText.fill = "#FFFFFF";
  }

  listenerCancelOut() {
    this.cancelText.fill = "#FF0000";
  }

  listenerYesOver() {
    this.yesText.fill = "#FFFFFF";
  }

  listenerYesOut() {
    this.yesText.fill = "#00FF00";
  }

  listenerNoOver() {
    this.noText.fill = "#FFFFFF";
  }

  listenerNoOut() {
    this.noText.fill = "#FF0000";
  }
}
