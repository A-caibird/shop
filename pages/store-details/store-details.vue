<template>
	<view class="container">
		<view class="navbar">
			<view class="u-nav-slot-left" slot="left">
				<view class="image-box" @tap="back">
					<image src="/static/store-details/back2.png">
					</image>
				</view>
			</view>
			<view class="u-nav-slot-right" slot="right">
				<view class="image-box">
					<image src="/static/store-details/star.png">
					</image>
					<image src="/static/store-details/share.png">
					</image>
				</view>
			</view>
		</view>
		<view class="nav-background">
			<view class="image-box">
				<image src="/static/foodList/foodItem1.png">
				</image>
			</view>
		</view>
		<view class="box">
			<view class="storeInfo">
				<view class="name">
					大叔小子烤鱼（天一广场店）
				</view>
				<view class="rate-price">
					<view class="rate">
						<u-rate :count="5" v-model="value" active-color="#69DB38" gutter="4"></u-rate>

					</view>
					<text>
						{{value.toFixed(1)}}
					</text>
					<text>
						¥60/人
					</text>
				</view>
				<view class="storePhoto">
					<scroll-view class="scroll-list-photo" scroll-x="true" @scroll="scroll" scroll-left="120">
						<image src="/static/store-details/food1.png" v-for="(item,index) of 20" :key="index">
						</image>
					</scroll-view>
					<view class="count">
						<image src="/static/store-details/photoCollet.png">
						</image>
						<text>
							12
						</text>
					</view>
				</view>
				<view class="time">
					<text>
						营业中
					</text>
					<text>
						10:00-21:00
					</text>
				</view>
				<u-gap height="1" bgColor="#EBEBEB"></u-gap>
				<view class="mid-box">
					<view class="left">
						<view class="location">
							<text>
								海曙区药行街152号(城隍庙地铁站D口步行150米)
							</text>
						</view>
						<view class="distance">
							<view class="icon">
								<image src="/static/store-details/position.png">
								</image>
							</view>
							<text>
								距离您120米
							</text>
							<text>
								步行5分钟
							</text>
							<text>
								骑车1分钟
							</text>
						</view>
					</view>
					<view class="right">
						<view class="right-item">
							<view class="image-box">
								<image src="/static/store-details/phone.png">
								</image>
							</view>
							<view>
								<text>
									电话
								</text>
							</view>
						</view>
						<view class="right-item">
							<view class="image-box">
								<image src="/static/store-details/navigation.png">
								</image>
							</view>
							<view>
								<text>
									导航
								</text>
							</view>
						</view>
					</view>
				</view>
				<u-gap height="1" bgColor="#EBEBEB"></u-gap>
				<view class="discount">
					<view class="left">
						<text>
							惠
						</text>
					</view>
					<view class="mid">
						<text>
							领取优惠券后下单更优惠【仅本店可用】
						</text>
					</view>
					<view class="detail" @tap="showCoupon">
						<text>
							详情
						</text>
						<image src="/static/greyRight.png">
						</image>
					</view>
					<view class="action">
						<u-action-sheet :show="show" round="16rpx">
							<view class="pop">
								<view class="image-box" @tap="close">
									<image src="/static/close.png">

									</image>
								</view>
								<view class="title">
									<text>领取优惠券</text>
								</view>
								<view class="coupon-list">
									<view class="item" v-for="item of 3" :key="item">
										<view class="pop-left">
											<text>
												烤鱼优惠券
											</text>
											<text>
												2023.02.15到期
											</text>
										</view>
										<view class="pop-right">
											<text>
												¥10
											</text>
											<text>
												满100可用
											</text>
											<view class="button">
												<text>
													领取
												</text>
											</view>
										</view>
									</view>
								</view>
							</view>
						</u-action-sheet>
					</view>

				</view>
			</view>

			<view class="combo">
				<text>
					优惠套餐(3)
				</text>
			</view>
			<view class="combo-list">
				<view class="combo-list-item" v-for="item of 3" :key="item" @tap="goTo('combon')">
					<view class="image-box">
						<image src="/static/store-details/suRou.png">
						</image>
					</view>
					<view class="text-info">
						<view class="name">
							<text>小酥肉</text>
						</view>
						<view class="time">
							<text>周一至周五</text>
							<text>免预约</text>
						</view>
						<view class="price">
							<text>¥15.9</text>
							<text>¥20</text>
							<text>月售847</text>
						</view>
					</view>
					<view class="button">
						<text>详情</text>
					</view>
				</view>
			</view>
			<view class="comment-title">
				<view class="left">
					<text>
						评价(352)
					</text>
				</view>
				<view class="right">
					<text>
						查看更多
					</text>
					<image src="/static/greyRight.png">
					</image>
				</view>
			</view>

			<view class="comment">
				<view class="head">
					<view class="value">
						<text>{{value2}}</text>
					</view>
					<view class="rate">
						<text>
							整体评分
						</text>
						<view>
							<u-rate :count="5" v-model="value2" size="15" gutter="2" active-color="#69DB38"></u-rate>
						</view>
					</view>
					<view class="divi">
					</view>
					<view class="rateTags">
						<view class="rateTag" v-for="item of 4" :key="item">
							<view class="title">
								<text>口味</text>
							</view>
							<view class="rate">
								<text>4.5</text>
							</view>
						</view>
					</view>
				</view>
				<view class="tags">
					<view class="onetag" v-for="item of 3" :key="item">
						<text>
							晒图评价
						</text>
						<text>
							172
						</text>
					</view>
				</view>

				<view class="first-line">
					<view class="avatar">
						<image src="/static/store-details/avatar.png"></image>
					</view>
					<view class="name-rate">
						<view class="name">
							<text>
								稻盛谁的红包
							</text>
						</view>
						<view class="rate">
							<u-rate :count="5" v-model="value3" active-color="#69DB38" gutter="2"></u-rate>
							<text>
								{{value3.toFixed(1)}}
							</text>
						</view>
					</view>
					<view class="time">
						<text>
							2023/01/31
						</text>
					</view>

				</view>
				<view class="comment-text">
					<text>
						头一回吃他们家的烤鱼 之前经常看到广告 今天特地来试试 味道还行 价格比较实惠 服务员态度也很好
					</text>
				</view>
				<view class="photo-group">
					<image src="/static/store-details/commentPhoto.png" v-for="item of 3" :key="item">
					</image>
				</view>
				<view class="shop-info">
					<view class="tag">
						<text>
							已消费：2-3人超值烤鱼套餐
						</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import pop from '../../components/store-details/pop.vue'
	export default {
		components: {
			pop
		},
		data() {
			return {
				value: 0,
				value2: 0,
				value3: 0,
				title: '标题',
				list: [{
						name: '选项一',
						subname: "选项一描述",
						color: '#ffaa7f',
						fontSize: '20'
					},
					{
						name: '选项二禁用',
						disabled: true
					},
					{
						name: '开启load加载', //开启后文字不显示
						loading: true
					}
				],
				show: false,
			}
		},
		methods: {

			back() {
				uni.navigateBack();
			},
			scroll() {
				console.log('scroll');
			},
			showCoupon() {
				console.log(this.show);
				this.show = true;
			}

			,
			close() {
				this.show = false;
			},
			goTo(str) {

				if ('combon' == str) {
					uni.navigateTo({
						url: '/pages/combo-detail/combo-detail'
					})
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		width: 100%;
		background: #f3f4f5;
		box-sizing: border-box;
		position: absolute;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0; //为了让高度自增加
		overflow-y: auto;
		@include flexY();


		.navbar {
			width: 100%;
			$Ih: 60rpx;
			$Iw: 60rpx;
			@include flexX;
			position: fixed;
			top: 80rpx;
			z-index: 10;
			justify-content: space-between;
			padding: 0rpx 20rpx;
			box-sizing: border-box;

			.u-nav-slot-left {
				&>.image-box {
					width: $Iw;
					height: $Ih;
					index: 200000;

					image {
						@include __hw100();
					}
				}
			}

			.u-nav-slot-right {
				&>.image-box {
					@include flexX;
					gap: 20rpx;

					image {
						width: $Iw;
						height: $Ih;
					}
				}
			}
		}

		.nav-background {
			width: 100%;
			position: fixed;
			top: 0rpx;

			.image-box {
				width: 100%;
				height: 450rpx;
				object-fit: cover; //放大或者缩小填满盒子
				filter: blur(5rpx);

				image {
					width: 100%;
				}
			}
		}

		.box {
			position: relative;
			top: 140rpx;
			z-index: 1;
			padding: 0rpx 20rpx;
			padding-bottom: 50rpx;
			box-sizing: border-box;
			background: transparent;

			.storeInfo {
				width: 100%;
				background-color: #ffffff;
				border-radius: 16rpx;
				box-sizing: border-box;
				margin-top: 20rpx;
				padding: 20rpx 20rpx;

				&>.name {
					@include fontStyle(40rpx, 500, #333333, 40rpx);
					white-space: nowrap;
					margin-bottom: 30rpx;
				}

				&>.rate-price {
					@include flexX();
					place-items: center;
					gap: 20rpx;
					margin-bottom: 10rpx;

					text {
						&:first-of-type {
							;
							@include fontStyle(24rpx, 500, #48C368, 34rpx);
						}

						&:last-of-type {
							position: relative;
							right: 10rpx;
							@include fontStyle(24rpx, 400, #666666, 34rpx);
						}
					}
				}

				&>.storePhoto {
					height: 160rpx;
					width: 100%;
					margin-bottom: 10rpx;
					position: relative;

					.scroll-list-photo {
						@include __hw100;
						white-space: nowrap;

						image {
							height: 160rpx;
							width: 240rpx;
							margin-right: 20rpx;
							display: inline-block;
						}
					}

					&>.count {
						width: 68rpx;
						height: 32rpx;
						background: #000000;
						border-radius: 4rpx;
						opacity: 0.5;
						position: absolute;
						left: 600rpx;
						top: 120rpx;
						z-index: 2;
						display: flex;
						justify-content: center;
						align-items: center;

						image {
							width: 20rpx;
							height: 20rpx;
						}

						text {
							font-size: 20rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #FFFFFF;
							line-height: 20rpx;
						}
					}
				}

				&>.time {
					margin-bottom: 20rpx;

					text {
						font-size: 28rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 600;
						color: #333333;
						line-height: 34rpx;

						&:nth-child(1) {
							margin-right: 20rpx;
						}
					}
				}

				&>.mid-box {
					position: relative;
					@include flexX;
					margin: 20rpx 0rpx;

					.left {
						.location {
							width: 520rpx;
							font-size: 28rpx;
							font-family: PingFangSC-Medium, PingFang SC;
							font-weight: 500;
							color: #333333;
							line-height: 34rpx;
							margin-bottom: 10rpx;
						}

						.distance {
							@include flexX;
							place-items: flex-start center;

							.icon {
								width: 28rpx;
								height: 28rpx;

								image {
									width: 100%;
									height: 100%;
									position: relative;
									top: -3rpx;
								}
							}

							text {
								font-size: 24rpx;
								font-family: PingFangSC-Medium, PingFang SC;
								font-weight: 500;
								color: #666666;
								line-height: 34rpx;
								margin-right: 20rpx;
							}
						}
					}

					&>.right {
						position: absolute;
						right: 0rpx;
						top: 20rpx;
						@include flexX();
						gap: 30rpx;

						.right-item {
							@include flexY();

							.image-box {
								width: 48rpx;
								height: 48rpx;

								image {
									@include __hw100();
								}
							}

							text {
								font-size: 24rpx;
								font-family: PingFangSC-Regular, PingFang SC;
								font-weight: 400;
								color: #333333;
								line-height: 34rpx;
							}
						}
					}

				}

				&>.discount {
					@include flexX();
					width: 100%;
					position: relative;
					margin-top: 10rpx;
					align-items: center;

					.left {
						margin-right: 20rpx;

						text {
							@include fontStyle(22rpx, 400, #FDAC03, 24rpx);
							display: inline-block;
							box-sizing: border-box;
							background: #FEF8E8;
							border-radius: 8rpx;
							padding:4rpx;
						}
					}

					.mid {

						text {
							font-size: 24rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #333333;
							line-height: 24rpx;
						}
					}

					.detail {
						position: absolute;
						right: 0rpx;
						z-index: 2000000;

						text {
							font-size: 24rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #666666;
							line-height: 24rpx;
						}

						image {
							width: 22rpx;
							height: 22rpx;
						}
					}

					.action {
						.pop {
							height: 800rpx;
							overflow-y: auto;
							@include flexY();
							place-items: center;
							padding: 20rpx 20rpx;
							box-sizing: border-box;
							position: relative;

							.image-box {
								position: absolute;
								right: 22rpx;
								top: 25rpx;

								image {
									width: 32rpx;
									height: 32rpx;
								}
							}

							@mixin font1 {
								font-size: 32rpx;
								font-family: PingFangSC-Medium, PingFang SC;
								font-weight: 700;
								color: #333333;
								line-height: 44rpx;
							}

							@mixin font2 {
								font-size: 24rpx;
								font-family: PingFangSC-Regular, PingFang SC;
								font-weight: 400;
								color: #666666;
								line-height: 34rpx;
							}

							&>.title {
								text {
									@include font1;
								}
							}

							&>.coupon-list {
								width: 100%;
								padding: 20rpx 0rpx;
								box-sizing: border-box;

								&>.item {
									width: 100%;
									box-sizing: border-box;
									background: #E9F9EE;
									border-radius: 16rpx;
									padding: 30rpx 40rpx;
									gap: 200rpx;
									@include flexX();
									justify-content: space-between;
									place-items: center;
									margin-bottom: 20rpx;

									&>.pop-left {
										@include flexY();
										gap: 40rpx;

										text {
											&:nth-child(1) {
												@include font1;
											}

											&:nth-child(2) {
												@include font2;
											}
										}
									}

									&>.pop-right {

										@include flexY();
										gap: 10rpx;

										&>text {
											&:nth-child(1) {
												font-size: 52rpx;
												font-family: PingFangSC-Medium, PingFang SC;
												font-weight: 500;
												color: #48C368;
												line-height: 74rpx;

											}

											&:nth-child(2) {
												font-size: 24rpx;
												font-family: PingFangSC-Regular, PingFang SC;
												font-weight: 400;
												color: #666666;
												line-height: 34rpx;

											}

										}

										&>.button {
											display: inline-block;
											background: linear-gradient(132deg, #69DB38 0%, #48C368 100%);
											border-radius: 36rpx;
											@include flexX;
											justify-content: center;
											place-items: center;
											padding: 5rpx 0;
											box-sizing: border-box;

											&>text {
												&:nth-child(1) {
													font-size: 24rpx;
													font-family: PingFangSC-Medium, PingFang SC;
													font-weight: 500;
													color: #FFFFFF;
													line-height: 34rpx;

												}
											}
										}
									}
								}
							}
						}
					}
				}
			}


			.combo {
				margin: 20rpx 0rpx;

				text {
					font-size: 28rpx;
					font-family: PingFangSC-Medium, PingFang SC;
					font-weight: 500;
					color: #333333;
					line-height: 40rpx;
				}
			}

			.combo-list {
				background: #ffffff;
				box-sizing: border-box;
				border-radius: 16rpx;
				padding: 20rpx 20rpx;
				width: 100%;

				&>.combo-list-item {
					@include flexX();
					position: relative;
					margin-bottom: 20rpx;

					&:last-child {
						margin-bottom: 0rpx;
					}

					&>.image-box {
						width: 160rpx;
						height: 160rpx;
						margin-right: 20rpx;

						image {
							@include __hw100();
						}
					}

					.text-info {
						&>.name {

							text {
								font-size: 32rpx;
								font-family: PingFangSC-Medium, PingFang SC;
								font-weight: 500;
								color: #333333;
								line-height: 44rpx;
							}

						}

						&>.time {
							margin-bottom: 20rpx;

							text {
								font-size: 24rpx;
								font-family: PingFangSC-Medium, PingFang SC;
								font-weight: 400;
								color: #666666;
								line-height: 24rpx;

								&:nth-child(1) {
									margin-right: 20rpx;
								}
							}
						}

						&>.price {


							text {
								font-family: PingFangSC-Medium, PingFang SC;
								font-weight: 400;
								line-height: 24rpx;

								&:nth-of-type(1) {
									margin-right: 10rpx;
									font-size: 36rpx;
									color: #FF7A00;
								}

								&:nth-of-type(2) {
									color: #999999;
									font-size: 24rpx;
									text-decoration: line-through;
								}

								&:nth-of-type(3) {
									color: #999999;
									font-size: 24rpx;
									position: absolute;
									right: 0;
									bottom: 10rpx;
								}
							}
						}

					}

					.button {
						position: absolute;
						right: 0rpx;
						top: 45rpx;
						width: 118rpx;
						height: 64rpx;
						background: linear-gradient(132deg, #69DB38 0%, #48C368 100%);
						border-radius: 36rpx;
						text-align: center;

						text {
							font-size: 28rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #FFFFFF;
							line-height: 64rpx;
						}
					}
				}
			}

			.comment-title {
				@include flexX;
				justify-content: space-between;
				width: 100%;
				margin: 20rpx 0rpx;

				.left {
					text {
						font-size: 28rpx;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: 500;
						color: #333333;
						line-height: 40rpx;
					}
				}

				&>.right {
					text {
						font-size: 24rpx;
						font-family: PingFangSC-Medium, PingFang SC;
						font-weight: 500;
						color: #666666;
						line-height: 40rpx;
					}

					image {
						width: 22rpx;
						height: 22rpx;
					}
				}
			}

			.comment {
				background: #ffffff;
				border-radius: 16rpx;
				padding: 20rpx;
				box-sizing: border-box;

				.head {
					@include flexX();

					.value {
						margin-right: 20rpx;

						text {
							font-size: 64rpx;
							font-family: PingFangSC-Medium, PingFang SC;
							font-weight: 500;
							color: #48C368;
							line-height: 90rpx;
						}
					}

					.rate {
						text {
							font-size: 24rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #333333;
							line-height: 34rpx;
							color: #69DB38;
						}
					}

					.divi {
						width: 1rpx;
						height: 40rpx;
						background: #D8D8D8;
						position: relative;
						top: 15rpx;
						margin: 0rpx 20rpx;
					}

					&>.rateTags {
						@include flexX();
						width: 100%;
						justify-content: space-between;

						.rateTag {
							margin-right: 20rpx;

							.title {
								text {
									font-size: 24rpx;
									font-family: PingFangSC-Regular, PingFang SC;
									font-weight: 400;
									color: #666666;
									line-height: 34rpx;
								}
							}

							.rate {
								text {
									font-size: 24rpx;
									font-family: PingFangSC-Medium, PingFang SC;
									font-weight: 500;
									color: #48C368;
									line-height: 34rpx;
								}
							}
						}
					}
				}

				.tags {
					margin: 20rpx 0rpx;

					.onetag {
						background: #EBEBEB;
						border-radius: 8rpx;
						display: inline-block;
						margin-right: 15rpx;
						box-sizing: border-box;
						padding: 0rpx 10rpx;
						padding-bottom: 6rpx;

						text {
							font-size: 24rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #666666;

							&:first-of-type {
								margin-right: 10rpx;
							}
						}
					}
				}

				&>.first-line {
					@include flexX();
					position: relative;
					margin-top: 40rpx;

					.avatar {
						width: 72rpx;
						height: 72rpx;
						border-radius: 50%;
						margin-right: 20rpx;

						image {
							@include __hw100();
						}
					}

					.name-rate {
						.name {
							text {
								font-size: 28rpx;
								font-family: PingFangSC-Regular, PingFang SC;
								font-weight: 400;
								color: #333333;
								line-height: 40rpx;
							}
						}

						&>.rate {
							@include flexX();

							text {
								color: #69DB38;
							}
						}
					}

					.time {
						position: absolute;
						right: 0rpx;

						text {
							font-size: 24rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #BBBBBB;
							line-height: 34rpx;
						}
					}
				}

				.comment-text {
					text {
						font-size: 28rpx;
						font-family: PingFangSC-Regular, PingFang SC;
						font-weight: 400;
						color: #333333;
						line-height: 40rpx;
					}
				}

				.photo-group {
					@include flexX;
					justify-content: space-between;
					flex-wrap: wrap;
					margin: 20rpx 0rpx;

					image {
						width: 206rpx;
						height: 206rpx;
					}
				}

				.shop-info {
					margin: 20rpx 0rpx;
					margin-top: 30rpx;

					.tag {
						display: inline-block;
						background: #EBEBEB;
						border-radius: 8rpx;

						text {
							display: inline-block;
							padding: 10rpx 10rpx;
							font-size: 24rpx;
							font-family: PingFangSC-Regular, PingFang SC;
							font-weight: 400;
							color: #666666;
							line-height: 30rpx;
						}
					}
				}
			}
		}
	}
</style>