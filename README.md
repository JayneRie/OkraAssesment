# OkraAssesment
___
# This is an instruction on how to run my code
___
1. clone the repository
2. cd into the repository folder
3. run `npm install`

## Question 1
___
To see the output to question 1,  
run the command `npm run q1`

## Question 2
___
To see the output to question 2a: consumingAPI,  
run the command `npm run q2a`

To see the output to question 2b: creating logic,  
run the command `npm run q2b`

## Issue Encountered
___
A server error was expereinced on consuming the "https://api.okra.ng/v2/mock-api/refresh-wallet" endpoint in question 2
Hence, question 2b  user wallet on refresh is ommited from the final output.
See error output below:
`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Error</title>
</head>
<body>
<pre>TypeError: Cannot read property &#39;amount&#39; of undefined<br> &nbsp; &nbsp;at exports.refresh (/home/okra-api/src/controllers/mock.controller.js:68:28)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/home/okra-api/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at next (/home/okra-api/node_modules/express/lib/router/route.js:137:13)<br> &nbsp; &nbsp;at Route.dispatch (/home/okra-api/node_modules/express/lib/router/route.js:112:3)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/home/okra-api/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at /home/okra-api/node_modules/express/lib/router/index.js:281:22<br> &nbsp; &nbsp;at Function.process_params (/home/okra-api/node_modules/express/lib/router/index.js:335:12)<br> &nbsp; &nbsp;at next (/home/okra-api/node_modules/express/lib/router/index.js:275:10)<br> &nbsp; &nbsp;at Function.handle (/home/okra-api/node_modules/express/lib/router/index.js:174:3)<br> &nbsp; &nbsp;at router (/home/okra-api/node_modules/express/lib/router/index.js:47:12)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/home/okra-api/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at trim_prefix (/home/okra-api/node_modules/express/lib/router/index.js:317:13)<br> &nbsp; &nbsp;at /home/okra-api/node_modules/express/lib/router/index.js:284:7<br> &nbsp; &nbsp;at Function.process_params (/home/okra-api/node_modules/express/lib/router/index.js:335:12)<br> &nbsp; &nbsp;at next (/home/okra-api/node_modules/express/lib/router/index.js:275:10)<br> &nbsp; &nbsp;at Function.handle (/home/okra-api/node_modules/express/lib/router/index.js:174:3)<br> &nbsp; &nbsp;at router (/home/okra-api/node_modules/express/lib/router/index.js:47:12)<br> &nbsp; &nbsp;at Layer.handle [as handle_request] (/home/okra-api/node_modules/express/lib/router/layer.js:95:5)<br> &nbsp; &nbsp;at trim_prefix (/home/okra-api/node_modules/express/lib/router/index.js:317:13)<br> &nbsp; &nbsp;at /home/okra-api/node_modules/express/lib/router/index.js:284:7<br> &nbsp; &nbsp;at Function.process_params (/home/okra-api/node_modules/express/lib/router/index.js:335:12)<br> &nbsp; &nbsp;at next (/home/okra-api/node_modules/express/lib/router/index.js:275:10)</pre>
</body>
</html>
`

