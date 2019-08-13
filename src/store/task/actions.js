export const ADD_TASK = "ADD_TASK";
export const TASKS_HAS_ERRORED = "TASKS_HAS_ERRORED";
export const TASKS_IS_LOADING = "TASKS_IS_LOADING";
export const TASKS_FETCH_DATA_SUCCESS = "TASKS_FETCH_DATA_SUCCESS";
export const DELETE_TASK = "DELETE_TASK";

let incrementId = 0;

export const addTask = (title, description, isCompleted) => ({
    type: ADD_TASK,
    payload: {
        id: ++incrementId,
        title,
        description,
        isCompleted
    }
});

export function tasksHasErrored(bool) {
    return {
        type: 'TASKS_HAS_ERRORED',
        payload: {
            hasErrored: bool
        }
    };
}

export function tasksIsLoading(bool) {
    return {
        type: 'TASKS_IS_LOADING',
        payload: {
            isLoading: bool
        }
    };
}

export function tasksFetchDataSuccess(tasks) {
    return {
        type: 'TASKS_FETCH_DATA_SUCCESS',
        payload: {
            tasks
        }
    };
}

export default function tasksFetchData(url) {
    return (dispatch) => {
        dispatch(tasksIsLoading(true));

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }

                dispatch(tasksIsLoading(false));

                return response;
            })
            .then((response) => response.json())
            .then((items) => dispatch(tasksFetchDataSuccess(items)))
            .catch(() => dispatch(tasksHasErrored(true)));
    };
}

export const deleteTask = id => ({
    type: DELETE_TASK,
    payload: { id }
});