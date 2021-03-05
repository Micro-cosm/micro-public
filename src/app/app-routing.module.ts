

import { NgModule				} from '@angular/core';
import { RouterModule			} from '@angular/router';
import { Routes					} from '@angular/router';
import { ContentComponent		} from './content/content.component';
import { ContentFullComponent	} from './content-full/content-full.component';
import { HomeComponent			} from './home/home.component';

export const appRoutes: Routes = [
	{ path: '',		redirectTo: '/content-full/home', pathMatch: 'full'	},
	{ path: 'home',					component: HomeComponent			},
	{ path: 'content/:page',		component: ContentComponent			},
	{ path: 'content-full',			component: ContentFullComponent		},
	{ path: 'content-full/:page',	component: ContentFullComponent		},
	{ path: '**',	redirectTo: '/content/home'							},
];

@NgModule({
	imports:	[RouterModule.forRoot( appRoutes, { enableTracing: false, useHash: true })],
	providers:	[],
	exports:	[RouterModule],
})

export class AppRoutingModule {}
