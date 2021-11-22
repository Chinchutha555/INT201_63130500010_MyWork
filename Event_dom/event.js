// let body = document.querySelector("body")
// body.setAttribute("onload","welcome()")

let div = document.querySelector("#first")

let p = document.createElement('p')
div.appendChild(p)
p.innerHTML="กว่าจะเข้าได้นะจ๊ะ"

let label = document.createElement('label')
label.setAttribute("for","")
label.innerHTML=`กรุณากรอกชื่อ!!!!!<br><br>`

//onfocus - onblur
let input = document.createElement('input')
input.setAttribute("type","text")
input.setAttribute("placeholder","ป้อนชื่อของคุณ")
input.setAttribute("onfocus","hightlight(this)")
input.setAttribute("onblur","unhightlight(this)")

div.appendChild(label)
div.appendChild(input)

let label1 = document.createElement('label')
label1.setAttribute("for","")
label1.innerHTML=`<br><br>กรุณาเลือกวิชา<br><br>`
div.appendChild(label1)

//select
let select = document.createElement('select')
select.setAttribute("name"," ")
select.setAttribute("id","course")
select.setAttribute("onchange","getcourse()")
div.appendChild(select)

let option = document.createElement('option')
let option1 = document.createElement('option')
let option2 = document.createElement('option')
option.setAttribute("value","JavaScript")
option.innerHTML="Javascript"

option1.setAttribute("value","Java")
option1.innerHTML="Java"

option2.setAttribute("value","R")
option2.innerHTML="R"

select.appendChild(option)
select.appendChild(option1)
select.appendChild(option2)

let display = document.createElement('p')
display.setAttribute("id","display")
div.appendChild(display)

//onmouseover - onmouseout
let a = document.createElement('a')
a.setAttribute("href"," ")
a.setAttribute("onmouseover","hightlight(this)")
a.setAttribute("onmouseout","unhightlight(this)")
div.appendChild(a)

a.innerHTML="SIT"

//------------------------------------------------------------------
// onfocus  โฟกัสเช่นคลิกแล้วเปลี่ยนสี         -> select , text, textarea
// onblur   ไม่โฟกัสเช่นคลิกแล้วเปลี่ยนสี       -> select , text, textarea
// onchange เปลี่ยนแปลงค่า form รับข้อมูล     -> select , text, textarea
// onselect ใช้เม้าส์ลากในช่องข้อความ         -> text, textarea
// onsubmit คลิกปุ่ม submit                -> form
// onmouseover  ถูกเลื่อนเม้าส์ไปทับ          -> a , div
// onmouseout   ถูกเลื่อนเม้าส์ที่ทับออกไป      -> a , div
// onclick  obj ถูกคลิก                   -> a , button , checkbox , radio , reset , submit
// onload   โหลกเอกสารเสร็จ               -> body
// onunload ยกเลิกการโหลด                ->  body

// let messagee = document.createElement('input')
// messagee.setAttribute("id","message")
// div.appendChild(messagee)

// let pp = document.createElement('p')
// pp.setAttribute("id","display")
// div.appendChild(pp)

// let message = document.querySelector('#message')
// let display = document.querySelector('#display')
// message.setAttribute("placeholder","ป้อนชื่อของคุณ")
// // message.setAttribute("onfocus","hightlight(this)")

// message.addEventListener('input', function () {
// display.textContent = this.value; 

// }); 
