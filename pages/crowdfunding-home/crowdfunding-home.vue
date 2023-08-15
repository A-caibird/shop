<template>
	<view class="container">
		<u-navbar bgColor="#ffffff" leftIcon="" height="124" :fixed="true">
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
						<view>
							<text>全部众筹</text>
						</view>
						<view class="box">
							<image src="@/static/downSelect.png">

							</image>
						</view>
					</view>
					<view class="item">
						<view class="title">
							<text>最新</text>
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

		<view class="crowdfunding-products-list">
			<view class="crowdfunding-product" v-for="item of 10" :key="item">
				<view class="product-photo">
					<image src="@/static/crowdingProducts/product1.png">

					</image>
				</view>
				<view class="describe">
					<text>
						众筹
					</text>
					<text>
						儿童文具盒大容量可装20+文具
					</text>
				</view>
				<view class="data">
					<view class="already-raised">
						<text>
							已筹
						</text>
						<text>
							¥1.5万
						</text>
					</view>
					<view class="supporter">
						<text>
							支持者
						</text>
						<text>
							417
						</text>
					</view>
				</view>
				<view class="divi">

				</view>
				<view class="tags">
					<view class="tag" v-for="item of 2" :key="item">
						<text>
							儿童文具
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

			}
		},
		methods: {
			back() {
				uni.navigateBack();
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
		@include __hw100();
		background: #F3F4F5;
		@include full-screen-color;

		.u-nav-slot {
			margin-top: 40rpx;

			.nav-search {
				@include flexX;
				place-items: center;
				@include __hw100();

				.box {
					width: 40rpx;
					height: 40rpx;
					//微信小程序点击事件失效,可能是😏元素挡住了
					//#ifdef MP-WEIXIN 
					z-index: 2000000; 
					//#endif 
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
						gap:0 13rpx;
						.icon {
							width: 24rpx;
							height: 24rpx;
							margin-left:34rpx;
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



		.crowdfunding-products-list {
			margin-top: 280rpx;
			padding: 24rpx;
			box-sizing: border-box;
			@include flexX;
			flex-wrap: wrap;
			gap: 16rpx 18rpx;

			.crowdfunding-product {
				background-color: #ffffff;
				@include flexY;
				width: 342rpx;
				border-radius: 16rpx;

				.product-photo {
					width: 342rpx;
					height: 342rpx;

					image {
						@include __hw100;
					}
				}

				.describe {
					margin: 6rpx 16rpx;
					margin-bottom: 0rpx;

					text {
						color: red;

						&:nth-child(1) {
							@include fontStyle(28rpx, #FDAC03, 400, 40rpx);
							color: #FDAC03;
							margin-right: 10rpx;
						}

						&:nth-child(2) {
							@include fontStyle(28rpx, #333333, 400, 40rpx);
							color: #333333;
						}
					}
				}

				.data {
					margin: 0rpx 16rpx;
					margin-top: -4rpx;
					@include flexX;
					justify-content: space-between;

					text {
						@include fontStyle(24rpx, #999999, 400, 34rpx);
						color: #999999;
					}

					.already-raised {
						text {
							&:nth-child(1) {
								margin-right: 10rpx;
							}
						}
					}

					.supporter {
						text {
							&:nth-child(1) {
								margin-right: 10rpx;
							}
						}
					}
				}

				.divi {
					margin: 0rpx 16rpx;
					margin-top: 6rpx;
					margin-bottom: 10rpx;
					width: 310rpx;
					height: 1rpx;
					background: #F1F2F2;
				}

				.tags {
					@include flexX;
					flex-wrap: nowrap;
					justify-content: flex-start;
					gap: 8rpx;
					box-sizing: border-box;
					margin: 0rpx 16rpx;
					margin-bottom: 10rpx;
					overflow-y: auto;
					flex-wrap: wrap;

					.tag {
						display: inline;
						padding: 1rpx 1rpx;
						background: #E9F9EE;
						border-radius: 8rpx;

						text {
							font-size: 22rpx;
							color: #48C368;
						}
					}
				}
			}
		}

	}
</style>