#!/bin/env node
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _crypto = require('crypto');

var _crypto2 = _interopRequireDefault(_crypto);

var _argparse = require('argparse');

var _check_checksum = require('./check_checksum');

var _check_checksum2 = _interopRequireDefault(_check_checksum);

var _package = require('../package.json');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var parser = new _argparse.ArgumentParser({
  version: _package.version,
  description: _package.description,
  addHelp: true
});

parser.addArgument(['filename'], {
  'help': 'path to the file to check'
});
parser.addArgument(['checksum'], {
  'help': 'expected checksum value'
});
parser.addArgument(['--algorithm'], {
  'help': 'checksum algorithm, default `md5`, any openSSL value possible ' + _crypto2.default.getHashes(),
  'defaultValue': 'md5'
});
parser.addArgument(['--encoding'], {
  'help': 'checksum encoding, default `hex`, can also be `latin1` or `base64`',
  'defaultValue': 'hex'
});

var main = function main(args) {
  // lets args be supplied by test or argparse
  var a = {};
  if (args) {
    a = new _argparse.Namespace(args);
  } else {
    a = parser.parseArgs();
  }
  (0, _check_checksum2.default)(a.filename, a.checksum, a.algorithm, a.encoding).then(function () {
    console.log('match');
  }).catch(function (error) {
    console.log(error);
    process.exit(1);
  });
};

/** copy python's main idiom for command line programs */
if (require.main === module) {
  main();
}

exports.default = main;

/* Copyright © 2017, Regents of the University of California

All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:

 * Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in
   the documentation and/or other materials provided with the
   distribution.
 * Neither the name of the University of California nor the names
   of its contributors may be used to endorse or promote products
   derived from this software without specific prior written
   permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
"AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS
FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING,
BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN
ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.

*/