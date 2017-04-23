#!/bin/env node
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _argparse = require('argparse');

var _check_checksum = require('./check_checksum');

var _check_checksum2 = _interopRequireDefault(_check_checksum);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var main = function main(args) {
  var a = {};
  if (args) {
    a = new _argparse.Namespace(args);
  } else {}
  (0, _check_checksum2.default)(a.filename, a.checksum, a.algorithm, a.encoding).then(function () {
    console.log('match');
  }).catch(function (error) {
    console.log(error);
    process.exit(1);
  });
};

exports.default = main;