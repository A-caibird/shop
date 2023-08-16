<template>
	<view class="container">
		<u-navbar bgColor="#ffffff" leftIcon="" height="80" :fixed="true">
			<view class="u-nav-slot" slot="center">
				<view class="nav-search">
					<view class="box" @tap="back">
						<image src="../../static/back.png">
						</image>
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
				<view class="filter-area">
					<view class="item">
						<view class="title">
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
						<view class="title">
							<text>智能排序</text>
						</view>
						<view class="box">
							<image src="@/static/downSelect.png">
							</image>
						</view>
					</view>
					<view class="item">
						<view class="title">
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
		<foot-list-item></foot-list-item>
	</view>
</template>
<script>
	import footListItem from "../../components/food-list-item.vue"
	export default {
		components: {
			footListItem
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
			back() {
				uni.navigateBack();
			}

		},
		mounted() {}
	}
</script>
<style lang="scss" scoped>
	::v-deep .uicon-true {
		visibility: hidden;
	}

	// 解决在小程需端,如果使用letIcon去掉左边的返回符号,但是会显示true,方法使用样式穿透
	.container {
		@include __hw100();
		background: #F3F4F5;

		.u-nav-slot {
			margin-top: 40rpx;

			.nav-search {
				@include flexX;
				place-items: center;
				@include __hw100();

				.box {
					width: 40rpx;
					height: 40rpx;
					// 微信小程序点击事件失效,可能是😏元素挡住了
					// #ifdef MP-WEIXIN
					z-index: 200;

					// #endif 
					image {
						@include __hw100;
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
					border: 1rpx solid #35984E;
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

			.filter-area {
				@include flexX;
				place-items: center;
				gap: 90rpx;
				margin-top: 30rpx;
				margin-bottom: 30rpx;
				background: #FFFFFF;

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
	}
</style>