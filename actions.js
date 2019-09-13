import * as actionTypes from "./actiontypes";
import * as API from "./api";
import { showMessage, } from '../../config/utils';

//getting from localstorage and storing in reducer
export function showUserDetails() {
  return function (dispatch) {
    const userDetails = JSON.parse(localStorage.getItem("getUserInfoFromLocalStorage"));
    if (userDetails) {
      const payload = {
        userDetails:userDetails
      };
      dispatch({
        type: actionTypes.SHOW_USER_DETAILS,
        payload
      });
    }
  };
}

export function Profile(dispatch)
{  const token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InByaW5jZWJhdHJhMjMxNUBnbWFpbC5jb20iLCJpYXQiOjE1NTMyNzQ1MzQsImV4cCI6MTU1MzM2MDkzNH0.SdI9Qj-LKjiQ7YHyZWFpdCuNtkFOQ5JoJqd_lhPWP0c"
   fetch("https://weaverse-api.herokuapp.com/users/profile/${token}")
   .then(response=>response.json())
   .then(response=>{
       dispatch({type:'data',payload:response})
   })
}

export const updateProfile = payload => dispatch => {
  console.log('after coming data',payload)
    API.updateProfile(payload, (error, response) => {
      if (!error && response) {
        showMessage('success', 'Your profile has been successfully updated');
    }
    });
};

// export const getUserProfile = payload => dispatch => {
//   console.log("users action called");
//   API.getUserProfile(payload, (error, response) => {
//     dispatch({
//       type: actionTypes.GOT_USER_PROFILE
//     });
//     console.log("users details response", response);
//   });
// };
