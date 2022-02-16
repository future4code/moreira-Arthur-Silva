import LoginPage from './pages/LoginPage'
import ListTripPage from './pages/ListTripPage'
import { BrowserRouter as Router, Route , Routes} from "react-router-dom";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
