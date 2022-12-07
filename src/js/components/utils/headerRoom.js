import Headroom from "headroom.js";

function headerRoom() {
  var myElement = document.querySelector("header");

  if (myElement) {
    var headroom = new Headroom(myElement);
    headroom.init();
  }

}

export default headerRoom;
