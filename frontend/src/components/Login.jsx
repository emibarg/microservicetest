import React, { useState } from 'react';

const Login = () => {
  const [UserName, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ UserName, Password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const data = await response.json();
      console.log('Login successful:', data);

      // Handle successful login (e.g., redirect or store token)
      alert('Login successful!');
    } catch (err) {
      setError('Invalid username or password');
      console.error('Login error:', err);
    }
  };

return (

        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
            {error && <p className="text-red-500 text-center mb-4">{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Username
                    </label>
                    <input
                        type="text"
                        id="UserName"
                        value={UserName}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-700"
                        placeholder="Enter your username"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input
                        type="Password"
                        id="Password"
                        value={Password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-blue-700"
                        placeholder="Enter your password"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Login
                </button>
            </form>
        </div>
   
);
};

// Export the Login component
export default Login;