// ทดสอบเขียนโปรแกรมหาค่า bmi 
function getbmi(){
    let weigth = 60
    let height =160 / 100
    return weigth / (height*height).toFixed(2)
}
console.log(getbmi())