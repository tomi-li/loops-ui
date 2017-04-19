/* eslint-disable no-param-reassign */
export default (Vue) => {
  Vue.directive('lo-affix', (el, bindings) => {
    const originalMarginTop = el.style.marginTop;
    window.addEventListener('scroll', () => {
      if (window.scrollY > bindings.value) {
        if (el.style.position === 'fixed') return;
        el.style.position = 'fixed';
        el.style.marginTop = 0;
      } else {
        if (el.style.position === 'relative') return;
        el.style.position = 'relative';
        el.style.marginTop = originalMarginTop;
      }
    });
  });
};
