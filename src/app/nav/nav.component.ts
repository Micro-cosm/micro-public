

import { environment	} from '../../environments/environment';
import { Component		} from '@angular/core';
import { NavigationEnd	} from '@angular/router';
import { Router			} from '@angular/router';
import { Title			} from '@angular/platform-browser';

import { GoogleTagManagerService	} from 'angular-google-tag-manager';

@Component({ selector: 'app-nav', templateUrl: './nav.component.html' })

export class NavComponent {
	env:		any;
	error:		boolean;
	index:		number;
	logoSrc:	string;
	title:		string;

	titleBgColor = 'cyan';

	constructor(
		private gtmService:		GoogleTagManagerService,
		public	router:			Router,
		private titleService:	Title,
	) {
		this.env		= environment;
		this.logoSrc	= this.env.assets.bucket + '/images/greysacale-transparent-wj.png';

		this.titleService.setTitle( this.title );

		this.router.events.forEach(item => {
			if ( item instanceof NavigationEnd ) {
				const gtmTag = {event: 'page', pageName: item.url};
				this.gtmService.pushTag(gtmTag).then( r => console.log('GTM push tag callback', r ));
			}
		}).then( r => console.log('Router event callback:', r ));
	}
}
