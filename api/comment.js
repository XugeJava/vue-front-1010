import request from '@/utils/request'
export default {
   //课程带提条件查询
  getPageComment(current, limit,courseId) {
    return request({
      url: `/eduservice/comment/getCommentPage/${current}/${limit}/${courseId}`,
      method: 'get'
    
    })
  },
  addComment(comment){
     return request({
        url:'/eduservice/comment/addComment',
        method:'post',
        data:comment
     })
  }
  


}