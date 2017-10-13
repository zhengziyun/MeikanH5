import Vue from 'vue'
import Router from 'vue-router'
import GoodsDetails from '@/views/GoodsDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
    	name: '/goodsDetails',
      path: '/goodsDetails',
      component: GoodsDetails
    }
  ]
})
