import { Constants } from 'expo';

const MAX_HEIGHT = 450;
const MIN_HEIGHT = Constants.statusBarHeight + 55;

module.exports = (scrollY) => {
  return {
    containerHeight: scrollY.interpolate({
      inputRange: [0, 250],
      outputRange: [MAX_HEIGHT, MIN_HEIGHT],
      extrapolate: 'clamp'
    }),
    opacity: scrollY.interpolate({
      inputRange: [0, 125],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    }),
    color: scrollY.interpolate({
      inputRange: [0, 1],
      outputRange: ['#16222A', '#f7f7f7'],
      extrapolate: 'clamp'
    })
  }
}
