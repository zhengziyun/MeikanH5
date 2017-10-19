<template>
  <div class="choosePayMethods">
  	
  	<div class="method clearfix">
  		<div class="methodPic">
  			<img src="../img/payment/a_payment_alipay_icon@2x.png" style="width:0.44rem;height:0.33rem;margin-top:0.34rem;" alt="" />
  		</div>
  		<span>支付宝</span>
  		<div class="select" @click="payMethod = 0">
  			<img src="../img/addAddress/a_round_1_icon.png" alt="" v-if="payMethod != 0"/>
  			<img src="../img/addAddress/a_round_2_icon.png" alt="" v-if="payMethod == 0"/>
  		</div>
  	</div>
  	
  	<div class="method clearfix">
  		<div class="methodPic">
  			<img src="../img/payment/a_payment_letter_icon@2x.png" style="width:0.44rem;height:0.36rem;margin-top:0.33rem;" alt="" />
  		</div>
  		<span>微信支付</span>
  		<div class="select" @click="payMethod = 1">
  			<img src="../img/addAddress/a_round_1_icon.png" alt="" v-if="payMethod != 1"/>
  			<img src="../img/addAddress/a_round_2_icon.png" alt="" v-if="payMethod == 1"/>
  		</div>
  	</div>
  	
  	<div class="method clearfix">
  		<div class="methodPic">
  			<img src="../img/payment/a_payment_Jingdong_icon@2x.png" style="width:0.44rem;height:0.43rem;margin-top:0.3rem;" alt="" />
  		</div>
  		<span>京东支付</span>
  		<div class="select" @click="payMethod = 2">
  			<img src="../img/addAddress/a_round_1_icon.png" alt="" v-if="payMethod != 2"/>
  			<img src="../img/addAddress/a_round_2_icon.png" alt="" v-if="payMethod == 2"/>
  		</div>
  	</div>
		
		<div class="payment clearfix">
			<div class="fl">剩余支付时间：14:59</div>
			<div class="fr">需支付：<span>￥5000</span></div>
		</div>
		
		<div class="foot">
			<div class="footer">
				<div class="btmBtn">去支付</div>
			</div>
		</div>
		
  </div>
</template>

<script src="../js/views/choosePayMethods.js"></script>

<style scoped>
	@import '../css/views/choosePayMethods.css'
</style>
