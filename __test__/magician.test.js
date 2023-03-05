import Magician from '../magician';

test('create magician', () => {
  const magician = new Magician();
  const result = { attack: 100, stoned: false };
  expect(magician).toEqual(result);
});

test('attack with distance 1', () => {
  const magician = new Magician();
  magician.setAttack(1);
  const attack = magician.getAttack();
  expect(attack).toEqual(100);
});

test('attack with distance 2', () => {
  const magician = new Magician();
  magician.setAttack(2);
  const attack = magician.getAttack();
  expect(attack).toEqual(90);
});

test('attack with distance 3', () => {
  const magician = new Magician();
  magician.setAttack(3);
  const attack = magician.getAttack();
  expect(attack).toEqual(80);
});

test('attack with distance 4', () => {
  const magician = new Magician();
  magician.setAttack(4);
  const attack = magician.getAttack();
  expect(attack).toEqual(70);
});

test('attack with distance 5', () => {
  const magician = new Magician();
  magician.setAttack(5);
  const attack = magician.getAttack();
  expect(attack).toEqual(60);
});

test('attack with distance 6', () => {
  const magician = new Magician();
  magician.setAttack(6);
  const attack = magician.getAttack();
  expect(attack).toEqual(60);
});

test('get stoned', () => {
  const magician = new Magician();
  magician.setStoned(true);
  expect(magician.stoned).toEqual(true);
});

test('attack with distance 1 and stoned: true', () => {
  const magician = new Magician();
  magician.setStoned(true);
  magician.setAttack(1);
  const attack = magician.getAttack();
  expect(attack).toEqual(100);
});

test('attack with distance 2 and stoned: true', () => {
  const magician = new Magician();
  magician.setStoned(true);
  magician.setAttack(2);
  const attack = magician.getAttack();
  expect(attack).toEqual(85);
});
