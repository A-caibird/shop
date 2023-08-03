<template>
	<view class="container">
		<u-navbar bgColor="#f3f4f5" leftIcon="" height="54">
			<view class="u-nav-slot-center" slot="center">
				<text>
					购物车
				</text>
				<text>
					(3)
				</text>
			</view>
			<view class="u-nav-slot-right" slot="right">
				<text>
					管理
				</text>
			</view>
		</u-navbar>


		<view class="list">
			<view class="item">
				<left-tag name="美食"></left-tag>
				<view class="divi">
				</view>
				<view class="store" v-for="(item,index) in storeList" :key="index">
					<u-checkbox-group placement="column" v-model="item.select" @change="checkboxChange">

						<view class="store-name">
							<view class="select">
								<u-checkbox shape="circle" activeColor="#48C368" :name="item.storeName">
								</u-checkbox>
							</view>
							<view class="name">
								<text>{{item.storeName}}</text>
							</view>
							<view class="icon">
								<image src="@/static/toRight.png">
								</image>
							</view>
						</view>
						<view class="order" v-for="(item1,index1) of item.comboList" :key="index1">
							<view class="select">
								<u-checkbox shape="circle" activeColor="#48C368" :name="item1.comboName">
								</u-checkbox>

							</view>
							<view class="food-photo">
								<image src="@/static/shopCar/food1.png">

								</image>
							</view>
							<view class="combo-info">
								<view class="combo-name">
									<text>
										{{item1.comboName}}
									</text>
								</view>
								<view class="time">
									<text>
										周一至周五
									</text>
									<text>
										免预约
									</text>
								</view>
								<view class="price">
									<text>
										¥125.9
									</text>
									<text>
										¥179
									</text>
								</view>
							</view>
							<view class="num">
								<text>
									×1
								</text>
							</view>
						</view>
					</u-checkbox-group>
				</view>
				<view class="divi dis">
				</view>
				<view class="footer">

					<view class="part1">
						<view class="oneSelect">
							<u-checkbox-group>
								<u-checkbox shape="circle" activeColor="#48C368">
								</u-checkbox>
							</u-checkbox-group>
						</view>
						<view class="oneSelectBotton">
							<text>
								全选
							</text>
						</view>
					</view>
					<view class="part2">
						<view class="select-info">
							<view class="select">
								<text>
									已选2件,
								</text>
								<text>
									合计:
								</text>
								<text>
									¥134.9
								</text>
							</view>
							<view class="favorable">
								<view class="reduce">
									<text>
										共减¥10
									</text>
								</view>
								<view class="detail" @tap="popShow=true">
									<text>
										明细
									</text>
									<image src="@/static/shopCar/yellowDown.png">
									</image>
								</view>
								<pop v-model:show="popShow"></pop>
							</view>
						</view>
						<view class="button">
							<text>
								立即结算
							</text>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
	</view>
</template>

