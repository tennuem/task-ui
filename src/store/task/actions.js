export const ADD_TASK = "ADD_TASK";
export const TASKS_HAS_ERRORED = "TASKS_HAS_ERRORED";
export const TASKS_IS_LOADING = "TASKS_IS_LOADING";
export const TASKS_FETCH_SUCCESS = "TASKS_FETCH_SUCCESS";
export const DELETE_TASK = "DELETE_TASK";

function taskAddSuccess(task) {
    return {
        type: ADD_TASK,
        payload: task.task
    }
}

export function addTask(title, description) {
    return (dispatch) => {
        fetch("api/task", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                task: {
                    title: title,
                    description: description
                }
            })
        })
            .then(function (response) {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(tasksIsLoading(true));
                return response;
            })
            .then((response) => response.json())
            .then((task) => dispatch(taskAddSuccess(task)))
            .catch(() => dispatch(tasksHasErrored(true)));
    }
}

function tasksHasErrored(bool) {
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

export function fetchTasks() {
    return (dispatch) => {
        dispatch(tasksIsLoading(true));
        fetch("api/task")
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

function taskDeleteSuccess(id) {
    return {
        type: DELETE_TASK,
        payload: { id }
    }
}

export function deleteTask(id) {
    return (dispatch) => {
        fetch("api/task/" + id, { method: "DELETE" })
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                dispatch(tasksIsLoading(true));
                return response;
            })
            .then((response) => response.json())
            .then((task) => dispatch(taskDeleteSuccess(id)))
            .catch(() => dispatch(tasksHasErrored(true)));
    }
}