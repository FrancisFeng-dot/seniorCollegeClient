const getters = {
  doneTest: (state, getters) => {
    return {
      value: state.test,
      type: getters.dataType
    };
  },
  dataType: (state) => {
    return typeof state.test;
  }
};

export default getters
