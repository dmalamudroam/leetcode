//Initial Solution
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {

  let isHolding = false;
  let currentBuyPrice = 0;
  let currentSellPrice = 0;
  let totalProfit = 0;

  for (let i = 0; i < prices.length; i++) {
      if (prices[i + 1] > prices[i] && isHolding === false) {
          currentBuyPrice = prices[i];
          isHolding = true;
      }
      if (prices[i + 1] < prices[i] && isHolding === true) {
          currentSellPrice = prices[i];
          isHolding = false;
          totalProfit += currentSellPrice - currentBuyPrice;
      }
      if (i === prices.length - 1 && isHolding) {
          totalProfit += prices[i] - currentBuyPrice;
      }
  }

  return totalProfit;
};