import { Web3 } from "../../types/Web3";
import {
  WEB3_LOADED,
  Web3Actions,
  WEB3_ACCOUNT_LOADED,
  ETHER_BALANCE_LOADED,
} from "../../types/actions";

export const loadWeb3 = (connection: Web3): Web3Actions => ({
  type: WEB3_LOADED,
  connection
});

export const loadWeb3Account = (account: Web3): Web3Actions => ({
  type: WEB3_ACCOUNT_LOADED,
  account
});

export const loadEthBalance = (balance: string): Web3Actions => ({
  type: ETHER_BALANCE_LOADED,
  balance
});
