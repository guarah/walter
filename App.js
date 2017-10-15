import React from 'react'
import Radium from 'radium'

import { View, StatusBar } from 'react-native'
import { AuthNavigator, AppNavigator } from './src/Router/Router'

const styles = {
  container: {
    flex: 1,
  }
}

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <AuthNavigator />
      </View>
    )
  }
}
