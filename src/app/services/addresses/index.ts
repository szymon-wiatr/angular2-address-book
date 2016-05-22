import {Injectable} from 'angular2/core';
import {Address} from '../../components/address/address';
var countries = require('country-list')();
declare var _: any; //imported from vendor.ts

@Injectable()
export class Addresses {
	addresses: Address[] = [];
	selectedAddress: Address;

	/**
	 * @output onAddressSelected - outputs the current
	 * 		  Address whenever a new Address is selected
	 */

	clicked(address: Address): void {
		this.selectedAddress = address;
	}

	isSelected(address: Address): boolean {
		if (!address) {
			return false;
		}
		if (!this.selectedAddress) {
			this.selectedAddress = this.addresses[0];
		}
		return (_.findIndex(this.addresses, address) === _.findIndex(this.addresses, this.selectedAddress)) ? true : false;
	}

	/* ...spread to enforce Pipe immutability 
	 *	 it gives a huge performance boost by saving Angular from checking 
	 *	 every single time an individual property or value changes
	 *	 on something that gets passed into a pipe
	 *
	 */
	addAddress(address: Address): void {
		this.addresses = [...this.addresses, address];
	}

	editAddress(addressToEdit: Address, newAddress: Address): void {
		const i = _.findIndex(this.addresses, this.selectedAddress);

		this.addresses = [
			...this.addresses.slice(0, i),
			newAddress,
			...this.addresses.slice(i + 1)
		];

		this.selectedAddress = newAddress;
		localStorage.setItem("addresses", JSON.stringify(this.addresses));
	}

	deleteAddress(address: Address): void {
		const i = _.findIndex(this.addresses, address);

		this.addresses = [
			...this.addresses.slice(0, i),
			...this.addresses.slice(i + 1)
		];

		this.selectedAddress = null;
		localStorage.setItem("addresses", JSON.stringify(this.addresses));
	}

	setCountry(country: string): void {
		this.selectedAddress.country = country;
	}

	mockedCountries(): Array<string> {
		//return countries.getData().map(country => country.name);
		return countries.getNames();
	}
}
