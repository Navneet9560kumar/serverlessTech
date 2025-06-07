// interface User{
//       id:string
//       name:string;
//       age:number;
//       email:string;
//       password:string;

// }

// // const user:User = {

// // }// database call hear

// type updateprops = Pick<User, 'name' | 'age' | 'password'>;

// interface updateprops{
//       name:string;
//       age:number; 
//       password:string;
// }// ye tarika sahi per or bhi jo accha kaam kar sakte hai 
// // updateuser function
// function updateuser(updateprops){
//       ///hit the database and update the user
// }
// function sumofage(user1:User,user2:User){
//       return user1.age + user2.age;
// }

// //  const age =sumofage({name:"John",age:30},{name:"Doe",age:25});
// // console.log(age);



const user={
      name:"sumit",
      age:30,
}
user.name = "sumit kumar";
console.log(user.name);