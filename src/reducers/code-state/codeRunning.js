export function codeRunning(state, action){
  const CODE_RUNNING = {
        ...state,
        output: null,
        runCodeLoading: true,
        runCodeFail: false,
        runCodeOk: false,
  }

  return CODE_RUNNING
}
