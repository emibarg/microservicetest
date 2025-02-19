import React from 'react';

const Login = () => {
  const handleLogin = () => {
    window.location.href = 'http://localhost:8080/login';
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
        <button
          onClick={handleLogin}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;