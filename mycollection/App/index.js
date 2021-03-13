import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import getTheme from './theme/components';
import material from './theme/variables/material'

import Books from './ui/books/Books';
import Movies from './ui/movies/Movies';

import { Icon } from 'native-base';
import { StatusBar } from 'react-native';

const theme = getTheme(material)
const Tab = createBottomTabNavigator()

const App = () => {

    const screenConfig = ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
            return <Icon type="MaterialIcons" name={route.name === 'Livros' ? 'book' : 'movie'} style={{ color: color }} />
        }
    })

    const tabsConfig = {
        activeTintColor: "#ffffff",
        inactiveTintColor: '#efefef',
        activeBackgroundColor: theme.variables.statusBarColor,
        inactiveBackgroundColor: theme["NativeBase.Header"].backgroundColor
    }

    return (
        <NavigationContainer>
            <StatusBar backgroundColor={theme.variables.statusBarColor}/>
            <Tab.Navigator screenOptions={screenConfig} tabBarOptions={tabsConfig}>
                <Tab.Screen name="Livros" component={Books} />
                <Tab.Screen name="Filmes" component={Movies} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default App