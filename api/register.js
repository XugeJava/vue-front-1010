import request from '@/utils/request'

export default {
  //根据手机号码发送验证码
  sendCode(phone) {
    return request({
      url: `/edumsm/msm/send/${phone}`,
      method: 'get'
    })
  },
  //用户注册
  submitRegister(registerVo) {
    return request({
      url: `/educenter/member/register`,
      method: 'post',
      data: registerVo
    })
  }
}