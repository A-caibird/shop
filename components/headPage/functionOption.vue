<template>
	<view>
		<view class="shop-card">
			<view class="image-box">
				<image :src="imagePath">
				</image>
			</view>
			<view class="title">
				{{title}}
			</view>
			<view class="sec-title">
				{{secTitle.sorce}}分｜月售{{secTitle.sales}}｜{{secTitle.distance}}m
			</view>
			<view class="tag-location">
				<view class="tag">
					{{tag}}
				</view>
				<view class="location">
					{{location}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ['imagePath', 'title', 'secTitle', 'tag', 'location'],
		data() {
			return {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.shop-card {
		width: 342rpx;
		height: 558rpx;
		background: #FFFFFF;
		border-radius: 16rpx;


		.image-box {
			width: 342rpx;
			height: 342rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.title {
			width: 320rpx;
			height: 80rpx;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #333333;
			line-height: 40rpx;
			margin-top: 20rpx;
			margin-left: 20rpx;
			margin-right: 20rpx;
		}

		.sec-title {
			width: 258rpx;
			height: 34rpx;
			font-size: 24rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: #999999;
			line-height: 34rpx;
			margin: 20rpx 0rpx 0rpx 20rpx;
		}

		.tag-location {
			display: flex;
			flex-direction: row;
			margin-left: 20rpx;
			margin-right: 20rpx;
			margin-top: 20rpx;

			.tag {
				width: 44rpx;
				height: 32rpx;
				font-size: 22rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #FF7A00;
				line-height: 32rpx;
			}

			.location {
				width: 88rpx;
				height: 32rpx;
				font-size: 22rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #FF7A00;
				line-height: 32rpx;
			}
		}

	}
</style>