import $ from 'jquery';

export function changeUserInfo(username, email){
  return {
    type: 'CHANGE_USER_INFO',
    username,
    email
  }
}

// export function sendData(userObj) {
//   $.ajax({
//     type: 'POST',
//     url: 'http://localhost:3000/signup',
//     data: userObj
//   })
//   .done(function(data) {
//     return function(dispatch){
//       dispatch({
//         type: 'SENDDATA_SUCCESS',
//         payload: data
//       });
//     }
//   });
//   }
