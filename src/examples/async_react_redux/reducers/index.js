/**
 * Created by roger on 31/12/2017.
 */
import { combineReducers } from 'redux';
// 同步reducer
import { todos } from '../../sync_react_redux/reducers/todos'
import { visibilityFilter } from '../../sync_react_redux/reducers/visibilityFilter'
import {
  REQUEST_POSTS,
  RECEIVE_POSTS,
  SELECT_SUBREDDIT,
  INVALIDATE_SUBREDDIT
} from '../actions';

// 当前被选择的subreddit
const selectedSubreddit = (state = 'frontend', action) => {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit;
    default:
      return state
  }
};

// 根据action设置state
const posts = (state = {
  isFetching: false,    // 是否正在获取数据
  didInvalidate: false, // 标志数据是否过期
  items: []
}, action) => {
  switch (action.type) {
    // 刷新
    case INVALIDATE_SUBREDDIT:
      return {
        ...state,
        didInvalidate: true
      };
    // 发送请求
    case REQUEST_POSTS:
      return {
        ...state,
        isFetching: true,
        didInvalidate: false
      };
    // 得到响应
    case RECEIVE_POSTS:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      };
    default:
      return state;
  }
};

// 根据action设置state
const postsBySubreddit = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return {
        ...state,
        [action.subreddit]: posts(state[action.subreddit], action)
      };
    default:
      return state;
  }
};

// state在这里
const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
  todos,
  visibilityFilter
});

export default rootReducer;