<template>
	<view class="container">
		<u-navbar title="订单详情" bgColor="#f3f4f5">
		</u-navbar>
		<view class="content-box">
			<view class="state-info">
				<image src="@/static/order-detail/waiting-for-evaluation.png">
				</image>
				<text>
					待评价  
				</text>
			</view>
			<view class="coupon-code">
				<view class="title">
					<text>
						券码信息
					</text>
				</view>
				<view class="code">
					<text>
						1004 3645 8274
					</text>
					<text>
						已使用
					</text>
				</view>
			</view>
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
				<view class="head">
					<view class="left">
						<view class="store-name">
							<text>
								大叔小子烤鱼（天一广场店）
							</text>
						</view>
						<view class="time">
							<image src="@/static/time.png">
							</image>
							<text>
								营业中
							</text>
							<text>
								10:00-21:00
							</text>
						</view>
						<view class="location">
							<image src="@/static/location.png">
							</image>
							<text>
								距您120米 海曙区药行街152号(城隍庙地铁站D口步行440米)
							</text>
						</view>
					</view>
					<view class="right">
						<image src="@/static/phone.png">
						</image>
						<text>
							联系电话
						</text>
					</view>
				</view>
				<view class="divi">

				</view>
				<view class="foot">
					<text>
						更多适用门店
					</text>
					<image src="@/static/greyRight.png">
					</image>
				</view>
			</view>

			<view class="part3">
				<view class="title">
					<text>
						套餐详情
					</text>
				</view>
				<view class="dishes">
					<view class="item-title">
						<text>
							菜品：
						</text>
					</view>
					<view class="detail">
						<view class="left">
							<text>
								2-3人超值烤鱼套餐
							</text>
						</view>
						<view class="right">
							<text>
								1份
							</text>
							<text>
								¥129
							</text>
						</view>
					</view>
				</view>
				<view class="note">
					<view class="item-title">
						<text>
							备注：
						</text>
					</view>
					<view class="detail">
						<text>
							烤鱼以下口味任选一（1条）：
						</text>
						<text>
							辣（青花椒味、麻辣味、剁椒味、老坛酸菜味、黑椒味、双椒味、辣蕃茄味）
							不辣（酱香味、蒜香味）
						</text>
						<text>
							时蔬拼盘（1份）
						</text>
						<text>
							泡椒鱼皮（1份）
						</text>
						<text>
							无限量米饭、饮料自助（2份）
						</text>
					</view>

				</view>

			</view>
			<view class="part4">
				<view class="title">
					<text>
						温馨提示
					</text>
				</view>

				<view class="validity-period">
					<view class="item-title">
						<text>
							有效期：
						</text>
					</view>
					<view class="describe">
						<text>
							购买后30天有效
						</text>
					</view>
				</view>
				<view class="usage-time">
					<view class="item-title">
						<text>
							使用时间：
						</text>
					</view>
					<view class="describe">
						<text>
							周一至周五
						</text>
						<text>
							10:00-21:00
						</text>
					</view>
				</view>
				<view class="rules-of-use">
					<view class="item-title">
						<text>
							使用规则：
						</text>
					</view>
					<view class="describe">
						<text>
							1、不可使用包间
						</text>
						<text>
							2、本单发票由商家提供，详情请咨询商家
						</text>
						<text>
							3、堂食外带均可
						</text>
					</view>
					<view class="more">
						<view class="title" @tap="tapCollapse" v-if="isCollapse==false">
							<view class="state">
								<text>
									{{displayState}}
								</text>
							</view>
							<view class="image-box">
								<image src="@/static/greyDown.png">
								</image>
							</view>
						</view>
						<view class="more-content" :class="{active:isCollapse}">
							<text>
								4、请在餐前给服务人员出示团购套餐券
							</text>
							<text>
								5、团购用户不可同时享受商家其他优惠
							</text>
							<text>
								6、无需预约，消费高峰期可能需要等位
							</text>
						</view>
						<view class="title" @tap="tapCollapse" v-show="isCollapse==true">
							<view class="state">
								<text>
									{{displayState}}
								</text>
							</view>
							<view class="image-box">
								<image src="@/static/greyUp.png">
								</image>
							</view>
						</view>
					</view>
				</view>
			</view>


			<view class="part5">
				<view class="title">
					<text>
						订单信息
					</text>
				</view>
				<view class="order-number">
					<text>订单号：</text>
					<text>87767546777123440908</text>
					<text>复制</text>
				</view>
				<view class="item">
					<text>
						手机号：
					</text>
					<text>
						135****7650
					</text>
				</view>
				<view class="item">
					<text>
						下单时间：
					</text>
					<text>
						2023.02.10
					</text>
					<text style="margin-left:20rpx">
						14:32
					</text>
				</view>
				<view class="item" >
					<text>
						付款时间：
					</text>
					<text>
						2023.02.10
					</text>
					<text style="margin-left:20rpx">
						14:32
					</text>
				</view>
				<view class="item">
					<text>
						消费时间：
					</text>
					<text>
						2023.02.10
					</text>
					<text style="margin-left:20rpx">
						14:32
					</text>
				</view>
				<view class="item">
					<text>
						数量：
					</text>

					<text>
						1
					</text>
				</view>
				<view class="item">
					<text>
						总价：
					</text>
					<text>
						¥129.00
					</text>

				</view>
				<view class="item">
					<text>
						待付款：
					</text>
					<text>
						¥129.00
					</text>
				</view>
			</view>
		</view>

		<view class="footer">
			<view class="button-group">
				<view class="canlce">
					<text>
						再来一单
					</text>
				</view>
				<view class="pay">
					<text>
						立即评价
					</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isCollapse: false,
			};
		},
		computed: {
			displayState() {
				if (this.isCollapse)
					return '收起';
				else
					return '更多';
			}
		},
		methods: {
			tapCollapse() {
				this.isCollapse = !this.isCollapse;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		@include full-screen-color;
		overflow-y: auto;
		background: #f3f4f5;

		.content-box {
			position: relative;
			top: 140rpx;
			padding: 24rpx 24rpx;
			padding-bottom: 200rpx;
			@include flexY;
			gap: 20rpx 0;

			.state-info {

				@include flexX;
				place-items: center;
				gap: 0 20rpx;
				margin-bottom: 20rpx;

				image {
					width: 56rpx;
					height: 56rpx;
				}

				text {
					@include fontStyle(40rpx, 500, #333333, 56rpx);
				}
			}

			@mixin part {
				width: 100%;
				background: #FFFFFF;
				border-radius: 16rpx;
				padding: 24rpx;
				box-sizing: border-box;
			}

			.coupon-code {
				@include part;

				.title {
					@include fontStyle(40rpx, 500, #333333, 56rpx);
					margin-bottom: 16rpx;
				}

				.code {
					@include flexX;
					justify-content: space-between;

					text {
						&:first-child {
							text-decoration: line-through;
							@include fontStyle(32rpx, 600, #BBBBBB, 44rpx);
						}

						&:last-child {
							;
							@include fontStyle(23rpx, 400, #BBBBBB, 44rpx);
						}
					}
				}
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
				@include flexY;

				.head {
					@include flexX;
					justify-content: space-between;

					.left {
						@include flexY;
						gap: 16rpx 0;

						.store-name {
							@include fontStyle(32rpx, 500, #333333, 44rpx);
						}

						.time {
							@include flex;
							place-items: flex-start center;

							image {
								display: block;
								width: 28rpx;
								height: 28rpx;

							}

							text {
								@include fontStyle(24rpx, 400, #666666, 34rpx);

								&:first-child {
									margin-right: 20rpx;
								}
							}
						}

						.location {
							@include flex;
							place-items: flex-start center;

							image {
								display: block;
								width: 28rpx;
								height: 28rpx;
							}

							text {
								width: 434rpx;

								@include fontStyle(24rpx, 400, #666666, 34rpx);
							}
						}
					}


					&>.right {
						@include flexY;
						align-items: center;
						align-self: center;
						border-left: 1px solid #EBEBEB;
						padding-left: 42rpx;
						box-sizing: border-box;

						text {
							@include fontStyle(24rpx, 400, #333333, 34rpx);
						}

						image {
							width: 64rpx;
							height: 64rpx;
						}
					}
				}


				.divi {
					height: 1rpx;
					background: #EBEBEB;
					width: 100%;
					margin: 20rpx 0;

				}

				.foot {

					align-self: center;

					image {
						width: 24rpx;
						height: 24rpx;
					}
				}
			}


			.part3 {
				width: 100%;
				@include part;
				padding: 24rpx;

				.title {
					text {
						@include fontStyle(32rpx, 500, #333333, 44rpx);
					}

					margin-bottom: 32rpx;
				}

				.item-title {
					text {
						@include fontStyle(28rpx, 500, #999999, 40rpx);
						color: #999999;
					}

					margin-bottom: 22rpx;
				}

				.dishes {
					width: 100%;
					margin-bottom: 32rpx;

					.detail {
						@include flexX;
						justify-content: space-between;

						.left {
							text {
								@include fontStyle(28rpx, 400, #333333, 40rpx);
							}
						}

						.right {
							@include flexX;
							gap: 0 10rpx;

							text {
								@include fontStyle(28rpx, 400, #333333, 40rpx);
							}
						}
					}
				}

				.note {
					.item-title {
						text {
							@include fontStyle(28rpx, 500, #999999, 40rpx);
						}

						margin-bottom: 22rpx;
					}

					text {
						@include fontStyle(28rpx, 400, #333333, 40rpx);
						display: block;

						&:nth-child(2) {
							display: inline;
						}
					}
				}
			}



			.part4 {
				@include part;
				padding: 24rpx;

				.title {
					@include fontStyle(32rpx, 500, #333333, 44rpx);
					margin-bottom: 32rpx;
				}

				@mixin itemTitle {
					text {
						@include fontStyle(28rpx, 400, #999999, 40rpx);
						color: #999999;
					}

					margin-bottom: 12rpx;
				}

				.validity-period {
					margin-bottom: 32rpx;

					&>.item-title {
						@include itemTitle;
					}

					&>.describe {
						@include fontStyle(28rpx, 400, #333333, 40rpx);
					}
				}

				.usage-time {
					margin-bottom: 32rpx;

					&>.item-title {
						@include itemTitle;
					}

					&>.describe {
						@include fontStyle(28rpx, 400, #333333, 40rpx);
						@include flexX;
						gap: 0 10rpx;
					}
				}

				.rules-of-use {

					&>.item-title {
						@include itemTitle;
					}

					&>.describe {
						@include flexY;
						gap: 10rpx;

						text {
							@include fontStyle(28rpx, 400, #333333, 40rpx);
						}
					}

					.more {
						@include flexY;

						.title {
							@include flexX;
							place-items: center;
							align-self: center;
							justify-content: center;
							position: relative;

							.state {
								text {
									@include fontStyle(24rpx, 400, #666666, 34rpx);
								}
							}

							.image-box {
								width: 22rpx;
								height: 22rpx;

								image {
									width: 100%;
									height: 100%;
								}

								position: relative;
								bottom:12rpx;
							}

							&:last-of-type {
								margin-top: 20rpx;
								margin-bottom: 0rpx;
							}

							&:first-of-type {
								margin-top: 20rpx;
								margin-bottom: 0rpx;
							}
						}

						.more-content {
							max-height: 0;
							overflow: hidden;
							// transition: all 0.000025s ease; //添加下拉过渡动画

							text {
								display: block;
								white-space: pre-wrap;
							}

							&.active {
								max-height: 300rpx;
								overflow: auto;
							}
						}
					}
				}

			}

			.part5 {
				@include part;
				padding: 24rpx;
				box-sizing: border-box;

				.title {
					@include fontStyle(32rpx, 500, #333333, 44rpx);
					margin-bottom: 32rpx;

				}

				.order-number {

					text {

						@include fontStyle(28rpx, 400, #333333, 40rpx);

						&:first-child {
							display: inline-block;
							width: 140rpx;
							color: #999999;
						}

						&:nth-child(3) {
							float: right;
							color: #999999;
						}

					}
				}

				&>.item {
					text {

						@include fontStyle(28rpx, 400, #333333, 40rpx);

						&:first-child {
							display: inline-block;
							width: 140rpx;
							color: #999999;
						}
					}
				}
			}
		}

		.footer {
			width: 100%;
			position: fixed;
			bottom: 0;
			z-index: 1;
			padding: 24rpx;
			padding-bottom: 44rpx;
			box-sizing: border-box;
			@include flexX;
			background: #ffffff;
			justify-content: flex-end;
			align-items: center;

			.button-group {
				@include flexX;
				gap: 0 20rpx;
				.canlce {
					padding: 20rpx 42rpx;
					background: #ffffff;
					border-radius: 42rpx;
					border: 2rpx solid #48C368;

					text {
						@include fontStyle(32rpx, 400, #48C368, 44rpx);
					}
				}
				.pay {
					padding: 20rpx 42rpx;
					background: linear-gradient(132deg, #69DB38 0%, #48C368 100%) #F1F2F2;
					border-radius: 42rpx;

					text {
						@include fontStyle(32rpx, 400, #ffffff, 44rpx);
					}
				}
			}
		}

	}
</style>