export default {
  name: 'storeMap',
  data () {
    return {
      
    }
  },
  mounted: function(){
  	var map = new BMap.Map("map");
  	map.centerAndZoom(new BMap.Point(116.425,39.898244),14);
  },
  methods: {
		
	}
}