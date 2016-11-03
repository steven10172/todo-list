import { ADD_TODO, DELETE_TODO, COMPLETE_TODO, COMPLETE_ALL } from './TodoList.actions.js';

const initialState = {
  todos: [
    {
      id: 0,
      text: 'New Entry',
      completed: true
    }
  ]
};

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.length,
          text: action.text,
          completed: false
        }
      ];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case COMPLETE_TODO:
      return state.map(todo => {
        if(todo.id === action.id) {
          todo.completed = !todo.completed;
        }

        return todo;
      });

    case COMPLETE_ALL:
    default:
      return state;
  }
}

function todosApp(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
    case DELETE_TODO:
    case COMPLETE_TODO:
      return Object.assign({}, state, {
        todos: todos(state.todos, action)
      });
    default:
      return state;
  }
};

export default todosApp;