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
		
	// Script
		
		// Get the reference domain.
		
			let visitedDomain = getDomain(window.location);
		
		// Analyze starting content.
		
			linkElms = document.getElementsByTagName('a');
			
			for(let linkElm of linkElms){
				
				if(!areTheDomainsTheSame(visitedDomain, getDomain(linkElm.href))) {
					linkElm.classList.add('hyperlynx-warning');
				}
				linkElm.classList.add('hyperlynx-checked');
		
			}

