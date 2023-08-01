<template>
	<view class="container">
		<u-action-sheet :show="show" round="16rpx">
			<view class="pop">
				<view class="image-box" @tap="close">
					<image src="/static/close.png">

					</image>
				</view>
				<view class="title">
					<text>领取优惠券</text>
				</view>
				<view class="coupon-list">
					<view class="item" v-for="item of 3" :key="item">
						<view class="pop-left">
							<text>
								烤鱼优惠券
							</text>
							<text>
								2023.02.15到期
							</text>
						</view>
						<view class="pop-right">
							<text>
								¥10
							</text>
							<text>
								满100可用
							</text>
							<view class="button">
								<text>
									领取
								</text>
							</view>
						</view>
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
		props:{
			show:Boolean,
		},
		data() {
			return{
				display:this.show
			}
		},
		methods: {
			close() {
				this.display=false;
				this.$emit('change', this.display);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		.pop {
			height: 800rpx;
			overflow-y:auto; 
			@include flexY();
			place-items: center;
			padding: 20rpx 20rpx;
			box-sizing: border-box;
			position: relative;

			.image-box {
				position: absolute;
				right: 22rpx;
				top:25rpx;
				image {
					width: 32rpx;
					height: 32rpx;
				}
			}

			@mixin font1 {
				font-size: 32rpx;
				font-family: PingFangSC-Medium, PingFang SC;
				font-weight: 500;
				color: #333333;
				line-height: 44rpx;
			}

			@mixin font2 {
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #666666;
				line-height: 34rpx;
			}

			&>.title {
				text {
					@include font1;
				}
			}

			&>.coupon-list {
				width: 100%;
				padding: 20rpx 0rpx;
				box-sizing: border-box;

				&>.item {
					width: 100%;
					box-sizing: border-box;
					background: #E9F9EE;
					border-radius: 16rpx;
					padding: 30rpx 40rpx;
					gap: 200rpx;
					@include flexX();
					justify-content: space-between;
					place-items: center;
					margin-bottom: 20rpx;
					&>.pop-left {
						@include flexY();
						gap: 40rpx;

						text {
							&:nth-child(1) {
								@include font1;
							}

							&:nth-child(2) {
								@include font2;
							}
						}
					}

					&>.pop-right {

						@include flexY();
						gap: 10rpx;

						&>text {
							&:nth-child(1) {
								font-size: 52rpx;
								font-family: PingFangSC-Medium, PingFang SC;
								font-weight: 500;
								color: #48C368;
								line-height: 74rpx;

							}

							&:nth-child(2) {
								font-size: 24rpx;
								font-family: PingFangSC-Regular, PingFang SC;
								font-weight: 400;
								color: #666666;
								line-height: 34rpx;

							}

						}

						&>.button {
							display: inline;
							padding: 10rpx 20rpx;
							background: linear-gradient(132deg, #69DB38 0%, #48C368 100%);
							border-radius: 36rpx;

							&>text {
								&:nth-child(1) {
									font-size: 24rpx;
									font-family: PingFangSC-Medium, PingFang SC;
									font-weight: 500;
									color: #FFFFFF;
									line-height: 34rpx;
								}
							}
						}
					}
				}
			}
		}
	}
</style>