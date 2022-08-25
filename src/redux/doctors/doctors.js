const GET_DOCTORS = 'booking-app-frontend/doctor/GET_DOCTORS';

// Action Creators
const doctorRequest = (data) => {
  return {
    type: GET_DOCTORS,
    payload: {
      data,
    },
  };
};

// Thunk
const getDoctors = () => (dispatch) => {
  const params = {
    method: 'GET',
    headers: {
      Authorization: localStorage.getItem('token'),
    },
  };
  fetch('http://localhost:3000/doctors', params)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      dispatch(doctorRequest(data));
    })
    .catch((err) => {
      console.log(err);
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
