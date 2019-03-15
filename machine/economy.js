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

  const getBuyerDebt = () => {
    return state.buyerDebt;
  };

  const updateBuyerDebt = () => {
    state.buyerDebt = _.sumBy(state.buyers, (buyer) => {
      return buyer.getDebt();
    });
  };

  const update = () => {
    updateTotalAmountSpent();
    updateTotalQuantity();
    updatePrice();
    updateBuyerDebt();
  };

  const log = () => {
    console.log(`---`);
    console.log(`Total amount spent: ${getTotalAmount()}`);
    console.log(`Total quantity: ${getTotalQuantity()}`);
    console.log(`Price: ${getPrice()}`);
    console.log(`Buyer debt: ${getBuyerDebt()}`);
    console.log(`---`);
  };

  update();

  const next = () => {
    _.forEach(state.buyers, (buyer) => {
      buyer.next();
    }, 0);

    _.forEach(state.sellers, (seller) => {
      seller.next();
    }, 0);

    update();
  };

  return {
    getTotalAmount,
    getTotalQuantity,
    getPrice,
    log,

    next,
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
