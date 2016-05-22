import {Component, OnInit} from 'angular2/core';
import {NGReact} from './components/ng-react/index';
import {Address} from '../address/address';
import {Addresses} from '../../services/addresses';
import {RouteConfig, Router, ROUTER_DIRECTIVES} from 'angular2/router';
import {List} from '../list/';
import {New} from '../new/';
import {mailValidator} from '../../validators/mailValidator';
/* global reactNotification */

import {
    FORM_DIRECTIVES,
    FormBuilder,
    ControlGroup,
    Validators
} from 'angular2/common';

@Component({
    selector: 'edit',
    template: require('./template.html'),
    styles: [require('./style.scss')],
    providers: [],
    directives: [List, New, FORM_DIRECTIVES],
    pipes: []
})

export class Edit implements OnInit {
    editAddressForm: ControlGroup;

    constructor(fb: FormBuilder, public addressService: Addresses, private router: Router) {
        this.editAddressForm = fb.group({
            'mail': ['', Validators.compose([
                Validators.required, mailValidator])],
            'firstName': ['', Validators.required],
            'lastName': ['', Validators.required],
            'country': ['', Validators.required]
        });
    }

    ngOnInit() {
        NGReact.initialize('');
    }

    onSubmit(value: any): void {
        let editedAddress = new Address(value.firstName, value.lastName, value.mail, value.country);
        this.addressService.editAddress(this.addressService.selectedAddress, editedAddress);
        window.reactNotification('Address Updated');
        setTimeout(() => this.router.navigate(['Home']), 1000); // delay for display react message
    }

}
