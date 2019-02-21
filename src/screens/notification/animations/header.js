module.exports = (target, width) => {
  return {
    fadeIn: target.interpolate({
      inputRange: [(width - 102)/2, (width - 102)],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    }),
    fadeOut: target.interpolate({
      inputRange: [50, (width - 102)/3],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    }),
  }
}
