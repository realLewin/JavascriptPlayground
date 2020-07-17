// Use cjs extension to use CommonJS module explictly
/**
 * Sllow dynamic synchonous use require()
 * Exports are only known after evaluating the module
 * Exports can be added, removed and replaced even after the module has initialized
 */
const main = require("./main.cjs");

console.log(main.a);
