const INITIAL_STATE = {sumary: {credit: 0, debt: 0}}

export default function(state = INITIAL_STATE, action) {
    switch(action.type) {
        case 'BILLING_SUMMARY_FETCHED':
            return { ...state, sumary: action.payload.data }
    }
    return state
}