import DonationActionTypes from "./donation.types";

const INITIAL_STATE = {
    collections: null
}

const donationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case DonationActionTypes.UPDATE_COLLECTIONS:
            return {
                ...state,
                collections: action.payload
            }

        default:
            return state;
    }
}

export default donationReducer;