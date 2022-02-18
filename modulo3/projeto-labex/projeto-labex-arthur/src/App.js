import HomePage from './pages/HomePage'
import HAdminPage from './pages/HAdminPage'
import FormApPage from './pages/FormApPage'
import DetailPage from './pages/DetailPage'
import CreateTripPage from './pages/CreateTripPage'
import LoginPage from './pages/LoginPage'
import ListTripPage from './pages/ListTripPage'
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";





function App() {
    
  return (
    <Router>
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
