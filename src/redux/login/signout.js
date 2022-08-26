const SIGNOUT_REQUEST = 'booking-app-frontend/signout/SIGNOUT_REQUEST';

// Action Creators
const signOutRequest = (user) => ({
  type: SIGNOUT_REQUEST,
  payload: {
    user,
  },
});

// Thunk
const signOut = () => (dispatch) => {
  fetch('http://localhost:3000/users/sign_out', {
    method: 'DELETE',
    headers: {
      'Content-Type': '*/*',
      Authorization: localStorage.getItem('token'),
    },
  })
    .then((res) => res.json())
    .then((user) => {
      dispatch(signOutRequest(user));
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    })
    .catch((err) => {
      throw new Error(err);
    });
};

// Reducer
const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case SIGNOUT_REQUEST:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
export { signOutRequest, signOut };
