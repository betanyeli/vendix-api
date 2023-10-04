const public = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Vendix API</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      margin: 0;
      padding: 0;
      background-color: #f8d7da; /* Color de fondo rosa pastel */
    }
    .container {
      max-width: 800px;
      margin: 0 auto;
      padding: 20px;
      background-color: #ffffff; /* Fondo blanco */
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      border-radius: 5px;
    }
    h1 {
      font-size: 24px;
      color: #333;
    }
    h2 {
      font-size: 20px;
      margin-top: 20px;
      color: #333;
    }
    code {
      background-color: #f0f0f0;
      padding: 2px 5px;
      border-radius: 3px;
      font-family: Monaco, monospace;
    }
    pre {
      background-color: #f0f0f0;
      padding: 10px;
      border-radius: 5px;
      white-space: pre-wrap;
    }
    a {
      text-decoration: none;
      color: #007BFF;
    }
    a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Vendix API</h1>
    <p>Vendix Api is an API for Vendix App to retrieve, create, delete, and update products, sellers, and buyers for handling a vending machine. At the moment, it's only available to retrieve products.</p>

    <h2>Tech Stack</h2>
    <ul>
      <li>ExpressJS framework</li>
      <li>JavaScript</li>
      <li>Vercel for deployment</li>
    </ul>

    <h2>Roadmap</h2>
    <ul>
      <li>Add Unit Tests</li>
      <li>Add authentication services with AWS Cognito</li>
      <li>Connect the Api to ApiGateway</li>
      <li>Connect the Class Models to a new Database (DynamoDB, MongoDB, Firebase)</li>
      <li>Filter by vendorMachineID</li>
      <li>Add Seller & Buyer handling</li>
    </ul>

    <h2>Usage</h2>
    <pre><code>cd vendor-api
npm i
npm start</code></pre>
    <p>or use the API endpoint directly: <a href="https://vendix-api.vercel.app/products" target="_blank">https://vendix-api.vercel.app/products</a></p>

    <h2>Methods</h2>
    <pre><code>GET <a href="http://api-endpoint/products" target="_blank">/products</a>
Get the available products of a vendor machine</code></pre>
    
    <pre><code>GET <a href="http://api-endpoint/products/:id" target="_blank">/products/:id</a>
Get a unique product by ID</code></pre>
    
    <pre><code>POST <a href="http://api-endpoint/products" target="_blank">/products</a>
Create a product</code></pre>
    
    <pre><code>PUT <a href="http://api-endpoint/products/:id" target="_blank">/products/:id</a>
Update a product by ID</code></pre>
    
    <pre><code>DELETE <a href="http://api-endpoint/products/:id" target="_blank">/products/:id</a>
Delete a product by ID</code></pre>

    <h2>Author</h2>
    <p>Betita.</p>
  </div>
</body>
</html>

`;

module.exports = public;
