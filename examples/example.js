const insta = require('../lib/index');

const {user_id, access_token} = require('./config.json')

insta.GetClientInfo(user_id,access_token)
.then(res => {
    console.log(res)
})