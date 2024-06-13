const repl = require("repl");

const knownLibraries = [
	{
		name: "_",
		description:
			"lodash is a utility library delivering consistency, customization, performance, and extras. https://lodash.com/docs/4.17.15"
	},
	{
		name: "Decimal",
		description:
			"A high-performance, arbitrary-precision decimal arithmetic library. https://mikemcl.github.io/decimal.js/"
	}
];

const knownFunctions = [
	{
		name: "parseInt",
		description: "Parses a string argument and returns an integer of the specified radix or base."
	},
	{
		name: "parseFloat",
		description: "Parses a string argument and returns a floating point number."
	},
	{
		name: "isNaN",
		description: "Determines whether a value is NaN or not."
	},
	{
		name: "isFinite",
		description: "Determines whether a number is a finite, legal number."
	},
	{
		name: "isInteger",
		description: "Determines whether a value is an integer."
	},
	{
		name: "isSafeInteger",
		description: "Determines whether a value is a safe integer."
	},
	{
		name: "hex2Dec",
		description: "Converts a hexadecimal number to a decimal number."
	},
	{
		name: "dec2Hex",
		description: "Converts a decimal number to a hexadecimal number."
	},
	{
		name: "deg2rad",
		description: "Converts an angle from degrees to radians."
	},
	{
		name: "rad2deg",
		description: "Converts an angle from radians to degrees."
	},
	{
		name: "floor",
		description: "Returns the greatest integer less than or equal to its numeric argument."
	},
	{
		name: "ceil",
		description: "Returns the smallest integer greater than or equal to its numeric argument."
	},
	{
		name: "round",
		description: "Returns the value of a number rounded to the nearest integer."
	},
	{
		name: "trunc",
		description: "Returns the integer part of a number by removing any fractional digits."
	},
	{
		name: "pow",
		description: "Returns the base to the exponent power, that is, base^exponent."
	},
	{
		name: "sqrt",
		description: "Returns the square root of a number."
	},
	{
		name: "abs",
		description: "Returns the absolute value of a number."
	},
	{
		name: "sin",
		description: "Returns the sine of a number."
	},
	{
		name: "cos",
		description: "Returns the cosine of a number."
	},
	{
		name: "tan",
		description: "Returns the tangent of a number."
	},
	{
		name: "asin",
		description: "Returns the arcsine of a number."
	},
	{
		name: "acos",
		description: "Returns the arccosine of a number."
	},
	{
		name: "atan",
		description: "Returns the arctangent of a number."
	},
	{
		name: "atan2",
		description: "Returns the arctangent of the quotient of its arguments."
	},
	{
		name: "log",
		description: "Returns the natural logarithm (base e) of a number."
	},
	{
		name: "exp",
		description:
			"Returns the value of Ex, where E is Euler's number (approximately 2.718) and x is the number passed to it."
	},
	{
		name: "min",
		description: "Returns the smallest of zero or more numbers."
	},
	{
		name: "max",
		description: "Returns the largest of zero or more numbers."
	},
	{
		name: "random",
		description: "Returns a pseudo-random number between 0 and 1."
	},
	{
		name: "chain",
		description: "Creates a chainable proxy that wraps an object."
	},
	{
		name: "evaluate",
		description: "Evaluates an expression."
	},
	{
		name: "derivative",
		description: "Computes the derivative of an expression."
	},
	{
		name: "mean",
		description: "Calculates the mean of an array of numbers."
	},
	{
		name: "median",
		description: "Calculates the median of an array of numbers."
	},
	{
		name: "mode",
		description: "Calculates the mode of an array of numbers."
	}
];

const knownConstants = [
	{
		name: "Infinity",
		description: "A numeric value representing infinity."
	},
	{
		name: "NaN",
		description: "A numeric value representing Not-A-Number."
	},
	{
		name: "undefined",
		description: "A global property whose value is undefined."
	},
	{
		name: "null",
		description: "A special keyword denoting a null value."
	},
	{
		name: "Math",
		description: "A built-in object that has properties and methods for mathematical constants and functions."
	},
	{
		name: "PI",
		description:
			"A mathematical constant representing the ratio of a circle's circumference to its diameter, approximately 3.14159."
	},
	{
		name: "E",
		description: "A mathematical constant representing the base of the natural logarithm, approximately 2.71828."
	},
	{
		name: "LN10",
		description: "The natural logarithm of 10, approximately 2.30259."
	},
	{
		name: "LN2",
		description: "The natural logarithm of 2, approximately 0.693."
	},
	{
		name: "LOG10E",
		description: "The base 10 logarithm of E (approximately 0.434)."
	},
	{
		name: "LOG2E",
		description: "The base 2 logarithm of E (approximately 1.442)."
	},
	{
		name: "SQRT1_2",
		description: "The square root of 1/2, approximately 0.707."
	},
	{
		name: "SQRT2",
		description: "The square root of 2, approximately 1.414."
	}
];

