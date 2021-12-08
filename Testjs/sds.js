let dividprolist = document.querySelector("#product-list")


for (let p of product) {
    
let div = document.createElement('div')
dividprolist.appendChild(div)

div.setAttribute("id",p.id)
div.setAttribute("class","col-4")


}
//--------------------------------------

// let imgg = document.createElement("img");
// imgg.setAttribute("src",p.img)
// imgg.setAttribute("class","bd-placeholder-img card-img-top")
// div.appendChild(imgg);

let ul = document.createElement("ul")
// ul.setAttribute("class","list-unstyle")
div.appendChild(ul)

// let li = document.createElement("li")

// ul.appendChild(li)
ul.innerHTML += `<li><img src="./image/${p.img}"class ="img-fluid rounded mx-auto d-block m-3"></li>`
ul.innerHTML += `<li>id : ${p.id}</li> `
ul.innerHTML += `<li>name : ${p.name}</li>`
ul.innerHTML += `<li>description : ${p.description}</li>`
ul.innerHTML += `<li>price : ${p.price}</li>`
ul.innerHTML += `<li>stock : ${p.stock}</li>`

// let ul0 = document.createElement('div')
// p1.setAttribute("class","card-text")
// div.appendChild(ul0) // สร้าง div ไว้เก็บรูป
// ul0.appendChild(ul)

// let ul = document.createElement('ul')
// // ul.setAttribute("list-unstyled")
// divp.appendChild(ul) //สร้าง p เพื่อเก็บข้อมูล

// let li = document.createElement('li')
// ul.appendChild(li)



let button = document.createElement("button")
button.setAttribute("class","btn btn-sm btn-outline-secondary")
button.innerHTML = "Add"
ul.appendChild(button)


//--------------------------------------

}
