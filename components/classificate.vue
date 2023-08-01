<template>
	<view>
		<view class="classificate">
			<view class="item" :class="{active:isSelect[0] }" @tap="tapClassificate(0)">
				<text>
					129元2-3人餐
				</text>
			</view>
			<view class="item" :class="{active:isSelect[1]}" @tap="tapClassificate(1)">
				<text>
					299元3-4人餐
				</text>
			</view>
			<view class="item" :class="{active:isSelect[2]}" @tap="tapClassificate(2)">
				<text>
					15.9元1-2人餐
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "classificate",
		data() {
			return {
				isSelect: [true, false, false]
			}
		},
		methods: {
			tapClassificate(num) {
				this.isSelect = this.isSelect.map(function(item, index) {
					return index == num;
				})
				console.log(this.isSelect)
			}
		},
		computed: {
			ok: function() {

			}
		}
	}
</script>

<style lang="scss" scoped>
	.classificate {
		@include flexX;
		justify-content: space-between;
		// width: 100%;
		box-sizing: border-box;

		&>.item {
			position: relative;

			text {
				font-size: 28rpx;
				font-family: PingFangSC-Regular, PingFang SC;
				font-weight: 400;
				color: #333333;
				line-height: 40rpx;
			}

			&.active {
				text {
					color: #48C368;
				}

				&::before {
					content: "";
					width: 40rpx;
					height: 4rpx;
					position: absolute;
					top: 45rpx;
					left: 50%;
					transform: (translateX(-50%)); //移动自身宽度的百分之五十左移
					background: #48C368;
				}
			}
		}
	}
</style>