//登录接口
import { request } from '@umijs/max';

export async function loginNoCaptcha(payload: LoginAPI.NoCaptcha) {
  return request('/login/loginNoCaptcha', {
    method: 'post',
    data: payload
  })
}