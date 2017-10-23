<template>
  <div class="goodsLists">
		<div class="screenNav clearfix">
			<div>排序<img src="../img/goodsList/b_filter_arrow_up_con@2x.png" alt="" v-if="isOrder == false" /><img src="../img/goodsList/b_filter_arrow_down_con@2x.png" alt="" v-if="isOrder == true" /></div>
			<div>品类<img src="../img/goodsList/b_filter_arrow_up_con@2x.png" alt="" /></div>
			<div>品牌<img src="../img/goodsList/b_filter_arrow_up_con@2x.png" alt="" /></div>
			<div>筛选<img class="screenNone" src="../img/goodsList/screenNone.png" alt="" v-if="isScreen == false"/><img src="../img/goodsList/screenHas.png" class="screenHas" alt="" v-if="isScreen == true"/></div>
		</div>
		
		<div class="goodsList clearfix">
			<div class="goodsOne">
				<div class="goodsOneTop">
					<!--<div class="collection">
						<img src="../img/goodsList/a_collection1_icon@2x.png" alt="" />
						<img src="../img/goodsList/a_collection2_icon@2x.png" alt="" />
					</div>-->
					<img src="../img/goodsList/goods1.png" alt="" />
				</div>
				<div class="goodsOneInfo">
					<div class="brand">Bottega Veneta</div>
					<div class="useDegree">全新长款线夹</div>
					<div class="price">￥3600[95新]</div>
				</div>
			</div>
			
			
		</div>
  </div>
</template>

<script src="../js/views/goodsLists.js"></script>

<style scoped>
	@import '../css/views/goodsLists.css'
</style>
