import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Internships from './pages/Internships'
import Certifications from './pages/Certifications'
import Hackathons from './pages/Hackathons'
import Competitions from './pages/Competitions'
import Camps from './pages/Camps'
import Submit from './pages/Submit'
import About from './pages/About'

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#42a5f5',
      dark: '#1565c0',
    },
    secondary: {
      main: '#dc004e',
      light: '#f73378',
      dark: '#9a0036',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.5rem',
    },
  },
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Box component="main" sx={{ flex: 1, py: 4, px: { xs: 2, sm: 4 } }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/internships" element={<Internships />} />
              <Route path="/certifications" element={<Certifications />} />
              <Route path="/hackathons" element={<Hackathons />} />
              <Route path="/competitions" element={<Competitions />} />
              <Route path="/camps" element={<Camps />} />
              <Route path="/submit" element={<Submit />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Box>
        </Box>
      </Router>
    </ThemeProvider>
  )
}

export default App