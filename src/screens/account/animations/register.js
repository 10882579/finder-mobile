module.exports = (target, height) => {
  return {
    opacity: target.interpolate({
      inputRange: [0, height/2],
      outputRange: [1, 0],
      extrapolate: 'clamp'
    }),
    fadeIn: target.interpolate({
      inputRange: [height - 200, height],
      outputRange: [0,1],
      extrapolate: 'clamp'
    })
  }
}
