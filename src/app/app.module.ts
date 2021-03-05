

import { environment				} from '../environments/environment';
import { BrowserAnimationsModule	} from '@angular/platform-browser/animations';
import { BrowserModule			} from '@angular/platform-browser';
import { CdkTableModule			} from '@angular/cdk/table';
import { CdkTreeModule			} from '@angular/cdk/tree';
import { DragDropModule			} from '@angular/cdk/drag-drop';
import { FlexLayoutModule		} from '@angular/flex-layout';
import { HttpClientModule		} from '@angular/common/http';
import { NgModule				} from '@angular/core';
import { ScrollingModule		} from '@angular/cdk/scrolling';
import { Title					} from '@angular/platform-browser';
import { GraphQLModule			} from './sub-modules/graphql.module';
import { MaterialModule			} from './sub-modules/material.module';
import { AppComponent			} from './app.component';
import { AppRoutingModule		} from './app-routing.module';
import { DevHeadComponent		} from './dev-head/dev-head.component';
import { ContentComponent		} from './content/content.component';
import { ContentFullComponent	} from './content-full/content-full.component';
import { HomeComponent			} from './home/home.component';
import { NavComponent			} from './nav/nav.component';
import { NavPipe				} from './_pipes/nav.pipe';
import { SafePipe				} from './_pipes/safe.pipe';

import 'hammerjs';
import {CmsService} from './_services/cms.service';

@NgModule({
	declarations: [
		AppComponent,
		ContentComponent,
		ContentFullComponent,
		DevHeadComponent,
		HomeComponent,
		NavComponent,
		NavPipe,
		SafePipe,
	],
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		AppRoutingModule,
		HttpClientModule,
		MaterialModule,
		FlexLayoutModule,
		CdkTableModule,
		CdkTreeModule,
		DragDropModule,
		GraphQLModule,
		ScrollingModule,
	],
	providers: [
		Title,
		CmsService,
		{ provide: 'googleTagManagerId', useValue: environment.google.analytics.trackingCode }
	],
	bootstrap: [AppComponent],
})

export class AppModule {}
