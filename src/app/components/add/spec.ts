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
import {Add} from './index.async';

describe('Add', () => {
  // provide our implementations or mocks to the dependency injector
  beforeEachProviders(() => [
    Add
  ]);

});