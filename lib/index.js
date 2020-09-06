const axios = require('axios')




axios.defaults.baseURL = 'https://graph.instagram.com';

axios.get(`/${user_id}/media?fields=id,caption&access_token=${access_token}`)
.then(res => {
    console.log(res.data)
})