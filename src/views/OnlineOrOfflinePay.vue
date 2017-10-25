<template>
  <div class="onlineOrOfflinePay">
  	<div class="item payMethods">
  		<p>支付方式</p>
  		<div class="clearfix">
  			<span :class="{active: isOnlineNum==1}" @click="isOnlineNum=1">线上支付</span>
  			<span :class="{active: isOnlineNum==2}" @click="isOnlineNum=2">线下支付</span>
  		</div>
  	</div>
  	
  	<div class="item">
  		<p>配送方式</p>
  		<div class="clearfix">
  			<span class="active">京东配送</span>
  		</div>
  		<div class="comment">工作日、双休日与节假日均可送货</div>
  	</div>
		
		<div class="foot">
			<div class="footer">
				<div class="btmBtn" @click="choosePayMethod">确定</div>
			</div>
		</div>
		
  </div>
</template>

<script src="../js/views/onlineOrOfflinePay.js"></script>

<style scoped>
	@import '../css/views/onlineOrOfflinePay.css'
</style>
