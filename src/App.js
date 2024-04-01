import './App.css';
import {Login} from './Pages/Login';
import { Box, Button, useColorMode } from "@chakra-ui/react";
import Onebox from './Pages/Onebox';
import { AllRoutes } from './Pages/AllRoutes';

function App() {
  const { colorMode, toggleColorMode } = useColorMode();


 
  return (
    <div className="App">
     
      <AllRoutes />
    </div>
  );
}

export default App;
