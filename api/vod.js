import request from '@/utils/request'

export default {

  getPlayAuth(VideoId) {
    return request({
      url: `/eduvod/video/getPlayAuth/${VideoId}`,
      method: 'get'
    })
  }

}