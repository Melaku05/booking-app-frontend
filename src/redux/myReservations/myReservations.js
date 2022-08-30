import url from '../../helpers/ApiUrl';

const GET_MY_RESERVATIONS = 'booking-app-frontend/doctor/GET_MY_RESERVATIONS';

// Action Creators
const myReservationsRequest = (data) => ({
  type: GET_MY_RESERVATIONS,
  payload: {
    data,
  },
});

// Thunk
const getMyReservations = () => (dispatch) => {
  const params = {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  };
  fetch(`${url}reservations`, params)
    .then((res) => res.json())
    .then((data) => {
      dispatch(myReservationsRequest(data));
    })
    .catch((err) => {
      throw new Error(err);
    });
};

// Reducer
const initialState = {
  data: {
    error: 'Loading...',
  },
};

const myReservationsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_MY_RESERVATIONS:
      return action.payload;
    default:
      return state;
  }
};

export default myReservationsReducer;
export { myReservationsRequest, getMyReservations };
