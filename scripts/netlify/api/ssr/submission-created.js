exports.handler = function (event, context, callback) {
  console.log(event);

  return {
    statusCode: 200,
    body: "<h1> Thanks for form</h1>",
  };
};
