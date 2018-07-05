<template>
<div class="footer" align="center">
  	<p>&copy; Sant Pau del Camp</p>
</div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
p {
    width: 100%;
    text-align: center;
}
.footer{
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0px;
  height: 40px;
}
</style>
