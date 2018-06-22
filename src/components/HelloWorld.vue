<template>
  <v-card color="primary">
    <v-bottom-nav :value="true" :active.sync="e1" absolute color="transparent">
      <v-btn flat color="teal" value="recent">
        <span>Recent</span>
        <v-icon>history</v-icon>
      </v-btn>
      <v-btn flat color="teal" value="favorites">
        <span>Favorites</span>
        <v-icon>favorite</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Administració de Sant Pau del Camp'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
  .bottom-nav.bottom-nav--absolute.bottom-nav--active.transparent {
    position: fixed;
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