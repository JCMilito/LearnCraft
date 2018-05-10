class Mage {

  constructor(name, x, y, col, row) {
    this.name = name;
    this.strength = 10;
    this.intelligence = 30;
    this.dexterity = 10;
    this.constitution = 10;
    this.maxHp = this.constitution * 10;
    this.maxMp = this.intelligence * 10;
    this.hp = this.constitution * 10;
    this.mp = this.intelligence * 10;
    this.gold = 0;
    this.hpPotion = 3;
    this.mpPotion = 3;
    this.level = 1;
    this.xp = 0;
    this.col = col;
    this.row = row;
    this.sprite = game.add.isoSprite(x, y, 0, 'mage', 0, playerGroup);
    this.direction = "up";
    this.initiateSprite();
    this.backpack = [];
    this.createBackpack();
  }

  initiateSprite() {
    game.camera.follow(this.sprite);
    game.physics.isoArcade.enable(this.sprite);
    this.sprite.animations.add('down', [18, 19, 20, 21, 22, 23, 24, 25, 26], 10, true);
    this.sprite.animations.add('up', [0, 1, 2, 3, 4, 5, 6, 7, 8], 10, true);
    this.sprite.animations.add('left', [17, 16, 15, 14, 13, 12, 11, 10, 9], 10, true);
    this.sprite.animations.add('right', [35, 34, 33, 32, 31, 30, 29, 28, 27], 10, true);
    this.sprite.animations.add('downCasting', [54, 55, 56, 57, 58, 59, 60], 8, true);
    this.sprite.animations.add('upCasting', [36, 37, 38, 39, 40, 41, 42], 8, true);
    this.sprite.animations.add('leftCasting', [45, 46, 47, 48, 49, 50, 51], 8, true);
    this.sprite.animations.add('rightCasting', [63, 64, 65, 66, 67, 68, 69], 8, true);
    this.sprite.animations.add('dying', [72, 73, 74, 75, 76, 77], 5, true);
    this.sprite.anchor.set(0.5, 0.7);
  }

  createBackpack() {
    this.backpack = [];
    let backpack = game.add.sprite(1060, 380, "backpack");
    backpack.fixedToCamera = true;

    let gold = game.add.sprite(1060, 345, "coin");
    gold.fixedToCamera = true;
    this.goldText = game.add.text(1100, 350, this.gold.toString(), {
      font: "24px Arial",
      fill: "#FFFF00"
    });
    this.goldText.fixedToCamera = true;
    let mp = game.add.sprite(1060, 305, "mp");
    mp.fixedToCamera = true;
    this.mpText = game.add.text(1100, 310, this.mpPotion.toString(), {
      font: "24px Arial",
      fill: "#FFFF00"
    });
    this.mpText.fixedToCamera = true;
    let hp = game.add.sprite(1060, 265, "hp");
    hp.fixedToCamera = true;
    this.hpText = game.add.text(1100, 270, this.hpPotion.toString(), {
      font: "24px Arial",
      fill: "#FFFF00"
    });
    this.hpText.fixedToCamera = true;
  }

  updateHP(value) {
    if (value < 0 && Math.abs(value) > player.hp) {
      player.hp = 0;
    } else if (value > 0 && this.hp + value > this.maxHp) {
      this.hp = this.maxHp;
    } else {
      this.hp += value;
    }
    updateStatusPanel();

  }

  updateMP(value) {
    if (value < 0 && Math.abs(value) > this.mp) {
      this.mp = 0;
    } else if (value > 0 && this.mp + value > this.maxMp) {
      this.mp = this.maxMp;
    } else {
      this.mp += value;
    }
    updateStatusPanel();
  }

  drinkHpPotion() {
    if (this.hpPotion > 0) {
      this.hpPotion--;
      this.hpText.text = this.hpPotion.toString();
      this.updateHP(50);
    }
  }

  drinkMpPotion() {
    if (this.mpPotion > 0) {
      this.mpPotion--;
      this.mpText.text = this.mpPotion.toString();
      this.updateMP(50);
    }
  }

  sellStuff() {
    this.gold += this.backpack.length * 10;
    this.backpack = [];
    let backpack = game.add.sprite(1060, 380, "backpack");
    backpack.fixedToCamera = true;
    this.goldText.text = this.gold;

  }

  addItemToBackpack(item) {
    if (this.backpack.length < 16) {
      let newItem = game.add.sprite(1070 + (this.backpack.length % 4) * 50, 390 + Math.floor(this.backpack.length / 4) * 50, item);
      newItem.fixedToCamera = true;
      this.backpack.push(item);
    }
  }

  buyStuff(manaPotions, healthPotions) {
    this.gold -= (manaPotions + healthPotions) * 30;
    this.goldText.text = this.gold.toString();
    this.mpPotion += manaPotions;
    this.mpText.text = this.mpPotion;
    this.hpPotion += healthPotions;
    this.hpText.text = this.hpPotion;
  }


}
