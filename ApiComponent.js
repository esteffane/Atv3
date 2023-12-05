import React, { useState } from 'react';
import axios from 'axios';

const ApiComponent = ({ apiUrl, buttonText }) => {
  const [result, setResult] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(apiUrl);
      setResult(response.data);
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>{buttonText}</button>
      <div>
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </div>
    </div>
  );
};

export default ApiComponent;