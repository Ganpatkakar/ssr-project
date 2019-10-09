var createError = require('http-errors');
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import template from "./template";
import content_initialState from "./content_initialState";
import configStore from "../client/redux/store";
import { matchRoutes } from 'react-router-config';
import Routes from "../client/Routes";

import React from "react";
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
let assetsPath = path.resolve("public");
console.log(assetsPath);
app.use(express.static(assetsPath));

app.get('*', function (req, res) {
    const store = configStore();
    
    const promises = matchRoutes(Routes, req.path)
    .map(({ route }) => {
      return route.loadData ? route.loadData(store) : null;
    })
    .map(promise => {
      if (promise) {
        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });
      }
    });

    Promise.all(promises).then(() => {
        const context = {};
        const content = content_initialState(req, store);
    
        if (context.url) {
          return res.redirect(301, context.url);
        }
        if (context.notFound) {
          res.status(404);
        }
    
        res.send(content);
    });

    // const {content, preloadedState} = content_initialState(req);
    // let html = template("Server side rendering", preloadedState, content);
    // res.send(html);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res) {
    // set locals, only providing error in development
    console.log(err.message);

    // render the error page
    res.status(err.status || 500);
    res.send('error', err.message);
});


var debug = require('debug')('myapp:server');
var http = require('http');

var port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

var server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

function normalizePort(val) {
    var port = parseInt(val, 10);

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    var bind = typeof port === 'string'
        ? 'Pipe ' + port
        : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    var addr = server.address();
    var bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}
