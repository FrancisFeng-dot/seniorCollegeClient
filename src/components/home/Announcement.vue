<template>
  <div class="an">
    <div class="an-title">
      <p class="title" :class='{ active:!aim }' @mouseenter="changeAn(0)" @click="changeAn(0)">{{msg[0].title}}</p>
      <span class="division-line">|</span>
      <p class="title" :class='{ active:aim }' @mouseenter="changeAn(1)" @click="changeAn(1)">{{msg[1].title}}</p>
    </div>
    <ul class="an-list" :class="{custom:custom}">
      <li v-for="(item ,index) in currentList" :key="index">
        <span class="number" v-if="custom" :style="{background:colors[index]}">{{index+1}}</span>
        <div class="word">{{item.title}}</div>
        <span class="time">{{item.createtime | timestr('month') }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Announcement",
    props: ['anMsg', 'custom'],
    data() {
      return {
        msg: this.anMsg || [],
        colors: ['#C52E0F', 'rgba(197,46,15,0.80)', 'rgba(197,46,15,0.50)'],
        aim: 0
      }
    },
    computed: {
      currentList: function () {
        return this.msg ? this.msg[this.aim].list : [];
      }
    },
    methods: {
      changeAn: function (i) {
        this.aim = i;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .an {
    background: white;
    height: 100%;
    overflow: hidden;

    .an-title {
      display: flex;
      padding-left: 16px;
      border-bottom: 1px solid #DBDBDB;
      min-height: 26px;
      font-size: 20px;

      .division-line {
        margin: 0 14px -1px 16px;
        vertical-align: text-bottom;
        color: #BDBDBD;
      }

      .title {
        color: #888888;
        letter-spacing: 0.57px;
        text-align: center;
        margin: 0 0 -1.5px;
        padding-bottom: 15px;
      }

      .title.active {
        font-size: 20px;
        color: #C52E0F;
        letter-spacing: 0.57px;
        text-align: center;
        border-bottom: 2px solid #C52E0F;
      }

    }

    .an-list {
      padding-left: 18px;
      color: #d8d8d8;

      &.custom {
        list-style: none;
        padding-left: 28px;
      }

      li {
        border-bottom: 1px dashed #F3F3F3;
        height: 41px;
        line-height: 41px;
        position: relative;

        .number {
          width: 18px;
          height: 18px;
          background: #CACACA;
          position: absolute;
          top: 12px;
          left: -28px;
          border-radius: 3px;
          font-size: 16px;
          color: #FFFFFF;
          text-align: center;
          line-height: 18px;
        }

        .word {
          position: absolute;
          width: 80%;
          top: 0;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin-right: 80px;
          font-size: 16px;
          color: #3A3A3A;
          letter-spacing: 0.46px;

          &:hover {
            color: #C52E0F;
          }
        }

        .time {
          position: absolute;
          width: 80px;
          top: 0;
          right: 0;
          text-align: right;
          padding-right: 3px;
          font-size: 15px;
          color: #BDBDBD;
          letter-spacing: 0.43px;
        }
      }
    }
  }
</style>
