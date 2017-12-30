/**
 * Created by roger on 30/12/2017.
 */
let nextTodoId = 0;

export const addTodo = (text) => {
  console.log('text ', text);
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
};

export const setVisibilityFilter = (filter) => ({
  type: 'SET_VISIBILITY_FILTER',
  filter
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});
