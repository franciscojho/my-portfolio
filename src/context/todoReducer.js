
export const initializer = initialState  => 
    JSON.parse(localStorage.getItem('todoAppState')) || initialState

export const todoReducer = (state, action) => {

    switch (action.type) {
        case 'ALL':
            return {
                ...state,
                btnAll: true,
                btnActive: false,
                btnCompleted: false,
            };

        case 'ACTIVE':
            return {
                ...state,
                btnAll: false,
                btnActive: true,
                btnCompleted: false,
            };

        case 'COMPLETED':
            return {
                ...state,
                btnAll: false,
                btnActive: false,
                btnCompleted: true,
            };

        case 'ADD':
            return {
                ...state,
                todos: [ action.payload, ...state.todos ]
            };

        case 'UPDATE':
            return {
                ...state,
                todos: state.todos.map( todo => 
                                            todo.id === action.payload.id ? 
                                                { ...todo, completed: action.payload.completed} : todo )   
            };

        case 'REMOVE':
            return {
                ...state,
                todos: state.todos.filter( todo => todo.id !== action.payload.id )
            }

        case 'REMOVE_ALL':
            return {
                ...state,
                todos: []
            }
    
        default:
            return {
                ...state
            };
    }
}