<template>
  <div class="addNewAddress">
		
		<div class="item receiver clearfix">
			<span class="left">收货人</span>
			<span class="right">
				<input :class="{cRed: isReceiverFalse}" type="text" v-model="receiver" @focus="receiverReEnter"/>
			</span>
		</div>
		
		<div class="item cellphone clearfix">
			<span class="left">手机号码</span>
			<span class="right">
				<input type="tel" :class="{cRed: isCellphoneFalse}" v-model="cellphone" @focus="cellphoneReEnter"/>
			</span>
		</div>
		
		<div class="item area clearfix">
			<span class="left">省市区</span>
			<span class="right">
				<select-area></select-area>
			</span>
		</div>
		
		<div class="item detailAddress clearfix">
			<span class="left">详细地址</span>
			<span class="right">
				<input type="text" :class="{cRed: isAddressFalse}" placeholder="街道、楼牌号等" v-model="address" @focus="addressReEnter"/>
			</span>
		</div>
		
		<div class="setDefault">
			<img src="../img/addAddress/a_round_1_icon.png" alt="" v-if="isDefault == false" @click="isDefault = true"/><img src="../img/addAddress/a_round_2_icon.png" alt="" v-if="isDefault == true" @click="isDefault = false"/>同时设为默认地址
		</div>
		
		<div class="foot">
			<div class="footer">
				<div class="btmBtn" @click="saveAddress">保存</div>
			</div>
		</div>
		
  </div>
</template>

<script src="../js/views/addNewAddress.js"></script>

<style scoped>
	@import '../css/views/editAddress.css'
</style>
