import { Button, ChakraProvider } from "@chakra-ui/react"
import theme from "./thema/thema"


function App() {

  return (
    <>
      <ChakraProvider theme={theme}>
        <Button colorScheme="teal">ボタン</Button>
        <p>aaaaaaaaa</p>
      </ChakraProvider>
    </>
  )
}

export default App
