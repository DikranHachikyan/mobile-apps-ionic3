function suma(a:number, b:number):number{
    let result:number;
    result = a + b;
    return result; 
}

function error(message:string):never{
    throw new Error(message);
    
}


let x:number = 2,
    y:number = 3;

console.log(`suma=${suma(x,y)}`);

error('Error Message');

//let res = error('Error');