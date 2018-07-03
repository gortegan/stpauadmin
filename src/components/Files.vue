<template>
<div>
  <div class="container">
    <h1>Arxius</h1>
    <v-card>
      <div class="container">

      </div>
      <v-card-actions>
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

          <v-btn align="right" fab dark color="indigo" @click="showDialog = true">
              <v-icon dark>add</v-icon>
          </v-btn>
      </v-card-actions>
    </v-card>
    <app-navbar></app-navbar>
  </div>
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
.md-dialog{
  background: white;
  width: 80%;
}
i.v-icon.theme--dark.material-icons, .v-btn{
  color: white;
}
.md-dialog{
  background: white;
}
  h1{
    text-align: left;
  }
</style>
