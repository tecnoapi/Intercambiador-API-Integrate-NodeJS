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

Ejemplo de datos obligatorios para el alta de un inmueble.

```
var result_post = api.addProperty([
        {
         "fuente_origen": "1123123",
         "agency_id": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiV2VkIEp1biAwOCAyMODVlODhiODYxNzYzZDAiLCJpYXQiOjE2NTQ2Nzc1NTZ9.0xFLIf631G7PbXEL_ef04O3w6gjnu8lZ-gExsR9Wfto",
         "status_id": "1",
         "status_property_id": "1"
        }
]).then(response => {
    console.log("response post", response);
});
```

# PUT

Ejemplo de datos obligatorios para la edición de un inmueble.

```
var result_put = api.updateProperty([
    {
         "property_id": "62aafcb53e575f7b21a16dfd",
         "fuente_origen": "1123123",
         "agency_id": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiV2VkIEp1biAwOCAyMDIyIDEwOjM5OjE2IEdNVCswMjAwIChob3JhIGRlIHZlcmFubyBkZSBFdXJvcGEgY2VudHJhbCkiLCJ1c2VySWQiOiI2Mjk0Y4O3w6gjnu8lZ-gExsR9Wfto",
         "status_id": "1",
         "status_property_id": "1"
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


# EJEMPLO DE INMUEBLE COMPLETO

```
{
    "fuente_origen"=> "1",
    "agency_id"=> "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0aW1lIjoiV2VkIEp1biAwOCAyMDIyIDEwOjM5OjE2IEdNVCswMjAwIChob3JhIGRlIHZlcmFubyBkZSBFdXJvcGEgY2VudHJhbCkiLCJ17PbXEL_ef04O3w6gjnu8lZ-gExsR9Wfto",
    "reference"=> "11905-OB",
    "status_id"=> "1",
    "status_property_id"=> "1",
    "property_type_id"=> "8",
    "property_subtype_id"=> "2",
    "visibility_type_id"=> "2",
    "cadastral_reference"=> "9015608DF2891E0017AL",
    "price_sale": null,
    "price_rent"=> "95",
    "community_costs"=> "",
    "ibi_costs"=> "",
    "traspass"=> "",
    "traspassing_price": null,
    "parking_place_included_in_price"=> "",
    "parking_place_price"=> "",
    "honorary_shared"=> "",
    "honorary_seller"=> "",
    "price_changes": [],
    "down_payment"=> "",
    "down_payment_date"=> "",
    "note_registration"=> "",
    "date_note_registration"=> "",
    "surface_built_m2"=> "8.00",
    "surface_useful"=> "8.00",
    "minimum_renting_surface"=> "",
    "minimum_selling_surface"=> "",
    "surface_plot"=> "",
    "facade_meters"=> "",
    "main_terrace_surface"=> "",
    "offices_surface"=> "",
    "facade_height"=> "",
    "ceiling_height"=> "",
    "bedroom_number"=> "4",
    "bathroom_number"=> "2",
    "toilet_number"=> "0",
    "max_to_be_built_floors"=> "",
    "chalet_floors"=> "",
    "last_floor"=> "",
    "total_building_floors"=> "",
    "total_office_floors"=> "",
    "total_properties"=> "",
    "parking_place"=> "",
    "total_parking_places"=> "",
    "properties_per_floor"=> "",
    "energy_clasification_id"=> "6",
    "energy_delivery"=> "58",
    "conservation_state_id"=> "4",
    "exterior"=> "1",
    "co2_release_class_id"=> "2",
    "co2_release_index"=> "50",
    "new_construction"=> "",
    "bank_building"=> "0",
    "luxury_building"=> "",
    "exclusive_agreement"=> "",
    "orientation_id"=> "6",
    "year_building"=> "1995",
    "country"=> "España",
    "street_name"=> "calle",
    "street_number"=> "123",
    "block_name"=> "",
    "stair": null,
    "door": null,
    "postal_code"=> "08001",
    "city"=> "Barcelona",
    "urbanization"=> "Eixample / Antiga Esquerra Eixample",
    "latitude"=> "41.000",
    "longitude"=> "2.000",
    "equipment"=> "",
    "bathroom_disabled_people"=> "",
    "storage_room"=> "",
    "lift"=> "1",
    "lift_number"=> "",
    "built_in_wardrobes"=> "1",
    "air_conditioner"=> "",
    "terrace"=> "",
    "pets_allowed"=> "",
    "security_staff"=> "1",
    "pool"=> "",
    "garden"=> "1",
    "surveillance"=> "1",
    "parking_place_covered"=> "",
    "alarm_system"=> "1",
    "cctv"=> "1",
    "heating"=> "",
    "smoke_exit"=> "",
    "kitchen_equipped"=> "1",
    "security_door"=> "1",
    "warehouse"=> "1",
    "cornered"=> "",
    "automatic_door"=> "1",
    "access_control"=> "",
    "smoke_fire_detector"=> "1",
    "extinguisher"=> "",
    "sprinkler"=> "1",
    "firebreak_door"=> "1",
    "emergency_ligths"=> "1",
    "emergency_exit"=> "",
    "technical_floor"=> "",
    "false_ceiling"=> "1",
    "kitchen_office"=> "1",
    "hot_water"=> "",
    "double_glazing"=> "",
    "disabled_people_building_adapted"=> "1",
    "last_commercial_activity"=> "1",
    "shop_window"=> "",
    "total_venue_floors"=> "",
    "offices_use_only"=> "",
    "vehicle_access"=> "",
    "water"=> "",
    "light"=> "1",
    "sewage_system"=> "",
    "natural_gas"=> "",
    "street_lights"=> "1",
    "sidewalk"=> "1",
    "loading_zone"=> "1",
    "vigilance_24h"=> "1",
    "near_golf"=> "1",
    "near_parks_gardens"=> "1",
    "near_hospital"=> "",
    "near_school"=> "",
    "first_line"=> "",
    "near_mountain"=> "",
    "near_beach"=> "1",
    "near_police"=> "1",
    "near_bus"=> "",
    "near_train"=> "",
    "near_library"=> "",
    "near_pharmacy"=> "1",
    "near_sport_centers"=> "1",
    "near_restaurant"=> "",
    "near_supermaket"=> "",
    "near_subway"=> "1",
    "equipment_induction"=> "",
    "equipment_ceramic"=> "",
    "equipment_thermo"=> "",
    "equipment_kiln"=> "",
    "equipment_washing"=> "1",
    "equipment_microwave"=> "",
    "equipment_dishwasher"=> "",
    "equipment_drying"=> "",
    "equipment_cold_head_pump"=> "1",
    "equipment_refrigerator"=> "1",
    "equipment_telephone"=> "",
    "equipment_internet"=> "1",
    "non_smokers"=> "",
    "equipment_padel"=> "",
    "equipment_tenis"=> "1",
    "equipment_gym"=> "1",
    "equipment_pool"=> "1",
    "have_balcony"=> "",
    "auxiliary_entrance"=> "",
    "has_office"=> "",
    "loading_dock"=> "",
    "bridge_crane"=> "",
    "parking_place_identification_number"=> "",
    "floor_gres"=> "",
    "floor_marmol"=> "1",
    "floor_moqueta"=> "1",
    "floor_parquet"=> "",
    "floor_radiante"=> "1",
    "floor_rustico"=> "",
    "floor_tarima"=> "1",
    "floor_terrazo"=> "1",
    "characteristics": [],
    "pictures": [
        "/files/properties/images15/159992/images/159992_7a72c692fbae6000.jpg",
        "/files/properties/images15/159992/images/159992_f43olbed00aad000.jpg",
        "/files/properties/images15/159992/images/159992_81db9d0b04f95000.jpg",
        "/files/properties/images15/159992/images/159992_c22aa616c8925000.jpg"
    ],
    "documents": [],
    "web"=> "",
    "tour_virtual"=> ""
}
```