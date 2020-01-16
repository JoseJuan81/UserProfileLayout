<template>
	<div class="layout-main-container">
		<div class="container-layout">
			<aside v-show="!movil">
				<slot name="aside"></slot>
			</aside>
			<section>
				<slot name="main-content"></slot>
			</section>
		</div>
		<div
			:class="[
				'menu-movil',
				{ 'show-menu-movil': show && movil },
			]"
		>
			<slot name="menu-movil"></slot>
		</div>
	</div>
</template>
<script>

function created() {
	this.movil = window.innerWidth <= this.breakPoint;
	window.addEventListener('resize', () => {
		this.movil = window.innerWidth <= this.breakPoint;
	});
}

function data() {
	return {
		movil: false,
	};
}

export default {
	name: 'user-profile-layout',
	created,
	data,
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

<style lang="scss" scoped>
	.layout-main-container {
		height: 100%;
	}

	.container-layout {
		align-items: flex-start;
		display: flex;
		justify-content: flex-start;
	}

	aside {
		flex-basis: 17%;
	}

	section {
		flex-basis: auto;
		flex-grow: 1;
	}

	.menu-movil {
		background-color: white;
		bottom: 0;
		left: -100%;
		position: absolute;
		top: 0;
		transition: left 200ms ease-in-out;
		z-index: 99
	}

	.show-menu-movil {
		left: 0%;
	}
</style>
