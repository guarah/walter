import React from 'react';
import Radium from 'radium';

import { View, StatusBar } from 'react-native';
import { Header } from 'react-native-elements';
import { TabNavigator } from "react-navigation";

// components
import Movie from './src/Movie/Movie.js'
import Serie from './src/Serie/Serie.js';
import SearchView from './src/search/SearchView.js';

import { API_TMDB_KEY, FIREBASE_CONFIG } from './src/lib/constants';
import * as firebase from 'firebase';
const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#35343B',
    justifyContent: 'center',
    paddingTop: 20
  }
};

const AppNavigator = TabNavigator({
  // Movies: { screen: Movie },
  Serie: { screen: Serie },
});

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    

    return (
      <View style={styles.container}>
        
        <StatusBar barStyle="light-content" backgroundColor="#222126" />

        <Header style={{backgroundColor: '#222126', height: 50, padding: 10}}n
          leftComponent={{ icon: 'menu', color: '#BF3340' }}
          centerComponent={{ text: 'Walter', style: { color: '#fff' } }} 
          rightComponent={{ icon: 'home', color: '#BF3340' }}
        />

        <SearchView/>

      </View>
    );
  }
}