#!/usr/bin/env node
// Generated by CoffeeScript 1.7.1
(function() {
  var argf, json;

  json = '';

  argf = new (require('argf'))();

  argf.forEach(function(line) {
    return json += line;
  });

  process.on('exit', function() {
    return console.log(JSON.stringify(JSON.parse(json), null, 2));
  });

}).call(this);
