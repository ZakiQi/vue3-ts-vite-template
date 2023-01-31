import request from '@/utils/request'
import { AxiosResponse } from 'axios'

export function getRouterList():Promise<AxiosResponse>{
  return request({
    url: 'api/getRoute',
    method: 'get'
  })
} 