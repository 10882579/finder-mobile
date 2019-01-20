module.exports = (target) => {
  return {
    width: target.interpolate({
      inputRange: [0, 100],
      outputRange: [190, 120],
      extrapolate: 'clamp'
    }),
    height: target.interpolate({
      inputRange: [0, 100],
      outputRange: [150, 90],
      extrapolate: 'clamp'
    }),
    logoSize: target.interpolate({
      inputRange: [0, 100],
      outputRange: [140, 90],
      extrapolate: 'clamp'
    }),
    opacity: target.interpolate({
      inputRange: [0, 100],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    }),
  }
}
