export default {
  name: 'selectArea',
  data: function(){
    return {
      
    }
  },
  mounted: function(){
  	var _this = this;
		this.$ajax({
		  method: 'get',
		  url: '/static/json/selectArea/data.min.json',
		}).then(function(data){
			let selectJson = data.data;
			var obj = $(_this.$el);
			var selectArea = new MobileSelectArea();
			selectArea.init({ trigger: obj, data: selectJson, callback: function(scroller,text,value){
				$("#check_area").removeClass("cRed").attr("iscRed", "false");
			}});
		}, function(error){
			
		});
  },
  methods: {
  	
  },
}