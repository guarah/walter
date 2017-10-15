import React from 'react';
import Radium from 'radium';

import { View, TextInput, ScrollView, Text, Image } from 'react-native';
import { Grid, Col } from 'react-native-elements'
import { TabNavigator, NavigationActions } from "react-navigation";
import { Card, CardItem, Left, Body, Right, Button, Icon } from 'native-base'

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
    flex: 1,
    backgroundColor: '#222126',
    padding: 10,
    paddingTop: 20
  },
  listView: {
  },
  headerText: {
    fontSize: 26,
    marginLeft: 15,
    fontWeight: 'bold',
  },
  bgCard: {
    flex: 1,
    height: 200,
    width: null  
  },
  colors: colors
};

export default class SearchView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '', results: []};
  }

  render() {
    const { navigate, dispatch } = this.props.navigation;
    
    const listItems = this.state.results
    .filter(x => x.media_type !== 'person')
    .map(function(item, i) {
      const titleLabel = item.media_type === 'movie' ? item.title + ' (Movie)' : item.name + ' (Serie)'
       return (
        <Card key={i} style={{borderColor: '#222126', borderRadius: 0}}>
          <CardItem style={{backgroundColor: '#222126'}}>
            <Left>
              <Body>
                <Text style={{color: 'white'}}>{titleLabel}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{uri: 'https://image.tmdb.org/t/p/w300/'+item.poster_path}} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
          <CardItem>
            <Left>
              <Text>{item.vote_average}</Text>
              <Icon name='star' style={{color: '#C43441'}} />
            </Left>
            <Right>
              <Button iconLeft transparent primary>
                <Icon name='add' style={{color: '#C43441', fontSize: 30}}/>
              </Button>
            </Right>
          </CardItem>
        </Card>
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

    function back () {
      const backAction = NavigationActions.back()
      dispatch(backAction)
    }

    return (

	<View style={styles.results}>
    <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row'}}>
      <Text style={[styles.colors.white, styles.headerText, {flex: 2}]}>Search</Text>
      <Icon style={{marginTop: 5, marginRight: 5}} name='close' color='#C43441' onPress={ () => { back() }} />
    </View>

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

		<ScrollView contentContainerStyle={styles.listView}>

        
        {listItems}

        <Text style={[styles.colors.white, styles.headerText]}>Suggestion from your list</Text>
        <Text style={[styles.colors.white, styles.headerText]}>Random suggestion</Text>
        <Text style={[styles.colors.white, styles.headerText]}>Watch again</Text>

        </ScrollView>
    </View>
    );
  }
}
