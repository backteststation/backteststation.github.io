window.SHOWCASE = [
 {
  "key": "nfi-x8",
  "id": "S-01",
  "code": "7ad5e2b9",
  "verdict": "FAIL",
  "confidence": 94.5,
  "name": "NostalgiaForInfinity X8",
  "about": "The most popular community strategy for Freqtrade; very large rule set with grinding and rebuys.",
  "source": "https://github.com/iterativv/NostalgiaForInfinity",
  "kind": "Freqtrade strategy",
  "score": 39,
  "label": "No edge found in this test",
  "market_kind": "crypto",
  "symbols": [
   "BTC",
   "ETH",
   "SOL",
   "XRP",
   "DOGE",
   "ADA",
   "DOT",
   "NEAR",
   "ATOM",
   "FIL",
   "INJ",
   "ARB",
   "OP",
   "APT",
   "SUI",
   "LDO",
   "FET",
   "HBAR",
   "ALGO",
   "ICP"
  ],
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
    "days": 122,
    "partial": true,
    "profit_pct": 0.085371438
   }
  ],
  "report": "reports/nfi-x8.pdf"
 },
 {
  "key": "combined-binh-cluc",
  "id": "S-02",
  "code": "40e018d9",
  "verdict": "FAIL",
  "confidence": 97.5,
  "name": "CombinedBinHAndCluc",
  "about": "Bollinger-band dip buyer that combines BinHV45 and ClucMay72018; a long-time community favourite.",
  "source": "https://github.com/freqtrade/freqtrade-strategies/blob/main/user_data/strategies/berlinguyinca/CombinedBinHAndCluc.py",
  "kind": "Freqtrade strategy",
  "score": 39,
  "label": "No edge found in this test",
  "market_kind": "crypto",
  "symbols": [
   "BTC",
   "ETH",
   "SOL",
   "XRP",
   "DOGE",
   "ADA",
   "DOT",
   "NEAR",
   "ATOM",
   "FIL",
   "INJ",
   "ARB",
   "OP",
   "APT",
   "SUI",
   "LDO",
   "FET",
   "HBAR",
   "ALGO",
   "ICP"
  ],
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
   "Lost money: -22.2% of the account after fees (profit factor 0.91; below 1 means losses outweigh gains).",
   "Profitable in 1 of 2 calendar years (years with less than 3 months in the test are not counted).",
   "Maximum drawdown 52% of the account.",
   "Not consistent over time: the second half made money and the first half lost it."
  ],
  "years": [
   {
    "year": 2024,
    "trades": 186,
    "win_rate": 0.7903225806451613,
    "profit_abs": 233.40656086,
    "days": 61,
    "partial": true,
    "profit_pct": 0.23340656086
   },
   {
    "year": 2025,
    "trades": 563,
    "win_rate": 0.6696269982238011,
    "profit_abs": -495.66450981,
    "days": 365,
    "partial": false,
    "profit_pct": -0.4018662828130208
   },
   {
    "year": 2026,
    "trades": 330,
    "win_rate": 0.8181818181818182,
    "profit_abs": 40.42786142,
    "days": 303,
    "partial": true,
    "profit_pct": 0.0547994537690519
   }
  ],
  "report": "reports/combined-binh-cluc.pdf"
 },
 {
  "key": "cluc-may-72018",
  "id": "S-03",
  "code": "994c352d",
  "verdict": "FAIL",
  "confidence": 97.5,
  "name": "ClucMay72018",
  "about": "Buys closes far below the lower Bollinger band with volume confirmation.",
  "source": "https://github.com/freqtrade/freqtrade-strategies/blob/main/user_data/strategies/berlinguyinca/ClucMay72018.py",
  "kind": "Freqtrade strategy",
  "score": 39,
  "label": "No edge found in this test",
  "market_kind": "crypto",
  "symbols": [
   "BTC",
   "ETH",
   "SOL",
   "XRP",
   "DOGE",
   "ADA",
   "DOT",
   "NEAR",
   "ATOM",
   "FIL",
   "INJ",
   "ARB",
   "OP",
   "APT",
   "SUI",
   "LDO",
   "FET",
   "HBAR",
   "ALGO",
   "ICP"
  ],
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
   "Lost money: -37.0% of the account after fees (profit factor 0.76; below 1 means losses outweigh gains).",
   "Profitable in 1 of 2 calendar years (years with less than 3 months in the test are not counted).",
   "Maximum drawdown 56% of the account."
  ],
  "years": [
   {
    "year": 2024,
    "trades": 176,
    "win_rate": 0.9318181818181818,
    "profit_abs": 256.84815309,
    "days": 61,
    "partial": true,
    "profit_pct": 0.25684815309
   },
   {
    "year": 2025,
    "trades": 447,
    "win_rate": 0.668903803131991,
    "profit_abs": -637.41876331,
    "days": 365,
    "partial": false,
    "profit_pct": -0.5071565421350912
   },
   {
    "year": 2026,
    "trades": 272,
    "win_rate": 0.7757352941176471,
    "profit_abs": 10.672435359999994,
    "days": 303,
    "partial": true,
    "profit_pct": 0.017229462366631455
   }
  ],
  "report": "reports/cluc-may-72018.pdf"
 },
 {
  "key": "binhv45",
  "id": "S-04",
  "code": "693c8217",
  "verdict": "FAIL",
  "confidence": 97.5,
  "name": "BinHV45",
  "about": "1-minute Bollinger-band scalper.",
  "source": "https://github.com/freqtrade/freqtrade-strategies/blob/main/user_data/strategies/berlinguyinca/BinHV45.py",
  "kind": "Freqtrade strategy",
  "score": 36,
  "label": "No edge found in this test",
  "market_kind": "crypto",
  "symbols": [
   "BTC",
   "ETH",
   "SOL",
   "XRP",
   "DOGE",
   "ADA",
   "DOT",
   "NEAR",
   "ATOM",
   "FIL",
   "INJ",
   "ARB",
   "OP",
   "APT",
   "SUI",
   "LDO",
   "FET",
   "HBAR",
   "ALGO",
   "ICP"
  ],
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
   "Only 21 trades: too few to tell skill from luck.",
   "Not consistent over time: the first half made money and the second half lost it."
  ],
  "years": [
   {
    "year": 2026,
    "trades": 21,
    "win_rate": 0.8571428571428571,
    "profit_abs": 13.92018842,
    "days": 183,
    "partial": true,
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
  "score": 15,
  "label": "No edge found in this test",
  "market_kind": "crypto",
  "symbols": [
   "BTC",
   "ETH",
   "SOL",
   "XRP",
   "DOGE",
   "ADA",
   "DOT",
   "NEAR",
   "ATOM",
   "FIL",
   "INJ",
   "ARB",
   "OP",
   "APT",
   "SUI",
   "LDO",
   "FET",
   "HBAR",
   "ALGO",
   "ICP"
  ],
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
  "stress": -1.0,
  "lookahead": false,
  "flags": [
   "Lost money: -88.9% of the account after fees (profit factor 0.76; below 1 means losses outweigh gains).",
   "Returned -88.9% while simply holding the same coins returned -37.8%.",
   "Profitable in 0 of 2 calendar years (years with less than 3 months in the test are not counted).",
   "Maximum drawdown 92% of the account."
  ],
  "years": [
   {
    "year": 2024,
    "trades": 204,
    "win_rate": 0.8529411764705882,
    "profit_abs": 47.853133770000056,
    "days": 61,
    "partial": true,
    "profit_pct": 0.047853133770000056
   },
   {
    "year": 2025,
    "trades": 1128,
    "win_rate": 0.8067375886524822,
    "profit_abs": -774.07352697,
    "days": 365,
    "partial": false,
    "profit_pct": -0.7387233019812739
   },
   {
    "year": 2026,
    "trades": 710,
    "win_rate": 0.8098591549295775,
    "profit_abs": -162.49748389,
    "days": 303,
    "partial": true,
    "profit_pct": -0.5935339223739434
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
  "market_kind": "crypto",
  "symbols": [
   "BTC",
   "ETH",
   "SOL",
   "XRP",
   "DOGE",
   "ADA",
   "DOT",
   "NEAR",
   "ATOM",
   "FIL",
   "INJ",
   "ARB",
   "OP",
   "APT",
   "SUI",
   "LDO",
   "FET",
   "HBAR",
   "ALGO",
   "ICP"
  ],
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
  "stress": -1.0,
  "lookahead": false,
  "flags": [
   "Lost money: -44.0% of the account after fees (profit factor 0.97; below 1 means losses outweigh gains).",
   "Profitable in 2 of 5 calendar years.",
   "Maximum drawdown 71% of the account."
  ],
  "years": [
   {
    "year": 2022,
    "trades": 915,
    "win_rate": 0.594535519125683,
    "profit_abs": -651.4850037,
    "days": 365,
    "partial": false,
    "profit_pct": -0.6514850037
   },
   {
    "year": 2023,
    "trades": 1067,
    "win_rate": 0.6148078725398313,
    "profit_abs": 486.13727514999994,
    "days": 365,
    "partial": false,
    "profit_pct": 1.3948819428462567
   },
   {
    "year": 2024,
    "trades": 1071,
    "win_rate": 0.642390289449113,
    "profit_abs": 411.3671429299999,
    "days": 366,
    "partial": false,
    "profit_pct": 0.49286050850296276
   },
   {
    "year": 2025,
    "trades": 938,
    "win_rate": 0.5884861407249466,
    "profit_abs": -530.6278260699999,
    "days": 365,
    "partial": false,
    "profit_pct": -0.4258583934938382
   },
   {
    "year": 2026,
    "trades": 861,
    "win_rate": 0.5749128919860628,
    "profit_abs": -155.09439416000004,
    "days": 303,
    "partial": true,
    "profit_pct": -0.21679650235528503
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
  "score": 30,
  "label": "No edge found in this test",
  "market_kind": "crypto",
  "symbols": [
   "BTC",
   "ETH",
   "SOL",
   "XRP",
   "DOGE",
   "ADA",
   "DOT",
   "NEAR",
   "ATOM",
   "FIL",
   "INJ",
   "ARB",
   "OP",
   "APT",
   "SUI",
   "LDO",
   "FET",
   "HBAR",
   "ALGO",
   "ICP"
  ],
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
   "Lost money: -25.8% of the account after fees (profit factor 0.62; below 1 means losses outweigh gains).",
   "Profitable in 0 of 2 calendar years (years with less than 3 months in the test are not counted).",
   "Maximum drawdown 32% of the account."
  ],
  "years": [
   {
    "year": 2024,
    "trades": 63,
    "win_rate": 0.7777777777777778,
    "profit_abs": 67.55272160999998,
    "days": 61,
    "partial": true,
    "profit_pct": 0.06755272160999998
   },
   {
    "year": 2025,
    "trades": 300,
    "win_rate": 0.7,
    "profit_abs": -214.60243216000003,
    "days": 365,
    "partial": false,
    "profit_pct": -0.20102279523614847
   },
   {
    "year": 2026,
    "trades": 289,
    "win_rate": 0.6816608996539792,
    "profit_abs": -111.01027780999996,
    "days": 303,
    "partial": true,
    "profit_pct": -0.13014859034936455
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
  "market_kind": "crypto",
  "symbols": [
   "BTC",
   "ETH",
   "SOL",
   "XRP",
   "DOGE",
   "ADA",
   "DOT",
   "NEAR",
   "ATOM",
   "FIL",
   "INJ",
   "ARB",
   "OP",
   "APT",
   "SUI",
   "LDO",
   "FET",
   "HBAR",
   "ALGO",
   "ICP"
  ],
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
    "days": 365,
    "partial": false,
    "profit_pct": 0.17396731902999998
   },
   {
    "year": 2023,
    "trades": 163,
    "win_rate": 0.6196319018404908,
    "profit_abs": 766.9087458500001,
    "days": 365,
    "partial": false,
    "profit_pct": 0.6532624319420277
   },
   {
    "year": 2024,
    "trades": 166,
    "win_rate": 0.6927710843373494,
    "profit_abs": 2873.3815276900004,
    "days": 366,
    "partial": false,
    "profit_pct": 1.48045595475343
   },
   {
    "year": 2025,
    "trades": 45,
    "win_rate": 0.4666666666666667,
    "profit_abs": -107.38631529000003,
    "days": 365,
    "partial": false,
    "profit_pct": -0.022305893115427144
   },
   {
    "year": 2026,
    "trades": 133,
    "win_rate": 0.5338345864661654,
    "profit_abs": -734.0300990600001,
    "days": 303,
    "partial": true,
    "profit_pct": -0.15594862400489956
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
  "market_kind": "crypto",
  "symbols": [
   "BTC",
   "ETH",
   "SOL",
   "XRP",
   "DOGE",
   "ADA",
   "DOT",
   "NEAR",
   "ATOM",
   "FIL",
   "INJ",
   "ARB",
   "OP",
   "APT",
   "SUI",
   "LDO",
   "FET",
   "HBAR",
   "ALGO",
   "ICP"
  ],
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
  "stress": -1.0,
  "lookahead": false,
  "flags": [
   "Lost money: -98.8% of the account after fees (profit factor 0.80; below 1 means losses outweigh gains).",
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
    "days": 365,
    "partial": false,
    "profit_pct": -0.8118156339300001
   },
   {
    "year": 2023,
    "trades": 4236,
    "win_rate": 0.6012747875354107,
    "profit_abs": -80.50695114,
    "days": 365,
    "partial": false,
    "profit_pct": -0.4278089238829405
   },
   {
    "year": 2024,
    "trades": 4279,
    "win_rate": 0.6146295863519514,
    "profit_abs": -57.29685278999999,
    "days": 366,
    "partial": false,
    "profit_pct": -0.5321157907370654
   },
   {
    "year": 2025,
    "trades": 1388,
    "win_rate": 0.6123919308357348,
    "profit_abs": -34.69136334,
    "days": 365,
    "partial": false,
    "profit_pct": -0.6885862695139842
   },
   {
    "year": 2026,
    "trades": 486,
    "win_rate": 0.551440329218107,
    "profit_abs": -4.034293229999999,
    "days": 303,
    "partial": true,
    "profit_pct": -0.2571382567986852
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
  "market_kind": "crypto",
  "symbols": [
   "BTC",
   "ETH",
   "SOL",
   "XRP",
   "DOGE",
   "ADA",
   "DOT",
   "NEAR",
   "ATOM",
   "FIL",
   "INJ",
   "ARB",
   "OP",
   "APT",
   "SUI",
   "LDO",
   "FET",
   "HBAR",
   "ALGO",
   "ICP"
  ],
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
    "days": 365,
    "partial": false,
    "profit_pct": 0.013004808079999998
   },
   {
    "year": 2023,
    "trades": 26,
    "win_rate": 0.5384615384615384,
    "profit_abs": 81.38091496,
    "days": 365,
    "partial": false,
    "profit_pct": 0.08033615863506653
   },
   {
    "year": 2024,
    "trades": 5,
    "win_rate": 0.4,
    "profit_abs": 3.95541095,
    "days": 366,
    "partial": false,
    "profit_pct": 0.0036142749916479215
   },
   {
    "year": 2025,
    "trades": 1,
    "win_rate": 1.0,
    "profit_abs": 36.13495008,
    "days": 365,
    "partial": false,
    "profit_pct": 0.03289956914272228
   },
   {
    "year": 2026,
    "trades": 27,
    "win_rate": 0.7407407407407407,
    "profit_abs": 28.85685464,
    "days": 303,
    "partial": true,
    "profit_pct": 0.025436282919666615
   }
  ],
  "report": "reports/godstranew.pdf"
 },
 {
  "key": "fx-ema-trend-pine",
  "id": "S-11",
  "code": "21dccd0c",
  "verdict": "FAIL",
  "confidence": 97.5,
  "name": "EMA trend with ATR stops (Pine Script)",
  "about": "A classic trend-following script of the kind sold on TradingView: EMA 21/55 crossover in the direction of the EMA 200, stop loss 1.5 ATR, take profit 3 ATR. Tested on gold, WTI oil and the S&P 500.",
  "source": "https://backteststation.github.io/sources/bts_ema_trend.pine.txt",
  "kind": "TradingView Pine Script",
  "score": 15,
  "label": "No edge found in this test",
  "market_kind": "fx",
  "symbols": [
   "XAUUSD",
   "WTI",
   "US500"
  ],
  "scenarios": [
   {
    "name": "Optimistic",
    "ret": -0.0033728072116624764
   },
   {
    "name": "Normal",
    "ret": -0.0036035789703078316
   },
   {
    "name": "Pessimistic",
    "ret": -0.0037714129765953654
   }
  ],
  "period": [
   "2025-11-17",
   "2026-11-17"
  ],
  "return": -0.0035196619671640653,
  "market": 0.15907753272401717,
  "cagr": -0.003519661967164134,
  "max_dd": 0.0079083430448637,
  "trades": 63,
  "win_rate": 0.36507936507936506,
  "profit_factor": 0.8329701248822147,
  "stress": -0.003666516722665655,
  "lookahead": false,
  "flags": [
   "Lost money: -0.4% of the account after fees (profit factor 0.83; below 1 means losses outweigh gains).",
   "Returned -0.4% while simply holding the same symbols returned 15.9%.",
   "Only 63 trades: too few to tell skill from luck.",
   "Return and drawdown are both under 1% of the account: the positions are small against the capital (Forex moves are small without leverage), so the result says little.",
   "Not consistent over time: the first half made money and the second half lost it."
  ],
  "years": [
   {
    "year": 2025,
    "trades": 8,
    "win_rate": 0.5,
    "profit_abs": 0.7999568514837779,
    "days": 45,
    "partial": true,
    "profit_pct": 0.0007999568514837779
   },
   {
    "year": 2026,
    "trades": 55,
    "win_rate": 0.34545454545454546,
    "profit_abs": -4.319618818647843,
    "days": 320,
    "partial": true,
    "profit_pct": -0.004316166072026384
   }
  ],
  "report": "reports/fx-ema-trend-pine.pdf"
 },
 {
  "key": "fx-donchian-atr",
  "id": "S-12",
  "code": "3d34e9ab",
  "verdict": "FAIL",
  "confidence": 97.5,
  "name": "Donchian breakout with ATR stops (MT5 EA)",
  "about": "A textbook breakout Expert Advisor: buys a close above the 20-bar high, sells a close below the 20-bar low, stops at 2 ATR, risks 1% of the balance per trade. Tested on gold.",
  "source": "https://backteststation.github.io/sources/BTS_ATR_Breakout.mq5.txt",
  "kind": "MetaTrader 5 EA",
  "score": 25,
  "label": "No edge found in this test",
  "market_kind": "fx",
  "symbols": [
   "XAUUSD"
  ],
  "scenarios": [
   {
    "name": "Optimistic",
    "ret": -0.06986987373999991
   },
   {
    "name": "Normal",
    "ret": -0.09605950071999998
   },
   {
    "name": "Pessimistic",
    "ret": -0.10384319999999991
   }
  ],
  "period": [
   "2025-11-17",
   "2026-11-17"
  ],
  "return": -0.08653599999999995,
  "market": -0.05667436680796678,
  "cagr": -0.08653599999999984,
  "max_dd": 0.2091,
  "trades": 259,
  "win_rate": 0.38996138996138996,
  "profit_factor": 0.9321837846394733,
  "stress": -0.10320212625999996,
  "lookahead": false,
  "flags": [
   "Lost money: -8.7% of the account after fees (profit factor 0.93; below 1 means losses outweigh gains).",
   "Returned -8.7% while simply holding the same symbol returned -5.7%.",
   "XAUUSD: MetaTrader refused 14 of the EA's orders, all outside the symbol's trading hours."
  ],
  "years": [
   {
    "year": 2025,
    "trades": 32,
    "win_rate": 0.375,
    "profit_abs": -131.12999999999988,
    "days": 45,
    "partial": true,
    "profit_pct": -0.013112999999999988
   },
   {
    "year": 2026,
    "trades": 227,
    "win_rate": 0.3920704845814978,
    "profit_abs": -734.2299999999993,
    "days": 320,
    "partial": true,
    "profit_pct": -0.0743985886935383
   }
  ],
  "report": "reports/fx-donchian-atr.pdf"
 },
 {
  "key": "fx-rsi-30-70",
  "id": "S-13",
  "code": "bbb19702",
  "verdict": "FAIL",
  "confidence": 97.5,
  "name": "RSI 30/70 reversal (MT5 EA)",
  "about": "The most common beginner Expert Advisor: buys when RSI(14) crosses back above 30, sells when it crosses back below 70, fixed 300-point stop and 450-point target. Tested on EURUSD and GBPUSD.",
  "source": "https://backteststation.github.io/sources/BTS_RSI_Sample.mq5.txt",
  "kind": "MetaTrader 5 EA",
  "score": 25,
  "label": "No edge found in this test",
  "market_kind": "fx",
  "symbols": [
   "EURUSD",
   "GBPUSD"
  ],
  "scenarios": [
   {
    "name": "Optimistic",
    "ret": -0.04609480000000001
   },
   {
    "name": "Normal",
    "ret": -0.0644073458
   },
   {
    "name": "Pessimistic",
    "ret": -0.06914220000000001
   }
  ],
  "period": [
   "2025-11-17",
   "2026-11-17"
  ],
  "return": -0.0576185,
  "market": -0.025476192243931772,
  "cagr": -0.057618499999999906,
  "max_dd": 0.0625505,
  "trades": 271,
  "win_rate": 0.35424354243542433,
  "profit_factor": 0.786201829687996,
  "stress": -0.06949898015000001,
  "lookahead": false,
  "flags": [
   "Lost money: -5.8% of the account after fees (profit factor 0.79; below 1 means losses outweigh gains).",
   "Returned -5.8% while simply holding the same symbols returned -2.5%."
  ],
  "years": [
   {
    "year": 2025,
    "trades": 26,
    "win_rate": 0.38461538461538464,
    "profit_abs": -53.180000000000035,
    "days": 45,
    "partial": true,
    "profit_pct": -0.0026590000000000016
   },
   {
    "year": 2026,
    "trades": 245,
    "win_rate": 0.3510204081632653,
    "profit_abs": -1099.19,
    "days": 320,
    "partial": true,
    "profit_pct": -0.05510602692559516
   }
  ],
  "report": "reports/fx-rsi-30-70.pdf"
 },
 {
  "key": "fx-martingale-grid",
  "id": "S-14",
  "code": "2f69be11",
  "verdict": "FAIL",
  "confidence": 97.5,
  "name": "Martingale grid, no stop loss (MT5 EA)",
  "about": "The type of EA most often sold with a 'smooth' equity curve: it doubles the lot each time price moves 200 points against it and has no stop loss. Tested on EURUSD.",
  "source": "https://backteststation.github.io/sources/BTS_Martingale_Grid.mq5.txt",
  "kind": "MetaTrader 5 EA",
  "score": 14,
  "label": "No edge found in this test",
  "market_kind": "fx",
  "symbols": [
   "EURUSD"
  ],
  "scenarios": [
   {
    "name": "Optimistic",
    "ret": -0.565295797
   },
   {
    "name": "Normal",
    "ret": -0.6068651159999998
   },
   {
    "name": "Pessimistic",
    "ret": -0.6370973480000002
   }
  ],
  "period": [
   "2025-11-17",
   "2026-11-17"
  ],
  "return": -0.591749,
  "market": -0.0530387501452968,
  "cagr": -0.591749,
  "max_dd": 0.8521,
  "trades": 50,
  "win_rate": 0.74,
  "profit_factor": 0.5975164666545145,
  "stress": -0.6182022030000001,
  "lookahead": false,
  "flags": [
   "Lost money: -59.2% of the account after fees (profit factor 0.60; below 1 means losses outweigh gains).",
   "Returned -59.2% while simply holding the same symbol returned -5.3%.",
   "EURUSD: MetaTrader's stop out closed the positions on 2026-02-02 (the margin ran out); the EA could not trade EURUSD after that.",
   "EURUSD: MetaTrader refused 34,550 of the EA's orders, all without enough free margin.",
   "No trade after 2026-02-02 (the last 288 days of the test): the account had fallen to 4,082.51 USD, too little to open the EA's next trades.",
   "Only 50 trades: too few to tell skill from luck.",
   "Maximum drawdown 85% of the account."
  ],
  "years": [
   {
    "year": 2025,
    "trades": 22,
    "win_rate": 0.8636363636363636,
    "profit_abs": 4432.4800000000005,
    "days": 45,
    "partial": true,
    "profit_pct": 0.44324800000000003
   },
   {
    "year": 2026,
    "trades": 28,
    "win_rate": 0.6428571428571429,
    "profit_abs": -10349.970000000001,
    "days": 320,
    "partial": true,
    "profit_pct": -0.7171303892331742
   }
  ],
  "report": "reports/fx-martingale-grid.pdf"
 }
];
window.REVIEWS = {
 "count": 1,
 "average": 5.0,
 "reviews": []
};
window.VERIFY = {
 "C-2": {
  "code": "c4481393",
  "date": "2026-11-07",
  "kind": "trades",
  "name": "Anonymous",
  "verdict": "FAIL",
  "score": 8,
  "confidence": 99.0,
  "label": "Unverifiable: impossible prices",
  "trades": 12,
  "period": [
   "2026-09-02",
   "2026-09-29"
  ],
  "claimed": -90.97,
  "verified": -192.58
 },
 "C-3": {
  "code": "538975a7",
  "date": "2026-11-07",
  "kind": "freqtrade",
  "name": "Anonymous",
  "verdict": "FAIL",
  "score": 4,
  "confidence": 99.0,
  "label": "No edge found in this test",
  "trades": 56,
  "period": [
   "2026-08-09",
   "2026-11-07"
  ],
  "return": -3.49
 },
 "C-4": {
  "code": "3d2511a8",
  "date": "2026-11-07",
  "kind": "trades",
  "name": "Anonymous",
  "verdict": "FAIL",
  "score": 8,
  "confidence": 99.0,
  "label": "Unverifiable: impossible prices",
  "trades": 12,
  "period": [
   "2026-09-02",
   "2026-09-29"
  ],
  "claimed": -90.97,
  "verified": -192.58
 },
 "C-5": {
  "code": "6e152910",
  "date": "2026-11-07",
  "kind": "freqtrade",
  "name": "Anonymous",
  "verdict": "FAIL",
  "score": 21,
  "confidence": 99.0,
  "label": "No edge found in this test",
  "trades": 83,
  "period": [
   "2026-10-08",
   "2026-11-07"
  ],
  "return": -12.44
 },
 "C-6": {
  "code": "e00f97e9",
  "date": "2026-11-08",
  "kind": "pine",
  "name": "Private client",
  "verdict": "FAIL",
  "score": 30,
  "confidence": 97.5,
  "label": "No edge found in this test",
  "trades": 350,
  "period": [
   "2026-10-09",
   "2026-11-08"
  ],
  "return": -15.78
 },
 "C-7": {
  "code": "e37d940b",
  "date": "2026-11-08",
  "kind": "trades",
  "name": "Private client",
  "verdict": "FAIL",
  "score": 8,
  "confidence": 99.0,
  "label": "Prices do not match the reference data",
  "trades": 12,
  "period": [
   "2026-09-02",
   "2026-09-29"
  ],
  "claimed": -90.97,
  "verified": -192.58
 },
 "C-8": {
  "code": "d8d27051",
  "date": "2026-11-08",
  "kind": "fxtrades",
  "name": "Private client",
  "verdict": "FAIL",
  "score": 28,
  "confidence": 99.0,
  "label": "Prices do not match the reference data",
  "trades": 8,
  "period": [
   "2026-11-01",
   "2026-11-02"
  ],
  "claimed": -613.23,
  "verified": 129.02
 },
 "C-9": {
  "code": "7386f36e",
  "date": "2026-11-08",
  "kind": "fxtrades",
  "name": "Private client",
  "verdict": "FAIL",
  "score": 28,
  "confidence": 99.0,
  "label": "Prices do not match the reference data",
  "trades": 8,
  "period": [
   "2026-11-01",
   "2026-11-02"
  ],
  "claimed": -613.23,
  "verified": 129.02
 },
 "C-10": {
  "code": "bb11f019",
  "date": "2026-11-08",
  "kind": "freqtrade",
  "name": "Anonymous",
  "verdict": "FAIL",
  "score": 15,
  "confidence": 99.0,
  "label": "No edge found in this test",
  "trades": 348,
  "period": [
   "2026-08-10",
   "2026-11-08"
  ],
  "return": -22.64
 },
 "C-11": {
  "code": "c3c47dd2",
  "date": "2026-11-08",
  "kind": "pine",
  "name": "Private client",
  "verdict": "FAIL",
  "score": 30,
  "confidence": 97.5,
  "label": "No edge found in this test",
  "trades": 367,
  "period": [
   "2026-10-09",
   "2026-11-08"
  ],
  "return": -2.62
 },
 "C-12": {
  "code": "030b85d6",
  "date": "2026-11-08",
  "kind": "freqtrade",
  "name": "Private client",
  "verdict": "FAIL",
  "score": 9,
  "confidence": 99.0,
  "label": "No edge found in this test",
  "trades": 118,
  "period": [
   "2026-10-09",
   "2026-11-08"
  ],
  "return": -22.58
 },
 "C-13": {
  "code": "31f36c00",
  "date": "2026-11-08",
  "kind": "forex",
  "name": "Private client",
  "verdict": "FAIL",
  "score": 15,
  "confidence": 97.5,
  "label": "No edge found in this test",
  "trades": 1,
  "period": [
   "2026-08-10",
   "2026-11-08"
  ],
  "return": -0.31
 },
 "C-14": {
  "code": "a422e255",
  "date": "2026-11-08",
  "kind": "forex",
  "name": "Private client",
  "verdict": "CAUTION",
  "score": 41,
  "confidence": 97.5,
  "label": "Inconclusive",
  "trades": 22,
  "period": [
   "2026-10-09",
   "2026-11-08"
  ],
  "return": 0.11
 }
};
