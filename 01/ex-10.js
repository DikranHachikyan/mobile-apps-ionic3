"use strict"

function sendRequest(url, callback){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let categories = [{id:1, name:'Mobile Phones', slug:'mobile-phones'},
                             {id:2, name:'Digital Cameras', slug:'digital-cameras'}];
            console.log('Send request to:' + url);
            if( typeof url === 'string' && url.indexOf('categories') !== -1){
                resolve(categories);
            }
            else if(typeof url === 'string' && url.indexOf('mobile-phones') !== -1){
                resolve(['Sansung','Nokia'])
            }
            else if(typeof url === 'string' && url.indexOf('digital-cameras') !== -1){
                resolve(['LG','Cannon','Sony'])
            }
            else{
                reject('Invalid url');
            }
        }, 1000);
        

    });

}

let url = '/categories/';

sendRequest(url)
    .then(data=>{
        console.log('Data 1:',data);
        return sendRequest('/mobile-phones/');
    })
    .then(data=>{
        console.log('Data 2:', data);
    })
    .catch(error=>console.log(error));
