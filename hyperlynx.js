// Functions

	// Return a domain name and its extension from an URL.

		getDomain = (url) => {

			let host = new URL(url).host.split('.');
					
			return {
				name: host[host.length - 2],
				extension: host[host.length - 1],
			};

		};
		
	// Compare two domains (name + extension).

		areTheDomainsTheSame = (visitedDomain, proposedDomain) => {

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

	// Assign hyperlynx classes on the elements.

		hyperlynxElements = (hyperlinkElms) => {

			for(let hyperlinkElm of hyperlinkElms){
				
				if(!areTheDomainsTheSame(visitedDomain, getDomain(hyperlinkElm.href))) {
					hyperlinkElm.classList.add('hyperlynx-warning');
				}

				hyperlinkElm.classList.add('hyperlynx-checked');
		
			}

		};
		
	// Script
		
		let visitedDomain = getDomain(window.location);
		hyperlynxElements(document.getElementsByTagName('a'));
			
