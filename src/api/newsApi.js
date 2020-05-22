import http from './index'

export default {
  /*获取新闻资讯左边列表*/
  getNewsleftlist: function () {
    return http.get('/index/categoryList',{
    	'category_type':'news'
    })
  },
  /*获取新闻资讯右边列表*/
  getNewsrightlist: function (title) {
    return http.get('/index/articleList',{
    	'category_type':'news',
    	'category':title,
    	'start':0,
    	'limit':11
    })
  }
}
