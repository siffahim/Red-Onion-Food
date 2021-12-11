import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import MyOrder from './MyOrder/MyOrder';
import FoodDetail from './Pages/FoodDetail/FoodDetail';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import MapDirection from './Pages/MapDirection/MapDirection';
import Navigation from './Pages/Shared/Navigation/Navigation';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route exact path='/'
            element={<Home />}
          />

          <Route path='/home'
            element={<Home />}
          />

          <Route path='/food/:foodId'
            element={<FoodDetail />}
          />

          <Route path='/login'
            element={<Login />}
          />

          <Route path='/register'
            element={<Register />}
          />

          <Route path='/map'
            element={<MapDirection />}
          />

          <Route path='/myorder'
            element={<MyOrder />}
          />

        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
