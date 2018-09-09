// Transcoded from https://web.archive.org/web/20141103083349/http://www.acecalcs.net/statcalc_old.php
// Credits go to the original author Andrew Nelson / argodaemon

const { defense_array, shield_array } = require('./statvalues');

function calcAgi(amount) {
  return 1 / 3 + amount / 6;
}

function calcSpirit(amount) {
  return amount * 8;
}

function calcDef(amount) {
  if (amount > 300) amount = 300;
  if (amount < 0) amount = 0;

  return defense_array[amount];
}

function calcShield(amount) {
  if (amount > 300) amount = 300;
  if (amount < 0) amount = 0;

  return shield_array[amount];
}

function calcPierce(atkAmount) {
  return (0.3921 * Math.round(atkAmount + 10.6)) / 2.704;
}

function calcDmgInc(atkAmount) {
  return 0.0022749466374359 * atkAmount + 0.020491130426668;
}

function calcProbInc(atkAmount) {
  return atkAmount * 0.0147 + 0.132;
}

function calcFuel(fuelAmount) {
  return fuelAmount * 10;
}

function calcCapacity(fuelAmount) {
  // TODO: Calculates: 1680, actual ingame: 1740
  return fuelAmount * 70;
}

module.exports = {
  evasion: calcAgi,
  skillpoints: calcSpirit,
  defense: calcDef,
  pierce: calcPierce,
  dmgInc: calcDmgInc,
  prob: calcProbInc,
  shield: calcShield,
  fuel: calcFuel,
  capacity: calcCapacity,
};
