export default {
  name: 'invoice',
  data () {
    return {
    	typeNum: 0,
      showUnitInfo: false,
      isSelected: true,
      invoiceGoodsType: 0
    }
  },
  mounted: function(){
  	window.document.title = "发票";
  },
  methods: {
		showUnitInfoBox: function(){
			this.showUnitInfo = true;
			this.isSelected = false;
		},
		hideUnitInfoBox: function(){
			this.showUnitInfo = false;
			this.isSelected = true;
		},
		sureInvoiceType: function(){
			if(this.typeNum == 0){
				this.$router.push({path: '/placeOrder', query: {invoiceNum: this.typeNum}})
			}
		}
	}
}