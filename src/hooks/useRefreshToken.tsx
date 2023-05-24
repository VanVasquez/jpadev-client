/* eslint-disable @typescript-eslint/no-explicit-any */
import jwtDecode from 'jwt-decode';
import axios from '../api/axios';
import useAuth from './useAuth';

  type Decode = {
  UserInfo: {
    email: string;
    verified: boolean;
  };
};

  type RefreshResponse = {
  accessToken: string;
  email: string;
};

const useRefreshToken = () => {
  const {setAuth} = useAuth();

  const refresh = async () => {
    const response = await axios.get<RefreshResponse>('/refresh');
    const {accessToken} = response.data;
    const decode: Decode = jwtDecode(accessToken);
    const {email} = decode.UserInfo;
    setAuth((prev: any) => {
      return {
        ...prev,
        user: {
          accessToken,
          email
        }
      };
    });
    return response.data.accessToken;
  };

  return refresh;
};

export default useRefreshToken;
