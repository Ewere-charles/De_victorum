import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Welcome from './components/Auth/Welcome';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import HomePage from './components/pages/HomePage';
import Report from './components/pages/cards/Report';
import Synopsis from './components/pages/cards/Synopsis';
import ChatCard from './components/pages/cards/ChatCard';
import ProfileCard from './components/pages/cards/ProfileCard';
import SeminarSlide from './components/pages/cards/Slide';
import Research from './components/pages/cards/Research';

function App() {
  const location = useLocation();

  return (
      <div className="min-h-screen bg-gray-200">
        <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Welcome />} />
          <Route path="/signup" index element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/report" element={<Report />} />
          <Route path="/seminar-report" element={<Report />} />
          <Route path="/seminar-synopsis" element={<Synopsis />} />
          <Route path="/chat" element={<ChatCard />} />
          <Route path="/profile" element={<ProfileCard />} />
          <Route path="/seminar-slide" element={<SeminarSlide />} />
          <Route path="/research" element={<Research />} />

        </Routes>
        </AnimatePresence>
      </div>
  );
}

export default App;