const knownKeywords = [
	{
		name: "const",
		description: "Declares a read-only named constant."
	},
	{
		name: "var",
		description: "Declares a variable."
	},
	{
		name: "let",
		description: "Declares a block-scoped, local variable, optionally initializing it to a value."
	}
];

function help() {
	let maxNameLength = 0;

	const all = knownLibraries.concat(knownFunctions).concat(knownConstants).concat(knownKeywords);

	all.forEach((f) => {
		if (f.name.length > maxNameLength) {
			maxNameLength = f.name.length;
		}
	});

	const lines = [];

	lines.push("");
	lines.push("Available functions:");
	knownFunctions.forEach((f) => {
		if ("undefined" !== typeof imports[f.name] || "undefined" !== typeof global[f.name]) {
			const padding = " ".repeat(maxNameLength - f.name.length);
			lines.push(`  ${f.name}${padding}  ${f.description}`);
		}
	});

	lines.push("");
	lines.push("Available constants:");
	knownConstants.forEach((f) => {
		if ("undefined" !== typeof imports[f.name] || "undefined" !== typeof global[f.name]) {
			const padding = " ".repeat(maxNameLength - f.name.length);
			lines.push(`  ${f.name}${padding}  ${f.description}`);
		}
	});

	lines.push("");
	lines.push("Available libraries:");
	knownLibraries.forEach((f) => {
		const padding = " ".repeat(maxNameLength - f.name.length);
		lines.push(`  ${f.name}${padding}  ${f.description}`);
	});

	lines.push("");
	lines.push("Available keywords:");
	knownKeywords.forEach((f) => {
		const padding = " ".repeat(maxNameLength - f.name.length);
		lines.push(`  ${f.name}${padding}  ${f.description}`);
	});

	return lines.join("\n");
}

const mathjs = require("mathjs");
const Decimal = require("decimal.js");
const hex2dec = require("hex2dec");
const _ = require("lodash");

const imports = {
	// help,
	hex2Dec: hex2dec.hexToDec,
	dec2Hex: hex2dec.decToHex,
	deg2rad: (v) => mathjs.unit(v, "deg").to("rad").value,
	rad2deg: (v) => mathjs.unit(v, "rad").to("deg").value,
	mean: _.mean,
	median: mathjs.median,
	mode: mathjs.mode,
	_,
	Decimal,
	derivative: mathjs.derivative,
	max: mathjs.max,
	min: mathjs.min,
	abs: mathjs.abs,
	sin: mathjs.sin,
	cos: mathjs.cos,
	tan: mathjs.tan,
	asin: mathjs.asin,
	acos: mathjs.acos,
	atan: mathjs.atan,
	atan2: mathjs.atan2,
	ceil: mathjs.ceil,
	chain: mathjs.chain,
	floor: mathjs.floor,
	evaluate: mathjs.evaluate,
	exp: mathjs.exp,
	log: mathjs.log,
	pow: mathjs.pow,
	random: mathjs.random,
	round: mathjs.round,
	sqrt: mathjs.sqrt,
	trunc: Math.trunc,
	PI: Math.PI,
	E: Math.E,
	LN10: Math.LN10,
	LN2: Math.LN2,
	LOG10E: Math.LOG10E,
	LOG2E: Math.LOG2E,
	SQRT1_2: Math.SQRT1_2,
	SQRT2: Math.SQRT2
};

class Calculator {
	static Run(expression) {
		if (expression) {
			try {
				const result = mathjs.evaluate(expression, imports);
				process.stdout.write(`${result}\n`);
				process.exit(0);
			} catch (error) {
				process.exit(1);
			}

			return;
		}

		const r = repl.start("calc> ");

		Object.keys(imports).forEach((name, i) => {
			Object.defineProperty(r.context, name, {
				configurable: false,
				enumerable: true,
				value: imports[name]
			});
		});

		// Define help as a global getter
		Object.defineProperty(r.context, "help", {
			configurable: false,
			enumerable: true,
			get: () => {
				process.stdout.write(`${help()}\n`);
				return 0;
			}
		});
	}
}

module.exports = Calculator;
