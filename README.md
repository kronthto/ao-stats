# ACE STAT CALCULATOR

Calculate values that attack,defense,spirit,agility,shield,fuel stats provide in AceOnline / AirRivals / SCO (Space Cowboy Online).

**Formulas have been initially taken from a [webarchive copy of acecalcs.net](https://web.archive.org/web/20141103083349/http://www.acecalcs.net/statcalc_old.php) and put into this package, as the original site is no longer reachable. Credits for the work of creating/testing those actual calculations go there.**

## Install

* Using `npm`: `npm i aceonline-stats`

## Usage

```JavaScript
const aostats = require('aceonline-stats');
let effectValue = aostats.method(statAmount);
const igAtkBonusStatValue = aostats.gearStatChange.I.atk; // Access bonus stat value by gear
```

## Features / API methods

* `defense(defAmount)`
* `evasion(agiAmount)`
* `skillpoints(spiritAmount)`
* `pierce(atkAmount)`
* `dmgInc(atkAmount)`
* `prob(atkAmount)`
* `shield(shieldAmount)`
* `fuel(fuelAmount)`
* `capacity(fuelAmount)`
* `gearStatChange`

## Credits

- argodaemon / AceCalcs.net (https://web.archive.org/web/20141103083349/http://www.acecalcs.net/statcalc_old.php)
- [All Contributors][link-contributors]

## License

The MIT License (MIT). Please see the [License File](LICENSE.md) for more information.


[ico-license]: https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square

[link-contributors]: ../../contributors
