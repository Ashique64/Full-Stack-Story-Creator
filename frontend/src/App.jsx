import './App.css'
import Login from './pages/Login/Login'
import Signup from './pages/Signup/Signup'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    </>
  )
}

export default App
