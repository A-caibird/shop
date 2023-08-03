<template>
	<view class="container">
		<u-navbar bgColor="#f3f4f5" height="54" title="提交订单">
		</u-navbar>
		<view class="box">
			<view class="list">
				<view class="store" v-for="(item,index) in storeList" :key="index">
					<view class="store-name">
						<view class="name">
							<text>{{item.storeName}}</text>
						</view>
					</view>
					<view class="divi">
					</view>
					<view class="order" v-for="(item1,index1) of item.comboList" :key="index1">
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
						</view>
						<view class="right">
							<view class="price">
								<text>
									¥179
								</text>
								<text>
									¥125.9
								</text>
							</view>
							<view class="num">
								<text>
									×1
								</text>
							</view>
						</view>
					</view>
				</view>
				<view class="total">
					<text>
						小计：
					</text>
					<text>
						¥134.9
					</text>
				</view>
				<view class="divi dis">
				</view>
				<view class="footer">
					<view class="left">
						<text>
							优惠券
						</text>
					</view>
					<view class="right">
						<text>
							共减¥10
						</text>
						<image src="@/static/greyRight.png">
						</image>
					</view>
				</view>
			</view>


			<view class="payment">
				<view class="title">
					<text>
						支付方式
					</text>
				</view>
				<view class="divi">
				</view>
				<u-radio-group v-model="radiovalue1" placement="column" @change="payChange">
					<view class="kinds">
						<view class="item">
							<view class="payName">
								<image src="@/static/pay/weChat.png">
								</image>
								<text>
									微信支付
								</text>
							</view>
							<view class="select">
								<u-radio activeColor="#48C368" name="微信支付">
								</u-radio>
							</view>
						</view>
						<view class="item">
							<view class="payName">
								<image src="@/static/pay/aliPay.png">
								</image>
								<text>
									支付宝支付
								</text>
							</view>
							<view class="select">
								<u-radio activeColor="#48C368" name="支付宝支付">
								</u-radio>
							</view>
						</view>
					</view>
				</u-radio-group>
			</view>
		</view>

	</view>
</template>

<script>
	export default {
		components: {},
		data() {
			return {
				storeList: [{
					storeName: '大叔小子烤鱼',
					comboList: [{
							comboName: "2-3人超值烤鱼套餐",

						},
						{
							comboName: "小酥肉"
						}
					]
				}],
				radiovalue1: '微信支付'
			}
		},
		methods: {
			payChange: function(n) {
				console.log('radioChange', n);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		@include full-screen-color;
		overflow-y: auto;
		background: #f3f4f5;
		box-sizing: border-box;
		padding: 24rpx;

		.box {
			@include flexY;
			gap: 40rpx;
			position: relative;
			top: 130rpx;

			.list {
				width: 100%;
				background-color: #ffffff;
				border-radius: 26rpx;
				padding: 24rpx 24rpx;
				box-sizing: border-box;
				@include flexY;

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

						&>.name {
							text {
								@include fontStyle(28rpx, 400, #333333, 40rpx);
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
						position: relative;

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
						}

						.right {
							position: absolute;
							right: 0;

							&>.num {
								position: absolute;
								right: 0;

								text {
									@include fontStyle(24rpx, 400, #333333, 34rpx);
								}
							}

							&>.price {
								text {

									&:first-child {
										@include fontStyle(22rpx, 600, #999999, 50rpx);
										color: #999999;
										text-decoration: line-through;
										margin-right: 10rpx;
									}

									&:last-child {
										@include fontStyle(36rpx, 400, #333333, 32rpx);
										color: #333333;

									}
								}
							}
						}
					}
				}

				.total {
					align-self: flex-end;

					text {
						&:first-child {
							@include fontStyle(28rpx, 400, #666666, 34rpx);
						}

						&:last-child {
							@include fontStyle(36rpx, 400, #FF7A00, 44rpx);
						}
					}
				}

				.footer {
					width: 100%;
					@include flexX;
					place-items: center;
					justify-content: space-between;

					&>.left {
						text {
							@include fontStyle(28rpx, 400, #333333, 40rpx);
						}
					}

					&>.right {
						text {
							@include fontStyle(28rpx, 400, #999999, 40rpx)
						}

						image {
							width: 24rpx;
							height: 24rpx;
						}
					}
				}
			}


			&>.payment {
				width: 100%;
				background: #FFFFFF;
				border-radius: 16rpx;
				box-sizing: border-box;
				padding: 24rpx 30rpx;
				@include flexY;

				.title {
					text {
						@include fontStyle(28rpx, 400, #333333, 40rpx)
					}
				}

				&>.divi {
					width: 100%;
					height: 1rpx;
					background: #EBEBEB;
					margin: 20rpx 0;
				}

				.kinds {
					width: 100%;
					@include flexY;
					gap: 20rpx;

					&>.item {
						width: 100%;
						@include flexX;
						justify-content: space-between;

						.payName {
							@include flexX;
							gap: 24rpx;

							text {
								@include fontStyle(28rpx, 400, #333333, 40rpx);
							}

							image {
								width: 44rpx;
								height: 44rpx;
							}
						}

						.select {}
					}
				}
			}
		}
	}
</style>