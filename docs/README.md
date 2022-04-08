# Simple Documentation

## Get all tours

### Available methods: `GET`

GET: Returns list of tours

#### Path: `api/v1/tours`

| Query      |      Description       |
|:-----------|:----------------------:|
| name       |     Query by name      |                                           
| difficulty |  Query by difficulty   |                                           
| price      |     Query by price     | 
| fields     | Project certain fields |
| page       |     Query by page      | 

### Comparison operators

| Name |                                                 Description                                                 |
|:-----|:-----------------------------------------------------------------------------------------------------------:|
| eq   |                             Matches values that are equal to a specified value.                             |
| gt   |                           Matches values that are greater than a specified value.                           | 
| gte  |                     Matches values that are greater than or equal to a specified value.                     |
| in   |                              Matches any of the values specified in an array.                               |
| lt   |                            Matches values that are less than a specified value.                             |
| lte  |                      Matches values that are less than or equal to a specified value.                       |
| ne   |                         Matches all values that are not equal to a specified value.                         |
| nin  |                              Matches none of the values specified in an array.                              |

#### Usage

`api/v1/tours/?price[gte]=5`
Receives tous with price greater than or equal or to 5.

------------------------------------------------------------------------------------------------------------------------

## Tour

### Available methods: `GET` `POST` `PATCH` `DELETE`

GET: Returns a single tour

POST: Creates a single tour

PATCH: Modifies a single tour

PATCH: Modifies a single tour

##### Path: `api/v1/tours/:id`

| Parameter  | Required |                  Description                   |
|:-----------|:--------:|:----------------------------------------------:|
| id         |   Yes    | The id of the tour to be fetched (part of URL) | 

Certain methods require Bearer token with Auth key or even a certain privilege such as admin.

## User

### Available methods: `GET` `PATCH` `DELETE`

GET: Returns a single user

PATCH: Updates user's data

DELETE: Deletes/Deactivates a user

##### Path: `api/v1/users/:id`

| Parameter  | Required |                  Description                   |
|:-----------|:--------:|:----------------------------------------------:|
| id         |   Yes    | The id of the tour to be fetched (part of URL) | 

Certain methods require Bearer token with Auth key or even a certain privilege such as admin.

------------------------------------------------------------------------------------------------------------------------

## Alias

### Top 5 Cheap Tours

#### Available methods: `GET` 

GET: Returns top 5 cheap tours

##### Path: `api/v1/tours/top-5-cheap`

### Tour stats

### Available methods: `GET`

GET: Returns tours stats

##### Path: `api/v1/tours/tour-stats`

### Monthly plan

### Available methods: `GET`

GET: Returns a monthly plan

##### Path: `api/v1/tours/monthly-plan/:year`

| Parameter | Required |            Description             |
|:----------|:--------:|:----------------------------------:|
| year      |   Yes    | Monthly plan for the provided year | 
