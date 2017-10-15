import React from 'react'
import Radium from 'radium'
import { Text, View, Button } from 'react-native'
import { API_TMDB_KEY, FIREBASE_CONFIG } from './../lib/constants'
import * as firebase from 'firebase'
const firebaseApp = firebase.initializeApp(FIREBASE_CONFIG)

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#222126'
  }
}

export default class Auth extends React.Component {
  
  constructor(props) {
    super(props)
  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

        <Button
          onPress={() => navigate('AppNavigator')}
          title="Home"
          color="#841584"
          accessibilityLabel="Home"
        />

      </View>
    )

    function goToHome() {
      const { navigate } = this.props.navigation;
      navigate('Home')
    }
  }
}
