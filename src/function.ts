function add (n1: number, n2:number){
    return n1+n2;
}

function printResult(num:number){
    console.log('result: ' +num);
}
printResult(add(20,30));

let combineValues :  (a:number,b:number) => number 

combineValues= add;

console.log(combineValues(8,3));

// let somevalue : undefined;

function addandHandle (a:number, b:number, c:(num:number)=>void){
    const result = a+b ;
    c(result);

}

addandHandle(30,20,(result) => {
    console.log(result);
})