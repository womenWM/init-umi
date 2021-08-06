import 'core-js/stable';
import 'regenerator-runtime/runtime';

/* eslint-disable import/first */
global.requestAnimationFrame =
  global.requestAnimationFrame ||
  function requestAnimationFrame(callback) {
    setTimeout(callback, 0);
  };

global.matchMedia = window.matchMedia = () => ({
  matches: false,
  addListener: () => { },
  removeListener: () => { },
});
