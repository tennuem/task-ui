export const ADD_TASK = "ADD_TASK";
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

export const deleteTask = id => ({
    type: DELETE_TASK,
    payload: { id }
});