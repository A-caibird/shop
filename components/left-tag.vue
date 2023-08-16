<template>
	<view>
		<view class="title">
			<view class="left">

			</view>
			<view class="right">
				<text>
					{{name}}
				</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "left-tag",
		data() {
			return {

			};
		},
		props:{
			name:String
		}
	}
</script>

<style lang="scss" scoped>
	.title {
		@include flexX;
		gap:10rpx;
		place-items: center;
		&>.left {
			width: 4rpx;
			height: 26rpx;
			background: #48C368;
			border-radius: 2rpx;
			position: relative;
			top:2rpx;
		}

		&>.right {
			text {
				@include fontStyle(28rpx, 400, #333333, 40rpx);
			}
		}
	}
</style>