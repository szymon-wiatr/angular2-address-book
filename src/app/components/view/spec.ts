import {
  it,
  fit,
  inject,
  describe,
  ddescribe,
  beforeEachProviders,
} from 'angular2/testing';

// Load the implementations that should be tested
import {Preview} from './index';

describe('Preview', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Preview
  ]);

  it('should log ngOnInit', inject([Preview], (preview) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

  }));

});
