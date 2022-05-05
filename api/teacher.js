import request from '@/utils/request'
export default {
  getTeacherList(page,limit){
     return request({
        url:`/eduservice/teacherFront/getPageTeacherFront/${page}/${limit}`,
        method:'get'
     })
  },
  getTeacherDetail(id){
     return request({
      url:`/eduservice/teacherFront/getFrontTeacherDetail/${id}`,
      method:'get'
     })
    
  }
}