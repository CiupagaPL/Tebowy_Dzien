/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

let resolutionError=false,ratio=16/9,scale=1.00;
let fpsLimit=60,lastFrame=0;
let canStart=false;
let scene=0,sceneTimer=0,nextScene=0;
let shouldClose=false;

let _html=document.getElementById("html");

let _error=document.getElementById("error");

let _window={
  width:window.innerWidth,
  height:window.innerHeight,
  ratio:window.innerWidth/window.innerHeight,
};

let _audio={
  load1:new Audio("Source/Sound/load1.mp3"),
  load2:new Audio("Source/Sound/load2.mp3"),
  load3:new Audio("Source/Sound/load3.mp3"),
};

let _mouse={
  width:24,height:24,

  x:0,y:0,
};

let _currentResolution={
  width:640,height:360,
};

let _render={
  base:document.getElementById("render"),

  width:window.innerWidth,
  height:window.innerHeight,
};

let _context=_render.base.getContext("2d");

let _background={
  width:_currentResolution.width,
  height:_currentResolution.height,

  x:0,y:0,

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
  value:"Test 2",

  size:36,
  on:false,
  animation:false,
  font:"orangeKid",
  debug:"",
  color:"red",

  x:0,y:0,
}

let _startText={
  value:"Naciśnij Enter aby rozpocząć",

  size:24,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
}

let _startTEB={
  width:128,height:128,

  x:0,y:0,

  img0:new Image(),
  img1:new Image(),
  img2:new Image(),
  img3:new Image(),
  img4:new Image(),
  img5:new Image(),
  img6:new Image(),
  img7:new Image(),
};

let _menuTitle={
  width:480,height:270,

  x:0,y:0,

  img:new Image(),
};

let _menuStart={
  width:32,height:32,

  x:0,y:0,

  hover:false,

  img:new Image(),
  imgOn:new Image(),
};
let _menuStartText={
  value:"Start",

  size:12,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};

let _menuLevel={
  width:32,height:32,

  x:0,y:0,

  hover:false,
  on:false,
  animation:false,

  img:new Image(),
  imgOn:new Image(),
};
let _menuLevelText={
  value:"Poziomy",

  size:12,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};

let _menuSetting={
  width:32,height:32,

  x:0,y:0,

  hover:false,
  on:false,
  animation:false,

  img:new Image(),
  imgOn:new Image(),
};
let _menuSettingText={
  value:"Opcje",

  size:12,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};

let _menuAbout={
  width:32,height:32,

  x:0,y:0,

  hover:false,
  on:false,
  animation:false,

  img:new Image(),
  imgOn:new Image(),
};
let _menuAboutText={
  value:"O grze",

  size:12,
  font:"orangeKid",
  debug:"",
  color:"white",

  x:0,y:0,
};

let _menuClipboard={
  width:128,height:184,

  x:0,y:0,

  on:false,

  img:new Image(),
};

_audio.load1.load();
_audio.load2.load();
_audio.load3.load();

_startTEB.img0.src="Source/TEB/teb0.png";
_startTEB.img1.src="Source/TEB/teb1.png";
_startTEB.img2.src="Source/TEB/teb2.png";
_startTEB.img3.src="Source/TEB/teb3.png";
_startTEB.img4.src="Source/TEB/teb4.png";
_startTEB.img5.src="Source/TEB/teb5.png";
_startTEB.img6.src="Source/TEB/teb6.png";
_startTEB.img7.src="Source/TEB/teb7.png";

_menuTitle.img.src="Source/title.png";

_menuStart.img.src="Source/UI/Button/start.png";
_menuStart.imgOn.src="Source/UI/Button/startOn.png";

_menuLevel.img.src="Source/UI/Button/level.png";
_menuLevel.imgOn.src="Source/UI/Button/levelOn.png";

_menuSetting.img.src="Source/UI/Button/setting.png";
_menuSetting.imgOn.src="Source/UI/Button/settingOn.png";

_menuAbout.img.src="Source/UI/Button/about.png";
_menuAbout.imgOn.src="Source/UI/Button/aboutOn.png";

_menuClipboard.img.src="Source/UI/clipboard.png";
