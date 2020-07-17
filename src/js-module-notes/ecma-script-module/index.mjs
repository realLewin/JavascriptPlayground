//Use mjs to use ACMAScript explictly
/**
 * Only allow static synchonous use import
 * Imports and exports are linked before evaluating the module
 * imports and exports are immutable
 */
import a from "./main.mjs";
console.log(a);