<script>
	import leftTag from "@/components/left-tag.vue";
	import pop from "@/components/shopCar/pop.vue";
	export default {
		components: {
			leftTag,
			pop
		},
		data() {
			return {
				select1: [],
				storeList: [{
					storeName: '大叔小子烤鱼',
					select: [],
					comboList: [{
							comboName: "2-3人超值烤鱼套餐",

						},
						{
							comboName: "小酥肉"
						}
					]
				}],
				popShow: false,

			}
		},
		methods: {
			checkboxChange: function(n) {
				console.log('change', n);
				const fir = n[0];
				for (let [index, i] of this.storeList.entries()) {

					console.log(i.storeName, fir)
					if (i.storeName === fir) {
						let temp = [fir];
						for (let i of this.storeList[index].comboList) {
							temp.push(i.comboName)
						}
						this.storeList[index].select = temp;
						console.log(this.storeList[index].select);
					} else {
						console.log(0)
					}
				}
				this.storeList[0].select.push('大叔小子烤鱼')
			},
			close() {
				this.popShow = false;
				this.$emit('change', this.display);
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		@include full-screen-color;
		background: #f3f4f5;

		.u-nav-slot-center {
			text {
				@include fontStyle(36rpx, 500, #333333, 36rpx) &:nth-child(2) {
					font-size: 28rpx;
					margin-left: 20rpx;
				}
			}
		}

		.u-nav-slot-right {
			text {
				@include fontStyle(28rpx, #666666, 400, 40rpx);
				color: #666666;
			}
		}

		&>.list {
			position: relative;
			top: 152rpx;
			margin: 24rpx 24rpx;

			&>.item {
				background-color: #ffffff;
				width: 100%;
				// height: 688rpx;
				background: #FFFFFF;
				border-radius: 16rpx;
				padding: 24rpx;
				box-sizing: border-box;

				.divi {
					margin: 16rpx 0rpx;
					width: 100%;
					height: 1rpx;
					background: #EBEBEB;

					&.dis {
						margin-top: 30rpx;
						margin-bottom: 30rpx;
					}
				}

				.store {
					.store-name {

						@include flexX;
						justify-items: center;
						align-items: center;

						&>.select {}

						&>.name {
							text {
								@include fontStyle(28rpx, 400, #333333, 40rpx);
							}
						}

						.icon {
							margin-left: 10rpx;

							image {
								width: 16rpx;
								height: 16rpx;
							}
						}
					}

					.order {
						margin-top: 32rpx;
						width: 100%;
						@include flexX;
						justify-content: flex-start;
						align-items: center;
						gap: 10rpx;
						// background: red;
						position: relative;

						&>.select {}

						.food-photo {
							position: relative;


							image {
								width: 160rpx;
								height: 160rpx;
							}
						}

						.combo-info {
							&>.combo-name {
								text {
									@include fontStyle(28rpx, 400, #333333, 40rpx);
								}
							}

							&>.time {
								text {
									@include fontStyle(24rpx, 400, #666666, 34rpx);
									color: #666666;

									&:nth-child(1) {
										margin-right: 10rpx;
									}
								}

							}

							&>.price {
								text {

									&:first-child {
										@include fontStyle(36rpx, 600, #FF7A00, 50rpx);
										color: #FF7A00;
										margin-right: 10rpx;
									}

									&:last-child {
										@include fontStyle(22rpx, 400, #999999, 32rpx);
										color: #999999;
										text-decoration: line-through;
									}
								}
							}
						}

						.num {
							background: #FFFFFF;
							border-radius: 8rpx;
							border: 1rpx solid #E2E2E2;

							text {
								@include fontStyle(24rpx, 400, #333333, 34rpx);
							}

							position: absolute;
							right:0;

						}
					}




				}

				.footer {
					width: 100%;
					@include flexX;
					place-items: center;
					justify-content: space-between;

					.part1 {
						@include flexX;
						place-items: center;

						.oneSelect {}

						.oneSelectBotton {
							text {
								@include fontStyle(24rpx, 400, #666666, 34rpx);
							}
						}
					}

					.part2 {
						@include flexX;
						place-items: center;
						gap: 10rpx;

						.select-info {
							&>.selecct {
								text {
									&:nth-child(1) {
										@include fontStyle(24rpx, 400, #666666, 34rpx);
										color: #666666;
									}

									&:nth-child(2) {
										@include fontStyle(24rpx, 500, #333333, 34rpx);
										color: #666666;
									}

									&:nth-child(3) {
										@include fontStyle(36rpx, 400, #FF7A00, 34rpx);
										color: #FF7A00;
									}
								}
							}

							&>.favorable {
								@include flexX;
								place-items: center;

								&>.reduce {
									text {
										@include fontStyle(24rpx, 400, #FF7A00, 34rpx);
										color: #FF7A00;
										margin-right: 10rpx;
									}
								}

								&>.detail {
									@include flexX;
									place-items: center;
									@include fontStyle(24rpx, 400, #FF7A00, 34rpx);
									color: #FF7A00;

									image {
										width: 22rpx;
										height: 22rpx;
									}
								}
							}
						}

						&>.button {
							background: linear-gradient(132deg, #69DB38 0%, #48C368 100%);
							border-radius: 36rpx;
							box-sizing: border-box;
							padding: 14rpx 34rpx;

							text {
								@include fontStyle(28rpx, 400, #ffffff, 40rpx);
							}
						}
					}
				}
			}
		}
	}
</style>