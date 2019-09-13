import * as actionTypes from './actiontypes';
import states from './states';

export default function user_details(state =states.user_details, action) {
    switch (action.type) {
            case actionTypes.SHOW_USER_DETAILS:
                
            return {
                ...state,
                userDetails:action.payload.userDetails
                
            };
            case data:
                {
                    state={...state,data:action.payload.data}
                    break;
                }

        default:
            return state;
    }
}
