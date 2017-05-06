// Manage changing the icon
var updateIcon = function () {
  chrome.storage.sync.get(function (data) {
    var clicked = data.clicked || false;
    if (!clicked) {
      chrome.browserAction.setIcon({ path: 'icon_enabled.png' });
      chrome.storage.sync.set({'clicked': true})
    } else {
      chrome.browserAction.setIcon({ path: 'icon_disabled.png' });
      chrome.storage.sync.set({'clicked': false})
    }
  });
};
updateIcon();
