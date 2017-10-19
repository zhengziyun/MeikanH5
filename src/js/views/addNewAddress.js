export default {
  name: 'addNewAddress',
  data () {
    return {
      receiver: "",
      cellphone: "",
      address: ""
    }
  },
  methods: {
		saveAddress: function(){
			alert($(this.$el).find("#check_area").val());
		}
	}
}