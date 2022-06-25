import { extendTheme } from "@chakra-ui/react";
import '@fontsource/nunito'

const theme = extendTheme({
    fonts: {
        heading: `'Nunito', sans-serif`,
        body: `'Nunito', sans-serif`,
    },
    styles: {
        global: (props) => ({
            'html, body': {                
                fontSize: '0.975rem',
                bgColor: props.colorMode === 'dark' ? 'Dark' : 'Light',
                color: props.colorMode === 'dark' ? 'gray.300' : 'gray.700',
                lineHeight: 'tall',
            },            
        })
    }
})

export default theme