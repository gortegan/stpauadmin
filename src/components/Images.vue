<template>
  <div>
    <app-navbar></app-navbar>
  </div>
</template>

<script>
import Navbar from './Navbar'
export default {
  name: 'Images',
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
</style>
