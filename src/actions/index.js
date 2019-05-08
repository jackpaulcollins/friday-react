import * as types from './../constants/ActionTypes';

export const testFunction = () => ({
  type: types.TEST_FUNCTION
})

export const onNewPost = (post) => ({
  type: types.NEW_POST,
  post: post
})
