<template>
  <div>
    关于我们
    <button @click="addTest(1)">add</button>
    <img src="../assets/icon_download7a.png" height="26" width="26" alt="">
    {{JSON.stringify(doneTest)}}
  </div>
</template>

<script>
  import {mapGetters, mapActions} from 'vuex'
  export default {
    name: "AboutPage",
    data() {
      return {}
    },
    computed: {
      ...mapGetters('Home',['doneTest'])
    },
    methods: {
      ...mapActions('Home',['addTest'])
    }
  }
</script>

<style lang="scss" scoped>

</style>
