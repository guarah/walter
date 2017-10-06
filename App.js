import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput } from 'react-native';
import { Slider } from 'nachos-ui' ;
import * as firebase from 'firebase';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', info: ''};
  }

  render() {

    return (
      <View style={styles.container}>
        {/* Statusbar */}
        <View style={styles.statusbar}/>
        <View style={styles.navbar}>
          <Text style={styles.navbarTitle}>{this.props.title}</Text>
        </View>

        <View style={{padding: 10}}>
          <TextInput
            style={{height: 40}}
            placeholder="Search for movies or series..."
            onSubmitEditing={(text) => {
              this.setState({text})
              search(text.nativeEvent.text).then(x => {
                this.setState(previousState => {
                  return { info: JSON.stringify(x.results[0]) };
                });
              });
            }}
          />
        </View>

        <View style={styles.navbar}>
          <Text>{this.state.info}</Text>
        </View>



      </View>
    );
  }
}

const API_TMDB_KEY = 'b05f7a180e13978b2e69b5ed5df67da1';

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 30
  },
  statusbar: {
    backgroundColor: 'green'
  },
  navbar: {
    backgroundColor: 'blue'
  },
  navbarTitle: {
    backgroundColor: 'white'
  },
});

// Initialize Firebase
const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
