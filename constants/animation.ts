export const onScreenVariants = {
  offscreenLeft: {
    x: '40vw',
  },
  offscreenRight: {
    x: '-40vw',
  },
  onscreen: {
    x: '0vw',
    transition: {
      bounce: 0.2,
      duration: 1,
      type: 'spring',
    },
  },
};
