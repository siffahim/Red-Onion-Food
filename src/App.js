import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <Router>
      <Navigation />
      <Home />
      <Routes>
        <Route to='/' element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
