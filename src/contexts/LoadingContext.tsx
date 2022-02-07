import { createContext, useState, useContext } from 'react';

const LoadingContext = createContext({});

const LoadingProvider = ({ children }: any) => {
  const [loading, setLoading] = useState('');

  const loadingContextValue = {
    loading,
    setLoading,
  };

  return (
    <LoadingContext.Provider value={loadingContextValue}>
      {children}
    </LoadingContext.Provider>
  );
};

const useLoadingContext = () => useContext(LoadingContext);

export { LoadingProvider, useLoadingContext };
