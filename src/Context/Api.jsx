// Api.jsx
import React, { useState } from 'react';

// Create context for sharing data
export const valueContext = React.createContext();

const Api = ({ children }) => {
  const [value, setValue] = useState([]);

  return (
    <valueContext.Provider value={{ value, setValue }}>
      {children}
    </valueContext.Provider>
  );
};

export default Api;  // Correct default export
