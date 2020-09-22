import { CREATE_TODO } from './actionTypes';

export const createTodo = (text) => ({
    type: CREATE_TODO,
    payload: { text }
});
