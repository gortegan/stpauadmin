<template>
<div>
  <div class="portada">
      <h1 class="display-2 font-weight-thin text-center">Arxius</h1>
      <h4 class="subheading">Administració d'arxius. Es permet afegir, esborrar i modificar fitxers de la base de dades.</h4>
  </div>
    <div class="container">
      <md-table v-model="arxius" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
        <md-table-toolbar>
          <h1 class="md-title">Arxius</h1>
        </md-table-toolbar>

        <md-table-row slot="md-table-row" slot-scope="{ item }">
          <md-table-cell md-label="Nom" md-sort-by="name">{{ item.name }}</md-table-cell>
          <md-table-cell md-label="Descripció" md-sort-by="description">{{ item.description }}</md-table-cell>
          <md-table-cell md-label="" class="actions">
          <md-button class="md-icon-button edit">
            <md-icon>edit</md-icon>
          </md-button>
          <md-button class="md-icon-button delete" >
            <md-icon>delete</md-icon>
          </md-button>
          </md-table-cell>
        </md-table-row>
      </md-table>
    </div>
    <md-speed-dial class="md-bottom-right settings">
      <md-speed-dial-target>
        <md-icon>settings</md-icon>
      </md-speed-dial-target>

      <md-speed-dial-content>
        <md-button class="md-icon-button">
          <md-icon>delete</md-icon>
        </md-button>

        <md-button class="md-icon-button">
          <md-icon>add</md-icon>
        </md-button>
      </md-speed-dial-content>
    </md-speed-dial>
    <app-navbar></app-navbar>
</div>

</template>

<script>
import Navbar from './Navbar'
export default {
  name: 'Files',
 data: () => ({
      arxius: [
        {
          name: "Shawna Dubbin",
          description: "khasdkhkdjfhkljsdh fklh klsdfh kljsdh fjklh sdkljfh klsdjfh klsdjhf klsjdfh "
        },
        {
          name: "Odette Demageard",
          description: "jkashd fklhsd fhiiusfhdc klzjhc kljshdifoug ilbdsjklfhiueghr flb ejksdhfvuisehr "
        },
        {
          name: "Shawna Dubbin",
          description: "khasdkhkdjfhkljsdh fklh klsdfh kljsdh fjklh sdkljfh klsdjfh klsdjhf klsjdfh "
        },
        {
          name: "Odette Demageard",
          description: "jkashd fklhsd fhiiusfhdc klzjhc kljshdifoug ilbdsjklfhiueghr flb ejksdhfvuisehr "
        },
        {
          name: "Shawna Dubbin",
          description: "khasdkhkdjfhkljsdh fklh klsdfh kljsdh fjklh sdkljfh klsdjfh klsdjhf klsjdfh "
        },
        {
          name: "Odette Demageard",
          description: "jkashd fklhsd fhiiusfhdc klzjhc kljshdifoug ilbdsjklfhiueghr flb ejksdhfvuisehr "
        },
        {
          name: "Shawna Dubbin",
          description: "khasdkhkdjfhkljsdh fklh klsdfh kljsdh fjklh sdkljfh klsdjfh klsdjhf klsjdfh "
        },
        {
          name: "Odette Demageard",
          description: "jkashd fklhsd fhiiusfhdc klzjhc kljshdifoug ilbdsjklfhiueghr flb ejksdhfvuisehr "
        },
        {
          name: "Shawna Dubbin",
          description: "khasdkhkdjfhkljsdh fklh klsdfh kljsdh fjklh sdkljfh klsdjfh klsdjhf klsjdfh "
        },
        {
          name: "Odette Demageard",
          description: "jkashd fklhsd fhiiusfhdc klzjhc kljshdifoug ilbdsjklfhiueghr flb ejksdhfvuisehr "
        },
        {
          name: "Shawna Dubbin",
          description: "khasdkhkdjfhkljsdh fklh klsdfh kljsdh fjklh sdkljfh klsdjfh klsdjhf klsjdfh "
        },
        {
          name: "Odette Demageard",
          description: "jkashd fklhsd fhiiusfhdc klzjhc kljshdifoug ilbdsjklfhiueghr flb ejksdhfvuisehr "
        }
      ]
    }),
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
.edit{
  color: green;
}
.delete{
  color: red;
}
.settings button{
  background: #3f51b5;
  color: white;
}
.md-accent{
  background: rgb(214, 1, 1);
  color: white;
}
tbody .md-table-row td {
  border: 0px;
  text-align: center;
}

.portada{
  /* The image used */
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)) center center / cover no-repeat fixed, url(https://images.unsplash.com/photo-1456735190827-d1262f71b8a3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=266491c73d1a8682a49af705ec92fd0c&auto=format&fit=crop&w=1348&q=80);
    text-align: center;
    /* Set a specific height */
    height: 30vh;
    padding-top:10vh;
    color: white;
    /* Create the parallax scrolling effect */
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.md-table{
  height: 60vh;
  text-align: center;
}
.md-dialog{
  background: #ffffff;
  width: 80%;
}
button.btn.indigo {
    color: white;
    padding: 0px;
}
.md-speed-dial.md-bottom-left, .md-speed-dial.md-bottom-right {
    position: absolute;
    bottom: 70px;
}
.md-icon-button{
  margin-top: 3px;
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
@media only screen and (max-width: 599px){
  .container {
    padding: 0px;
  } 
  .actions > .md-table-cell {
    padding: 0;
  }
}
</style>
