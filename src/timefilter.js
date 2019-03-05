const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

createdAt = (d) => {
  const date = new Date(d);
  return `${month[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
}

messageCreateAt = (d) => {
  const date = new Date(d);
  const today = new Date();

  if (date.getDay() == today.getDay()){
    const hr = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
    const min = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
    return hr + ":" + min
  }
  else{
    return month[date.getMonth()] + " " + date.getDate()
  }
}

module.exports = {
  createdAt: createdAt,
  messageCreateAt: messageCreateAt
}
