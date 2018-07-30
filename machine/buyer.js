const _ = require('lodash');

const DEFAULT_BUYER = {
  money: 0,
  credit: 0,
  totalAmountSpent: 0,
};

const Buyer = (state) => {
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

module.exports = {
  Buyer,
};
