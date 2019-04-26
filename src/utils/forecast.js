const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.darksky.net/forecast/b29c3d1a94a9fea85bccab63f486d1ab/" +
    latitude +
    "," +
    longitude;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          " It is currently " +
          body.currently.temperature +
          " degress out. There is a " +
          body.currently.precipProbability +
          "% chance of rain. Today's Hi is " +
          body.daily.data[0].temperatureHigh +
          " degrees, and the Low is " +
          body.daily.data[0].temperatureLow +
          " degrees."
      );
    }
  });
};

module.exports = forecast;
