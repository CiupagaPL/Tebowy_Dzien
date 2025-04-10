/*   ,-----,
 *   |     |    ,--------------------------------------,
 *   |     |   ( */"use strict"/* pastebin.com/zdg35gef )
 *  (|-----|) < The project is licensed under MIT -^    |
 *  |\_____/|  "---------------------------------------"
 *  |       |    __---.
 *  ( o   o )   /      )
 *  \ = . = \__/    --"
 *  /              /
 * |              |
 *  \ \    \ \   |
 *   | |    | | /
 *  (_(_)--(_(_) */

_corner.localUpdate=function(){
  if(_currentCorner.laser!=undefined){
    if(context.collision(_currentCorner.laser,_player.base)&&_player.invisible==0&&
       !global.currentTeacher&&_corner.timer>=_corner.max&&!_player.touched){
      _player.hp-=1;
      _player.text.value0="-25 punktów\nz zachowania";

      if(_player.hp>0){
        if(global.sfx){
          audio.damage1_sfx.load();
          audio.damage1_sfx.play();
        } _player.invisible=1;
      } _player.touched=true;
    }
  }

  if(_currentCorner.base.x>context.scale(640)){
    _currentCorner.base.x-=context.scale(1280);
    if(_currentCorner.laser!=undefined){ _currentCorner.laser.x-=context.scale(1280); }
  } else if(_currentCorner.base.x+_currentCorner.base.width<0){
    _currentCorner.base.x+=context.scale(1280);
    if(_currentCorner.laser!=undefined){ _currentCorner.laser.x+=context.scale(1280); }
  }

  if(context.collision(_currentCorner.base,_player.collisionLeft)&&!_player.touched&&_currentCorner.base.rotate!=2){
    _player.base.x+=context.move(4);
    _player.text.x+=context.move(4);
    _player.collisionTop.x+=context.move(4);
    _player.collisionBottom.x+=context.move(4);
    _player.collisionLeft.x+=context.move(4);
    _player.collisionRight.x+=context.move(4);
    _player.cloud.x+=context.move(4);
    _player.gun.x+=context.move(4);

    _player.touched=true;
  } if(context.collision(_currentCorner.base,_player.collisionRight)&&!_player.touched&&_currentCorner.base.rotate==2){
    _player.base.x-=context.move(4);
    _player.text.x-=context.move(4);
    _player.collisionTop.x-=context.move(4);
    _player.collisionBottom.x-=context.move(4);
    _player.collisionLeft.x-=context.move(4);
    _player.collisionRight.x-=context.move(4);
    _player.cloud.x-=context.move(4);
    _player.gun.x-=context.move(4);

    _player.touched=true;
  }
}

_corner.globalUpdate=function(){
  if(!global.pause&&_player.hp>0){
    _corner.timer++;

    if(_corner.timer==_corner.max&&global.sfx&&!_teacher.on){ audio.laser_sfx.play(); }
    if(_corner.timer>=_corner.max+context.time(25)){ _corner.timer=0; }
  }
}

_wall.update=function(){
  if(_currentWall.x>canvas.width){ _currentWall.x-=context.scale(1280); }
  else if(_currentWall.x+_currentWall.width<0){ _currentWall.x+=context.scale(1280); }
}

_decoration.update=function(){
  if(_currentDecoration.current==0){
    if(_currentDecoration.base.x>canvas.width){
      _currentDecoration.base.x-=context.scale(1280);
      _currentDecoration.text.x-=context.scale(1280);
    } else if(_currentDecoration.base.x+_currentDecoration.base.width<0){
      _currentDecoration.base.x+=context.scale(1280);
      _currentDecoration.text.x+=context.scale(1280);
    }
  } else{
    if(_currentDecoration.x>canvas.width){ _currentDecoration.x-=context.scale(1280); }
    else if(_currentDecoration.x+_currentDecoration.width<0){ _currentDecoration.x+=context.scale(1280); }
  }
}

_platform.update=function(){
  if(_currentPlatform.x>canvas.width){ _currentPlatform.x-=context.scale(1280); }
  else if(_currentPlatform.x+_currentPlatform.width<0){ _currentPlatform.x+=context.scale(1280); }

  if(scene.score==_currentPlatform.level+1&&scene.score>0&&scene.score<_platform.load-1){
    if(_currentPlatform.y<context.scale(254)||_currentPlatform.y>context.scale(274)){ _platform.move=true; }
    else if(_currentPlatform.y>=context.scale(254)&&_currentPlatform.y<=context.scale(274)){ _platform.move=false; }
    if(_currentPlatform.y<context.scale(254)){ _platform.up=true; }
    else if(_currentPlatform.y>context.scale(274)){ _platform.up=false; }
  } else if(scene.score==0){
    if(_platform.array[0].y>context.scale(352)){ _platform.move=true; }
    else{ _platform.move=false; }
    _platform.up=false;
  } else if(scene.score==_platform.load-1){
    if(_platform.array[_platform.load*3].y<context.scale(-4)){ _platform.move=true; }
    else{ _platform.move=false; }
    _platform.up=true;
  }

  if(context.collision(_currentPlatform,_player.collisionTop)&&!_player.touched){
    _player.fly=true;
    _player.touched=true;

    if(_player.upTimer<12){
      _player.base.y=_currentPlatform.y+context.scale(12);
      _player.text.y=_player.base.y-context.scale(12);

      _player.collisionLeft.y=_player.base.y+context.scale(12);
      _player.collisionRight.y=_player.base.y+context.scale(12);
      _player.collisionTop.y=_player.base.y-context.scale(4);
      _player.collisionBottom.y=_player.base.y+context.scale(90);

      _player.cloud.y=_player.base.y+_player.cloud.height;
      _player.gun.y=_player.base.y+context.scale(32);
    }
  } if(context.collision(_currentPlatform,_player.collisionBottom)&&!_player.touched){
    if(_player.base.y<=_currentPlatform.y){ scene.score=_currentPlatform.level+1; }

    if(!_player.cloudFly){
      _player.base.y=_currentPlatform.y-_player.base.height;
      _player.text.y=_player.base.y-context.scale(12);

      _player.collisionLeft.y=_player.base.y+context.scale(12);
      _player.collisionRight.y=_player.base.y+context.scale(12);
      _player.collisionTop.y=_player.base.y-context.scale(4);
      _player.collisionBottom.y=_player.base.y+context.scale(90);

      _player.cloud.y=_player.base.y+_player.cloud.height;
      _player.gun.y=_player.base.y+context.scale(32);
    }

    _player.vy=scene.vy;
    _player.touched=true;
  } if(context.collision(_currentPlatform,_player.collisionBottom)){ _player.active=true; }
}

_spike.update=function(){
  if(context.collision(_currentSpike,_player.base)&&_player.invisible==0&&!global.currentTeacher){
    _player.hp-=1;
    _player.text.value0="-25 punktów\nz zachowania";

    if(_player.hp!=0){
      if(global.sfx){ audio.damage1_sfx.play(); }
      _player.invisible=1;
    }
  }
}
