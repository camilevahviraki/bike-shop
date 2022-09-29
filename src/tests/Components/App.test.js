import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter, Routes, Route,
} from 'react-router-dom';
import renderer from 'react-test-renderer';
import store from '../../redux/store';

import AddItem from '../../components/add/add';
import RemoveItem from '../../components/remove/remove';
import ReserveForm from '../__Mocks__/reserve';
import MainPage from '../../components/main/main';
import ReservePage from '../__Mocks__/myreserve';
import SplashScreen from '../__Mocks__/splashScreen';
import UserAccount from '../__Mocks__/userAccount';
import Details from '../../components/details/detail';
import Login from '../../components/authentication/login';
import Signup from '../../components/authentication/signup';

describe('Test Components', () => {
  test('test Add', () => {
    const tree = renderer
      .create(<Provider store={store}><AddItem /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('test Remove Page', () => {
    const tree = renderer
      .create(<Provider store={store}><RemoveItem /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('test Reserve Page', () => {
    const tree = renderer
      .create(<Provider store={store}><ReserveForm /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('test Main Page', () => {
    const tree = renderer
      .create(<Provider store={store}><MainPage /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('test Reserve Page', () => {
    const tree = renderer
      .create(<Provider store={store}><ReservePage /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('test SplashScreen Page', () => {
    const tree = renderer
      .create(<BrowserRouter><SplashScreen /></BrowserRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('test UserAccount Page', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <UserAccount />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('test Details Page', () => {
    const tree = renderer
      .create(<Provider store={store}><Details /></Provider>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('test Login Page', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Login />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('test Signup Page', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <BrowserRouter>
            <Signup />
          </BrowserRouter>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
