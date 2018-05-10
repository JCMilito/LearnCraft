var game = new Phaser.Game(1280, 600, Phaser.AUTO, "", {
  preload: preload,
  create: create,
  update: update
});

// ------------------------------------------------------------------------------
// ----------------------PRELOAD------------------------------------------------
// ------------------------------------------------------------------------------

function preload() {
  game.load.image("grass", "../images/grass.png");
  game.load.image("grassFogOfWar", "../images/grass_fog_of_war.png");
  game.load.image("forestGround", "../images/forest_ground.png");
  game.load.image("forestGroundFogOfWar", "../images/forest_ground_fog_of_war.png");
  game.load.image("sand", "../images/sand.png");
  game.load.image("sandFogOfWar", "../images/sand_fog_of_war.png");
  game.load.image("cobblestone", "../images/cobblestone.png");
  game.load.image("highlightTile", "../images/highlightTile.png");

  game.load.image("bush1", "../images/bush1.png");
  game.load.image("bush2", "../images/bush2.png");
  game.load.image("bush3", "../images/bush3.png");
  game.load.image("cactus", "../images/cactus.png");
  game.load.image("iceCube", "../images/ice_cube.png");

  game.load.image("building", "../images/building.png");
  game.load.image("hut", "../images/hut.png");
  game.load.image("well", "../images/well.png");

  game.load.image("playerScroll", "../images/player_scroll.png");
  game.load.image("mapScroll", "../images/map_scroll.png");

  game.load.image("npcPotionVendor", "../images/npc_potion_vendor.png");
  game.load.image("npcRuneVendor", "../images/npc_rune_vendor.png");
  game.load.image("npcStudent", "../images/npc_student.png");

  game.load.image("impact", "../images/impact.png");
  game.load.image("windRose", "../images/wind_rose.png");
  game.load.image("backpack", "../images/backpack.png");
  game.load.image("coin", "../images/coin.png");
  game.load.image("hp", "../images/hp.png");
  game.load.image("mp", "../images/mp.png");
  game.load.image("crabClaw", "../images/crab_claw.png");
  game.load.image("scorpionSting", "../images/scorpion_sting.png");
  game.load.image("snakeSting", "../images/snake_sting.png");
  game.load.image("spiderBody", "../images/spider_body.png");
  game.load.image("rabbitPaw", "../images/rabbit_paw.png");
  game.load.image("frogFoot", "../images/frog_foot.png");
  game.load.image("x", "../images/x.png");

  game.load.image("countrysideIcon", "../images/icon_countryside.jpg");
  game.load.image("desertIcon", "../images/icon_desert.jpg");
  game.load.image("forestIcon", "../images/icon_forest.jpg");
  game.load.image("townIcon", "../images/icon_town.png");
  game.load.image("waterIcon", "../images/icon_water.jpg");

  game.load.spritesheet("mage", "../spritesheets/mage.png", 128, 128);
  game.load.spritesheet("dragon", "../spritesheets/dragon.png", 64, 64);
  game.load.spritesheet("desertSnake", "../spritesheets/desert_snake.png", 48, 48);
  game.load.spritesheet("forestSnake", "../spritesheets/forest_snake.png", 48, 48);
  game.load.spritesheet("frog", "../spritesheets/frog.png", 72, 72);
  game.load.spritesheet("rabbit", "../spritesheets/rabbit.png", 72, 72);
  game.load.spritesheet("spider", "../spritesheets/spider.png", 64, 64);
  game.load.spritesheet("scorpion", "../spritesheets/scorpion.png", 64, 64);
  game.load.spritesheet("crab", "../spritesheets/crab.png", 72, 72);
  game.load.spritesheet("fireball", "../spritesheets/fireball.png", 48, 84);
  game.load.spritesheet("iceball", "../spritesheets/iceball.png", 48, 84);
  game.load.spritesheet("portal", "../spritesheets/portal.png", 96, 113);
  game.load.spritesheet("buttonFireball", "../spritesheets/button-fireball.png", 70, 70);
  game.load.spritesheet("buttonIceball", "../spritesheets/button-iceball.png", 70, 70);
  game.load.spritesheet("buttonTeleport", "../spritesheets/button-teleport.png", 70, 70);
  game.load.spritesheet("buttonHp", "../spritesheets/button-hp.png", 70, 70);
  game.load.spritesheet("buttonMp", "../spritesheets/button-mp.png", 70, 70);

  game.load.audio("spell", "../sfx/spell.ogg");
  game.load.audio("fireball", "../sfx/fireball.ogg");
  game.load.audio("teleport", "../sfx/teleport.ogg");
  game.load.audio("impact", "../sfx/impact.wav");
  game.load.audio("ice", "../sfx/ice.mp3");
  game.load.audio("death", "../sfx/death.mp3");

  game.time.advancedTiming = true;
  game.plugins.add(new Phaser.Plugin.Isometric(game));
  game.plugins.add(PhaserInput.Plugin);
  game.world.setBounds(0, 0, 3200, 3200);
  game.physics.startSystem(Phaser.Plugin.Isometric.ISOARCADE);
  game.iso.anchor.setTo(0.5, 0.5);
  cursors = game.input.keyboard.createCursorKeys();

}

