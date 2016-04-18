# Simple node.js static file server

## Description
this app is a simple static file server.

It's build using :
* [Node.js](https://nodejs.org/) and [Express](http://expressjs.com/) for the web server ;
* [Forever](https://github.com/foreverjs/forever) for automatic restart ;
* [Morgan](https://github.com/expressjs/morgan) as a logging middleware.

## Deployment
Drop some files in the *Public* folder, and then simply use npm :
```
npm start
```
> If you get **EADRINUSE** errors, check that you don't already have another app/server using the same port.

## Disclaimer
This app is only intended for **test** purpose, there isn't any security implemented !
