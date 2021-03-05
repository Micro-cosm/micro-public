

import { environment	} from '../../environments/environment';
import { ActivatedRoute	} from '@angular/router';
import { Component		} from '@angular/core';
import { OnInit			} from '@angular/core';
import { Router			} from '@angular/router';
import { Observable		} from 'rxjs';
import { CmsService		} from 'src/app/_services/cms.service';
import { Row			} from 'src/app/_services/cms.service';
// import {	DomSanitizer } from '@angular/platform-browser';

@Component({ selector: 'app-content', templateUrl: './content.component.html' })

export class ContentComponent implements OnInit {
	env:			any;
	params:			any;
	donateButton:	any;
	content$:		Observable<Row[]>;

	loading	= true;

	constructor(
		private route:	ActivatedRoute,
		private cms:	CmsService,
		private router:	Router,
		// private sanitizer:	DomSanitizer,
	) {
		this.env	= environment;
		this.route.params.subscribe( params => this.params = params );
		this.router.routeReuseStrategy.shouldReuseRoute = () => false;
	}

	ngOnInit() {
		const pageName	= this.params.page || 'home';
		this.content$	= this.cms.getContent( pageName );
	}

	ngAfterContentInit() { this.loading = false; }
}
