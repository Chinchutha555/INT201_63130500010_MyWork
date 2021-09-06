// for in obj

let student = {id : 30762 , len : "dao"}
console.log(typeof(student))

for (let name in student){
    console.log(name)
    console.log(student[name])
}
