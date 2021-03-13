import { Body, Container, Content, List, ListItem, Text } from 'native-base'
import React from 'react'
import { itemDetailStyle, itemTitleStyle } from '../../theme/Configs'

import movieService from '../../service/MovieService.js'

const ListMovies = () => {

    const [allMovies, setAllMovies] = useState([])

    useEffect(() => {

        const findMovies = async () => {
            let movies = await movieService.findAll()
            setAllMovies(movies)
        }

        findMovies()
    })

    return (
        <Container>
            <Content padder>
                <List>
                    {allMovies.map(m => (
                        <ListItem key={m._id}>
                            <Body>
                                <Text style={itemTitleStyle}>{m.title}</Text>
                                <Text style={itemDetailStyle}>{m.sinopsis}</Text>
                            </Body>
                        </ListItem>
                    ))}
                </List>
            </Content>
        </Container>
    )
}

export default ListMovies