// ------------------------------------------------------------------------------
// ----------------------CREATE--------------------------------------------------
// ------------------------------------------------------------------------------

var player;
var playerHealthBar, playerManaBar, playerHPText, playerMPText, playerLevelText;
var square;
var cursors, cursorPos;
var button1, button2, button3;
var floorGroup, obstacleGroup, enemyGroup, playerGroup;
var world;
var map = JSON.parse(localStorage.getItem("gameData"));
var scrolls = map.towns[0].hints;

function create() {
  console.log(map.enigma);
  let user = JSON.parse(localStorage.getItem("user"));
  let idPlayersOnGame = map.players;

  if (idPlayersOnGame.indexOf(user._id) == -1) {
    addPlayerToGame(user._id, map._id);
  }

  world = new World(map.contents, map.numberOfColumns, map.numberOfRows, map.towns);

  game.stage.backgroundColor = "000";

  floorGroup = game.add.group();
  obstacleGroup = game.add.group();
  npcGroup = game.add.group();
  enemyGroup = game.add.group();
  playerGroup = game.add.group();

  cursorPos = new Phaser.Plugin.Isometric.Point3();

  let startPointColumn = map.startPoint.column;
  let startPointRow = map.startPoint.row;
  player = new Mage(user.character.name, 448, 896, startPointColumn, startPointRow);

  square = new Square(world.squareContents(player.col, player.row));

  var windRose = game.add.sprite(20, 380, "windRose");
  windRose.fixedToCamera = true;

  this.downKey = game.input.keyboard.addKey(Phaser.Keyboard.S);
  this.upKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
  this.leftKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
  this.rightKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
  this.skill1Key = game.input.keyboard.addKey(Phaser.Keyboard.ONE);
  this.skill2Key = game.input.keyboard.addKey(Phaser.Keyboard.TWO);
  this.skill3Key = game.input.keyboard.addKey(Phaser.Keyboard.THREE);
  this.hpKey = game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
  this.mpKey = game.input.keyboard.addKey(Phaser.Keyboard.FIVE);
  this.characterKey = game.input.keyboard.addKey(Phaser.Keyboard.C);
  this.mapKey = game.input.keyboard.addKey(Phaser.Keyboard.M);
  this.enigmaKey = game.input.keyboard.addKey(Phaser.Keyboard.E);
  this.hintKey = game.input.keyboard.addKey(Phaser.Keyboard.P);
  this.previousKey = game.input.keyboard.addKey(Phaser.Keyboard.LEFT);
  this.nextKey = game.input.keyboard.addKey(Phaser.Keyboard.RIGHT);

  soundSpell = game.add.audio("spell");
  soundFireball = game.add.audio("fireball");
  soundTeleport = game.add.audio("teleport");
  soundImpact = game.add.audio("impact");
  soundIce = game.add.audio("ice");
  soundDeath = game.add.audio("death");

  createStatusPanel();

  button1 = game.add.button(450, 530, "buttonFireball", fireball, this, 2, 1, 0);
  button2 = game.add.button(530, 530, "buttonIceball", iceball, this, 2, 1, 0);
  button3 = game.add.button(610, 530, "buttonTeleport", teleport, this, 2, 1, 0);
  button4 = game.add.button(690, 530, "buttonHp", drinkHpPotion, this, 2, 1, 0);
  button5 = game.add.button(770, 530, "buttonMp", drinkMpPotion, this, 2, 1, 0);
  button1.fixedToCamera = true;
  button2.fixedToCamera = true;
  button3.fixedToCamera = true;
  button4.fixedToCamera = true;
  button5.fixedToCamera = true;

}


