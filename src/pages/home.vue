<template>
  <div>
    <div class="content">
      <div class="container">
        <h1 class="title" v-html="headerTitle"></h1>
        <section class="region1">
          <div class="swipes1" @mouseenter="swtichBt(true)" @mouseleave="swtichBt(false)">
            <div>
              <swiper :options="swiperOption1" v-if="swiperSlides.head">
                <swiper-slide v-for="(slide, index) in swiperSlides.head" :key="index">
                  <img :src="slide.image"/>
                  <div class="Carousel-title">
                    <h3> {{slide.title}}</h3>
                  </div>
                </swiper-slide>
                <div v-show="btSwitch" class="swiper-button-prev" slot="button-prev"></div>
                <div v-show="btSwitch" class="swiper-button-next" slot="button-next"></div>
                <div class="swiper-pagination" slot="pagination"></div>
              </swiper>
            </div>
          </div>
          <span class="division-line"></span>
          <div class="words">
            <div v-if="articles.block1">
              <Announcement :an-msg="articles.block1" custom="true"></Announcement>
            </div>
          </div>
        </section>
        <section class="region2">
          <span v-for="(item,index) in exhibitions" :key="index">
            <img :src="item.image"/>
          </span>
        </section>
        <section class="region3">
          <div class="about-us">
            <header>关于我们</header>
            <div>
              <article>
                中国老年大学协会是中华人民共和国民政部部属社团，业务由全国老龄工作委员会办公室主管，成立于1988年12月。中国老年大学协会英文译名China Association of the Universities
                For The Aged ( CAUA )，是组织全国各地老年大学（含地方老年大学协会和老年学校）开展协作与交流的全国性非营利社会组织，联系着全国7万多所老年大学和老年学校，
                800多万在校学员，以及参加远程教育的数百万学员
              </article>
            </div>
            <footer>
              <span class="word">协会概况</span>
              <span class="divide-line">|</span>
              <span class="word">协会领导</span>
              <span class="divide-line">|</span>
              <span class="word">组织机构</span>
              <span class="divide-line">|</span>
              <span class="word">协会章程</span>
            </footer>
          </div>
          <span class="division-line"></span>
          <div class="Carousel2">
            <section>
              <swiper :options="swiperOption2" v-if="swiperSlides.mid">
                <swiper-slide v-for="(slide, index) in swiperSlides.mid" :key="index">
                  <img :src="slide.image"/>
                </swiper-slide>
              </swiper>
            </section>
          </div>
          <span class="division-line"></span>
          <div class="entrance">
            <div class="buttons">
              <button class="register">会员申请</button>
              <button class="login">会员登录</button>
              <button>国际交流</button>
              <button>校长访谈</button>
              <button>学术研究</button>
              <button>谏言献策</button>
            </div>
          </div>
        </section>
        <section class="region4">
          <Announcement v-if="articles.block2" :an-msg="articles.block2"></Announcement>
          <span class="division-line"></span>
          <Announcement v-if="articles.block3" :an-msg="articles.block3"></Announcement>
          <span class="division-line"></span>
          <div class="swipes-qrCode">
            <header>
              <p :class="{active:!qrShow}" @mouseenter="showQR(false)">社会责任</p>
              <span>|</span>
              <p :class="{active:qrShow}" @mouseenter="showQR(true)">期刊杂志</p>
            </header>
            <div>
              <div v-show="!qrShow">
                <swiper :options="swiperOption3" v-if="swiperSlides.foot">
                  <swiper-slide v-for="(slide, index) in swiperSlides.foot" :key="index">
                    <img :src="slide.image"/>
                    <div class="Carousel-title"></div>
                  </swiper-slide>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                  <div class="swiper-pagination" slot="pagination"></div>
                </swiper>
              </div>
              <div v-show="qrShow" class="qrcode">
                <img src="../assets/qrcode.png"/>
                <p>扫码关注 老年早报</p>
                <p>每日为您提供最新资讯</p>
              </div>
            </div>
          </div>
        </section>
        <section class="region5">
          <div class="icon-title">
            <span>会</span>
            <span>员</span>
            <span>展</span>
            <span>示</span>
          </div>
          <div class="icon-list">
            <div class="icon-item" v-for="(item,index) in members" :key="index">
              <img :src="item.avatar"/>
              <div>{{item.nickname}}</div>
            </div>
          </div>
        </section>
        <section class="region6">
          <template v-for="(active,index) in activityData">
            <span v-if="index" class="division-line"></span>
            <Activity :ac-data="active"></Activity>
          </template>
        </section>
        <section class="region7" v-if="links">
          <span>会员单位链接</span>
          <related-links v-for="link in links" :key="link.title" :re-links="link"></related-links>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
  import Announcement from '@/components/home/Announcement'
  import Activity from "@/components/home/Activity";
  import Api from '@/api/homeApi';
  import RelatedLinks from "@/components/home/RelatedLinks";
  import linkage from '@/api/interLinkAge';

  export default {
    name: 'HomePage',
    components: {RelatedLinks, Activity, Announcement},
    data() {
      return {
        searchKey: '',
        headerTitle: null,
        articles: {},
        exhibitions: [],
        btSwitch: false,
        swiperOption1: {
          updateOnImagesReady: true,
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination',
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        swiperOption2: {
          updateOnImagesReady: true,
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          loop: true,
        },
        swiperOption3: {
          updateOnImagesReady: true,
          autoplay: {
            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        },
        swiperSlides: {},
        qrShow: false,
        activityData: [],
        members: [],
        links: []
      }
    },
    created: function () {
      Api.getTitle().then((data) => {
        this.headerTitle = data.data;
      });
      Api.getCarousels().then((data) => {
        this.swiperSlides = data.data;
      });
      Api.getArticles().then((data) => {
        this.articles = data.data;
      });
      Api.getMembers().then((data) => {
        this.members = data.data;
      });
      Api.getExhibitions().then((data) => {
        this.exhibitions = data.data;
      });
      this.links = linkage.links;
      this.activityData = linkage.actives;
    },
    methods: {
      showQR: function (bl) {
        this.qrShow = bl;
      },
      swtichBt: function (bl) {
        this.btSwitch = bl;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .content {
    .container {
      width: 1200px;
      margin: 0 auto;
      padding: 20px;
      box-sizing:border-box;

      .title {
        background: white;
        margin-bottom: 20px;
        margin-top: 0;
        font-size: 36px;
        color: #C52E0F;
        letter-spacing: 1px;
        text-align: center;
        line-height: 52px;
        padding: 30px 120px;
      }

      .region1 {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        height: 360px;

        .swipes1 {
          flex: 1;
          position: relative;
          background: white;

          & > div {
            position: absolute;
            width: 100%;

            .Carousel-title {
              position: absolute;
              bottom: 0;
              width: 100%;
              height: 24px;
              padding: 20px 0 10px;
              background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));

              & > h3 {
                margin: 0;
                padding-left: 20px;
                width: 70%;
                font-size: 18px;
                color: white;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
              }
            }

            img {
              width: 100%;
              height: 360px;
            }
          }

          .swiper-pagination {
            text-align: right;
            width: 97%;
          }
        }

        .words {
          background: white;
          flex: 1;
          overflow: hidden;

          & > div {
            padding: 30px 20px;
            height: 300px;
          }
        }

        .division-line {
          width: 20px;
        }
      }

      .region2 {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;

        & > span {
          width: 24%;

          img {
            width: 100%;
          }
        }

      }

      .region3 {
        display: flex;
        justify-content: space-between;
        background: white;
        height: 300px;
        padding: 30px 20px;
        margin-bottom: 20px;

        .division-line {
          width: 30px;
        }

        & > div {
          flex: 1;
        }


        .about-us {
          position: relative;
          border-width: 0;

          header {
            font-size: 20px;
            color: #C52E0F;
            letter-spacing: 0.57px;

          }

          div {
            height: 190px;
            border-top: 1px solid #DBDBDB;
            border-bottom: 1px dashed #E9E9E9;
            padding: 15px;
            margin-top: 15px;
            overflow: hidden;

            & > article {
              display: -webkit-box;
              -webkit-box-orient: vertical;
              -webkit-line-clamp: 7;
              overflow: hidden;
              font-size: 16px;
              color: #3A3A3A;
              text-align: justify;
              line-height: 29px;
              text-indent: 32px;
            }
          }

          footer {
            position: absolute;
            bottom: 5px;
            width: 100%;
            display: flex;
            justify-content: space-between;
            font-size: 16px;
            color: #3A3A3A;
            letter-spacing: 0.46px;

            & > .word {
              &:hover {
                color: #C52E0F;
              }
            }

            & > .divide-line {
              color: #dbdbdb;
            }
          }
        }

        .Carousel2 {
          position: relative;

          & > section {
            position: absolute;
            width: 100%;
            height: 100%;

            img {
              height: 300px;
              width: 100%;
            }

          }
        }

        .entrance {
          border: 1px solid #E9E9E9;

          & > .buttons {
            height: 260px;
            margin: 20px;
            flex: 1;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;

            button {
              width: 150px;
              background: #E9E9E9;
              height: 54px;
              font-size: 18px;
              color: #3A3A3A;
              letter-spacing: 0.51px;
              border: 0;

              &:hover {
                background: #C52E0F;
                color: white;
              }
            }

            .register {
              width: 100%;
              background: #C52E0F;
              ont-family: PingFangSC-Semibold;
              font-size: 20px;
              color: #FFFFFF;
              letter-spacing: 0.57px;

              &:hover {
                background: #A6280E;
              }
            }

            .login {
              width: 100%;
              background: #F95F17;
              ont-family: PingFangSC-Medium;
              font-size: 20px;
              color: #FFFFFF;
              letter-spacing: 0.57px;

              &:hover {
                background: #DB5415;
              }
            }
          }


        }
      }

      .region4 {
        height: 350px;
        padding: 30px 20px;
        margin-bottom: 20px;
        background: white;
        display: flex;
        justify-content: space-between;

        .division-line {
          width: 30px;
        }

        & > div {
          flex: 1;
        }

        .swipes-qrCode {
          position: relative;

          header {
            display: flex;
            font-size: 20px;
            color: #888888;
            letter-spacing: 0.57px;
            margin-bottom: 20px;
            padding-left: 16px;
            border-bottom: 1px solid #DBDBDB;

            p {
              margin: 0 0 -1.5px;
              padding-bottom: 15px;


              &.active {
                color: #C52E0F;
                border-bottom: 2px solid #C52E0F;
              }
            }

            & > span {
              color: #BDBDBD;
              margin: 0 14px 0 16px;
              vertical-align: text-bottom;
            }


          }

          & > div {
            position: absolute;
            width: 100%;

            & > :nth-child(1) {
              img {
                width: 100%;
                height: 285px;
              }

              .Carousel-title {
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 24px;
                padding: 10px 0;
                background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.6));
              }
            }

            .qrcode {
              text-align: center;

              p {
                margin: 5px;
                color: #3A3A3A;
                font-size: 14px;
              }
            }
          }
        }
      }

      .region5 {
        position: relative;
        height: 190px;
        margin-bottom: 20px;

        .icon-title {
          position: absolute;
          background: #DCDCDC;
          left: 0;
          width: 70px;
          height: 100%;
          font-size: 20px;
          color: #D23838;
          text-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .icon-list {
          margin-left: 70px;
          height: 130px;
          display: flex;
          padding: 30px 20px;
          background: white;
          justify-content: space-around;
          align-items: center;

          .icon-item {
            width: 15%;
            text-align: center;

            img {
              width: 60%;
            }

            & > div {
              font-size: 13px;
              color: #3A3A3A;
              letter-spacing: 0.37px;
              margin-top: 10px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
          }
        }
      }

      .region6 {
        height: 330px;
        background: white;
        padding: 30px 20px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;

        .division-line {
          width: 20px;
        }

        div {
          flex: 1;
        }
      }

      .region7 {
        position: relative;
        padding-left: 150px;
        display: flex;
        align-items: center;
        height: 44px;
        margin-bottom: 20px;
        justify-content: space-between;

        & > span {
          position: absolute;
          top: 9px;
          left: 0;
          font-size: 20px;
          color: #616161;
          letter-spacing: 0.34px;
          text-align: center;
        }
      }

    }
  }

</style>

<style>


  .content .swiper-pagination-bullet {
    background: #D8D8D8;
    opacity: 1;
  }

  .content .swiper-pagination-bullet-active {
    background: #860202 !important;
  }


  .content .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets {
    bottom: 12px;
    padding-right: 10px;
  }

  .content .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    background-image: url("../assets/leftarrow.png");
  }

  .content .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    background-image: url("../assets/rightarrow.png");
  }

</style>
