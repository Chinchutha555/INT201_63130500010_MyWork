// import { product } from "./project.js"

// const productlist = document.querySelector(".foodlist")

// for (const p of product) {

// const divfoodlist = document.createElement('div')
// divfoodlist.setAttribute('id',p.id)

// const ulfoodlist = document.createElement('p')

// // const name = document.createElement('li')
// // const description = document.createElement('li')
// // const price = document.createElement('li')
// // const stock = document.createElement('li')

// ulfoodlist.innerHTML += `<p>${p.name}</p>`
// ulfoodlist.innerHTML += `<p>${p.description}</p>`
// ulfoodlist.innerHTML += `<p>${p.price}</p>`
// ulfoodlist.innerHTML += `<p>${p.stock}</p>`

// divfoodlist.appendChild(ulfoodlist)
// productlist.appendChild(divfoodlist)

// // ulfoodlist.appendChild(name)
// // ulfoodlist.appendChild(description)
// // ulfoodlist.appendChild(price)
// // ulfoodlist.appendChild(stock)

// }

// import { product } from "./project.js"
// let foodlist = document.querySelector(".food-list");
// for (let p of product) {
//     let ele = document.createElement("div");
//     ele.setAttribute("id", p.id);
//     ele.setAttribute("class", "col")
//     let list = document.createElement("ul");
//     list.innerHTML += `<li><img src="${p.img}"></li>`
//     list.innerHTML += `<li>Name :${p.name}</li>`;
//     list.innerHTML += `<li>Description :${p.description}</li>`;
//     list.innerHTML += `<li>Price :${p.price}</li>`;
//     list.innerHTML += `<li>Stock :${p.stock}</li>`;
//     ele.appendChild(list)
//     foodlist.appendChild(ele);
// }


import { product } from "./project.js" //import product.js
let foodlist = document.querySelector("#food-list"); //ให้ foodlist เก็บค่า element ที่ชื่อว่า food-list 
for (let p of product) { //เปิด loop เพื่อเพิ่มlistอาหารอื่นๆ
    let ele = document.createElement("div"); //สร้าง div
    ele.setAttribute("id", p.id); //set id เป็น ตามเลข id ของแต่ละ obj นั้นๆ
    ele.setAttribute("class", "col-4") //set class เป็น col-4 
    let list = document.createElement("ul"); //สร้าง ul 
    list.setAttribute("class", "list-unstyled"); //set class เป็น list-unstyled

    //ให้ulเพิ่ม li โดยใช้ innerHTML ตามข้อมูลที่ใน Obj มี
    //ใช้ += เพื่อเก็บ stack แต่ละค่าไปเรื่อยๆ
    list.innerHTML += `<li><img src="${p.img}" class ="img-fluid rounded mx-auto d-block m-3"></li>`
    list.innerHTML += `<li class="fs-3">${p.name}</li>`;
    list.innerHTML += `<li>${p.description}</li>`;
    list.innerHTML += `<li><b>Price: ${p.price} THB. </b></li>`;
    list.innerHTML += `<li>Stock: ${p.stock}</li>`;
    ele.appendChild(list); //append เข้าใน list ("ul")
    foodlist.appendChild(ele); //append เข้าใน ele (div)
    let divBttn = document.createElement("div"); //สร้าง div
    divBttn.setAttribute("class", "cart"); //set class เป็น cart
    let buttn = document.createElement("button"); //สร้าง button
    buttn.setAttribute("class", "btn btn-success"); //set class เป็น btn btn-success
    buttn.setAttribute("onclick", "alertAdd()") //set onclick ให้ใช้ function ชื่อ alertAdd()
    buttn.textContent = "Add to cart"; //ให้ tag button มีข้อความข้างในว่า Add to cart 
    divBttn.appendChild(buttn);//append เข้าใน butt (button)
    ele.appendChild(divBttn);//append เข้าใน dibBttn (div)
}



// let icon = document.querySelector('#icon')
// let input = document.getElementById('hide')
// let search = document.getElementById('hidebtn')

// search.style.display='none'
// input.style.display='none'

// icon.addEventListener('click',
// function showform(){
//     input.style.display='block'
//     hidebtn.style.display='block'
// },
// // function hideform(){
// //     input.style.display='none'
// //     hidebtn.style.display='none'
// // }
// )

icon.addEventListener("click", () => {

    boolsearch = !boolsearch;
    if (boolsearch) {
        document.querySelector("#hide").innerHTML += `<input type="text" id="searchValue" placeholder="ชื่ออาหาร เช่น กะเพราไก่ไข่ลูกเขย"  class="form-control"></input>`;
        let searchvalue = document.querySelector("#hide");
        searchvalue.addEventListener("keyup", () => {
            console.log(searchvalue.value);
            let value = new RegExp(searchvalue.value, 'g');
            product = [];
            product.map((p) => {
                if (p.name.match(value) != null) {
                    product.push(p);
                }
                console.log(p.name.match(value));
            })
            console.log(product);
            list();
        })
    } else {
        document.querySelector("#hide").innerHTML = "";
    }
    list(product)
});