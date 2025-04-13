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

let _currentPlatform=[],_currentCorner=[],_currentForeground=[],_currentDecoration=[],
    _currentLocker=[],_currentWall=[],_currentSpike=[];

const _background={
  base:{
    x:0,
    y:0,
	
	  alpha:75,
  }, bottom:{
    x:0,
    y:360,
  }, left:{
    x:-640,
    y:0,
  }, bottomLeft:{
    x:-640,
    y:360,
  },

  change:false,

  color0:"rgb(0,47,109)",
  color1:"rgb(3,122,162)",
  color2:"rgb(228,0,2)",
  img0Menu:Object.assign(new Image(),{src:"tex/back/menu0.png"}),
  img1Menu:Object.assign(new Image(),{src:"tex/back/menu1.png"}),
  img0Level:Object.assign(new Image(),{src:"tex/back/level0.png"}),
  img1Level:Object.assign(new Image(),{src:"tex/back/level1.png"}),
};

const _transition={
  base:{
    x:0,
    y:0,

    color0:"rgb(0,0,25)",
    alpha:0,
  }, text:{
    x:384,
    y:96,

    value0:"",
    size:64,

    color0:"rgb(255,255,255)",
    alpha:0,
  },

  timer:0,

  sceneOff:function(){},
  sceneOn:function(){},
  pauseOff:function(){},
  pauseOn:function(){},
  pauseEnd:function(){},
};

const _info={
  x:64,
  y:128,

  value0:"Wersja Niestabilna",
  size:80,
  rotation:25,

  color0:"rgb(255,255,255)",
  alpha:50,
}

const _start={
  base:{
    x:384,
    y:0,

    width:256,
    height:256,

    img0:Object.assign(new Image(),{src:"tex/ui/menu/teb/base.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/menu/teb/lic.png"}),
    img2:Object.assign(new Image(),{src:"tex/ui/menu/teb/tech.png"}),
    alpha:100,
  }, arrow:{
    x:-92,
    y:72,

    width:384,
    height:384,

    img0:Object.assign(new Image(),{src:"tex/icon/menu/hugeArrow.png"}),
    alpha:25,
  }
};

const _title={
  base:{
    x:166,
    y:35,

    width:162,
    height:96,

    img0:Object.assign(new Image(),{src:"tex/ui/menu/title/text.png"}),
    alpha:100,
  }, teb:{
    x:64,
    y:35,
    
    width:96,
    height:96,

    img0:Object.assign(new Image(),{src:"tex/ui/menu/title/teb.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/menu/title/tebHover.png"}),
  },

  color0:"rgb(255,255,255)",
};

const _account={
  name:{
    x:52,
    y:14,

    value0:"Witaj Graczu!",
    size:16,
  }, profile:{
    x:324,
    y:4,

    width:16,
    height:16,

    img0:Object.assign(new Image(),{src:"tex/icon/menu/profile.png"}),
    alpha:100,
  }, background:{
    x:322,
    y:2,

    width:20,
    height:20,
  },

  color0:"rgb(255,255,255)",
}

const _footer={
  version:{
    x:52,
    y:354,

    value0:"Gałęź Niestabilna: 13-04-2025",
    size:16,
  }, github:{
    x:322,
    y:338,

    width:20,
    height:20,

    img0:Object.assign(new Image(),{src:"tex/icon/menu/github.png"}),
    alpha:100,
  }, pastebin:{
    x:298,
    y:338,

    width:20,
    height:20,

    img0:Object.assign(new Image(),{src:"tex/icon/menu/pastebin.png"}),
    alpha:100,
  },

  color0:"rgb(255,255,255)",
};

const _resolution={
  x:620,
  y:340,

  width:16,
  height:16,

  img0:Object.assign(new Image(),{src:"tex/ui/general/max.png"}),
  img1:Object.assign(new Image(),{src:"tex/ui/general/min.png"}),
  alpha:100,
};

