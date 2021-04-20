// submission-created.js
// const fetch = require("node-fetch");

exports.handler = async function (event, context) {
  console.log(JSON.parse(event.body));
  console.log(context);

  // const result = await fetch("https://jsonplaceholder.typicode.com/todos/1");
  // let x = await result.json();
  // console.log(x);

  return {
    statusCode: 200,
  };
};
