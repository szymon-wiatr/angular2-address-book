import {Component} from 'angular2/core';
import {List} from '../list/';
import {Preview} from '../view/';

import {
	FORM_DIRECTIVES,
} from 'angular2/common';

@Component({
  selector: 'home',
  directives: [...FORM_DIRECTIVES, List, Preview],
  pipes: [],
  styles: [require('./style.scss')],
  template: require('./template.html')
})

export class Home {
}
