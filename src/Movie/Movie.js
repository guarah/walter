import React from 'react'
import Radium from 'radium'

import { Text, View, StatusBar } from 'react-native'
import { Button, Icon } from 'native-base'

const styles = {
};

export default class Movie extends React.Component {
  static navigationOptions = ({ navigation }) => {
    const {state, setParams, navigate} = navigation;
    return {
      headerRight: (
        <Button iconLeft transparent primary onPress={() => navigate('Search')}>
          <Icon name='add' style={{color: '#C43441', fontSize: 30, marginRight: 10 }}/>
        </Button>
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
