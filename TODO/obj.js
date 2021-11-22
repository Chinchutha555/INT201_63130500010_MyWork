// for in เข้าถึง obj
// let student = { id:12345 , name:"chin"}
//                 student.email ="dao@mail.com"
//                 student.gpa = {202 : 'd' , 201 : 'c'}
              
// student.id = 254
// console.log(student)                

// for(let std in student){
//     // console.log(std) //print เฉพาะ id , name , email
//     // console.log(student[std]) //print obj ที่อยู่ข้างใน
//     // console.log(`${std} : ${student[std]} `)
//     console.log(`${std} : ${student[std]}`)
// }


// // for of เข้าถึง array , string
// let a = [5,10,15]
// for(let item of a){
//     console.log(item)
//     console.log(`${item}`)
// }

// let water = {name : ['pepsi' , 'coke'] , price : [10,15]}
// console.log(water)
// console.log(water.name[0])
// console.log(water.name[water.name.length-1])

// for in ใช้กับ obj , for of ใช้กับ array
//1) simple obj
// let simple = {name : 'dao' , age : 19 , id : 30762 }

// for (let ts in simple){
//     // console.log(ts) //print แค่ข้างหน้า
//     // console.log(simple[ts]) //print obj ข้างใน
//     console.log(`${ts}` , `${simple[ts]}`) //print 2 อันภายในคำสั่งเดียว
// }

//2) array obj
// let name = ['zombie','milly','august']  
// let age  = [20,45,66] 

// let sum = 0

// for (let num of age){
//     sum += num
// }
// console.log(sum)

// // let mix = [name , age]

// for (let at of name){
//     console.log(at)
// }

// let point = { x:10, y: 20 };
// let newPoint = point;
// newPoint.x = 30;
// console.log (point)

// let person = {name :'adam' , age : 29 , 
//                 greeting(){
//                     console.log('Hello' + person.name )
//                 }
//             }

// // console.log(person.age , person.name)
// console.log(`${person.age} : ${person.name} , ${person.greeting()} `)

// let book = {  isbn: [123456789, 25,36],
//                 title: "JavaScript",
//                 author:{firstname: "Umaporn",lastname: "Sup"}};

// book.isbn[0] = 1
// console.log (book.isbn)
// console.log(book["title"])
// console.log(book['author']['firstname'])

// book.author.firstname = "Uma";
// book.publish = 2000;

// console.log(book)

// let profile = {id : [123,891,541] ,
//                 interest : ['music','skiing','guitar']}

// for (let ar of profile){
//     console.log(profile.id[ar])

// console.log(profile)
// console.log(profile.id[1])
// console.log(profile.interest[profile.interest.length-1])

// class test{
//     constructor(name){
//         if (name) {
//             this._name = name;
//         } else
//             this._name = "unknown"
//     }
//     get name(){
//         console.log("you are in getter")
//         return this._name
//     }
//     set name(setja){
//         console.log("You are in setter")
//         this._name = setja;
//     }

// }

// let t1 = new test();
// console.log(t1);
// let t2 = new test("Dao");
// console.log(t2);
// t2.name='Chinchutha';
// console.log(t2);


// const li={
//     firstname : 'Dao' ,
//     lastname : 'suay' ,
//     test(){
//         return (`${this.firstname} ${this.lastname}`)
//     }
// }
// console.log(li.test())

//array of objects
// let arr2 = [
//     { id: 1, name: 'Adam' },
//     { id: 2, name: 'Joe' }
//   ];
  
// //   console.log(arr2[1].name);
//   let arr3 = [
//     // [(0,0) 1, (0,1) 3, (0,2) 5, (0,3) 7],
//     // [(1,0)2, (1,1) 4, (1,2)6,  (1,3) 8]
  
//     [1, 3, 5, 7],
//     [2, 4, 6, 8]
//   ];
//   console.log(arr3[1][1]);
//   let arr4 = [...arr3, 0.5, 100, ...arr2];
//   console.log(arr4);

