import request from '@/utils/request'
export default {
   //课程带提条件查询
  getPageList(current, limit, courseFrontVo) {
    return request({
      url: `/eduservice/coursefront/getFrontPageCourseList/${current}/${limit}`,
      method: 'post',
      data: courseFrontVo
    })
  },
  //查询所有分类的方法
  getAllSubject(){
     return request({
        url:`/eduservice/subject/getAllSubject`,
        method:'get'
     })
  },
  //课程详情
  getCourseDetail(id){
    return request({
      url:`/eduservice/coursefront/getCourseDetail/${id}`,
      method:'get'
    })
  }


}