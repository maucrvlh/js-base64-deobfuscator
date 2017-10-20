const assert = require('assert');
const b64deobfuscator = require('../dist/index');

let str = 'eyBhOiAxLCBiOiyyLCBjOiAzIH0AL';

describe('js-base64-deobfuscator', function(done) {
    it('should get the original object back', function() {
        assert.deepEqual(Buffer.from(b64deobfuscator.deobfuscate(str),'base64').toString(), '{ a: 1, b: 2, c: 3 }');
    });    
});