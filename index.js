const _ = require('lodash');

const Buyer = require('./machine/buyer.js');
const Seller = require('./machine/seller.js');
const Economy = require('./machine/economy.js');

const buyer1 = Buyer.create({ money: 25, credit: 75 });
const buyer2 = Buyer.create({ money: 24, credit: 6 });

const seller = Seller.create({ quantity: 20 });

const economy = Economy.create({
  buyers: [buyer1, buyer2],
  sellers: [seller]
});

console.log(economy.getTotalAmount(), economy.getTotalQuantity(), economy.getPrice());

const randomEconomy = Economy.create({
  buyers: [Buyer.random(), Buyer.random()],
  sellers: [Seller.random()]
});

console.log(randomEconomy.getTotalAmount(), randomEconomy.getTotalQuantity(), randomEconomy.getPrice());

const secondRandomEconomy = Economy.random({
  buyers: [Buyer.random(), Buyer.random()],
  sellers: [Seller.random()]
});

console.log(secondRandomEconomy.getTotalAmount(), secondRandomEconomy.getTotalQuantity(), secondRandomEconomy.getPrice());
