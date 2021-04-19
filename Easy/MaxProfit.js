/**
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
  let min = prices[0];
  let maxProfit = 0;

  prices.forEach((price) => {
      if (price < min) {
          min = price;
      }
      let profit = price - min;
      if (profit > maxProfit) {
          maxProfit = profit;
      }
  });

  return maxProfit;
};