const _ui={
  menu:{
    main:{
      x:48,
      y:-2,

      width:296,
      height:364,

	    alpha:75,
    }, left:{
      x:44,
      y:-2,

      width:4,
      height:364,
    }, right:{
      x:344,
      y:-2,

      width:4,
      height:364,
    },
  }, game:{
    hp:{
      main:{
        x:604,
        y:6,

        width:32,
        height:32,
      }, background:{
        x:602,
        y:4,

        width:36,
        height:36,

        alpha:100,
      }, heart:{
        x:613,
        y:10,

        width:14,
        height:14,

        img0:Object.assign(new Image(),{src:"tex/ui/level/heart/0.png"}),
        img1:Object.assign(new Image(),{src:"tex/ui/level/heart/player/1.png"}),
        img2:Object.assign(new Image(),{src:"tex/ui/level/heart/player/2.png"}),
        img3:Object.assign(new Image(),{src:"tex/ui/level/heart/player/3.png"}),
        img4:Object.assign(new Image(),{src:"tex/ui/level/heart/player/4.png"}),
        img5:Object.assign(new Image(),{src:"tex/ui/level/heart/player/5.png"}),
      }, text:{
        x:613,
        y:36,

        value0:"",
        size:12,
      },
    }, ammo:{
      main:{
        x:566,
        y:6,

        width:32,
        height:32,
      }, background:{
        x:564,
        y:4,

        width:36,
        height:36,

        alpha:100,
      }, iconMain:{
        x:576,
        y:10,

        width:12,
        height:12,

        img0:Object.assign(new Image(),{src:"tex/ui/level/ammo/0.png"}),
        img1Normal:Object.assign(new Image(),{src:"tex/ui/level/ammo/normal/1.png"}),
        img2Normal:Object.assign(new Image(),{src:"tex/ui/level/ammo/normal/2.png"}),
        img3Normal:Object.assign(new Image(),{src:"tex/ui/level/ammo/normal/3.png"}),
        img1Strong:Object.assign(new Image(),{src:"tex/ui/level/ammo/strong/1.png"}),
        img2Strong:Object.assign(new Image(),{src:"tex/ui/level/ammo/strong/2.png"}),
        img3Strong:Object.assign(new Image(),{src:"tex/ui/level/ammo/strong/3.png"}),
        img1Fast:Object.assign(new Image(),{src:"tex/ui/level/ammo/fast/1.png"}),
        img2Fast:Object.assign(new Image(),{src:"tex/ui/level/ammo/fast/2.png"}),
        img3Fast:Object.assign(new Image(),{src:"tex/ui/level/ammo/fast/3.png"}),
      }, iconLeft:{
        x:573,
        y:19,

        width:7,
        height:7,

        img0:Object.assign(new Image(),{src:"tex/ui/level/ammo/normal/3.png"}),
        img1:Object.assign(new Image(),{src:"tex/ui/level/ammo/strong/3.png"}),
        img2:Object.assign(new Image(),{src:"tex/ui/level/ammo/fast/3.png"}),
      }, iconRight:{
        x:584,
        y:19,

        width:7,
        height:7,

        img0:Object.assign(new Image(),{src:"tex/ui/level/ammo/normal/3.png"}),
        img1:Object.assign(new Image(),{src:"tex/ui/level/ammo/strong/3.png"}),
        img2:Object.assign(new Image(),{src:"tex/ui/level/ammo/fast/3.png"}),
      }, text:{
        x:579,
        y:35,

        value0:"",
        size:13,
      },
    }, pause:{
      main:{
        x:6,
        y:6,

        width:32,
        height:32,
      }, background:{
        x:4,
        y:4,

        width:36,
        height:36,

        alpha:100,
      }, icon:{
        x:16,
        y:26,

        width:12,
        line:1,

        value0:"ıı",
        size:34,
      }, text:{
        x:10,
        y:36,

        value0:"Pauza",
        size:12,
      },
    }, info:{
      main:{
        x:44,
        y:6,

        width:92,
        height:32,
      }, background:{
        x:42,
        y:4,

        width:96,
        height:36,

        alpha:100,
      }, icon:{
        x:50,
        y:8,

        width:20,
        height:20,

        img0:Object.assign(new Image(),{src:"tex/icon/general/iconL.png"}),
      }, text:{
        x:48,
        y:36,

        value0:"Status",
        size:12,
      }, score:{
        x:80,
        y:20,

        value0:"",
        size:14,
      }, level:{
        x:80,
        y:33,

        value0:"",
        size:14,
      },
    }, teacher:{
      main:{
        x:142,
        y:6,

        width:32,
        height:32,
      }, background:{
        x:140,
        y:4,

        width:36,
        height:36,

        alpha:100,
      }, heart:{
        x:150,
        y:10,

        width:14,
        height:14,

        img0:Object.assign(new Image(),{src:"tex/ui/level/heart/0.png"}),
        img1:Object.assign(new Image(),{src:"tex/ui/level/heart/teacher/1.png"}),
        img2:Object.assign(new Image(),{src:"tex/ui/level/heart/teacher/2.png"}),
        img3:Object.assign(new Image(),{src:"tex/ui/level/heart/teacher/3.png"}),
        img4:Object.assign(new Image(),{src:"tex/ui/level/heart/teacher/4.png"}),
        img5:Object.assign(new Image(),{src:"tex/ui/level/heart/teacher/5.png"}),
        img6:Object.assign(new Image(),{src:"tex/ui/level/heart/teacher/6.png"}),
        img7:Object.assign(new Image(),{src:"tex/ui/level/heart/teacher/7.png"}),
        img8:Object.assign(new Image(),{src:"tex/ui/level/heart/teacher/8.png"}),
        img9:Object.assign(new Image(),{src:"tex/ui/level/heart/teacher/9.png"}),
        img10:Object.assign(new Image(),{src:"tex/ui/level/heart/teacher/10.png"}),
      }, text:{
        x:150,
        y:36,

        value0:"",
        size:12,
      },
    },
  },

  color0:"rgb(0,0,55)",
  color1:"rgb(255,255,255)",
};

