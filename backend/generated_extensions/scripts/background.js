console.log('moderator extension working')

chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    var title = tabs[0].title;
    console.log("Title: " + title);
  });