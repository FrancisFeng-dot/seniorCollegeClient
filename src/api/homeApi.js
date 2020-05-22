import http from './index'

export default {
  /*获取首页的主标题*/
  getTitle: function () {
    return http.get('/index/title')
  },
  /*获取展示的4个展示图片*/
  getExhibitions: function () {
    return http.get('/index/exhibition')
  },
  /*获取3个轮播区域的集合*/
  getCarousels: function () {
    return http.get('/index/carousel')
  },
  /*获取文章列表*/
  getArticles: function () {
    return http.get('/index/article')
  },
  /*获取会员列表*/
  getMembers: function () {
    return http.get('/index/members')
  }
}
