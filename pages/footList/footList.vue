<template>
	<view class="container">
		<uni-nav-bar background-color="#ffffff" ;></uni-nav-bar>
		<view class="diyNavbar">
			<view class="location-search">
				<view class="image-box">
					<image src="@/static/back.png">
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
		<view class="list-area">
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
			return {}
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
	.container {
		width: 100%;
		.diyNavbar {
			margin-top: 80rpx;
			position: fixed;
			padding: 0 20rpx;
			height: 200rpx;
			background: #FFFFFF;

			.location-search {
				display: flex;
				flex-direction: row;

				.image-box {
					height: 40rpx;
					width: 40rpx;
					position: relative;
					top: 20rpx;

					image {
						height: 100%;
						width: 100%;
					}
				}

				.search {
					display: flex;
					flex-direction: row;
					place-items: center;
					width: 600rpx;
					height: 72rpx;
					background: #FFFFFF;
					border-radius: 36rpx;
					border: 1px solid #35984E;
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

			.filter-area {
				width: 100%;
				display: flex;
				flex-direction: row;
				justify-content: center;
				gap: 100rpx;
				margin-top: 40rpx;

				.item {
					position: relative;
					display: flex;

					.box {
						width: 20rpx;
						height: 20rpx;

						image {
							width: 100%;
							height: 100%
						}

						// margin-left:2rpx;
					}

					.title {
						overflow: hidden;
						text-overflow: ellipsis;

						text {
							font-size: 28rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #333333;
							text-overflow: ellipsis;
						}

						flex-shrink: 0;
					}
				}
			}
		}

		.list-area {
			height: 1000rpx;
			background: red;
		}
	}
</style>