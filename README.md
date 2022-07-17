# wayhooks

<h1 align="center">
🌐 MERN Stack
</h1>
<p align="center">
MongoDB, Expressjs, React/Redux, Nodejs
</p>

<p align="center">
   <a href="https://github.com/amazingandyyy/mern/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/License-MIT-green.svg" />
   </a>
</p>

> MERN is a fullstack implementation in MongoDB, Expressjs, React/Redux, Nodejs.
MERN stack is the idea of using Javascript/Node for fullstack web development.

## clone & install dependencies

```terminal
git clone https://github.com/Sunny-unik/wayhooks.git
npm i
```

## project structure

```terminal
LICENSE
README.md
package.json
server/
   package.json
   .env (to create .env, check [prepare your secret session])
client/
   package.json
...
```

# Usage (run fullstack app on your machine)

## Prerequisites

- [MongoDB](https://gist.github.com/nrollr/9f523ae17ecdbb50311980503409aeb3)
- [Node](https://nodejs.org/en/download/) ^12.0.0
- [npm](https://nodejs.org/en/download/package-manager/)

notice, you need client and server runs concurrently in different terminal session, in order to make them talk to each other

## Client-side usage(PORT: 3000)

```terminal
$ cd client   // go to client folder
$ npm i      // npm install packages
$ npm start // run it locally
// deployment for client app
$ npm run build // this will compile the react code using webpack and generate a folder called docs in the root level
```

## Server-side usage(PORT: 8000)

### Prepare your secret

```terminal
cd server   // go to server folder
npm i       // npm install packages
node index // run it locally
npm run build // this will build the server code to es5 js codes and generate a dist file
```

# Dependencies(tech-stacks)

Client-side | Server-side
--- | ---
axios: ^0.15.3 | bcrypt-nodejs: ^0.0.3
react: ^16.2.0 | dotenv: ^2.0.0
babel-preset-stage-1: ^6.1.18|body-parser: ^1.15.2
react-dom: ^16.2.0 | express: ^4.14.0
react-redux: ^4.0.0 | jwt-simple: ^0.5.1
react-router-dom: ^4.2.2 | cors: ^2.8.1
redux: ^3.7.2 | redux-thunk: ^2.1.0 |
