import { Constants } from 'expo';
import { Dimensions } from 'react-native';
const { width } = Dimensions.get('window');


const MAX_HEIGHT = 450;
const MIN_HEIGHT = Constants.statusBarHeight + 65;
const SC_DISTANCE = MAX_HEIGHT - MIN_HEIGHT;
const COMP_WIDTH = width - 120;

module.exports = (scrollY) => {

  const scale = scrollY.interpolate({
    inputRange: [0, MAX_HEIGHT/2-55, SC_DISTANCE-55],
    outputRange: [170, 100, 50],
    extrapolate: 'clamp'
  })

  return {
    position: {
      top: scrollY.interpolate({
        inputRange: [0, MAX_HEIGHT/2-55],
        outputRange: [140, Constants.statusBarHeight],
        extrapolate: 'clamp'
      }),
    },
    scale: {
      width: scale,
      height: scale,
      padding: scrollY.interpolate({
        inputRange: [0, MAX_HEIGHT/2-55],
        outputRange: [10, 0],
        extrapolate: 'clamp'
      }),
      left: scrollY.interpolate({
        inputRange: [0, MAX_HEIGHT/2-55, SC_DISTANCE-55],
        outputRange: [COMP_WIDTH/2 - 85, COMP_WIDTH/2 - 50, 0],
        extrapolate: 'clamp'
      }),
    },
    nameScale: scrollY.interpolate({
      inputRange: [0, MAX_HEIGHT/2-55],
      outputRange: [22, 18],
      extrapolate: 'clamp'
    }),
    namePosition: scrollY.interpolate({
      inputRange: [0, MAX_HEIGHT/2-55, SC_DISTANCE-55],
      outputRange: [175, 105, 5],
      extrapolate: 'clamp'
    }),
    opacity: scrollY.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    }),
    fadeOut: scrollY.interpolate({
      inputRange: [MAX_HEIGHT/2-55, SC_DISTANCE-100],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    }),
  }
}
