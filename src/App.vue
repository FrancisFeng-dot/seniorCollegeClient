<template>
  <div id="app">
    <header class="header">
      <div class="bg-img"> <!--背景图片--> </div>
      <img src="./assets/logo.png"/>
      <p
        class="dialog-search">
        <el-input placeholder="请输入要查询的内容" v-model="searchKey">
          <i slot="suffix" class="el-input__icon el-icon-search"></i>
        </el-input>
      </p>
      <ul class="translation-font">
        <li>繁</li>
        <span>|</span>
        <li>简</li>
      </ul>
    </header>
    <menu class="nav">
      <router-link to="/" exact-active-class="_active">首页</router-link>
      <router-link to="">关于我们</router-link>
      <router-link to="/news" active-class="_active">新闻资讯</router-link>
      <router-link to="">党政建设</router-link>
      <router-link to="">分支机构</router-link>
      <router-link to="">老年教育</router-link>
      <router-link to="">社会责任</router-link>
      <router-link to="">信息公开</router-link>
      <router-link to="">在线服务</router-link>
    </menu>
    <router-view/>
    <footer class="website-description">
      <p>友情链接</p>
      <div>
        <a href="http://www.gov.cn" target="_blank">中国政府网站</a>
        | <a href="http://www.cncaprc.gov.cn/" target="_blank">全国老龄工作委员会</a>
        | <a href="http://www.cadf.org.cn/" target="_blank">中国老龄事业发展基金会</a>
        | <a href="http://www.moe.gov.cn/" target="_blank">教育部网站</a>
        | <a href="http://www.cncaprc.cn/" target="_blank">全国中老年网</a>
        | <a href="http://www.moa.gov.cn/sjzz/tuixiuganbu/lgbyd/" target="_blank">中国农业部老干部网</a>
        | <a href="http://www.mca.gov.cn/" target="_blank">中华人民共和国民政部</a>
        | <a href="" target="_blank">中国老年报</a>
        | <a href="" target="_blank">中央政委</a>
      </div>
      <div>
        地址：北京市朝阳区青年路113东院悦鑫园3号，邮政编码：100123 办公室电话：010-64211225 传真：010-64211225 电子邮箱：caua99@163.com
      </div>
      <div>
        本站最佳浏览效果：1024*768分辨率/建议使用Chrome浏览器或微软公司浏览器IE11以上
      </div>
    </footer>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
        return {
          searchKey: ''
        }
    }
  }
</script>

<style lang="scss">
  body {
    margin: 0;
    padding: 0;
    background:#f4f4f4;
  }

  #app {
    font-family: 'Microsoft Yahei', Microsoft YaHei, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .header {
    width: 1200px;
    height: 150px;
    padding: 0 calc((100% - 1200px) / 2);
    color: white;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position:relative;

    .bg-img {
      position: absolute;
      left: 0;
      top: 0;
      z-index: -1;
      width: 100%;
      height: 150px;
      background-image: url("./assets/header.png");
      background-repeat: no-repeat;
      background-size: 100% 100%;
      transform: scale(1);
      animation: bgScale 2s;
    }

    img {
      position: absolute;
      left: calc((100% - 1200px) / 2);
      top: 30px;
      width: 420px;
    }

    .dialog-search {
      width: 300px;
      border-radius: 20px;
      overflow: hidden;

      .el-icon-search {
        font-size: 18px;
        color: #4a4a4a;
      }
    }

    .translation-font {
      padding-left: 24px;
      list-style: none;
      font-size: 18px;
      line-height: 40px;
      color: #F1F1F1;
      letter-spacing: 0.51px;

      & > li {
        display: inline-block;
      }

      span {
        font-size: 14px;
        margin: 0 5px;
        vertical-align: bottom;
      }
    }
  }

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 calc((100% - 1200px) / 2);
    background: #8C0E01;
    width: 1200px;
    height: 60px;
    margin-top: -1px;
    margin-bottom: 0;

    span, a {
      opacity: 0.8;
      font-size: 18px;
      color: #EFEFEF;
      letter-spacing: 0.51px;

      &._active {
        opacity: 1;
        font-size: 18px;
        color: #FFFFFF;
        letter-spacing: 0.51px;
      }

      &:hover {
        opacity: 1;
      }
    }

    a {
      text-decoration: none;
    }

  }

  @keyframes bgScale {
    from {
      transform: scale(1.1);
    }
    to {
      transform: scale(1);
    }
  }

  .website-description {
    text-align: center;
    background: #4E252C;
    min-width: 1200px;
    height: 230px;
    padding-top: 45px;

    p {
      font-size: 16px;
      color: #E0E0E0;
      letter-spacing: 0.34px;
    }

    div {
      &:nth-child(2) {
        height: 60px;
        line-height: 60px;
        font-size: 14px;
        color: #C3C3C3;
        letter-spacing: 0.34px;
        margin-bottom: 15px;

        a {
          text-decoration: none;
        }

        a:link {
          color: #C3C3C3;
        }

        a:visited {
          color: #C3C3C3;
        }
      }

      &:nth-child(3) {
        font-size: 12px;
        color: #8F8F8F;
        letter-spacing: 0;
        line-height: 21px;
      }

      &:nth-child(4) {
        font-size: 12px;
        color: #8F8F8F;
        letter-spacing: 0;
        line-height: 21px;
      }


    }
  }
</style>
