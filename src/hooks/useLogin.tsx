/* eslint-disable @typescript-eslint/no-explicit-any */
import jwtDecode from 'jwt-decode';
import axios from '../api/axios';
import useAuth from './useAuth';

export interface ILogin {
  email: string;
  password: string;
}

interface IResponse {
  status: number;
  message: string;
  data?: any;
}
interface DecodedToken {
  UserInfo: {
    email: string;
    last_name: string;
  };
}

const useLogin = (): ((data: ILogin) => Promise<void | any>) => {
  const {setAuth} = useAuth();
  const register = async (data: ILogin): Promise<IResponse> => {
    try {
      const response = await axios
          .post('/auth/login', JSON.stringify(data));
      const {accessToken, message } = response.data; 
      const decoded = jwtDecode(accessToken) as DecodedToken
 
      setAuth({
        isAuthenticated: true,
        user: {
          email: decoded.UserInfo.email,
          accessToken
        }
      });
      return {
        status: response.status,
        message: message,
      };
    } catch (err: any) {
      console.log(err)
      return {
        status: err.response.status,
        message: err.response.data.message,
        data: err.response.data,
      };
    }
  };

  return register;
};

export default useLogin;
