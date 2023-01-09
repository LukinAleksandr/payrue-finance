import { BigNumber, ethers } from 'ethers';

export function getPrice(price: string, currencyAddress: string) {
  if (!price) {
    return 0;
  }
  if (price.indexOf('.') !== -1 || !Number.isInteger(Number(price))) {
    return price.replace(/.0$/, '');
  }
  const p = BigNumber.from(price);

  return String(currencyAddress).toLowerCase() ===
    String(process.env.REACT_APP_USDC_TOKEN_ADDRESS).toLowerCase()
    ? ethers.utils.formatUnits(p, 'mwei').replace(/.0$/, '')
    : ethers.utils.formatUnits(p, 'ether').replace(/.0$/, '');
}
