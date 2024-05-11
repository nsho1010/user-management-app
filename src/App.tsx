import {  ChakraProvider } from "@chakra-ui/react"
import theme from "./thema/thema"
import { BrowserRouter } from "react-router-dom"
import { Router } from "./router.tsx/Router"


function App() {

  return (
    <>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </>
  )
}

export default App
