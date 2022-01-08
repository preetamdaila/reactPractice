import React from "react";
import { TOGGLE, DELETE } from "./todoReducer";

const TodoComponent = (props) => {
    const { todo, dispatch, index } = props;
    return (
        <React.Fragment>
            <div
                style={{
                    display: "grid",
                    padding: "0.5rem",
                    margin: "0.5rem 0",
                    gap: "1rem",
                    gridTemplateColumns: "10fr 2fr",
                    border: "2px solid var(--accent-bg-color)",
                    backgroundColor: "#ccc",
                    borderRadius: "0.5rem",
                }}
            >
                <div
                    style={{
                        textDecoration: todo.completed ? "line-through" : "",
                    }}
                >
                    {todo.text}
                </div>
                <div
                    style={{
                        display: "flex",
                        gap: "0.5rem",
                        flexDirection: "column",
                        justifyItems: "center",
                    }}
                >
                    <button
                        onClick={() =>
                            dispatch({ type: TOGGLE, payload: index })
                        }
                    >
                        Toggle
                    </button>
                    <button
                        onClick={() =>
                            dispatch({ type: DELETE, payload: index })
                        }
                    >
                        Delete
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default TodoComponent;
