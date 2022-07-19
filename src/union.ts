type Combinable = number | string;
type ConversionDescriptor =  'as-number' | 'as-text';

function combine1 (input1:  Combinable  , input2:number | string, resultConversion: ConversionDescriptor ){

    let result;

    if(typeof input1 ==="number" && typeof input2 ==="number"){
         result = input1+ input2;
    }else{
        result= input1.toString()+ input2.toString();
    }
    if(resultConversion === 'as-number'){
        return +result;
    }else{
        return result.toString();
    }
}

const combineAges1 = combine1(30,40,'as-number');
console.log(combineAges1);

const combineStringAges1= combine1('30','40','as-number');
console.log(combineStringAges1);

const combineNames1 = combine1('Max', 'Ceyda','as-text');
console.log(combineNames1);