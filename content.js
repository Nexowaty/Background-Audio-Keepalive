Object.defineProperty(document, 'hidden', {
  get: function () { return false; },
  configurable: true
});

Object.defineProperty(document, 'visibilityState', {
  get: function () { return 'visible'; },
  configurable: true
});

const originalAddEventListener = document.addEventListener;
document.addEventListener = function (type, listener, options) {
  if (type === 'visibilitychange' || type === 'webkitvisibilitychange') {
    return;
  }
  return originalAddEventListener.call(document, type, listener, options);
};

window.addEventListener('visibilitychange', (e) => {
  e.stopImmediatePropagation();
}, true);

window.addEventListener('webkitvisibilitychange', (e) => {
  e.stopImmediatePropagation();
}, true);

window.addEventListener('blur', (e) => {
  e.stopImmediatePropagation();
}, true);

console.log('Background Audio Keepalive active: Visibility API mocked.');
