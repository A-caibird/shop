<template>
	<view class="container">
		<u-navbar bgColor="#48C368" leftIcon="" height="54">
			<view class="u-nav-slot" slot="center">
				<view class="location-search">
					<view class="location">
						<view class="text">
							宁波
						</view>
						<view class="icon">
							<image src="../../static/indexPage/locationSelect.png"></image>
						</view>
					</view>
					<view class="search">
						<view class="icon">
							<image src="../../static/indexPage/search.png">
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
			</view>
		</u-navbar>
		<view class="mid-box">
			<view class="feature-box">
				<swiper :indicator-dots="true" class="swiper-1" indicator-color="#D8D8D8"
					indicator-active-color="#48C368">
					<swiper-item>
						<u-grid :border="true" :col="5">
							<u-grid-item v-for="(item, index) in swiperList1" :index="index" :key="index"
								class="grid-item-1" @tap="goTo(item.text)">
								<image :src="item.imagePath"></image>
								<text class="grid-text">{{ item.text}}</text>
							</u-grid-item>
						</u-grid>
					</swiper-item>
					<swiper-item>
						<u-grid :border="true" :col="5">
							<u-grid-item v-for="(item, index) in swiperList2" :index="index" :key="index"
								class="grid-item" @tap="goTo(item.text)">
								<image :src="item.imagePath"></image>
								<text class="grid-text">{{ item.text}}</text>
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
		<footer-bottom :cur="0">
		</footer-bottom>
	</view>
</template>
<script>
	import footerBottom from "@/components/indexPage/footer.vue"
	import functionOption from "@/components/indexPage/functionOption.vue"
	export default {
		components: {
			functionOption,
			footerBottom,
		},
		data() {
			return {
				swiperList1: [{
						imagePath: "/static/indexPage/foot.png",
						text: '美食'
					}, {
						imagePath: "/static/indexPage/amusement.png",
						text: '休闲娱乐'
					}, {
						imagePath: "/static/indexPage/trail.png",
						text: '周边旅游'
					}, {
						imagePath: "/static/indexPage/car.png",
						text: '养车用车'
					}, {
						imagePath: "/static/indexPage/manHair.png",
						text: '理发男士'
					}, {
						imagePath: "/static/indexPage/quickShop.png",
						text: '超市便利店'
					}, {
						imagePath: "/static/indexPage/fitness.png",
						text: '健身运动'
					}, {
						imagePath: "/static/indexPage/Wedding.png",
						text: '结婚拍照'
					}, {
						imagePath: "/static/indexPage/fitment.png",
						text: '居家装修'
					},
					{
						imagePath: "/static/indexPage/foot.png",
						text: '酒店名宿'
					},
				],
				swiperList2: [{
					imagePath: "/static/indexPage/crowdfunding.png",
					text: '众筹'
				}, ],
				foodList: [{
						imagePath: '/static/indexPage/footPhoto1.png',
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
						imagePath: '/static/indexPage/footPhoto1.png',
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
						imagePath: '/static/indexPage/footPhoto1.png',
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
						imagePath: '/static/indexPage/footPhoto1.png',
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
						imagePath: '/static/indexPage/footPhoto1.png',
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
			},
			goTo(str) {
				console.log(str);
				if (str == '美食') {
					uni.navigateTo({
						url: '/pages/foodList/foodList'
					})

				} else if (str == '众筹') {
					uni.navigateTo({
						url: '/pages/crowdfunding-home/crowdfunding-home'
					})

				}
			}
		},
		mounted() {}
	}
</script>
<style lang="scss" scoped>
	.container {
		width: 100%;
		height: auto;
		display: flex;
		flex-direction: column;

		::v-deep .uicon-true {
			visibility: hidden;
		}

		&::before {
			//页面上半部分的背景颜色
			content: "";
			position: absolute;
			top: 0rpx;
			width: 100%;
			background: linear-gradient(180deg, #50d576 0%, rgba(72, 195, 104, 0) 100%);
			height: 450rpx;
			z-index: -1;
		}

		&::after {
			//页面下半部分的颜色
			content: "";
			position: absolute;
			top: 460rpx;
			width: 100%;
			background-color: #F3F4F5;
			height: calc(100% + 300rpx);
			z-index: -1;
		}

		.u-nav-slot {
			.location-search {
				display: flex;
				flex-direction: row;
				place-items: center;
				width: 100%;

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
						// position: absolute;
						// left: 60rpx;
						// top: 0rpx;

						image {
							height: 100%;
							width: 100%;
							display: block;
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

		}

		.mid-box {
			margin-top: 80rpx;
			// margin-bottom: 20rpx;  //距离底部的距离
			padding: 20rpx 20rpx;
			position: relative;

			.feature-box {
				margin-top: 100rpx;

				.swiper-1 {
					width: 702rpx;
					height: 376rpx;
					background: #FFFFFF;
					border-radius: 16rpx;
					border: 1px solid #FFFFFF;

					::v-deep .u-grid-item {
						height: 160rpx;
						width: 140rpx;

						&>image {
							height: 84rpx;
							width: 84rpx;
							margin-bottom: 10rpx;
						}

						&>.grid-text {
							font-size: 24rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #333333;
							line-height: 34rpx;
						}
					}

					.grid-item-1 {
						height: 160rpx;
						width: 140rpx;




					}
				}
			}

			.shop-card-area {
				height: auto;
				margin-top: 20rpx;
				display: flex;
				flex-direction: row;
				flex-wrap: wrap;
				gap: 20rpx;
			}
		}
	}
</style>