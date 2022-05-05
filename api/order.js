import request from '@/utils/request'
export default {
   //生成订单
  createOrder(courseId){
     return request({
        url:`/orderservice/order/createOrder/${courseId}`,
        method:'post'
     })
  },
  //获取订单详情
  getOrder(orderId){
     return request({
      url:`/orderservice/order/getOrder/${orderId}`,
      method:'get'
     })
  },
  //生成二维码方法
  createNative(orderNo) {
   return request({
       url: `/orderservice/paylog/createNativeCode/${orderNo}`,
       method: 'get'
   })
},

  //查询订单状态方法
  queryPayStatus(orderNo) {
   return request({
       url: `/orderservice/paylog/queryPayStatus/${orderNo}`,
       method: 'get'
   })
}


     


}