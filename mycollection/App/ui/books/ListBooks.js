import { Body, Container, Content, List, ListItem, Text } from 'native-base'
import React, { useEffect, useState } from 'react'

import { itemTitleStyle, itemDetailStyle } from '../../theme/Configs'

import bookService from '../../service/BookService.js'

const ListBooks = ({ navigation }) => {

    const [allBooks, setAllBooks] = useState([])

    useEffect(() => {

        const findBooks = async () => {
            let books = await bookService.findAll()
            setAllKeys(books)
        }

        findBooks()
    })

    const openRegister = () => {
        navigation.navigate('RegisterKey')
    }

    return (
        <Container>
            <Content padder>
                <List>
                    {allBooks.map(b => (
                        <ListItem key={b._id}>
                            <Body>
                                <Text style={itemTitleStyle}>{b.title}</Text>
                                <Text style={itemDetailStyle}>{b.sinopsis}</Text>
                            </Body>
                        </ListItem>
                    ))}
                </List>
            </Content>
        </Container>
    )
}

export default ListBooks