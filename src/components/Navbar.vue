<template>
<v-card
    class="hide-overflow nav-card"
  >
    <v-bottom-nav
      :active.sync="activeBtn"
      :value="showNav"
      color="indigo"
    >
      <v-btn flat color="white" class="nav-button" to="/files">
        <span>Arxius</span>
        <v-icon>description</v-icon>
      </v-btn>

      <v-btn flat color="white" class="nav-button" to="/images">
        <span>Imatges</span>
        <v-icon>camera_alt</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>

<script>
export default {
  name: 'app-navbar',
  data () {
      return {
        activeBtn: 1,
        showNav: true
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.v-bottom-nav, .nav-card {
    width: 100%;
    bottom: 0px;
    position: fixed;
    z-index: 1;
    background: white;
    text-align: center;
  }
.nav-button{
  width: 50%;
}
.navbar-card{
  width: 100%;
}
a.nav-button.btn.btn--flat.btn--router.white--text {
    text-decoration: none;
    cursor: pointer;
}
</style>
