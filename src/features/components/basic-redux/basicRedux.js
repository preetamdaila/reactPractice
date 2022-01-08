import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../../../react-actions";

const BasicRedux = () => {
    const counter = useSelector((state) => state.counter);
    const dispatch = useDispatch();
    return (
        <div>
            <div>Current count is: {counter}</div>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default BasicRedux;
