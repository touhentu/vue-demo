<template>
  <div>
    <ul>
      <li>
        <router-link to="/">index</router-link>
      </li>
      <li>
        <router-link to="/about">about</router-link>
      </li>
      <li>
        <router-link to="/user/1">user1 page</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>
<script>
  export default {
  }
</script>
<style scoped>
  ul{list-style-type:none;padding:0;margin:0;border:1px slid #ccc;}  
  ul li{display:inline-block;padding:4px 6px;font-size:1.5em;}  
  ul li a:hover {color:#f60;}
</style>
