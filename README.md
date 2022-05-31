# Intercambiador-API-Integrate-NodeJS

## Installation

npm i intercambiador-api-integrate-nodejs

## Usage
const { default: ApiIntercambiador } = require("intercambiador-api-integrate-nodejs/src");

const api = new ApiIntercambiador({token}, {mode ('sandbox' | '')});

# GET 
var result = api.getProperties().then(response => {
    console.log("response", response);
});

# POST
var result_post = api.addProperty([
        { property JSON }
]).then(response => {
    console.log("response post", response);
});

# PUT
var result_put = api.updateProperty([
    {
        "_id": ID property,
        Property data JSON
    }
]).then(response => {
    console.log("response put", response);
});

# DELETE
var result_delete = api.removeProperty([
    ID property
]).then(response => {
    console.log("response delete", response);
});