// const orders = [
//                 {product : 'product 1' , amount : 2 , price : 5},
//                 {product : 'product 2' , amount : 10 , price : 10},
//                 {product : 'product 3' , amount : 4 , price : 50},
//                 {product : 'product 4' , amount : 1 , price : 100}
// ]

// // console.log(orders)

// let totolamount = orders.reduce((tot,cur)=> tot + cur.amount , 0)
// console.log(totolamount)

// let totolprice = orders.reduce((tot,price)=>tot + price.amount*price.price , 0)
// console.log(totolprice)

// class test{
//     constructor(name){
//         if (name) {
//             this._name = name;
//         } else
//             this._name = "unknown"
//     }
//     get name(){
//         console.log("you are in getter")
//         return this._name
//     }
//     set name(setja){
//         console.log("You are in setter")
//         this._name = setja;
//     }

// }

// let t1 = new test();
// console.log(t1);
// let t2 = new test("Dao");
// console.log(t2);
// t2.name='Chinchutha';
// console.log(t2);

// class Customer{
//   constructor(firstname,lastname){
//     this._firstname = firstname
//     this._lastname = lastname
//   }
// }

// accountid = 1001 //กำหนดเลขบัญฃีให้เริ่มต้นที่ 1001

// class BankAccount{
//   constructor(Customer){
//     this._accountid = accountid
//     this._Customer = Customer
//     this._balance = 0 //ยอดเงินเริ่มจาก0
//     accountid += 1 //เพิ่ม id ทีละหนึ่งเมื่อทำการสร้างใหม่
// }
//   deposit(fark){
//     this._balance += fark
//   }
//   withdraw(fark){
//     if (this._balance<fark) {
//       return "เงินไม่พอ"
//     }
//     this._balance -= fark
//   }
//   getbalance(){
//     return this._balance
//   }
// }


// let test = new Customer('Chinchutha','Thanasuphawimon')
// console.log(test)

// let testbank = new BankAccount(test)
// console.log(testbank)

// console.log(testbank.deposit(100))
// console.log(testbank.getbalance())

// console.log(testbank.withdraw(150))
// console.log(testbank.getbalance())
// console.log(testbank)

class Student{
  constructor(firstname,lastname){
    this._firstname = firstname
    this._lastname = lastname
  }}
  const course = [
                    {course : 'Gen101 : PHTSICAL EDUCATION' , credit : 1 , grade : 'A'},
                    {course : 'INT102 : WEB TECHNOLOGY' , credit : 1 , grade : 'B+'},
                    {course : 'INT101 : PROGRAMING FUNDAMENTALS' , credit : 3 , grade : 'D'},
                    {course : 'GEN121 : LEARNING AND PROBLEM SOLVING SKILLS' , credit : 3 , grade : 'A'},
                    {course : 'INT100 : INFORMATION TECHNOLOGY FUNDAMENTALS' , credit : 3 , grade : 'C+'},
                    {course : 'INT114 : DISCRETE MATHEMATICS FOR INFORMATION TECHNOLOGY' , credit : 3 , grade : 'D+'},
                    {course : 'LNG220 : GENERAL ENGLISH' , credit : 3 , grade : 'B+'}

  ]
  const grade = [ 4,3.5,1,4,2.5,1.5,3.5]
let credit = course.reduce( (totcredit , cre)=> totcredit+cre.credit ,0) //ใฃ้คำสั่ง reduce เพื่อคำนวณหน่วยกิตที่ลงทะเบียนทั้งหมดเ
console.log(credit);

function (grade){
    return grade+gr(grade-1)
}
console.log(dosomething())

//   const gpa = {
//       if(course = A){
//           console.log("Grade : 4")
//       }else if(course = B){
//         console.log("Grade : 3.5")
//       }
//     }
//   let test = new Student('dao','aa')
//   console.log(test , course)


  

//   โดยให้มีข้อมูลตั้งต้น
//   เป็นข้อมูลนักศึกษา วิชาที่ลงทะเบียน และผลการเรียน และผลการเรียนสะสม ในภาคการศึกษา 1/2563 ของตนเอง
//   class Credit{
//       constructor()