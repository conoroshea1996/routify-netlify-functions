exports.handler = async function (event, context, callback) {
  console.log(event);
  console.log(context);

  return {
    statusCode: 200,
    body: "<h1> Thanks for form</h1>",
  };
};
