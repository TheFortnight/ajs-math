export default class Maths {
  constructor() {
    this.attack = 100;
    this.stoned = false;
  }

  setAttack(distance) {
    let dist = distance;
    if (dist > 5) {
      dist = 5;
    }

    let stonedEffect = 0;
    if (this.stoned) stonedEffect = Math.round(Math.log2(dist) * 5);
    if (dist === 1) this._attack = this.attack - stonedEffect;

    this._attack = this.attack - (this.attack / 10) * (dist - 1) - stonedEffect;
  }

  getAttack(){
    return this._attack;
  }

  setStoned(bool) {
    this.stoned = bool;
  }
}

/* const math = new Maths();

math.setStoned(true);

//console.log(math.getAttack(0));
console.log(math.getAttack(1));
console.log(math.getAttack(2));
console.log(math.getAttack(6)); */
