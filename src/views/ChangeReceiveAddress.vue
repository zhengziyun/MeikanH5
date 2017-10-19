<template>
  <div class="changeReceivedAddress">
  	
		<div class="addressOne clearfix">
			<div class="isSelect" v-if="true"></div>
			<div class="leftBlock" v-if="true"></div>
			<div class="receiverInfo">
				<div class="name-phone">习大大<span>183****0368</span></div>
				<div class="address"><span v-if="true">默认</span>河北廊坊市三河市河北廊坊市三河市河北廊坊市三河市河北廊坊市三河市</div>
			</div>
			<router-link to="editAddress" class="edit"></router-link>
		</div>
		
		<div class="addressOne clearfix">
			<div class="isSelect" v-if="false"></div>
			<div class="leftBlock" v-if="false"></div>
			<div class="receiverInfo">
				<div class="name-phone">习大大<span>183****0368</span></div>
				<div class="address"><span v-if="false">默认</span>河北廊坊市三河市河北廊坊市三河市河北廊坊市三河市河北廊坊市三河市</div>
			</div>
			<router-link to="editAddress" class="edit"></router-link>
		</div>
		
		<div class="foot">
			<div class="footer">
				<router-link to="addNewAddress" class="btmBtn">添加新地址</router-link>
			</div>
		</div>
		
  </div>
</template>

<script src="../js/views/changeReceiveAddress.js"></script>

<style scoped>
	@import '../css/views/changeReceiveAddress.css'
</style>
