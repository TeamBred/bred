let reducer = function(state, action) {
  if (action.type === 'ADD_USER') {
    let user = Object.assign({},state);
    return user;
  }
  return state;
}
