import url from '../../helpers/ApiUrl';

const GET_DOCTORS = 'booking-app-frontend/doctor/GET_DOCTORS';

// Action Creators
const doctorRequest = (data) => ({
  type: GET_DOCTORS,
  payload: {
    data,
  },
});

// Thunk
const getDoctors = () => (dispatch) => {
  const params = {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  };
  fetch(`${url}doctors`, params)
    .then((res) => res.json())
    .then((data) => {
      dispatch(doctorRequest(data));
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

const doctorReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_DOCTORS:
      return action.payload;
    default:
      return state;
  }
};

export default doctorReducer;
export { doctorRequest, getDoctors };
