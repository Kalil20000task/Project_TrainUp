import React, { createContext, useContext, useState } from 'react';
import './loadingcontext.css';

const LoadingContext = createContext();

export const useLoading = () => useContext(LoadingContext);

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      {children}
      {loading && (
        <div className="spinner">
          <div className="loader"></div> {/* Spinner CSS */}
        </div>
      )}
    </LoadingContext.Provider>
  );
};
