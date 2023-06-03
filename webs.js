// Web | JavaScript

function makeBlankWindowContent(content) {
  var BlankWindow = window.open("about:blank");
  if (BlankWindow) {
    BlankWindow.addEventListener("load", function() {
      var WindowDocument = BlankWindow.document;
      WindowDocument.open();
      WindowDocument.write("");
      WindowDocument.close();
      // ...
      WindowDocument.open();
      WindowDocument.write(content);
      // ...
      WindowDocument.close();
    });
  };
};

function openWebsite(website) {
  var Website = "https://" + website;
  window.open(Website);
};
