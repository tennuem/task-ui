import { ADD_TASK, DELETE_TASK} from "./actions";

export const taskReducer = (state = [], action) => {
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
        case DELETE_TASK: {
            const { id } = action.payload
            return [...state].filter(task => task.id !== id);
        }
        default:
            return state;
    }
}

export const getTasks = state => state.tasks;