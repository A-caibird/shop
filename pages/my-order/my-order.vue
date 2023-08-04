<template>
	<view class="container">
		<u-navbar bgColor="#ffffff" leftIcon="" height="124">
			<view class="u-nav-slot" slot="center">
				<view class="back-search" v-if="true">
					<view class="back">
						<view class="icon">
							<image src="@/static/back.png"></image>
						</view>
					</view>
					<view class="search">
						<view class="icon">
							<image src="../../static/indexPage/search.png">
							</image>
						</view>
						<view class="input-box">
							<input placeholder="搜索我的订单" placeholder-class="placeholder">
						</view>
						<view class="btn">
							<button>
								搜索
							</button>
						</view>
					</view>
				</view>
				<view class="scroll-list">
					<u-scroll-list :indicator="indicator" @right="right" @left="left">
						<view class="select">
							<view class="select-item " :class="{active:item.selected}" v-for="(item,index) of list"
								:key="index" indicatorBarWidth="60" @tap="select(index)">
								<text>
									{{item.title}}
								</text>
							</view>
						</view>
					</u-scroll-list>
				</view>
			</view>
		</u-navbar>
		<view class="box">
			<view class="item" v-for="item of 10" :key="item">
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
			}
		}
	}
</script>

<style lang="scss" scoped>
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
							height: 100%;
							width: 100%;
						}
					}
				}

				.search {
					display: flex;
					flex-direction: row;
					place-items: center;
					width: 640rpx;
					height: 72rpx;
					background: #FFFFFF;
					border-radius: 36rpx;
					border: 1rpx solid #35984E;
					position: relative;
					margin-left: 20rpx;
					flex-grow: 2;

					.icon {
						width: 22rpx;
						height: 24rpx;
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
				margin-top: 20rpx;
				margin-bottom: -40rpx;

				.select {
					@include flexX;
					justify-content: center;

					.select-item {

						margin: 20rpx 20rpx;
						position: relative;

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
								left: 50%;
								transform: translateX(-50%);
								background: #48C368;
								// transform: translateZ(0);
							}
						}
					}
				}
			}
		}



		.box {
			@include flexY;
			gap:20rpx 0;
			width: 100%;
			padding: 24rpx;
			position: relative;
			top: 280rpx;
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
						padding: 16rpx 56rpx;

						border-radius: 36rpx;
						box-sizing: border-box;

						text {
							@include fontStyle(28rpx, 400, #ffffff, 40rpx);

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