import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getDoctors } from '../redux/doctors/doctors';
import { signOut } from '../redux/login/signout';
const Home = () => {
  const doctor = useSelector((state) => state.doctor);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDoctors());
  }, []);

  return (
    <div>
      {doctor.data.error && <h1>{doctor.data.error}</h1>}
      {doctor.data.error === undefined && (
        <div>
          {doctor.data.map((doc) => (
            <div key={doc.id}>
              <div>
                <img src={doc.photo} alt={doc.name} />
              </div>
              <div>
                <h2>Name: {doc.name}</h2>
                <p>specialization: {doc.specialization}</p>
                <p>location: {doc.city}</p>
                <p>price: {doc.fee}</p>
                <p>member since: {doc.created_at}</p>
                <p>about: {doc.detail}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <button onClick={() => dispatch(signOut())}>Sign Out</button>
    </div>
  );
};

export default Home;
