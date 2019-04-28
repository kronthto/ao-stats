// Initially transcoded from https://web.archive.org/web/20141103083349/http://www.acecalcs.net/statcalc_old.php
// Credits go to the original author Andrew Nelson / argodaemon
// Formulas have been improved / data arrays extended based on new source code

const { defense_array, shield_array, pierce_array } = require('./statvalues');

function calcAgi(amount) {
  return 1 / 3 + amount / 6;
}

function calcSpirit(amount) {
  return amount * 8;
}

function calcDef(amount) {
  return defense_array[amount];
}

function calcShield(amount) {
  return shield_array[amount];
}

function calcPierce(atkAmount) {
  return pierce_array[atkAmount];
}

function calcDmgInc(atkAmount) {
  return 0.0022749466374359 * atkAmount + 0.020491130426668;
}

function calcProbInc(atkAmount) {
  return atkAmount * 0.0147 + 0.1324;
}

function calcFuel(fuelAmount) {
  return fuelAmount * 10;
}

function calcCapacity(fuelAmount) {
  return (fuelAmount * 60) + 300;
}

const statsPerBonusStatAndGear = {
  I: {
    atk: 4,
    def: 2,
    fuel: 3,
    spirit: 3,
    shield: 2,
    eva: 4,
  },
  M: {
    atk: 2,
    def: 4,
    fuel: 3,
    spirit: 4,
    shield: 3,
    eva: 2,
  },
  B: {
    atk: 3,
    def: 3,
    fuel: 3,
    spirit: 3,
    shield: 3,
    eva: 3,
  },
  A: {
    atk: 4,
    def: 3,
    fuel: 3,
    spirit: 3,
    shield: 4,
    eva: 1,
  }
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
  gearStatChange: statsPerBonusStatAndGear
};
