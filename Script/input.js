/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

document.addEventListener("keyup", function(_event) {
  switch(scene){
    case 0:
      if(_event.key=="Enter") {
        canStart=true;
      }
      break;
    case 1:
      break;
  }
});
