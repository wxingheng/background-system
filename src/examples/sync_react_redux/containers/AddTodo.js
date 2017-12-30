/**
 * Created by roger on 30/12/2017.
 */
import AddTodoUI from '../components/AddTodoUI';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (value) => {
    console.log('value ', value);
    dispatch(addTodo(value));
  }
});

const AddTodo = connect(null, mapDispatchToProps)(AddTodoUI);

export default AddTodo;