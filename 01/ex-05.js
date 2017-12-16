"use strict"

function createUser( user, plan='developer'){
    if( typeof user !== 'string' || user.trim().length === 0){
        throw 'undefined or empty user';
    }

    console.log(`Create User: ${user} Plan:${plan}`);
}

createUser('John','free');
createUser('John');
createUser('    ')