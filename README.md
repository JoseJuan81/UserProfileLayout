# user-profile-layout
<p align="center">
	<img src="https://travis-ci.org/JoseJuan81/UserProfileLayout.svg?branch=dev">
	<img alt="GitHub package.json version (branch)" src="https://img.shields.io/github/package-json/v/josejuan81/UserProfileLayout/dev">
	<img alt="GitHub" src="https://img.shields.io/github/license/josejuan81/UserProfileLayout">
	<img alt="npm" src="https://img.shields.io/npm/dm/UserProfileLayout">
</p>

> screen greater to `700px`

<img src="https://japi-static.s3.amazonaws.com/japi-sales-error/web1.png">

> screen lower to `700px`

<img src="https://japi-static.s3.amazonaws.com/japi-sales-error/movil1.png">
<img src="https://japi-static.s3.amazonaws.com/japi-sales-error/movil2.png">

## Install
```
npm i user-profile-layout
```

## Vue Use
Global use
```js
import UserProfileLayout from 'user-profile-layout';

Vue.use(UserProfileLayout);
```
Local Use

`my-file.vue`
```js
import UserProfileLayout from 'user-profile-layout';

export default {
	name: 'My-component',
	components: {
		UserProfileLayout,
	}
}
```

## Example
```html
<template>
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
</template>

<script>
import UserProfileLayout from './UserProfileLayout.vue';

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
```
```scss
<style scoped lang="scss">
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

```
## Props
name | description
---|---
`show` | prop used to hide and show movil menu. This prop only shows the movil menu if the screen's width is lower to `break-point`.
`break-point` | prop used to define width screen. In this point the design change from movil to web or web to movil. By default is `768px`.
## Slot
name | use
:-- | :--
`aside` | This is the container used for web menu
`main-container` | This is the container used for the principal information
`menu-movil` | This is the container used for the movil menu.