const _button={
  start:{
    base:{
      x:64,
      y:156,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/menu/button/start.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/menu/button/startOn.png"}),
    }, text:{
      x:112,
      y:174,

      width:54,
      line:2,

      value0:"Rozpocznij\nPoziom: 01",
      size:16,
	    alpha:100,
    },
  }, level:{
    base:{
      x:64,
      y:220,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/menu/button/level.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/menu/button/levelOn.png"}),
    }, text:{
      x:112,
      y:238,

      width:54,
      line:2,

      value0:"Selektor\nPoziomów",
      size:16,
	    alpha:100,
    },

    on:false,
    animation:false,
    lateanimation:false,
  }, menu:{
    base:{
      x:64,
      y:220,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/menu/button/menu.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/menu/button/menuOn.png"}),
    }, text:{
      x:112,
      y:238,

      width:40,
      line:2,

      value0:"Menu\nGłówne",
      size:16,
	    alpha:100,
    },
  }, custom:{
    base:{
      x:64,
      y:284,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/menu/button/custom.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/menu/button/customOn.png"}),
    }, text:{
      x:112,
      y:312,

      width:54,
      line:1,

      value0:"Postać",
      size:24,
	    alpha:100,
    },

    on:false,
    animation:false,
    lateanimation:false,
  }, restart:{
    base:{
      x:64,
      y:284,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/menu/button/restart.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/menu/button/restartOn.png"}),
    }, text:{
      x:112,
      y:302,

      width:42,
      line:2,

      value0:"Powtórz\nPoziom",
      size:16,
	    alpha:100,
    },
  }, setting:{
    base:{
      x:286,
      y:156,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/menu/button/setting.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/menu/button/settingOn.png"}),
    }, text:{
      x:238,
      y:184,

      width:42,
      line:1,

      value0:"Opcje",
      size:24,
	    alpha:100,
    },

    on:false,
    animation:false,
    lateanimation:false,
  }, about:{
    base:{
      x:286,
      y:220,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/menu/button/about.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/menu/button/aboutOn.png"}),
    }, text:{
      x:226,
      y:238,

      width:54,
      line:2,

      value0:" Na Temat\nRozgrywki",
      size:16,
	    alpha:100,
    },
	
    on:false,
    animation:false,
    lateanimation:false,
  }, version:{
    base:{
      x:286,
      y:284,

      width:42,
      height:42,

      img0:Object.assign(new Image(),{src:"tex/ui/menu/button/version.png"}),
      img1:Object.assign(new Image(),{src:"tex/ui/menu/button/versionOn.png"}),
    }, text:{
      x:224,
      y:302,

      width:56,
      line:2,

      value0:"CCCCCCCC\nCCCCCCCC",
      size:16,
	    alpha:100,
    },
  },

  color0:"rgb(255,255,255)",
};

