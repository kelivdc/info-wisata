import { extendTheme } from "@chakra-ui/react";
import { ComponentStyleConfig } from "@chakra-ui/theme";

import '@fontsource/nunito'

const Button = ComponentStyleConfig = {
    baseStyle: {
        fontWeight: 'normal',
        borderRadius: '0px',      
        minH: '10px',
        m: 0,
    },
    sizes: {
        sm: {
            fontSize: 'sm',
            px: 4,
            py: 0,            
        },
        md: {
            fontSize: 'md',
            px: 4,
            py: 0,
        }
    },
    variants: {
        outline: {
            py: 0,
        },
        solid: {
            py: 0
        },
    }
}

const theme = extendTheme({
    sm: '30em',
    md: '1040px',    
    fonts: {
        heading: `'Nunito', sans-serif`,
        body: `'Nunito', sans-serif`,
    },
    styles: {
        global: (props) => ({
            'html, body': {                
                fontSize: '0.9rem',
                bgColor: props.colorMode === 'dark' ? 'Dark' : 'Light',
                color: props.colorMode === 'dark' ? 'gray.300' : 'gray.700',
            }
        })
    },
    components: {
        Button
    }
})

export default theme