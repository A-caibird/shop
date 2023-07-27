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
		<view class="mid-box">
			<view class="feature-box">
				<swiper :indicator-dots="true" class="swiper">
					<swiper-item>
						<u-grid :border="true">
							<u-grid-item :customStyle="{width:140+'rpx',height:160+'rpx'}"
								v-for="(item, index) in swiperList" :index="index" :key="index">
								<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="item" :size="22"></u-icon>
								<text class="grid-text">{{ '宫格' + (index + 1) }}</text>
							</u-grid-item>
						</u-grid>
					</swiper-item>
				</swiper>
			</view>

			<view class="shop-card-area">
				<function-option v-for="(item,index) in foodList" :key="index" :imagePath="item.imagePath"
					:title="item.title" :secTitle="item.secTitle" :tag="item.tag"
					:location="item.location"></function-option>
			</view>
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
				swiperList: ['integral', 'kefu-ermai', 'coupon', 'gift', 'scan', 'pause-circle', 'wifi', 'email', 'list'],
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
					}
				],
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
			position: fixed;
			z-index: 1;
			width: 100%;
			background: #48C368;
			padding: 20rpx 20rpx;

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
				width: 570rpx;
				height: 72rpx;
				background: #FFFFFF;
				border-radius: 36rpx;
				position: relative;
				margin-left: 80rpx;

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

		.mid-box {
			padding: 20rpx 20rpx;
			.feature-box {
				width: 702rpx;
				height: 376rpx;
				background: #FFFFFF;
				border-radius: 16rpx;
				margin-top: 100rpx;

				.swiper {
					width: 702rpx;
					height: 376rpx;
				}
			}


			.shop-card-area {
				height: auto;
				background-color: null;
				margin-top: 40rpx;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				gap: 20rpx;

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
		.footer {
			position: fixed;
			bottom: 0;
			height: 98rpx;
			width: 100%;
			background: #FFFFFF;
			display: flex;
			flex-direction: row;
			padding: 5rpx 40rpx;

			.item {}
		}
	}
</style>