export const bindRenderEvent = (elem: { dispatchEvent: (arg0: Event) => void }): void => {
  const event = new CustomEvent('render', {
    bubbles: true,
    cancelable: false,
  });
  elem.dispatchEvent(event);
};
