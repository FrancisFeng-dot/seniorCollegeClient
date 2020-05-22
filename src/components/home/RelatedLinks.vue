<template>
  <div class="relate-links" @mouseenter="showOrHide(true)" @mouseleave="showOrHide(false)">
    <ul v-show="onOff">
      <li v-for="(link,index) in data.subList" :key="index">
        <a :href="link.href" target="_blank">{{link.title}}</a>
      </li>
    </ul>
    <h2> {{data.title}} </h2>
    <span> <!-- 三角形--> </span>
  </div>
</template>

<script>
  export default {
    name: "RelatedLinks",
    props: ['reLinks'],
    data() {
      return {
        onOff: false,
        data: this.reLinks
      }
    },
    methods: {
      showOrHide: function (bl) {
        this.onOff = bl;
      }
    }
  }
</script>

<style lang="scss" scoped>
  .relate-links {
    position: relative;
    height: 36px;
    width: 23%;
    background: #e6e6e6;

    & > h2 {
      line-height: 36px;
      padding-left: 10px;
      margin: 0 36px 0 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 16px;
      font-weight: normal;
      color: #242424;
      letter-spacing: 0.34px;
    }

    ul {
      list-style: none;
      padding: 0;
      position: absolute;
      width: calc(100% - 2px);
      height: 285px;
      overflow-x: hidden;
      overflow-y: scroll;
      background-color: #f7f7f7;
      border: #ededed 1px solid;
      margin-top: -287px;
      margin-bottom: 0;

      li {
        background: none;
        font-size: 14px;
        padding: 0;
        z-index: 1000;
        line-height: 26px;
        height: 26px;

        a {
          font-size: 14px;
          text-decoration: none;
          text-align: left;
          margin: 0;
          padding-left: 10px;
          font-weight: normal;
          line-height: 26px;
          display: block;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          height: 26px;

          &:visited {
            color: #333333;
          }

          &:link {
            color: #333333;
          }
        }

        &:hover {
          background: #E9E9E9;
        }
      }
    }

    & > span {
      border-color: #4E4E4E transparent transparent;
      border-width: 6px 6px 0;
      border-style: solid;
      width: 0;
      position: absolute;
      top: 0;
      right: 0;
      margin: 15px;

    }
  }

</style>
