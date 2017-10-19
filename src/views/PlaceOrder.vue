<template>
  <div class="placeOrder">
  	<div class="head">
			<div class="header">确认订单
				<div class="return">
					<img src="../img/public/return.png" alt="" />
				</div>
			</div>
		</div>
		
		<div class="orderInfos">
			<div class="title">订单信息</div>
			<div class="infos clearfix">
				<div class="infosPic">
					<img src="../img/placeOrder/goodsPic.png" alt="" />
				</div>
				<div class="infosTxt">
					<div>Louis Vuitton/路易威登--手提包95新</div>
					<p>￥8800</p>
				</div>
			</div>
		</div>
		
		<div class="receivingInfo">
			<div class="title">收货信息
				<router-link class="changeAddress" to="/changeReceiveAddress">
					更换收货地址<img src="../img/public/array_right.png" alt="" />
				</router-link>
			</div>
			<div class="buyerInfos">
				<div class="name">张三<span>138****8888</span></div>
				<div class="address">地址：xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</div>
			</div>
			<div class="distributionMode">
				配送方式：京东快递
			</div>
		</div>
		
		<div class="paymentMethod clearfix">
			<div class="active">线上支付</div>
			<div>线下支付</div>
		</div>
		
		<div class="coupon">优惠券
			<span><span>满100-10</span><img src="../img/public/array_right.png" alt="" /></span>
		</div>
		
		<div class="coupon invoice">发票
			<span><span>不需要发票</span><img src="../img/public/array_right.png" alt="" /></span>
		</div>
		
		<div class="commodityInfo">
			<div>商品金额：
				<span>￥8800</span>
			</div>
			<div>运费：
				<span>平台包邮</span>
			</div>
			<div class="borBtm">优惠券
				<span>-￥10</span>
			</div>
			<p class="paymentRequired">
				需付款：<span>￥8790</span>
			</p>
		</div>
		
		<div class="foot">
			<div class="footer">
				<div class="fl">联系客服</div>
				<div class="fr subOrder">提交订单</div>
			</div>
		</div>
		
  </div>
</template>

<script src="../js/views/placeOrder.js"></script>

<style scoped>
	@import '../css/views/placeOrder.css'
</style>
