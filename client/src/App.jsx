import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE4NjkyNTU3LCJpYXQiOjE3MTg2OTIyNTcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjkzNmI0Yzk4LWJlNzctNGU2OC1hZTg1LWQ3YjM3YTE5NDU2ZCIsInN1YiI6InNlbnRoYW52aWdhc20uMjFjc2VAa29uZ3UuZWR1In0sImNvbXBhbnlOYW1lIjoiQUZGT1JETUVEIiwiY2xpZW50SUQiOiI5MzZiNGM5OC1iZTc3LTRlNjgtYWU4NS1kN2IzN2ExOTQ1NmQiLCJjbGllbnRTZWNyZXQiOiJjVXhyQUtWd01XZmV5RGlOIiwib3duZXJOYW1lIjoiU2VudGhhbiIsIm93bmVyRW1haWwiOiJzZW50aGFudmlnYXNtLjIxY3NlQGtvbmd1LmVkdSIsInJvbGxObyI6IjIxQ1NSMTg0In0.mk_xIjgjoIUoV_lvyhlVMJeegn0q4bG5rI8uriukQO0';
    const fetchProtectedData = async () => {
      try {
        const headers = {
          'Authorization': `Bearer ${accessToken}`
        };

        const response = await fetch('http://20.244.56.144/test/fibo', { headers });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProtectedData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Prime</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default App;

