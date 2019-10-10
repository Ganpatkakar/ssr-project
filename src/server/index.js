// Transpile all code following this line with babel and use '@babel/preset-env' (aka ES6) preset.
require("@babel/register")({
    presets: ["@babel/env", "@babel/react"],
    "plugins": ["transform-class-properties", "transform-object-rest-spread"]
});

require("babel-polyfill");

// Import the rest of our application.
require('./server.js');