// ------------------------------------------------------------------------------
// ----------------------UPDATE--------------------------------------------------
// ------------------------------------------------------------------------------

var downKey, upKey, leftKey, rightKey;
var turn = "player";
var dX, dY;
var fireball;
var playerScroll, mapScroll, enigmaScroll, hintScroll;
var indexScroll;

function update() {

  //console.log(player.sprite.body.x + ", " + player.sprite.body.y);

  if (turn == "player") {
    // É a vez do jogador decidir o que vai fazer
    if (player.turn == null) {
      let x = player.sprite.body.x;
      let y = player.sprite.body.y;

      if (this.downKey.downDuration(1) && player.sprite.body.y < 896 && square.checkForEnemiesAndObstacles(x, y + 64)) {
        player.turn = "down";
        player.y0 = player.sprite.body.y;
      }

      if (this.upKey.downDuration(1) && player.sprite.body.y > 0 && square.checkForEnemiesAndObstacles(x, y - 64)) {
        player.turn = "up";
        player.y0 = player.sprite.body.y;
      }

      if (this.leftKey.downDuration(1) && player.sprite.body.x > 0 && square.checkForEnemiesAndObstacles(x - 64, y)) {
        player.turn = "left";
        player.x0 = player.sprite.body.x;
      }

      if (this.rightKey.downDuration(1) && player.sprite.body.x < 896 && square.checkForEnemiesAndObstacles(x + 64, y)) {
        player.turn = "right";
        player.x0 = player.sprite.body.x;
      }

      if (this.skill1Key.downDuration(1) && player.mp >= 80 && square.kind != "town") {
        soundSpell.play();
        player.skill = 1;
        player.sprite.animations.play(player.direction + "Casting", true, false);
        player.sprite.events.onAnimationComplete.add(function() {
          player.sprite.animations.stop();
          player.turn = player.direction + "Casting";
        }, this);
      }

      if (this.skill2Key.downDuration(1) && player.mp >= 80 && square.kind != "town") {
        soundSpell.play();
        player.skill = 2;
        player.sprite.animations.play(player.direction + "Casting", true, false);
        player.sprite.events.onAnimationComplete.add(function() {
          player.sprite.animations.stop();
          player.turn = player.direction + "Casting";
        }, this);
      }

      if (this.skill3Key.downDuration(1) && player.mp >= 100) {
        soundSpell.play();
        player.skill = 3;
        player.sprite.animations.play(player.direction + "Casting", true, false);
        player.sprite.events.onAnimationComplete.add(function() {
          player.sprite.animations.stop();
          player.turn = player.direction + "Casting";
        }, this);
      }

      if (this.hpKey.downDuration(1)) {
        player.drinkHpPotion();
        turn = "enemies";
      }

      if (this.mpKey.downDuration(1)) {
        player.drinkMpPotion();
        turn = "enemies";
      }

      if (this.characterKey.downDuration(1)) {
        game.time.events.add(Phaser.Timer.SECOND * 0.1, showPlayerScroll, this);
      }

      if (this.mapKey.downDuration(1)) {
        game.time.events.add(Phaser.Timer.SECOND * 0.1, showMap, this);
      }

      if (this.enigmaKey.downDuration(1)) {
        game.time.events.add(Phaser.Timer.SECOND * 0.1, showEnigma, this);
      }

      if (this.hintKey.downDuration(1)) {
        game.time.events.add(Phaser.Timer.SECOND * 0.1, showHint, this);
      }
    }

    //É a vez do jogador realizar o que decidiu fazer anteriormente
    if (player.turn == "down") {
      player.sprite.animations.play("down");
      if (player.sprite.body.y < player.y0 + 64) {
        player.sprite.body.y += 1;
      } else {
        player.sprite.animations.stop();
        player.direction = player.turn;
        player.turn = null;
        if (square.kind != "town") {
          square.updateTilesEnemiesAndObstacles();
        }
        turn = "enemies";
      }
    }

    if (player.turn == "up") {
      player.sprite.animations.play("up");
      if (player.sprite.body.y > player.y0 - 64) {
        player.sprite.body.y -= 1;
      } else {
        player.sprite.animations.stop();
        player.direction = player.turn;
        player.turn = null;
        if (square.kind != "town") {
          square.updateTilesEnemiesAndObstacles();
        }
        turn = "enemies";
      }
    }

    if (player.turn == "left") {
      player.sprite.animations.play("left");
      if (player.sprite.body.x > player.x0 - 64) {
        player.sprite.body.x -= 1;
      } else {
        player.sprite.animations.stop();
        player.direction = player.turn;
        player.turn = null;
        if (square.kind != "town") {
          square.updateTilesEnemiesAndObstacles();
        }
        turn = "enemies";
      }
    }

    if (player.turn == "right") {
      player.sprite.animations.play("right");
      if (player.sprite.body.x < player.x0 + 64) {
        player.sprite.body.x += 1;
      } else {
        player.sprite.animations.stop();
        player.direction = player.turn;
        player.turn = null;
        if (square.kind != "town") {
          square.updateTilesEnemiesAndObstacles();
        }
        turn = "enemies";
      }
    }

    if (player.turn == "fireball") {
      fireball.animations.play("fall");
      if (fireball.body.z == 150) {
        fireball.play();
      }
      if (fireball.body.z > 0) {
        fireball.body.z -= 3;
      } else {
        fireball.animations.stop();
        for (let i = 0; i < square.enemies.length; i++) {
          if (fireball.body.x == square.enemies[i].sprite.body.x && fireball.body.y == square.enemies[i].sprite.body.y) {
            soundImpact.play();
            impact = game.add.isoSprite(fireball.body.x - 32, fireball.body.y, 0, "impact", 0, enemyGroup);
            impact.lifespan = 500;
            let damage = player.intelligence * 3 + Math.ceil(Math.random() * 20) + Math.ceil(Math.random() * 20);
            square.enemies[i].changeHP(damage);
            // O inimigo morreu; criemos um novo em seu lugar
            if (square.enemies[i].hp <= 0) {
              square.enemies[i].destroy();
              player.xp += 30;
              updateStatusPanel();
              if (square.enemies[i].ice != null) {
                square.enemies[i].ice.destroy();
              }
              player.addItemToBackpack(square.enemies[i].loot);
              for (let goodCoordinates = false; !goodCoordinates;) {
                let x = Math.floor((Math.random() * 15)) * 64;
                let y = Math.floor((Math.random() * 15)) * 64;
                distance = Math.hypot(player.sprite.body.x - x, player.sprite.body.y - y);
                if (distance >= 320 && square.checkForEnemiesAndObstacles(x, y)) {
                  goodCoordinates = true;
                  square.enemies[i] = new Enemy(square.enemies[i].kind, x, y);
                }
              }
            }
          }
        }
        fireball.destroy();
        player.turn = null;
        turn = "enemies";
      }
    }

    if (player.turn == "iceball") {
      iceball.animations.play("fall");
      if (iceball.body.z == 150) {
        iceball.play();
      }
      if (iceball.body.z > 0) {
        iceball.body.z -= 3;
      } else {
        iceball.animations.stop();
        for (let i = 0; i < square.enemies.length; i++) {
          if (iceball.body.x == square.enemies[i].sprite.body.x && iceball.body.y == square.enemies[i].sprite.body.y) {
            soundIce.play();
            square.enemies[i].frozen = 4;
            square.enemies[i].ice = game.add.isoSprite(square.enemies[i].sprite.body.x, square.enemies[i].sprite.body.y, 0, "iceCube", 0, enemyGroup);
            square.enemies[i].ice.anchor.set(0.5, 0.3);
          }
        }
        iceball.destroy();
        player.turn = null;
        turn = "enemies";
      }
    }

    if (player.turn != null && player.turn.endsWith("Casting")) {
      game.iso.unproject(game.input.activePointer.position, cursorPos);
      let dX = Math.floor(cursorPos.x / 64 + 0.08) + 31;
      let dY = Math.floor(cursorPos.y / 64 + 0.3) + 14;
      let x = player.sprite.body.x + dX * 64;
      let y = player.sprite.body.y + dY * 64;

      if (Math.ceil(Math.hypot(dX, dY)) <= 4 && x >= 0 && x <= 896 && y >= 0 && y <= 896 && (dX != 0 || dY != 0)) {
        if (player.skill == 1 || player.skill == 2 || (square.checkForEnemiesAndObstacles(x, y) && player.skill == 3)) {
          highlightTile = game.add.isoSprite(x, y, 0, "highlightTile", 0, floorGroup);
          highlightTile.lifespan = 1;
          highlightTile.anchor.set(0.5, 0);
        }
        if (game.input.mousePointer.isDown) {
          if (player.skill == 1) {
            soundFireball.play();
            player.updateMP(-80);
            fireball = game.add.isoSprite(x, y, 150, "fireball", 0, enemyGroup);
            fireball.animations.add("fall", [0, 1, 2, 3, 4], 10, true);
            game.physics.isoArcade.enable(fireball);
            fireball.anchor.set(0.5, 0.7);
            player.turn = "fireball";
          }
          if (player.skill == 2) {
            soundFireball.play();
            player.updateMP(-80);
            iceball = game.add.isoSprite(x, y, 150, "iceball", 0, enemyGroup);
            iceball.animations.add("fall", [0, 1, 2, 3, 4], 10, true);
            game.physics.isoArcade.enable(iceball);
            iceball.anchor.set(0.5, 0.7);
            player.turn = "iceball";
          }
          if (player.skill == 3) {
            if (square.checkForEnemiesAndObstacles(x, y)) {
              soundTeleport.play();
              player.updateMP(-100);
              player.sprite.body.x = x;
              player.sprite.body.y = y;
              player.turn = null;
              if (square.kind != "town") {
                square.updateTilesEnemiesAndObstacles();
                turn = "enemies";
              }
            }
          }
        }
      }
    }

    // É a vez do jogador verificar seus atributos
    if (player.turn == "characterCheck") {
      if (this.characterKey.downDuration(1)) {
        playerDataText.name.destroy();
        playerDataText.attributes.destroy();
        playerScroll.destroy();
        player.turn = null;
      }
    }

    if (player.turn == "enigmaCheck") {
      if (this.enigmaKey.downDuration(1)) {
        enigmaText.destroy();
        enigmaScroll.destroy();
        player.turn = null;
      }
    }

    if (player.turn == "hintCheck") {
      if (this.hintKey.downDuration(1)) {
        hintText.destroy();
        hintScroll.destroy();
        player.turn = null;
      }
      if (this.nextKey.downDuration(1)) {
        hintText.destroy();
        if (indexScroll < scrolls.length - 1) {
            indexScroll++;
        } else {
          indexScroll = 0;
        }
        hintText = game.add.text(480, 100, breakLines(scrolls[indexScroll], 18), {
          font: "30px Old English Text MT",
          fill: "#000"
        });
        hintText.fixedToCamera = true;
      }
    }
    if (this.previousKey.downDuration(1)) {
      hintText.destroy();
      if (indexScroll > 0) {
          indexScroll--;
      } else {
        indexScroll = scrolls.length - 1;
      }
      hintText = game.add.text(480, 100, breakLines(scrolls[indexScroll], 18), {
        font: "30px Old English Text MT",
        fill: "#000"
      });
      hintText.fixedToCamera = true;
    }


    if (player.turn == "mapCheck") {
      if (this.mapKey.downDuration(1)) {
        mapScroll.destroy();
        for (let i = 0; i < mapContents.length; i++) {
          mapContents[i].destroy();
        }
        for (let i = 0; i < cityNumbers.length; i++) {
          cityNumbers[i].destroy();
        }
        textCities.destroy();
        marker.destroy();
        player.turn = null;
      }
    }

    if(player.turn && player.turn.startsWith("enter")) {
      if(player.turn.endsWith("North")) {
        player.sprite.body.y = 896;
      }
      if(player.turn.endsWith("South")) {
        player.sprite.body.y = 0;
      }
      if(player.turn.endsWith("East")) {
        player.sprite.body.x = 0;
      }
      if(player.turn.endsWith("West")) {
        player.sprite.body.x = 896;
      }
      if (square.kind != "town") {
        square.updateTilesEnemiesAndObstacles();
      }
      player.turn = null;
    }
  }

  // É a vez dos inimigos decidirem o que farão
  enemiesTurn:
    if (turn == "enemies") {
      for (let i = 0; i < square.enemies.length; i++) {
        if (square.enemies[i].frozen > 0) {
          square.enemies[i].frozen--;
          if (square.enemies[i].frozen == 0) {
            square.enemies[i].ice.destroy();
            square.enemies[i].ice = null;
          }
        }
        let distance = Math.hypot(player.sprite.body.x - square.enemies[i].sprite.body.x, player.sprite.body.y - square.enemies[i].sprite.body.y);
        move: if (distance <= 256 && !square.enemies[i].done && square.enemies[i].frozen == 0) {
          square.enemies[i].movements++;

          // O inimigo estava ao lado, e golpeia...
          if (distance == 64) {
            if (square.enemies[i].movements < 3) {
              soundImpact.play();
              impact = game.add.isoSprite(player.sprite.body.x - 32, player.sprite.body.y, 0, "impact", 0, playerGroup);
              impact.lifespan = 500;
              let damage = -3 * square.enemies[i].strength - Math.ceil(Math.random() * 20) + player.dexterity;
              player.updateHP(damage);
              if (player.hp <= 0) {
                soundDeath.play();
                turn = "gameOver";
                break enemiesTurn;
              }
            } else {
              square.enemies[i].done = true;
            }
          } else {
            let x = square.enemies[i].sprite.body.x;
            let y = square.enemies[i].sprite.body.y;

            if (player.sprite.body.x > x && square.checkForEnemiesAndObstacles(x + 64, y)) {
              square.enemies[i].x0 = square.enemies[i].sprite.body.x;
              square.enemies[i].turn = "right";
              break move;
            }
            if (player.sprite.body.x < x && square.checkForEnemiesAndObstacles(x - 64, y)) {
              square.enemies[i].x0 = square.enemies[i].sprite.body.x;
              square.enemies[i].turn = "left";
              break move;
            }
            if (player.sprite.body.y > y && square.checkForEnemiesAndObstacles(x, y + 64)) {
              square.enemies[i].y0 = square.enemies[i].sprite.body.y;
              square.enemies[i].turn = "down";
              break move;
            }
            if (player.sprite.body.y < y && square.checkForEnemiesAndObstacles(x, y - 64)) {
              square.enemies[i].y0 = square.enemies[i].sprite.body.y;
              square.enemies[i].turn = "up";
              break move;
            }
            square.enemies[i].done = true;
            continue;
          }
        } else {
          square.enemies[i].done = true;
        }
      }

      turn = "enemiesMove";
    }

  // É a vez dos inimigos se movimentarem atrás de sua presa
  if (turn == "enemiesMove") {
    for (let i = 0; i < square.enemies.length; i++) {
      if (square.enemies[i].turn == "right") {
        square.enemies[i].sprite.animations.play("right");
        if (square.enemies[i].sprite.body.x < square.enemies[i].x0 + 64) {
          square.enemies[i].moveX(1);
        } else {
          square.enemies[i].sprite.animations.stop();
          square.enemies[i].sprite.frame = 7;
          square.enemies[i].turn = null;
          if (square.enemies[i].movements == 2) {
            square.enemies[i].done = true;
          }
        }
      }

      if (square.enemies[i].turn == "left") {
        square.enemies[i].sprite.animations.play("left");
        if (square.enemies[i].sprite.body.x > square.enemies[i].x0 - 64) {
          square.enemies[i].moveX(-1);
        } else {
          square.enemies[i].sprite.animations.stop();
          square.enemies[i].sprite.frame = 4;
          square.enemies[i].turn = null;
          if (square.enemies[i].movements == 2) {
            square.enemies[i].done = true;
          }
        }
      }

      if (square.enemies[i].turn == "down") {
        square.enemies[i].sprite.animations.play("down");
        if (square.enemies[i].sprite.body.y < square.enemies[i].y0 + 64) {
          square.enemies[i].moveY(1);
        } else {
          square.enemies[i].sprite.animations.stop();
          square.enemies[i].sprite.frame = 1;
          square.enemies[i].turn = null;
          if (square.enemies[i].movements == 2) {
            square.enemies[i].done = true;
          }
        }
      }

      if (square.enemies[i].turn == "up") {
        square.enemies[i].sprite.animations.play("up");
        if (square.enemies[i].sprite.body.y > square.enemies[i].y0 - 64) {
          square.enemies[i].moveY(-1);
        } else {
          square.enemies[i].sprite.frame = 10;
          square.enemies[i].sprite.animations.stop();
          square.enemies[i].turn = null;
          if (square.enemies[i].movements == 2) {
            square.enemies[i].done = true;
          }
        }
      }
    }

    let allEnemiesTurnNull = true;
    for (let i = 0; i < square.enemies.length; i++) {
      if (square.enemies[i].turn != null) {
        allEnemiesTurnNull = false;
      }
    }
    if (allEnemiesTurnNull) {
      turn = "enemies";
    }
  }

  // Os inimigos completaram seus movimentos, é hora de regenerar HP e MP
  // e tomar a próxima decisão
  if (verifyIfEnemiesAreDone()) {
    player.updateHP(player.constitution);
    player.updateMP(player.intelligence);
    turn = "player";
  }

  // Nosso herói sucumbiu aos poderes da natureza
  if (turn == "gameOver") {
    player.sprite.body.z = -10;
    player.sprite.animations.play("dying", true, false);
    player.sprite.events.onAnimationComplete.add(function() {
      player.sprite.animations.stop();
      turn = null;
    }, this);
  }
}

