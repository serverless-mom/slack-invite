var rp = require('request-promise-native');

async function testLambda (request) {
  // Log the request to the console.
  console.dir(request);

  // Get the message sent in the endpoint path parameter
  let message = request.pathParameters.email;

  // Build a response.
  let responseBody = `
    <h4>You sent the following message:</h4>
    <p>${message}</p>
  `;

  var token = process.env.TOKEN

  let responseString = await rp(
    `https://slack.com/api/users.admin.invite?token=${token}email=${message}`
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


console.log(testLambda({pathParameters:{email:'robo@galifrey.com'}}))