<template>
	<view>
		<view class="item" >
			<view class="tag">
				<text>
					通用
				</text>
			</view>
			<view class="left">
				<text>
					平台通用优惠券
				</text>
				<text>
					2023.02.15到期
				</text>
			</view>
			<view class="right">
				<view class="divi">

				</view>
				<view class="content">
					<text>
						¥10
					</text>
					<text>
						满50可用
					</text>
					<view class="btn">
						<text>
							去使用
						</text>
					</view>
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
	.item {

		width: 100%;
		overflow-y: auto;
		position: relative;
		@include flexX;
		justify-content: space-between;
		place-items: center;
		box-sizing: border-box;
		background: #ffffff;
		border-radius: 16rpx;

		.tag {
			position: absolute;
			left: 0;
			top: 0;
			text {
				display: block;
				@include fontStyle(22rpx, 400, #FDAC03, 22rpx);
				background: #FEF8E8;
				border-radius: 16rpx;
				padding: 5rpx 10rpx;
				box-sizing: border-box;
			}
		}

		.left {
			padding: 52rpx 64rpx;
			@include flexY;
			gap: 24rpx;

			text {
				&:first-child {
					@include fontStyle(28rpx, 500, #333333, 40rpx);
				}

				&:last-child {
					@include fontStyle(24rpx, 400, #999999, 34rpx);
				}
			}

		}

		.right {
			margin: 28rpx 0;
			margin-right: 32rpx;
			@include flex;
			gap: 20rpx;

			&>.divi {
				border-left: 1px dashed #999999;
				margin: -28rpx 0;
				margin-right: 32rpx
			}

			&>.content {
				@include flexY;
				place-items: center;
				gap: 10rpx;

				text {
					display: block;

					&:nth-child(1) {
						@include fontStyle(52rpx, 500, #48C368, 74rpx);
					}

					&:nth-child(2) {
						@include fontStyle(24rpx, 400, #999999, 34rpx);
					}
				}

				.btn {
					background: linear-gradient(132deg, #69DB38 0%, #48C368 100%);
					border-radius: 36rpx;
					padding: 8rpx 24rpx;

					text {
						@include fontStyle(24rpx, 500, #ffffff, 34rpx);
					}
				}
			}

		}
	}
</style>