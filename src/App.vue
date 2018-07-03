<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Administració de Sant Pau del Camp'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway');
body{
  background: #f6f6f6;
}
.md-card{
  background: white;
}
a.md-button{
  text-decoration: none;
  color: black;
}
#app {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  text-decoration: none;
  padding-top: 8%;
}
  .phone-viewport {
    width: 322px;
    height: 200px;
    display: inline-flex;
    align-items: flex-end;
    overflow: hidden;
    border: 1px solid rgba(#000, .26);
    background: rgba(#000, .06);
  }
  .btn.btn--router.theme--dark.black {
    background: white;
    color: black;
    text-decoration: none;
    border: none;
}
</style>
