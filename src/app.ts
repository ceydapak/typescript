// let usersInput : unknown;

// //usersInput= 10;
// usersInput= 'Ceyda';

// let userName: string;
// userName = 'Ceyda değil'

// if (typeof usersInput === 'string'){

//     userName = usersInput;
//     console.log(usersInput);

// }

// function generateError(message :string, code:number) :  never{
//     throw{message: message, errorCode: code};
//     //while(true){}

// }
// //generateError('There is an error', 404)


const btn = document.getElementById('button')!;


btn.addEventListener('click', () => {
  console.log('btn clicked');
});