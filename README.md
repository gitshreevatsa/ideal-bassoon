# To Run:

1. Clone the repository
2. Run the following command in the terminal:
```bash
npm i
node index.js
```

# To Test:

## Retreive Address:

Run the following command in Postman:
```
Operation : GET
URL : http://localhost:3000/auth?address=<deviceID>
```

## Add Address:
There are 2 ways to add an address:
1. Run the following command in Postman:
```
Operation : POST
URL : http://localhost:3000/auth
Body : {
    "address": "<deviceID>"
}
```

2. Run the following command in the Postman:
```
Operation : GET
URL : http://localhost:3000/add?address=<deviceID>
```