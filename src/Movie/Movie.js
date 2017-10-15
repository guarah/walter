import React from 'react'
import Radium from 'radium'

import { Text, View, StatusBar, TouchableOpacity, Button } from 'react-native'
import { Icon } from 'react-native-elements'

import Serie from './../Serie/Serie'

const styles = {
};

export default class Movie extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams, navigate} = navigation;
    return {
      headerRight: (
        <Icon name='add' color='#C43441' onPress={() => navigate('Search')} />
      )
    };
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Movie</Text>
      </View>
    )
  }
}
