<template>
	<div class="dl-layout-main-container">
		<div class="dl-container-layout">
			<aside class="dl-aside-container" v-show="!movil">
				<slot name="aside"></slot>
			</aside>
			<section class="dl-section-container">
				<slot name="main-content"></slot>
			</section>
		</div>
		<div
			:class="[
				'dl-menu-movil',
				{ 'dl-show-menu-movil': show && movil },
			]"
		>
			<slot name="menu-movil"></slot>
		</div>
	</div>
</template>
<script>

function created() {
	this.movil = window.innerWidth <= this.breakPoint;
	window.addEventListener('resize', this.handlerResize);
}

function beforeDestroy() {
	window.removeEventListener('resize', this.handlerResize);
}

function handlerResize() {
	this.movil = window.innerWidth <= this.breakPoint;
}

function data() {
	return {
		movil: false,
	};
}

export default {
	name: 'user-profile-layout',
	beforeDestroy,
	created,
	data,
	methods: {
		handlerResize,
	},
	props: {
		breakPoint: {
			default: 768,
			type: Number,
		},
		show: {
			default: false,
			type: Boolean,
		},
	},
};
</script>

<style lang="scss">
	.dl-layout-main-container {
		height: 100%;
	}

	.dl-container-layout {
		align-items: flex-start;
		display: flex;
		justify-content: flex-start;
	}

	.dl-aside-container {
		flex-basis: 17%;
	}

	.dl-section-container {
		flex-basis: auto;
		flex-grow: 1;
	}

	.dl-menu-movil {
		background-color: white;
		bottom: 0;
		left: -110%;
		position: absolute;
		top: 0;
		transition: left 200ms ease-in-out;
		z-index: 99
	}

	.dl-show-menu-movil {
		left: 0%;
	}
</style>
