import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import PrivateRoute from './utils/PrivateRoute'
import { AuthProvider } from './context/AuthContext';
import Homepage from './pages/Homepage/Homepage';
import Login from './pages/Login/Login';
import Header from './containers/Header/Header';
import Recommender from './pages/Recommender/Recommender';

function App() {
  return (
    <div>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route exact path='/' element={<PrivateRoute />}>
            <Route exact path='/home' element={<Homepage />} />
            <Route exact path='/recommend' element={<Recommender />} />
            </Route>
            <Route element={<Login />} path="/login" />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
