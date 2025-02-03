import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Function to handle login
  const handleLogin = async () => {
    try {
      const response = await fetch('http://192.168.8.154:5445/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        // Store JWT token in localStorage
        localStorage.setItem('token', data.token);
        console.log(localStorage.getItem("token"))
        // Redirect user to their page
        navigate(`/home/${username}`);
      } else {
        setError(data.message || 'Invalid username or password!');
      }
    } catch (error) {
      setError('Something went wrong. Please try again later.');
    }
  };

  function decodeJWT(token) {
    const [header, payload, signature] = token.split(".");
    
    const decodedHeader = JSON.parse(atob(header));
    const decodedPayload = JSON.parse(atob(payload));
  
    return { header: decodedHeader, payload: decodedPayload, signature };
  }
  
  const token = localStorage.getItem("token");
  console.log(decodeJWT(token));

  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-12 px-6">
      <div className="w-full max-w-sm bg-white rounded-lg shadow-md p-8">
        <div className="text-center mb-6">
          <img
            src="https://img.freepik.com/psd-gratuit/conception-du-logo-immobilier_23-2151249809.jpg"
            alt="Logo"
            className="mx-auto h-12 w-auto"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">Sign in to your account</h2>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your username"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
            />
          </div>

          {error && <p className="text-sm text-red-500 mt-2">{error}</p>}

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
