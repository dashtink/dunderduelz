// need to get cards in database so they are jsut called by number
//  and their constructors get the info from the database

function Card(n) {
  this.cardNumber = n;
  this.uuid = '564161651664848';
  this.cardName = 'Card Name';
  this.cardText = 'This card does This';
  this.cardType = 'Attack'; //'Defense' 'Non-Combat'
  this.playEffect = 'what card does when played';
  this.activateEffect = 'what card does when activated';
  this._played = false;
  this._faceUp = false;
  this._activate = false;
};

Card.prototype.togglePlayed = function() {
  this._played = !this._played;
  if (this._played) {
    //globalEffect(this.playEffect);
    console.log('globalEffectPlayed');
  };
};

Card.prototype.toggleActivateCard = function() {
  this._played = !this._activate;
  if (this._activate) {
    //globalEffect(this.activateEffect);
    console.log('globalEffectActivate');
  };
};

Card.prototype.flipCard = function() {
  this._played = !this._faceUp;
  if (this._faceUp) {
    //showEnemy(this.uuid);
    console.log('flipped card face up to enemy');
  } else {
    //hideEnemy(this.uuid);
    console.log('flipped card face down to enemy');
  };
};

Card.prototype.getCardText = function() {
  return this.cardText;
};
Card.prototype.getCardName = function() {
  return this.cardName;
};
Card.prototype.getCardType = function() {
  return this.cardType;
};
Card.prototype.getUuid = function() {
  return this.uuid;
};
Card.prototype.getCardNumber = function() {
  return this.cardNumber;
};

Card.prototype.isAttack = function() {
  return this.cardType == 'Attack'? true: false;
};
Card.prototype.isDefense = function() {
  return this.cardType == 'Defense'? true: false;
};
Card.prototype.isNonCombat = function() {
  return this.cardType == 'Non-Combat'? true: false;
};
//module.exports = Card;

// call new object instance with:
//  var card = new Card(1);
