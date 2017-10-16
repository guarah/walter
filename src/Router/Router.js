import React from 'react'
import { Button } from 'react-native'
import { TabNavigator, StackNavigator } from "react-navigation"
import { Icon } from 'react-native-elements'

import Movie from './../Movie/Movie'
import MovieSpace from './../Movie/MovieSpace'
import Serie from './../Serie/Serie'
import Other from './../Other/Other'
import Auth from './../auth/Auth'
import SearchView from './../search/SearchView'


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
      headerTintColor: '#C43441'
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
      headerTintColor: '#C43441'
    }
  }
});

export const TabsNavigator = TabNavigator({
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

export const SearchStack = StackNavigator({
  Search: {
    screen: SearchView,
    navigationOptions: {
      header: null
    }
  },
  MovieSpace: {
    screen: MovieSpace,
    navigationOptions: {
      headerTitleStyle: {
         color: 'white'
      },
      headerStyle: {
         backgroundColor: '#222126'
      },
      headerTintColor: '#C43441'
    }
  }
},
{
  headerMode: 'screen'
})
  
export const AppNavigator = StackNavigator({
  TabsNavigator: {
    screen: TabsNavigator,
    navigationOptions: {
      gesturesEnabled: false,
    }
  },
  Search: {
    screen: SearchStack
  }
},
{
  mode: 'modal',
  headerMode: 'none'
})

export const AuthNavigator = StackNavigator({
  Auth: {
    screen: Auth
  },
  AppNavigator: {
    screen: AppNavigator
  }
},
{
  headerMode: 'none'
});
