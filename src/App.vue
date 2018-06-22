<template>
  <div id="app">
    <router-view/>
      <v-card>
    <v-bottom-nav :value="true" :active.sync="e2" absolute color="transparent">
      <v-btn dark color="teal" value="recent" to="/images">
        <span>Images</span>
        <v-icon>collections</v-icon>
      </v-btn>
      <v-btn dark color="teal" value="favorites" to="/files">
        <span>Files</span>
        <v-icon>file_copy</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
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
  color: #000000;
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
</style>
