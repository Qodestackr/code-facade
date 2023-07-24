import {
  RUN_CODE_SUCCESS,
  RUN_CODE_FAILED,
  RUN_CODE_RUNNING,
} from "../actions/types";

import {
  codeDefault,
  codeSuccess,
  codeRunning,
  codeFailed,
} from './code-state'

const INITIAL_STATE = {
  output: null,
  runCodeLoading: false,
  runCodeFail: false,
  runCodeOk: false,
};

export default function rootReducer (state = INITIAL_STATE || null, action) {
  switch (action.type) {
    case RUN_CODE_SUCCESS:
      return codeSuccess(state, action)
    case RUN_CODE_RUNNING:
      return codeRunning(state, action)
    case RUN_CODE_FAILED:
      return codeFailed(state, action)

    default:
      return codeDefault(INITIAL_STATE)
  }
}