function createStatusPanel() {
  let bmd = game.add.bitmapData(250, 140);
  bmd.ctx.fillStyle = "#e0e0eb";
  bmd.ctx.beginPath();
  bmd.ctx.rect(0, 0, 250, 140);
  bmd.ctx.fill();
  panelPlayer = game.add.sprite(30, 30, bmd);
  panelPlayer.alpha = 0.1;
  panelPlayer.fixedToCamera = true;

  playerNameText = game.add.text(40, 40, player.name, {
    font: "40px Old English Text MT",
    fill: "#FFFF00"
  });
  playerNameText.fixedToCamera = true;

  playerHealthBar = new PlayerBar(40, 120, "#660000", "#006600");
  playerManaBar = new PlayerBar(40, 140, "#FFA500", "#000066");
  playerHPText = game.add.text(155, 120, player.hp + " / " + player.maxHp, {
    font: "12px Arial",
    fill: "#FFF"
  });
  playerHPText.anchor.set(0.5, 0);
  playerHPText.fixedToCamera = true;
  playerMPText = game.add.text(155, 140, player.mp + " / " + player.maxMp, {
    font: "12px Arial",
    fill: "#FFF"
  });
  playerMPText.anchor.set(0.5, 0);
  playerMPText.fixedToCamera = true;
}

