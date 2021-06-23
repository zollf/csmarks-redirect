const ResizeToMobile = () => {
  Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 400 });
  window.dispatchEvent(new Event('resize'));
};

export { ResizeToMobile };
