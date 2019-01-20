module.exports = (target) => {
  return {
    logoFadeIn: target.interpolate({
      inputRange: [0, 250],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    }),
    logoPosition: target.interpolate({
      inputRange: [0, 250],
      outputRange: [0, 10],
      extrapolate: 'clamp'
    }),
    loginFadeIn: target.interpolate({
      inputRange: [200, 500],
      outputRange: [0, 1],
      extrapolate: 'clamp'
    }),
    loginPosition: target.interpolate({
      inputRange: [200, 500],
      outputRange: [0, 10],
      extrapolate: 'clamp'
    }),
  }
}
