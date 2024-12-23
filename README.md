# Work Order Management System

MEAN stack application for managing work orders and billing

---

## DEMO: 
<a href="https://www.loom.com/share/b55aa915d3634338938531240b62aa01?sid=d22c19de-6297-44b2-89d6-e2454f0b4b5d" target="_blank"><p>Video Demo Link</p>
<img src="demo.gif"/>
</a>

---

## Dev Setup
- Clone the repo
- Run `npm install` in the client and server folders
- rename the example.env file to .env and fill in the required fields
- Run `npm run start` in the client folder
- Run `npm run dev` in the server folder
- Navigate to `http://localhost:4200` in your browser
- Login using the test credentials provided below
- Create a new User with email and password with the register button.


## Database Schema

Contractors => name, phone


Entities => name


Locations => name, entityId, state, completedBy


Work Orders => contractorId, paymentTerms, dueDate, locations


Bills => billNumber, contractorId, locations, totalAmount


## Test Creds
```
 user-email : alice@example.com
 user-password : password
```

## API Documentation

### Users
#### Register
`POST /api/users/register`

Body:
```
{
  "email": "alice@example.com",
  "password": "password"
}
```

#### Login
`POST /api/users/login`

Body:
```
{
  "email": "alice@example.com",
  "password": "password"
}
```
### Contractors
#### Create
`POST /api/contractors`

Body:
```
{
  "name": "Alice",
  "phone": "1234567890"
}
```

#### Get All
`GET /api/contractors`

### Entities
#### Create
`POST /api/entities`

Body:
```
{
  "name": "Entity 1"
}
```

#### Get All
`GET /api/entities`

### Locations
#### Create
`POST /api/locations`

Body:
```
{
  "name": "Location 1",
  "entityId": "5f8d9f4a2e0a4f7b8c2f5a5d",
  "state": "Ready"
}
```

#### Get All
`GET /api/locations`

#### Get Contractors for a Location
`GET /api/locations/:id/contractors`

#### Mark Location Completed
`PUT /api/locations/:id/complete`

Body:
```
{
  "contractorId": "5f8d9f4a2e0a4f7b8c2f5a5d"
}
```

#### Get Locations Sorted by Name
`GET /api/locations/sortByName`

#### Get Locations Completed
`GET /api/locations/completed`

### Work Orders
#### Create
`POST /api/work-orders`

Body:
```
{
  "contractorId": "5f8d9f4a2e0a4f7b8c2f5a5d",
  "paymentTerms": 30,
  "dueDate": "2022-01-01T00:00:00.000Z",
  "locations": [
    {
      "locationId": "5f8d9f4a2e0a4f7b8c2f5a5d",
      "rate": 10,
      "quantity": 2
    }
  ]
}
```

#### Get All
`GET /api/work-orders`

#### Get Work Orders Sorted by Payment Terms
`GET /api/work-orders/sortByPaymentTerms`

#### Get Work Orders Filtered by Date
`POST /api/work-orders/filterByDate`

Body:
```
{
  "date": "2022-01-01T00:00:00.000Z"
}
```

### Bills
#### Run Bills
`POST /api/bills/run`

#### Get Bills
`GET /api/bills`

### Dashboard
#### Get Dashboard Data
`GET /api/dashboard`

---

## Bill Generation Logic

- For each completed location, get the work orders associated with it
- For each work order, get the locations associated with it
- For each location, check if the contractor is associated with it
- If the contractor is associated with the location, add the location to the bill
- Calculate the total amount for the bill
- Save the bill
- generate pdf of all the bills in the system

---

## Further Enhancements

- Most of the time spent on this project was to implement a MVP.
- More features could be added. For Example: 
  - Bill generation could be scheduled to run at a specific time.
  - Bill generation could be triggered by a webhook.
  - A dashboard could be added to show the status of the system with more useful information.
  - Styling could be improved.
  - Error handling could be improved.
  - The Accessibility part of UI could be improved.
  - The security part of UI could be improved.
  - The App's performance could be improved.
