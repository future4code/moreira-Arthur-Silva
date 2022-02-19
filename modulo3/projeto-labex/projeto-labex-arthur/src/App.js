import HomePage from './pages/HomePage'
import HAdminPage from './pages/HAdminPage'
import FormApPage from './pages/FormApPage'
import DetailPage from './pages/DetailPage'
import CreateTripPage from './pages/CreateTripPage'
import LoginPage from './pages/LoginPage'
import ListTripPage from './pages/ListTripPage'
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
`

function App() {
    
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/CreateTripPage" element={<CreateTripPage />} />
        <Route path="/DetailPage" element={<DetailPage />} /> 
        <Route path="/HAadminPage" element={<HAdminPage />} />
        <Route path="/FormApPage" element={<FormApPage />} />
        <Route path="/ListTripPage" element={<ListTripPage />} />
      </Routes>
    </Router>
  );
}

export default App;
