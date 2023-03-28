import axios, { AxiosError, AxiosResponse } from 'axios';
import { encryptToken } from '../utils/passwordEncryption';

const api = axios.create({
  baseURL: 'http://j8a402.p.ssafy.io:8080',
  headers: {
    'Content-Type': 'application/json',
  },
});

async function getSalt(email: string): Promise<AxiosResponse> {
  try {
    const res = await api.get<any>(`/user/salt/${email}`);

    console.log(res.status);
    return res;
  } catch (error: any) {
    console.log(error);
    return error;
  }
}

async function login(email: string, password: string) {
  try {
    const res = await api.post(`/user/login`, {
      email,
      password,
    });
    const { headers, data } = res;

    localStorage.setItem(
      'token',
      encryptToken(res.headers.authorization, email)
    );
    // console.log(res);
    // console.log(res.headers.authorization);
    return res.status;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export default { login, getSalt };