function updateStatusPanel() {
  playerHealthBar.setPercent((player.hp / player.maxHp) * 100);
  playerManaBar.setPercent((player.mp / player.maxMp) * 100);
  playerHPText.setText(player.hp + " / " + player.maxHp);
  playerMPText.setText(player.mp + " / " + player.maxMp);
}

var playerDataText = {
  name: String,
  attributes: String
};

var enigmaText, hintText;

function showPlayerScroll() {
  player.turn = "characterCheck";
  playerScroll = game.add.sprite(400, 10, "playerScroll");
  playerScroll.fixedToCamera = true;
  playerDataText.name = game.add.text(490, 100, player.name, {
    font: "60px Old English Text MT",
    fill: "#F00"
  });
  playerDataText.name.fixedToCamera = true;
  playerDataText.attributes = game.add.text(490, 180,
    "Força " + player.strength +
    "\nInteligência " + player.intelligence +
    "\nDestreza " + player.dexterity +
    "\nConstituição " + player.constitution +
    "\nNível: " + player.level +
    "\nXP: " + player.xp, {
      font: "30px Old English Text MT",
      fill: "#000"
    }
  );
  playerDataText.attributes.fixedToCamera = true;
}

function showEnigma() {
  player.turn = "enigmaCheck";
  enigmaScroll = game.add.sprite(50, -100, "mapScroll");
  enigmaScroll.fixedToCamera = true;
  enigmaText = game.add.text(220, 40, breakLines(map.enigma, 60)
  , {
    font: "30px Old English Text MT",
    fill: "#000"
  });
  enigmaText.fixedToCamera = true;
}

