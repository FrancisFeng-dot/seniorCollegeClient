import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router);

const router = new Router({
  routes: [{
      path: '/',
      name: 'HomePage',
      component: resolve => require(['@/pages/home'], resolve)
    },
    // {
    //   path: '/about',
    //   name: 'AboutPage',
    //   component: () => ({
    //     component: import ('@/pages/about'),
    //     loading: 'loadingcomponent',
    //     error: 'errorcomponet',
    //     delay: 200,
    //     timeout: 3000
    //   })
    // }
    {
      path: '/news',
      name: 'NewsPage',
      component: () =>
        import ('@/pages/news'),
      beforeEnter: (to, from, next) => {
        console.log('beforeEnter');
        next();
      },
      redirect: '/news/0',
      children: [{
        path: ':menu',
        component: () =>
          import ('@/components/news/NewsMenu'),
        props: true
      }, {
        path: ':menu/:articletitle',
        component: () =>
          import ('@/components/news/NewsContent'),
        props: true
      }]
    }
  ]
});

router.beforeEach((to, from, next) => {
  console.log('beforeEach');
  next();
  // if (process.env.NODE_ENV === 'development' || to.path === '/') {
  //   next();
  // } else {
  //   /*线上环境暂时不允许访问除首页外*/
  // }
});
router.beforeResolve((to, from, next) => {
  console.log('beforeResolve');
  next();
})
router.afterEach((to, from) => {
  console.log('afterEach');
});

export default router