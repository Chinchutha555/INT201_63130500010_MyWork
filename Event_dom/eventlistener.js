let div = document.getElementById("first")

//select
let select = document.createElement('select')
select.setAttribute("name"," ")
select.setAttribute("id","course")
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

//-------------------------------------------------------------------

let course = document.getElementById('course')
course.addEventListener('change',getcourse)
display.addEventListener('display',getcourse)
function getcourse(){
    console.log(course.value)
    display.innerHTML = course.value
}



//button
let botton = document.createElement('button')
botton.innerHTML="Click"
botton.setAttribute("id","btn")
div.appendChild(botton)

//-------------------------------------------------------------------
let botton1 = document.querySelector('#btn')
botton1.addEventListener('click',
function event(){
    alert("Click !!!!!!")
})

//onfocus - onblur
let input = document.createElement('input')
input.setAttribute("type","text")
input.setAttribute("placeholder","ป้อนชื่อของคุณ")
div.appendChild(input)

let text = document.querySelector('input')
text.setAttribute('type','fff')
text.addEventListener('focus',  
function event(color){
color.target.style.background="red"
})
text.addEventListener('blur',  
function event(color){
color.target.style.background="pink"
})


let botton11 = document.createElement('button')
botton11.innerHTML="Click"
botton11.setAttribute("id","btn")
div.appendChild(botton11)

let getbut = document.querySelector('#btn')
getbut.setAttribute("id","sss")

getbut.addEventListener('click',
function event(){

})

// let icon = document.querySelector('#icon')
// let input = document.getElementById('hide')

// input.style.display='none'

// icon.addEventListener('click',

// // function hideform(){
// //     input.style.display='none'
// // },

// function showform(){
//     input.style.display='block'
// })


// let course = document.getElementById('course')
// course.addEventListener('change',getcourse)
// display.addEventListener('display',getcourse)
// function getcourse(){
//     console.log(course.value)
//     display.innerHTML = course.value
// }


