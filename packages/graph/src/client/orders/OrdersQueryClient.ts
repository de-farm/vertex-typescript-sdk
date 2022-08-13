import { BaseVertexGraphClient } from '../base';
import {
  AllMarketOrdersParams,
  AllMarketOrdersResponse,
  OrdersByIdParams,
  OrdersByIdResponse,
  SubaccountOrdersParams,
  SubaccountOrdersResponse,
} from './types';
import {
  OnBookOrdersByIDQueryQueryVariables,
  OrderStatus,
} from '../../generated';
import {
  getMarketEntityId,
  getOnBookOrderEntityId,
  getSubaccountEntityId,
} from '../../utils';

const ALL_STATUSES: OrderStatus[] = [
  'ON_BOOK',
  'INSTANT_FILL',
  'CANCELLED',
  'FILLED',
];

export class OrdersQueryClient extends BaseVertexGraphClient {
  async getAllMarketOrders(
    params: AllMarketOrdersParams,
  ): Promise<AllMarketOrdersResponse> {
    const data = await this.graph.PaginatedAllMarketOrdersQuery({
      filteredStatuses: params.statuses ?? ALL_STATUSES,
      marketEntityId: getMarketEntityId(params.productId),
      first: params.first,
      skip: params.skip,
    });
    return data.orders;
  }

  async getSubaccountOrders(
    params: SubaccountOrdersParams,
  ): Promise<SubaccountOrdersResponse> {
    const data = await this.graph.PaginatedSubaccountOrdersQuery({
      filteredStatuses: params.statuses ?? ALL_STATUSES,
      subaccountEntityId: getSubaccountEntityId(params.subaccountId),
      first: params.first,
      skip: params.skip,
    });
    return data.orders;
  }

  async getOnBookOrdersByIds(
    params: OrdersByIdParams,
  ): Promise<OrdersByIdResponse> {
    const orderEntityIds: OnBookOrdersByIDQueryQueryVariables['orderEntityIds'] =
      params.ids.map((id) => {
        return getOnBookOrderEntityId(id.productId, id.orderbookId);
      });
    const data = await this.graph.OnBookOrdersByIDQuery({
      orderEntityIds,
    });
    return data.orders;
  }
}
