

import { environment	} from '../../environments/environment';
import { Component		} from '@angular/core';

@Component({
	selector:		'app-home',
	templateUrl:	'./home.component.html',
	styleUrls:		['./home.component.sass'],
})

export class HomeComponent {
	env:				any;
	cleanStyleImage1:	any;
	cleanStyleImage2:	any;

	constructor() { this.env = environment; }
}
