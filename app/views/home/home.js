// require the plugin
var Nfc = require("nativescript-nfc").Nfc;

// instantiate the plugin
var nfc; 

exports.pageLoaded = function(args){
  nfc  = new Nfc();
 
}

exports.doCheckAvailable = function(){
    nfc.available().then((avail) => {
        console.log(avail ? "Yes" : "No");
    });
}

exports.doCheckEnabled = function(){
    nfc.enabled().then(
        function(on) {
          console.log(on ? "Yes" : "No");
        }
      );
}

var NfcTagData = [{
  'id':[],
  'techList':[]
}
]

exports.doStartTagListener = function(){
  nfc.setOnTagDiscoveredListener(function(data) {
    console.log("Discovered a tag with ID " + data.id);
  }).then(
    function() {
      console.log("OnTagDiscovered listener added");
    }
  );
}