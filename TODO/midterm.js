class Student{
  constructor(firstname,lastname){
    this._firstname = firstname
    this._lastname = lastname
  }}
  const course = [
      {course : 'Gen101 : PHTSICAL EDUCATION' , credit : 1 },
      {course : 'INT102 : WEB TECHNOLOGY' , credit : 1 },
      {course : 'INT101 : PROGRAMING FUNDAMENTALS' , credit : 3 },
      {course : 'GEN121 : LEARNING AND PROBLEM SOLVING SKILLS' , credit : 3 },
      {course : 'INT100 : INFORMATION TECHNOLOGY FUNDAMENTALS' , credit : 3 },
      {course : 'INT114 : DISCRETE MATHEMATICS FOR INFORMATION TECHNOLOGY' , credit : 3 },
      {course : 'LNG220 : GENERAL ENGLISH' , credit : 3 },
    
  ]
  const grade = [  'A ', 'B+' , 'D' , 'A' , 'C+' , 'D+' , 'B+']

let test = new Student('Chinchutha','Thanasuphawimon')
let credit = course.reduce( (totcredit , cre)=> totcredit+cre.credit ,0) 
//ใช้คำสั่ง reduce เพื่อคำนวณหน่วยกิตที่ลงทะเบียนทั้งหมด
console.log(test);
console.log(`totcredit : ${credit}`)

if(grade){
  if ('A') {
    console.log(4)
  }else if ('B+') {
    console.log(3.5)
  }else if ('B') {
    console.log(3)
  }else if ('C+') {
    console.log(2.5)
  }else if ('C') {
    console.log(2)
  }else if ('D+') {
    console.log(1.5)
  }else if ('D') {
    console.log(1)
  }
}
console.log(grade)

// let gpa = grade.reduce( (totgpa , cre)=> totcredit+cre.credit ,0) 
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