import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Plans from "./components/plans/Plans";
import LandingPage from "./pages/landingPage/LandingPage";

function App() {
  return (<>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <LandingPage /> } />
        <Route path="plans" element={ <Plans /> } />
        <Route path="login" element={ <Login /> } />
        <Route path="signup" element={ <Signup /> } />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;