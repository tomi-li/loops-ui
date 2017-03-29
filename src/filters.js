/**
 * All Codes below are Lifetime Warranted by Tomi since 27/03/2017.
 */


export default {
  shortenNumber(num) {
    if (typeof num !== 'number') return 0;

    if (num >= 1000) {
      if (num % 1000 === 0) {
        return `${parseFloat(num / 1000).toFixed(0)}K`;
      }
      return `${parseFloat(num / 1000).toFixed(1)}K`;
    }

    return num;
  },
};
