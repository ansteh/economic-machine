const _ = require('lodash');

const DEFAULT_SELLER = {
  quantity: 0,
};

const Seller = (state) => {
  state = _.assign({}, DEFAULT_SELLER, state);

  const getQuantity = () => {
    return state.quantity;
  };

  const setQuantity = (quantity) => {
    state.quantity = quantity;
  };

  return {
    getQuantity,
    setQuantity,
  };
};

module.exports = {
  Seller,
};
