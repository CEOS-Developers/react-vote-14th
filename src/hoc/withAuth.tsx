import React, { JSXElementConstructor, ReactElement } from 'react';

const withAuth = (WrappedComponent: React.FC<{}>): React.FC<{}> => {
  const Auth = () => {
    return <WrappedComponent />;
  };

  return Auth;
};

export default withAuth;
