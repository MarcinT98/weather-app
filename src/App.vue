<template>
  <div id="app">
    <Navbar/>
<Smog/>
<router-view></router-view>

  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Smog from './components/Smog.vue'
export default {
  name: 'App',
  components: {
    Smog,
    Navbar,

    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

*{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}
</style>
