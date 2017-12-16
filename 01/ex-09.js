"use strict"

function sendRequest(url, callback){
    console.log('Send request to:' + url);
    setTimeout(()=>{
        let categories = [{id:1, name:'Mobile Phones', slug:'mobile-phones'},
                          {id:2, name:'Digital Cameras', slug:'digital-cameras'}];
        if( url.indexOf('categories') !== -1 ){
            callback(categories);
        }
        else if( url.indexOf('mobile-phones') !== -1){
            callback(['Sansung','Nokia']);
        }
        else if( url.indexOf('digital-cameras') !== -1){
            callback(['LG','Cannon','Sony']);
        }
    }, 1000);

}

sendRequest('/categories/', (data)=>{
    console.log('Process categories ...');
    for( let category of data){
        sendRequest(category.slug, function(data){
            console.log('Process items in:' + category.name);
            console.log('Items:',data);
        });
    }
});
