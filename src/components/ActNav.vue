<template>
  <div class="navtitle">
    当前位置：首页>{{navtitle}}
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {},
  data() {
    return {

    }
  },
  computed: {
    ...mapGetters('News', ['navtitle'])
  },
  beforeCreate: function() {
    //console.log(11);
  },
  created: function() {
    //console.log(12);
  },
  beforeMount: function() {
    //console.log(13);
  },
  mounted: function() {
    //console.log(14);
  },
  beforeUpdate: function() {
    //console.log(15);
  },
  updated: function() {
    //console.log(16);
  },
  beforeDestroy: function() {
    //console.log(17);
  },
  destroyed: function() {
    //console.log(18);
  }
}

</script>
<style lang="scss" scoped>
%mgto {
  margin: 0 auto;
}

@mixin displayflex($row, $column, $direction, $wrap) {
  display: flex;

  @if $direction==column {
    flex-direction: column;
  }

  @else {
    flex-direction: row;
  }

  @if $wrap==wrap {
    flex-wrap: wrap;
  }

  @else {
    flex-wrap: nowrap;
  }

  justify-content:$row;
  align-items:$column;
}

.navtitle {
  width: 1200px;
  height: 66px;
  @include displayflex(flex-start, center, row, nowrap);
  font-family: 'PingFangSC-Regular';
  color: #888888;
  font-size: 18px;
  @extend %mgto
}

</style>
