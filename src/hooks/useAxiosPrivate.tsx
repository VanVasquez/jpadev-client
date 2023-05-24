import {useEffect} from 'react';
import useAuth from './useAuth';
import useRefreshToken from './useRefreshToken';
import axios from '../api/axios';


const useAxiosPrivate = () => {
  const refresh = useRefreshToken();
  const {auth} = useAuth();

  useEffect(() => {
    const requestIntercept = axios.interceptors.request.use(
        (config) => {
          if (!config.headers['Authorization']) {
            config.headers['Authorization'] = `Bearer ${auth.user?.accessToken}`;
          }
          return config;
        },
        (err) => {
          Promise.reject(err);
        },
    );
    const responseIntercept = axios.interceptors.response.use(
        (response) => response,
        async (err) => {
          const presRequest = err?.config;
          if (err?.response?.status === 401 && !presRequest?.sent) {
            presRequest.sent = true;
            const newAccessToken = await refresh();
            presRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
            return axios(presRequest);
          }
          return Promise.reject(err);
        },
    );
    return () => {
      axios.interceptors.request.eject(requestIntercept);
      axios.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);

  return axios;
};

export default useAxiosPrivate;
