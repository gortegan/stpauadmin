<template>
<div>
  <div class="portada">
      <h1 class="display-2 font-weight-thin text-center">Arxius</h1>
      <h4 class="subheading">Administració d'arxius. Es permet afegir, esborrar i modificar fitxers de la base de dades.</h4>
  </div>
    <div class="container">
    <v-card class="card-content">
      <v-card-actions>
          <v-btn fab dark color="indigo" @click="showDialog = true">
              <v-icon dark>add</v-icon>
          </v-btn>
      </v-card-actions>
    </v-card>
    </div>
    <app-navbar></app-navbar>
  <md-dialog :md-active.sync="showDialog" class="container">
      <md-dialog-title>Puja un nou arxiu</md-dialog-title>
      <md-field>
        <label>Nom</label>
        <md-input></md-input>
      </md-field>
      <md-field>
        <label>Descripció</label>
        <md-textarea md-autogrow></md-textarea>
      </md-field>
      <md-field>
        <label>Selecciona un arxiu</label>
        <md-file />
      </md-field>
        <v-btn color="indigo"  >Pujar arxiu <v-icon right dark>cloud_upload</v-icon></v-btn>
    </md-dialog>
</div>

</template>

<script>
import Navbar from './Navbar'
export default {
  name: 'Files',
  data () {
    return {
      a: true,
      showDialog: false
    }
  },
  components: {
    'app-navbar': Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
.portada{
  /* The image used */
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)) center center / cover no-repeat fixed, url(https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=266491c73d1a8682a49af705ec92fd0c&auto=format&fit=crop&w=1348&q=80);
    text-align: center;
    /* Set a specific height */
    padding: 100px 0px;
    color: white;
    /* Create the parallax scrolling effect */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.md-dialog{
  background: #ffffff;
  width: 80%;
}
button.btn.indigo {
    color: white;
    padding: 0px;
}
i.icon.theme--dark.material-icons, .v-btn{
  color: white;
}
.md-dialog{
  background: white;
}
  h1{
    text-align: left;
  }
</style>
