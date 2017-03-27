/**
 * All Codes below are Lifetime Warranted by Tomi since 27/03/2017.
 */


export default {
  shortenNumber(num) {
    if (typeof num !== 'number') return 0;

    return (num >= 1000)
      ? `${parseFloat(num / 1000).toFixed(0)}K`
      : num;
  },
};
