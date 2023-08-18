<template>
	<view class="container">
		<u-navbar leftIcon="" bgColor="#f3f4f5" height="54">
			<view class="u-nav-slot" slot="center">
				<view class="fir">
					<view class="left" @tap="back">
						<image src="../../static/back.png">

						</image>
					</view>
					<view class="right">
						<image src="../../static/star.png">

						</image>
						<image src="../../static/share.png">

						</image>
					</view>
				</view>
				<view class="sec">
					<classificate></classificate>
				</view>
			</view>
		</u-navbar>
		<view class="box">
			<view class="combo-info">
				<view class="name">
					<text>
						2-3人超值烤鱼套餐
					</text>
				</view>
				<view class="comment">
					<text>
						94%好评“口味好、还会再来”
					</text>
					<text>
						376条评价
					</text>
				</view>
				<view class="image-box">
					<image src="@/static/foodList/foodItem1.png">
					</image>
				</view>
				<view class="price">
					<view class="left">
						<text>
							¥129
						</text>
						<text>
							¥179
						</text>
					</view>
					<view class="right">
						<text>
							月售263
						</text>
					</view>
				</view>
				<view class="import-part">
					<view class="item" v-for="item of 3" :key="item">
						<text>
							通知
						</text>
						<text>
							套餐无需预约 到店即用 如遇高峰期或需排
						</text>
					</view>
				</view>
			</view>


			<view class="combo-detail-title">
				<text>
					套餐详情
				</text>
			</view>
			<view class="combo-detail">
				<left-tag name="菜品" style="margin-bottom: 12rpx;"></left-tag>
				<view class="price">

					<text>
						2-3人超值烤鱼套餐
					</text>
					<view class="money">
						<text>
							1份
						</text>
						<text>
							¥129
						</text>
					</view>
				</view>
				<left-tag name="备注" style="margin-top: 32rpx;margin-bottom: 12rpx;"></left-tag>
				<view class="Note-details">
					<text>
						烤鱼以下口味任选一（1条）：
					</text>
					<text>
						辣(青花椒味、麻辣味、剁椒味、老坛酸菜味、黑椒味、双椒味、辣蕃茄味)
					</text>
					<text>
						不辣(酱香味、蒜香味)
					</text>
					<text>
						时蔬拼盘(1份)
					</text>
					<text>
						泡椒鱼皮(1份)
					</text>
					<text>
						无限量米饭、饮料自助(2份)
					</text>
				</view>
			</view>




			<view class="purchase-notes">
				<text>
					购买须知
				</text>
			</view>
			<view class="purchase-notes-detail">
				<left-tag name="有效期" style="margin-bottom: 12rpx;"></left-tag>
				<view class="validity-period">
					<text>
						购买后30天有效
					</text>
				</view>
				<left-tag name="使用时间" style="margin-bottom: 12rpx;"></left-tag>
				<view class="use-time">
					<text>
						周一至周五 10:00-21:00
					</text>
				</view>
				<left-tag name="使用规则" style="margin-bottom: 12rpx;"></left-tag>
				<view class="rules">
					<text>
						1、不可使用包间
					</text>
					<text>
						2、本单发票由商家提供，详情请咨询商家
					</text>
					<text>
						3、堂食外带均可
					</text>
					<text>
						4、请在餐前给服务人员出示团购套餐券
					</text>
					<text>
						5、团购用户不可同时享受商家其他优惠
					</text>
					<text>
						6、无需预约，消费高峰期可能需要等位
					</text>
				</view>
			</view>



			<view class="applicable-merchants">

				<view class="left">
					<text>
						适用商户
					</text>
				</view>
				<view class="right">
					<text>
						2家门店通用
					</text>
					<image src="@/static/darkRight.png">
					</image>
				</view>
			</view>


			<view class="applicable-merchants-detail">
				<view class="left">
					<view class="title">
						<text>
							大叔小子烤鱼（天一广场店）
						</text>
					</view>
					<view class="location">
						<image src="../../static/location.png">
						</image>
						<view class="distance">
							<text>
								海曙区药行街152号(城隍庙地铁站D口步
								行440米)
							</text>
							<text>
								距您120米
							</text>
						</view>
					</view>
				</view>

				<view class="right">
					<view class="divi">
					</view>
					<view class="phone-box">
						<image src="@/static/phone.png">
						</image>
						<text>
							联系电话
						</text>
					</view>

					<view class="empty">

					</view>
				</view>
			</view>
		</view>

		<view class="button-group">
			<view class="shopCar">
				<image src="@/static/toPage/shopCar.png">

				</image>
				<text>
					购物车
				</text>
			</view>

			<view class="button">
				<view class="b1">
					<text>加入购物车</text>
				</view>
				<view class="b2" @tap="goTo('settle')">
					<text>
						立即抢购
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import classificate from "@/components/classificate.vue";
	import leftTag from "@/components/left-tag.vue";
	export default {
		components: {
			classificate,
			leftTag
		},
		data() {
			return {

			}
		},
		methods: {
			back() {
				console.log("fdasfasfasdf")
				uni.navigateBack({
					delta: 1
				});
			},
			goTo(str) {
				if (str == 'settle') {
					uni.navigateTo({
						url: '/pages/Settle-now/Settle-now'
					})
				}
			}
		},
		computed: {
			ok: function() {

			}
		}
	}
