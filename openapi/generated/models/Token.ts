/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Network } from './Network';
export type Token = {
  id: string;
  name: string;
  symbol: string;
  network: Network;
  color: string;
  keyword: string;
  displayName: string;
  hasMarkup?: boolean | null;
  address?: string | null;
  chain?: number | null;
  mainnet?: boolean | null;
  supportsExactIn?: boolean | null;
  supportsExactOut?: boolean | null;
  icon?: string | null;
};

