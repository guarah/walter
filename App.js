import React from 'react';
import { StyleSheet, Text, View, FlatList, SegmentedControlIOS } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedIndex: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        {/* <FlatList
          data={[{key: 'a'}, {key: 'b'}]}
          renderItem={({item}) => <Text>{item.key}</Text>}
        /> */}
        <SegmentedControlIOS
          values={['One', 'Two']}
          selectedIndex={this.state.selectedIndex}
          onChange={(event) => {
            this.setState({selectedIndex: event.nativeEvent.selectedSegmentIndex});
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
