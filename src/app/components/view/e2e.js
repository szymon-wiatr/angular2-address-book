'use strict';

describe('List', function() {

    beforeEach(function() {
        browser.get('/');
    });

    it('should have <list>', function() {
        /* eslint-disable no-undef */
        var list = element(by.css('app list'));
        /* eslint-enable no-undef */
        expect(list.isPresent()).toEqual(true);
        expect(list.getText()).toEqual('List Works!');
    });

});
