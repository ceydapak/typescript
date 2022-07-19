"use strict";
function addSomething(n1, n2, phrase, showResult) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
// const person: {
//     name: string;
//     age: number;
//    hobbies: string[];
//    role: [number,string];
// }
var Role1;
(function (Role1) {
    Role1["ADMIN"] = "Admin";
    Role1[Role1["AUTHOR"] = 100] = "AUTHOR";
    Role1[Role1["USER"] = 200] = "USER";
})(Role1 || (Role1 = {}));
;
const person = {
    name: "Ceyda",
    age: 22,
    hobbies: ['Sports', 'Art', 'Music'],
    role: [2, 'author'],
    types: Role1.ADMIN
};
person.role.push('admin');
person.role[1] = 10;
//let favactivities : any[];
// for(const hobby of person.hobbies){
//     console.log(hobby.toUpperCase)
// }
if (person.types == Role1.ADMIN) {
    console.log("You're Admin");
}
