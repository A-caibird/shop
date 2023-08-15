<template>
	<view>
		<view class="shop-card" @click="goTo">
			<view class="image-box">
				<image :src="imagePath">
				</image>
			</view>
			<view class="bottomPart">
				<view class="title">
					{{title}}
				</view>
				<view class="sec-title">
					{{secTitle.sorce}}分｜月售{{secTitle.sales}}｜{{secTitle.distance}}m
				</view>
				<u-gap height="1" bgColor="#F1F2F2"></u-gap>
				<view class="tag-location">
					<view class="tag">
						<text>{{tag}}</text>
					</view>
					<view class="location">
						<text>{{location}}</text>
					</view>
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
		},
		methods:{
			goTo(){
				console.log('succesful')
				uni.navigateTo({
					url:"/pages/store-details/store-details"
				})
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

		.bottomPart {
			padding: 0 20rpx;
			margin-top: 20rpx;

			.title {
				width: 320rpx;
				height: 80rpx;
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #333333;
				line-height: 40rpx;
			}

			.sec-title {
				width: 258rpx;
				height: 34rpx;
				font-size: 24rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #999999;
				line-height: 34rpx;
				margin-bottom: 15rpx;
			}

			@mixin tag-style {
				height: 32rpx;
				background: #FEF8E8;
				border-radius: 8rpx;
				overflow: hidden;
				text-overflow: ellipsis;
				margin-right: 20rpx;

				text {
					font-size: 22rpx;
					font-family: PingFangSC-Regular, PingFang SC;
					font-weight: 400;
					color: #FF7A00;
					position: relative;
					bottom: 10rpx;
					white-space: nowrap;
				}
			}

			.tag-location {
				display: flex;
				flex-direction: row;
				margin-top: 15rpx;
				.tag {
					@include tag-style();
				}
				.location {
					@include tag-style();
				}
			}
		}
	}
</style>