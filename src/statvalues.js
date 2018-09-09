// Copied from https://web.archive.org/web/20141103083349/http://www.acecalcs.net/statcalc_old.php
// All credits go to the original author Andrew Nelson / argodaemon

//Array holds all the defense percent values for every stat from 2-300.
//Dummy values were added for stats of 0 and 1 to make array calls much easier.
//Special thanks to timeserv for having this information available
const defense_array = [
  0.0, //   0
  0.0,
  1.3,
  1.63,
  1.95,
  2.27,
  2.58,
  2.9,
  3.21,
  3.52,
  3.83, //   1- 10
  4.14,
  4.44,
  4.75,
  5.05,
  5.35,
  5.65,
  5.94,
  6.24,
  6.53,
  6.8, //  11- 20
  7.08,
  7.35,
  7.64,
  7.93,
  8.22,
  8.5,
  8.77,
  9.05,
  9.33,
  9.62, //  21- 30
  9.9,
  10.17,
  10.43,
  10.7,
  10.97,
  11.23,
  11.5,
  11.75,
  12.0,
  12.25, //  31- 40
  12.5,
  12.75,
  13.0,
  13.25,
  13.5,
  13.75,
  14.0,
  14.25,
  14.5,
  14.75, //  41- 50
  15.0,
  15.25,
  15.49,
  15.73,
  15.97,
  16.2,
  16.43,
  16.67,
  16.89,
  17.12, //  51- 60
  17.35,
  17.57,
  17.8,
  18.03,
  18.25,
  18.47,
  18.7,
  18.91,
  19.12,
  19.34, //  61- 70
  19.55,
  19.76,
  19.98,
  20.19,
  20.4,
  20.62,
  20.83,
  21.04,
  21.26,
  21.45, //  71- 80
  21.65,
  21.86,
  22.05,
  22.25,
  22.46,
  22.65,
  22.85,
  23.06,
  23.25,
  23.45, //  81- 90
  23.66,
  23.85,
  24.04,
  24.24,
  24.42,
  24.6,
  24.79,
  24.98,
  25.17,
  25.37, //  91-100
  25.55,
  25.73,
  25.92,
  26.1,
  26.28,
  26.47,
  26.64,
  26.82,
  27.0,
  27.17, // 101-110
  27.35,
  27.53,
  27.7,
  27.88,
  28.06,
  28.22,
  28.39,
  28.57,
  28.72,
  28.88, // 111-120
  29.05,
  29.21,
  29.38,
  29.56,
  29.72,
  29.89,
  30.07,
  30.22,
  30.38,
  30.55, // 121-130
  30.7,
  30.86,
  31.03,
  31.18,
  31.34,
  31.51,
  31.66,
  31.81,
  31.97,
  32.12, // 131-140
  32.27,
  32.43,
  32.58,
  32.73,
  32.89,
  33.03,
  33.18,
  33.33,
  33.47,
  33.62, // 141-150
  33.77,
  33.91,
  34.06,
  34.21,
  34.34,
  34.48,
  34.63,
  34.76,
  34.9,
  35.05, // 151-160
  35.18,
  35.32,
  35.47,
  35.6,
  35.74,
  35.89,
  36.02,
  36.16,
  36.31,
  36.44, // 161-170
  36.57,
  36.71,
  36.84,
  36.97,
  37.11,
  37.23,
  37.36,
  37.49,
  37.61,
  37.74, // 171-180
  37.87,
  37.99,
  38.12,
  38.25,
  38.37,
  38.5,
  38.63,
  38.75,
  38.88,
  39.01, // 181-190
  39.13,
  39.26,
  39.39,
  39.5,
  39.62,
  39.74,
  39.85,
  39.97,
  40.09,
  40.2, // 191-200
  40.32,
  40.44,
  40.55,
  40.67,
  40.79,
  40.9,
  41.02,
  41.14,
  41.25,
  41.37, // 201-210
  41.49,
  41.6,
  41.72,
  41.84,
  41.95,
  42.07,
  42.19,
  42.29,
  42.4,
  42.52, // 211-220
  42.62,
  42.73,
  42.85,
  42.95,
  43.06,
  43.18,
  43.28,
  43.38,
  43.49,
  43.59, // 221-230
  43.7,
  43.81,
  43.91,
  44.01,
  44.12,
  44.22,
  44.33,
  44.44,
  44.54,
  44.64, // 231-240
  44.75,
  44.85,
  44.95,
  45.05,
  45.15,
  45.25,
  45.35,
  45.45,
  45.55,
  45.65, // 241-250
  45.74,
  45.84,
  45.93,
  46.02,
  46.12,
  46.21,
  46.3,
  46.4,
  46.49,
  46.58, // 251-260
  46.68,
  46.77,
  46.86,
  46.96,
  47.05,
  47.14,
  47.24,
  47.33,
  47.42,
  47.52, // 261-270
  47.61,
  47.7,
  47.8,
  47.89,
  47.98,
  48.08,
  48.17,
  48.26,
  48.36,
  48.45, // 271-280
  48.53,
  48.62,
  48.71,
  48.79,
  48.87,
  48.96,
  49.04,
  49.13,
  49.22,
  49.3, // 281-290
  49.38,
  49.47,
  49.55,
  49.64,
  49.73,
  49.81,
  49.89,
  49.98,
  50.06,
  50.15,
]; // 291-300

