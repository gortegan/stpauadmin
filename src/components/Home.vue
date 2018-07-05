<template>
<div class="container">
  <h1>Administració de Sant Pau del Camp</h1>
  <div class="row">
    <div class="col-md-6">
      <v-card>
        <v-card-media
          src="https://images.unsplash.com/photo-1461360228754-6e81c478b882?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a3dfc99e835e5c29b22f3397e7da32ae&auto=format&fit=crop&w=1353&q=80"
          height="300px"
        >
        </v-card-media>

        <v-card-title primary-title>
          <div>
            <div class="headline">Administració d'arxius</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat large color="indigo" to="/files">Accedeix</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="show">
            Accedeix a la zona d'administracíó de fitxers de Sant Pau del Camp. Allà podràs afegir, modificar i esborrar tots els fitxers pujats a l'aplicatiu.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
    </div>
    <div class="col-md-6">
<v-card>
        <v-card-media
          src="https://images.unsplash.com/photo-1523698120758-030a38a90d16?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=854c2be9b645257ed1284cdc2c4856fe&auto=format&fit=crop&w=1351&q=80"
          height="300px"
        >
        </v-card-media>

        <v-card-title primary-title>
          <div>
            <div class="headline">Administració d'imatges</div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat large color="indigo" to="/images">Accedeix</v-btn>
          <v-spacer></v-spacer>
          <v-btn icon @click="showImage = !showImage">
            <v-icon>{{ showImage ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card-text v-show="showImage">
            Accedeix a la zona d'administracíó d'imatges de Sant Pau del Camp. Allà podràs afegir, modificar i esborrar totes les imatges pujades a l'aplicatiu.
          </v-card-text>
        </v-slide-y-transition>
      </v-card>
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
      show: false,
      showImage: false
    }
  },
  components: {
    'app-navbar': Navbar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
a{
  text-decoration: none;
}
h1{
  text-align: left;
}
a.btn.btn--flat.btn--large.btn--router.indigo--text{
  text-decoration: none;
}
button.btn.btn--flat.btn--large.indigo--text{
  padding: 0px;
}
button.btn.btn--icon {
    padding: 0px;
}
.card{
  margin-top: 10px;
}
</style>
