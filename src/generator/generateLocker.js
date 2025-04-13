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

scene.lockerGenerator=function(){
  if(scene.type0==2){
    _currentLocker={
      base:{
        x:context.scale(78),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:0,

        active:false,
      }, bottom:{
        x:context.scale(78),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:0,

        active:false,
      }, left:{
        x:context.scale(30),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:0,

        active:false,
      }, bottomLeft:{
        x:context.scale(30),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:0,

        active:false,
      },
    };

    if(_platform.currentLoad%2==0){
      _currentLocker.base.type=3;
      _currentLocker.bottom.type=3;
      _currentLocker.left.type=3;
      _currentLocker.bottomLeft.type=3;
    }
    while(_currentLocker.bottom.type==_currentLocker.base.type){ _currentLocker.bottom.type=Math.floor(Math.random()*4); }
    _currentLocker.left.type=_currentLocker.bottom.type;

    _locker.current=Math.floor(Math.random()*4);
    if(_locker.current==1){ _currentLocker.base.type=5; }
    else if(_locker.current==2){ _currentLocker.bottom.type=5; }
    else if(_locker.current==3){ _currentLocker.left.type=5; }
    else{ _currentLocker.bottomLeft.type=5; }

    _locker.array.push(_currentLocker);
    _locker.lenght++;
  } if(scene.type1==2){
    _currentLocker={
      base:{
        x:context.scale(238),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:1,

        active:false,
      }, bottom:{
        x:context.scale(238),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:1,

        active:false,
      }, left:{
        x:context.scale(190),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:1,

        active:false,
      }, bottomLeft:{
        x:context.scale(190),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:1,

        active:false,
      },
    };

    if(_platform.currentLoad%2==0){
      _currentLocker.base.type=2;
      _currentLocker.bottom.type=2;
      _currentLocker.left.type=2;
      _currentLocker.bottomLeft.type=2;
    }
    while(_currentLocker.bottom.type==_currentLocker.base.type){ _currentLocker.bottom.type=Math.floor(Math.random()*4); }
    _currentLocker.left.type=_currentLocker.bottom.type;

    _locker.current=Math.floor(Math.random()*4);
    if(_locker.current==1){ _currentLocker.base.type=5; }
    else if(_locker.current==2){ _currentLocker.bottom.type=5; }
    else if(_locker.current==3){ _currentLocker.left.type=5; }
    else{ _currentLocker.bottomLeft.type=5; }

    _locker.array.push(_currentLocker);
    _locker.lenght++;
  } if(scene.type2==2){
    _currentLocker={
      base:{
        x:context.scale(398),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:2,

        active:false,
      }, bottom:{
        x:context.scale(398),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:2,

        active:false,
      }, left:{
        x:context.scale(350),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:2,

        active:false,
      }, bottomLeft:{
        x:context.scale(350),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:2,

        active:false,
      },
    };

    if(_platform.currentLoad%2==0){
      _currentLocker.base.type=1;
      _currentLocker.bottom.type=1;
      _currentLocker.left.type=1;
      _currentLocker.bottomLeft.type=1;
    }
    while(_currentLocker.bottom.type==_currentLocker.base.type){ _currentLocker.bottom.type=Math.floor(Math.random()*4); }
    _currentLocker.left.type=_currentLocker.bottom.type;

    _locker.current=Math.floor(Math.random()*4);
    if(_locker.current==1){ _currentLocker.base.type=5; }
    else if(_locker.current==2){ _currentLocker.bottom.type=5; }
    else if(_locker.current==3){ _currentLocker.left.type=5; }
    else{ _currentLocker.bottomLeft.type=5; }

    _locker.array.push(_currentLocker);
    _locker.lenght++;
  } if(scene.type3==2){
    _currentLocker={
      base:{
        x:context.scale(558),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:3,

        active:false,
      }, bottom:{
        x:context.scale(558),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:3,

        active:false,
      }, left:{
        x:context.scale(510),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:3,

        active:false,
      }, bottomLeft:{
        x:context.scale(510),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:3,

        active:false,
      },
    };

    if(_platform.currentLoad%2==0){
      _currentLocker.base.type=0;
      _currentLocker.bottom.type=0;
      _currentLocker.left.type=0;
      _currentLocker.bottomLeft.type=0;
    }
    while(_currentLocker.bottom.type==_currentLocker.base.type){ _currentLocker.bottom.type=Math.floor(Math.random()*4); }
    _currentLocker.left.type=_currentLocker.bottom.type;

    _locker.current=Math.floor(Math.random()*4);
    if(_locker.current==1){ _currentLocker.base.type=5; }
    else if(_locker.current==2){ _currentLocker.bottom.type=5; }
    else if(_locker.current==3){ _currentLocker.left.type=5; }
    else{ _currentLocker.bottomLeft.type=5; }

    _locker.array.push(_currentLocker);
    _locker.lenght++;
  } if(scene.type4==2){
    _currentLocker={
      base:{
        x:context.scale(718),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:0,

        active:false,
      }, bottom:{
        x:context.scale(718),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:0,

        active:false,
      }, left:{
        x:context.scale(670),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:0,

        active:false,
      }, bottomLeft:{
        x:context.scale(670),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:0,

        active:false,
      },
    };

    if(_platform.currentLoad%2==0){
      _currentLocker.base.type=3;
      _currentLocker.bottom.type=3;
      _currentLocker.left.type=3;
      _currentLocker.bottomLeft.type=3;
    }
    while(_currentLocker.bottom.type==_currentLocker.base.type){ _currentLocker.bottom.type=Math.floor(Math.random()*4); }
    _currentLocker.left.type=_currentLocker.bottom.type;

    _locker.current=Math.floor(Math.random()*4);
    if(_locker.current==1){ _currentLocker.base.type=5; }
    else if(_locker.current==2){ _currentLocker.bottom.type=5; }
    else if(_locker.current==3){ _currentLocker.left.type=5; }
    else{ _currentLocker.bottomLeft.type=5; }

    _locker.array.push(_currentLocker);
    _locker.lenght++;
  } if(scene.type5==2){
    _currentLocker={
      base:{
        x:context.scale(878),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:1,

        active:false,
      }, bottom:{
        x:context.scale(878),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:1,

        active:false,
      }, left:{
        x:context.scale(830),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:1,

        active:false,
      }, bottomLeft:{
        x:context.scale(830),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:1,

        active:false,
      },
    };

    if(_platform.currentLoad%2==0){
      _currentLocker.base.type=2;
      _currentLocker.bottom.type=2;
      _currentLocker.left.type=2;
      _currentLocker.bottomLeft.type=2;
    }
    while(_currentLocker.bottom.type==_currentLocker.base.type){ _currentLocker.bottom.type=Math.floor(Math.random()*4); }
    _currentLocker.left.type=_currentLocker.bottom.type;

    _locker.current=Math.floor(Math.random()*4);
    if(_locker.current==1){ _currentLocker.base.type=5; }
    else if(_locker.current==2){ _currentLocker.bottom.type=5; }
    else if(_locker.current==3){ _currentLocker.left.type=5; }
    else{ _currentLocker.bottomLeft.type=5; }

    _locker.array.push(_currentLocker);
    _locker.lenght++;
  } if(scene.type6==2){
    _currentLocker={
      base:{
        x:context.scale(1038),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:2,

        active:false,
      }, bottom:{
        x:context.scale(1038),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:2,

        active:false,
      }, left:{
        x:context.scale(990),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:2,

        active:false,
      }, bottomLeft:{
        x:context.scale(990),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:2,

        active:false,
      },
    };

    if(_platform.currentLoad%2==0){
      _currentLocker.base.type=1;
      _currentLocker.bottom.type=1;
      _currentLocker.left.type=1;
      _currentLocker.bottomLeft.type=1;
    }
    while(_currentLocker.bottom.type==_currentLocker.base.type){ _currentLocker.bottom.type=Math.floor(Math.random()*4); }
    _currentLocker.left.type=_currentLocker.bottom.type;

    _locker.current=Math.floor(Math.random()*4);
    if(_locker.current==1){ _currentLocker.base.type=5; }
    else if(_locker.current==2){ _currentLocker.bottom.type=5; }
    else if(_locker.current==3){ _currentLocker.left.type=5; }
    else{ _currentLocker.bottomLeft.type=5; }

    _locker.array.push(_currentLocker);
    _locker.lenght++;
  } if(scene.type7==2){
    _currentLocker={
      base:{
        x:context.scale(1198),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:3,

        active:false,
      }, bottom:{
        x:context.scale(1198),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:3,

        active:false,
      }, left:{
        x:context.scale(1150),
        y:_currentPlatform.y+context.scale(100),

        width:context.scale(52),
        height:context.scale(80),

        type:3,

        active:false,
      }, bottomLeft:{
        x:context.scale(1150),
        y:_currentPlatform.y+context.scale(24),

        width:context.scale(52),
        height:context.scale(80),

        type:3,

        active:false,
      },
    };

    if(_platform.currentLoad%2==0){
      _currentLocker.base.type=0;
      _currentLocker.bottom.type=0;
      _currentLocker.left.type=0;
      _currentLocker.bottomLeft.type=0;
    }
    while(_currentLocker.bottom.type==_currentLocker.base.type){ _currentLocker.bottom.type=Math.floor(Math.random()*4); }
    _currentLocker.left.type=_currentLocker.bottom.type;

    _locker.current=Math.floor(Math.random()*4);
    if(_locker.current==1){ _currentLocker.base.type=5; }
    else if(_locker.current==2){ _currentLocker.bottom.type=5; }
    else if(_locker.current==3){ _currentLocker.left.type=5; }
    else{ _currentLocker.bottomLeft.type=5; }

    _locker.array.push(_currentLocker);
    _locker.lenght++;
  }
}
