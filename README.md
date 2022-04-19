# api-sample
It's an small api built with NodeJS and Express

## Requirements
* Need to have nodejs installed version **v14.19.1** or **Higher**

## Developer usage

### Running Locally

1.- Clone Repo  ```git clone https://github.com/ivan-crz09/api-sample.git```

2.- Run `npm i`

3.- Run `npm start`


**Note** it will run for defect in port `3010`. You can change the default port inside start.js

#### Current endpoints

Get Hello Request:
```
curl --location --request GET 'http://localhost:3010/hello'
```

Get Pokemon Request
```
curl --location --request GET 'http://localhost:3010/pokemon'
```




### Running Test

1.- Run `npm run test`
