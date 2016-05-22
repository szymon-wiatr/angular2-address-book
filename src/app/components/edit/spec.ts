import {
    it,
    inject,
    injectAsync,
    describe,
    beforeEachProviders,
    TestComponentBuilder
} from 'angular2/testing';

import {Component, provide} from 'angular2/core';

// Load the implementations that should be tested
import {Edit} from './index.async';

describe('Edit', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Edit
  ]);

  it('should log ngOnInit', inject([ Edit ], (edit) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

  }));

});