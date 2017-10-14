import React from 'react';
import Radium from 'radium';

import { View, StatusBar } from 'react-native';
import { AppNavigator } from './src/Router/Router'

import { API_TMDB_KEY, FIREBASE_CONFIG } from './src/lib/constants';
import * as firebase from 'firebase';
const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);

const styles = {
  container: {
    flex: 1,
  }
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AppNavigator />
      </View>
    );
  }
}