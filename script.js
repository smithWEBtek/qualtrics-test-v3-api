console.log('index.js is loading ... ');

import { request } from './node_modules/request-promise';

const options = {
  method: 'GET',
  uri: 'https://survey.qualtrics.com/WRAPI/ControlPanel/api.php',
  qs: {
    Request: 'asdf',
    User: process.env.QUALTRICS_USER_ID,
    Token: process.env.QUALTRICS_API_TOKEN,
    Format: 'JSON',
    Version: '2.5',
    Organization: '(brand)'
  }
}

console.log('options: ', options);


request(options)
  .then(function (response) {
    users = Object.entries(JSON.parse(response))
    users.forEach(function (user) {
      e = Object.entries(user)
      e.forEach(function (ef) {
        for (i in ef) {
          var users = ef[i].UserData
          if (users !== undefined) {
            keys = Object.keys(users)
            keys.forEach(function (user) {
              var u = users[user]
              console.log("UserID=", u.UserID, " PasswordExpirationDate=", u.PasswordExpirationDate)
            })
          }
        }
      })
    })
  })
  .catch(function (err) {
    console.log(err)
  })
