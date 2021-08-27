// ทดสอบเปลี่ยนฟาเรนไฮต์ เป็น องศาเซลเซียส

function tocelsius(){
    let fahrenheit = 40
    let value = (fahrenheit-32) * 5/9 
    // document.getElementById("resultss").innerHTML = value.toFixed(2)+" cํ"
    return value
}
console.log(tocelsius().toFixed(2))