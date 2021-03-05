

import {	WeJaUs	}	from './app.po';

describe ('foo.weja.us App', () => {
	
	let page: WeJaUs;
	
	beforeEach (() => {
		
		page	= new WeJaUs();
	});
	
	it ('should display message saying app works', () => {
		
		page.navigateTo ();
		expect ( page.getParagraphText () ).toEqual ('app works!' );
	});
});
