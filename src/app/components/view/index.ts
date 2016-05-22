import {Component} from 'angular2/core';
import {Addresses} from '../../services/addresses';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';

import {
	FORM_DIRECTIVES,
} from 'angular2/common';


@Component({
  selector: 'preview',
  directives: [...FORM_DIRECTIVES, ...ROUTER_DIRECTIVES],
  pipes: [],
  styles: [require('./style.scss')],
  template: require('./template.html')
})

export class Preview {
	constructor(public addressService: Addresses) {

	}
}
