const algorithms = { ANY: 'ANY', SHA256: 'SHA-256', SCRYPT: 'Scrypt', ETHASH: 'EtHash',  }

const coins = [
  {
    name: 'Bitcoin',
    prophit: 0.00000018,
    algorithm: algorithms.SHA256,
    price: 35000
  },
  {
    name: 'Ethereum',
    prophit: 0.51931699,
    algorithm: algorithms.ETHASH,
    price: 2500
  },
  {
    name: 'Litecoin',
    prophit: 0.60808153,
    algorithm: algorithms.SCRYPT,
    price: 90
  },
  {
    name: 'Doge Coin',
    prophit: 873.81082762,
    algorithm: algorithms.SCRYPT,
    price: .12
  }
]

const machines = [
  {
    name: 'Antminer S19 Pro',
    algorithms: [
      { algorithm: algorithms.SHA256, hashes: 110, power: 3250 }
    ],
    price: 9000
  },
  {
    name: 'AvalonMiner A1166 Pro',
    algorithms: [
      { algorithm: algorithms.SHA256, hashes: 81, power: 3400 }
    ],
    price: 6000
  },
  {
    name: 'WhatsMiner M30S++',
    algorithms:	[
      { algorithm: algorithms.SHA256, hashes: 112, power: 3472 }
    ],
    price: 9000
  },
  {
    name: 'AvalonMiner 1246',
    algorithms: [
      { algorithm: algorithms.SHA256, hashes: 90, power: 3420 }
    ],
    price: 7000
  },
  {
    name: 'Antminer E9',
    algorithms: [
      { algorithm: algorithms.ETHASH, hashes: 3/1000, power: 2556 }
    ],
    price: 70000
  },
  {
    name: 'Jasminer X4 BRICK',
    algorithms: [
      { algorithm: algorithms.ETHASH, hashes: 65/1000/1000, power: 30 }
    ],
    price: 2300
  },
  {
    name: 'Innosilicon A11 Pro ETH',
    algorithms: [
      { algorithm: algorithms.ETHASH, hashes: 1.5/1000, power: 	2350 }
    ],
    price: 8000
  },
  {
    name: 'Antminer L7',
    algorithms: [
      { algorithm: algorithms.SCRYPT, hashes: 9.5/1000, power: 3425 }
    ],
    price: 28000
  },
  {
    name: 'Goldshell LT6',
    algorithms: [
      { algorithm: algorithms.SCRYPT, hashes: 3.35/1000, power: 3200 }
    ],
    price: 12000
  },
  {
    name: 'Innosilicon A6+ LTCMaster',
    algorithms: [
      { algorithm: algorithms.SCRYPT, hashes: 2.2/1000, power: 	2100 }
    ],
    price: 8000
  },
  {
    name: 'NVIDIA RTX 1660 Ti',
    algorithms: [
      { algorithm: algorithms.ETHASH, hashes: 28/1000/1000, power: 80 },
      { algorithm: algorithms.SCRYPT, hashes: 1.05/1000/1000, power: 90 }
    ],
    price: 350
  },
  {
    name: 'NVIDIA RTX 2080 Ti',
    algorithms: [
      { algorithm: algorithms.ETHASH, hashes: 55.20/1000/1000, power: 180 },
      { algorithm: algorithms.SCRYPT, hashes: 2.8/1000/1000, power: 220 }
    ],
    price: 800
  },
  {
    name: 'NVIDIA RTX 3080 Ti',
    algorithms: [
      { algorithm: algorithms.ETHASH, hashes: 91/1000/1000, power: 280 }
    ],
    price: 1500
  },
  {
    name: 'NVIDIA RTX 6900 XT',
    algorithms: [
      { algorithm: algorithms.ETHASH, hashes: 64/1000/1000, power: 150 }
    ],
    price: 1800
  },
  {
    name: 'NVIDIA RTX A4500',
    algorithms: [
      { algorithm: algorithms.ETHASH, hashes: 151/1000/1000, power: 340 }
    ],
    price: 2300
  }
]

const eletricity_cost = {
  PORTUGAL: .201/1000,
  SPAIN: .199/1000,
  FRANCE: .173/1000,
  UK: .251/1000,
  GERMANY: .323/1000,
  ALGERIA: .033/1000,
  ANGOLA: .013/1000,
  SOMALIA: .412/1000,
  BRASIL: .099/1000,
  USA: .109/1000,
}