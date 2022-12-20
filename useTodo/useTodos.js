import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const useTodos = ( initialForm= {} ) => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] ADD TODO',
            payload: todo
        }

        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] REMOVE TODO',
            payload: id
        });
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] Toggle todo',
            payload: id
        });  
    }
   

    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo=>!todo.done).length
    }

}