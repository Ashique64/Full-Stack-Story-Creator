import './App.css'
import CompletedStories from './pages/CompletedStories/CompletedStories';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login'
import MyAccount from './pages/MyAccount/MyAccount';
import OnGoingStories from './pages/OnGoingStories/OnGoingStories';
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
                <Route path="/storydetails/:id" element={<StoryDetails/>} />
                <Route path="/completed/stories" element={<CompletedStories/>} />
                <Route path="/ongoing/stories" element={<OnGoingStories/>} />
            </Routes>
        </Router>
    </>
  )
}

export default App
