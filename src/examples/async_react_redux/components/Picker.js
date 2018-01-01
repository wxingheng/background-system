/**
 * Created by roger on 31/12/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Picker extends Component {
  render() {
    return (
      <span>
        <h1>{this.props.value}</h1>
        <form>
          <div className="form-group">
            <select className="form-control"
                    onChange={e => this.props.onChange(e.target.value)}
                    value={this.props.value}>
              {this.props.options.map(option =>
                <option value={option} key={option}>
                  {option}
                </option>)
              }
            </select>
          </div>
        </form>
      </span>
    )
  }
}

Picker.PropTypes = {
  option: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Picker;