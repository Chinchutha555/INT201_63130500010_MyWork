// ทดสอบเปลี่ยนฟาเรนไฮต์ เป็น องศาเซลเซียส รันใน html
// function tocelsius(){
//     let fahrenheit = prompt("faren : ")
//     let value = (fahrenheit-32) * 5/9
//     document.getElementById("resultss").innerHTML = value.toFixed(2)+" cํ"
// }
// tocelsius()
// -------------------------------------------------------------------------------

// ทดสอบเปลี่ยนองศาเซลเซียส เป็น ฟาเรนไฮต์ รันใน html
// function tofah(){
//     let oc = 30
//     let value = (oc*(9/5)+32)
//     // document.getElementById("resultss").innerHTML = value
//     return value
// }
// console.log(tofah())
// -------------------------------------------------------------------------------

// ทดสอบเขียน function รันใน node
// function sayhello(){
//     return "hello"
// }
// console.log(sayhello())
// -------------------------------------------------------------------------------

// ทดสอบเขียนโปรแกรมหาค่า bmi รันใน node
// function getbmi(){
//     let weigth = 60
//     let height =160 / 100
//     return weigth / (height*height).toFixed(2)
// }
// console.log(getbmi())
// -------------------------------------------------------------------------------

// ทดสอบเขียนโปรแกรมคำนวนเกรด รันใน html
// let score = prompt("กรอกคะแนน : ")
// if (score >= 80) {
//     document.getElementById("result") .innerHTML = "you get A"
// }else if (score >=70) {
//     document.getElementById("result") .innerHTML = "you get B"
// }else if (score >=60) {
//     document.getElementById("result") .innerHTML = "you get C"
// }else if (score >=50) {
//     document.getElementById("result") .innerHTML = "you get D"
// }else (score < 50) 
//     document.getElementById("result") .innerHTML = "you get F"

// let qrt = prompt("กรอกจำนวนสินค้า")
// for (var i = 0; i < qrt; i++) {
//     console.log(i)
    
// }
// -------------------------------------------------------------------------------

// ทดสอบเขียนโปรแกรมหาราศีเกิด
// function rasri(year){
//     let cha = year % 12
//     switch(cha){
//         case 11:
//             cha ="sheep"
//             break;
//         case 10:
//             cha ="horse"
//             break;
//         case 9:
//             cha ="snake"
//             break;
//         case 8:
//             cha ="dragon"
//             break;
//         case 7:
//             cha ="rabbit"
//             break;
//         case 6:
//             cha ="tiger"
//             break;
//         case 5:
//             cha ="ox"
//             break;
//         case 4:
//             cha ="rat"
//             break;
//         case 3:
//             cha ="pig"
//             break;
//         case 2:
//             cha ="dog"
//             break;
//         case 1:
//             cha ="rooster"
//             break;
//         case 0:
//             cha ="monkey"
//             break;
    
//     }return cha
// }
// console.log(rasri(2002))
// -------------------------------------------------------------------------------

// let lotto_number = prompt("กรอกเลขที่ต้องการซื้อ")
// let result = Math.floor(Math.random()*1000) 
// document.getElementById("random").innerHTML = result
// // document.getElementById("lotto").innerHTML = lotto_number
// if (lotto_number == result) {
//     document.getElementById("result").innerHTML = "คุณถูกรางวัล"
// }else {
//     document.getElementById("result").innerHTML = "คุณไม่ถูกรางวัล"
// }

// let lotto_number = 33
// let result = Math.floor(Math.random()*1000) 

// console.log("เลขที่คุณซื้อคือ " + lotto_number)
// console.log("เลขที่ออกคือ " + result)

// if (lotto_number == result) {
//     console.log("คุณถูกรางวัล")
// }else {
//     console.log("คุณไม่ถูกรางวัล")
// }


// function guest(krok){
//     let soom = Math.floor(Math.random()*10+1)
//     console.log("เลขที่ออก : " + soom)
//     console.log("เลขที่สุ่ม : " + krok)

//     if (soom == krok) {
//         console.log("You WIN!")
//     }else if (krok>soom) {
//         console.log("Too High")
//     }else if (krok<soom) {
//         console.log("Too Low")
// }
// }
// guest(10)