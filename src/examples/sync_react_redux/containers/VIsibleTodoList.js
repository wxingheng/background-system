/**
 * Created by roger on 30/12/2017.
 */
import { connect } from 'react-redux';
import { toggleTodo } from '../actions';
import TodoList from '../components/TodoList'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(elem => elem.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(elem => !elem.completed);
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

// 输入逻辑
const mapStateToProps = (state) => {
  console.log('state ', state);
  return {todos: getVisibleTodos(state.todos, state.visibilityFilter)};
};

// 输出逻辑  它可以是一个函数，也可以是一个对象。
// 作为函数，应该返回一个对象，该对象的每个键值对都是一个映射，定义了 UI 组件的参数怎样发出 Action。
// 作为对象 键名会传给container 键值应该是action函数
const mapDispatchToProps = {
  onTodoClick: toggleTodo
};

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);

export default VisibleTodoList;