function showHint() {
  let text = "";
  player.turn = "hintCheck";
  hintScroll = game.add.sprite(400, 10, "playerScroll");
  hintScroll.fixedToCamera = true;
  if (scrolls.length == 0) {
    text = "Nenhum pergaminho ainda no inventário."
  } else {
    indexScroll = 0;
    text = scrolls[indexScroll];
  }
  hintText = game.add.text(480, 100, breakLines(text, 18), {
    font: "30px Old English Text MT",
    fill: "#000"
  });
  hintText.fixedToCamera = true;
}

var mapContents;
var textCities;
var cityNumbers;
var marker;

function showMap() {
  player.turn = "mapCheck";
  mapScroll = game.add.sprite(50, -100, "mapScroll");
  mapScroll.fixedToCamera = true;
  mapContents = [];
  for (let i = 0; i < world.numberOfRows; i++) {
    for (let j = 0; j < world.numberOfColumns; j++) {
      mapContents.push(game.add.sprite(200 + j * 36, 20 + i * 36, world.squareContents(j, i) + "Icon"));
      mapContents[i * world.numberOfColumns + j].fixedToCamera = true;
    }
  }
  let listOfTowns = "";
  cityNumbers = [];
  for (var i = 0; i < world.towns.length; i++) {
    let town = world.towns[i];
    listOfTowns += (i + 1) + ". " + town.name + "\n";
    cityNumbers.push(game.add.text(217 + town.col * 36, 20 + town.row * 36, (i + 1), {
      font: "30px Old English Text MT",
      fill: "#FF0"
    }));
    cityNumbers[i].fixedToCamera = true;
    cityNumbers[i].anchor.set(0.5,0);
  }
  textCities = game.add.text(760, 20, listOfTowns, {
    font: "40px Old English Text MT",
    fill: "#000"
  });
  textCities.fixedToCamera = true;
  marker = game.add.sprite(202 + player.col * 36, 15 + player.row * 36, "x");
  marker.fixedToCamera = true;
  marker.alpha = 0;
  game.add.tween(marker).to( { alpha: 1 }, 1000, Phaser.Easing.Linear.None, true, 0, 1000, true);
}

