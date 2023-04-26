const axios = require('axios');

async function process(params) {
  return axios('https://jsonplaceholder.typicode.com/todos/' + params).then(function (response) {
    return response.data
  })
}
