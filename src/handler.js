'use strict';

module.exports.generateVersionNumber = async (event) => {
  const randomNumber = parseInt(Math.random() ^ 100)
  console.log("Serverless : 0.0.0.", randomNumber)
  return randomNumber
  // return {
  //   statusCode: 200,
  //   body: JSON.stringify(
  //     {
  //       message: 'Go Serverless v1.0! Your function executed successfully!',
  //       input: event,
  //     },
  //     null,
  //     2
  //   ),
  // };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
