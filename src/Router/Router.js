import React from 'react';
import { TabNavigator, StackNavigator } from "react-navigation";
import { Icon } from 'react-native-elements';

import Movie from './../Movie/Movie'
import Serie from './../Serie/Serie';
import Other from './../Other/Other';

// Screens
const MovieStack = StackNavigator({
  Movies: {
    screen: Movie,
    navigationOptions: {
      title: 'Movies',
      tabBarIcon: ({ tintColor }) => <Icon name="movie" size={30} color={tintColor} />,
      headerTitleStyle: {
         color: 'white'
      },
      headerStyle: {
         backgroundColor: '#222126'
      },
      headerTintColor: {
        backgroundColor: '#222126'
      },
    }
  }
});
  
const SerieStack = StackNavigator({
  Series: {
    screen: Serie,
    navigationOptions: {
      title: 'Series',
      tabBarIcon: ({ tintColor }) => <Icon name="tv" size={30} color={tintColor} />,
      headerTitleStyle: {
         color: 'white'
      },
      headerStyle: {
         backgroundColor: '#222126'
      },
      headerTintColor: {
        backgroundColor: '#222126'
      },
    }
  }
});
  
const OtherStack = StackNavigator({
  Other: {
    screen: Other,
    navigationOptions: {
      title: 'Others',
      tabBarIcon: ({ tintColor }) => <Icon name="layers" size={30} color={tintColor} />,
      headerTitleStyle: {
         color: 'white'
      },
      headerStyle: {
         backgroundColor: '#222126'
      },
      headerTintColor: {
        backgroundColor: '#222126'
      },
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
    activeTintColor: '#C43441',
    style: {
      backgroundColor: '#222126'
    }
  },
});