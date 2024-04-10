/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { OrderStatus } from './OrderStatus';
export type Order = {
  id: string;
  status: OrderStatus;
  createdAt?: string | null;
  expiresAt?: string | null;
  depositAddress?: string | null;
  depositMemo?: string | null;
  anonymous?: boolean | null;
  isExactOut?: boolean | null;
  recipientAddress?: string | null;
  recipientMemo?: string | null;
  nonRefundable?: boolean | null;
  inAmount?: number | null;
  inToken?: string | null;
  outAmount?: number | null;
  outToken?: string | null;
  explorerUrl?: string | null;
  transactionHash?: string | null;
  etaMinutes?: number | null;
};

