export function changeUserInfo(username, email){
  return {
    type: 'CHANGE_USER_INFO',
    username,
    email
  }
}

function fetchPosts(userObj) {
  return dispatch => {
    dispatch(requestPosts(userObj))
    return fetch(`http://www.reddit.com/r/${userObj}.json`)
      .then(response => response.json())
      .then(json => dispatch(receivePosts(userObj, json)))
  }
}

// export function receivePosts(userObj, json) {
//   return {
//     type: 'RECEIVE_POSTS',
//     userObj,
//     posts: json.data.children.map(child => child.data),
//     receivedAt: Date.now()
//   }
// }
