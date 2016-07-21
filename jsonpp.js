#!/usr/bin/env node

'use strict';

const util = require('util');
const Argf = require('argf');

const argf = new Argf();
let json = '';
argf.forEach(function (line) {
  json += line;
});

process.on('exit', function () {
  return console.log(util.inspect(JSON.parse(json), {
    depth: null,
    colors: true
  }));
});
