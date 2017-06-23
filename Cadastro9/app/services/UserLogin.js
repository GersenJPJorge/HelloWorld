var querystring = require('querystring');
var React = require('react');
var axios = require('axios');

var UserLogin = {
  getByUserLogin: function () {
    return axios.post('https://api.orbitallcartoes.com.br/token',
    querystring.stringify({
            username    :"77584894434",
            password    :"e10adc3949ba59abbe56e057f20f883e",
            grant_type  :"password"
    }), {
      headers: { 
              "Authorization"   :"Basic b2xlLXVzZXItdHJ1c3RlZC1jbGllbnQ6b2xlLXNlY3JldA==",
              "Content-Type"    :"application/x-www-form-urlencoded",
              "systemName"      :"esb-orbitall",
              "environmentName" :"hml",
              "billingId"       :"06406506667",
              "location"        :"-23.5005995,-46.631207",
              "model"           :"android lollypop",
              "version"         :"5.1",
              "isRoot"          :"true",
              "deviceId"        :"ADHFGDSGFDJS1",
              "simCard"         :"BR011293384573763SP",
              "productName"     :"appOle"
}
    }).then(function(response) {
        console.log(response.data);

    }).catch((error) => {
          console.log('error ' + error);
    });
   }
};
module.exports = UserLogin;