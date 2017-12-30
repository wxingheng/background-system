/**
 * Created by roger on 30/12/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Todo from './Todo'

class TodoList extends Component {
  componentWillMount() {
    console.log('this.props.todos ', this.props);
  }

  componentWillUpdate() {
    console.log('this.props.todos1 ', this.props);
  }

  render() {
    return (
      <ul style={{marginLeft: '16px'}}>
        {this.props.todos.map(todo =>
          <Todo
            key = {todo.id}
            {...todo}
            onClick={() => this.props.onTodoClick(todo.id)}
          />
        )}
      </ul>
    );
  }
}

TodoList.propTypes = {
  todos:PropTypes.arrayOf(PropTypes.shape({
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
};

export default TodoList;