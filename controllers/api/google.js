const fetch = require('node-fetch');

const SEARCH_URL ='https://api.goog.io/';

module.exports = {
    searchGoogle
};

async function searchGoogle(req, res) {
    await fetch(`${SEARCH_URL}`)
    .then(res => {
        if(res.ok) return res,json()
        throw new Error('No Can Do')
    })
    then(data => {
        res.json(data)
    })
}