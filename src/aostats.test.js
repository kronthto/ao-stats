const aostats = require('./aostats');

test('defense', () => {
  expect(aostats.defense(18)).toBeCloseTo(6.24);
  expect(aostats.defense(300)).toBeCloseTo(50.15);
  expect(aostats.defense(330)).toBeCloseTo(55.34);
  expect(aostats.defense(340)).toBeCloseTo(57.00);
});

test('evasion', () => {
  expect(aostats.evasion(11)).toBeCloseTo(2.17);
  expect(aostats.evasion(300)).toBeCloseTo(50.33);
  expect(aostats.evasion(330)).toBeCloseTo(55.34, 1);
  expect(aostats.evasion(340)).toBeCloseTo(57.00);
});

test('skillpoints', () => {
  expect(aostats.skillpoints(15)).toBe(120);
});

test('pierce', () => {
  expect(aostats.pierce(36)).toBeCloseTo(6.67);
  expect(aostats.pierce(200)).toBeCloseTo(30.59, 1);
  expect(aostats.pierce(300)).toBeCloseTo(45.10);
  expect(aostats.pierce(315)).toBeCloseTo(47.06);
  expect(aostats.pierce(327)).toBeCloseTo(48.63);
  expect(aostats.pierce(328)).toBeCloseTo(49.02);
  expect(aostats.pierce(334)).toBeCloseTo(49.81);
  expect(aostats.pierce(340)).toBeCloseTo(50.59);
});

test('dmgInc', () => {
  expect(aostats.dmgInc(36)).toBeCloseTo(0.1024, 4);
  expect(aostats.dmgInc(300)).toBeCloseTo(0.7029750, 4);
  expect(aostats.dmgInc(330)).toBeCloseTo(0.7712250, 4);
  expect(aostats.dmgInc(340)).toBeCloseTo(0.7939750, 4);
});

test('prob', () => {
  expect(aostats.prob(36)).toBeCloseTo(0.66);
  expect(aostats.prob(300)).toBeCloseTo(4.5441);
  expect(aostats.prob(330)).toBeCloseTo(4.9853);
  expect(aostats.prob(340)).toBeCloseTo(5.1324);
});

test('shield', () => {
  expect(aostats.shield(20)).toBe(453.978);
  expect(aostats.shield(0)).toBe(0);
  expect(aostats.shield(1)).toBe(60.0);
  expect(aostats.shield(2)).toBeCloseTo(79.9800);
  expect(aostats.shield(3)).toBeCloseTo(99.9600);
  expect(aostats.shield(20)).toBe(453.978);
  expect(aostats.shield(201)).toBe(6673.8900);
  expect(aostats.shield(300)).toBe(11917.86);
  expect(aostats.shield(330)).toBeCloseTo(13658.07, 0);
  expect(aostats.shield(340)).toBe(14238.0);
});

test('fuel', () => {
  expect(aostats.fuel(24)).toBe(240);
});

test('capacity', () => {
  expect(aostats.capacity(24)).toBe(1740);
});
