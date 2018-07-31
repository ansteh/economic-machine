const _ = require('lodash');

const DEFAULT_BUYER = {
  money: 0,
  credit: 0,
  totalAmountSpent: 0,
};

const create = (state) => {
  state = _.assign({}, DEFAULT_BUYER, state);

  const updateTotalAmountSpent = () => {
    state.totalAmountSpent = state.money + state.credit;
  };

  const getTotalAmount = () => {
    return state.totalAmountSpent;
  };

  updateTotalAmountSpent();

  return {
    getTotalAmount,
  };
};

const random = () => {
  const money = _.random(1, 1000);
  const credit = _.random(1, 1000);

  return create({ money, credit });
};

module.exports = {
  create,
  random,
};
