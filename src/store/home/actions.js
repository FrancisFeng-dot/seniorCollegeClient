import * as types from './mutation-types';

const actions = {
  addTest({commit}, todo) {
    commit(types.TEST_TYPE, todo)
  }
};

export default actions
