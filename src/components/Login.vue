<template>
<div class="" >
  <div class="row container" >
    <div class="col-md-3"></div>
    <div class="col-md-6 formlogin">
      <form novalidate @submit.prevent="validateUser" >
            <md-card class="md-layout-item">
              <md-card-header>
                <div class="md-title">Parròquia Sant Pau del Camp</div>
              </md-card-header>
              <md-card-content>
                <md-field>
                  <label>Usuari</label>
                  <md-input></md-input>
                </md-field>
                <md-field>
                  <label>Contrasenya</label>
                  <md-input></md-input>
                </md-field>
              </md-card-content>
              <md-card-actions>
                <md-button class="md-raised block" to="/">Accedeix</md-button>
              </md-card-actions>
            </md-card>
      </form>
    </div>
  </div>
  <app-footer></app-footer>
</div>
</template>

<script>
import Footer from './Footer'
export default {
  name: 'Login',
  data () {
    return {
    }
  },
  components: {
    'app-footer': Footer
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.formlogin {
  margin: 50px;
}
.md-card-content {
  padding: 0px 10%;
}
</style>
