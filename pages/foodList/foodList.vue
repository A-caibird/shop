<template>
	<view class="container">
		<u-navbar bgColor="#ffffff" leftIcon="" height="124" :fixed="true">
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

		},
		mounted() {}
	}
</script>
<style lang="scss" scoped>
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
	}
</style>