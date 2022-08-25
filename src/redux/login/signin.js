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
const signIn = (email, password) => (dispatch) => {
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        email: email,
        password: password,
      },
    }),
  };
  fetch('http://localhost:3000/users/sign_in', params)
    .then((res) => {
      localStorage.setItem('token', res.headers.get('Authorization'));
      return res.json();
    })
    .then((data) => {
      dispatch(signInRequest(data));
    })
    .catch((err) => {
      console.log(err);
    });
};

// Reducer
const initialState = {};

const signinReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNIN_REQUEST:
      return action.payload;
    default:
      return state;
  }
};

export default signinReducer;
export { signInRequest, signIn };
