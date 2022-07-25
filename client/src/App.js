import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/login/Login';
import Signup from './pages/signup/Signup';
import Plans from './pages/plans/Plans';
import LandingPage from './pages/landingPage/LandingPage';
import Home from './pages/home/Home';
import Dashboard from './pages/dashboard/Dashboard';
import AdminPanel from './pages/adminPanel/AdminPanel';
import NotFound from './pages/notFound/NotFound';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='plans' element={<Plans />} />
        <Route path='login' element={<Login />} />
        <Route path='signup' element={<Signup />} />
        <Route path='home' element={<Home />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='admin-panel' element={<AdminPanel />} />
        <Route path='*' element={<NotFound />} />
        <Route path='/forgotPassword' element={<ForgotPassword />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
