# Vendix Api

Vendix Api it's an API for Vendix App to retrieve, create, delete and update products, seller and buyer handling of a vendor machine.
For the moment, it's just available to retrieve Products.

## Usage

```bash
cd vendor-api
npm i
npm start
```

or

use directly the Api endpoint `https://vendix-api.vercel.app/`

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
		"productName": "Product Blue",
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
	"productName": "Juanito jesús"
}'

DELETE `/products/:id`
Delete a product by id
eg. curl --request DELETE \
  --url http://localhost:8080/products/16 \
  --header 'User-Agent: insomnia/8.1.0'
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Author

Betita.
