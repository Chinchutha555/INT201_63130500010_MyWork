// for in obj

// let student = {id : 30762 , len : "dao"}
// console.log(typeof(student))

// for (let name in student){
//     console.log(name)
//     console.log(student[name])
// }

// let person = {}; //let person = new Object();
// console.log(typeof person);
// person.id = 12345678;
// person.name = 'Somchai';
// console.log(person);
// person.email = 'somchai.gmail.com';
// console.log(person);
// delete person.email;
// console.log(person);

// class Person {
//     constructor(id, name) {
//       if (id.length != 13) this._id = 'unknown';
//       else this._id = id;
//       this._name = name;
//     }
  
//     //getter
//     get id() {
//       return this._id;
//     }
  
//     //setter
//     set id(id) {
//       this._id = id; //backing field
//     }
  
//     // //method
//     toString() {
//       return `person id = ${this._id}, person name= ${this._name}`;
//     }
//   }
  
//   let per1 = new Person('1234567', 'SomSri');
//   console.log(per1.toString());
//   let per2 = new Person('1234567891011', 'Som');
//   console.log(per2.toString());

  class Person {

    constructor(id, name) {
  
      if (id.length != 13) this._id = 'unknown';
  
      else this._id = id;
  
      this._name = name;
  
    }
  
    //getter
  
    get id() {
  
      return this._id;
  
    }
  
    //setter
  
    set id(id) {
  
      this._id = id; //backing field
  
    }
  
    set name(name) {
  
      console.log('you are in setter ');
  
      this._name = name;
  
    }
  
  
  
    get name() {
  
      console.log('you are in getter ');
  
      return this._name;
  
    }
  
    // //method
  
    toString() {
  
      return `person id = ${this._id}, person name= ${this._name}`;
  
    }
  
  }
  
  
  
  let per1 = new Person('1234567', 'SomSri');
  
  per1.name = 'Umaporn';
  
  console.log(per1.name);