</script>

<style scoped lang="scss">
	::v-deep .uicon-true {
		visibility: hidden;
	}

	// 解决在小程需端,如果使用letIcon去掉左边的返回符号,但是会显示true,方法使用样式穿透
	.u-nav-slot {
		position: relative;
		width: 100%;
		padding: 0rpx 24rpx;

		image {
			width: 60rpx;
			height: 60rpx;
		}

		.fir {
			@include flexX;
			justify-content: space-between;
			place-items: center;

			.left {
				width: 40rpx;
				height: 40rpx;

				image {
					width: 40rpx;
					height: 40rpx;
					position: absolute;
					left: 32rpx;
					top: 0;
					z-index: 999;
				}
			}

			.right {
				@include flexX;
				place-items: center;
				gap: 20rpx;

				image:nth-child(1) {
					margin-right: 10rpx;
				}
			}
		}

		.sec {
			margin-top: 20rpx;
		}
	}



	.container {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		background: #f3f4f5;
		padding: 20rpx 36rpx;
		padding-bottom: 40rpx;
		overflow-y: auto;
		box-sizing: border-box;

		.classificate {
			position: fixed;
			right: 0rpx;
			left: 0rpx;
			top: 140rpx;
			//#ifdef MP-WEIXIN
			top: 176rpx;
			//#endif
			width: 100%;
			padding: 0rpx 36rpx;
			box-sizing: border-box;
			z-index: 1;
			background: #f3f4f5;
		}

		.box {
			position: relative;
			top: 140rpx;

			@media (max-height:800px) {
				top: 220rpx;
			}

			@media (min-height:800px) {
				top: 220rpx;
			}

			@media (min-height:912px) {
				top: 180rpx;
			}

			@media (min-height:932px) {
				top: 180rpx;
			}

			overflow-y: auto;
			margin-bottom: 40rpx;

			.combo-info {
				width: 100%;
				background: #FFFFFF;
				border-radius: 16rpx;
				padding: 24rpx;
				box-sizing: border-box;

				&>.name {
					margin-bottom: 16rpx;

					text {
						@include fontStyle(40rpx, 500, #333333, 56rpx);
					}
				}

				&>.comment {
					width: 100%;
					@include flexX;
					justify-content: space-between;
					margin-bottom: 16rpx;

					text {
						@include fontStyle(24rpx, 400, #333333, 34rpx);
					}
				}

				&>.image-box {
					width: 100%;
					height: 420rpx;
					margin-top: 20rpx;
					margin-bottom: 16rpx;
					image {
						@include __hw100;

					}
				}

				&>.price {
					@include flexX;
					justify-content: space-between;
					margin-bottom: 30rpx;
					align-items: flex-end;
					&>.left {
						text {
							&:first-of-type {
								@include fontStyle(52rpx, 500, #FF7A00, 74rpx);
								margin-right: 16rpx;
							}

							&:last-of-type {
								@include fontStyle(28rpx, 400, #999999, 40rpx);
								text-decoration: line-through;
							}
						}
					}

					&>.right {
						text {
							@include fontStyle(24rpx, 400, #999999, 34rpx);
						}
					}
				}

				&>.import-part {
					@include flexY;

					&>.item {
						width: 100%;
						@include flexX;
						margin-top: 20rpx;

						text {
							&:first-of-type {
								@include fontStyle(24rpx, 700, #333333, 34rpx);
								margin-right: 20rpx;
							}

							&:last-of-type {
								@include fontStyle(24rpx, 400, #333333, 34rpx);
							}
						}
					}
				}
			}

			.combo-detail-title {
				margin: 32rpx 0rpx;

				text {
					@include fontStyle(28rpx, 700, #333333, 40rpx);
				}

			}

			.combo-detail {
				width: 100%;
				background: #FFFFFF;
				border-radius: 16rpx;
				padding: 24rpx;
				box-sizing: border-box;

				&>.price {
					@include flexX;
					justify-content: space-between;

					text {
						@include fontStyle(28rpx, 400, #333333, 40rpx);

					}

					.money {
						@include flexX;
						gap: 20rpx;
					}
				}

				&>.Note-details {
					width: 100%;
					box-sizing: border-box;

					text {
						display: block;
						@include fontStyle(28rpx, 400, #333333, 40rpx);
					}
				}
			}

			.purchase-notes {
				margin: 32rpx 0rpx;

				text {
					@include fontStyle(28rpx, 700, #333333, 40rpx);
				}
			}

			.purchase-notes-detail {
				width: 100%;
				background: #FFFFFF;
				border-radius: 16rpx;
				padding: 24rpx;
				box-sizing: border-box;

				.validity-period {
					margin-bottom: 32rpx;

					text {
						@include fontStyle(28rpx, 400, #333333, 40rpx);
					}
				}

				.use-time {
					margin-bottom: 32rpx;

					text {
						@include fontStyle(28rpx, 400, #333333, 40rpx);
					}
				}

				.rules {
					// margin-bottom: 32rpx;
					@include flexY;
					gap: 10rpx;

					text {
						@include fontStyle(28rpx, 400, #333333, 40rpx);
					}
				}
			}


			.applicable-merchants {
				margin-top: 32rpx;
				margin-bottom: 16rpx;
				width: 100%;
				@include flexX;
				justify-content: space-between;

				&>.left {

					text {
						@include fontStyle(28rpx, 700, #333333, 40rpx);
					}
				}

				&>.right {
					@include flexX;
					place-items: center;

					text {
						@include fontStyle(24rpx, 400, #666666, 34rpx);
					}

					image {
						width: 22rpx;
						height: 22rpx;
					}
				}
			}

			.applicable-merchants-detail {
				width: 100%;
				box-sizing: border-box;
				border-radius: 16rpx;
				background: #FFFFFF;
				padding: 24rpx;
				padding-right: 0;
				@include flexX;
				justify-content: space-between;
				place-items: center;
				margin-bottom: 180rpx; //控制离手机按钮底部间距

				&>.left {
					@include flexY;

					&>.title {
						margin-bottom: 22rpx;

						text {
							@include fontStyle(28rpx, 500, #333333, 40rpx);
						}
					}

					&>.location {
						@include flexX;
						align-items: flex-start;
						position: relative;

						image {
							width: 28rpx;
							height: 28rpx;
						}

						.distance {
							text {
								@include fontStyle(24rpx, 400, #666666, 24rpx);
								display: block;
							}
						}
					}
				}



				&>.right {
					@include flexX;
					align-items: center;
					justify-content: space-between;

					.divi {
						width: 1rpx;
						height: 100rpx;
						background: #D8D8D8;

					}

					.phone-box {
						@include flexY;
						margin: 0 32rpx;
						place-items: center;

						image {
							width: 64rpx;
							height: 64rpx;
							display: block;
							margin-bottom: 16rpx;
						}

						text {
							display: block;
							@include fontStyle(24rpx, 400, #333333, 34rpx);
						}
					}
				}
			}
		}





		.button-group {
			width: 100%;
			position: fixed;
			bottom: 0;
			@include flexX;
			justify-content: space-between;
			place-items: center;
			background: #FFFFFF;
			padding: 30rpx 24rpx;
			margin: 0rpx -32rpx;
			box-sizing: border-box;

			.shopCar {
				@include flexY;
				place-items: center;
				margin-left: 30rpx;

				image {
					width: 48rpx;
					height: 48rpx;

				}

				text {
					@include fontStyle(22rpx, 400, #333333, 24rpx);
				}
			}


			&>.button {
				@include flexX;

				.b1 {
					border: 2rpx solid #48C368;
					background: #ffffff;
					padding: 18rpx 50rpx;
					border-radius: 200rpx 0rpx 0rpx 200rpx;

					text {
						@include fontStyle(32rpx, 400, #48C368, 44rpx);
					}
				}

				.b2 {
					border: 2rpx solid #48C368;
					background: #48C368;
					padding: 18rpx 50rpx;
					border-radius: 0rpx 200rpx 200rpx 0rpx;

					text {
						@include fontStyle(32rpx, 400, #ffffff, 44rpx);
					}
				}
			}
		}
	}
</style>