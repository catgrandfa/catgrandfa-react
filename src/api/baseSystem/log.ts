import { request } from '@umijs/max';

export async function addWebLog(payload: LogAPI.AddWebLog) {
  return request('/log/addWebLog', {
    method: 'post',
    data: payload
  })
}