//Array holds all the shield values for every stat from 2-300.
//Dummy values were added for stats of 0 and 1 to make array calls much easier.
//Special thanks to Pervertido for recording these values on restat.
const shield_array = [
  0, //   0
  0,
  79,
  99,
  120,
  139,
  159,
  180,
  199,
  219,
  240, //   1- 10
  259,
  279,
  300,
  321,
  343,
  366,
  387,
  409,
  432,
  453, //  11- 20
  472,
  498,
  519,
  541,
  563,
  585,
  607,
  630,
  653,
  677, //  21- 30
  702,
  725,
  749,
  774,
  797,
  821,
  845,
  869,
  893,
  918, //  31- 40
  943,
  969,
  996,
  1021,
  1047,
  1074,
  1099,
  1125,
  1151,
  1177, //  41- 50
  1203,
  1230,
  1255,
  1281,
  1308,
  1335,
  1363,
  1392,
  1419,
  1447, //  51- 60
  1475,
  1503,
  1531,
  1560,
  1587,
  1615,
  1644,
  1671,
  1699,
  1728, //  61- 70
  1757,
  1787,
  1817,
  1847,
  1877,
  1908,
  1937,
  1967,
  1998,
  2027, //  71- 80
  2057,
  2088,
  2117,
  2147,
  2181,
  2209,
  2241,
  2274,
  2305,
  2337, //  81- 90
  2370,
  2401,
  2432,
  2466,
  2497,
  2529,
  2561,
  2593,
  2625,
  2658, //  91-100
  2691,
  2725,
  2760,
  2793,
  2826,
  2862,
  2895,
  2929,
  2963,
  2997, // 101-110
  3031,
  3066,
  3098,
  3133,
  3168,
  3203,
  3238,
  3276,
  3311,
  3347, // 111-120
  3383,
  3419,
  3455,
  3492,
  3527,
  3563,
  3600,
  3635,
  3671,
  3708, // 121-130
  3745,
  3783,
  3818,
  3854,
  3897,
  3936,
  3973,
  4011,
  4050,
  4087, // 131-140
  4125,
  4164,
  4201,
  4236,
  4276,
  4317,
  4357,
  4398,
  4437,
  4477, // 141-150
  4518,
  4557,
  4597,
  4638,
  4677,
  4717,
  4757,
  4797,
  4837,
  4878, // 151-160
  4918,
  4961,
  5004,
  5045,
  5087,
  5130,
  5171,
  5213,
  5255,
  5297, // 161-170
  5339,
  5382,
  5423,
  5465,
  5508,
  5551,
  5595,
  5640,
  5683,
  5727, // 171-180
  5772,
  5818,
  5859,
  5904,
  5947,
  5991,
  6036,
  6079,
  6123,
  6168, // 181-190
  6213,
  6259,
  6305,
  6351,
  6397,
  6444,
  6489,
  6535,
  6582,
  6627, // 191-200
  6673,
  6720,
  6765,
  6811,
  6858,
  6905,
  6953,
  7002,
  7049,
  7097, // 201-210
  7146,
  7193,
  7238,
  7284,
  7337,
  7385,
  7433,
  7481,
  7529,
  7578, // 211-220
  7627,
  7677,
  7728,
  7777,
  7827,
  7878,
  7927,
  7977,
  8027,
  8077, // 221-230
  8127,
  8178,
  8227,
  8277,
  8328,
  8379,
  8431,
  8484,
  8535,
  8587, // 231-240
  8642,
  8697,
  8743,
  8796,
  8847,
  8899,
  8952,
  9003,
  9055,
  9108, // 241-250
  9161,
  9215,
  9269,
  9323,
  9377,
  9432,
  9485,
  9539,
  9594,
  9647, // 251-260
  9701,
  9756,
  9809,
  9863,
  9918,
  9973,
  10029,
  10089,
  10143,
  10197, // 261-270
  10254,
  10309,
  10365,
  10422,
  10477,
  10533,
  10589,
  10645,
  10701,
  10758, // 271-280
  10815,
  10873,
  10932,
  10989,
  11047,
  11106,
  11163,
  11221,
  11279,
  11337, // 281-290
  11395,
  11454,
  11509,
  11564,
  11628,
  11685,
  11743,
  11802,
  11859,
  11917,
]; // 291-300

module.exports = { defense_array, shield_array };
