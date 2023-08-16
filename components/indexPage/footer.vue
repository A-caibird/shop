<template>
	<view class="footer">
		<u-tabbar :value="currentPage" @change="change1" :fixed="true" :placeholder="false" :safeAreaInsetBottom="false"
			activeColor="#48C368" >
			<u-tabbar-item text="首页推荐" class="item" @click="goTo(0)">
				<image class="u-page__item__slot-icon-image" slot="active-icon" src="/static/toPage/homeActive.png">
				</image>
				<image class="u-page__item__slot-icon-image" slot="inactive-icon" src="/static/toPage/home.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text="消息" class="item" @click="goTo(1)">
				<image class="u-page__item__slot-icon-image" slot="active-icon" src="/static/toPage/messageActive.png">
				</image>
				<image class="u-page__item__slot-icon-image" slot="inactive-icon" src="/static/toPage/message.png">
				</image>
			</u-tabbar-item>
			<u-tabbar-item text="购物车" class="item" @click="goTo(2)">
				<image class="u-page__item__slot-icon-image" slot="active-icon" src="/static/toPage/shopCarActive.png">
				</image>
				<image class="u-page__item__slot-icon-image" slot="inactive-icon" src="/static/toPage/shopCar.png">
				</image>
			</u-tabbar-item>
			<u-tabbar-item text="我的" class="item" @click="goTo(3)">
				<image class="u-page__item__slot-icon-image" slot="active-icon" src="/static/toPage/mineActive.png">
				</image>
				<image class="u-page__item__slot-icon-image" slot="inactive-icon" src="/static/toPage/mine.png"></image>
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		props: {
			cur: {
				type: Number,
				require: true
			}
		},
		data() {
			return {
				currentPage: this.cur
			}
		},
		methods: {
			goTo(num) {
				this.currentPage = num;
				switch (num) {
					case 0: {
						uni.navigateTo({
							url: "/pages/index/index"
						})
						break;
					}
					case 1: {
						// uni.navigateTo({
						// 	url:"/pages/shopCar/shopCar"
						// })
						break;
					}
					case 2: {
						uni.navigateTo({
							url: "/pages/shopCar/shopCar"
						})
						break;
					}
					case 3: {
						uni.navigateTo({
							url:"/pages/mine/mine"
						})
						break;
					}
				}
			},
			change1() {

			}
		},
		mounted() {
			// this.curcurrentPage=this.cur;
		}
	}
</script>

<style lang="scss" scoped>
	
	::v-deep .u-page__item__slot-icon-image {
		height: 56rpx;
		width: 56rpx;
	}
	
	::v-deep .data-v-32dc31a4 {
		height: 56rpx;
		width: 56rpx;
	}
	.u-tabbar {
		padding: 20rpx 0;
	}
		
	::v-deep .u-tabbar__content__item-wrapper{
		margin-bottom: 40rpx;
		padding-top: 20rpx;
	}
</style>