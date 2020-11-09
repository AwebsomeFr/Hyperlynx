// Extract domain name and its extension.
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

// Get reference.
let visitedDomain = getDomain(window.location);

// Browse and compare.
linkElms = document.getElementsByTagName('a');

for(let linkElm of linkElms){
	
	let proposedDomain = getDomain(linkElm.href);


	if(proposedDomain.name != visitedDomain.name) {
		linkElm.classList.add('hyperlinx-warning');
	}

}