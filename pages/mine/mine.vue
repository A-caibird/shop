<template>
	<view class="container">
		<view class="content-box">
			<view class="avatar-part">
				<view class="left">
					<image src="@/static/avatar.png"></image>
					<text>稻盛谁的红包</text>
				</view>
				<view class="right">
					<text>设置</text>
				</view>
			</view>
			<view class="order">
				<view class="fir-line">
					<view class="left">
						<text>
							订单
						</text>
					</view>
					<view class="right" @tap="$u.throttle(goToOrder, 500)">
						<text>
							全部订单
						</text>
						<image src="@/static/greyRight.png">
						</image>
					</view>
				</view>
				<view class="two-line">
					<view class="item">
						<image src="@/static/mine/pay.png">
						</image>
						<text>
							待付款
						</text>
					</view>
					<view class="item">
						<image src="@/static/mine/receive.png">
						</image>
						<text>
							待收货
						</text>
					</view>
					<view class="item">
						<image src="@/static/mine/use.png">
						</image>
						<text>
							待使用
						</text>
					</view>
					<view class="item">
						<image src="@/static/mine/comment.png">
						</image>
						<text>
							待评价
						</text>
					</view>
					<view class="item">
						<image src="@/static/mine/afterSales.png">
						</image>
						<text>
							退款/售后
						</text>
					</view>
				</view>
			</view>
			<view class="function-colletion">
				<view class="item">
					<view class="left">
						<image src="@/static/mine/collect.png">
						</image>
						<text>
							收藏
						</text>
					</view>
					<view class="right">
						<image src="@/static/greyRight.png">
						</image>
					</view>
				</view>
				<view class="divi">
				</view>
				<view class="item" @tap="goToCoupon">
					<view class="left">
						<image src="@/static/mine/coupon.png">
						</image>
						<text>
							优惠券
						</text>
					</view>
					<view class="right">
						<image src="@/static/greyRight.png">
						</image>
					</view>
				</view>
				<view class="divi">
				</view>
				<view class="item">
					<view class="left">
						<image src="@/static/mine/theFootprint.png">
						</image>
						<text>
							足迹
						</text>
					</view>
					<view class="right">
						<image src="@/static/greyRight.png">
						</image>
					</view>
				</view>
				<view class="divi">
				</view>
				<view class="item">
					<view class="left">
						<image src="@/static/mine/mineInfo.png">
						</image>
						<text>
							个人信息
						</text>
					</view>
					<view class="right">
						<image src="@/static/greyRight.png">
						</image>
					</view>
				</view>
				<view class="divi">
				</view>
				<view class="item">
					<view class="left">
						<image src="@/static/mine/comment.png">
						</image>
						<text>
							意见反馈
						</text>
					</view>
					<view class="right">
						<image src="@/static/greyRight.png">
						</image>
					</view>
				</view>
				<view class="divi">
				</view>
				<view class="item">
					<view class="left">
						<image src="@/static/mine/aboutUs.png">
						</image>
						<text>
							关于我们
						</text>
					</view>
					<view class="right">
						<image src="@/static/greyRight.png">
						</image>
					</view>
				</view>
			</view>
		</view>
		<footer-bottom :cur="3">
		</footer-bottom>
	</view>
</template>


<script>
	import footerBottom from "@/components/indexPage/footer.vue"
	export default {
		components: {
			footerBottom,
		},
		data() {
			return {

			}
		},
		methods: {
			goToOrder(){
				uni.navigateTo({
					url:'/pages/my-order/my-order'
				})
			},
			goToCoupon(){
				uni.navigateTo({
					url:'/pages/coupon/coupon'
				})
			}
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
			margin-top:120rpx;
			padding: 0rpx 24rpx;

			.avatar-part {
				@include flexX;
				justify-content: space-between;
				place-items: center;
				margin-bottom: 58rpx;

				.left {
					@include flexX;
					place-items: center;
					gap: 0 18rpx;

					image {
						width: 92rpx;
						height: 92rpx;
						border-radius: 50%;
					}

					text {
						@include fontStyle(36rpx, 700, #333333, 50rpx);
					}
				}

				.right {
					text {
						@include fontStyle(28rpx, 400, #333333, 40rpx);
					}
				}
			}

			@mixin part {
				width: 100%;
				background: #FFFFFF;
				border-radius: 16rpx;
				padding: 24rpx;
				box-sizing: border-box;
			}

			.order {
				@include part;

				.fir-line {
					@include flexX;
					justify-content: space-between;

					.left {
						text {
							@include fontStyle(28rpx, 700, #333333, 40rpx);
						}
					}

					.right {
						text {
							@include fontStyle(24rpx, 500, #666666, 34rpx);
						}

						image {
							width: 22rpx;
							height: 22rpx;
						}
					}
				}

				.two-line {
					padding: 0 18rpx;
					box-sizing: border-box;
					margin: 30rpx 0;
					@include flexX;
					justify-content: space-between;

					.item {
						@include flexY;
						place-items: center;

						image {
							width: 56rpx;
							height: 56rpx;
						}

						text {
							@include fontStyle(24rpx, 400, #666666, 34rpx);
							white-space: nowrap;
						}
					}
				}
			}

			.function-colletion {
				@include part;
				margin-top: 24rpx;

				.divi {
					width: 100%;
					height: 1rpx;
					background: #EBEBEB;
					margin: 24rpx 0;
				}

				.item {
					@include flexX;
					place-items: center;
					justify-content: space-between;

					.left {
						@include flexX;
						place-items: center;
						gap: 20rpx;

						image {
							width: 40rpx;
							height: 40rpx;
						}

						text {
							@include fontStyle(28rpx, 400, #4d4d4d, 40rpx);
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
		}
	}
</style>