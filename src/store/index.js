import Vue from 'vue';
import Vuex from 'vuex';
import moduleHome from './home/index'
import moduleNews from './news/index'
import createPersistedState from "vuex-persistedstate"

Vue.use(Vuex);
/*线上环境不允许调试修改state*/
const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
  modules: {
    Home:moduleHome,
    News:moduleNews
  },
  plugins:[createPersistedState({
  	storage:window.sessionStorage,
  	reducer(val){
  		return {
  			'News':val.News
  		}
  	}
  })],
  strict: debug
})
