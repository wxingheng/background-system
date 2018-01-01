/**
 * Created by roger on 31/12/2017.
 */
export const REQUEST_POSTS = 'REQUEST_POSTS';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT';
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT';

// 选择Subreddit
export const selectSubreddit = subreddit => ({
  type: SELECT_SUBREDDIT,
  subreddit
});

// 刷新Subreddit
export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
});

// 发生请求
export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
});

// 请求成功
export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data.children.map(child => child.data),
  // 获取的时间
  receivedAt: Date.now()
});

// 获取请求 第一个参数是请求的资源
const fetchPost = subreddit => dispatch => {
  // 更新state 查看reducer
  dispatch(requestPosts(subreddit));

  // 获取数据
  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
      .then(response => response.json())
      // 更新state
      .then(json => dispatch(receivePosts(subreddit, json)))
};

// 是否应该获取post
const shouldFetchPosts = (state, subreddit) => {
  // 设置state 查看当前state的状态 posts代表请求对象
  const posts = state.postsBySubreddit[subreddit];

  // 如果还没有发生请求
  if (!posts) {
    return true;
  }

  // 如果正在发生请求
  if (posts.isFetching) {
    return false;
  }

  // 请求到的数据是否还有效
  return posts.didInvalidate;
};

/**
 * @desc thunk
 * @param subreddit
 * dispatch
 * getState 获取当前的状态
 */
export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    // thunk
    return dispatch(fetchPost(subreddit));
  }
};
