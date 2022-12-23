import About from './pages/about';
import Home from './pages/home';
import Selector from './pages/selector';
import Navbar from './components/navbar';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';

//font-family: 'Ubuntu', sans-serif;
const theme = createTheme({
  typography: {
    allVariants: {
      fontFamily: 'Ubuntu',
      textTransform: 'none'
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/selector" element={<Selector/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
