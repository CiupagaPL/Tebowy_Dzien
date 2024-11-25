/* |\,__,/|
   /      |    ,--.
  (  >  o )   / ,-'
   \   .  |-._( (
   /         `. \
  |         _  \ |
   \ \ ,  /      |
    || |-_\__   /
   ((_/`(____,-' */

transitionon=function(){
  changeTimer++;

  if(changeTimer<5){
    _context.drawShortImage(_change.img1,_change);
    _html.style.backgroundColor=_background.color3a;
    _about.style.backgroundColor=_background.color3b;
  }
  if(changeTimer>=5&&changeTimer<10){
    _html.style.backgroundColor=_background.color3a;
    _about.style.backgroundColor=_background.color3b;
    _context.drawShortImage(_change.img2,_change);
  }
  if(changeTimer>=10&&changeTimer<15){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img3,_change);
  }
  if(changeTimer>=15&&changeTimer<20){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img4,_change);
  }
  if(changeTimer>=20){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img4,_change);

    if(musicOn){
      _audio.menu.volume=0.25;
      _audio.menu.load();
    } musicTimer=0;

    canClick=false;
    changeTimer=0;

    if(nextScene!=scene){
      scene=nextScene;
      sceneTimer=0;
    }
  }
}

transitionoff=function(){
  changeTimer++;

  if(changeTimer<5){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img4,_change);
  
    if(defeat){ defeat=false; }

    if(scene>=2&&scene<=4){
      _laser.max=120;
      _player.max=90;
      _spike.count=1;
    } if(scene>=5&&scene<=8){
      _laser.max=90;
      _player.max=75;
      _spike.count=2;
    } if(scene>=9&&scene<=11){
      _laser.max=60;
      _player.max=60;
      _spike.count=3;
    }

    _background.x=0;
    _background.y=0;
    _backgroundTop.x=0;
    _backgroundTop.y=-_render.height;
    _backgroundRight.x=_render.width;
    _backgroundRight.y=0;
    _backgroundTopRight.x=_render.width;
    _backgroundTopRight.y=-_render.height;

    resetlevel();
    dead=false;
    _player.invisible=0;
    score=0;
    _player.x=64*scale;
    _player.y=_render.height-12*scale-_player.height;
    hp=6;
    autoScene=false;
    nextAutoScene=0;
    _keyState.left=false;
    _keyState.right=false;
    _player.vx=0;
    _player.vy=0;
    _boss.timer=0;
    _laser.timer=0;
    boss=false;
    bossHp=10;
    musicTimer=0;
    sceneTimer=0;
    _boss.y=104*scale;
    _boss.x=_render.width+_boss.width+(32*scale);
    _bossCloud.y=174*scale;
    _bossCloud.x=_render.width+_boss.width+(16*scale);
    _boss.left=false;
    teacher=false;
    _player.move=true;
    _player.cloud=false;
  }
  if(changeTimer>=5&&changeTimer<10){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img3,_change);
  }
  if(changeTimer>=10&&changeTimer<15){
    _html.style.backgroundColor=_background.color3a;
    _about.style.backgroundColor=_background.color3b;
    _context.drawShortImage(_change.img2,_change);
  }
  if(changeTimer>=15&&changeTimer<20){
    _html.style.backgroundColor=_background.color3a;
    _about.style.backgroundColor=_background.color3b;
    _context.drawShortImage(_change.img1,_change);
  }
  if(changeTimer>=20){
    _html.style.backgroundColor=_background.color0a;
    _about.style.backgroundColor=_background.color0b;

    changeTimer=0;
    changeScene=false;
    canClick=true;
    menuLoad=false;
    if(tutorialOn){ pauseChange=true; tutorial=true; }
  }
}

transitionpauseon=function(){
  changeTimer++;

  if(changeTimer<5){
    _html.style.backgroundColor=_background.color3a;
    _about.style.backgroundColor=_background.color3b;
    _context.drawShortImage(_change.img1,_change);
  }
  if(changeTimer>=5&&changeTimer<10){
    _html.style.backgroundColor=_background.color3a;
    _about.style.backgroundColor=_background.color3b;
    _context.drawShortImage(_change.img2,_change);
  }
  if(changeTimer>=10&&changeTimer<15){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img3,_change);
  }
  if(changeTimer>=15){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img3,_change);

    _audio.game.volume=0;
    _audio.boss.volume=0;
    changeTimer=0;
    canClick=true;
    pauseChange=false;
    pauseAnimation=true;
    musicTimer=0;
    _keyState.up=false;
    _keyState.down=false;
    _keyState.left=false;
    _keyState.right=false;
    _player.vx=0;
    if(_player.cloud){ _player.vy=0; }
  }
}

transitionpauseoff=function(){
  changeTimer++;

  if(changeTimer<5){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img3,_change);
  }
  if(changeTimer>=5&&changeTimer<10){
    _html.style.backgroundColor=_background.color3a;
    _about.style.backgroundColor=_background.color3b;
    _context.drawShortImage(_change.img2,_change);
  }
  if(changeTimer>=10&&changeTimer<15){
    _html.style.backgroundColor=_background.color3a;
    _about.style.backgroundColor=_background.color3b;
    _context.drawShortImage(_change.img1,_change);
  }
  if(changeTimer>=15){
    _html.style.backgroundColor=_background.color0a;
    _about.style.backgroundColor=_background.color0b;

    if(musicOn){
      _audio.game.volume=0.25;
      _audio.boss.volume=0.25;
    }
    pauseOn=false;
    pauseAnimation=false;
    changeTimer=0;
    canClick=true;
    pauseChange=false;
    autoUnpause=false;
    musicTimer=0;
    tutorial=false;
  }
}