const _clipboard={
  base:{
    x:800,
    y:60,

    width:160,
    height:240,

    img0:Object.assign(new Image(),{src:"tex/ui/clipboard/base.png"}),
  }, back:{
    x:924,
    y:64,

    width:32,
    height:32,
	  rotation:180,

    hover:false,

    img0:Object.assign(new Image(),{src:"tex/ui/clipboard/back.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/clipboard/backHover.png"}),
  },

  wide:{
    x:62,
    y:152,

    width:264,
    height:184,

    img0:Object.assign(new Image(),{src:"tex/ui/clipboard/wide.png"}),
  }, wideBack:{
    x:296,
    y:152,

    width:24,
    height:24,
	  rotation:180,

    hover:false,

    img0:Object.assign(new Image(),{src:"tex/ui/clipboard/back.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/clipboard/backHover.png"}),
  },

  setting:{
    title:{
      x:854,
      y:120,

      value0:"Opcje",
      size:28,
    }, sfx:{
      base:{
        x:824,
        y:138,

        width:16,
        height:16,
      }, text:{
        x:842,
        y:151,

        value0:"Dźwięk",
        size:16,
      },
    }, music:{
      base:{
        x:824,
        y:168,

        width:16,
        height:16,
      }, text:{
        x:842,
        y:181,

        value0:"Muzyka",
        size:16,
      },
    }, tutorial:{
      base:{
        x:824,
        y:198,

        width:16,
        height:16,
      }, text:{
        x:842,
        y:211,

        value0:"Poradnik",
        size:16,
      },
    }, teacher:{
      base:{
        x:824,
        y:228,

        width:16,
        height:16,
      }, text:{
        x:842,
        y:241,

        value0:"Opis Nauczycieli",
        size:16,
      },
    }, addon:{
      base:{
        x:824,
        y:258,

        width:16,
        height:16,
      }, text:{
        x:842,
        y:271,

        value0:"Efekty Dodatkowe",
        size:16,
      },
    },

    img0:Object.assign(new Image(),{src:"tex/ui/clipboard/unChecked.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/clipboard/checked.png"}),
  },

  about:{
    title:{
      x:860,
      y:120,

      value0:"Opis",
      size:28,
    }, text:{
      x:824,
      y:148,

      value0:"Gra TEBOWY DZIEŃ\nzostała stworzona\nz myślą o naszych\nuczniach. Mamy\nnadzieję, że sprawi\n"+
            "ona wiele uśmiechu\nna Waszych twarzach\ni radości z grania!\nPozdrawiamy :-D",
      size:15,
    },
  },

  version:{
    title:{
      x:846,
      y:120,

      value0:"Twórcy",
      size:28,
    }, text:{
      x:824,
      y:148,

      value0:"Nadzorowanie Projektu:\n> tom2edu\nPisanie Kodu:\n> Ciupaga\nDźwięk, Testowanie:\n> Ucheesename\nMuzyka:\n> M4RCIN-MJJ",
      size:15,
    },
  },

  tutorial:{
    title:{
      x:144,
      y:184,

      value0:"Poradnik",
      size:28,
    }, text:{
      x:80,
      y:202,

      value0:"Poruszaj się za pomocą [A]|[D] lub [Lewo]|[Prawo].\nPodskakuj za pomocą [W]|[Góra]|[Spacja]. Będąc\n"+
            "na chmurce do poruszania używaj [W]|[A]|[S]|[D] lub\n[Góra]|[Lewo]|[Dół]|[Prawo]. Strzelaj za pomocą\n"+
            "[E]. Zmień typ amunicji za pomocą [R]. Twoim celem\njest dostać się na górę poziomu i pokonać danego\n"+
            "nauczyciela. Po drodze musisz omijać przeszkody\nw postaci kolców i laserów. W trudnej sytuacji\nużyj Tebulinka. Życzymy szczęścia!",
      size:12,
    },
  },

  reward:{
    title:{
      x:124,
      y:184,

      value0:"Gratulacje!",
      size:28,
    }, text:{
      x:80,
      y:202,

      value0:"Udało się Tobie przejść całą\ngrę. Mamy nadzieję że zabawa była\nudana i przy okazji nauczyciele\nwystępujący w grze nie będą straszni\njuż w realu >_o",
      size:12,
    }, icon:{
      x:224,
      y:164,

      width:24,
      height:24,

      img0:Object.assign(new Image(),{src:"tex/icon/decoration/trophy.png"}),
    },
  },

  on:false,
  close:false,
  change:false,

  color0:"rgb(0,0,0)",

  update:function(){},
};

