<template>
	<view>
		<view class="list-area">
			<view class="item" v-for="item in 4" :key="item" @tap="goTo('combo-detail')">
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
						<view class='sales'>
							<text>
								月售789
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
						<view class="distance">
							<view class="icon">
								<image src="@/static/location.png">

								</image>
							</view>
							<view class="num">
								<text>
									120m
								</text>
							</view>
						</view>
					</view>
					<view class="u-gap">

					</view>
					<view class="discount-list">
						<view class="discount-list-item" v-for="item in 3 " :key="item">
							<view class='tag'>
								<text>
									惠
								</text>
							</view>
							<view class="price">
								<text>¥555.9</text>
							</view>
							<view class="originPrice">
								<text>¥435.9</text>
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
	export default {
		name: "food-list-item",
		data() {
			return {
				rateValue: 0,
			}
		},
		methods:{
			goTo(str){
				if(str=='combo-detail'){
					uni.navigateTo({
						url:'/pages/store-details/store-details'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.list-area {
		@include __hw100();
		@include __padding();
		margin-top: 180rpx;
		@media (max-height:800px) {
			margin-top: 220rpx;
		}
		@media (min-height:800px) {
			margin-top: 220rpx;
		}
		@media (min-height:912px) {
			margin-top: 180rpx;
		}
		@media (min-height:932px) {
			margin-top: 180rpx;
		}

		.item {
			@include __padding();
			@include flexX();
			margin-top: 30rpx;
			background: #FFFFFF;
			border-radius: 16rpx;
			width: 670rpx;
			height: 348rpx;
			position: relative;


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
					width: 280px;
					@include fontStyle(32rpx, 500, #333333, 44rpx);
					@include textHidden();

				}

				.rate-price-sales {
					@include flexX();
					@include fontStyle(28rpx, 400, #666666, 34rpx);
					gap: 20rpx;
					margin-top: 20rpx;

					.rate {
						color: #48C368;
						@include flexX();
					}

					.sales {
						position: absolute; //相对于.right定位,最近的relative定位
						right: 20rpx;
						@include textHidden();

						text {
							@include fontStyle(24rpx, 400, #666666, 34rpx);
						}
					}
				}

				.tag {
					margin: 20rpx 0;
					@include flexX();
					@include fontStyle(24rpx, 400, #666666, 34rpx);
					flex-wrap: nowrap;
					gap: 20rpx;

					.distance {
						position: absolute;
						right: 20rpx;
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
				}

				.u-gap {
					width: 100%;
					height: 1rpx;
					background: #EBEBEB;
				}

				.discount-list {
					margin-top: 10rpx;

					.discount-list-item {
						@include flexX;
						place-items: center;
						gap: 10rpx;

						.tag {
							background: #FEF8E8;
							border-radius: 8rpx;
							@include textHidden();

							text {
								@include fontStyle(22rpx, 500, #FDAC03, 22rpx);
							}
						}

						.price {
							width: 100rpx;
							@include textHidden();

							text {
								@include fontStyle(28rpx, 500, #FF7A00, 28rpx);
							}
						}

						.originPrice {
							@include textHidden();
							width: 100rpx;
							
							text {
								@include fontStyle(22rpx, 500, #999999, 22rpx);
								text-decoration: line-through;
								text-decoration-color: #999999;
							}
						}

						.info {
							@include textHidden();
							width: 260rpx;

							text {
								@include fontStyle(24rpx, 400, #333333, 24rpx);

							}
						}
					}
				}
			}
		}
	}
</style>