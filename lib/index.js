const axios = require('axios')

axios.defaults.baseURL = 'https://graph.instagram.com';

module.exports = {
    GetClientInfo: (user_id, access_token) => {
        return axios.get(`/${user_id}?fields=id,username&access_token=${access_token}`)
            .then(res => {
                return res.data;
            })
    }
}