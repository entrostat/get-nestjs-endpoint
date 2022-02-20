# Get NestJS Endpoint


[![NPM](https://nodei.co/npm/get-nestjs-endpoint.png)](https://nodei.co/npm/get-nestjs-endpoint/)

[![Version](https://img.shields.io/npm/v/get-nestjs-endpoint.svg?style=for-the-badge)](https://npmjs.org/package/get-nestjs-endpoint)
[![Downloads/week](https://img.shields.io/npm/dw/get-nestjs-endpoint.svg?style=for-the-badge)](https://npmjs.org/package/get-nestjs-endpoint)
[![License](https://img.shields.io/npm/l/get-nestjs-endpoint.svg?style=for-the-badge)](https://github.com/entrostat/get-nestjs-endpoint/blob/master/package.json)
[![Unit Tests](https://github.com/entrostat/get-nestjs-endpoint/actions/workflows/unit-tests.yml/badge.svg?branch=master)](https://github.com/entrostat/get-nestjs-endpoint/actions/workflows/unit-tests.yml)

Sometimes, you may want to get the string path to endpoints in a [NestJS](https://nestjs.com) application. This library simplifies the process and uses metadata stored on the controller to pull the path of our function. What's cool about this is that it uses [type-fest](https://github.com/sindresorhus/type-fest) to ensure that the function name exists in the controller. If you ever want to change the function name, or see where that endpoint string is being used, you can use your IDE completion to tell you!

## Getting Started

In order to use this package, you'll want to add it to your NestJS application.

```bash
npm install --save get-nestjs-endpoint
```

You can now use it in your code as follows:

```typescript
import { getEndpoint } from "get-nestjs-endpoint";
import { AppController } from "./app.controller";

// Your code here...


const endpoint = getEndpoint(AppController, 'getHello');
// The function name 'getHello' must exist on AppController, if it doesn't the
//  code will not compile.
```

## Known Gotchas

 1. Currently, the `getEndpoint` function does not return the endpoint with the starting `/` so you'll need to ensure you add that if you're looking for an absolute path.
 2. This does not take `globalPrefix` into account, you'll need to add that to the endpoint. This is only the endpoint from the controller's perspective.
 3. `nestjs-router` paths are not taken into account, you'll need to add the "super route" to this endpoint in much the same way as `globalPrefix`.
