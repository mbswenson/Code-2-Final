var images = document.getElementsByTagName('img');

for (var i = 0, l = images.length; i < l; i++) {
  images[i].src = chrome.extension.getURL("mojib5.png");
}
