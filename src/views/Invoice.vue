<template>
  <div class="invoice">
  	
		<div class="invoiceType">
			<div class="title">发票类型</div>
			<div class="invoiceItem clearfix">
				<div :class="{active: typeNum==0}" @click="typeNum=0">不开发票</div>
				<div :class="{active: typeNum==1}" @click="typeNum=1">电子发票</div>
				<div class="noMarRgt" :class="{active: typeNum==2}" @click="typeNum=2">纸质发票</div>
			</div>
		</div>
		
		<div class="invoiceTitle">
			<div class="title">发票抬头</div>
			<div class="invoiceTitleType">
				<div class="identity clearfix">
					<div @click="hideUnitInfoBox"><img src="../img/addAddress/a_round_1_icon.png" alt="" v-if="isSelected == false"/><img src="../img/addAddress/a_round_2_icon.png" alt="" v-if="isSelected == true"/>个人</div>
					<div @click="showUnitInfoBox"><img src="../img/addAddress/a_round_1_icon.png" alt="" v-if="isSelected == true"/><img src="../img/addAddress/a_round_2_icon.png" alt="" v-if="isSelected == false"/>单位</div>
				</div>
			</div>
			<div class="unitInfo" v-if="showUnitInfo">
				<div class="unitName">
					<input type="text" placeholder="请填写单位名称"/>
				</div>
				<div class="Taxpayer">
					<input type="text" placeholder="请填写纳税人识别号"/>
					<div class="atten"></div>
				</div>
			</div>
		</div>
		
		<div class="invoiceContent">
			<div class="title">发票内容</div>
			<div class="invoiceGoodsType">
				<div @click="invoiceGoodsType = 0"><img src="../img/addAddress/a_round_1_icon.png" alt="" v-if="invoiceGoodsType != 0"/><img src="../img/addAddress/a_round_2_icon.png" alt="" v-if="invoiceGoodsType == 0"/>明细</div>
				<div @click="invoiceGoodsType = 1"><img src="../img/addAddress/a_round_1_icon.png" alt="" v-if="invoiceGoodsType != 1"/><img src="../img/addAddress/a_round_2_icon.png" alt="" v-if="invoiceGoodsType == 1"/>箱包</div>
				<div @click="invoiceGoodsType = 2"><img src="../img/addAddress/a_round_1_icon.png" alt="" v-if="invoiceGoodsType != 2"/><img src="../img/addAddress/a_round_2_icon.png" alt="" v-if="invoiceGoodsType == 2"/>腕表</div>
				<div @click="invoiceGoodsType = 3"><img src="../img/addAddress/a_round_1_icon.png" alt="" v-if="invoiceGoodsType != 3"/><img src="../img/addAddress/a_round_2_icon.png" alt="" v-if="invoiceGoodsType == 3"/>珠宝</div>
			</div>
		</div>
		
		<div class="foot">
			<div class="footer">
				<div class="btmBtn" @click="sureInvoiceType">确定</div>
			</div>
		</div>
		
  </div>
</template>

<script src="../js/views/invoice.js"></script>

<style scoped>
	@import '../css/views/invoice.css'
</style>
