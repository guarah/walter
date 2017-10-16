import React from 'react'
import Radium from 'radium'

import { View, StatusBar, Image } from 'react-native'
import { Text, Button, Icon } from 'native-base'

const styles = {
};

export default class MovieSpace extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.media.title || navigation.state.params.media.name 
  });

  

  constructor(props) {
    super(props);
  }

  render() {
    const { navigate, dispatch, state } = this.props.navigation;
    const media = state.params.media;
    return (
      <View>
        <Image style={{height: 200}} source={{uri: `https://image.tmdb.org/t/p/w300/${media.poster_path}`}} />
        <Text>{media.overview}</Text>
        <View style={{flexWrap: 'wrap', alignItems: 'flex-start', flexDirection:'row'}}>
          <Icon name='star' style={{color: '#C43441'}} />
          <Text style={{marginTop: 8, marginLeft: 5}}>{media.vote_average}</Text>
        </View>
        <View>
          <Button block iconLeft transparent primary>
            <Icon name='add' style={{color: '#C43441', fontSize: 30}}/>
            <Text>Add to list</Text>
          </Button>
          <Button block iconLeft transparent primary>
            <Icon name='eye' style={{color: '#C43441', fontSize: 30}}/>
            <Text>Mark as watched</Text>
          </Button>
          <Button block iconLeft transparent primary>
            <Icon name='pause' style={{color: '#C43441', fontSize: 30}}/>
            <Text>Pause</Text>
          </Button>
        </View>
      </View>
    )
  }
}
