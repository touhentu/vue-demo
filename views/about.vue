<template>
  <div>about page</div>
</template>
<script>
  export default {
    mounted () {
      this.$bus.emit('view-mounted', 'about page');
    }
  }
</script>
