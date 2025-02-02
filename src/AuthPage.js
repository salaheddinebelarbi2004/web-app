import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Simulated user database
  const users = {
    user1: '1111',
    user2: '2222',
    user3: '3333',
  };

  // Function to handle login
  const handleLogin = () => {
    if (users[username] && users[username] === password) {
      // Store user info in localStorage
      localStorage.setItem('user', JSON.stringify({ username, password }));

      // Redirect user to their page
      navigate(`/${username}`);
    } else {
      setError('Invalid username or password!');
    }
  };

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
