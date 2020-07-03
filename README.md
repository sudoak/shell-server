# shell-node-server

### EndPoints

- URL
  `/compile`
- Method
  `POST`
- URL params
  `none`
- Data params
  ```javascript
    {
      type: js/python/java/gcc,
      code: "console.log('Run')"
    }
  ```
- Success Response
  ```javascript
  Code: 200;
  Content: {
    output: "Run";
  }
  ```
- Error Response
  ```javascript
  Code: 400;
  Content: {
    error: "World is not enough";
  }
  ```
- Libraries used
  - [ExpressJs](https://www.npmjs.com/package/express)
  - [Execa](https://www.npmjs.com/package/execa)
  - [Express Rate Limiter](https://www.npmjs.com/package/express-rate-limit)
  - [Uglifyjs](https://www.npmjs.com/package/uglify-js)
