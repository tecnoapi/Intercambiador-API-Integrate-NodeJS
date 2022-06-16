# Intercambiador-API-Integrate-NodeJS

## Installation
```
npm i intercambiador-api-integrate-nodejs
```

## Usage
```
const { default: ApiIntercambiador } = require("intercambiador-api-integrate-nodejs/src");

const api = new ApiIntercambiador({token}, {token_source}, {mode ('sandbox' | '')});
```

# GET 
```
var result = api.getProperties().then(response => {
    console.log("response", response);
});
```

# POST
```
var result_post = api.addProperty([
        {
         "fuente_origen": "1123123",
         "agency_id": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiV2VkIEp1biAwOCAyMDIyIDEwOjM5OjE2IEdNVCswMjAwIChob3JhIGRlIHZlcmFubyBkZSBFdXJvcGEgY2VudHJhbCkiLCJ1c2VySWQiOiI2Mjk0YmM3ZGU1ODVlODhiODYxNzYzZDAiLCJpYXQiOjE2NTQ2Nzc1NTZ9.0xFLIf631G7PbXEL_ef04O3w6gjnu8lZ-gExsR9Wfto",
         "reference": "11905-OB",
         "status_id": "1",
         "status_property_id": "1",
         "property_type_id": "8",
         "property_subtype_id": "2",
         "visibility_type_id": "2",
         "cadastral_reference": "9015608DF2891E0017AL",
         "price_sale": null,
         "price_rent": 95,
         "community_costs": "",
         "ibi_costs": "",
         "traspass": "",
         "orientation_id": "6",
         "energy_clasification_id": "6",
         "co2_release_class_id": "2",
         "conservation_state_id": "4"
        }
]).then(response => {
    console.log("response post", response);
});
```

# PUT
```
var result_put = api.updateProperty([
    {
         "property_id": "62aafcb53e575f7b21a16dfd",
         "fuente_origen": "1123123",
         "agency_id": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiV2VkIEp1biAwOCAyMDIyIDEwOjM5OjE2IEdNVCswMjAwIChob3JhIGRlIHZlcmFubyBkZSBFdXJvcGEgY2VudHJhbCkiLCJ1c2VySWQiOiI2Mjk0YmM3ZGU1ODVlODhiODYxNzYzZDAiLCJpYXQiOjE2NTQ2Nzc1NTZ9.0xFLIf631G7PbXEL_ef04O3w6gjnu8lZ-gExsR9Wfto",
         "reference": "11905-OB",
         "status_id": "1",
         "status_property_id": "1",
         "property_type_id": "8",
         "property_subtype_id": "2",
         "visibility_type_id": "2",
         "cadastral_reference": "9015608DF2891E0017AL",
         "price_sale": null,
         "price_rent": 95,
         "community_costs": "",
         "ibi_costs": "",
         "traspass": "",
         "orientation_id": "6",
         "energy_clasification_id": "6",
         "co2_release_class_id": "2",
         "conservation_state_id": "4"
    }
]).then(response => {
    console.log("response put", response);
});
```

# DELETE
```
var result_delete = api.removeProperty([
    "62ab1095097536eb71373b7b", "62ac1095097536eb71373b8g"
]).then(response => {
    console.log("response delete", response);
});
```