import check_checksum from '../src/check_checksum';

var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");

chai.use(chaiAsPromised);

chai.should();

describe('check_checksum', () => {
  const testsum = 'd3b07384d113edec49eaa6238ad5ff00';
  describe('#check_checksum()', () => {

    it('should match here', () => {
      return check_checksum(`${__dirname}/data-good/${testsum}`, testsum)
        .should.eventually.equal(true);
    });

    it('should not match here', () => {
      return check_checksum(`${__dirname}/data-bad/${testsum}`, testsum)
        .should.be.rejectedWith('checksum mismatch: found db5f554e153ae6d01b400e2f6edb68af expected d3b07384d113edec49eaa6238ad5ff00')
    });

    it('should fail when file does not exist', () => {
      return check_checksum(`${__dirname}/data-not-found/${testsum}`, testsum)
        .should.be.rejectedWith(Error);
    });
  });
  describe('command line wrapper', () => {
  });
});
