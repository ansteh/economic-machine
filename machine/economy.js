const _ = require('lodash');

const Buyer = require('./buyer.js');
const Seller = require('./seller.js');

const DEFAULT_ECONOMY = {
  buyers: [],
  sellers: [],
};

const create = (state) => {
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

const random = () => {
  const buyers = _.map(_.range(10), index => Buyer.random());
  const sellers = _.map(_.range(10), index => Seller.random());

  return create({ buyers, sellers });
};

module.exports = {
  create,
  random,
};
