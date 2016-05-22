import {Component, Output, EventEmitter} from 'angular2/core';

@Component({
	selector: 'search-box',
	template: `
		<input #input type="text" class="search" (input)="update.emit(input.value)"  />
	`
})

export class SearchBox {
	@Output() update = new EventEmitter();

	ngOnInit() {
		this.update.emit('');
	}
}
