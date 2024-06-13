const yargs = require("yargs");
const Calculator = require("./lib/calculator");

const argv = yargs.usage("Usage: $0 <expression>").argv;

Calculator.Run(argv._[0]);
