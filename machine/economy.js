const _ = require('lodash');

const DEFAULT_ECONOMY = {
  buyers: [],
  sellers: [],
};

const Economy = (state) => {
  state = _.assign({}, DEFAULT_ECONOMY, state);

  const getTotalAmount = () => {
    return state.totalAmountSpent;
  };

  const updateTotalAmountSpent = () => {
    state.totalAmountSpent = _.reduce(state.buyers, (totalAmountSpent, buyer) => {
      return totalAmountSpent + buyer.getTotalAmount();
    }, 0);
  };

  const getTotalQuantity = () => {
    return state.totalQuantity;
  };

  const updateTotalQuantity = () => {
    state.totalQuantity = _.reduce(state.sellers, (totalQuantity, seller) => {
      return totalQuantity + seller.getQuantity();
    }, 0);
  };

  const getPrice = () => {
    return state.price;
  };

  const updatePrice = () => {
    state.price = state.totalAmountSpent / state.totalQuantity;
  };

  const update = () => {
    updateTotalAmountSpent();
    updateTotalQuantity();
    updatePrice();
  };

  update();

  return {
    getTotalAmount,
    getTotalQuantity,
    getPrice,
  };
};

module.exports = {
  Economy,
};
