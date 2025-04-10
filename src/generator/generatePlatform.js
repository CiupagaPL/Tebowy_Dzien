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

scene.platformGenerator=function(){
  if(_platform.array[0]==null){
    _currentPlatform={
      x:0,
      y:canvas.height-context.scale(14),

      width:canvas.width,
      height:context.scale(14),

      level:-1,
    };
    _platform.array.push(_currentPlatform);

    _currentPlatform={
      x:canvas.width,
      y:canvas.height-context.scale(14),

      width:canvas.width,
      height:context.scale(14),

      level:-1,
    };
    _platform.array.push(_currentPlatform);
    _platform.lenght+=2;
  }

  if(scene.current<4&&_platform.currentLoad!=_platform.load){
    _currentPlatform={
      x:canvas.width,
      y:(canvas.height-(context.scale(180)*(_platform.currentLoad-1)))-context.scale(194),

      width:canvas.width,
      height:context.scale(14),

      level:_platform.currentLoad-1,
    };
    _platform.array.push(_currentPlatform);
    _platform.lenght++;

    if(scene.current==0){ _platform.random=context.scale(18); }
    else if(scene.current==1){ _platform.random=context.scale(18+160); }
    else if(scene.current==2){ _platform.random=context.scale(18+320); }

    _currentPlatform={
      x:0,
      y:(canvas.height-(context.scale(180)*(_platform.currentLoad-1)))-context.scale(194),

      width:_platform.random,
      height:context.scale(14),

      level:_platform.currentLoad-1,
    };
    _platform.array.push(_currentPlatform);
    _platform.lenght++;

    _currentPlatform={
      x:_platform.random+context.scale(156),
      y:(canvas.height-(context.scale(180)*(_platform.currentLoad-1)))-context.scale(194),

      width:(canvas.width-_platform.random)-context.scale(156),
      height:context.scale(14),

      level:_platform.currentLoad-1,
    };
    _platform.array.push(_currentPlatform);
    _platform.lenght++;
  } else if(scene.current>=4&&_platform.currentLoad!=_platform.load){
    _currentPlatform={
      x:0,
      y:(canvas.height-(context.scale(180)*(_platform.currentLoad-1)))-context.scale(194),

      width:canvas.width,
      height:context.scale(14),

      level:_platform.currentLoad-1,
    };
    _platform.array.push(_currentPlatform);
    _platform.lenght++;

    if(scene.current==4){ _platform.random=context.scale(18+640); }
    else if(scene.current==5){ _platform.random=context.scale(18+800); }
    else if(scene.current==6){ _platform.random=context.scale(18+960); }

    _currentPlatform={
      x:canvas.width,
      y:(canvas.height-(context.scale(180)*(_platform.currentLoad-1)))-context.scale(194),

      width:_platform.random-canvas.width,
      height:context.scale(14),

      level:_platform.currentLoad-1,
    };
    _platform.array.push(_currentPlatform);
    _platform.lenght++;

    _currentPlatform={
      x:_platform.random+context.scale(156),
      y:(canvas.height-(context.scale(180)*(_platform.currentLoad-1)))-context.scale(194),

      width:(canvas.width-(_platform.random-canvas.width))-context.scale(156),
      height:context.scale(14),

      level:_platform.currentLoad-1,
    };
    _platform.array.push(_currentPlatform);
    _platform.lenght++;
  } else{
    _currentPlatform={
      x:0,
      y:(canvas.height-(context.scale(180)*(_platform.currentLoad-1)))-context.scale(194),

      width:canvas.width,
      height:context.scale(14),

      level:_platform.currentLoad-1,
    };
    _platform.array.push(_currentPlatform);
    _platform.lenght++;

    _currentPlatform={
      x:canvas.width,
      y:(canvas.height-(context.scale(180)*(_platform.currentLoad-1)))-context.scale(194),

      width:canvas.width,
      height:context.scale(14),

      level:_platform.currentLoad-1,
    };
    _platform.array.push(_currentPlatform);
    _platform.lenght++;
  }
}
