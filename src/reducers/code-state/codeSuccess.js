export function codeSuccess(state, action){
    const CODE_SUCCESS = {
        ...state,
        output: action.payload,
        runCodeLoading: false,
        runCodeFail: false,
        runCodeOk: true,
    }

    return CODE_SUCCESS
}
