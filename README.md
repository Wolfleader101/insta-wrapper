# insta-wrapper
 an instagram API wrapper for Node.JS



 # Examples
  examples are in ./examples/example.js

Getting basic user info
```js
const insta = require('@wolfleader101/insta-wrapper');

const {user_id, access_token} = require('./config.json')

insta.GetClientInfo(user_id,access_token)
.then(res => {
    console.log(res)
})
```

# Config
 How to get Access Token and User Id
 https://developers.facebook.com/docs/instagram-api

 example config:
 ```json
 {
    "access_token": "myLongAccessToken",
    "user_id": "myID"
}
 ```
