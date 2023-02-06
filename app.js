#!/usr/bin/env node

const { getArguments } = require('./lib/command');
const { filterByAnimal, countEntities } = require('./lib/data');
const { data: initialData } = require('./data');

const arguments = getArguments();

let data = initialData;

if (arguments.help) {
    console.log('Usage : node app.js [--filter=pattern] [--count]');
    process.exit(0);
}

if (arguments.filter) data = filterByAnimal(data, arguments.filter);
if (arguments.count) data = countEntities(data);

console.log(JSON.stringify(data, null, "  "));
