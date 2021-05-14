import LIP_IN_DATA from "../../data/raw-js/lip-in-data";

const INITIAL_STATE = {
    collections: LIP_IN_DATA
}

const donationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default:
            return state;
    }
}

export default donationReducer;