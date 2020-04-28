import axiois from 'axios'

export default axiois.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        'Authorization': 'Client-ID d8dd36ce5da61ca88d83047737e45b978a1ec6087614b67fbeaeba69b592a397'
    }
})