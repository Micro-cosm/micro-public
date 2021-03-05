

import {	environment				} from '../environments/environment';
import {	Component,
			OnInit					} from '@angular/core';
import {	NavigationEnd,
			// ActivatedRoute,
			Router					} from '@angular/router';
import {	GoogleTagManagerService	} from 'angular-google-tag-manager';
import {	Title					} from '@angular/platform-browser';


@Component({
	selector:	'app-root',
	templateUrl:	'./app.component.html',
})


export class AppComponent implements OnInit {
	env:		any;
	title:		string;
	isMobile = false;

	constructor(
		public	router:			Router,
		private titleService:	Title,
		private gtmService:		GoogleTagManagerService,
	) {
		this.env = environment;
		this.router.events.forEach(item => {
			if ( item instanceof NavigationEnd ) {
				const gtmTag = { event: 'page', pageName: item.url };
				this.gtmService.pushTag( gtmTag );
			}
		});
	}

	ngOnInit() {
		console.log( 'Environment', this.env);
		this.setTitle( this.title );
		if ( window.screen.width < 751 ) { this.isMobile = true; }

		this.router.events.subscribe(evt => {
			if ( !( evt instanceof NavigationEnd )) return;
			window.scrollTo(0, 0 );
		});
	}

	public setTitle( newTitle: string) { this.titleService.setTitle( newTitle );}
}
