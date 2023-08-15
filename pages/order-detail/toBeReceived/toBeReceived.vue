<template>
	<view class="container">
		<u-navbar title="订单详情" bgColor="#f3f4f5" :autoBack="true">
		</u-navbar>
		<view class="content-box">
			<view class="state-info">
				<image src="@/static/order-detail/to-received.png">
				</image>
				<text>
					待收货，剩余6天20小时
				</text>
			</view>
			<view class="part1">
				<view class="combo-item">
					<view class="left">
						<image src="@/static/foodList/foodItem1.png">

						</image>
						<view class="info">
							<text>
								2-3人超值烤鱼套餐
							</text>
							<text>
								周一至周五 免预约
							</text>
							<text>
								随时退 过期自动退
							</text>
							<text>
								¥129.00
							</text>
						</view>
					</view>
					<view class="right">
						<image src="@/static/greyRight.png">
						</image>
					</view>
				</view>
			</view>

			<view class="part2">
				<view class="head">
					<text>
						发起人
					</text>
				</view>

				<view class="bottom">
					<view class="left">
						<image src="@/static/avatar.png">
						</image>
						<text>
							智乐迅
						</text>
					</view>
					<view class="right">
						<text>
							联系客服
						</text>
					</view>
				</view>
			</view>
			<view class="part3">
				<view class="title">
					<text>
						规则说明
					</text>
				</view>
				<view class="sec-line">
					<view class="left">
						<text>
							退款政策：
						</text>
					</view>
					<view class="right">
						<text>
							查看更多
						</text>
						<image src="@/static/greyRight.png">
						</image>
					</view>
				</view>
				<view class="refund-policy-detail">
					<text>
						众筹结束前最后1小时无法申请退款
					</text>
				</view>
				<view class="risk-warning">
					<view class="title">
						<text>
							风险提示：
						</text>
					</view>
					<view class="risk-detail">
						<view class="item">
							<text>
								1、您参与众筹是支持将创意变为现实的过程，而不是直接的商品交易，因此存在一定的风险。请您根据自己的判断选择、支持众筹项目。
							</text>
						</view class="item">
						<view>
							<text>
								2、众筹存在于发起人与支持者之间，作为第三方…
							</text>
						</view>
					</view>
				</view>
			</view>


			<view class="part5">
				<view class="title">
					<text>
						订单信息
					</text>
				</view>
				<view class="order-number">
					<text>订单号：</text>
					<text>87767546777123440908</text>
					<text>复制</text>
				</view>
				<view class="item">
					<text>
						手机号：
					</text>
					<text>
						135****7650
					</text>
				</view>
				<view class="item">
					<text>
						下单时间：
					</text>
					<text>
						2023.02.10
					</text>
					<text>
						14:32
					</text>
				</view>
				<view class="item">
					<text>
						数量：
					</text>

					<text>
						1
					</text>
				</view>
				<view class="item">
					<text>
						总价：
					</text>
					<text>
						¥129.00
					</text>

				</view>
				<view class="item">
					<text>
						待付款：
					</text>
					<text>
						¥129.00
					</text>
				</view>
			</view>


		</view>
		<view class="footer">
			<view class="button-group">
				<view class="orderAgain">
					<text>
						再来一单
					</text>
				</view>
				<view class="check-logistics">
					<text>
						查看物流
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		@include full-screen-color;
		overflow-y: auto;
		background: #f3f4f5;

		.content-box {
			position: relative;
			top: 140rpx;
			padding: 24rpx 24rpx;
			padding-bottom: 200rpx;
			background: transparent;
			@include flexY;
			gap: 20rpx 0rpx;

			.state-info {
				@include flexX;
				place-items: center;
				gap: 0 20rpx;
				margin-bottom: 20rpx;

				image {
					width: 56rpx;
					height: 56rpx;
				}

				text {
					@include fontStyle(40rpx, 500, #333333, 56rpx);
				}
			}

			@mixin part {
				width: 100%;
				background: #FFFFFF;
				border-radius: 16rpx;
				padding: 24rpx;
				box-sizing: border-box;
			}

			.part1 {
				@include part;

				.combo-item {
					@include flexX;
					justify-content: space-between;

					.left {
						@include flexX;
						place-items: flex-start;
						gap: 0 20rpx;

						image {
							width: 160rpx;
							height: 160rpx;
							flex-shrink: 0;
						}

						.info {
							@include flexY;
							gap: 10rpx 0;

							text {
								display: view;
								@include fontStyle(24rpx, 400, #666666, 34rpx);

								&:nth-child(1) {
									font-size: 28rpx;
									color: #333333
								}

								&:nth-child(4) {
									font-size: 32rpx;
									color: #333333;
								}
							}
						}
					}

					.right {
						image {
							width: 22rpx;
							height: 22rpx;
						}
					}
				}
			}


			.part2 {
				@include part;

				.head {
					text {
						@include fontStyle(32rpx, 500, #333333, 44rpx);
					}

					margin-bottom: 24rpx;
				}

				.bottom {
					@include flexX;
					justify-content: space-between;
					align-items: center;

					.left {
						@include flexX;
						gap: 0 10rpx;
						align-items: center;

						image {
							width: 72rpx;
							height: 72rpx;
							border-radius: 50%;
						}

						text {
							@include fontStyle(28rpx, 500, #333333, 40rpx);
						}
					}

					.right {
						border-radius: 86rpx;
						background: #F1F2F2;
						padding: 10rpx 22rpx;

						text {
							@include fontStyle(24rpx, 400, #666666, 34rpx);
						}
					}
				}
			}


			.part3 {
				@include part;

				.title {
					@include fontStyle(32rpx, 500, #333333, 44rpx);
					margin-bottom: 24rpx;
				}

				.sec-line {
					@include flexX;
					justify-content: space-between;
					justify-items: stretch;
					margin-bottom: 12rpx;

					.left {
						text {
							@include fontStyle(28rpx, 400, #999999, 40rpx);
						}
					}

					.right {
						@include flexX;
						align-items: center;

						text {
							@include fontStyle(28rpx, 400, #999999, 40rpx);
						}

						image {
							width: 22rpx;
							height: 22rpx;
						}
					}
				}

				.refund-policy-detail {
					text {
						@include fontStyle(28rpx, 400, #333333, 40rpx);
					}

					margin-bottom: 32rpx;
				}

				.risk-warning {
					.title {

						text {
							@include fontStyle(28rpx, 400, #999999, 40rpx);
						}

						margin-bottom: 12rpx;
					}

					.risk-detail {
						.item {
							text {
								@include fontStyle(28rpx, 400, #333333, 40rpx);
								white-space: pre-wrap;
							}
						}
					}
				}
			}

			.part5 {
				@include part;
				padding: 24rpx;
				box-sizing: border-box;

				.title {
					@include fontStyle(32rpx, 500, #333333, 44rpx);
					margin-bottom: 32rpx;

				}

				.order-number {

					text {

						@include fontStyle(28rpx, 400, #333333, 40rpx);

						&:first-child {
							display: inline-block;
							width: 140rpx;
							color: #999999;
						}

						&:nth-child(3) {
							color: #999999;
							float: right;
						}
					}
				}

				&>.item {
					text {

						@include fontStyle(28rpx, 400, #333333, 40rpx);

						&:first-child {
							color: #999999;
							display: inline-block;
							width: 140rpx;
						}
					}
				}
			}
		}

		.footer {
			width: 100%;
			position: fixed;
			bottom: 0;
			z-index: 1;
			padding: 24rpx;
			padding-bottom: 44rpx;
			box-sizing: border-box;
			@include flexX;
			background: #ffffff;
			justify-content: flex-end;
			align-items: center;

			.button-group {
				@include flexX;
				gap: 0 20rpx;

				.orderAgain {
					padding: 20rpx 42rpx;
					background: #ffffff;
					border-radius: 42rpx;
					border: 2rpx solid #48C368;

					text {
						@include fontStyle(32rpx, 400, #48C368, 44rpx);
					}
				}

				.check-logistics{
					padding: 20rpx 42rpx;
					background: linear-gradient(132deg, #69DB38 0%, #48C368 100%) #F1F2F2;
					border-radius: 42rpx;

					text {
						@include fontStyle(32rpx, 400, #ffffff, 44rpx);
					}
				}
			}
		}
	}
</style>