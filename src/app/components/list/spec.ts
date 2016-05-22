import {
  it,
  fit,
  inject,
  describe,
  ddescribe,
  beforeEachProviders,
} from 'angular2/testing';

// Load the implementations that should be tested
import {List} from './index';

describe('List', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    List
  ]);

  it('should log ngOnInit', inject([List], (list) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

  }));

});
