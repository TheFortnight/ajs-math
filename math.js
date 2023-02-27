export default class Maths {
  constructor() {
    this.attack = 100;
    this.stoned = false;
  }

  getAttack(distance) {
    let dist = distance;
    if (dist > 5) {
      dist = 5;
    }

    let stonedEffect = 0;
    if (this.stoned && dist !== 0) stonedEffect = Math.round(Math.log2(dist) * 5);
    if (dist === 1) return this.attack - stonedEffect;

    return this.attack - (this.attack / 10) * (dist - 1) - stonedEffect;
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
