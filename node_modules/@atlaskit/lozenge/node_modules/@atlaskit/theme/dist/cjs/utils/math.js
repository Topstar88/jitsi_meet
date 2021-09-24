"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;

function add(fn, addend) {
  return function (props) {
    return fn(props) + addend;
  };
}

function subtract(fn, subtrahend) {
  return function (props) {
    return fn(props) - subtrahend;
  };
}

function multiply(fn, factor) {
  return function (props) {
    return fn(props) * factor;
  };
}

function divide(fn, divisor) {
  return function (props) {
    return fn(props) / divisor;
  };
}