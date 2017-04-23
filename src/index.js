#!/bin/env node
import { ArgumentParser, Namespace } from 'argparse';
import check_checksum from './check_checksum';

const main = (args) => {
  let a = {};
  if (args) {
    a = new Namespace(args);
  } else {
  }
  check_checksum(a.filename, a.checksum, a.algorithm, a.encoding)
  .then(() => {
    console.log('match');
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
}

export default main;
