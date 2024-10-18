/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

let resolutionError=false,ratio=16/9;
let fpsLimit=60,lastFrame=0;
let canStart=false;
let scene=0,sceneTimer=0,nextScene=0;

let _html=document.getElementById("html");

let _error=document.getElementById("error");

let _window={
  width:window.innerWidth,
  height:window.innerHeight,
  ratio:window.innerWidth/window.innerHeight,
};

let _audio={
  load1:new Audio("Source/Sounds/load1.mp3"),
  load2:new Audio("Source/Sounds/load2.mp3"),
  load3:new Audio("Source/Sounds/load3.mp3"),
};

let _currentResolution={
  width:640,
  height:360,
};

let _render={
  base:document.getElementById("render"),

  width:window.innerWidth,
  height:window.innerHeight,
};

let _scale={
  width:_render.width/640,
  height:_render.height/480,
};

let _context=_render.base.getContext("2d");

let _background={
  width:_currentResolution.width,
  height:_currentResolution.height,

  x:0,
  y:0,

  color0:"#002f6d",
  color1:"#03a188",
  color2:"#ed7900",
  color3:"#e40002",
  color4:"#037aa2",
  color5:"#50aa2e",
  color6:"#515a61",
  color7:"#601373",
};

let _versionText={
  value:"Test 1",
  font:"72px orangeKid",
  color:"red",

  x:32,
  y:64,
}

let _startText={
  value:"Naciśnij Enter aby rozpocząć",
  font:"48px orangeKid",
  color:"white",

  x:128,
  y:_background.height-128,
}

let _startTEB={
  width:64,
  height:64,

  x:_render.width-64-32,
  y:_render.height-64-32,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
  img3:new Image(),
  img4:new Image(),
  img5:new Image(),
  img6:new Image(),
  img7:new Image(),
};

_audio.load1.load();
_audio.load2.load();
_audio.load3.load();

_startTEB.img0.src = "Source/TEB/teb0.png";
_startTEB.img1.src = "Source/TEB/teb1.png";
_startTEB.img2.src = "Source/TEB/teb2.png";
_startTEB.img3.src = "Source/TEB/teb3.png";
_startTEB.img4.src = "Source/TEB/teb4.png";
_startTEB.img5.src = "Source/TEB/teb5.png";
_startTEB.img6.src = "Source/TEB/teb6.png";
_startTEB.img7.src = "Source/TEB/teb7.png";
