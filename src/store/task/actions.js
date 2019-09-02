export const ADD_TASK = "ADD_TASK";
export const TASKS_HAS_ERRORED = "TASKS_HAS_ERRORED";
export const TASKS_IS_LOADING = "TASKS_IS_LOADING";
export const TASKS_FETCH_SUCCESS = "TASKS_FETCH_SUCCESS";
export const DELETE_TASK = "DELETE_TASK";

let incrementId = 0;

export function addTask(title, description, isCompleted) {
    return {
        type: ADD_TASK,
        payload: {
            id: ++incrementId,
            title,
            description,
            isCompleted
        }
    }
}

function tasksHasErrored (bool){
    return {
        type: TASKS_HAS_ERRORED,
        payload: bool
    }
}

function tasksIsLoading(bool) {
    return {
        type: TASKS_IS_LOADING,
        payload: bool
    }
}

function tasksFetchSuccess(tasks) {
    return {
        type: TASKS_FETCH_SUCCESS,
        payload: tasks
    }
}

export function fetchTasks(url) {
    return (dispatch) => {
        dispatch(tasksIsLoading(true));
        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(tasksIsLoading(true));
                return response;
            })
            .then((response) => response.json())
            .then((tasks) => dispatch(tasksFetchSuccess(tasks)))
            .catch(() => dispatch(tasksHasErrored(true)));
    }
}

export function deleteTask (id){
    return {
        type: DELETE_TASK,
        payload: { id }
    }
}