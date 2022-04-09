import {BrowserRouter, Routes, Route, Switch} from "react-router-dom"
import Login from "./components/Login"
import Register from './components/Register'
import Navbar from './components/Navbar'
import Dashboard from './components/Dashboard'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>

      </Routes>
      <Routes>
        <Route path="*" element={<Navbar/>}/>
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
