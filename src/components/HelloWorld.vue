<template>
	<div class="container">
		<UserProfileLayout
			class="profile"
			:show="show"
			:break-point="700"
		>
			<template v-slot:aside>
				<ul>
					<li>Mis Pedidos</li>
					<li>Mis Datos personales</li>
					<li>Mis Direcciones</li>
					<li>Mis Gastos</li>
					<li>Mis Favoritos</li>
					<li>Configuración de mi cuenta</li>
				</ul>
			</template>
			<template v-slot:main-content>
				<div>Contenido principal</div>
			</template>
			<template v-slot:menu-movil>
				<div class="wrapper-menu-movil">
					<button
						class="go-back"
						type="button"
						@click="show = false"
					>regresar</button>
					<ul class="movil">
						<li>Mis Pedidos</li>
						<li>Mis Datos personales</li>
						<li>Mis Direcciones</li>
						<li>Mis Gastos</li>
						<li>Mis Favoritos</li>
						<li>Configuración de mi cuenta</li>
					</ul>
				</div>
			</template>
		</UserProfileLayout>
	</div>
</template>

<script>
import UserProfileLayout from './UserProfileLayout.vue';

function data() {
	return {
		show: false,
	};
}

export default {
	name: 'HelloWorld',
	components: {
		UserProfileLayout,
	},
	data,
	props: {
		msg: String,
	},
};
</script>
<style scoped lang="scss">
	.container {
		margin: 10rem auto 0;
		max-width: 102.4rem;
	}
	.profile {
		height: 100%;
		width: 100%;
	}

	ul {
		padding: 0.5rem 0;
		margin: 0;
		li {
			list-style: none;
			padding: 1rem 3rem;
			text-align: left;
		}
	}

	.wrapper-menu-movil {
		height: 100vh;
		width: 100vw;
	}

	.go-back {
		padding: 1rem;
		width: 100%;
	}

	.movil {
		background-color: aliceblue;
		height: 100%;
	}
</style>
