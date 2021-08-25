const sumar = require('../index');
const assert = require('assert');

describe('sumar', function() {
    it('deberia ser 12', () => {
        assert.equal(12, sumar(5,7))
    }, timeout)
})