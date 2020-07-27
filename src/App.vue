<template>
  <div id="app">
    <div class="container">
		<div class="activator">
			<button data-cy="activator" type="button" @click="show = true">Menu</button>
		</div>
		<UserProfileLayout
			class="profile"
			:show="show"
			:break-point="700"
			data-cy="user-profile-layout"
		>
			<template v-slot:aside>
				<ul class="menu-web" data-cy="menu-web">
					<li
						v-for="opt in menu"
						:key="opt.title"
					>
						<button type="button" @click="currentOption = opt">{{opt.title}}</button>
					</li>
				</ul>
			</template>
			<template v-slot:main-content>
				<div data-cy="main-content-container">
					<h1>{{currentOption.text}}</h1>
				</div>
			</template>
			<template v-slot:menu-movil>
				<div class="wrapper-menu-movil" data-cy="menu-movil">
					<button
						class="go-back"
						type="button"
						@click="show = false"
					>regresar</button>
					<ul class="movil">
						<li
						v-for="opt in menu"
						:key="opt.title"
						>
							<button type="button" @click="currentOption = opt">{{opt.title}}</button>
						</li>
					</ul>
				</div>
			</template>
		</UserProfileLayout>
	</div>
  </div>
</template>

<script>
import UserProfileLayout from '@/components/user-profile-layout.vue';

function data() {
	return {
		currentOption: {},
		menu: [
			{ title: 'Mis Datos Personales', text: 'Estos son mis datos personales' },
			{ title: 'Mis Pedidos', text: 'Tengo 1022 pedidos realizados' },
			{ title: 'Mis Direcciones', text: 'Estas son mis direcciones de envio' },
			{ title: 'Mis Gastos', text: 'Hasta la fecha he gastado 4577' },
			{ title: 'Mis Favoritos', text: 'Estos son mis productos favoritos' },
			{ title: 'Configuracion de cuenta', text: 'Aqui configuro mi cuenta' },
		],
		show: false,
	};
}

export default {
	name: 'app',
	components: {
		UserProfileLayout,
	},
	data,
};
</script>

<style lang="scss">
html, body {
  font-size: 62.5%;
}
body {
  font-size: 1.4rem;
  height: 100vh;
  margin: 0;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  height: 100%;
  text-align: center;
}

.container {
		margin: auto;
		max-width: 102.4rem;
		padding-top: 10rem;
	}

	.activator {
		background-color: gray;
		border-radius: 50%;
		height: 50px;
		left: 25px;
		position: absolute;
		top: 37px;
		width: 50px;

		button {
			border: none;
			border-radius: 50%;
			height: 100%;
			width: 100%;
		}

		@media (min-width: 701px) {
			display: none;
		}
	}

	.profile {
		height: 100%;
		width: 100%;
	}

	.menu-web, .movil {
		padding: 0.5rem 0;
		margin: 0;
		text-align: left;

		li {
			list-style: none;

			button {
				background-color: white;
				border: 0.2rem solid grey;
				border-bottom: 0;
				height: 4rem;
				padding: 1rem 0.5rem;
				width: 100%;
				white-space: nowrap;
			}
		}

		li:last-child {

			button {
				border-bottom: 0.2rem solid grey;
			}
		}
	}

	.wrapper-menu-movil {
		background-color: #f0efef;
		box-sizing: border-box;
		height: calc(100vh - 2rem);
		padding: 1rem 1.5rem;
		width: 31rem;

		.go-back {
			background-color: #8cba51;
			border: none;
			color: white;
			padding: 1rem;
			width: 100%;
		}

		.movil {
			height: 100%;
		}
	}
</style>
