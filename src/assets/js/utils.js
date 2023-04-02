// prueba de restar fechas para obtener el x time ago  (time puede ser minutes, hours, days)
//const date1 = new Date("2023-03-31T16:45-03:00")
//const date2 = new Date("2016-07-28T16:45-03:00")

export function getDateTimeDifference(date1, date2) {

    // Asegurarse que son fechas
    let difDate1 = new Date(date1)
    let difDate2 = new Date(date2)

    // Convertir to UTC para tener en cuenta zonas horarias distintas
    const utc1 = Date.UTC(difDate1.getUTCFullYear(), difDate1.getUTCMonth(), difDate1.getUTCDate(), difDate1.getUTCHours(), difDate1.getUTCMinutes(), difDate1.getUTCSeconds());
    const utc2 = Date.UTC(difDate2.getUTCFullYear(), difDate2.getUTCMonth(), difDate2.getUTCDate(), difDate2.getUTCHours(), difDate2.getUTCMinutes(), difDate2.getUTCSeconds());

    //const utc1 = new Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate(), date1.getHours(), date1.getMinutes(), date1.getSeconds());
    //const utc2 = new Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate(), date2.getHours(), date2.getMinutes(), date2.getSeconds());

  
    // Diferencia en miliseconds
    const diff = Math.abs(utc2 - utc1);
  
    // Calcular days, minutes, and seconds
    let days = 0
    let minutes = 0
    let seconds = 0
    let unidad = "secs"
    
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    minutes = Math.floor((diff / (1000 * 60)) % 60);
    seconds = Math.floor((diff / 1000) % 60);
  
    // Resultado como un objeto, con el par (cantidad, unidad), donde unidad es days/minutes/seconds
    if (days > 0) {
        unidad = (days===1) ? "day" : "days"
        return {cantidad: days, unidad:unidad}
    }
    if (minutes > 0) {
        unidad = "min"
        return {cantidad:minutes, unidad:unidad}
    }

    return {cantidad:seconds, unidad: unidad}


  }