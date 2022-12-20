export const todoReducer = (intialState = [],action) => {
    switch (action.type) {
        case '[TODO] ADD TODO':
            
            return [ ...intialState, action.payload ]
        case '[TODO] REMOVE TODO':
            return intialState.filter(todo => todo.id!== action.payload);
        case '[TODO] Toggle todo':
            return intialState.map(todo => {
                if (todo.id === action.payload) {
                    return {...todo,
                    done: !todo.done}
                }
                return todo;
            })

        default:
            return intialState
    }
}