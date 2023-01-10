module.exports = {
  chainID: 'atlantic-1',
  lcd: 'https://sei-chain-incentivized.com/sei-chain-app',
  gasAdjustment: 1.75,
  gasPrices: { usei: 0.01 },
  prefix: 'sei',
  coinType: '118',
  baseAsset: 'usei',
  name: 'Sei',
  icon: 'https://www.seinetwork.io/logo.svg',
  ibc: {
    fromTerra: 'channel-100',
    toTerra: 'channel-11',
  }
}