<template>
<div>
  <div>
    <div class="portada">
      <h1 class="display-2 font-weight-thin text-center">Imatges</h1>
      <h4 class="subheading">Administració d'imatges. Es permet afegir, esborrar i modificar imatges de la base de dades.</h4>
  </div>
    <div class="container">
    <v-card>
      <v-card-actions>
          <md-dialog :md-active.sync="obreImatge" class="container">
            <md-dialog-title>Puja una nova imatge</md-dialog-title>
            <md-field>
              <label>Nom</label>
              <md-input></md-input>
            </md-field>
            <md-field>
              <label>Descripció</label>
              <md-textarea md-autogrow></md-textarea>
            </md-field>
            <md-field>
              <label>Selecciona una imatge </label>
              <md-file />
            </md-field>
              <v-btn color="indigo"  >Pujar arxiu <v-icon right dark>cloud_upload</v-icon></v-btn>
          </md-dialog>

          <v-btn align="right" fab dark color="indigo" @click="obreImatge = true">
              <v-icon dark>add</v-icon>
          </v-btn>
      </v-card-actions>
    </v-card>
    </div>
    <app-navbar></app-navbar>
  </div>
</div>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: 'Images',
  data () {
    return {
      a: true,
      obreImatge: false
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
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)) center center / cover no-repeat fixed, url(https://images.unsplash.com/photo-1500051638674-ff996a0ec29e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3969f232784b2b43d8bdbef93b603ffe&auto=format&fit=crop&w=1392&q=80);
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
  background: white;
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

