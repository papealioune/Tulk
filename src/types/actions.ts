import { Web3 } from "./Web3";

// action strings
export const WEB3_LOADED = "WEB3_LOADED";
export const WEB3_ACCOUNT_LOADED = "WEB3_ACCOUNT_LOADED";
export const ETHER_BALANCE_LOADED = "ETHER_BALANCE_LOADED";

export interface SetWeb3Action {
  type: typeof WEB3_LOADED;
  connection: Web3;
}

export interface Web3AccountAction {
  type: typeof WEB3_ACCOUNT_LOADED;
  account: Web3;
}

export interface Web3BalanceAction {
  type: typeof ETHER_BALANCE_LOADED;
  balance: string;
}

export type Web3ActionTypes =
  | SetWeb3Action
  | Web3AccountAction
  | Web3BalanceAction
export type Web3Actions = Web3ActionTypes;