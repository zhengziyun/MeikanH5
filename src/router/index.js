import Vue from 'vue'
import Router from 'vue-router'
import GoodsLists from '@/views/GoodsLists'
import GoodsDetails from '@/views/GoodsDetails'
import ThirdPartyAuthorizate from '@/views/ThirdPartyAuthorizate'
import PlaceOrder from '@/views/PlaceOrder'
import ChangeReceiveAddress from '@/views/ChangeReceiveAddress'
import EditAddress from '@/views/EditAddress'
import AddNewAddress from '@/views/AddNewAddress'
import RetailStore from '@/views/RetailStore'
import StoreMap from '@/views/StoreMap'
import Invoice from '@/views/Invoice'
import ChoosePayMethods from '@/views/ChoosePayMethods'
import SaleBags from '@/views/SaleBags'


Vue.use(Router)

export default new Router({
  routes: [
  	{
  		name: '/goodsLists',
      path: '/goodsLists',
      component: GoodsLists
  	},
    {
    	name: '/goodsDetails',
      path: '/goodsDetails',
      component: GoodsDetails
    },
    {
    	name: '/thirdPartyAuthorizate',
      path: '/thirdPartyAuthorizate',
      component: ThirdPartyAuthorizate
    },
    {
    	name: '/placeOrder',
      path: '/placeOrder',
      component: PlaceOrder
    },
    {
    	name: '/changeReceiveAddress',
      path: '/changeReceiveAddress',
      component: ChangeReceiveAddress
    },
    {
    	name: '/editAddress',
      path: '/editAddress',
      component: EditAddress
    },
    {
    	name: '/addNewAddress',
      path: '/addNewAddress',
      component: AddNewAddress
    },
    {
    	name: '/retailStore',
      path: '/retailStore',
      component: RetailStore
    },
    {
    	name: '/storeMap',
      path: '/storeMap',
      component: StoreMap
    },
    {
    	name: '/invoice',
      path: '/invoice',
      component: Invoice
    },
    {
    	name: '/choosePayMethods',
      path: '/choosePayMethods',
      component: ChoosePayMethods
    },
    {
    	name: '/saleBags',
      path: '/saleBags',
      component: SaleBags
    }
  ]
})
