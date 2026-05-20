
import { Route } from 'react-router-dom';
import CreatePage from './pages/CreatePage';
import HomePage from './pages/HomePage'
import { Box,useColorModeValue } from '@chakra-ui/react';
import { Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import { useProductStore } from './store/product';

function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("gray.100", "gray.800")}> 
      {<Navbar/>}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        
      </Routes>

    </Box>
  ) ;
    
}

export default App