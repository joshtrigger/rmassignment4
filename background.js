chrome.browserAction.onClicked.addListener(function(activeTab){
  var newURL = "http://www.drumeo.com/";
  chrome.tabs.create({ url: newURL });
});