// ทดสอบเขียนโปรแกรมหาค่า bmi 
function getbmi(weigth , height){
    // let weigth = 56
    // let height = 160 / 100
    return weigth / (height*height)
}
console.log(getbmi(55,160/100).toFixed(2))