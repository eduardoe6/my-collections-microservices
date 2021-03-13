import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";

import { buildScreenOptions } from '../../theme/Configs';
import NewMovie from './NewMovie';
import ListMovies from './ListMovies';
import { Button, Icon } from 'native-base';

const Stack = createStackNavigator()

const Movies = ( { navigation }) => {

    const listOptions = buildScreenOptions('Meus Filmes')
    listOptions.headerRight = () => (
        <Button transparent onPress={() => addNewMovie()}><Icon name="add" style={{color: 'white'}}/></Button>
    )

    const addNewMovie = () => {
        navigation.navigate('NewMovie')
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name="ListMovies" component={ListMovies} options={listOptions} />
            <Stack.Screen name="NewMovie" component={NewMovie} options={buildScreenOptions('Novo Filme')}/>
        </Stack.Navigator>
    )
}

export default Movies