transitionshorton=function(){
  changeTimer++;

  if(changeTimer<10){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img4,_change);
  }
  if(changeTimer>=10){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img4,_change);

    if(musicOn){
      _audio.game.volume=0.25;
      _audio.game.load();
    } musicTimer=0;

    canClick=false;
    changeTimer=0;
    pauseOn=false;
    pauseChange=false;
    pauseAnimation=false;
    changeScene=true;
    autoScene=false;
    menuLoad=true;
    autoRestart=false;
    restart=false;

    if(nextScene!=scene){
      scene=nextScene;
      sceneTimer=0;
    }
  }
}

transitionrestart=function(){
  changeTimer++;

  if(changeTimer<10){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img4,_change);
  }
  if(changeTimer>=10){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img4,_change);

    if(musicOn){
      _audio.game.volume=0.25;
      _audio.game.load();
    } musicTimer=0;

    if(defeat){ round++; defeat=false; }

    if(scene>=2&&scene<=4){
      _laser.max=120;
      _player.max=90;
      _spike.count=1;
    } if(scene>=5&&scene<=8){
      _laser.max=90;
      _player.max=75;
      _spike.count=2;
    } if(scene>=9&&scene<=11){
      _laser.max=60;
      _player.max=60;
      _spike.count=3;
    }

    resetlevel();
    dead=false;
    _player.invisible=0;
    score=0;
    _player.x=64*scale;
    _player.y=_render.height-12*scale-_player.height;
    hp=6;
    autoScene=false;
    nextAutoScene=0;
    _keyState.left=false;
    _keyState.right=false;
    _player.vx=0;
    _player.vy=0;
    _boss.timer=0;
    _laser.timer=0;
    changeScene=true;
    boss=false;
    bossHp=10;
    sceneTimer=0;
    _boss.y=104*scale;
    _boss.x=_render.width+_boss.width+(32*scale);
    _bossCloud.y=174*scale;
    _bossCloud.x=_render.width+_boss.width+(16*scale);
    _boss.left=false;
    teacher=false;
    restart=false;
    pauseOn=false;
    pauseChange=false;
    pauseAnimation=false;
    canClick=true;
    if(tutorialOn){ pauseChange=true; tutorial=true; }
    _player.move=true;
    _player.cloud=false;

    changeTimer=0;
  }
}

transitiondead=function(){
  changeTimer++;

  if(changeTimer<10){
    _html.style.backgroundColor=_background.color3a;
    _about.style.backgroundColor=_background.color3b;
    _context.drawShortImage(_change.img1,_change);
  }
  if(changeTimer>=10&&changeTimer<15){
    _html.style.backgroundColor=_background.color3a;
    _about.style.backgroundColor=_background.color3b;
    _context.drawShortImage(_change.img2,_change);
  }
  if(changeTimer>=15&&changeTimer<20){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img3,_change);
  }
  if(changeTimer>=20&&changeTimer<25){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img4,_change);
  }
  if(changeTimer>=25){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img4,_change);

    if(musicOn){
      _audio.game.volume=0.25;
      _audio.game.load();
    } musicTimer=0;

    if(defeat){ round++; defeat=false; }

    if(scene>=2&&scene<=4){
      _laser.max=120;
      _player.max=90;
      _spike.count=1;
    } if(scene>=5&&scene<=8){
      _laser.max=90;
      _player.max=75;
      _spike.count=2;
    } if(scene>=9&&scene<=11){
      _laser.max=60;
      _player.max=60;
      _spike.count=3;
    }

    resetlevel();
    dead=false;
    _player.invisible=0;
    score=0;
    _player.x=64*scale;
    _player.y=_render.height-12*scale-_player.height;
    hp=6;
    autoScene=false;
    nextAutoScene=0;
    _keyState.left=false;
    _keyState.right=false;
    _player.vx=0;
    _player.vy=0;
    _boss.timer=0;
    _laser.timer=0;
    changeScene=true;
    boss=false;
    bossHp=10;
    sceneTimer=0;
    _boss.y=104*scale;
    _boss.x=_render.width+_boss.width+(32*scale);
    _bossCloud.y=174*scale;
    _bossCloud.x=_render.width+_boss.width+(16*scale);
    _boss.left=false;
    teacher=false;
    if(tutorialOn){ pauseChange=true; tutorial=true; }
    _player.move=true;
    _player.cloud=false;

    canClick=true;
    changeTimer=0;
  }
}

transitionmenu=function(){
  changeTimer++;

  if(changeTimer<10){
    _html.style.backgroundColor=_background.color3a;
    _about.style.backgroundColor=_background.color3b;
    _context.drawShortImage(_change.img1,_change);
  }
  if(changeTimer>=10&&changeTimer<15){
    _html.style.backgroundColor=_background.color3a;
    _about.style.backgroundColor=_background.color3b;
    _context.drawShortImage(_change.img2,_change);
  }
  if(changeTimer>=15&&changeTimer<20){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img3,_change);
  }
  if(changeTimer>=20&&changeTimer<25){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img4,_change);
  }
  if(changeTimer>=25){
    _html.style.backgroundColor=_background.color4a;
    _about.style.backgroundColor=_background.color4b;
    _context.drawShortImage(_change.img4,_change);

    if(musicOn){
      _audio.game.volume=0.25;
      _audio.game.load();
    } musicTimer=0;

    if(nextScene!=scene){
      scene=nextScene;
      sceneTimer=0;
    }

    canClick=true;
    changeTimer=0;
  }
}
