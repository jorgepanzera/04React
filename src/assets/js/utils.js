// prueba de restar fechas para obtener el x time ago  (time puede ser minutes, hours, days)
const date1 = new Date("2016-07-27T16:45-03:00")
const date2 = new Date("2016-07-28T16:45-03:00")
let diff = date2-date1
console.log(diff)
var minutes = Math.floor(diff / 60000);
var seconds = ((diff % 60000) / 1000).toFixed(0);
var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
console.log(minutes)
console.log(seconds)
console.log(hours)