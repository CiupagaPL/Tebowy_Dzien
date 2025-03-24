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

scene.lastPlatformGenerator=function(){
  _currentPlatform={
    x:0,
    y:-(context.scale(128)*(_platform.load-1))-context.scale(36),

    width:canvas.width,
    height:_platform.height,

    level:_platform.load+1,
  };

  _platform.array[_platform.lenght+1]=_currentPlatform;

  // _platform.loop++;
  // _platform.currentCount++;
  _platform.lenght++;
}

scene.platformGenerator=function(){
  if(_platform.array[0]==null){
    _currentPlatform={
      x:0,
      y:canvas.height-context.scale(12),

      width:canvas.width,
      height:_platform.height,

      level:-1,
      stage:1,
    };
    _platform.array.push(_currentPlatform);

    _currentPlatform={
      x:context.scale(640),
      y:canvas.height-context.scale(12),

      width:canvas.width,
      height:_platform.height,

      level:-1,
      stage:2,
    };
    _platform.array.push(_currentPlatform);

    // _platform.loop++;
    // _platform.currentCount++;
    _platform.lenght+=2;
  }

  if(_platform.stage==2&&_platform.currentLoad!=_platform.load){
    _currentPlatform={
      x:context.scale(640),
      y:(canvas.height-(context.scale(128)*_platform.currentLoad))-context.scale(144),

      width:context.scale(640),
      height:_platform.height,

      level:_platform.currentLoad,
      stage:2,
    };
    _platform.array.push(_currentPlatform);
    _platform.lenght++;

    _platform.random=Math.floor(Math.random()*context.scale(512-64))+context.scale(32);

    _currentPlatform={
      x:0,
      y:(canvas.height-(context.scale(128)*_platform.currentLoad))-context.scale(144),

      width:_platform.random,
      height:_platform.height,

      level:_platform.currentLoad,
      stage:1,
    };
    _platform.array.push(_currentPlatform);
    _platform.lenght++;

    _currentPlatform={
      x:_platform.random+context.scale(128),
      y:(canvas.height-(context.scale(128)*_platform.currentLoad))-context.scale(144),

      width:(context.scale(640)-_platform.random)-context.scale(128),
      height:_platform.height,

      level:_platform.currentLoad,
      stage:1,
    };
    // if(_currentPlatform.level==_platform.load){ _currentPlatform.width+=canvas.width; }
    _platform.array.push(_currentPlatform);
    _platform.lenght++;
    _platform.stage=1;
  } else if(_platform.stage==1&&_platform.currentLoad!=_platform.load){
    _currentPlatform={
      x:0,
      y:(canvas.height-(context.scale(128)*_platform.currentLoad))-context.scale(144),

      width:context.scale(640),
      height:_platform.height,

      level:_platform.currentLoad,
      stage:1,
    };
    _platform.array.push(_currentPlatform);
    _platform.lenght++;

    _platform.random=Math.floor(Math.random()*context.scale(512-64))+context.scale(32);

    _currentPlatform={
      x:context.scale(640),
      y:(canvas.height-(context.scale(128)*_platform.currentLoad))-context.scale(144),

      width:_platform.random,
      height:_platform.height,

      level:_platform.currentLoad,
      stage:2,
    };
    _platform.array.push(_currentPlatform);
    _platform.lenght++;

    _currentPlatform={
      x:context.scale(640)+_platform.random+context.scale(128),
      y:(canvas.height-(context.scale(128)*_platform.currentLoad))-context.scale(144),

      width:(context.scale(640)-_platform.random)-context.scale(128),
      height:_platform.height,

      level:_platform.currentLoad,
      stage:2,
    };
    // if(_currentPlatform.level==_platform.load){ _currentPlatform.width+=canvas.width; }
    _platform.array.push(_currentPlatform);
    _platform.lenght++;
    _platform.stage=2;
  } else{
    _currentPlatform={
      x:0,
      y:(canvas.height-(context.scale(128)*_platform.currentLoad))-context.scale(144),

      width:context.scale(640),
      height:_platform.height,

      level:_platform.currentLoad,
      stage:1,
    };
    _platform.array.push(_currentPlatform);
    _platform.lenght++;

    _currentPlatform={
      x:context.scale(640),
      y:(canvas.height-(context.scale(128)*_platform.currentLoad))-context.scale(144),

      width:context.scale(640),
      height:_platform.height,

      level:_platform.currentLoad,
      stage:2,
    };
    _platform.array.push(_currentPlatform);
    _platform.lenght++;
  }

  // _platform.lastx=_platform.random;
  // _platform.lasty=_currentPlatform.y;
  // _platform.loop++;
  // _platform.currentCount++;
}
