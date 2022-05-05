import request from '@/utils/request'
export default {
  //登录
  submitLogin(member) {
    return request({
      url: `/educenter/member/login`,
      method: 'post',
      data: member
    })
  },
  //根据token获取用户信息
  getLoginInfo() {
    return request({
      url: `/educenter/member/getMemberInfo`,
      method: 'get',
     // headers: {'token': cookie.get('guli_token')}
    })
    //headers: {'token': cookie.get('guli_token')} 
  }
}