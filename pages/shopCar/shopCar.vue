<template>
	<view class="container">
		<u-navbar bgColor="#f3f4f5" leftIcon="" height="54">
			<view class="u-nav-slot-center" slot="center">
				<text>
					购物车
				</text>
				<text>
					(3)
				</text>
			</view>
			<view class="u-nav-slot-right" slot="right">
				<text>
					管理
				</text>
			</view>
		</u-navbar>
<!-- #f3f4f5 -->

		<view class="list">
			<view class="item">
				<left-tag name="美食"></left-tag>
				<view class="divi">
				</view>
				<view class="store" v-for="(item,index) in storeList" :key="index">
					<u-checkbox-group placement="column" v-model="item.select" @change="checkboxChange">

						<view class="store-name">
							<view class="select">
								<u-checkbox shape="circle" activeColor="#48C368" :name="item.storeName">
								</u-checkbox>
							</view>
							<view class="name">
								<text>{{item.storeName}}</text>
							</view>
							<view class="icon">
								<image src="@/static/darkRight.png">
								</image>
							</view>
						</view>
						<view class="order" v-for="(item1,index1) of item.comboList" :key="index1">
							<view class="select">
								<u-checkbox shape="circle" activeColor="#48C368" :name="item1.comboName">
								</u-checkbox>

							</view>
							<view class="food-photo">
								<image src="@/static/shopCar/food1.png">

								</image>
							</view>
							<view class="combo-info">
								<view class="combo-name">
									<text>
										{{item1.comboName}}
									</text>
								</view>
								<view class="time">
									<text>
										周一至周五
									</text>
									<text>
										免预约
									</text>
								</view>
								<view class="price">
									<text>
										¥125.9
									</text>
									<text>
										¥179
									</text>
								</view>
							</view>
							<view class="num">
								<text>
									×1
								</text>
							</view>
						</view>
					</u-checkbox-group>
				</view>
				<view class="divi dis">
				</view>
				<view class="footer">

					<view class="part1">
						<view class="oneSelect">
							<u-checkbox-group>
								<u-checkbox shape="circle" activeColor="#48C368">
								</u-checkbox>
							</u-checkbox-group>
						</view>
						<view class="oneSelectBotton">
							<text>
								全选
							</text>
						</view>
					</view>
					<view class="part2">
						<view class="select-info">
							<view class="select">
								<text>
									已选2件,
								</text>
								<text>
									合计:
								</text>
								<text>
									¥134.9
								</text>
							</view>
							<view class="favorable">
								<view class="reduce">
									<text>
										共减¥10
									</text>
								</view>
								<view class="detail" @tap="popShow=true">
									<text>
										明细
									</text>
									<image src="@/static/shopCar/yellowDown.png">
									</image>
								</view>
								<u-action-sheet :show="popShow" round="16rpx">
									<view class="popWindows">
										<view class="image-box" @tap="close">
											<image src="/static/close.png">
								
											</image>
										</view>
										<view class="title">
											<text>
												金额明细
											</text>
											<text>
												实际优惠金额请以下单页面为准
											</text>
										</view>
										<view class="info">
											<view class="item">
												<text>
													商品总价
												</text>
												<text>
													¥144.9
												</text>
											</view>
											<view class="item">
												<text>
													优惠券立减
												</text>
												<text>
													¥10
												</text>
											</view>
										</view>
								
										<view class="divi">
								
										</view>
										<view class="all1">
											<view class="item1">
												<text>
													共优惠
												</text>
												<text>
													- ¥10
												</text>
											</view>
											<view class="item1">
												<text>
													合计
												</text>
												<text>
													¥134.9
												</text>
											</view>
										</view>
									</view>
								
								</u-action-sheet>
							</view>
						</view>
						<view class="button">
							<text>
								立即结算
							</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<footer-bottom :cur="2">
		</footer-bottom>
	</view>
</template>

