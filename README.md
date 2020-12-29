# accessmap-mock

Mock API service that returns an access map and has endpoints for updating permissions.

Use with [Aserto React Sample](https://github.com/aserto-demo/aserto-react-sample) to mock the Aserto edge service.  In that project, set the key in `auth_config` to ` "authorizerServiceUrl": "http://localhost:9001" ` (or whatever port you override).


## install

`npm install`

## run

`npm start` will run on the default port - 9001.

`API_PORT=9002 node src/index.js` overrides the port.

This mock service expects calls from localhost:3000 (as the CORS origin).


