import React from 'react';
import { StyleSheet, Text, View, FlatList, TextInput, StatusBar, ScrollView } from 'react-native';
import { Slider, Card } from 'nachos-ui' ;
import * as firebase from 'firebase';

import Icon from 'react-native-vector-icons/Ionicons';
import {
  RkTheme,
  RkButton,
  RkTextInput
} 
from 'react-native-ui-kitten';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', info: '', results: []};
  }

  render() {

    var listItems = this.state.results.map(function(item, i) {
      return (
        <Card
          key={i}
          footerContent={item.title || item.name}
          image={'https://image.tmdb.org/t/p/w300/'+item.poster_path}
        />
      );
    });

    return (
      <View style={styles.container}>
        <StatusBar
          backgroundColor="red"
          // barStyle="light-content"
        />

        <RkTextInput 
          label={<Icon name={'ios-search'}/>}
          placeholder="Search for movies or series..."
          style={{top: 20, height: 40, backgroundColor: 'white'}}
          placeholder="Search for movies or series..."
          onChangeText={(text) => {
            this.setState({text})
          }}
          onSubmitEditing={(text) => {
            this.setState({text: text.nativeEvent.text})
            search(text.nativeEvent.text).then(x => {
              this.setState({ results: x.results });
            });
          }}/>

        <View style={styles.results}>
          
          <ScrollView contentContainerStyle={styles.contentContainer}>
          {listItems}
          
          {/* <Card
            footerContent='The avocado is a tree that is native to Mexico'
            image='https://upx.cz/BsN'
          />
          <Card
            footerContent='Agaves are a type of succulent plant from Mexico'
            image='https://upx.cz/BsD'
          /> */}
          </ScrollView>
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  results: {
    flex: 2,
  },
  contentContainer: {
    paddingVertical: 20
  }
});

// Initialize Firebase
const firebaseConfig = {
  apiKey: "<your-api-key>",
  authDomain: "<your-auth-domain>",
  databaseURL: "<your-database-url>",
  storageBucket: "<your-storage-bucket>",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
