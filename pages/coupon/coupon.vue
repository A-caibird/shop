<template>
	<view class="container">
		<u-navbar height="68" leftIcon="">
			<view class="u-nav-slot" slot="center">
				<view class="back" @tap="back">
					<image src="@/static/back.png">
					</image>
				</view>
				<view class="title">
					<text>
						优惠券
					</text>
				</view>
				<view class="selection">
					<view class="selectNav" :class="{active:selected[0]}" @tap="select(0)">
						<text>
							平台优惠券
						</text>
					</view>
					<view class="selectNav" :class="{active:selected[1]}" @tap="select(1)">
						<text>
							店铺优惠券
						</text>
					</view>
				</view>
			</view>
		</u-navbar>
		<template v-if="selected[0]">
			<view class="list1">
				<list-item1 v-for="item of 10" :key="item"></list-item1>
			</view>
		</template>
		<template v-else>
			<view class="list2">
				<view class="item" v-for="item of 4" :key="item">
					<view class="store">
						<view class="image-box">
							<image src="@/static/avatar.png">
							</image>
						</view>

						<text>
							赛吉-泰式按摩（天一广场店）
						</text>
					</view>
					<list-item1 v-for="item of 2" :key="item"></list-item1>
				</view>

			</view>
		</template>
	</view>
</template>

<script>
	import listItem1 from "@/components/coupon-list/coupon-list-item1.vue"
	export default {
		components: {
			listItem1
		},
		data() {
			return {
				selected: [true, false]
			}
		},
		methods: {
			select(num) {
				this.selected = this.selected.map(function(item, index) {
					return index == num;
				});
			},
			back() {
				uni.navigateBack();
			},
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
		background: #f3f4f5;
		overflow-y: auto;
		padding: 24rpx 24rpx;
		position: relative;

		.u-nav-slot {
			width: 100%;
			padding: 22rpx 24rpx;
			@include flexY;
			position: relative;

			.back {
				position: absolute;
				left: 22rpx;
				top: 24rpx;

				image {
					width: 40rpx;
					height: 40rpx;
				}
			}

			.title {
				align-self: center;
				margin-bottom: 40rpx;

				text {
					@include fontStyle(32rpx, 500, #333333, 44rpx);
				}
			}

			.selection {
				width: 100%;
				margin-bottom: 10rpx;
				box-sizing: border-box;
				@include flexX;
				justify-content: space-between;
				background: #ffffff;

				.selectNav {
					position: relative;
					transform: translateZ(0);
					background: #ffffff;
					&:first-of-type{
						margin-left:94rpx;
						}
					&:last-of-type{
						margin-right:94rpx;
					}
					
					text {
						@include fontStyle(28rpx, 400, #333333, 40rpx);
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
							top: 45rpx;
							left: 50%;
							background: #48C368;
							transform: translateX(-50%);
						}
					}
				}
			}
		}


		.list1 {
			width: 100%;
			position: relative;
			top: 190rpx;
			@media (max-height:800px) {
				top: 220rpx;
			}
			@media (min-height:800px) {
				top: 220rpx;
			}
			@media (min-height:912px) {
				top: 190rpx;
			}
			@media (min-height:932px) {
				top: 190rpx;
			}
			@include flexY;
			gap: 20rpx 0;
			padding-bottom: 30rpx;
		}

		.list2 {
			width: 100%;
			position: relative;
			top: 250rpx;
			@include flexY;
			gap: 30rpx 0;
			padding-bottom: 30rpx;

			.item {
				@include flexY;
				gap: 20rpx 0;

				.store {
					@include flexX;
					gap: 0 10rpx;
					place-items: center;

					.image-box {
						border-radius: 50%;
						width: 40rpx;
						height: 40rpx;

						image {
							@include __hw100;
						}
					}

					text {
						display: block;
						@include fontStyle(24rpx, 400, #5C5C5C, 34rpx);
					}
				}
			}
		}
	}
</style>