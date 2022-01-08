export const increment = (diff = 1) => {
    return {
        type: "INCREMENT",
        payload: diff,
    };
};

export const decrement = (diff = 1) => {
    return {
        type: "DECREMENT",
        payload: diff,
    };
};

export const addUser = (user) => {
    return {
        type: "ADD_USER",
        payload: user,
    };
};