<script>
	import footerBottom from "@/components/indexPage/footer.vue"
	import leftTag from "@/components/left-tag.vue";
	import pop from "@/components/shopCar/pop.vue";
	export default {
		components: {
			leftTag,
			pop,
			footerBottom
		},
		data() {
			return {
				select1: [],
				storeList: [{
					storeName: '大叔小子烤鱼',
					select: [],
					comboList: [{
							comboName: "2-3人超值烤鱼套餐",

						},
						{
							comboName: "小酥肉"
						}
					]
				}],
				popShow: false,

			}
		},
		methods: {
			checkboxChange: function(n) {
				console.log('change', n);
				const fir = n[0];
				for (let [index, i] of this.storeList.entries()) {

					console.log(i.storeName, fir)
					if (i.storeName === fir) {
						let temp = [fir];
						for (let i of this.storeList[index].comboList) {
							temp.push(i.comboName)
						}
						this.storeList[index].select = temp;
						console.log(this.storeList[index].select);
					} else {
						console.log(0)
					}
				}
				this.storeList[0].select.push('大叔小子烤鱼')
			},
			// close() {
			// 	this.popShow = false;
			// 	this.$emit('change', this.display);
			// }
			close() {
				this.popShow = false;
				this.$emit('change', this.popShow);
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep .uicon-true {
		visibility: hidden;
	}

	// 解决在小程需端,如果使用letIcon去掉左边的返回符号,但是会显示true,方法使用样式穿透
	.container {
		@include full-screen-color;
		background: #f3f4f5;

		.u-nav-slot-center {
			text {
				@include fontStyle(36rpx, 500, #333333, 36rpx) &:nth-child(2) {
					font-size: 28rpx;
					margin-left: 20rpx;
				}
			}
		}

		.u-nav-slot-right {
			text {
				@include fontStyle(28rpx, #666666, 400, 40rpx);
				color: #666666;
			}
		}

		&>.list {
			position: relative;
			top: 172rpx;
			@media (max-height:800px) {
				top: 202rpx;
			}
			@media (min-height:800px) {
				top: 202rpx;
			}
			@media (min-height:912px) {
				top: 172rpx;
			}
			margin: 24rpx 24rpx;

			&>.item {
				background-color: #ffffff;
				width: 100%;
				// height: 688rpx;
				background: #FFFFFF;
				border-radius: 16rpx;
				padding: 24rpx;
				box-sizing: border-box;

				.divi {
					margin: 16rpx 0rpx;
					width: 100%;
					height: 1rpx;
					background: #EBEBEB;

					&.dis {
						margin-top: 30rpx;
						margin-bottom: 30rpx;
					}
				}

				.store {
					.store-name {

						@include flexX;
						justify-items: center;
						align-items: center;

						&>.select {}

						&>.name {
							text {
								@include fontStyle(28rpx, 400, #333333, 40rpx);
							}
						}

						.icon {
							margin-left: 10rpx;

							image {
								width: 16rpx;
								height: 16rpx;
							}
						}
					}

					.order {
						margin-top: 32rpx;
						width: 100%;
						@include flexX;
						justify-content: flex-start;
						align-items: center;
						gap: 10rpx;
						// background: red;
						position: relative;

						&>.select {}

						.food-photo {
							position: relative;


							image {
								width: 160rpx;
								height: 160rpx;
							}
						}

						.combo-info {
							&>.combo-name {
								text {
									@include fontStyle(28rpx, 400, #333333, 40rpx);
								}
							}

							&>.time {
								text {
									@include fontStyle(24rpx, 400, #666666, 34rpx);
									color: #666666;

									&:nth-child(1) {
										margin-right: 10rpx;
									}
								}

							}

							&>.price {
								text {

									&:first-child {
										@include fontStyle(36rpx, 600, #FF7A00, 50rpx);
										color: #FF7A00;
										margin-right: 10rpx;
									}

									&:last-child {
										@include fontStyle(22rpx, 400, #999999, 32rpx);
										color: #999999;
										text-decoration: line-through;
									}
								}
							}
						}

						.num {
							background:transparent;
							border-radius: 16rpx;
							border: 1rpx solid #E2E2E2;
							display:inline;
							text {
								@include fontStyle(24rpx, 400, #333333, 30rpx);
								
								display: inline-block;
								margin:5rpx 10rpx;
								margin-bottom: 10rpx;
								
							}

							position: absolute;
							right:0;

						}
					}




				}

				.footer {
					width: 100%;
					@include flexX;
					place-items: center;
					justify-content: space-between;

					.part1 {
						@include flexX;
						place-items: center;

						.oneSelect {}

						.oneSelectBotton {
							text {
								@include fontStyle(24rpx, 400, #666666, 34rpx);
							}
						}
					}

					.part2 {
						@include flexX;
						place-items: center;
						gap: 10rpx;

						&>.select-info {
							&>.select {
								text{
									
									&:nth-of-type(1) {
										@include fontStyle(24rpx, 400, #666666, 34rpx);
									}
									
									&:nth-of-type(2) {
										@include fontStyle(24rpx, 400, #666666, 34rpx);
									}
									
									&:nth-of-type(3) {
										@include fontStyle(36rpx, 500, #FF7A00, 56rpx);
									}
								}
							}

							&>.favorable {
								@include flexX;
								place-items: center;
								align-items: center;
								&>.reduce {
									text {
										@include fontStyle(24rpx, 400, #FF7A00, 34rpx);
										color: #FF7A00;
										margin-right: 10rpx;
									}
								}

								&>.detail {
									@include flexX;
									place-items: center;
									@include fontStyle(24rpx, 400, #FF7A00, 34rpx);
									color: #FF7A00;
									// position: absolute;
									// left:200rpx;
									// z-index: 1000000;
									image {
										width: 22rpx;
										height: 22rpx;
									}
								}
								.popWindows {
									height: 560rpx;
									overflow-y: auto;
									@include flexY();
									place-items: center;
									padding: 20rpx 20rpx;
									box-sizing: border-box;
									position: relative;
								
									.image-box {
										position: absolute;
										right: 22rpx;
										top: 25rpx;
								
										image {
											width: 32rpx;
											height: 32rpx;
										}
									}
								
									&>.title {
										text {
											display: block;
								
											&:first-child {
												@include fontStyle(32rpx, 500, #333333, 44rpx);
												color: #333333;
											}
								
											&:last-child {
												@include fontStyle(24rpx, 400, #BBBBBB, 34rpx);
												color: #BBBBBB;
											}
										}
									}
								
									&>.info {
										width: 100%;
										margin-top: 46rpx;
										@include flexY;
										gap: 20rpx;
								
										&>.item {
											@include flexX;
											justify-content: space-between;
								
											text {
												&:nth-child(1) {
													@include fontStyle(28rpx, 400, #666666, 44rpx);
													color: #666666;
												}
								
												&:nth-child(2) {
													@include fontStyle(24rpx, 400, #333333, 34rpx);
													color: #333333;
												}
											}
										}
									}
								
									&>.divi {
										width: 100%;
										height: 1rpx;
										background: #EBEBEB;
										margin: 32rpx 0;
									}
								
									&>.all1 {
										width: 100%;
										@include flexY;
										gap: 20rpx 0;
										&>.item1 {
											@include flexX;
											justify-content: space-between;
								
											text {
												&:first-child {
													@include fontStyle(28rpx, 500, #333333, 44rpx);
													color: #333333;
												}
								
												&:last-child {
													@include fontStyle(28rpx, 500, #FF7A00, 34rpx);
													color: #FF7A00;
												}
											}
										}
									}
								}
							}
						}

						&>.button {
							background: linear-gradient(132deg, #69DB38 0%, #48C368 100%);
							border-radius: 36rpx;
							box-sizing: border-box;
							padding: 14rpx 34rpx;

							text {
								@include fontStyle(28rpx, 400, #ffffff, 40rpx);
							}
						}
					}
				}
			}
		}
	}
</style>