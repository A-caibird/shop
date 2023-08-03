<template>
	<view>
		<u-action-sheet :show="show" round="16rpx">
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
</template>

<script>
	export default {
		model: {
			prop: 'show',
			event: 'change'
		},
		props: {
			show: Boolean,
		},
		data() {
			return {
				popShow: this.show
			}
		},
		methods: {
			close() {
				this.popShow = false;
				this.$emit('change', this.popShow);
			}
		}
	}
</script>

<style lang="scss" scoped>
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
</style>