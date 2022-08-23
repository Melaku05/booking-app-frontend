const SIGNIN_REQUEST = 'booking-app-frontend/signin/SIGNIN_REQUEST';

// Action Creators
const signInRequest = (data) => {
  return {
    type: SIGNIN_REQUEST,
    payload: {
      data,
    },
  };
};

// Thunk
export const signIn = (email, password) => (dispatch) => {
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  };
  fetch('http://localhost:3000/users', params)
    .then((res) => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error('Invalid credentials');
      }
    })
    .then((data) => {
      dispatch(signInRequest(data));
    })
    .catch((err) => {
      console.log(err);
    });
};

// Reducer
const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
export { signInRequest, signIn };
