import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Tasks from './pages/Tasks';
import Resources from './pages/Resources';
import LocalServices from './pages/LocalServices';
import CulturalGuide from './pages/CulturalGuide';
import AuthGuard from './components/auth/AuthGuard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="profile"
            element={
              <AuthGuard>
                <Profile />
              </AuthGuard>
            }
          />
          <Route
            path="tasks"
            element={
              <AuthGuard>
                <Tasks />
              </AuthGuard>
            }
          />
          <Route path="resources" element={<Resources />} />
          <Route path="map" element={<LocalServices />} />
          <Route path="guide" element={<CulturalGuide />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;