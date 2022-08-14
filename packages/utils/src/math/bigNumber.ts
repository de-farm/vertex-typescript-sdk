import { BigNumber as BigDecimal } from 'bignumber.js';
import { BigNumber as EthersBigNumber, BigNumberish } from 'ethers';

export { BigNumber as BigDecimal } from 'bignumber.js';

export function toEthersBN(val: BigDecimalish): EthersBigNumber {
  return EthersBigNumber.from(val instanceof BigDecimal ? val.toString() : val);
}

export function toBigDecimal(val: BigDecimalish): BigDecimal {
  const bnConstructorVal = (() => {
    if (val instanceof BigDecimal) {
      return val;
    } else if (typeof val === 'string' || typeof val === 'number') {
      return val;
    }
    return val.toString();
  })();
  return new BigDecimal(bnConstructorVal);
}

export type BigDecimalish = BigDecimal | BigDecimal.Value | BigNumberish;
