function addSomething (n1: number, n2:number, phrase:string, showResult: boolean): number | undefined{
    const result = n1+ n2;
    if(showResult){
        console.log(phrase+result);
    }else{
        return result;
    }

}

// const person: {
//     name: string;
//     age: number;
//    hobbies: string[];
//    role: [number,string];
// }

enum Role1 {ADMIN = 'Admin', AUTHOR=100, USER=200};
const person ={
    name: "Ceyda",
    age:22,
    hobbies: ['Sports', 'Art', 'Music'],
    role: [2, 'author'],
    types: Role1.ADMIN
}
person.role.push('admin');
person.role[1]= 10

//let favactivities : any[];

// for(const hobby of person.hobbies){
//     console.log(hobby.toUpperCase)
// }

if(person.types==Role1.ADMIN){
    console.log("You're Admin");
}

