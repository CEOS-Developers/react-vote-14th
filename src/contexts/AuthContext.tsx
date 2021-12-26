import { createContext, useState, useContext } from 'react';
import axios from 'axios';

const AuthContext = createContext({});

const AuthProvider = ({ children }: any) => {
  const [isAuth, setIsAuth] = useState(false);
  const [userData, setUserData] = useState({});

  const baseUrl = 'https://vote-mailedit.kro.kr/api/';

  // user : 사용자가 입력한 id, password 객체
  const login = (url: string, user: any) => {
    return new Promise((resolve, reject) => {
      axios
        .post(baseUrl + `${url}`, user)
        .then((res) => {
          if (res.status === 200) {
            setIsAuth(true);
            const user = res.data.user;
            const token = res.data.token;

            axios.defaults.headers.common['Authorization'] = token.access;

            setUserData(user);

            localStorage.setItem('userData', JSON.stringify(user));
            localStorage.setItem('token', token.access);
          }
          return resolve(true);
        })
        .catch((err) => {
          // timeout 에러핸들링
          if (err.code === 'ECONNABORTED') {
            window.alert('timeout error handle');
          }
          return reject(err);
        });
    });
  };

  const authContextValue = {
    isAuth,
    login,
    userData,
    setUserData,
    setIsAuth,
  };
  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };
