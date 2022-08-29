import url from '../../helpers/ApiUrl';

const GET_USERS = 'booking-app-frontend/login/GET_USERS';

// Action Creators
const getUsers = (user) => ({
  type: GET_USERS,
  payload: {
    user,
  },
});

const fetchUsers = () => (dispatch) => {
  fetch(`${url}users`)
    .then((res) => res.json())
    .then((users) => {
      dispatch(getUsers(users));
    })
    .catch((err) => {
      throw new Error(err);
    });
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
