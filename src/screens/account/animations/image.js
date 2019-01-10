const MAX_HEIGHT = 450;

module.exports = (scrollY) => {
  return {
    position: scrollY.interpolate({
      inputRange: [0, MAX_HEIGHT/2],
      outputRange: [140, 0],
      extrapolate: 'clamp'
    }),
    opacity: scrollY.interpolate({
      inputRange: [0, 125],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    }),
    height: scrollY.interpolate({
      inputRange: [125, 125],
      outputRange: [170, 0],
      extrapolate: 'clamp'
    })
  }
}
