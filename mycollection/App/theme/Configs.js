import getTheme from './components';
import material from './variables/material'

const theme = getTheme(material)

export const buildScreenOptions = (title) => {
    return {
        title: title,
        headerStyle: {
            backgroundColor: theme["NativeBase.Header"].backgroundColor
        },
        headerTintColor: '#ffffff'
    }
}

export const itemTitleStyle = {
    fontWeight: 'bold',
    fontSize: 16
}

export const itemDetailStyle = {
    fontSize: 14,
    color: '#666666'
}