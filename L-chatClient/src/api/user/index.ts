import request from '../../utils/request';
import { API } from '../../utils/config';

// 登陆
const loginApi = (data: object)=>{
  request({
    data,
    method: 'POST',
    url: '/user/login'
  })
}

// 注册
const registerApi = (data: object) => {
  request({
    data,
    url:'/user/register',
    method: 'POST'
  })
}

// 获取验证码
const getCode = ()=>{

}

export default{
  loginApi,
  registerApi,
  getCode
}