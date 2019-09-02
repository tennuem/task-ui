import {
    ADD_TASK,
    TASKS_HAS_ERRORED,
    TASKS_IS_LOADING,
    TASKS_FETCH_SUCCESS,
    DELETE_TASK
} from "./actions";

const initialState = {
    hasErrored: false,
    isLoading: false,
    items: []
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            return Object.assign({}, state, {
                hasErrored: false,
                isLoading: false,
                items: [...state.items, action.payload]
            });
        }
        case TASKS_HAS_ERRORED: {
            return Object.assign({}, state, {
                hasErrored: true,
                isLoading: false
            });
        }
        case TASKS_IS_LOADING: {
            return Object.assign({}, state, {
                hasErrored: false,
                isLoading: true
            });
        }
        case TASKS_FETCH_SUCCESS: {
            return Object.assign({}, state, {
                hasErrored: false,
                isLoading: false,
                items: action.payload.tasks
            });
        }
        case DELETE_TASK: {
            const { id } = action.payload
            return Object.assign({}, state, {
                hasErrored: false,
                isLoading: false,
                items: state.items.filter(task => task.id !== id)
            });
        }
        default:
            return state;
    }
}

export const getTasks = state => state.tasks;