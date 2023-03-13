import Cookies from 'js-cookie';
import { authorization } from './config';

export const setCookie = (token: string) =>{
  Cookies.set(authorization,token);
}

export const getCookie = ()=>{
  return Cookies.get(authorization);
}

export const removeCookie = () => {
  return Cookies.remove(authorization);
}