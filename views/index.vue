<template>
  <div>
    <v-title title="index page"></v-title>
    <v-button @click="handleClick">点击按钮</v-button>
    <p>
      <span>{{$store.state.count}}</span>
    </p>
    <p>
      {{$store.getters.filteredList}}, length={{$store.getters.listCount}}
    </p>
    <p>
        <img src="../images/image.png" style="width: 200px;">
    </p>
  </div>
</template>
<script>
  import vTitle from '../components/title.vue';
  import vButton from '../components/button.vue';

  export default {
    components: {
      vTitle,
      vButton
    },
    methods: {
      handleClick: function () {
        this.$router.push("/cc");
      }
    },
    mounted () {
    }
  }
</script>
