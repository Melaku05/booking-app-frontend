const SIGNUP_REQUEST = 'booking-app-frontend/signup/SIGNUP_REQUEST';

// Action Creators
const signUpRequest = (data) => ({
  type: SIGNUP_REQUEST,
  payload: {
    data,
  },
});

// Thunk
const signUp = (username, email, password) => (dispatch) => {
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      user: {
        username,
        email,
        password,
      },
    }),
  };
  fetch('http://localhost:3000/users', params)
    .then((res) => {
      localStorage.setItem('token', res.headers.get('Authorization'));
      return res.json();
    })
    .then((data) => {
      dispatch(signUpRequest(data));
    })
    .catch((err) => {
      throw new Error(err);
    });
};

// Reducer
const initialState = {};

const signUpReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SIGNUP_REQUEST:
      return action.payload;
    default:
      return state;
  }
};

export default signUpReducer;
export { signUpRequest, signUp };
