import About from './pages/about';
import Home from './pages/home';
import Beginner from './pages/beginner';
import Advanced from './pages/advanced';
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
                    <Route path="/about" element={<About/>}/>
                    <Route path="/beginner" element={<Beginner/>}/>
                    <Route path="/advanced" element={<Advanced/>}/>
                </Routes>
            </ThemeProvider>
        </>
    );
}

export default App;
