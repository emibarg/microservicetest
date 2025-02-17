import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const Callback = () => {
  const [userInfo, setUserInfo] = useState(null);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchUserInfo = async () => {
      const query = new URLSearchParams(location.search);
      const data = query.get('data');

      if (data) {
        try {
          const userInfo = JSON.parse(decodeURIComponent(data));
          setUserInfo(userInfo);
        } catch (err) {
          setError('Failed to parse user info');
        }
      } else {
        setError('No data found in URL');
      }
    };

    fetchUserInfo();
  }, [location.search]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!userInfo) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">User Information</h2>
        <pre className="text-left">{JSON.stringify(userInfo, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Callback;