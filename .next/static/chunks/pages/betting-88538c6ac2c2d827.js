(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[641],{10102:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/betting",function(){return c(55490)}])},13608:function(f,g,a){"use strict";var c=a(68527),b=a(95934);function h(b,a){return a||(a=b.slice(0)),Object.freeze(Object.defineProperties(b,{raw:{value:Object.freeze(a)}}))}function d(){var a=h(["\n  padding-left: 3.4em;\n  text-indent: -3.4em;\n"]);return d=function(){return a},a}function e(){var a=h(["\n  font-weight: bold;\n  margin-right: 1em;\n"]);return e=function(){return a},a}(0,b.Z)(c.xu)(d()),b.Z.span(e())},68598:function(c,b,a){"use strict";a.d(b,{Pg:function(){return f}});var d=a(85893);a(41664),a(25675);var e=a(70917),f=function(){return(0,d.jsx)(e.xB,{styles:"\n      .grid-item-thumbnail {\n        border-radius: 12px;\n      }\n    "})}},80951:function(c,b,a){"use strict";var d=a(85893),e=a(38816),f=a(9008),g=a(68598),h={hidden:{opacity:0,x:0,y:20},enter:{opacity:1,x:0,y:0},exit:{opacity:0,x:-0,y:20}};b.Z=function(b){var i=b.children,c=b.title,a="".concat(c," - Takuya Matsuyama");return(0,d.jsx)(e.E.article,{initial:"hidden",animate:"enter",exit:"exit",variants:h,transition:{duration:.4,type:"easeInOut"},style:{position:"relative"},children:(0,d.jsxs)(d.Fragment,{children:[c&&(0,d.jsxs)(f.default,{children:[(0,d.jsx)("title",{children:a}),(0,d.jsx)("meta",{name:"twitter:title",content:a}),(0,d.jsx)("meta",{property:"og:title",content:a})]}),i,(0,d.jsx)(g.Pg,{})]})})}},5930:function(f,a,b){"use strict";var c=b(95934);function d(){var a,b,c=(a=["\n  text-align: justify;\n"],b||(b=a.slice(0)),Object.freeze(Object.defineProperties(a,{raw:{value:Object.freeze(b)}})));return d=function(){return c},c}var e=c.Z.p(d());a.Z=e},52112:function(e,b,a){"use strict";var f=a(85893),c=a(38816),d=a(46052),g=(0,d.m$)(c.E.div,{shouldForwardProp:function(a){return(0,d.x9)(a)||"transition"===a}});b.Z=function(a){var c=a.children,b=a.delay;return(0,f.jsx)(g,{initial:{y:10,opacity:0},animate:{y:0,opacity:1},transition:{duration:.8,delay:void 0===b?0:b},mb:6,children:c})}},55490:function(e,b,a){"use strict";a.r(b),a.d(b,{"__N_SSP":function(){return o}});var c=a(34051),f=a.n(c),g=a(85893);a(41664);var h=a(68527),i=a(20949),j=a(65113);a(5930),a(13608);var k=a(80951);a(52112),a(68598),a(25675);var l=a(67294),d=a(11163),m=a.n(d);function n(c,d,e,f,g,h,i){try{var a=c[h](i),b=a.value}catch(j){e(j);return}a.done?d(b):Promise.resolve(b).then(f,g)}var o=!0;b.default=function(a){var p=a.wallet,s=a.web3,t=a.contract,q=(a.contractAddress,a.balance),u=a.setBalance,c=(0,l.useState)(""),d=c[0],v=c[1],e=(0,l.useState)(),b=e[0],w=e[1],o=(0,l.useState)(!1),r=o[0],x=o[1];(0,l.useEffect)(function(){if(0==p.length)return m().push("/")},[p]);var y=function(a){w(a)};return(0,g.jsx)(k.Z,{children:(0,g.jsx)(h.W2,{children:r?(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:50},children:(0,g.jsx)("img",{src:"/images/grey_running.gif",width:250,height:250})}),(0,g.jsx)("hr",{}),(0,g.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:50},children:(0,g.jsx)("img",{src:"/images/orange_running.gif",width:250,height:250})})]}):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)("div",{style:{display:"flex",justifyContent:"center",marginTop:50},children:(0,g.jsx)("img",{src:"/images/houndsmoking1.png",width:300,height:300})}),(0,g.jsxs)(h.xu,{borderRadius:"lg",mb:6,p:3,textAlign:"center",bg:(0,i.ff)("whiteAlpha.500","whiteAlpha.200"),css:{backdropFilter:"blur(10px)"},children:["Wallet Balance : ",q," ETH"]}),(0,g.jsx)(h.xu,{display:{md:"flex"},children:(0,g.jsx)(h.xu,{flexGrow:1,textAlign:"center",children:(0,g.jsx)("p",{children:"I LIKE "})})}),(0,g.jsxs)(h.xu,{align:"center",my:4,children:[(0,g.jsx)(j.zx,{colorScheme:"grey"===d?"pink":"teal",onClick:function(){v("grey")},children:"GREY HOUND"}),(0,g.jsx)(j.zx,{colorScheme:"orange"===d?"pink":"teal",style:{marginLeft:8},onClick:function(){v("orange")},children:"ORANGE HOUND"})]}),(0,g.jsx)(h.xu,{display:{md:"flex"},children:(0,g.jsx)(h.xu,{flexGrow:1,textAlign:"center",children:(0,g.jsx)("p",{children:"FOR"})})}),(0,g.jsxs)(h.xu,{align:"center",my:4,children:[(0,g.jsx)(j.zx,{colorScheme:.01==b?"pink":"teal",onClick:function(){return y(.01)},children:"0.01 ETH"}),(0,g.jsx)(j.zx,{colorScheme:.025==b?"pink":"teal",style:{marginLeft:4},onClick:function(){return y(.025)},children:"0.025 ETH"}),(0,g.jsx)(j.zx,{colorScheme:.04==b?"pink":"teal",style:{marginLeft:4},onClick:function(){return y(.04)},children:"0.04 ETH"})]}),(0,g.jsxs)(h.xu,{align:"center",my:4,children:[(0,g.jsx)(j.zx,{colorScheme:.05==b?"pink":"teal",onClick:function(){return y(.05)},children:"0.05 ETH"}),(0,g.jsx)(j.zx,{colorScheme:.065==b?"pink":"teal",style:{marginLeft:4},onClick:function(){return y(.065)},children:"0.065 ETH"}),(0,g.jsx)(j.zx,{colorScheme:.08==b?"pink":"teal",style:{marginLeft:4},onClick:function(){return y(.08)},children:"0.08 ETH"})]}),(0,g.jsx)(h.xu,{align:"center",my:4,children:(0,g.jsx)("hr",{})}),(0,g.jsx)(h.xu,{align:"center",my:4,children:(0,g.jsx)(j.zx,{colorScheme:"teal",onClick:function(){if(0==d.length)return alert("PLEASE SELECT WHAT YOU LIKE.");if(void 0==b)return alert("PLEASE SELECT BET AMOUNT.");var a=s.utils.toWei(b.toString());t.methods.game("grey"===d?0:1,Math.floor(Math.random()*Math.floor(1e9))).send({from:p,value:a}).on("transactionHash",function(c){var a,b;x(!0),t.once("Result",{},(b=(a=f().mark(function a(b,c){var d,e;return f().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if("0"===(d=c.returnValues.winAmount)?alert("SORRY, UNFORTUNATELY YOU LOST :("):alert("CONGRATULATIONS! YOU WIN! :)"),!("undefined"!==p&&p.length>0)){a.next=8;break}return a.next=5,s.eth.getBalance(p);case 5:e=a.sent,u(e=(Math.round(1e3*s.utils.fromWei(e))/1e3).toFixed(3));case 8:x(!1);case 9:case"end":return a.stop()}},a)}),function(){var b=this,c=arguments;return new Promise(function(e,f){var g=a.apply(b,c);function d(a){n(g,e,f,d,h,"next",a)}function h(a){n(g,e,f,d,h,"throw",a)}d(void 0)})}),function(a,c){return b.apply(this,arguments)}))}).on("error",function(a){console.log("Error"),x(!1)})},children:"DOUBLE OR NOTHING"})})]})})})}},11163:function(a,c,b){a.exports=b(80880)}},function(a){a.O(0,[774,888,179],function(){return a(a.s=10102)}),_N_E=a.O()}])