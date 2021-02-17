import { addDecorator } from '@storybook/react'
import { ChakraProvider, extendTheme, CSSReset } from '@chakra-ui/react'
import '../src/App.css'
import { BrowserRouter as Router } from 'react-router-dom'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}

const theme = extendTheme({
  colors: {
    primary: {
      100: '#ce717f',
      200: '#c65a6a',
      300: '#be4255',
      400: '#b62b3f',
      500: '#ae132a',
      600: '#9d1126',
      700: '#8b0f22',
      800: '#7a0d1d',
      900: '#680b19',
    },
    secondary: {
      100: '#beb7b8',
      200: '#b3abac',
      300: '#a89fa0',
      400: '#9d9394',
      500: '#928788',
      600: '#837a7a',
      700: '#756c6d',
      800: '#665f5f',
      900: '#585152',
    },
  },
})

addDecorator((storyFn) => (
  <ChakraProvider theme={theme}>
    <CSSReset />
    <Router>{storyFn()}</Router>
  </ChakraProvider>
))
