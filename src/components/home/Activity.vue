<template>
  <div class="Activity">
    <header>
      {{data.header}} <i class="el-icon-arrow-right"></i>
    </header>
    <div class="con-img">
      <img :src="data.img"/>
      <p>
        <span>{{data.titles[0]}}</span>
      </p>
    </div>
    <div>
      <ul>
        <li><h3>{{data.titles[1]}}</h3></li>
        <li><h3>{{data.titles[2]}}</h3></li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Activity",
    props: ['acData'],
    data() {
      return {
        data: this.acData || {}
      }
    }
  }
</script>

<style lang="scss" scoped>
  .Activity {
    overflow: hidden;

    header {
      font-size: 22px;
      color: #D23838;
      letter-spacing: 0.47px;
      margin-bottom: 20px;

      i {
        font-weight: bold;
      }
    }

    .con-img {
      position: relative;
      overflow: hidden;
      cursor: pointer;
      font-size: 0;
      height: 180px;

      & > img {
        width: 100%;
        top: 0;
        position: relative;
        left: 0;
        transition: transform 0.3s;

        &:hover {
          transform: scale(1.1);
        }
      }

      & > p {
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;

        & > span {
          display: block;
          margin: 10px 40px 10px 10px;
          font-size: 18px;
          color: white;
          letter-spacing: 0;
          line-height: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }

      }
    }

    ul {
      margin: 0;
      padding: 0 20px 0 25px;
      background: #F4F4F4;
      color: #d8d8d8;

      li {
        position: relative;
        height: 49px;
        line-height: 49px;

        &:first-child {
          border-bottom: 1px dashed #DCDCDC;
        }

        h3 {
          position: absolute;
          top: 0;
          margin: 0;
          padding: 10px 10px 10px 0;
          font-size: 16px;
          font-weight: normal;
          color: #242424;
          line-height: 30px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;

          &:hover{
            color: #C52E0F;
          }
        }
      }
    }
  }

</style>
