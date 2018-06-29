var rp = require('request-promise-native');

module.exports = async request => {
  // Log the request to the console.
  console.dir(request);

  // Get the message sent in the endpoint path parameter
  let email = request.pathParameters.email;

  var token = process.env.TOKEN

  let responseString = await rp(
    `https://slack.com/api/users.admin.invite?token=${token}email=${email}`
  )


  let response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: responseString
  };

  return response;
};