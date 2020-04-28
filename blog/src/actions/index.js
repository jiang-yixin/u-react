import _ from 'lodash'
import jsonPlaceholder from '../apis/jsonPlaceholder'

// action should always return an object not an async function
// we use a middleware here to handle async function for api call
// the dispatch is one of the redux callback arguments

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts())

  const userIds = _.uniq(_.map(getState().posts, 'userId'))

  userIds.forEach(id => dispatch(fetchUser(id)))

  /* another way to do it
  _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value()
   */
}

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceholder.get('/posts')

  dispatch ({ type: 'FETCH_POSTS', payload: response.data })
}

export const fetchUser = (id) => async dispatch => {
  const response = await jsonPlaceholder.get(`/users/${id}`)

  dispatch ({ type: 'FETCH_USER', payload: response.data })
}