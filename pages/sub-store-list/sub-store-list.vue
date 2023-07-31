<template>
	<view class="container">
		<u-navbar bgColor="#ffffff" height="54" title="分店列表">
		</u-navbar>
		<view class="list">
			<view class="item" v-for="item of 5" :key="item">
				<view class="name">
					<text>
						大叔小子烤鱼（天一广场店）
					</text>
				</view>
				<view class="rate">
					<u-rate :count="5" v-model="value" active-color="#69DB38" gutter="4"></u-rate>
					<text>
						{{value.toFixed(1)}}
					</text>
				</view>
				<view class="time">
					<text>
						营业中
					</text>
					<text>
						10:00-21:00
					</text>
				</view>
				<view class="distance">
					<view class="icon">
						<image src="/static/location.png">
						</image>
						<text>
							距您5.6km
						</text>
					</view>
					<text class="location">
						首南街道天童南路
					</text>
				</view>
				<view class="phone">
					<image src="/static/phone.png">
					</image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				value: 5
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		background: #f3f4f5;
		width: 100%;
		position: absolute;
		top: 0rpx;
		left: 0rpx;
		right: 0rpx;
		bottom: 0rpx;
		overflow-y: auto;

		.list {
			width: 100%;
			position: relative;
			top: 160rpx;
			padding: 20rpx 30rpx;
			box-sizing: border-box;
			

			.item {
				position: relative;
				padding: 20rpx 20rpx;
				background: #FFFFFF;
				border-radius: 16rpx;
				width: 100%;
				box-sizing: border-box;
				margin-top:20rpx;
				&>*{
					margin-top:10rpx;
				}
				.name {
					text {
						font-size: 28rpx;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: 500;
						color: #333333;
						line-height: 40rpx;
					}
				}

				.rate {
					@include flexX;
					gap: 10rpx;

					text {
						font-size: 24rpx;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: 500;
						color: #48C368;
						line-height: 34rpx;
					}
				}

				.time {
					@include flexX();
					gap: 20rpx;

					text {
						font-size: 24rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #666666;
						line-height: 34rpx;
					}
				}

				.distance {
					@include flexX();

					text {
						font-size: 24rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #666666;
						line-height: 34rpx;
					}

					.icon {
						height: 28rpx;
						@include flexX();
						place-items: center;
						margin-right: 20rpx;

						image {
							height: 28rpx;
							width: 28rpx;
						}

						text {
							margin-right: 20rpx;
						}
					}

					.location {
						overflow: hidden;
						white-space: nowrap;
						text-overflow: ellipsis;
					}
				}

				.phone {
					position: absolute;
					right: 20rpx;
					top: 70rpx;

					image {
						width: 64rpx;
						height: 64rpx;
					}
				}
			}

		}
	}
</style>