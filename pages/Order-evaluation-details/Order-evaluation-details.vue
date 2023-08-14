<template>
	<view class="container">
		<u-navbar title="订单详情" bgColor="#ffffff">
			<view class="u-nav-slot" slot="right">
				<view class="btn">
					<text>
						提交评价
					</text>
				</view>
			</view>
		</u-navbar>
		<view class="content-box">
			<view class="part1">
				<view class="combo-item">
					<view class="left">
						<image src="@/static/foodList/foodItem1.png">
						</image>
						<view class="info">
							<text>
								2-3人超值烤鱼套餐
							</text>
							<text>
								周一至周五 免预约
							</text>
							<text>
								随时退 过期自动退
							</text>
							<text>
								¥129.00
							</text>
						</view>
					</view>
					<view class="right">
						<image src="@/static/greyRight.png">
						</image>
					</view>
				</view>
			</view>
			<view class="part2">
				<view class="title">
					<text>
						评价详情
					</text>
				</view>
				<view class="divi">
				</view>
				<view class="rate-item">
					<view class="left">
						<text style="color:#333333">
							整体评分
						</text>
					</view>
					<view class="rate-com">
						<u-rate :count="5" v-model="list[0]" gutter="15" size="30" activeColor="#69DB38"
							inactiveColor="#C6C6C6" :allowHalf="true"></u-rate>
					</view>
					<view class="value">
						<text>
							{{list[0].toFixed(1)}}
						</text>
					</view>
				</view>
				<view class="rate-item">
					<view class="left">
						<text>
							口味
						</text>
					</view>
					<view class="right">
						<u-rate :count="5" v-model="list[1]" gutter="15" size="30" activeColor="#69DB38"
							inactiveColor="#C6C6C6" :allowHalf="true"></u-rate>
					</view>
					<view class="value">
						<text>
							{{list[1].toFixed(1)}}
						</text>
					</view>
				</view>
				<view class="rate-item">
					<view class="left">
						<text>
							服务
						</text>
					</view>
					<view class="right">
						<u-rate :count="5" v-model="list[2]" gutter="15" size="30" activeColor="#69DB38"
							inactiveColor="#C6C6C6" :allowHalf="true"></u-rate>
					</view>
					<view class="value">
						<text>
							{{list[2].toFixed(1)}}
						</text>
					</view>
				</view>
				<view class="rate-item">
					<view class="left">
						<text>
							性价比
						</text>
					</view>
					<view class="right">
						<u-rate :count="5" v-model="list[3]" gutter="15" size="30" activeColor="#69DB38"
							inactiveColor="#C6C6C6" :allowHalf="true"></u-rate>
					</view>
					<view class="value">
						<text>
							{{list[3].toFixed(1)}}
						</text>
					</view>
				</view>
				<view class="rate-item">
					<view class="left">
						<text>
							环境
						</text>
					</view>
					<view class="right">
						<u-rate :count="5" v-model="list[4]" gutter="15" size="30" activeColor="#69DB38"
							inactiveColor="#C6C6C6" :allowHalf="true"></u-rate>
					</view>
					<view class="value">
						<text>
							{{list[4].toFixed(1)}}
						</text>
					</view>
				</view>
				<view class="input-info">
					<textarea placeholder="输入您的用餐感受" placeholder-class="placeholder-class"
						:value="orderComment">  </textarea>
				</view>
				<view class="comment-image">
					<image src="@/static/imageUplond.png"></image>
					<text>上传图片</text>
				</view>
				<view class="divi">
				</view>
				<view class="aver-price"> 
					<text>
						人均价格
					</text>
					<input placeholder="¥ 输入消费金额"/>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [5, 5, 5, 5, 5],
				orderComment: ''
			}
		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	.container {
		@include full-screen-color;
		overflow-y: auto;
		background: #f3f4f5;

		.u-nav-slot {
			.btn {
				background: linear-gradient(132deg, #69DB38 0%, #48C368 100%);
				border-radius: 27rpx;
				padding: 0 22rpx;
				padding-bottom: 8rpx;

				text {
					@include fontStyle(24rpx, 500, #FFFFFf, 34rpx);
				}
			}
		}

		.content-box {
			position: relative;
			top: 140rpx;
			padding: 24rpx 24rpx;
			padding-bottom: 200rpx;
			@include flexY;
			gap: 20rpx 0;

			@mixin part {
				width: 100%;
				background: #FFFFFF;
				border-radius: 16rpx;
				padding: 24rpx;
				box-sizing: border-box;
			}

			.part1 {
				@include part;

				.combo-item {
					@include flexX;
					justify-content: space-between;

					.left {
						@include flexX;
						place-items: flex-start;
						gap: 0 20rpx;

						image {
							width: 160rpx;
							height: 160rpx;
							flex-shrink: 0;
						}

						.info {
							@include flexY;
							gap: 10rpx 0;

							text {
								display: block;
								@include fontStyle(24rpx, 400, #666666, 34rpx);

								&:nth-child(1) {
									font-size: 28rpx;
									color: #333333
								}

								&:nth-child(4) {
									font-size: 32rpx;
									color: #333333;
								}
							}
						}
					}

					.right {
						image {
							width: 22rpx;
							height: 22rpx;
						}
					}
				}
			}



			.part2 {
				@include part;

				.title {
					text {
						@include fontStyle(28rpx, 400, #333333, 40rpx);
					}
				}

				.divi {
					height: 1rpx;
					background: #EBEBEB;
					margin: 18rpx 0;
				}

				.rate-item {
					@include flexX;
					justify-content: flex-start;
					place-items: center;
					gap: 0 12rpx;
					margin-bottom: 36rpx;

					.left {
						width: 112rpx;

						text {
							@include fontStyle(28rpx, 400, #666666, 40rpx);
						}
					}

					.rate-com {}

					.value {
						justify-self: flex-end;

						text {
							@include fontStyle(32rpx, 500, #999999, 44rpx);
						}
					}

					&:first-of-type {
						.left {
							width: 112rpx;

							text {
								@include fontStyle(28rpx, 500, #333333, 40rpx);
							}
						}
					}
				}

				.input-info {
					height: 200rpx;
					border-radius: 8rpx;
					border: 2rpx solid #EEEEEE;

					textarea {
						width: 100%;
						height: 100%;
					}

					/deep/.placeholder-class {
						@include fontStyle(28rpx, 500, #C6C6C6, 40rpx);
					}
				}

				.comment-image {
					width: 160rpx;
					height: 160rpx;
					background: #F2F3F4;
					border-radius: 8rpx;
					@include flexY;
					place-items: center;
					justify-content: center;
					margin-top:24rpx;
					image{
						display: block;
						width:60rpx;
						height:60rpx;
					}
					text{
						display: block;
						@include fontStyle(24rpx,400,#939393,34rpx);
					}
				}
				.aver-price{
					@include flexX;
					gap:0 20rpx;
					place-items:center;
				}
			}
		}
	}
</style>