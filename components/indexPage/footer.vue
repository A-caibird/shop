<template>
	<view class="footer">
		<u-tabbar :value="currentPage" @change="change1" :fixed="true" :placeholder="false" :safeAreaInsetBottom="false"
			activeColor="#48C368" height="500rpx">
			<u-tabbar-item text="首页推荐" class="item" @click="goTo(0)">
				<image class="u-page__item__slot-icon" slot="active-icon" src="/static/toPage/homeActive.png">
				</image>
				<image class="u-page__item__slot-icon" slot="inactive-icon" src="/static/toPage/home.png"></image>
			</u-tabbar-item>
			<u-tabbar-item text="消息" class="item" @click="goTo(1)">
				<image class="u-page__item__slot-icon" slot="active-icon" src="/static/toPage/messageActive.png">
				</image>
				<image class="u-page__item__slot-icon" slot="inactive-icon" src="/static/toPage/message.png">
				</image>
			</u-tabbar-item>
			<u-tabbar-item text="购物车" class="item" @click="goTo(2)">
				<image class="u-page__item__slot-icon" slot="active-icon" src="/static/toPage/shopCarActive.png">
				</image>
				<image class="u-page__item__slot-icon" slot="inactive-icon" src="/static/toPage/shopCar.png">
				</image>
			</u-tabbar-item>
			<u-tabbar-item text="我的" class="item" @click="goTo(3)">
				<image class="u-page__item__slot-icon" slot="active-icon" src="/static/toPage/mineActive.png">
				</image>
				<image class="u-page__item__slot-icon" slot="inactive-icon" src="/static/toPage/mine.png"></image>
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				currentPage: 0
			}
		},
		methods: {
			goTo(num) {
				this.currentPage = num;
			},
			change1() {
				// this.currentPage = num;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.u-tabbar {
		padding: 20rpx 0;
		.item {
			.u-page__item__slot-icon {
				height: 56rpx;
				width: 56rpx;
			}
		}
	}
</style>