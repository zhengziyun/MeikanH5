export default {
  name: 'invoice',
  data () {
    return {
      showUnitInfo: false,
      isSelected: true,
      invoiceGoodsType: 0
    }
  },
  methods: {
		showUnitInfoBox: function(){
			this.showUnitInfo = true;
			this.isSelected = false;
		},
		hideUnitInfoBox: function(){
			this.showUnitInfo = false;
			this.isSelected = true;
		}
	}
}