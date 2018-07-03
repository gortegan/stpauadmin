<template>
<v-card class="navbar-card">
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
</template>

<script>
export default {
  name: 'app-navbar',
  data() {
      return {
          e2: 5
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.bottom-nav.bottom-nav--absolute.bottom-nav--active.transparent, .navbar-card {
    position: fixed;
  }
.bottom-nav .btn{
  width: 50%;
  max-width: 50%;
}
</style>
