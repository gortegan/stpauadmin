<template>
  <div id="app">
    <router-view/>
      <v-card>
        <v-bottom-nav :value="true" :active.sync="e2" absolute color="transparent">
          <v-btn dark color="black" value="imatges" to="/images">
            <span>Imatges</span>
            <v-icon>collections</v-icon>
          </v-btn>
          <v-btn dark color="black" value="arxius" to="/files">
            <span>Arxius</span>
            <v-icon>file_copy</v-icon>
          </v-btn>
        </v-bottom-nav>
   </v-card>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      msg: 'Administració de Sant Pau del Camp',
      e2: 5
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Raleway');
#app {
  font-family: 'Raleway', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  text-decoration: none;
  padding-top: 8%;
}
.bottom-nav.bottom-nav--absolute.bottom-nav--active.transparent {
    position: fixed;
  }
.bottom-nav .btn{
  width: 50%;
  max-width: 50%;
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
    color: black;
    text-decoration: none;
    border: none;
}
</style>
