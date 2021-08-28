// ทดสอบเขียนโปรแกรมหาค่า bmi 
function getbmi(weigth){
    // let weigth = 56
    let height = 160 / 100
    return weigth / (height*height).toFixed(2)
}
console.log(getbmi(55))