import { Constants } from 'expo';

const MAX_HEIGHT = 450;
const MIN_HEIGHT = Constants.statusBarHeight + 65;
const SC_DISTANCE = MAX_HEIGHT - MIN_HEIGHT;

module.exports = (scrollY) => {
  return {
    topHeight: scrollY.interpolate({
      inputRange: [MAX_HEIGHT/2-55, SC_DISTANCE-55],
      outputRange: [MAX_HEIGHT/2, MIN_HEIGHT],
      extrapolate: 'clamp'
    }),
    bottomHeight: scrollY.interpolate({
      inputRange: [0, MAX_HEIGHT/2-55],
      outputRange: [MAX_HEIGHT/2, 55],
      extrapolate: 'clamp'
    }),
    iconColor: scrollY.interpolate({
      inputRange: [0, MAX_HEIGHT/2-55],
      outputRange: ['white', 'black'],
      extrapolate: 'clamp'
    }), 
    color: scrollY.interpolate({
      inputRange: [0, MAX_HEIGHT/2-55],
      outputRange: ['#16222A', 'white'],
      extrapolate: 'clamp'
    }),
  }
}
