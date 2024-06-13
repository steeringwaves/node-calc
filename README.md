# node-calc

![workflow](https://github.com/steeringwaves/node-calc/actions/workflows/test.yml/badge.svg)

Node.js based calculator with dozens of helper functions.

## dev

```sh
npm install

# bundle with esbuild
npm run build

# run
npm run bin

# type help to see a list of available commands
```

```txt
Available functions:
  parseInt       Parses a string argument and returns an integer of the specified radix or base.
  parseFloat     Parses a string argument and returns a floating point number.
  isNaN          Determines whether a value is NaN or not.
  isFinite       Determines whether a number is a finite, legal number.
  hexToDec       Converts a hexadecimal number to a decimal number.
  decToHex       Converts a decimal number to a hexadecimal number.
  deg2rad        Converts an angle from degrees to radians.
  rad2deg        Converts an angle from radians to degrees.
  floor          Returns the greatest integer less than or equal to its numeric argument.
  ceil           Returns the smallest integer greater than or equal to its numeric argument.
  round          Returns the value of a number rounded to the nearest integer.
  trunc          Returns the integer part of a number by removing any fractional digits.
  pow            Returns the base to the exponent power, that is, base^exponent.
  sqrt           Returns the square root of a number.
  abs            Returns the absolute value of a number.
  sin            Returns the sine of a number.
  cos            Returns the cosine of a number.
  tan            Returns the tangent of a number.
  asin           Returns the arcsine of a number.
  acos           Returns the arccosine of a number.
  atan           Returns the arctangent of a number.
  atan2          Returns the arctangent of the quotient of its arguments.
  log            Returns the natural logarithm (base e) of a number.
  exp            Returns the value of Ex, where E is Euler's number (approximately 2.718) and x is the number passed to it.
  min            Returns the smallest of zero or more numbers.
  max            Returns the largest of zero or more numbers.
  random         Returns a pseudo-random number between 0 and 1.
  chain          Creates a chainable proxy that wraps an object.
  evaluate       Evaluates an expression.
  derivative     Computes the derivative of an expression.
  mean           Calculates the mean of an array of numbers.
  median         Calculates the median of an array of numbers.
  mode           Calculates the mode of an array of numbers.

Available constants:
  Infinity       A numeric value representing infinity.
  NaN            A numeric value representing Not-A-Number.
  Math           A built-in object that has properties and methods for mathematical constants and functions.
  PI             A mathematical constant representing the ratio of a circle's circumference to its diameter, approximately 3.14159.
  E              A mathematical constant representing the base of the natural logarithm, approximately 2.71828.
  LN10           The natural logarithm of 10, approximately 2.30259.
  LN2            The natural logarithm of 2, approximately 0.693.
  LOG10E         The base 10 logarithm of E (approximately 0.434).
  LOG2E          The base 2 logarithm of E (approximately 1.442).
  SQRT1_2        The square root of 1/2, approximately 0.707.
  SQRT2          The square root of 2, approximately 1.414.

Available libraries:
  _              lodash is a utility library delivering consistency, customization, performance, and extras. https://lodash.com/docs/4.17.15
  Decimal        A high-performance, arbitrary-precision decimal arithmetic library. https://mikemcl.github.io/decimal.js/

Available keywords:
  const          Declares a read-only named constant.
  var            Declares a variable.
  let            Declares a block-scoped, local variable, optionally initializing it to a value.
```
