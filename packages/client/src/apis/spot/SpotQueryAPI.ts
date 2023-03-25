import { BigNumber } from 'ethers';
import { BaseSpotAPI } from './BaseSpotAPI';
import { BigDecimal, toBigDecimal } from '@vertex-protocol/utils';
import { GetEngineMaxWithdrawableParams } from '@vertex-protocol/engine-client';

export class SpotQueryAPI extends BaseSpotAPI {
  /**
   * Gets the estimated max withdrawable amount for a product
   * @param params
   */
  async getMaxWithdrawable(params: GetEngineMaxWithdrawableParams) {
    return this.context.engineClient.getMaxWithdrawable(params);
  }

  /**
   * Helper to get current token balance in the user's wallet (i.e. not in a Vertex subaccount)
   */
  async getTokenWalletBalance(productId: number): Promise<BigNumber> {
    const token = await this.getTokenContractForProduct(productId);
    return token.balanceOf(this.getChainSignerAddress());
  }

  /**
   * Helper to get current token allowance
   */
  async getTokenAllowance(productId: number): Promise<BigDecimal> {
    const token = await this.getTokenContractForProduct(productId);
    return toBigDecimal(
      await token.allowance(
        this.getChainSignerAddress(),
        this.context.contracts.endpoint.address,
      ),
    );
  }
}
