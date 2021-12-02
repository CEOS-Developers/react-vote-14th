// import React, { createContext, useState, useContext } from 'react';

// const LoadingContext = createContext({
//   state: { loading: false },
//   actions: { setLoading: () => {} },
// });

// const LoadingProvider = ({ children }) => {
//   const [loading, setLoading] = useState(false);

//   const loadingContextValue = {
//     state: { loading },
//     actions: { setLoading },
//   };

//   return (
//     <LoadingContext.Provider value={loadingContextValue}>
//       {children}
//     </LoadingContext.Provider>
//   );
// };
// const useLoadingContext = () => useContext(LoadingContext);
// export { LoadingProvider, useLoadingContext };
// // const useLoadingContext = () => useContext(LoadingContext);

// // export { LoadingProvider, useLoadingContext };

import { createContext, useState, useContext } from 'react';

const LoadingContext = createContext({});

const LoadingProvider = ({ children }) => {
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
