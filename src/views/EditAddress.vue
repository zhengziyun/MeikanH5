<template>
  <div class="editAddress">
		
		<div class="item receiver clearfix">
			<span class="left">收货人</span>
			<span class="right">
				<input type="text" value="习大大"/>
			</span>
		</div>
		
		<div class="item cellphone clearfix">
			<span class="left">手机号码</span>
			<span class="right">
				<input type="tel" value="18301160368"/>
			</span>
		</div>
		
		<div class="item area clearfix">
			<span class="left">省市区</span>
			<span class="right">
				<span>河北</span><span>廊坊市</span><span>燕郊镇</span>
			</span>
		</div>
		
		<div class="item detailAddress clearfix">
			<span class="left">详细地址</span>
			<span class="right">
				<input type="text" placeholder="街道、楼牌号等" value="珠市口东大街"/>
			</span>
		</div>
		
		<div class="setDefault">
			<img src="../img/addAddress/a_round_1_icon.png" alt="" />同时设为默认地址
		</div>
		
		<div class="foot">
			<div class="footer">
				<div class="btmBtn">保存</div>
			</div>
		</div>
		
  </div>
</template>

<script src="../js/views/editAddress.js"></script>

<style scoped>
	@import '../css/views/editAddress.css'
</style>
