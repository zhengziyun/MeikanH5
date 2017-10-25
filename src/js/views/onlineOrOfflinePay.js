export default {
  name: 'onlineOrOfflinePay',
  data () {
    return {
      isOnlineNum: this.$route.query.onlineNum
    }
  },
  methods: {
		choosePayMethod: function(){
			if(this.isOnlineNum == 1){
				this.$router.push({path:'/placeOrder', query: {isOnline: 1}})
			}else if(this.isOnlineNum == 2){
				this.$router.push({path:'/placeOrder', query: {isOnline: 2}})
			}
		}
	},
	mounted: function(){
  	window.document.title = "选择支付配送方式";
  }
}