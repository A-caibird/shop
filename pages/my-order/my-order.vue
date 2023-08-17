<template>
	<view class="container">
		<u-navbar bgColor="#ffffff" leftIcon="" height="54">
			<view class="u-nav-slot" slot="center">
				<view class="back-search" v-if="true">
					<view class="back">
						<view class="icon" @tap="back">
							<image src="@/static/back.png"></image>
						</view>
					</view>
					<view class="search">
						<view class="left">
							<view class="icon">
								<image src="../../static/indexPage/search.png">
								</image>
							</view>
							<view class="input-box">
								<input placeholder="搜索我的订单" placeholder-class="placeholder" class="input_">
							</view>
						</view>

						<view class="btn">
							<button>
								搜索
							</button>
						</view>
					</view>
				</view>
				<view class="scroll-list">
					<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll" scroll-left="0"
						show-scrollbar="false">

						<view class="select-item " :class="{ active: item.selected }" v-for="(item, index) of list"
							:key="index" indicatorBarWidth="60" @tap="select(index)">
							<text>
								{{ item.title }}
							</text>
						</view>

					</scroll-view>
				</view>

			</view>
		</u-navbar>
		<view class="box">
			<view class="item" v-for="(item, index) of 10" :key="item" @tap="goTo(index)">
				<view class="store-state">
					<view class="name">
						<image src="@/static/avatar.png">
						</image>
						<text>
							大叔小子烤鱼
						</text>
					</view>
					<view class="state">
						<text>
							待付款，剩余29:26
						</text>
					</view>
				</view>
				<view class="mid">
					<image src="@/static/foodList/foodItem1.png">
					</image>
					<view class="describe">
						<text>
							2-3人超值烤鱼套餐
						</text>
						<text>
							下单时间：2023.02.17 14:2
						</text>
						<text>
							数量：1
						</text>
						<text>
							需付款：¥129.00
						</text>
					</view>
				</view>



				<view class="button-group">
					<view class="button b1">
						<text>
							付款
						</text>
					</view>
					<view class="button b2">
						<text>
							付款
						</text>
					</view>
					<view class="button b3">
						<text>
							再来一单
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
				list: [{
						title: '全部',
						selected: true
					}, {
						title: '待付款',
						selected: false
					}, {
						title: '待收货',
						selected: false
					}, {
						title: '待使用',
						selected: false
					}, {
						title: '可回收',
						selected: false
					},
					{
						title: '退款/售后',
						selected: false

					}, {
						title: '已过期',
						selected: false
					}, {
						title: '已经变卖',
						selected: false
					}, {
						title: '剩余',
						selected: false
					},
				],
				indicator: false
			}
		},
		methods: {
			select(num) {
				this.list = this.list.map((item, index) => {
					return {
						title: item.title,
						selected: num == index
					}
				})
			},
			left() {
				console.log('left');
			},
			right() {
				console.log('right');
			},
			back() {
				uni.navigateBack();
			},
			goTo(index) {
				switch (index) {
					case 0: {
						uni.navigateTo({
							url: '/pages/order-detail/to-be-used/to-be-used'
						})
						break;
					}
					case 1: {
						uni.navigateTo({
							url: '/pages/order-detail/after-sales-refund/after-sales-refund'
						})
						break;
					}
					case 2: {
						uni.navigateTo({
							url: '/pages/order-detail/pre-payment/pre-payment'
						})
						break;
					}
					case 3: {
						uni.navigateTo({
							url: '/pages/order-detail/toBeReceived/toBeReceived'
						})
						break;
					}
					case 4: {
						uni.navigateTo({
							url: '/pages/order-detail/waiting-for-evaluation/waiting-for-evaluation'
						})
						break;
					}
				}
			}

			,
			scroll() {
				console.log('scroll')
			}
		}
	}
</script>

