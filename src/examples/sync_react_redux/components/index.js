/**
 * Created by roger on 30/12/2017.
 */
import React, { Component } from 'react';
import AddTodo from '../containers/AddTodo';
import VisibleTodoList from '../containers/VIsibleTodoList';
import Footer from './Footer';

class SyncReactRedux extends Component {
  render() {
    return (
      <div>
        <AddTodo />
        <VisibleTodoList />
        <Footer />
      </div>
    );
  }
}

export default SyncReactRedux;