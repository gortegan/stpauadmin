<template>
<div class="container">
  <div class="row">
    <div class="col-md-6">
      <router-link to="/files" >
      <md-card class="md-layout-item" md-with-hover>
        <md-card-header>
          <v-icon>description</v-icon>
        </md-card-header>
        <md-card-content>
          <h2>Arxius</h2>
        </md-card-content>
          <md-card-actions>
        </md-card-actions>
      </md-card>
      </router-link>
    </div>
    <div class="col-md-6">
      <router-link to="/images" >
      <md-card class="md-layout-item" md-with-hover>
        <md-card-header>
          <v-icon>photo_library</v-icon>
        </md-card-header>
        <md-card-content>
          <h2>Imatges</h2>
          </md-card-content>
        <md-card-actions>
        </md-card-actions>
      </md-card>
      </router-link>
    </div>
  </div>
</div>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    'app-navbar': Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
a[data-v-8dc7cce2]{
  text-decoration: none;
}
.md-card{
  color: black;
  margin-top: 10px;
  padding: 50px 0px 0px 0px;
  cursor: pointer;
}
.md-card-content{
  margin: 20px 0px 50px 0px;
}
i.icon.material-icons{
  font-size: 5em;
}
</style>
