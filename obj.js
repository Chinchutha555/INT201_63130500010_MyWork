// for in เข้าถึง obj
let student = {id:12345 , name:"chin"}
student.email ="dao@mail.com"
for(let std in student){
    console.log(std)
    console.log(student[std])
}
// for of เข้าถึง array , string
let a = [5,10,15]
for(let item of a){
    console.log(item)
}