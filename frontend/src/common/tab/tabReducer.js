const INITAL_STATE = { select: '' }

export default (state = INITAL_STATE, action) => {
    switch (action.type) {
        case 'TAB_SELECTED':
            return { ...state, select: action.payload }
        default:
            return state
    }
}