<style lang="scss" scoped>
	::v-deep .uicon-true {
		visibility: hidden;
	}

	// 解决在小程需端,如果使用letIcon去掉左边的返回符号,但是会显示true,方法使用样式穿透
	.container {
		@include full-screen-color;
		overflow-y: auto;
		background: #f3f4f5;

		.u-nav-slot {
			width: 700rpx;

			.back-search {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				place-items: center;
				width: 100%;

				.back {
					.icon {
						width: 40rpx;
						height: 40rpx;

						image {
							width: 40rpx;
							height: 40rpx;
							position: absolute;
							z-index: 200000;
						}
					}
				}

				.search {
					display: flex;
					place-items: center;
					justify-content: space-between;
					width: 640rpx;
					height: 72rpx;
					background: #FFFFFF;
					border-radius: 36rpx;
					border: 2rpx solid #35984E;
					margin-left: 20rpx;

					.left {
						display: flex;
						place-items: center;
						align-items: center;
						gap: 0 13rpx;

						.icon {
							width: 24rpx;
							height: 24rpx;
							margin-left: 34rpx;
							margin-bottom: 20rpx;

							image {
								height: 100%;
								width: 100%;
							}
						}

						.input-box {
							width: 100%;

							.input_ {
								@include fontStyle(28rpx, 400, #333333, 34rpx)
							}

							.placeholder {
								font-size: 28rpx;
								font-family: PingFangSC-Regular, PingFang SC;
								font-weight: 400;
								color: #999999;
							}
						}
					}

					.btn {
						line-height: 40rpx;
						margin-right: 5rpx;

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
				margin: 0 -24rpx;
				margin-top: 20rpx;
				margin-bottom: -40rpx;
				background-color: #ffffff;

				.scroll-view_H {
					white-space: nowrap;
					width: 100%;
					@include flexX;
					justify-content: center;

					::-webkit-scrollbar {
						display: none;
						width: 0;
						height: 0;
						color: transparent;
						background-color: transparent;
					}

					.select-item {
						display: inline-block;
						margin: 20rpx 20rpx;
						position: relative;
						transform: translateZ(0);

						text {
							@include fontStyle(28rpx, 400, #333333, 40rpx);
							white-space: nowrap;
						}

						&.active {
							text {
								color: #48C368;
							}

							&::after {
								content: "";
								position: absolute;
								width: 40rpx;
								height: 4rpx;
								position: absolute;
								top: 50rpx;
								background: #48C368;
								left: 50%;
								transform: translateX(-50%);
							}
						}
					}
				}
			}
		}



		.box {
			@include flexY;
			gap: 20rpx 0;
			width: 100%;
			padding: 24rpx;
			position: relative;
			top: 230rpx;

			@media (max-height:800px) {
				top: 250rpx;
			}

			@media (min-height:800px) {
				top: 250rpx;
			}

			@media (min-height:912px) {
				top: 210rpx;
			}

			box-sizing: border-box;

			&>.item {
				background: #FFFFFF;
				border-radius: 16rpx;
				padding: 24rpx;
				box-sizing: border-box;

				.store-state {
					@include flexX;
					justify-content: space-between;

					&>.name {
						@include flexX;
						gap: 10rpx;
						place-items: center;

						image {
							display: block;
							width: 40rpx;
							height: 40rpx;
							border-radius: 50%;
						}

						text {
							@include fontStyle(28rpx, 400, #333333, 40rpx);
						}
					}

					.state {
						text {
							@include fontStyle(28rpx, 400, #666666, 40rpx) &:first-child {}
						}
					}
				}


				&>.mid {
					margin: 20rpx 0;
					@include flex;
					gap: 20rpx;
					place-items: flex-start center;

					image {
						display: block;
						width: 160rpx;
						height: 160rpx;
					}

					.describe {
						text {
							display: block;
							@include fontStyle(28rpx, 400, #666666, 40rpx);

							&:nth-child(1) {
								@include fontStyle(32rpx, 500, #333333, 44rpx);
							}
						}
					}
				}

				&>.button-group {
					width: 100%;
					@include flex;
					flex-direction: row-reverse;
					justify-content: flex-start;
					gap: 10rpx;
					margin-top: 4rpx;

					.button {
						border-radius: 36rpx;

						text {
							@include fontStyle(28rpx, 400, #ffffff, 40rpx);
							display: block;
							padding: 16rpx 30rpx;
							box-sizing: border-box;
						}

						&.b1 {
							background: linear-gradient(132deg, #69DB38 0%, #48C368 100%);
							letter-spacing: 2px;
						}

						&.b2 {

							border: 2rpx solid #C6C6C6;
							background: #ffffff;

							text {
								@include fontStyle(28rpx, 400, #333333, 40rpx);

							}
						}

						&.b3 {
							border: 2rpx solid #48C368;
							background: #ffffff;

							text {
								@include fontStyle(28rpx, 400, #48C368, 40rpx);

							}
						}
					}
				}
			}
		}
	}
</style>