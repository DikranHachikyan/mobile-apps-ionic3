"use strict"

let msg = 'Hello JS';//глобална

function show(){
    let a = 1; //локална промелива

    if( true ){
        let b = 2; //локална за блока
    }
    console.log('a=', a);
    //console.log('b=', b);
    console.log('msg=', msg);
} 

show();