const _blueprint={
  base:{
    x:800,
    y:60,

    width:160,
    height:240,

    img0:Object.assign(new Image(),{src:"tex/ui/blueprint/0.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/blueprint/1.png"}),
  }, skin:{
    x:844,
    y:126,

    width:70,
    height:120,

    img0:Object.assign(new Image(),{src:"tex/obj/player/base/boy.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/player/base/girl.png"}),
  }, back:{
    x:924,
    y:66,

    width:28,
    height:28,
	  rotation:180,

    hover:false,

    img0:Object.assign(new Image(),{src:"tex/ui/blueprint/back.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/blueprint/backHover.png"}),
  }, left:{
    x:808,
    y:266,

    width:28,
    height:28,

    hover:false,

    img0:Object.assign(new Image(),{src:"tex/ui/blueprint/back.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/blueprint/backHover.png"}),
  }, right:{
    x:924,
    y:266,

    width:28,
    height:28,
	  rotation:180,

    hover:false,

    img0:Object.assign(new Image(),{src:"tex/ui/blueprint/back.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/blueprint/backHover.png"}),
  },

  wide:{
    x:62,
    y:152,

    width:264,
    height:184,

    img0:Object.assign(new Image(),{src:"tex/ui/blueprint/wide.png"}),
  }, wideBack:{
    x:300,
    y:310,

    width:24,
    height:24,
	  rotation:180,

    hover:false,

    img0:Object.assign(new Image(),{src:"tex/ui/blueprint/back.png"}),
    img1:Object.assign(new Image(),{src:"tex/ui/blueprint/backHover.png"}),
  },

  level:{
    title:{
      x:842,
      y:118,

      value0:"Poziomy",
      size:28,
    }, button1:{
      x:820,
      y:152,

      width:52,
      line:1,

      value0:"Poziom  1",
      size:18,
    }, button2:{
      x:820,
      y:180,

      width:52,
      line:1,

      value0:"Poziom  2",
      size:18,
    }, button3:{
      x:820,
      y:208,

      width:52,
      line:1,

      value0:"Poziom  3",
      size:18,
    }, button4:{
      x:820,
      y:236,

      width:52,
      line:1,
      
      value0:"Poziom  4",
      size:18,
    }, button5:{
      x:820,
      y:264,

      width:52,
      line:1,
      
      value0:"Poziom  5",
      size:18,
    }, button6:{
      x:888,
      y:152,

      width:52,
      line:1,
      
      value0:"Poziom  6",
      size:18,
    }, button7:{
      x:888,
      y:180,

      width:52,
      line:1,
      
      value0:"Poziom  7",
      size:18,
    }, button8:{
      x:888,
      y:208,

      width:52,
      line:1,
      
      value0:"Poziom  8",
      size:18,
    }, button9:{
      x:888,
      y:236,

      width:52,
      line:1,
      
      value0:"Poziom  9",
      size:18,
    }, button10:{
      x:888,
      y:264,

      width:52,
      line:1,
      
      value0:"Poziom 10",
      size:18,
    },
  },

  custom:{
    title:{
      x:850,
      y:118,

      value0:"Postać",
      size:28,
    }, text:{
      x:868,
      y:260,

      value0:"1/2",
      size:20,
    },
  },

  teacher:{
    title:{
      x:74,
      y:176,

      value0:"Tomasz Staniszewski",
      value1:"Radosław Sass",
      value2:"Paweł Kępa",
      value3:"Anna Skarbek Chmielewska",
      value4:"Marta Milde",
      value5:"Anna Świtoń",
      value6:"Piotr Łojek",
      value7:"Iwo Musiałowski",
      valueAdd0:"Wojciech Złotowski",
      valueAdd1:"Anna Niklas",
      valueAdd2:"Iwona Bury Sierzchuła",
      size:20,
    }, text:{
      x:76,
      y:216,

      value0:"Nauczyciel z pasją, zwany często\nPanem Gołębiem. Twórca Twojej\nplatformówki. "+
             "Dzięki niemu\npoznasz wszystkie tajniki aplikacji\nwebowych, desktopowych\ni mobilnych. Walka nie będzie łatwa.",
      value1:"Zapalony fotograf i mistrz zdjęć\ndużego formatu. Z nim nie\nbędziesz się nudził/a szczególnie\n"+
             "jeśli planujesz zostać Technikiem\nFotografii i Multimediów. Zajęcia\npraktyczne"+
             "pełne ciekawych\nrozwiązań, a usposobienie Pana\nRadka na szóstkę z koroną!\nWalka nie będzie łatwa.",
      value2:"Mężczyzna pracujący, żadnej\npracy się nie boi! Fotograf\ni Informatyk w jednym, a swoje\n"+
             "umiejętności z powodzeniem łączy\nna kierunkach zawodowych.\nNauczy Cię do egzaminu i sprzeda\n"+
             "przydatną wiedzę życiową! Walka\nnie będzie łatwa.",
      value3:"Ma rękę do biznesów. Z tym\nnauczycielem będzie Ci po\ndrodze jeśli chcesz nauczyć się\n"+
             "Biznesu i Zarządzania. Podstawy\nPrzedsiębiorczości nie są jej\nobce, a wycieczki do Urzędu\n"+
             "Skarbowego murowane. Walka nie\nbędzie łatwa.",
      value4:"Kobieta tysiąca zawodów\ni koordynator chaosu, nie ma\ntakich zadań, z którymi by sobie\n"+
             "nie poradziła! Możesz ją spotkać\nna zajęciach z Cyfrowej Obróbki\nObrazu, Projektów, Plastyki\n"+
             "czy BiZu. Za chwilę będzie\nwychodzić nawet z lodówki! Walka\nnie będzie łatwa.",
      value5:"Kiedy głowa ciąży od problemów,\na serduszko łamie się od zmartwień,\nlekiem na problemy jest Pani Pedagog,\n"+
             "która zawsze znajdzie dla Ciebie czas.\nWalka nie będzie łatwa.",
      value6:"Zwany postrachem tej szkoły. Mistrz\npoligrafii i nauczyciel w jednym. Jeśli\nmyślisz serio o przedmiotach zawodowych,\n"+
             "może Cię potraktować ulgowo… pod\nwarunkiem, że go słuchasz! Walka\nnie będzie łatwa.",
      value7:"To jest dopiero #nauczycielzpasją!\nNie stroni od historycznych przebieranek\n"+
             "i inscenizacji, a jego lekcje historii\npoparte są żywym przykładem. Kolekcjoner\nuzbrojenia i mundrów. Walka nie\nbędzie łatwa.",
      valueAdd0:"Bezpieczeństwo i higiena to przedmiot,\nktóry uczy nasz Dyrektor. Pan\n"+
                "Wojtek zarządza Liceum, a jednocześnie\nprzekazuje praktyczną wiedzę. To jeszcze\nnie koniec!",
      valueAdd1:"Groźna Pani Dyrektor! A skąd!\nWie kiedy pogrozić palcem, mimo\nto uwielbia swoją młodzież\n"+
                "i stara się robić wszystko by\nspełnić ich marzenia. Pod warunkiem,\nże akurat nie dostałeś/aś drugiej nagany.\n"+
                "To jeszcze nie koniec!",
      valueAdd2:"Główna Pani Dyrektor TEB TORUŃ\n Nadzoruje aby wszystko działało jak należy\n To już ostateczna walka!",
      size:12,
    },
  },
  
  on:false,
  close:false,
  change:false,

  color0:"rgb(255,255,255)",

  update:function(){},
};

