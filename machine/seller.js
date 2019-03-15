const _ = require('lodash');

const DEFAULT_SELLER = {
  quantity: 0,
};

const create = (state) => {
  state = _.assign({}, DEFAULT_SELLER, state);

  const getQuantity = () => {
    return state.quantity;
  };

  const setQuantity = (quantity) => {
    state.quantity = quantity;
  };

  const next = (min = 1, max = 1000) => {
    state.quantity = _.random(1, 100);
  };

  return {
    getQuantity,
    setQuantity,

    next,
  };
};

const random = () => {
  const quantity = _.random(1, 100);

  return create({ quantity });
};

module.exports = {
  create,
  random,
};
