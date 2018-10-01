<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>Vue Weather Forecast</h2>
    <weather/>
  </div>
</template>

<script>
import weather from './components/weather.vue'

export default {
  name: 'app',
  components: {
    weather
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img{
  height: 100px;
}
</style>
