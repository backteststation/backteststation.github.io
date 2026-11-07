window.SHOWCASE = [
 {
  "key": "nfi-x8",
  "id": "S-01",
  "code": "7ad5e2b9",
  "verdict": "CAUTION",
  "confidence": 94.5,
  "name": "NostalgiaForInfinity X8",
  "about": "The most popular community strategy for Freqtrade; very large rule set with grinding and rebuys.",
  "source": "https://github.com/iterativv/NostalgiaForInfinity",
  "kind": "Freqtrade strategy",
  "score": 49,
  "label": "Inconclusive",
  "scenarios": [
   {
    "name": "Optimistic",
    "ret": 0.086795246601215
   },
   {
    "name": "Normal",
    "ret": 0.08480191455951398
   },
   {
    "name": "Pessimistic",
    "ret": 0.08366286767854199
   }
  ],
  "period": [
   "2026-07-01",
   "2026-10-31"
  ],
  "return": 0.085371438,
  "market": 0.33586501940130953,
  "cagr": 0.2777430874831235,
  "max_dd": 0.0,
  "trades": 18,
  "win_rate": 1.0,
  "profit_factor": 0.0,
  "stress": 0.07967620359514001,
  "lookahead": null,
  "flags": [
   "Lookahead check not run: too large for the automatic lookahead check",
   "Returned 8.5% while simply holding the same coins returned 33.6%.",
   "Only 18 trades: too few to tell skill from luck."
  ],
  "years": [
   {
    "year": 2026,
    "trades": 18,
    "win_rate": 1.0,
    "profit_abs": 85.371438,
    "profit_pct": 0.085371438
   }
  ],
  "report": "reports/nfi-x8.pdf"
 },
 {
  "key": "combined-binh-cluc",
  "id": "S-02",
  "code": "40e018d9",
  "verdict": "CAUTION",
  "confidence": 97.5,
  "name": "CombinedBinHAndCluc",
  "about": "Bollinger-band dip buyer that combines BinHV45 and ClucMay72018; a long-time community favourite.",
  "source": "https://github.com/freqtrade/freqtrade-strategies/blob/main/user_data/strategies/berlinguyinca/CombinedBinHAndCluc.py",
  "kind": "Freqtrade strategy",
  "score": 43,
  "label": "Inconclusive",
  "scenarios": [
   {
    "name": "Optimistic",
    "ret": -0.177464070024
   },
   {
    "name": "Normal",
    "ret": -0.2595758140398314
   },
   {
    "name": "Pessimistic",
    "ret": -0.26619610503599994
   }
  ],
  "period": [
   "2024-11-01",
   "2026-10-31"
  ],
  "return": -0.22183008752999997,
  "market": -0.37823121336033705,
  "cagr": -0.11801234058007816,
  "max_dd": 0.5155408915520197,
  "trades": 1079,
  "win_rate": 0.7358665430954587,
  "profit_factor": 0.9147908433897772,
  "stress": -0.5992873526283133,
  "lookahead": false,
  "flags": [
   "Profitable in 2 of 3 calendar years.",
   "Maximum drawdown 52% of the account."
  ],
  "years": [
   {
    "year": 2024,
    "trades": 186,
    "win_rate": 0.7903225806451613,
    "profit_abs": 233.40656086,
    "profit_pct": 0.23340656086
   },
   {
    "year": 2025,
    "trades": 563,
    "win_rate": 0.6696269982238011,
    "profit_abs": -495.66450981,
    "profit_pct": -0.49566450981000004
   },
   {
    "year": 2026,
    "trades": 330,
    "win_rate": 0.8181818181818182,
    "profit_abs": 40.42786142,
    "profit_pct": 0.04042786142
   }
  ],
  "report": "reports/combined-binh-cluc.pdf"
 },
 {
  "key": "cluc-may-72018",
  "id": "S-03",
  "code": "994c352d",
  "verdict": "CAUTION",
  "confidence": 97.5,
  "name": "ClucMay72018",
  "about": "Buys closes far below the lower Bollinger band with volume confirmation.",
  "source": "https://github.com/freqtrade/freqtrade-strategies/blob/main/user_data/strategies/berlinguyinca/ClucMay72018.py",
  "kind": "Freqtrade strategy",
  "score": 43,
  "label": "Inconclusive",
  "scenarios": [
   {
    "name": "Optimistic",
    "ret": -0.295918539888
   },
   {
    "name": "Normal",
    "ret": -0.4009467108620235
   },
   {
    "name": "Pessimistic",
    "ret": -0.44387780983200004
   }
  ],
  "period": [
   "2024-11-01",
   "2026-10-31"
  ],
  "return": -0.36989817486,
  "market": -0.37823121336033705,
  "cagr": -0.20646188697167567,
  "max_dd": 0.5563886307536005,
  "trades": 895,
  "win_rate": 0.753072625698324,
  "profit_factor": 0.7559384041046137,
  "stress": -0.6803835348802354,
  "lookahead": false,
  "flags": [
   "Profitable in 2 of 3 calendar years.",
   "Maximum drawdown 56% of the account."
  ],
  "years": [
   {
    "year": 2024,
    "trades": 176,
    "win_rate": 0.9318181818181818,
    "profit_abs": 256.84815309,
    "profit_pct": 0.25684815309
   },
   {
    "year": 2025,
    "trades": 447,
    "win_rate": 0.668903803131991,
    "profit_abs": -637.41876331,
    "profit_pct": -0.63741876331
   },
   {
    "year": 2026,
    "trades": 272,
    "win_rate": 0.7757352941176471,
    "profit_abs": 10.672435359999994,
    "profit_pct": 0.010672435359999994
   }
  ],
  "report": "reports/cluc-may-72018.pdf"
 },
 {
  "key": "binhv45",
  "id": "S-04",
  "code": "693c8217",
  "verdict": "CAUTION",
  "confidence": 97.5,
  "name": "BinHV45",
  "about": "1-minute Bollinger-band scalper.",
  "source": "https://github.com/freqtrade/freqtrade-strategies/blob/main/user_data/strategies/berlinguyinca/BinHV45.py",
  "kind": "Freqtrade strategy",
  "score": 46,
  "label": "Inconclusive",
  "scenarios": [
   {
    "name": "Optimistic",
    "ret": 0.016004207200843997
   },
   {
    "name": "Normal",
    "ret": 0.0130865809076624
   },
   {
    "name": "Pessimistic",
    "ret": 0.011419365882987196
   }
  ],
  "period": [
   "2026-05-01",
   "2026-10-31"
  ],
  "return": 0.01392018842,
  "market": 0.10401677625558518,
  "cagr": 0.02795649162711822,
  "max_dd": 0.030397134196441352,
  "trades": 21,
  "win_rate": 0.8571428571428571,
  "profit_factor": 1.4511383850202446,
  "stress": 0.005584113296623997,
  "lookahead": false,
  "flags": [
   "Returned 1.4% while simply holding the same coins returned 10.4%.",
   "Only 21 trades: too few to tell skill from luck."
  ],
  "years": [
   {
    "year": 2026,
    "trades": 21,
    "win_rate": 0.8571428571428571,
    "profit_abs": 13.92018842,
    "profit_pct": 0.01392018842
   }
  ],
  "report": "reports/binhv45.pdf"
 },
 {
  "key": "strategy005",
  "id": "S-05",
  "code": "74a77d83",
  "verdict": "FAIL",
  "confidence": 97.5,
  "name": "Strategy005",
  "about": "Classic example strategy: volume, Fisher RSI and stochastics on 5-minute candles.",
  "source": "https://github.com/freqtrade/freqtrade-strategies/blob/main/user_data/strategies/Strategy005.py",
  "kind": "Freqtrade strategy",
  "score": 22,
  "label": "No edge found in this test",
  "scenarios": [
   {
    "name": "Optimistic",
    "ret": -0.7918010858650965
   },
   {
    "name": "Normal",
    "ret": -0.9274845935799615
   },
   {
    "name": "Pessimistic",
    "ret": -1.0
   }
  ],
  "period": [
   "2024-11-01",
   "2026-10-31"
  ],
  "return": -0.88871787709,
  "market": -0.37823121336033705,
  "cagr": -0.6669122416398796,
  "max_dd": 0.9215435324006632,
  "trades": 2042,
  "win_rate": 0.8124387855044074,
  "profit_factor": 0.7637903492326806,
  "stress": -1.2763850419896146,
  "lookahead": false,
  "flags": [
   "Returned -88.9% while simply holding the same coins returned -37.8%.",
   "Profitable in 1 of 3 calendar years.",
   "Maximum drawdown 92% of the account."
  ],
  "years": [
   {
    "year": 2024,
    "trades": 204,
    "win_rate": 0.8529411764705882,
    "profit_abs": 47.853133770000056,
    "profit_pct": 0.047853133770000056
   },
   {
    "year": 2025,
    "trades": 1128,
    "win_rate": 0.8067375886524822,
    "profit_abs": -774.07352697,
    "profit_pct": -0.77407352697
   },
   {
    "year": 2026,
    "trades": 710,
    "win_rate": 0.8098591549295775,
    "profit_abs": -162.49748389,
    "profit_pct": -0.16249748389000002
   }
  ],
  "report": "reports/strategy005.pdf"
 },
 {
  "key": "supertrend",
  "id": "S-06",
  "code": "7ac4dfbd",
  "verdict": "FAIL",
  "confidence": 97.5,
  "name": "Supertrend",
  "about": "Triple Supertrend trend follower on 1-hour candles.",
  "source": "https://github.com/freqtrade/freqtrade-strategies/blob/main/user_data/strategies/Supertrend.py",
  "kind": "Freqtrade strategy",
  "score": 38,
  "label": "No edge found in this test",
  "scenarios": [
   {
    "name": "Optimistic",
    "ret": -0.35176224468
   },
   {
    "name": "Normal",
    "ret": -0.5276433670199999
   },
   {
    "name": "Pessimistic",
    "ret": -0.5276433670199999
   }
  ],
  "period": [
   "2022-01-01",
   "2026-10-31"
  ],
  "return": -0.4397028058500002,
  "market": -0.596735387498061,
  "cagr": -0.1129589335228416,
  "max_dd": 0.7121834881660615,
  "trades": 4852,
  "win_rate": 0.6049051937345424,
  "profit_factor": 0.970706391067722,
  "stress": -1.8199423677263766,
  "lookahead": false,
  "flags": [
   "Profitable in 2 of 5 calendar years.",
   "Maximum drawdown 71% of the account."
  ],
  "years": [
   {
    "year": 2022,
    "trades": 915,
    "win_rate": 0.594535519125683,
    "profit_abs": -651.4850037,
    "profit_pct": -0.6514850037
   },
   {
    "year": 2023,
    "trades": 1067,
    "win_rate": 0.6148078725398313,
    "profit_abs": 486.13727514999994,
    "profit_pct": 0.48613727514999994
   },
   {
    "year": 2024,
    "trades": 1071,
    "win_rate": 0.642390289449113,
    "profit_abs": 411.3671429299999,
    "profit_pct": 0.4113671429299999
   },
   {
    "year": 2025,
    "trades": 938,
    "win_rate": 0.5884861407249466,
    "profit_abs": -530.6278260699999,
    "profit_pct": -0.5306278260699998
   },
   {
    "year": 2026,
    "trades": 861,
    "win_rate": 0.5749128919860628,
    "profit_abs": -155.09439416000004,
    "profit_pct": -0.15509439416000004
   }
  ],
  "report": "reports/supertrend.pdf"
 },
 {
  "key": "diamond",
  "id": "S-07",
  "code": "8ba813dd",
  "verdict": "FAIL",
  "confidence": 97.5,
  "name": "Diamond",
  "about": "Hyperopt-tuned crossover strategy on 5-minute candles.",
  "source": "https://github.com/freqtrade/freqtrade-strategies/blob/main/user_data/strategies/Diamond.py",
  "kind": "Freqtrade strategy",
  "score": 37,
  "label": "No edge found in this test",
  "scenarios": [
   {
    "name": "Optimistic",
    "ret": -0.20644799068800004
   },
   {
    "name": "Normal",
    "ret": -0.2799785162414102
   },
   {
    "name": "Pessimistic",
    "ret": -0.309671986032
   }
  ],
  "period": [
   "2024-11-01",
   "2026-10-31"
  ],
  "return": -0.25805998836000005,
  "market": -0.37823121336033705,
  "cagr": -0.1388169249873802,
  "max_dd": 0.32279748434661787,
  "trades": 652,
  "win_rate": 0.6993865030674846,
  "profit_factor": 0.6211425919358895,
  "stress": -0.477245267174102,
  "lookahead": false,
  "flags": [
   "Profitable in 1 of 3 calendar years.",
   "Maximum drawdown 32% of the account."
  ],
  "years": [
   {
    "year": 2024,
    "trades": 63,
    "win_rate": 0.7777777777777778,
    "profit_abs": 67.55272160999998,
    "profit_pct": 0.06755272160999998
   },
   {
    "year": 2025,
    "trades": 300,
    "win_rate": 0.7,
    "profit_abs": -214.60243216000003,
    "profit_pct": -0.21460243216000002
   },
   {
    "year": 2026,
    "trades": 289,
    "win_rate": 0.6816608996539792,
    "profit_abs": -111.01027780999996,
    "profit_pct": -0.11101027780999996
   }
  ],
  "report": "reports/diamond.pdf"
 },
 {
  "key": "multima",
  "id": "S-08",
  "code": "1c1926f9",
  "verdict": "PASS",
  "confidence": 97.5,
  "name": "MultiMa",
  "about": "Stacked moving-average trend strategy on 4-hour candles.",
  "source": "https://github.com/freqtrade/freqtrade-strategies/blob/main/user_data/strategies/MultiMa.py",
  "kind": "Freqtrade strategy",
  "score": 71,
  "label": "Edge found",
  "scenarios": [
   {
    "name": "Optimistic",
    "ret": 3.1486611380667813
   },
   {
    "name": "Normal",
    "ret": 2.9025131942812874
   },
   {
    "name": "Pessimistic",
    "ret": 2.761857226403863
   }
  ],
  "period": [
   "2022-01-01",
   "2026-10-31"
  ],
  "return": 2.97284117822,
  "market": -0.5997028777684869,
  "cagr": 0.3303431704492146,
  "max_dd": 0.30643771851511475,
  "trades": 701,
  "win_rate": 0.6119828815977175,
  "profit_factor": 1.3098287560753423,
  "stress": 2.2695613388328746,
  "lookahead": false,
  "flags": [
   "Profitable in 3 of 5 calendar years.",
   "Maximum drawdown 31% of the account."
  ],
  "years": [
   {
    "year": 2022,
    "trades": 194,
    "win_rate": 0.6237113402061856,
    "profit_abs": 173.96731902999997,
    "profit_pct": 0.17396731902999998
   },
   {
    "year": 2023,
    "trades": 163,
    "win_rate": 0.6196319018404908,
    "profit_abs": 766.9087458500001,
    "profit_pct": 0.76690874585
   },
   {
    "year": 2024,
    "trades": 166,
    "win_rate": 0.6927710843373494,
    "profit_abs": 2873.3815276900004,
    "profit_pct": 2.8733815276900003
   },
   {
    "year": 2025,
    "trades": 45,
    "win_rate": 0.4666666666666667,
    "profit_abs": -107.38631529000003,
    "profit_pct": -0.10738631529000003
   },
   {
    "year": 2026,
    "trades": 133,
    "win_rate": 0.5338345864661654,
    "profit_abs": -734.0300990600001,
    "profit_pct": -0.7340300990600002
   }
  ],
  "report": "reports/multima.pdf"
 },
 {
  "key": "bandtastic",
  "id": "S-09",
  "code": "f994df34",
  "verdict": "FAIL",
  "confidence": 97.5,
  "name": "Bandtastic",
  "about": "Bollinger, RSI and MFI mean reversion on 15-minute candles.",
  "source": "https://github.com/freqtrade/freqtrade-strategies/blob/main/user_data/strategies/Bandtastic.py",
  "kind": "Freqtrade strategy",
  "score": 15,
  "label": "No edge found in this test",
  "scenarios": [
   {
    "name": "Optimistic",
    "ret": -0.7906760755440001
   },
   {
    "name": "Normal",
    "ret": -1.0
   },
   {
    "name": "Pessimistic",
    "ret": -1.0
   }
  ],
  "period": [
   "2022-01-01",
   "2026-10-31"
  ],
  "return": -0.98834509443,
  "market": -0.5993866961939981,
  "cagr": -0.6019574191334025,
  "max_dd": 0.988876148177764,
  "trades": 14469,
  "win_rate": 0.610062893081761,
  "profit_factor": 0.8016029833259986,
  "stress": -1.9980890289244964,
  "lookahead": false,
  "flags": [
   "Returned -98.8% while simply holding the same coins returned -59.9%.",
   "Profitable in 0 of 5 calendar years.",
   "Maximum drawdown 99% of the account."
  ],
  "years": [
   {
    "year": 2022,
    "trades": 4080,
    "win_rate": 0.6205882352941177,
    "profit_abs": -811.8156339300001,
    "profit_pct": -0.8118156339300001
   },
   {
    "year": 2023,
    "trades": 4236,
    "win_rate": 0.6012747875354107,
    "profit_abs": -80.50695114,
    "profit_pct": -0.08050695114
   },
   {
    "year": 2024,
    "trades": 4279,
    "win_rate": 0.6146295863519514,
    "profit_abs": -57.29685278999999,
    "profit_pct": -0.05729685278999999
   },
   {
    "year": 2025,
    "trades": 1388,
    "win_rate": 0.6123919308357348,
    "profit_abs": -34.69136334,
    "profit_pct": -0.03469136334
   },
   {
    "year": 2026,
    "trades": 486,
    "win_rate": 0.551440329218107,
    "profit_abs": -4.034293229999999,
    "profit_pct": -0.0040342932299999995
   }
  ],
  "report": "reports/bandtastic.pdf"
 },
 {
  "key": "godstranew",
  "id": "S-10",
  "code": "8d173b8b",
  "verdict": "FAIL",
  "confidence": 87.0,
  "name": "GodStraNew",
  "about": "Genetic-algorithm strategy; the repository itself files it under 'lookahead_bias'.",
  "source": "https://github.com/freqtrade/freqtrade-strategies/blob/main/user_data/strategies/lookahead_bias/GodStraNew.py",
  "kind": "Freqtrade strategy",
  "score": 30,
  "label": "Lookahead bias detected",
  "scenarios": [
   {
    "name": "Optimistic",
    "ret": 0.17108830401929156
   },
   {
    "name": "Normal",
    "ret": 0.16023079258628337
   },
   {
    "name": "Pessimistic",
    "ret": 0.15402650033885004
   }
  ],
  "period": [
   "2022-01-01",
   "2026-10-31"
  ],
  "return": 0.16333293870999996,
  "market": -0.5997028777684869,
  "cagr": 0.03179928022180478,
  "max_dd": 0.06693203167792372,
  "trades": 74,
  "win_rate": 0.6351351351351351,
  "profit_factor": 1.6455567669790876,
  "stress": 0.13231147747283362,
  "lookahead": true,
  "flags": [
   "Lookahead bias: the strategy's signals change when future candles are hidden, so its backtest uses information it could not have had live.",
   "Only 74 trades: too few to tell skill from luck."
  ],
  "years": [
   {
    "year": 2022,
    "trades": 15,
    "win_rate": 0.6666666666666666,
    "profit_abs": 13.004808079999998,
    "profit_pct": 0.013004808079999998
   },
   {
    "year": 2023,
    "trades": 26,
    "win_rate": 0.5384615384615384,
    "profit_abs": 81.38091496,
    "profit_pct": 0.08138091496
   },
   {
    "year": 2024,
    "trades": 5,
    "win_rate": 0.4,
    "profit_abs": 3.95541095,
    "profit_pct": 0.00395541095
   },
   {
    "year": 2025,
    "trades": 1,
    "win_rate": 1.0,
    "profit_abs": 36.13495008,
    "profit_pct": 0.036134950080000006
   },
   {
    "year": 2026,
    "trades": 27,
    "win_rate": 0.7407407407407407,
    "profit_abs": 28.85685464,
    "profit_pct": 0.028856854640000002
   }
  ],
  "report": "reports/godstranew.pdf"
 }
];
window.REVIEWS = {"count": 0, "reviews": []};
window.VERIFY = {};
