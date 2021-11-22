import { product } from "./product.js";

let productip = document.querySelector("#product-list")
productip.setAttribute('class','row row-cols-md-3 ')

for (let x of product){

//div proid 01,02,03

let divcard = document.createElement('div')
productip.appendChild(divcard)
divcard.setAttribute('class','col p-2')

let divbodyip = document.createElement('div')
divcard.appendChild(divbodyip)

divbodyip.setAttribute('id', x.id )
divbodyip.setAttribute('class','card')

//---------------------------------------------

//เพิ่มรูปภาพไว้บน div proid
let imgg = document.createElement('img')
imgg.setAttribute("src",x.img)
imgg.setAttribute("class","card-img-top mx-auto d-block")

divbodyip.appendChild(imgg)

//---------------------------------------------

// div ใน proid ==id,name,des

let divbody = document.createElement('div')
divbody.setAttribute('class' , 'card-body')
divbodyip.appendChild(divbody)

//---------------------------------------------

// divbody h5,p 

let h5 = document.createElement('h5')
h5.innerHTML = x.name
h5.setAttribute('class','card-title')
divbody.appendChild(h5)

let p = document.createElement('p')
p.innerHTML += `${x.id} <br>`
p.innerHTML += `${x.description} <br>`
p.innerHTML += `${x.price} <br>`
p.innerHTML += `${x.stock} <br>`
divbody.appendChild(p)

let button = document.createElement("button")
button.setAttribute("class","btn btn-sm btn-outline-secondary")
button.innerHTML = "Add"
divbody.appendChild(button)

//---------------------------------------------

}

let chbg = document.querySelector('body')
chbg.setAttribute('class','sasss')

chbg.addEventListener('click',function(){
    chbg.style.backgroundColor='#2F4F4F'
})