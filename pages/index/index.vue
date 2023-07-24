<template>
	<view class="container">
		<view class="location-search">
			<view class="location">
				<view class="text">
					宁波
				</view>
				<view class="icon">
					<image src="../../static/headPage/locationSelect.png"></image>
				</view>
			</view>
			<view class="search">
				<view class="icon">
					<image src="../../static/headPage/search.png">
					</image>
				</view>
				<view class="input-box">
					<input  placeholder="搜索店铺" placeholder-class="placeholder">
				</view>
				<view class="btn">
					<button>
						搜索
					</button>
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

		},
		mounted() {

		}
	}
</script>
<style lang="scss">
	.container {
		width: 100%;
		height: 1000rpx;
		display: flex;
		flex-direction: column;
		background: linear-gradient(180deg, #48C368 0%, rgba(72, 195, 104, 0) 100%);

		.location-search {
			display: flex;
			flex-direction: row;
			place-items: center;
			position: relative;
			top: 20rpx;
			margin-left: 20rpx;
			margin-right: 20rpx;

			.location {
				display: flex;
				flex-direction: row;
				place-items: center;
				position: relative;
				.text {
					font-size: 28rpx;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #FFFFFF;
					line-height: 40rpx;
					width: 56rpx;
					height: 40rpx;
				}

				.icon {
					width: 20rpx;
					height: 20rpx;
					position: absolute;
					left: 60rpx;
					top: 0rpx;
					image {
						height: 100%;
						width: 100%;
					}
				}
			}

			.search {
				display: flex;
				flex-direction: row;
				place-items: center;
				width: 784rpx;
				height: 72rpx;
				background: #FFFFFF;
				border-radius: 36rpx;
				position: relative;
				margin-left: 80rpx;

				.icon {
					width: 20rpx;
					height: 20rpx;
					position: absolute;
					left:20rpx;
					top:15rpx;
					image {
						height: 100%;
						width: 100%;
					}
				}

				.input-box {
					width: 100%;
					position: absolute;
					left:80rpx;
					input{
						font-size: 28rpx;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: 500;
					}
				}

				.placeholder {
					font-size: 28rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #999999;
				}

				.btn {
					line-height: 40rpx;
					position: absolute;
					right: 7rpx;
					button {
						width: 118rpx;
						height: 64rpx;
						background: #48C368;
						border-radius: 36rpx;
						text-align: center;
						line-height: 65rpx;
						font-size: 28rpx;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: 500;
						color: #FFFFFF;
					}
				}
			}
		}
	}
</style>