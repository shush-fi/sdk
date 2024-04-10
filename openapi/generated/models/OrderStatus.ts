/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Order Status:
 * * `-1` - New, The order has been created.
 * * `0` - Waiting, The order is waiting for the user to deposit funds.
 * * `1` - Confirming, The order is waiting for confirmations.
 * * `2` - Exchanging, The order is exchanging.
 * * `3` - Anonymizing, The order is anonymizing.
 * * `4` - Finished, The order has been completed.
 * * `5` - Expired, The order has expired.
 * * `6` - Failed, The order has failed.
 * * `7` - Refunded, The order has been refunded.
 * * `8` - Deleted, The order has been deleted for security purposes.
 *
 */
export enum OrderStatus {
  '_-1' = -1,
  '_0' = 0,
  '_1' = 1,
  '_2' = 2,
  '_3' = 3,
  '_4' = 4,
  '_5' = 5,
  '_6' = 6,
  '_7' = 7,
  '_8' = 8,
}
