import React, { useEffect, useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/homeheader';
import Dashboard from './components/dashboard/dashboard';
import Nomatch from './components/nomatch/nomatch';
import Update from './components/manageuser/update';
import RegistrationForm from './components/postuser/submit_data';
import AboutUs from './components/aboutus/aboutus';
import FetchUsers from './components/table/table';
import SignUp from './components/postuser/signuppage';
import Login from './components/postuser/loginpage';
import ProtectedRoute from './components/protectedpages'; // Import the ProtectedRoute component
import { useNavigate } from 'react-router-dom';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/*" element={<Dashboard />} />
        <Route path="/update" element={<Update />} />
        <Route path="/about_us" element={<AboutUs />} />
        <Route path="/register_user" element={isLoggedIn ? <Navigate to="/dashboard" replace /> : <RegistrationForm />} />
        <Route path="/login" element={<Dashboard />} />

        {/* Admin Access Route */}
        <Route path="/adminaccess" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/table"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <FetchUsers />
            </ProtectedRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <SignUp />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
