console.log('start background.js ...') ;

// Add a listener for the browser action
chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked(tab) {
  // The user clicked the button!
  // 'tab' is an object with information about the current open tab
    console.log( tab ) ;
    var msg = {
        message: "click!"
    }
    chrome.tabs.sendMessage(tab.id, msg);
}


console.log('end background.js !') ;