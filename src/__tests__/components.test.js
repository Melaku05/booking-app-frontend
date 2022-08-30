import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import store from '../redux/store';
import Home from '../components/Home';
import Details from '../components/Details';
import MyReservation from '../components/MyReservation';
import Login from '../components/Login';
import Signup from '../components/Signup';
import Navigation from '../components/Navigation';
import Reservations from '../components/Reservations';

describe('Create components snapshot', () => {
  it('renders Home component snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Home />
      </Provider>,
    );
    expect(asFragment(<Home />)).toMatchSnapshot();
  });

  it('renders MyReservation component snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <MyReservation />
      </Provider>,
    );
    expect(asFragment(<MyReservation />)).toMatchSnapshot();
  });

  it('renders Reservations component snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Reservations />
      </Provider>,
    );
    expect(asFragment(<Reservations />)).toMatchSnapshot();
  });

  it('renders Details component snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    expect(asFragment(<Details />)).toMatchSnapshot();
  });

  it('renders Login component snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    expect(asFragment(<Login />)).toMatchSnapshot();
  });

  it('renders Signup component snapshot', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    expect(asFragment(<Signup />)).toMatchSnapshot();
  });

  it('renders Navigation component snapshot', () => {
    // Create local storage with the coresponding user info
    localStorage.setItem('user', JSON.stringify({
      user: {
        id: 1,
        username: 'John Doe',
        email: 'test@email.com',
      },
    }));
    // Start the test
    const renderNav = render(
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigation />} />
          </Routes>
        </BrowserRouter>
      </Provider>,
    );
    expect(renderNav.asFragment(<Navigation />)).toMatchSnapshot();
  });
});
