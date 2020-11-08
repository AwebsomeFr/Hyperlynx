let currentURL = new URL(window.location);

linkElms = document.getElementsByTagName('a');

for(let linkElm of linkElms){
    
    let newUrl = new URL(linkElm.href); 
    
    if(newUrl.host != currentURL.host) {
        linkElm.classList.add('hyperlinx-warning');
    }

}