const _player={
  base:{
    x:0,
    y:0,

    width:56,
    height:96,

    img0:Object.assign(new Image(),{src:"tex/obj/player/base/boy.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/player/base/girl.png"}),
    img0Left:Object.assign(new Image(),{src:"tex/obj/player/base/boyLeft.png"}),
    img1Left:Object.assign(new Image(),{src:"tex/obj/player/base/girlLeft.png"}),
    alpha:100,
  }, text:{
    x:0,
    y:0,

    value0:"",
    size:12,

    color0:"rgb(225,255,255)",
    alpha:0,
  },

  gun:{
    x:0,
    y:0,

    width:56,
    height:40,

    timer:0,
    type:0,
    ammo1:10,
    ammo2:10,

    img0BoyNormal:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/normal/0.png"}),
    img1BoyNormal:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/normal/1.png"}),
    img2BoyNormal:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/normal/2.png"}),
    img0BoyNormalLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/normal/0Left.png"}),
    img1BoyNormalLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/normal/1Left.png"}),
    img2BoyNormalLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/normal/2Left.png"}),
    img0BoyStrong:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/strong/0.png"}),
    img1BoyStrong:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/strong/1.png"}),
    img2BoyStrong:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/strong/2.png"}),
    img0BoyStrongLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/strong/0Left.png"}),
    img1BoyStrongLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/strong/1Left.png"}),
    img2BoyStrongLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/strong/2Left.png"}),
    img0BoyFast:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/fast/0.png"}),
    img1BoyFast:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/fast/1.png"}),
    img2BoyFast:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/fast/2.png"}),
    img0BoyFastLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/fast/0Left.png"}),
    img1BoyFastLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/fast/1Left.png"}),
    img2BoyFastLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/boy/fast/2Left.png"}),
    img0GirlNormal:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/normal/0.png"}),
    img1GirlNormal:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/normal/1.png"}),
    img2GirlNormal:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/normal/2.png"}),
    img0GirlNormalLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/normal/0Left.png"}),
    img1GirlNormalLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/normal/1Left.png"}),
    img2GirlNormalLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/normal/2Left.png"}),
    img0GirlStrong:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/strong/0.png"}),
    img1GirlStrong:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/strong/1.png"}),
    img2GirlStrong:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/strong/2.png"}),
    img0GirlStrongLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/strong/0Left.png"}),
    img1GirlStrongLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/strong/1Left.png"}),
    img2GirlStrongLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/strong/2Left.png"}),
    img0GirlFast:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/fast/0.png"}),
    img1GirlFast:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/fast/1.png"}),
    img2GirlFast:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/fast/2.png"}),
    img0GirlFastLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/fast/0Left.png"}),
    img1GirlFastLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/fast/1Left.png"}),
    img2GirlFastLeft:Object.assign(new Image(),{src:"tex/obj/player/gun/girl/fast/2Left.png"}),
  }, ammo:{
    x:0,
    y:0,

    width:10,
    height:10,

    type:0,

    unused:true,
    left:false,
  
    img0:Object.assign(new Image(),{src:"tex/obj/player/ammo/normal.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/player/ammo/strong.png"}),
    img2:Object.assign(new Image(),{src:"tex/obj/player/ammo/fast.png"}),
  },

  cloud:{
    x:0,
    y:0,

    width:64,
    height:48,

    available:false,

    img0:Object.assign(new Image(),{src:"tex/obj/cloud/left.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/cloud/right.png"}),
  },

  collisionTop:{
    x:0,
    y:0,

    width:36,
    height:8,
  }, collisionBottom:{
    x:0,
    y:0,

    width:42,
    height:8,
  }, collisionLeft:{
    x:0,
    y:0,

    width:8,
    height:72,
  }, collisionRight:{
    x:0,
    y:0,

    width:8,
    height:72,
  },

  vx:0,
  vy:0,
  ivy:-12,
  gravity:0.5,
  upTimer:0,
  invisible:0,
  skin:0,
  hp:5,

  touched:false,
  active:false,
  grounded:false,
  jumped:false,
  fly:false,
  cloudFly:false,
  left:false,

  render:function(){},
  textRender:function(){},
  update:function(){},
  midUpdate:function(){},
  lateUpdate:function(){},
};

