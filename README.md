# Vendix Api

Vendix Api it's an API for Vendix App to retrieve, create, delete and update products, seller and buyer handling of a vendor machine.
For the moment, it's just available to retrieve Products.

## Tech Stack

- ExpressJS framework
- JavaScript
- Vercel for deployment

## Roadmap

- Add Unit Tests
- Add authentication services with AWS Cognito
- Connect the Api to ApiGateway
- Connect the Class Models to a new Database (DynamoDB, MongoDB, Firebase)
- Filter by vendorMachineID
- Add Seller & Buyer handling

## Usage

```bash
cd vendor-api
npm i
npm start
```

or

use directly the Api endpoint `https://vendix-api.vercel.app/products`

## Methods

```
GET `/products`
Get the available products of a vendor machine
eg. http://api-endpoint/products

GET `/products/:id`
Get an unique product by id
eg. http://api-endpoint/products/16

POST `/products`
Create a product.
eg. curl --request POST \
  --url http://localhost:8080/products \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.1.0' \
  --data '{
		"productName": "Product for Esperancita",
		"sellerId": "Seller 1",
		"amountAvailable": 100,
		"cost": 10.99,
		"stock": 50,
		"createdAt": "2023-10-01T08:00:00Z"
}'

PUT `/products/:id`
Update a product by id
eg. curl --request PUT \
  --url http://localhost:8080/products/13 \
  --header 'Content-Type: application/json' \
  --header 'User-Agent: insomnia/8.1.0' \
  --data '{
	"productName": "Esperancita Cachupina"
}'

DELETE `/products/:id`
Delete a product by id
eg. curl --request DELETE \
  --url http://localhost:8080/products/16 \
  --header 'User-Agent: insomnia/8.1.0'
```

## Author

Betita.
