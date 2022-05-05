import request from '@/utils/request'
export default {
  getListIndex() {
    return request({
      url: `/eduservice/indexFront/getIndex`,
      method: 'get'
    })
  },
  //微信登录token
  
}