function verifyIfEnemiesAreDone() {
  for (let i = 0; i < square.enemies.length; i++) {
    if (!square.enemies[i].done) {
      return false;
    }
  }
  for (let i = 0; i < square.enemies.length; i++) {
    square.enemies[i].movements = 0;
    square.enemies[i].done = false;
  }
  return true;
}

function fireball() {

  if (square.kind != "town") {
    soundSpell.play();
    player.skill = 1;
    player.sprite.animations.play(player.direction + "Casting", true, false);
    player.sprite.events.onAnimationComplete.add(function() {
      player.sprite.animations.stop();
      player.turn = player.direction + "Casting";
    }, this);
  }

}

function iceball() {
  if (square.kind != "town") {
    soundSpell.play();
    player.skill = 2;
    player.sprite.animations.play(player.direction + "Casting", true, false);
    player.sprite.events.onAnimationComplete.add(function() {
      player.sprite.animations.stop();
      player.turn = player.direction + "Casting";
    }, this);
  }
}

function teleport() {
  soundSpell.play();
  player.skill = 3;
  player.sprite.animations.play(player.direction + "Casting", true, false);
  player.sprite.events.onAnimationComplete.add(function() {
    player.sprite.animations.stop();
    player.turn = player.direction + "Casting";
  }, this);
}

function drinkHpPotion() {
  player.drinkHpPotion();
}

function drinkMpPotion() {
  player.drinkMpPotion();
}

function breakLines(text, lineSize) {
  let brokenText = "";
  let position = 0;
  for(i = 0;i < text.length;i++) {
    if(text.charAt(i) != ' ' || position < lineSize) {
      brokenText += text.charAt(i);
      position++;
    } else {
      brokenText += '\n';
      position = 0;
    }
  }
  return brokenText;
}
