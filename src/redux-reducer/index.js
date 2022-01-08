import { combineReducers } from "redux";

const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            return state - action.payload;
        default:
            return state;
    }
};

const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case "ADD_USER":
            return state;
        default:
            return state;
    }
};

const defaultReducer = combineReducers({
    counter: counterReducer,
    users: usersReducer,
});

export default defaultReducer;
