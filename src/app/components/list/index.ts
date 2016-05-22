import {Component, Input} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {Addresses} from '../../services/addresses';
import {SearchPipe} from "../../pipes/search-pipe";
import {SearchBox} from '../search-box'

import {
	FORM_DIRECTIVES,
	ControlGroup
} from 'angular2/common';

import { Address }    from '../address/address';

@Component({
	selector: 'list-items',
	pipes: [SearchPipe],
	inputs: ['term'],
	template: `
		<ul>
			<li 
			*ngFor="#address of addressService.addresses | search : ''"
			(click)='addressService.clicked(address)'
			[class.selected]="addressService.isSelected(address)" >
				{{address.firstName}} {{address.lastName}}
			</li>
		</ul>
	`
})
class ListItems {
	constructor(public addressService: Addresses) {
		// seed data

		if (JSON.parse(localStorage.getItem("addresses")) !== null) {
			this.addressService.addresses = JSON.parse(localStorage.getItem("addresses"));
		}
		if (this.addressService.addresses.length === 0) {
			this.addressService.addAddress(new Address('John', 'Smith', 'john.smith@example.com', 'United States'));
			this.addressService.addAddress(new Address('James', 'Bond', 'james.bond@co.uk', 'United Kingdom'));
			this.addressService.addAddress(new Address('Tommy', 'Atkins', 'tommy.atkins@example.com', 'United States'));
		}

		localStorage.setItem("addresses", JSON.stringify(this.addressService.addresses));

	}
}

@Component({
  selector: 'list',
  directives: [...FORM_DIRECTIVES, ROUTER_DIRECTIVES, SearchBox, ListItems],
  inputs: ['term'],
  
  styles: [require('./style.scss')],
  template: require('./template.html')
})

export class List {
	addressForm: ControlGroup;
}