const _platform={
  array:[],

  lenght:0,
  currentLenght:0,
  load:15,
  currentLoad:0,
  level:0,
  lastLevel:0,
  random:0,

  move:false,
  up:false,

  img0:Object.assign(new Image(),{src:"tex/obj/map/platform.png"}),

  update:function(){},
};

const _corner={
  array:[],

  lenght:-1,
  currentLenght:0,
  timer:0,

  img0:Object.assign(new Image(),{src:"tex/obj/map/corner.png"}),

  color0:"rgb(255,255,255)",

  update:function(){},
};

const _foreground={
  array:[],

  lenght:-1,
  currentLenght:0,

  update:function(){},
}

const _spike={
  array:[],

  lenght:-1,
  currentLenght:0,
  random:0,
  count:0,

  checked:false,
  detected:false,
  
  img0:Object.assign(new Image(),{src:"tex/obj/map/spike.png"}),

  update:function(){},
};

const _wall={
  array:[],

  width:68,
  height:60,

  lenght:-1,
  currentLenght:0,
  round:0,

  img0:Object.assign(new Image(),{src:"tex/obj/map/wall/cyanOrange.png"}),
  img1:Object.assign(new Image(),{src:"tex/obj/map/wall/orangeGreen.png"}),
  img2:Object.assign(new Image(),{src:"tex/obj/map/wall/greenPurple.png"}),
  img3:Object.assign(new Image(),{src:"tex/obj/map/wall/purpleCyan.png"}),
  img0Alt:Object.assign(new Image(),{src:"tex/obj/map/wall/orangeCyan.png"}),
  img1Alt:Object.assign(new Image(),{src:"tex/obj/map/wall/cyanPurple.png"}),
  img2Alt:Object.assign(new Image(),{src:"tex/obj/map/wall/purpleGreen.png"}),
  img3Alt:Object.assign(new Image(),{src:"tex/obj/map/wall/greenOrange.png"}),

  update:function(){},
};

