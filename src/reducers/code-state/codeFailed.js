export function codeFailed(_state, _action){
  const CODE_FAILED = {
        ..._state,
        output: null,
        runCodeLoading: false,
        runCodeFail: true,
        runCodeOk: false,
  }
    return CODE_FAILED
}