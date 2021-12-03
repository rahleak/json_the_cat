const request = require('request');

const fetchBreedDescription = function (breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);
    if (error) {
      console.log('error:', error.message);
      return;
    }
    if (data.length === 0) {
      callback('no input found', null);
      return;
    }
    callback(null, data[0].description);
  });
};
module.exports = fetchBreedDescription;
