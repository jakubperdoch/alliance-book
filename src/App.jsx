// import { BrowserRouter } from 'react-router-dom';
// import Router from './router/Router';
import { ChakraProvider } from '@chakra-ui/react';
function App() {
 return (
  <ChakraProvider>
   <span className="text-3xl font-bold underline">React</span>
  </ChakraProvider>
 );
}

export default App;
