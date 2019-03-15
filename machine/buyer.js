const _ = require('lodash');

const DEFAULT_BUYER = {
  money: 0,
  credit: 0,
  totalAmountSpent: 0,
  
  debt: 0,
};

const create = (state) => {
  state = _.assign({}, DEFAULT_BUYER, state);

  const update = () => {
    state.totalAmountSpent = state.money + state.credit;
    state.debt += state.credit;
  };

  const getTotalAmount = () => {
    return state.totalAmountSpent;
  };

  const getDebt = () => {
    return state.debt;
  };

  const next = (min = 1, max = 1000) => {
    state.money = _.random(min, max);
    state.credit = _.random(min, max);

    update();
  };

  update();

  return {
    getTotalAmount,
    getDebt,

    next,
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
