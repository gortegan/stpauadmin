<template>
  <div id="app">
    <img src="./assets/logo.png" id="logo">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#logo{
  margin-top: 100px;
  width: 150px;
}
.bottom-nav .btn{
  width: 50%;
  max-width: 50%;
}
</style>
