import React from 'react';
import Radium from 'radium';
import { Text, View, TextInput, StatusBar, ScrollView } from 'react-native';
import { Card } from 'nachos-ui' ;
import { API_TMDB_KEY, FIREBASE_CONFIG } from './constants';
import * as firebase from 'firebase';
const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG);

const colors = {
  white: {
    color: 'white'
  },
  black: {
    color: 'black'
  }
};

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    paddingTop: 20,
  },
  srachBarContainerStyle: {
    width: '92%',
    height: 35,
    marginLeft: 15,
    marginTop: 8,
    marginBottom: 10,
    padding: 5,
    borderRadius: 8,
    backgroundColor: '#3d3d3d',
    color: 'grey',
    fontSize: 20,
    fontStyle: 'italic',
  },
  results: {
    flex: 2
  },
  contentContainer: {
    paddingVertical: 20
  },
  headerText: {
    fontSize: 30,
    marginTop: 20,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  colors: colors
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', info: '', results: []};
  }

  render() {
    const listItems = this.state.results.map(function(item, i) {
      return (
        <Card
          key={i}
          footerContent={item.title || item.name}
          image={'https://image.tmdb.org/t/p/w300/'+item.poster_path}
        />
      );
    });

    function search(searchText) {
      const query = searchText.replace('','+');
      return fetch(`https://api.themoviedb.org/3/search/multi?page=1&api_key=${API_TMDB_KEY}&query=${query}`)
        .then((response) => response.json())
        .then((responseJson) => {
          return responseJson;;
        })
        .catch((error) => {
          console.error(error);
        });
    }

    return (
      <View style={styles.container}>

        <StatusBar barStyle="light-content" />

        <Text style={[styles.colors.white, styles.headerText]}>Search</Text>

        <TextInput
          placeholder='Series or movies...'
          placeholderTextColor="grey"
          style={[
            styles.srachBarContainerStyle
          ]}
          onChangeText={(text) => {
            this.setState({text})
          }}
          onSubmitEditing={(text) => {
            this.setState({text: text.nativeEvent.text})
            search(text.nativeEvent.text).then(x => {
              this.setState({ results: x.results });
            });
          }}
        />

        <View style={styles.results}>
          <ScrollView contentContainerStyle={styles.contentContainer}>
            {listItems}
          </ScrollView>
        </View>

      </View>
    );
  }
}