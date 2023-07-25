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
					<input placeholder="搜索店铺" placeholder-class="placeholder">
				</view>
				<view class="btn">
					<button>
						搜索
					</button>
				</view>
			</view>
		</view>
		<view class="shop-card-area" >
			<function-option v-for="(item,index) in foodList" :key="index" :imagePath="item.imagePath" :title="item.title" :secTitle="item.secTitle" :tag="item.tag" :location="item.location"></function-option>
		</view>
		<view class="footer">
			
		</view>
	</view>
</template>
<script>
	import functionOption from "@/components/headPage/functionOption.vue"
	export default {
		components: {
			functionOption,
		},
		data() {
			return {
				foodList: [{
					imagePath: '/static/headPage/footPhoto1.png',
					title: '大叔小子烤鱼（天一广场店',
					secTitle: {
						sorce: '4.6',
						sales: '623',
						distance: '120'
					},
					tag: '烤鱼',
					location: '天一广场'
				},
				{
					imagePath: '/static/headPage/footPhoto1.png',
					title: '大叔小子烤鱼（天一广场店',
					secTitle: {
						sorce: '4.6',
						sales: '623',
						distance: '120'
					},
					tag: '烤鱼',
					location: '天一广场'
				},
				{
					imagePath: '/static/headPage/footPhoto1.png',
					title: '大叔小子烤鱼（天一广场店',
					secTitle: {
						sorce: '4.6',
						sales: '623',
						distance: '120'
					},
					tag: '烤鱼',
					location: '天一广场'
				},
				{
					imagePath: '/static/headPage/footPhoto1.png',
					title: '大叔小子烤鱼（天一广场店',
					secTitle: {
						sorce: '4.6',
						sales: '623',
						distance: '120'
					},
					tag: '烤鱼',
					location: '天一广场'
				},
				{
					imagePath: '/static/headPage/footPhoto1.png',
					title: '大叔小子烤鱼（天一广场店',
					secTitle: {
						sorce: '4.6',
						sales: '623',
						distance: '120'
					},
					tag: '烤鱼',
					location: '天一广场'
				}],
			}
		},
		methods: {
			left() {
				console.log('left');
			},
			right() {
				console.log('right');
			}
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
				width: 594rpx;
				height: 72rpx;
				background: #FFFFFF;
				border-radius: 36rpx;
				position: relative;
				margin-left: 80rpx;

				// margin-right: 10px;
				.icon {
					width: 20rpx;
					height: 20rpx;
					position: absolute;
					left: 20rpx;
					top: 15rpx;

					image {
						height: 100%;
						width: 100%;
					}
				}

				.input-box {
					width: 100%;
					position: absolute;
					left: 80rpx;

					input {
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

		.scroll-list {
			@include flex(column);
			width: 95%;
			height: 100%;
			margin-left: 20rpx;
			margin-top: 60rpx;
			background-color: #FFFFFF;
			border-radius: 16rpx;

			&__goods-item {
				margin-right: 20px;

				&__image {
					width: 60px;
					height: 60px;
					border-radius: 4px;
				}

				&__text {
					color: #f56c6c;
					text-align: center;
					font-size: 12px;
					margin-top: 5px;
				}
			}

			&__show-more {
				background-color: #fff0f0;
				border-radius: 3px;
				padding: 3px 6px;
				@include flex(column);
				align-items: center;

				&__text {
					font-size: 12px;
					width: 12px;
					color: #f56c6c;
					line-height: 16px;
				}
			}
		}

		.shop-card-area {
			height: auto;
			background-color: null;
			margin-left: 20rpx;
			margin-right: 20rpx;
			margin-top: 40rpx;

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
		}

	}
</style>