const _decoration={
  array:[],

  lenght:-1,
  currentLenght:1,
  current:0,

  color0:"rgb(140,140,196)",
  img0Door:Object.assign(new Image(),{src:"tex/obj/map/door/orange.png"}),
  img1Door:Object.assign(new Image(),{src:"tex/obj/map/door/green.png"}),
  img2Door:Object.assign(new Image(),{src:"tex/obj/map/door/purple.png"}),
  img3Door:Object.assign(new Image(),{src:"tex/obj/map/door/cyan.png"}),
  img4Door:Object.assign(new Image(),{src:"tex/obj/map/door/red.png"}),
  img0Board:Object.assign(new Image(),{src:"tex/obj/map/board/orange.png"}),
  img1Board:Object.assign(new Image(),{src:"tex/obj/map/board/green.png"}),
  img2Board:Object.assign(new Image(),{src:"tex/obj/map/board/purple.png"}),
  img3Board:Object.assign(new Image(),{src:"tex/obj/map/board/cyan.png"}),
  img0Light:Object.assign(new Image(),{src:"tex/obj/map/light.png"}),

  update:function(){},
};

const _locker={
  array:[],

  lenght:-1,
  currentLenght:1,
  current:0,

  img0:Object.assign(new Image(),{src:"tex/obj/map/locker/empty.png"}),
  img1:Object.assign(new Image(),{src:"tex/obj/map/locker/decoration/orange.png"}),
  img2:Object.assign(new Image(),{src:"tex/obj/map/locker/decoration/green.png"}),
  img3:Object.assign(new Image(),{src:"tex/obj/map/locker/decoration/purple.png"}),
  img4:Object.assign(new Image(),{src:"tex/obj/map/locker/decoration/cyan.png"}),

  update:function(){},
};

const _teacher={
  base:{
    x:0,
    y:0,

    width:64,
    height:108,

    img0:Object.assign(new Image(),{src:"tex/obj/teacher/base/TS.png"}),
    img1:Object.assign(new Image(),{src:"tex/obj/teacher/base/RS.png"}),
    img2:Object.assign(new Image(),{src:"tex/obj/teacher/base/PK.png"}),
    img3:Object.assign(new Image(),{src:"tex/obj/teacher/base/ASC.png"}),
    img4:Object.assign(new Image(),{src:"tex/obj/teacher/base/MM.png"}),
    img5:Object.assign(new Image(),{src:"tex/obj/teacher/base/AS.png"}),
    img6:Object.assign(new Image(),{src:"tex/obj/teacher/base/PL.png"}),
    img7:Object.assign(new Image(),{src:"tex/obj/teacher/base/IM.png"}),
    imgAdd0:Object.assign(new Image(),{src:"tex/obj/teacher/base/WZ.png"}),
    imgAdd1:Object.assign(new Image(),{src:"tex/obj/teacher/base/AN.png"}),
    imgAdd2:Object.assign(new Image(),{src:"tex/obj/teacher/base/ISB.png"}),
  }, text:{
    x:0,
    y:0,

    value0:"",
    size:12,

    color0:"rgb(225,255,255)",
  },

  cloud:{
    x:0,
    y:0,

    width:96,
    height:72,

    img0:Object.assign(new Image(),{src:"tex/obj/cloud/left.png"}),
  },

  invisible:0,
  random:0,
  round:0,
  hp:10,

  load:false,
  attack:false,
  on:false,

  render:function(){},
  textRender:function(){},
  update:function(){},
};

const _attack={
  tebulinek:{
    x:0,
    y:0,

    width:64,
    height:64,
    rotation:0,
	
    unused:true,

    img0:Object.assign(new Image(),{src:"tex/obj/teacher/attack/tebulinek.png"}),
  },

  object1:{
    x:0,
    y:0,

    width:48,
    height:48,
    rotation:0,

    current:0,

    unused:true,

    img0Computer:Object.assign(new Image(),{src:"tex/obj/teacher/attack/computer.png"}),
    img0Keyboard:Object.assign(new Image(),{src:"tex/obj/teacher/attack/keyboard.png"}),
  }, object2:{
    x:0,
    y:0,

    width:48,
    height:48,
    rotation:0,

    current:0,

    unused:true,

    img0Coffe:Object.assign(new Image(),{src:"tex/obj/teacher/attack/coffe.png"}),
    img0Pigeon:Object.assign(new Image(),{src:"tex/obj/teacher/attack/pigeon.png"}),
  },

  update:function(){},
  handle:function(){},
};
