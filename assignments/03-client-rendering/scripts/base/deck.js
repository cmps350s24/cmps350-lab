const a5_0x12cd15=a5_0x13a4;function a5_0x1454(){const _0x47be5b=['title','toJSON','reduce','fromJSON','tags','6936sDJFpC','slides','##\x20','224566MqjcKm','find','708047HRcpGm','685zYywdP','join','length','8674800FOGXdZ','3657038eohOtw','toString','filter','24212FtJCkX','Untitled','27VmVfUm','3044390zSIHjT','sort','push','get','39kGkjsM','findIndex','map'];a5_0x1454=function(){return _0x47be5b;};return a5_0x1454();}(function(_0x7c17ae,_0x2c34f9){const _0x16572d=a5_0x13a4,_0x4e8166=_0x7c17ae();while(!![]){try{const _0x11ebb0=-parseInt(_0x16572d(0xc8))/0x1+-parseInt(_0x16572d(0xc6))/0x2*(parseInt(_0x16572d(0xd7))/0x3)+-parseInt(_0x16572d(0xd0))/0x4*(-parseInt(_0x16572d(0xc9))/0x5)+parseInt(_0x16572d(0xcc))/0x6+parseInt(_0x16572d(0xcd))/0x7+-parseInt(_0x16572d(0xdf))/0x8*(-parseInt(_0x16572d(0xd2))/0x9)+parseInt(_0x16572d(0xd3))/0xa;if(_0x11ebb0===_0x2c34f9)break;else _0x4e8166['push'](_0x4e8166['shift']());}catch(_0xc8d0a8){_0x4e8166['push'](_0x4e8166['shift']());}}}(a5_0x1454,0xe4b69));import a5_0x25a011 from'./item.js';function a5_0x13a4(_0x400885,_0x262834){const _0x14549f=a5_0x1454();return a5_0x13a4=function(_0x13a4d5,_0x5dca3a){_0x13a4d5=_0x13a4d5-0xc6;let _0x51c49d=_0x14549f[_0x13a4d5];return _0x51c49d;},a5_0x13a4(_0x400885,_0x262834);}import a5_0x5d6506 from'./slide.js';export default class Deck extends a5_0x25a011{#title;#slides;constructor(_0x1c62d2){super(_0x1c62d2),this.#fromJSON(_0x1c62d2);}get[a5_0x12cd15(0xda)](){return this.#title;}set[a5_0x12cd15(0xda)](_0x113e68){const _0x26b129=a5_0x12cd15;this.#title=_0x113e68??_0x26b129(0xd1);}get[a5_0x12cd15(0xe0)](){return[...this.#slides];}get[a5_0x12cd15(0xde)](){const _0x2c9503=a5_0x12cd15;return this.#slides[_0x2c9503(0xdc)]((_0x3e2aa0,_0xc0fb0b)=>_0x3e2aa0['concat'](_0xc0fb0b[_0x2c9503(0xde)]),[])[_0x2c9503(0xcf)]((_0x1bf6df,_0x5e9941,_0x28e329)=>_0x28e329['indexOf'](_0x1bf6df)===_0x5e9941);}['add'](_0x340bd6){const _0x56a699=a5_0x12cd15,_0x44d636=Deck.#toSlide(_0x340bd6);return this.#slides[_0x56a699(0xd5)](_0x44d636),_0x44d636;}[a5_0x12cd15(0xd6)](_0x4a48db){const _0x1105bf=a5_0x12cd15;return this.#slides[_0x1105bf(0xc7)](_0xd4973=>_0xd4973['id']===_0x4a48db);}['remove'](_0x37c915){const _0x2e66d7=a5_0x12cd15,_0x3d1262=this.#slides[_0x2e66d7(0xd8)](_0x3fb6ea=>_0x3fb6ea['id']===_0x37c915);if(_0x3d1262!==-0x1){const _0x18ddb0=this.#slides[_0x3d1262];return this.#slides['splice'](_0x3d1262,0x1),_0x18ddb0;}}[a5_0x12cd15(0xce)](){const _0x78cfd8=a5_0x12cd15,_0x3580e2=this[_0x78cfd8(0xde)][_0x78cfd8(0xcb)]?'{'+this[_0x78cfd8(0xde)][_0x78cfd8(0xd4)]()['join'](',\x20')+'}':'',_0x284e91=this.#slides[_0x78cfd8(0xd9)](_0x3e01ca=>_0x3e01ca['toString']())[_0x78cfd8(0xca)]('\x0a');return _0x78cfd8(0xe1)+this[_0x78cfd8(0xda)]+'\x20'+_0x3580e2+'\x0a\x0a'+_0x284e91+'\x0a';}[a5_0x12cd15(0xdb)](){const _0x53fa31=a5_0x12cd15;return{...super[_0x53fa31(0xdb)](),'title':this.#title,'slides':this.#slides};}#fromJSON(_0x18ccf2){const _0x2e17c4=a5_0x12cd15;this[_0x2e17c4(0xda)]=_0x18ccf2?.[_0x2e17c4(0xda)],this.#slides=_0x18ccf2?.[_0x2e17c4(0xe0)]?.['map'](_0x531a9b=>Deck.#toSlide(_0x531a9b))??[];}static[a5_0x12cd15(0xdd)](_0x112550){return new Deck(_0x112550);}static#toSlide(_0xb97a36){const _0x337519=a5_0x12cd15;return _0xb97a36 instanceof a5_0x5d6506?_0xb97a36:a5_0x5d6506[_0x337519(0xdd)](_0xb97a36);}}