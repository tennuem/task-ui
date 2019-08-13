import { ADD_TASK, DELETE_TASK, TASKS_HAS_ERRORED, TASKS_IS_LOADING, TASKS_FETCH_DATA_SUCCESS } from "./actions";

let initialState = {
    hasErrored: false,
    isLoading: false,
    tasks: []
};

export const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK: {
            const { id, title, description } = action.payload
            return [
                ...state, {
                    id,
                    title,
                    description
                }
            ];
        }
        case TASKS_HAS_ERRORED: {
            return Object.assign({}, state, {
                hasErrored: action.hasErrored
            });
        }
        case TASKS_IS_LOADING: {
            return Object.assign({}, state, {
                isLoading: action.isLoading
            });
        }
        case TASKS_FETCH_DATA_SUCCESS: {
            const { id, title, description } = action.payload
            return Object.assign({}, state, {
                tasks: [
                    ...state.tasks, {
                        id,
                        title,
                        description
                    }
                ]
            })
        }
        case DELETE_TASK: {
            const { id } = action.payload
            return [...state].filter(task => task.id !== id);
        }
        default:
            return state;
    }
}

export const getTasks = state => state.tasks;