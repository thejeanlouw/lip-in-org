import DonationActionTypes from "./donation.types";

const INITIAL_STATE = {
    collections: null,
    isFetching: false,
    errorMessage: ''
}

const donationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case DonationActionTypes.FETCH_COLLECTIONS_START:
            return {
                ...state,
                isFetching: true
            }
        
        case DonationActionTypes.FETCH_COLLECTIONS_FAILURE:
            return {
                ...state,
                isFetching: false,
                errorMessage: action.payload
            }

        case DonationActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                isFetching: false,
                collections: action.payload
            }

        default:
            return state;
    }
}

export default donationReducer;