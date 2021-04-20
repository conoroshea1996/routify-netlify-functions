// submission-created.js
exports.handler = async function (event, context) {
  console.log(JSON.parse(event.body));
  console.log(context);
  return {
    statusCode: 200,
  };
};
