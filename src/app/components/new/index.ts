import {Component} from 'angular2/core';
import {Address} from '../address/address';
import {Addresses} from '../../services/addresses';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {mailValidator} from '../../validators/mailValidator';


import {
	FORM_DIRECTIVES,
	FormBuilder,
	ControlGroup,
	Validators
} from 'angular2/common';

@Component({
  selector: 'new',
  directives: [...FORM_DIRECTIVES],
  pipes: [],
  styles: [require('./style.scss')],
  template: require('./template.html')
})

export class New {
	addressForm: ControlGroup;

	constructor(fb: FormBuilder, public addressService: Addresses, private router: Router) {

		this.addressForm = fb.group({
			'mail': ['', Validators.compose([
						 Validators.required, mailValidator])],
			'firstName': ['', Validators.required],
			'lastName': ['', Validators.required],
			'country': ['', Validators.required]
		});
	}

	onSubmit(value: any): void {
		let newAddress = new Address(value.firstName, value.lastName, value.mail, value.country);
		this.addressService.addAddress(newAddress);
		this.addressService.selectedAddress = newAddress;
		localStorage.setItem("addresses", JSON.stringify(this.addressService.addresses));
		this.router.navigate(['Home']);
	}

}
