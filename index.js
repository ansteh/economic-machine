const _ = require('lodash');

const { Buyer } = require('./machine/buyer.js');
const { Seller } = require('./machine/seller.js');
const { Economy } = require('./machine/economy.js');

const buyer1 = Buyer({ money: 25, credit: 75 });
const buyer2 = Buyer({ money: 24, credit: 6 });

const seller = Seller({ quantity: 20 });

const economy = Economy({
  buyers: [buyer1, buyer2],
  sellers: [seller]
});

console.log(economy.getTotalAmount(), economy.getTotalQuantity(), economy.getPrice());
