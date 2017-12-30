/**
 * Created by roger on 30/12/2017.
 */
import React, { Component } from 'react';
import FilterLink from '../containers/FooterLink';

class Footer extends Component {
  render() {
    return (
        <p style={{marginLeft: '16px'}}>
          Show:
          {" "}
          <FilterLink filter="SHOW_ALL">
            All
          </FilterLink>
          {", "}
          <FilterLink filter="SHOW_ACTIVE">
            Active
          </FilterLink>
          {", "}
          <FilterLink filter="SHOW_COMPLETED">
            Completed
          </FilterLink>
        </p>
    );
  }
}

export default Footer;