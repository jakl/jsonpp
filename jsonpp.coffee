#!/usr/bin/env coffee
json = ''
argf = new (require 'argf')()
argf.forEach (line)-> json += line
process.on 'exit', ->
  console.log JSON.stringify(JSON.parse(json), null, 2)
