import { TabNavigator, StackNavigator } from "react-navigation";

import Movie from './../Movie/Movie'
import Serie from './../Serie/Serie';
import Other from './../Other/Other';

// Screens
const MovieStack = StackNavigator({
  Movies: {
    screen: Movie,
    navigationOptions: {
      title: 'Movies'
    }
  }
});
  
const SerieStack = StackNavigator({
  Series: {
    screen: Serie,
    navigationOptions: {
      title: 'Series'
    }
  }
});
  
const OtherStack = StackNavigator({
  Other: {
    screen: Other,
    navigationOptions: {
      title: 'Others'
    }
  }
});
  
export const AppNavigator = TabNavigator({
  Movies: {
    screen: MovieStack,
    navigationOptions: {
      tabBarLabel: 'Movies'
    }
  },
  Series: {
    screen: SerieStack,
    navigationOptions: {
      tabBarLabel: 'Series'
    }
  },
  Others: {
    screen: OtherStack,
    navigationOptions: {
      tabBarLabel: 'Others'
    }
  }
}, {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
});