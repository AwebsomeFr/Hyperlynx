// Functions

	// Return a domain name and its extension from an URL.

		const getDomain = (url) => {

			let host = new URL(url).host.split('.');
					
			return {
				name: host[host.length - 2],
				extension: host[host.length - 1],
			};

		};
		
	// Compare two domains (name + extension).

		const areTheDomainsTheSame = (visitedDomain, proposedDomain) => {

			if(proposedDomain.name != undefined) { // Exclude #, javascript:, malformed url...

				if(
					(proposedDomain.name != visitedDomain.name) ||
					(proposedDomain.name == visitedDomain.name && proposedDomain.extension != visitedDomain.extension)
				) {
					return false;
				}
	
			}
			
			return true;
			
		};
		
	// Check if new hyperlinks have appeared.

		const areThereAnyNewElements = (hyperlinksCount) => {

			if(document.getElementsByTagName('a').length != hyperlinksCount) {
				return true;
			}

			return false;

		};

	// Assign hyperlynx classes on the elements.

		const hyperlynxElements = (hyperlinkElms, startIndex, endIndex) => {

			for(let i = startIndex, l = endIndex; i >= l; i--) {
				
				if(!areTheDomainsTheSame(visitedDomain, getDomain(hyperlinkElms[i].href))) {
					hyperlinkElms[i].classList.add('hyperlynx-warning');
				}
				
			}

		};


	// Script
		
		// Started analyze.
			
			const visitedDomain = getDomain(window.location);
			
			let hyperlinkElms = document.getElementsByTagName('a');

			let hyperlinksCount = hyperlinkElms.length; 
			let startIndex = hyperlinkElms.length - 1;
			let stopIndex = 0;

			hyperlynxElements(hyperlinkElms, startIndex, stopIndex);

		// Watching for changes.

			window.onscroll = (e) => {

				if(areThereAnyNewElements(hyperlinksCount)) {

					// Exclude links already reviewed.
					stopIndex = ++startIndex;

					// Actualize variables to get the new entries only.
					hyperlinkElms = document.getElementsByTagName('a');
					hyperlinksCount = hyperlinkElms.length; 
					startIndex = hyperlinkElms.length - 1;

					hyperlynxElements(hyperlinkElms, startIndex, stopIndex);
			
				}
					
			};