/**
 * Created by roger on 31/12/2017.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Posts extends Component {
  render() {
    return (
        <ul>
          {this.props.posts.map((post, i) =>
            <li key={i}>{post.title}</li>
          )}
        </ul>
    )
  }
}

Posts.PropTypes = {
  posts: PropTypes.array.isRequired
};

export default Posts;