// Return a domain name and its extension.

	getDomain = (url) => {

		let host = new URL(url).host.split('.');	
		console.log({
			name: host[host.length - 2],
			extension: host[host.length - 1]
		});
		
		return {
			name: host[host.length - 2],
			extension: host[host.length - 1]
		};

	};

// Get the reference domain.

	let visitedDomain = getDomain(window.location);

// Browse and compare.

	linkElms = document.getElementsByTagName('a');

	for(let linkElm of linkElms){
		
		let proposedDomain = getDomain(linkElm.href);

		if(
			(proposedDomain.name != visitedDomain.name) || // If different domain...
			(proposedDomain.name == visitedDomain.name && proposedDomain.extension != visitedDomain.extension) // Or if same domain, but different extension...
		) {
			linkElm.classList.add('hyperlinx-warning');
		}

	}