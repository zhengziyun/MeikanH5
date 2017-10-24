<template>
  <div class="placeOrder">
		
		<router-link to="changeReceiveAddress">
			<div class="receiveAddress">
				<div class="left">
					<img src="../img/placeOrder/e_querendingdan_dizhi_icon@2x.png" alt="" />
				</div>
				<div class="center">
					<div class="receiver clearfix">
						<div>收货人：孙奎道</div>
						<div class="phoneNumber">138****8888<span class="mark">默认</span></div>
					</div>
					<p>北京市懂东城区珠市口东大街甲11号五粮液大厦3层北京市懂东城区珠市口东大街甲11号五粮液大厦3层</p>
				</div>
				<div class="right">
					<img src="../img/public/array_right.png" alt="" />
				</div>
			</div>
		</router-link>
		
		<div class="orderInfos">
			<div class="infos" v-for="(item, index) in arr" :class="{noMarBtm: index==(arr.length-1)}">
				<div class="infosPic">
					<img src="../img/placeOrder/goods1.png" alt="" />
				</div>
				<div class="infosTxt">
					<div class="goodsName">Stella McCartney</div>
					<div class="goodsInfos">[95新] 女士卡其白色边PVC手提单肩边PVC手提单肩边PVC手提单肩边</div>
					<p>购买价：<span>￥15000</span></p>
				</div>
			</div>
		</div>
		
		<router-link to="choosePayMethods">
			<div class="service clearfix">
				<div class="left">支付配送</div>
				<div class="right">
					在线支付<br />京东快递
				</div>
			</div>
		</router-link>
		
		<div class="service clearfix">
			<div class="left">优惠券</div>
			<div class="right">
				满100-10
			</div>
		</div>
		
		<router-link to="invoice">
			<div class="service clearfix">
				<div class="left">发票</div>
				<div class="right invoice">
					不需要发票
				</div>
			</div>
		</router-link>
		
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
		</div>
		
		<div class="foot">
			<div class="footer">
				<div class="fl">需付款：<span>￥5682</span></div>
				<div class="fr subOrder">提交订单</div>
			</div>
		</div>
		
  </div>
</template>

<script src="../js/views/placeOrder.js"></script>

<style scoped>
	@import '../css/views/placeOrder.css'
</style>
