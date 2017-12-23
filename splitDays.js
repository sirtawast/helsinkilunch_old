var str = "Maanantai\n- Maksalaatikko\n-Liverbox\nTurnipsikeitto\nTiistai\n- Maksalaatikko\n-Liverbox\nTurnipsikeitto\nKeskiviikko\n- Maksalaatikko\n-Liverbox\nTurnipsikeitto\n"
var days = [{text: "Maanantai"},{text: "Tiistai"},{text: "Keskiviikko"} ]
var strSliced = [];
days.forEach((d,i) => {
  
  d.startOf = str.indexOf(d.text)
  if(days[i+1]) {
    d.endOf = str.indexOf(days[i+1].text) -1
} else {
  d.endOf = str.length - 1;
  }
  strSliced.push(str.slice(d.startOf, d.endOf).split("\n"))
})

console.log(strSliced);