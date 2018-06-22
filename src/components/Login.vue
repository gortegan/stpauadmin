<template>
<div class="container"> 
  <div class="row">
    <form novalidate @submit.prevent="validateUser" >
      <md-card class="md-layout-item">
        <md-card-header>
          <div class="md-title">Login</div>
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
        </md-card-actions>
      </md-card>
    </form>
  </div>
</div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>

.md-card-content {
  padding: 0px 10%;
}
</style>