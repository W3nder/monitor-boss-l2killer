var axios = require('axios');

var config = {
  method: 'post',
  url: 'https://ws.pagseguro.uol.com.br/v3/transactions/notifications/766B9C-AD4B044B04DA-77742F5FA653-E1AB24\n?email=email-lojista@seusite.com.br&token={{token_api}}',
  headers: { 
    'Content-Type': 'application/xml'
  }
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});