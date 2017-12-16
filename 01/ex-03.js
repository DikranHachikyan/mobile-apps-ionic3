"use strict"

const app = {
    title:'My Application',
    url:'http://site.com'
};

app.title = 'Blog';

console.log(app);

app.path = '/public/';

console.log(app);

delete app.url;

console.log(app);

app = {
    a:1,
    b:2
};
console.log(app);