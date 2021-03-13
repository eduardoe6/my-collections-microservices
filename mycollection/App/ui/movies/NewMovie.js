import { Button, Container, Content, Form, Input, Item, Label, Picker, Text, Textarea } from 'native-base'
import React, { useState } from 'react'

const NewMovie = () => {

    const [title, setTitleValue] = useState('')
    const [sinopsis, setSinopsisValue] = useState('')
    const [duration, setDurationValue] = useState('')
    const [genre, setGenreValue] = useState('')

    const genre = async () => {
        genres = await genreService.findAll()
        setGenreValue(genres)
    }

    const save = async () => {
        await bookService.save({
            title: title,
            sinopsis: sinopsis,
            duration: duration,
            genre: genre
        })

        navigation.goBack()
    }


    return (
        <Container>
            <Content padder>
                <Form>
                    <Item stackedLabel>
                        <Label>Título</Label>
                        <Input value={title} onChangeText={text => setTitleValue(text)} />
                    </Item>
                    <Item stackedLabel>
                        <Label>Sinopse</Label>
                        <Textarea rowSpan={5} value={sinopsis} onChangeText={text => setSinopsisValue(text)} />
                    </Item>
                    <Item stackedLabel>
                        <Label>Duração (minutos)</Label>
                        <Input keyboardType="number-pad" value={duration} onChangeText={text => setDurationValue(text)} />
                    </Item>

                    <Item picker style={{ marginStart: 12, marginTop: 16 }}>
                        <Picker
                            mode="dropdown"
                            placeholder="Gênero">
                            <Picker.Item label="Genero 1" value="1" />
                            <Picker.Item label="Genero 2" value="2" />
                            <Picker.Item label="Genero 3" value="3" />
                            <Picker.Item label="Genero 4" value="4" />
                            <Picker.Item label="Genero 5" value="5" />
                        </Picker>
                    </Item>

                    <Button full style={{ marginTop: 24 }} onPress={() => save()}>
                        <Text>Salvar</Text>
                    </Button>
                </Form>
            </Content>
        </Container>
    )
}

export default NewMovie