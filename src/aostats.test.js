const aostats = require('./aostats');

test('defense', () => {
  expect(aostats.defense(18)).toBeCloseTo(6.24);
});

test('evasion', () => {
  expect(aostats.evasion(11)).toBeCloseTo(2.17);
});

test('skillpoints', () => {
  expect(aostats.skillpoints(15)).toBe(120);
});

test('pierce', () => {
  expect(aostats.pierce(36)).toBeCloseTo(6.82);
});

test('dmgInc', () => {
  expect(aostats.dmgInc(36)).toBeCloseTo(0.1024, 4);
});

test('prob', () => {
  expect(aostats.prob(36)).toBeCloseTo(0.66);
});

test('shield', () => {
  expect(aostats.shield(20)).toBe(453);
});

test('fuel', () => {
  expect(aostats.fuel(24)).toBe(240);
});

test('capacity', () => {
  expect(aostats.capacity(24)).toBe(1740);
});
