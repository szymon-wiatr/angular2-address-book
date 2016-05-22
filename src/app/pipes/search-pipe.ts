import {Pipe} from 'angular2/core';

@Pipe({
	name: "search"
})

export class SearchPipe {
	transform(value, [term]) {
		// TODO: Bind term with input in list-items template
		//return value.filter( ( item ) => item.firstName.startsWith(term));
		return value.filter((item) => value);
	}
};
