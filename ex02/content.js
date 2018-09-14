console.log('start content.js ...') ;

// Listen for messages
chrome.runtime.onMessage.addListener(receiver);

// Callback for when a message is received
function receiver(request, sender, sendResponse) {
  if (request.message === "click!") {
    console.log( 'recieve click event !!') ;
  }
}

console.log('end content.js !') ;