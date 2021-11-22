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

//object assignment example

// let per1 = { id: 1, name: 'Joe' };

// //per1 is an object variable,

// //store memory address that points to object properties

// let per2 = per1;



// doSomething(per2); //hoisting, use only var scope



// function doSomething(p) {

//   //p=per2  (memory address of per2 to p)

//   p.name = 'Mary'; //pers2.name='Mary'

// }

// console.log(per1);

// per2.id = 3;

// console.log(per1);



// //primitive assignment example

// let num1 = 10; //num1 is  a primitive variable, store value 10

// let num2 = num1; //num2=10

// doSomething(num2);

// function doSomething(num) {

//   //num=num2=10

//   num = 20; //num=20

// }

// console.log(num1); //num1=10

// console.log(num2); //num2=10



// // -------------------------------------------------------------------------------

// let arr1 = [];
// console.log(typeof arr1);

// arr1 = [5, 2, 10, 'student']; //untyped & unsized

// console.log(arr1.length);
// console.log(arr1[0]);
// console.log(arr1[arr1.length - 1]);
// console.log(arr1[arr1[1]]);
// // -------------------------------------------------------------------------------
// let arr3 = [
//     // [(0,0) 1, (0,1) 3, (0,2) 5, (0,3) 7],
//     // [(1,0)2, (1,1) 4, (1,2)6,  (1,3) 8]

//     [1, 3, 5, 7],
//     [2, 4, 6, 8]
//   ]; 

// console.log(arr3[1][1]);
// // -------------------------------------------------------------------------------
// let arr2 = [
//     { id: 1, name: 'Adam' },
//     { id: 2, name: 'Joe' }
//   ];

// console.log(arr2[1].name);
// // -------------------------------------------------------------------------------
// let arr4 = [...arr3, 0.5, 100, ...arr2];

// console.log(arr4);

// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <title>Manipulating Elements</title>
//   </head>
//   <body>
//     <h2 id="h21">Heading level 2</h2>
//     <ul prog="programlang"></ul>
//     <ul id="u11" class="prog">
//       <li class="prog">JS</li>
//       <li class="prog">Java</li>
//     </ul>
//     <ul id="u12" class="prog"></ul>
//     <script src="script.js"></script>
//   </body>
// </html>

// const h21Ele = document.querySelector('#h21');
// console.log(h21Ele.textContent);
// console.log(h21Ele.firstChild);
// const ulEle = document.getElementById('u11');
// console.log(ulEle);
// console.log(ulEle.nodeType === Node.ELEMENT_NODE);
// console.log(ulEle.tagName);
// console.log(ulEle.childElementCount);
// console.log(ulEle.firstChild);
// console.log(ulEle.firstElementChild);
// console.log(ulEle.firstElementChild.nextElementSibling);
// const liU11Ele = document.getElementById('u11').getElementsByClassName('prog');
// console.log(liU11Ele);
// const ulAttr = document.getElementsByTagName('ul')[0].getAttributeNode('prog');
// console.log(ulAttr);
// console.log(ulAttr.nodeType === Node.ATTRIBUTE_NODE);
// const u11Ele = document.querySelector('#u11');
// console.log(u11Ele);
// const progEle = document.querySelectorAll('.prog');
// console.log(progEle);
// const htmlEle = document.querySelector('html');
// console.log(htmlEle.firstElementChild);