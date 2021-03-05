

import { ComponentFixture	} from '@angular/core/testing';
import { TestBed			} from '@angular/core/testing';
import { DevHeadComponent	} from './dev-head.component';

describe('DevHeadComponent', () => {
	let component:	DevHeadComponent;
	let fixture:	ComponentFixture<DevHeadComponent>;

	beforeEach(() => {TestBed.configureTestingModule({ declarations: [DevHeadComponent] }).compileComponents();});

	beforeEach(() => {
		fixture		= TestBed.createComponent( DevHeadComponent );
		component	= fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => { expect( component ).toBeTruthy();});
});
