# check checksum

I needed this same function for two things, so I'm using this to play with 
writing module in es6/es2015.

## example

library:
```es6
import check_checksum from 'check_checksum';

const filename = `${__dirname}/test/data-good/d3b07384d113edec49eaa6238ad5ff00`;
const expected_checksum = 'd3b07384d113edec49eaa6238ad5ff00';

check_checksum(filename, expected_checksum)
  .then(() => { /* yes, they match */ })
  .catch((error) => { /* didn't work, see error for more info */ });

```

command line:
```
usage: check-checksum [-h] [-v] [--algorithm ALGORITHM] [--encoding ENCODING]
                      filename checksum
```

## install

```
npm install https://github.com/ucldc/check_checksum.git
```

## test

Runs test and generates code coverage report.
```
npm test
```


## handy when coding 
```
npm link .
```

## links

I was trying to follow along with the examples here:

https://onsen.io/blog/mocha-chaijs-unit-test-coverage-es6/ -- some of this is out of date

https://github.com/domenic/chai-as-promised

https://booker.codes/how-to-build-and-publish-es6-npm-modules-today-with-babel/

http://stackoverflow.com/a/33608835 -- “unexpected token import” in Nodejs5 and babel?

