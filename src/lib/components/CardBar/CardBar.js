import React from 'react';
import Radium from 'radium';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';

const styles = {
};

export class CardBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {a: ''};
  }

  render() {
    return (
      <View>
        <Text style={{color: 'red'}}>{this.props.text}</Text>

				<View style={{flexWrap: 'wrap', 
			alignItems: 'flex-start',
			flexDirection:'row',}}>

				<Icon
					name='playlist-add' // add to list
					color='fuchsia' />

					<Icon
					name='check' // viewed
					color='green' />

					<Icon
					name='star'
					color='yellow' />

				</View>
				
      </View>
    );
  }
}