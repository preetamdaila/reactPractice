import React, { useState, useEffect, useReducer } from "react";
import useLocalStorage from "../../customHooks/useLocalStorage";
import TodoComponent from "./toDoComponent";
import { reducer, ADD } from "./todoReducer";

const CreateToDo = () => {
    const [inputText, setInputText] = useState("");
    const [localTodo, setLocalTodo] = useLocalStorage(
        "todo",
        {
            todos: [],
            todoCount: 0,
        },
        (data) => data.todoCount > 0
    );
    const [{ todos, todoCount }, dispatch] = useReducer(reducer, localTodo);

    const setInput = (e) => {
        setInputText(e.target.value);
    };

    useEffect(() => {
        console.log(todos, todoCount);
        setLocalTodo("todo", { todos: todos, todoCount: todoCount });
    }, [todos, todoCount]);

    return (
        <React.Fragment>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch({ type: ADD, payload: inputText });
                    setInputText("");
                }}
            >
                <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInput(e)}
                    style={{ width: "100%" }}
                />
            </form>
            <div style={{ padding: "0.5rem 0", textAlign: "center" }}>
                Total todo count : {todoCount}
            </div>
            {todos.map((todo, index) => (
                <TodoComponent
                    todo={todo}
                    index={index}
                    dispatch={dispatch}
                    key={"todo-" + index}
                />
            ))}
        </React.Fragment>
    );
};

export default CreateToDo;
