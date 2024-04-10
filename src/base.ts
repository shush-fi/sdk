import { ShushApiClient } from '../openapi/generated'

interface CreateOrderParams {
  amount: number
  fromToken: string
  toToken: string
  toAddress: string
  memo?: string
  anonymous?: boolean
  isExactOut?: boolean
}

export interface ShushConfig {
  // Can be an empty string if you don't have an integrator id
  integratorId: string
  customApiUrl?: string
}

class Shush {
  private _apiClient: ShushApiClient
  private _config: ShushConfig

  constructor(config: ShushConfig) {
    this._config = config

    this._apiClient = new ShushApiClient({
      BASE: config.customApiUrl ?? 'https://api.shush.fi/v1',
      HEADERS: {
        'x-integrator-id': this._config.integratorId,
      },
    })
  }

  public async getTokens() {
    const result = await this._apiClient.default.getTokens()

    return result.data?.tokens
  }

  public async getNetworks() {
    const tokens = await this.getTokens()

    if (!tokens)
      return []

    return tokens.map(token => token.network)
  }

  public async getPrices() {
    const result = await this._apiClient.default.getPrices()

    return result.data?.prices
  }

  public async getQuote({
    amount,
    fromToken,
    toToken,
    isExactOut = false,
    anonymous = false,
  }: {
    amount: number
    fromToken: string
    toToken: string
    isExactOut?: boolean
    anonymous?: boolean
  }) {
    const response = await this._apiClient.default.getQuote({
      fromToken,
      toToken,
      amount,
      anonymous,
      isExactOut,
    })

    return response.data?.quote
  }

  public async createOrder({
    amount,
    fromToken,
    toToken,
    toAddress,
    memo,
    anonymous = false,
    isExactOut = false,
  }: CreateOrderParams) {
    const response = await this._apiClient.default.postOrders({
      requestBody: {
        amount,
        fromToken,
        toToken,
        toAddress,
        anonymous,
        isExactOut,
        memo,
      },
    })

    return response.data?.order
  }

  private async getOrdersStatus(ids: string[]) {
    return this._apiClient.default.getOrders({ idsArray: ids })
  }

  public async getOrder(id: string) {
    const result = await this.getOrdersStatus([id])
    return result?.data?.orders?.[id]
  }

  public async getOrders(ids: string[]) {
    const result = await this.getOrdersStatus(ids)

    return result?.data?.orders
  }
}

export { Shush }
