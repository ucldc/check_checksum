const crypto = require('crypto');
const fs = require('fs');

/**
 * Takes the checksum of a given filename, and checks that it matches expected value
 * @param {string} filename - path to the file to check
 * @param {string} checksum - expected value of checksum
 * @param {string} algorithm - for crypto.createHash(); crypto.getHashes() for values supported by local OpenSSL
 * @param {string} encoding - for hash.digest()
 * based on https://blog.tompawlak.org/calculate-checksum-hash-nodejs-javascript
 */ 
const check_checksum = (filename, checksum, algorithm = 'md5', encoding = 'hex') => {
  return new Promise((resolve, reject) => {
    const hash = crypto.createHash(algorithm);
    const stream = fs.createReadStream(filename);
    stream.on('data', (data) => {
      hash.update(data);
    });
    stream.on('end', () => {
      const found = hash.digest(encoding);
      if (found === checksum) {
        resolve(true);
      } else {
        reject(`checksum mismatch: found ${found} expected ${checksum}`);
      }
    });
    stream.on('error', (error) => {
      reject(error);
    });
  })
};
 
 
export default check_checksum;
 
 
/*
Copyright © 2017, Regents of the University of California
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
