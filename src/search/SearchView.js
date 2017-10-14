import React from 'react';
import Radium from 'radium';

import { Text, View, TextInput, ScrollView } from 'react-native';
import { Card } from 'nachos-ui' ;
import { TabNavigator } from "react-navigation";

import { API_TMDB_KEY } from '../lib/constants';

const colors = {
  white: {
    color: 'white'
  },
  black: {
    color: 'black'
  }
};

const styles = {
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
    flex: 1
  },
  contentContainer: {
    padding: 10
  },
  cardStyle: {
    backgroundColor: 'white'
  },
  headerText: {
    fontSize: 26,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  colors: colors
};

export default class SearchView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', results: []};
  }

  render() {
    // search results
    const listItems = this.state.results.map(function(item, i) {
      return (
        <Card
          style={styles.cardStyle}
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

	<View style={styles.results}>
		<ScrollView contentContainerStyle={styles.contentContainer}>
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

        {/* search results */}
        {listItems}

        <Text style={[styles.colors.white, styles.headerText]}>Suggestion from your list</Text>
        <Text style={[styles.colors.white, styles.headerText]}>Random suggestion</Text>
        <Text style={[styles.colors.white, styles.headerText]}>Watch again</Text>

        </ScrollView>
    </View>
    );
  }
}