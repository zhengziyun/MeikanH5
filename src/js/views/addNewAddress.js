export default {
  name: 'addNewAddress',
  data () {
    return {
      receiver: "",
      cellphone: "",
      address: "",
      isReceiverFalse: false,
      isCellphoneFalse: false,
      isAddressFalse: false,
      isDefault: false
    }
  },
  methods: {
  	receiverReEnter: function(){
  		if(this.isReceiverFalse == true){
  			this.isReceiverFalse = false;
  			this.receiver = "";
  		}
  	},
  	cellphoneReEnter: function(){
  		if(this.isCellphoneFalse == true){
  			this.isCellphoneFalse = false;
				this.cellphone = "";
  		}
  	},
  	addressReEnter: function(){
  		if(this.isAddressFalse == true){
  			this.isAddressFalse = false;
				this.address = "";
  		}
  	},
  	
		saveAddress: function(){
			// 判断收货人
			if(this.receiver.trim()){
				if(this.isReceiverFalse == false){
					if(this.receiver.trim().length<2 || this.receiver.trim().length>15){
						this.isReceiverFalse = true;
						this.receiver = "收货人姓名 : 2-15个字符限制";
						return;
					}
				}else{
					return;
				}
			}else{
				this.isReceiverFalse = true;
				this.receiver = "请输入收货人";
				return;
			}
			
			// 判断联系电话
			if(this.cellphone.trim()){
				if(this.isCellphoneFalse == false){
					if(!this.cellphone.trim().match(/^1[3|4|5|7|8][0-9]\d{8}$/)){
						this.isCellphoneFalse = true;
						this.cellphone = "手机号码格式错误";
						return;
					}
				}else{
					return;
				}
			}else{
				this.isCellphoneFalse = true;
				this.cellphone = "请输入手机号码";
				return;
			}
			
			// 判断省市县内容
			var sArea = $(this.$el).find("#check_area").val();
			if(!sArea.trim()){
				$(this.$el).find("#check_area").val("请输入省市区").addClass("cRed");
				$(this.$el).find("#check_area").attr("iscRed", "true");
				return;
			}else{
				if($(this.$el).find("#check_area").attr("iscRed") == "true"){
					return;
				}
			}
			
			// 判断详细地址
			if(this.address.trim()){
				if(this.isAddressFalse == false){
					if(this.address.trim().length < 5){
						this.isAddressFalse = true;
						this.address = "详细地址最少5个字";
						return;
					}
				}else{
						return;
				}
			}else{
				this.isAddressFalse = true;
				this.address = "请输入详细地址";
				return;
			}
			
			
			alert(1);
		}
	}
}