import { Web3 } from "../../types/Web3";
import {
  Web3ActionTypes,
  WEB3_LOADED,
  WEB3_ACCOUNT_LOADED,
  ETHER_BALANCE_LOADED
} from "../../types/actions";

const web3sReducerDefaultState: Web3[] = [];

const web3Reducer = (
  state = web3sReducerDefaultState,
  action: Web3ActionTypes
): Web3[] => {
  switch (action.type) {
    case WEB3_LOADED:
      return { ...state };
      case WEB3_ACCOUNT_LOADED:
        return { ...state };
      case ETHER_BALANCE_LOADED:
        return { ...state }
    default:
      return state;
  }
};

export { web3Reducer };
