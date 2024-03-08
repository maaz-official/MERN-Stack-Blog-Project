import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Header from "./components/Header";
import './components.css';
import CustomFooter from "./components/Footer";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <CustomFooter />
    </BrowserRouter>
  );
};

export default App;
