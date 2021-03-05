

import {	environment			} from '../../environments/environment';
import {	NgModule			} from '@angular/core';
import {	HttpClientModule	} from '@angular/common/http';
import {	Apollo				} from 'apollo-angular';
import {	HttpLink			} from 'apollo-angular/http';
import {	InMemoryCache		} from '@apollo/client/core';

@NgModule({ exports: [HttpClientModule] })

export class GraphQLModule {
	env: any;

	constructor(
		apollo:		Apollo,
		httpLink:	HttpLink,
	) {
		this.env	= environment;
		const http	= httpLink.create({ uri: this.env.cms.service });
		apollo.create({ link: http, cache: new InMemoryCache()});
	}
}
