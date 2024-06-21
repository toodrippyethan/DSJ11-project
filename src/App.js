import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Favorite from './pages/Favorite';
import Podcasts from './pages/Podcasts';
import ShowDetails from './pages/ShowDetails';
import PrivateRoutes from './components/common/PrivateRoutes';
import AudioPlayer from './components/common/AudioPlayer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ShowDetailsPage from './pages/ShowDetails'; // Ensure this import is correct

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <AudioPlayer /> {/* AudioPlayer always visible */}
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/podcasts" element={<Podcasts />} />
            <Route path="/show/:showid" element={<ShowDetails />} />
            <Route path="/podcasts/:showid" element={<ShowDetailsPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
