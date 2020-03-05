import React from 'react';

import { Home } from './app/views/Home.js';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator(
  {
    HomeRT: {
      screen: Home
    },
  },
  {
    initialRouteName: 'HomeRT'
  }
);
const MyRoutes = createAppContainer(AppNavigator);
export default class App extends React.Component {
  render() {
    return (
      <MyRoutes />

    );
  }
}