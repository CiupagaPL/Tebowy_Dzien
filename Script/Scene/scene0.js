/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

scene0=function(){
  sceneTimer++;

  animateloading();
  if(nextScene!=scene){
    scene=nextScene;
    sceneTimer=0;
  }
}
