import * as types from './mutation-types';
 const mutations = {
  [types.TEST_TYPE](state, todo) {
    state.test += todo;
  }
};

export default  mutations
