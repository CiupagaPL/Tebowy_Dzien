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
  if(canStart){ sceneTimer++; }

  animateloading();
  if(nextScene!=scene){
    scene=nextScene;
  }
}
