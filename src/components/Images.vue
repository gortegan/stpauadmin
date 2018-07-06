<template>
<div>
  <div>
    <div class="portada">
      <h1 class="display-2 font-weight-thin text-center">Imatges</h1>
      <h4 class="subheading">Administració d'imatges. Es permet afegir, esborrar i modificar imatges de la base de dades.</h4>
  </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <md-card >
          <md-card-media-cover md-solid>
            <md-card-media>
              <img src="https://images.unsplash.com/photo-1530733023972-03de6789855c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8bea76f5755a01938323d5eba0f25ba0&auto=format&fit=crop&w=1170&q=80.jpg" alt="Skyscraper">
            </md-card-media>

            <md-card-area>
              <md-card-header>
                <span class="md-title">Título</span>
                <span class="md-subhead">Descripción</span>
              </md-card-header>

              <md-card-actions>
                <md-button class="md-icon-button">
                  <md-icon>edit</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>delete</md-icon>
                </md-button>
              </md-card-actions>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
        </div>
        <div class="col-md-4">
          <md-card>
          <md-card-media-cover md-solid>
          <md-card-media>
              <img src="https://images.unsplash.com/photo-1530733023972-03de6789855c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8bea76f5755a01938323d5eba0f25ba0&auto=format&fit=crop&w=1170&q=80.jpg" alt="Skyscraper">
            </md-card-media>
          <md-card-area>
              <md-card-header>
                <span class="md-title">Título</span>
                <span class="md-subhead">Descripción</span>
              </md-card-header>

              <md-card-actions>
                <md-button class="md-icon-button">
                  <md-icon>edit</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>delete</md-icon>
                </md-button>
              </md-card-actions>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
        </div>
        <div class="col-md-4">
          <md-card>
          <md-card-media-cover md-solid>
          <md-card-media>
              <img src="https://images.unsplash.com/photo-1530733023972-03de6789855c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8bea76f5755a01938323d5eba0f25ba0&auto=format&fit=crop&w=1170&q=80.jpg" alt="Skyscraper">
            </md-card-media>
          <md-card-area>
              <md-card-header>
                <span class="md-title">Título</span>
                <span class="md-subhead">Descripción</span>
              </md-card-header>

              <md-card-actions>
                <md-button class="md-icon-button">
                  <md-icon>edit</md-icon>
                </md-button>

                <md-button class="md-icon-button">
                  <md-icon>delete</md-icon>
                </md-button>
              </md-card-actions>
            </md-card-area>
          </md-card-media-cover>
        </md-card>
        </div>
      </div>        
    </div>
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
    <app-navbar></app-navbar>
  </div>
  <md-button class="md-fab md-primary indigo add-button">
        <md-icon>add</md-icon>
  </md-button>
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
.add-button{
  position: fixed;
  bottom: 65px;
  right: 30px;
}
.indigo{
  color: white;
}
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
.md-card{
  padding: 0;
  margin: 10px 0px 0px 0px;
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

