'use strict'
import Users from './users.js' //require the model

async function init() {
    await Users.sync();  
    //sync the model
};

init();

export { init }