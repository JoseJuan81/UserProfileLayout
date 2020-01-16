<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';

export default {
	name: 'app',
	components: {
		HelloWorld,
	},
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

.profile {

	.container-layout {
		aside {
			background-color: rgba(246, 247, 249, 0.6);
		}
		section {
			background-color: rgba(246, 247, 249, 0.3);
		}
	}
}
</style>
