/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Order } from '../models/Order';
import type { Quote } from '../models/Quote';
import type { Token } from '../models/Token';
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';
export class DefaultService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}
  /**
   * Returns a list of tokens.
   * @returns any An array of tokens
   * @throws ApiError
   */
  public getTokens(): CancelablePromise<{
    success: boolean;
    data?: {
      tokens?: Array<Token>;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/tokens',
    });
  }
  /**
   * Returns the current USD prices of tokens.
   * @returns any
   * @throws ApiError
   */
  public getPrices(): CancelablePromise<{
    success: boolean;
    data?: {
      prices?: Record<string, number>;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/prices',
    });
  }
  /**
   * Returns a quote for a swap.
   * @returns any The quote for the swap.
   * @throws ApiError
   */
  public getQuote({
    fromToken,
    toToken,
    amount,
    isExactOut = false,
    anonymous = false,
  }: {
    fromToken: string,
    toToken: string,
    amount: number,
    isExactOut?: boolean,
    anonymous?: boolean,
  }): CancelablePromise<{
    success: boolean;
    data?: {
      quote?: Quote;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/quote',
      query: {
        'fromToken': fromToken,
        'toToken': toToken,
        'amount': amount,
        'isExactOut': isExactOut,
        'anonymous': anonymous,
      },
    });
  }
  /**
   * Returns the status of orders
   * @returns any The order statuses.
   * @throws ApiError
   */
  public getOrders({
    idsArray,
  }: {
    idsArray: Array<string>,
  }): CancelablePromise<{
    success: boolean;
    data?: {
      orders?: Record<string, Order>;
    };
  }> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/orders',
      query: {
        'ids[]': idsArray,
      },
    });
  }
  /**
   * Create an order.
   * @returns any The order has been created.
   * @throws ApiError
   */
  public postOrders({
    requestBody,
  }: {
    requestBody: {
      amount: number;
      fromToken: string;
      toToken: string;
      toAddress: string;
      anonymous?: boolean;
      isExactOut?: boolean;
      memo?: string;
    },
  }): CancelablePromise<{
    success: boolean;
    data?: {
      order: Order;
    };
  }> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/orders',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
