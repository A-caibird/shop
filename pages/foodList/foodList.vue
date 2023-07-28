<template>
	<view class="container">
		<u-navbar bgColor="#ffffff" leftIcon="" height="124">
			<view class="u-nav-slot" slot="center">
				<view class="nav-search">
					<view class="box">
						<image src="../../static/back.png">
						</image>
					</view>

					<view class="search">
						<view class="icon">
							<image src="../../static/indexPage/search.png">
							</image>
						</view>
						<view class="input-box">
							<input placeholder="小川菜 川菜馆" placeholder-class="placeholder">
						</view>
						<view class="btn">
							<button>
								搜索
							</button>
						</view>
					</view>
				</view>
				<view class="filter-area">
					<view class="item">
						<view>
							<text>全部美食</text>
						</view>
						<view class="box">
							<image src="@/static/downSelect.png">

							</image>
						</view>
					</view>
					<view class="item">
						<view class="title">
							<text>附近</text>
						</view>
						<view class="box">
							<image src="@/static/downSelect.png">
							</image>
						</view>
					</view>
					<view class="item">
						<view>
							<text>智能排序</text>
						</view>
						<view class="box">
							<image src="@/static/downSelect.png">
							</image>
						</view>
					</view>
					<view class="item">
						<view>
							<text>筛选</text>
						</view>
						<view class="box">
							<image src="@/static/downSelect.png">
							</image>
						</view>
					</view>
				</view>
			</view>
		</u-navbar>
		<view class="list-area" v-if="true">
			<view class="item">
				<view class='sales'>
					<text>
						月售789
					</text>
				</view>
				<view class="distance">
					<view class="icon">
						<image src="../../static/location.png">

						</image>
					</view>
					<view class="num">
						<text>
							120m
						</text>
					</view>
				</view>
				<view class="left">
					<view class="image-box">
						<image src="@/static/foodList/foodItem1.png">
						</image>
					</view>
				</view>
				<view class="right">
					<view class="title">
						<text>
							大叔小子烤鱼（天一广场店）
						</text>
					</view>
					<view class="rate-price-sales">
						<view class="rate">
							<u-rate :count="5" v-model="rateValue" active-color="#69DB38"></u-rate>
							<text>
								{{rateValue}}
							</text>
						</view>
						<view class="price">
							<text>
								¥60
							</text>
							<text>
								/
							</text>
							<text>
								人
							</text>
						</view>
					</view>
					<view class="tag">
						<view class="kinds">
							<text>
								烤鱼
							</text>
						</view>
						<view class="location-text">
							<text>
								天一广场
							</text>
						</view>

					</view>
					<view class="u-gap">
						<u-gap height="2" bgColor="#EBEBEB"></u-gap>
					</view>
					<view class="discount-list">
						<view class="item" v-for="item in 1" :key="item">
							<view class='tag'>
								<text>
									惠
								</text>
							</view>
							<view class="price">
								<text>¥15.9</text>
							</view>
							<view class="originPrice">
								<text>¥75.9</text>
							</view>
							<view class="info">
								<text>
									2-3人超值烤鱼套餐
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
	import footerBottom from "@/components/indexPage/footer.vue"
	import functionOption from "@/components/indexPage/functionOption.vue"
	export default {
		components: {
			functionOption,
			footerBottom,
		},
		data() {
			return {
				rateValue: 0,
			}
		},
		methods: {
			left() {
				console.log('left');
			},
			right() {
				console.log('right');
			},

		},
		mounted() {}
	}
