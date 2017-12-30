/**
 * Created by roger on 30/12/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Link extends Component {
  render() {
    if (this.props.active) {
      return (<span>{this.props.children}</span>);
    }

    return (
        <a href="#"
          onClick={(e) => {
            e.preventDefault();
            this.props.onClick();
          }}
        >
          {this.props.children}
        </a>
    );
  }
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Link;