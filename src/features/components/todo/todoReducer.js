export const ADD = "add-todo";
export const DELETE = "delete-todo";
export const TOGGLE = "toggle-todo";

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD:
            return {
                todos: [
                    { text: action.payload, completed: false },
                    ...state.todos,
                ],
                todoCount: state.todoCount + 1,
            };
        case TOGGLE:
            return {
                todos: state.todos.map((todo, index) => {
                    return index === action.payload
                        ? { text: todo.text, completed: !todo.completed }
                        : todo;
                }),
                todoCount: state.todoCount,
            };
        case DELETE:
            return {
                todos: state.todos.filter(
                    (todo, index) => index !== action.payload
                ),
                todoCount: state.todoCount - 1,
            };
        default:
            return state;
    }
};
