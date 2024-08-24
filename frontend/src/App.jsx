import './App.css'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import MyAccount from './pages/MyAccount/MyAccount';
import Signup from './pages/Signup/Signup'
import StoryCreate from './pages/StoryCreate/StoryCreate';
import StoryDetails from './pages/StoryDetails/StoryDetails';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  

  return (
    <>
      <Router>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/stories/create" element={<StoryCreate/>} />
                <Route path="/myaccount" element={<MyAccount/>} />
                <Route path="/storydetails" element={<StoryDetails/>} />
            </Routes>
        </Router>
    </>
  )
}

export default App
