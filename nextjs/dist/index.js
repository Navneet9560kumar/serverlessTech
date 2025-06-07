"use strict";
function sumofage(user1, user2) {
    return user1.age + user2.age;
}
const age = sumofage({ name: "John", age: 30 }, { name: "Doe", age: 25 });
console.log(age);
