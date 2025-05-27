import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import React from 'react';
import { AuthProvider } from './context/AuthContext';
import './App.css'

// Lazy load pages
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Chat = React.lazy(() => import('./pages/Chat'));

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Toaster position="top-center" reverseOrder={false} />
          <React.Suspense fallback={
            <div className="flex items-center justify-center min-h-screen">
              <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
            </div>
          }>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/" element={<Navigate to="/login" replace />} />
            </Routes>
          </React.Suspense>
        </div>
      </AuthProvider>
    </Router>
  )
}

export default App
