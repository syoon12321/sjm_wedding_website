import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PasswordProtection = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const CORRECT_PASSWORD = 'bananas'; // Change this to your desired password
  
  useEffect(() => {
    // Check if already authenticated
    const isAuthenticated = localStorage.getItem('weddingAuthenticated');
    if (isAuthenticated === 'true') {
      navigate('/home');
    }
  }, [navigate]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      localStorage.setItem('weddingAuthenticated', 'true');
      navigate('/home');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Welcome to Our Wedding
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Please enter the password to access our wedding website
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-rose-500"
              placeholder="Enter password"
            />
          </div>
          {error && (
            <p className="text-red-500 text-sm text-center">{error}</p>
          )}
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordProtection; 