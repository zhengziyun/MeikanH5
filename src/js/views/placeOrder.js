export default {
  name: 'placeOrder',
  data () {
    return {
    	aaa: "bbb",
    	isOnlineNum: 1,
    	invoiceType: 0,
      arr: [1, 2, 3]
    }
  },
  methods: { 
		
	},
	mounted: function(){
		if(this.$route.query.isOnline && this.$route.query.isOnline==2){
			this.isOnlineNum = 2;
		}
		window.document.title = "确认订单";
	}
}