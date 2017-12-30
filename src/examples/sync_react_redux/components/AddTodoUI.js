/**
 * Created by roger on 30/12/2017.
 */
import React, { Component } from 'react';

class AddTodoUI extends Component {
  constructor(props) {
    super(props);
    this.input = null;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.input.value.trim()) {
      return;
    }
    this.props.onSubmit(this.input.value);
    this.input.value = '';
  }

  render() {
    return (
        <form className="form-inline" onSubmit = {this.handleSubmit}>
          <div className ="form-group mx-sm-3 mb-2">
            <input type="text" className="form-control"
                   ref={node => {this.input = node;}} />
          </div>
          <button type="submit" className="btn btn-primary mb-2">Add todo</button>
        </form>
    )
  }
}


export default AddTodoUI;