</script>
<style lang="scss">
	@mixin __margin {
		margin: 20rpx 20rpx;
	}

	@mixin __padding {
		padding: 20rpx 20rpx;
	}

	@mixin flexY {
		display: flex;
		flex-direction: column;
		// justify-content: space-between;
		// justify-items: ;
		// justify-self: ;
		// place-item:center;
	}

	@mixin flexX {
		display: flex;
		flex-direction: row;
		// justify-content: space-between;
		// justify-items: ;
		// justify-self: ; //子元素
		// place-item:center;
	}

	@mixin fontStyle($size, $weight, $color, $height) {
		font-size: $size;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: $weight;
		color: $color;
		line-height: $height;
	}

	@mixin __hw100 {
		height: 100%;
		width: 100%;
	}

	@mixin textHidden {
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	page{
		background: #F3F4F5;
	}
	.container {
		@include __hw100();
		.u-nav-slot {
			margin-top: 80rpx;
			.nav-search {
				@include flexX;
				place-items: center;
				@include __hw100();
				.box {
					width: 40rpx;
					height: 40rpx;

					image {
						@include __hw100;
					}
				}

				.search {
					@include flexX();
					place-items: center;
					width: 570rpx;
					height: 72rpx;
					background: #FFFFFF;
					border-radius: 36rpx;
					border: 1rpx solid #35984E;
					position: relative;
					margin-left: 80rpx;

					.icon {
						width: 20rpx;
						height: 20rpx;
						position: absolute;
						left: 20rpx;
						top: 15rpx;

						image {
							@include __hw100();
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
							@include fontStyle($size: 28rpx, $weight: 500, $color: #333333, $height: 30rpx);
						}
					}

					.placeholder {
						font-size: 28rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #999999;
						@include fontStyle(28rpx, 500, #999999, $height: 30rpx);
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
							@include fontStyle(28rpx, 500, #FFFFFF, 65rpx);
						}
					}
				}
			}

			.filter-area {
				@include flexX;
				place-items: center;
				gap: 90rpx;
				margin-top: 30rpx;
				margin-bottom: 30rpx;
				.item {
					position: relative;
					@include flexX;
					.box {
						width: 20rpx;
						height: 20rpx;

						image {
							@include __hw100();
						}
						position:relative;
						left:3rpx;
					}

					.title {
						overflow: hidden;
						text-overflow: ellipsis;
						text {
							font-size: 28rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #333333;
							@include fontStyle(28rpx, 400, #333333, 28rpx);
							text-overflow: ellipsis;
							white-space: nowrap;
						}
					}
				}
			}
		}

		.list-area {
			@include __hw100();
			@include __padding();
			height: 1000rpx;
			margin-top: 270rpx;

			.item {
				@include __padding();
				@include flexX();
				margin-top: 20rpx;
				background: #FFFFFF;
				border-radius: 16rpx;
				width: 670rpx;
				height: 348rpx;
				position: relative;

				.sales {
					position: absolute;
					right: 20rpx;
					top: 75rpx;
					@include textHidden();
					text {
						@include fontStyle(24rpx, 400, #666666, 34rpx);
					}
				}

				.distance {
					position: absolute;
					right: 20rpx;
					top: 120rpx;
					@include flexX;
					place-items: center;

					.icon {
						height: 28rpx;
						width: 28rpx;

						image {
							@include __hw100();
						}
					}

					.num {
						@include textHidden();
						text {
							@include fontStyle(24rpx, 400, #666666, 34rpx);
						}
					}
				}

				.left {
					.image-box {
						height: 175rpx;
						width: 160rpx;

						image {
							@include __hw100();
						}

						margin-right:20rpx;
					}
				}

				.right {

					.title {
						@include fontStyle(32rpx, 500, #333333, 44rpx);
						@include textHidden();
					}

					.rate-price-sales {
						@include flexX();
						@include fontStyle(28rpx, 400, #666666, 34rpx);
						gap: 20rpx;
						margin-top: 20rpx;
						position: relative;
						right: 6rpx;

						.rate {
							color: #48C368;
							@include flexX();
						}
					}

					.tag {
						margin: 20rpx 0;
						@include flexX();
						@include fontStyle(24rpx, 400, #666666, 34rpx);
						flex-wrap: nowrap;
						gap: 20rpx;
					}

					.discount-list {
						.item {
							@include flexX;
							place-items: center;
							position: relative;
							right: 25rpx;
							gap: 20rpx;

							.tag {
								background: #FEF8E8;
								border-radius: 8rpx;

								text {
									@include fontStyle(22rpx, 500, #FDAC03, 32rpx);
								}
							}

							.price {
								text {
									@include fontStyle(28rpx, 500, #FF7A00, 28rpx);
								}
							}

							.originPrice {
								text-decoration: line-through;
								text-decoration-color: #999999;

								text {
									@include fontStyle(22rpx, 500, #999999, 22rpx);
								}
							}

							.info {
								text {
									@include fontStyle(24rpx, 500, #333333, 32rpx);
								}
							}
						}
					}
				}
			}
		}
	}
</style>