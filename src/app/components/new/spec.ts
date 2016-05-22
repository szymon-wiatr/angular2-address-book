import {
  it,
  fit,
  inject,
  describe,
  ddescribe,
  beforeEachProviders,
} from 'angular2/testing';

// Load the implementations that should be tested
import {New} from './index';

describe('New', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    New
  ]);

  it('should log ngOnInit', inject([New], (preview) => {
    spyOn(console, 'log');
    expect(console.log).not.toHaveBeenCalled();

  }));

});
