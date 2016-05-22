import {Component, OnInit} from 'angular2/core';
import {NGReact} from './components/ng-react/index';
import {Addresses} from '../../services/addresses';
import {List} from '../list/';
import {New} from '../new/';


@Component({
    selector: 'add',
    template: require('./template.html'),
    styles: [require('./style.scss')],
    providers: [],
    directives: [List, New],
    pipes: []
})

export class Add implements OnInit {

    constructor(public addressService: Addresses) {
    }

    ngOnInit() {
        NGReact.initialize('');
    }
}
