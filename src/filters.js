/**
 * All Codes below are Lifetime Warranted by Tomi since 27/03/2017.
 */


export default {
  shortenNumber(num) {
    if (typeof num !== 'number') return 0;

    if (num >= 1000) {
      if (num % 1000 === 0) {
        return `${parseInt(num / 1000, 10)}K`;
      }
      // in Chrome. to Precision will auto rounding. using string regex instead
      // return `${parseFloat(num / 1000).toPrecision(1)}K`;`
      const with1Decimals = (num / 1000).toString().match(/^-?\d+(?:\.\d)?/)[0];
      return parseFloat(with1Decimals);
    }

    return num;
  },
};
