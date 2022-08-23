const GET_USERS = 'booking-app-frontend/login/GET_USERS';

// Action Creators
const getUsers = () => {
  return {
    type: GET_USERS,
    payload: {
      user,
    },
  };
};

const fetchUsers = () => (dispatch) => {
  fetch('http://localhost:3000/users')
    .then((res) => res.json())
    .then((users) => dispatch(getUsers(users)).catch((err) => console.log(err)));
};

// Reducer
const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_USERS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
export { getUsers, fetchUsers };
