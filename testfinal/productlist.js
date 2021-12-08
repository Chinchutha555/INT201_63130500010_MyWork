import { Product } from "./product.js";
import { Cart } from "./cart.js";

let divproduct = document.querySelector("#product")
let cart = { items: [], totalPrice: 0, itemIdIncart: [], totalQty: 0 };
let countitemincart = document.getElementById('countitemincart') //countitemincart
countitemincart.textContent = cart.totalQty
let iconsearch = document.getElementById('iconsearch') //iconsearch
let formsearch = document.getElementById('formsearch') //formsearch
let searchvalue = document.getElementById('searchvalue')
let boolsearch = true;


divproduct.setAttribute('class' , 'row row-cols-md-3')

// countPriceEle.textContent = cart.totalPrice;


iconsearch.addEventListener('click',()=>{
    boolsearch = !boolsearch;

    if (boolsearch) {
        formsearch.style.visibility = "hidden"

    } else {
        formsearch.style.visibility = "visible"
        searchvalue.value = "";
    }

})



// searchvalue.addEventListener("keyup", () => {

//     let value = new RegExp(searchvalue.value, 'g')
//     list(Product)

//     Product.map((p) => {
//         if ((p.name.match(value) == null)) {
//             document.querySelector(`#searchvalue ${p.id}`)
//         }
//     })
// });

for (let p of Product){

    let divcard = document.createElement('div')
    divproduct.appendChild(divcard)
    divcard.setAttribute('class','col p-2')


    //set ชื่อid = product ใช้วน loop ให้ครบทุกตัว 
    let div = document.createElement("div")
    divcard.appendChild(div)
    div.setAttribute('id',p.id)
    div.setAttribute("class","card")

    //div ของ <img>
    let divimg = document.createElement('img')
    div.appendChild(divimg)
    divimg.setAttribute('src', `./img/${p.img}`);
    divimg.setAttribute("class","card-img-top mx-auto d-block")

    let divbody = document.createElement('div')
    div.appendChild(divbody)
    divbody.setAttribute('class','card-body')


    //div ของ <p>name
    let divname = document.createElement('h3')
    divbody.appendChild(divname)
    divname.innerHTML += `${p.name}`


    //div ของ <p>description
    let divdescription = document.createElement('p')
    divbody.appendChild(divdescription)
    divdescription.innerHTML += `${p.description}`

    //div ของ <p>price
    let divprice = document.createElement('p')
    divbody.appendChild(divprice)
    divprice.innerHTML += `Price : ${p.price}`

    //div ของ <p>stock
    let divstock = document.createElement('p')
    divbody.appendChild(divstock)
    divstock.innerHTML += `Stock : ${p.stock}`

    //button
    let centerbutton = document.createElement('div')
    divbody.appendChild(centerbutton)
    centerbutton.setAttribute("class","d-grid gap-2 d-sm-flex justify-content-sm-center")

    let button = document.createElement("button")
    button.setAttribute("class","btn btn-sm btn-outline-secondary btn-lg px-5")
    button.setAttribute('id',`${p.id}`)
    button.innerHTML = "AddToCart"
    centerbutton.appendChild(button)


    button.addEventListener("click",() => {
        if (!cart.itemIdIncart.includes(p.id)) {
            cart.itemIdIncart.push(p.id);
            cart.items.push({ Product: p , qty: 0 })
        }
        // cart.totalPrice = 0;
        cart.totalQty = 0
        cart.items.forEach((pc) => {
            pc.Product.id == p.id ? pc.qty++ : pc.qty;
            // cart.totalPrice += pc.Product.price * pc.qty;
            cart.totalQty += pc.qty;
        })
        alert(`${p.name} Price ${p.price} Bath Add To Cart Success!!!`)
        console.log(cart.items);
    })
}


