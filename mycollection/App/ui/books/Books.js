import React from 'react'

import { createStackNavigator } from "@react-navigation/stack";

import ListBooks from './ListBooks';
import NewBook from './NewBook';
import { buildScreenOptions } from '../../theme/Configs';
import { Button, Icon } from 'native-base';

const Stack = createStackNavigator()

const Books = ({ navigation }) => {

    const listOptions = buildScreenOptions('Meus Livros')
    listOptions.headerRight = () => (
        <Button transparent onPress={() => addNewBook()}><Icon name="add" style={{ color: 'white' }} /></Button>
    )

    const addNewBook = () => {
        navigation.navigate('NewBook')
    }

    return (
        <Stack.Navigator>
            <Stack.Screen name="ListBooks" component={ListBooks} options={listOptions} />
            <Stack.Screen name="NewBook" component={NewBook} options={buildScreenOptions('Novo Livro')} />
        </Stack.Navigator>
    )
}

export default Books