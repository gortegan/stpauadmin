<template>
<div>
  <h1>Files</h1>
  <app-navbar></app-navbar>
</div>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: 'Files',
  data () {
    return {
      a: true
    }
  },
  components: {
    'app-navbar': Navbar
  },
  route: {
    canActivate(transition) {
        console.log(user)
        if (user.authenticated) {
            transition.redirect('/login')
        } else {
            transition.next()
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>

</style>
