(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d37a523"],{"058f":function(e,t,n){"use strict";n("c0e6")},"2c25":function(e,t,n){},7054:function(e,t,n){"use strict";n("fa4f")},ae32:function(e,t,n){},b928:function(e,t,n){"use strict";n("e3c6")},c0e6:function(e,t,n){},c84b:function(e,t,n){"use strict";n.r(t);n("fb9e");var i=function(){var e=this,t=e._self._c;return t("div",{staticClass:"detail"},[t("oh-cursor",{attrs:{size:e.cursorSize}}),t("tb-nav",{attrs:{visible:e.showNav,data:e.detail,"detail-index":e.detailIndex},on:{"update:visible":function(t){e.showNav=t},click:e.nav}}),t("transition",{attrs:{name:"slideIn"}},[e.showIntro?t("div",{staticClass:"intro"},[t("intro",{on:{close:function(t){e.showIntro=!1}}})],1):e._e()]),t("div",{class:{blur:e.showIntro}},[t("div",{staticClass:"tool-bar",on:{mouseover:function(t){e.cursorSize="small"},mouseleave:function(t){e.cursorSize=""}}},[t("div",{staticClass:"btn-nav",on:{click:function(t){e.showNav=!0}}}),t("div",{staticClass:"btn-home",on:{click:function(t){return e.$router.push("/")}}}),t("div",{staticClass:"btn-fullscreen",class:{isFullscreen:e.isFullscreen},on:{click:e.toggleFullscreen}}),t("div",{staticClass:"btn-tips",on:{click:function(t){e.showIntro=!0}}}),t("a",{staticClass:"btn-github",attrs:{href:"https://github.com/kansini/tuibeitu",target:"_blank"}})]),t("detail-item",{attrs:{detail:e.detail[e.detailIndex],index:e.detailIndex},on:{onFigure:function(t){e.cursorSize="large"},leaveFigure:function(t){e.cursorSize=""}}}),t("div",{staticClass:"btn-group",on:{mouseover:function(t){e.cursorSize="small"},mouseleave:function(t){e.cursorSize=""}}},[t("tb-button",{attrs:{direction:"top",text:"上一象"},on:{click:e.pre}}),t("tb-button",{attrs:{direction:"bottom",text:"下一象"},on:{click:e.next}}),t("tb-button",{staticClass:"font-icons",attrs:{text:e.playMsg},on:{click:e.togglePlay}})],1)],1)],1)},s=[],l=n("f796"),a=n.n(l),r=n("ea98"),o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"detail-item"},[t("div",{staticClass:"detail-content"},[t("div",{staticClass:"figure"},[t("img",{attrs:{src:`./img/figure${e.index+1}.svg`},on:{mouseover:e.onFigure,mouseleave:e.leaveFigure}})]),t("tb-title",{attrs:{title:e.detail.title}}),t("tb-poem",{attrs:{poem:e.detail&&e.detail.poem&&e.detail.poem.predict}}),t("tb-poem",{attrs:{title:"颂曰",poem:e.detail&&e.detail.poem&&e.detail.poem.description}})],1)])},c=[],u=function(){var e=this,t=e._self._c;return t("div",{staticClass:"title"},[t("div",{staticClass:"title-item"},[t("div",[e._v("第"+e._s(e.title.sn)+"象")]),t("div",[e._v(e._s(e.title.ganZhi))])]),t("div",{staticClass:"title-item"},[t("div",[e._v(e._s(e.title.hexagrams1))]),t("div",[e._v(e._s(e.title.hexagrams2))])])])},d=[],f={name:"Title",props:{title:{type:Object,default:()=>({sn:"一",ganZhi:"甲子",hexagrams1:"乾下乾上",hexagrams2:"乾"})}}},h=f,m=(n("f238"),n("76b2")),v=Object(m["a"])(h,u,d,!1,null,"5687fff8",null),p=v.exports,b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"poem"},[t("div",{staticClass:"poem-content"},[t("div",{staticClass:"poem-title"},[e._v(" "+e._s(e.title)+" ")])]),e._l(e.poem,(function(n){return t("div",{staticClass:"poem-content"},e._l(n,(function(n){return t("div",[e._v(" "+e._s(n)+" ")])})),0)}))],2)},g=[],x={name:"Poem",props:{title:{type:String,default:"谶曰"},poem:{type:Array,default:()=>[["茫茫天地","不知所止"],["日月循环","周而复始"]]}}},F=x,w=(n("058f"),Object(m["a"])(F,b,g,!1,null,"5fd84487",null)),_=w.exports,C={name:"DetailItem",components:{tbTitle:p,tbPoem:_},props:{index:{type:Number,default:0},detail:{type:Object,default:()=>({})}},methods:{onFigure(){this.$emit("onFigure")},leaveFigure(){this.$emit("leaveFigure")}}},k=C,y=(n("e0c0"),Object(m["a"])(k,o,c,!1,null,"076b1794",null)),I=y.exports,E=function(){var e=this,t=e._self._c;return t("transition",{attrs:{name:"slideIn"}},[e.visible?t("div",{staticClass:"nav"},e._l(e.data,(function(n,i){return t("nav-item",{key:i,class:{active:i===e.detailIndex},attrs:{title:n.title},on:{click:function(t){return e.handleClick(i)}}})})),1):e._e()])},S=[],z=function(){var e=this,t=e._self._c;return t("div",{staticClass:"nav-item",on:{click:e.handleClick}},[t("div",[e._v("第"+e._s(e.title.sn)+"象")]),t("div",[e._v(e._s(e.title.ganZhi))])])},j=[],O={name:"NavItem",props:{title:{type:Object,default:()=>({sn:"一",ganZhi:"甲子",hexagrams1:"乾下乾上",hexagrams2:"乾"})}},methods:{handleClick(){this.$emit("click")}}},N=O,P=(n("b928"),Object(m["a"])(N,z,j,!1,null,"ed58cd5a",null)),q=P.exports,$={name:"TbNav",components:{navItem:q},props:{data:{type:Array,default:()=>[]},visible:{type:Boolean,default:!1},detailIndex:{type:Number,default:0}},methods:{handleClick(e){this.$emit("click",e)}}},M=$,R=Object(m["a"])(M,E,S,!1,null,"3c028ecc",null),B=R.exports,T=function(){var e=this,t=e._self._c;return t("div",{staticClass:"intro-container"},[t("div",{staticClass:"title"},[e._v("【简介】")]),t("p",[e._v(" 『推背图』被称作中华预言第一奇书，传说它是唐太宗李世民为推算大唐国运，下令当时两位著名的道士袁天罡和李淳风编写的。 ")]),t("p",[e._v(" 传说此袁李二人精通阴阳八卦奇门术数，道术高深，并具有洞察未来的“天眼神通”。因李淳风夜观天象，结合“武周代唐”之言，于是一时兴起，开始预言推算；李淳风以术数易卦推衍，一算起来就上了瘾，一发不可收拾，竟推算到唐朝以后两千年的历史！直到袁天罡推他的背，说道：“天机不可再泄, 还是回去休息吧!”，即第60像所述，是以『推背图』之名由此而来。 ")]),t("p",[e._v(" 『推背图』共有六十象，每象以干支为序号，主要包涵：一个卦象、一幅图像、谶语和“颂曰”律诗一首，共四个部分。融合了易学、天文、诗词、谜语、图画为一体。预言了从唐木运开始、至明火运世程近两千年，一直到社会共产共和的世界大同，即将发生在重大社会历史事件。是中国历史上“最为经典”的未来学巨著。 ")]),t("div",{staticClass:"btn-close",on:{click:e.handleClose}},[e._v("关闭")])])},Z=[],A={name:"Intro",methods:{handleClose(){this.$emit("close")}}},D=A,J=(n("d08a"),Object(m["a"])(D,T,Z,!1,null,"352df272",null)),L=J.exports,U=n("12d2"),G={name:"detail",components:{detailItem:I,tbNav:B,intro:L,tbButton:U["a"],ohCursor:r["a"]},data(){return{isFullscreen:!1,detailIndex:0,showNav:!1,showIntro:!1,detail:[],playMsg:"play_arrow",autoplayFlag:!1,cursorSize:""}},created(){this.getDetail()},computed:{},methods:{getDetail(){this.$axios.get("poem.json").then(e=>this.detail=e.data)},pre(){this.detailIndex>0?this.detailIndex-=1:this.detailIndex=this.detail.length-1},next(){this.detailIndex<this.detail.length-1?this.detailIndex+=1:this.detailIndex=0},togglePlay(){this.autoplayFlag=!this.autoplayFlag,this.autoplayFlag?this.playMsg="pause":this.playMsg="play_arrow"},nav(e){this.showNav=!1,this.detailIndex=e},toggleFullscreen(){a.a.toggle(),this.isFullscreen=!this.isFullscreen},handleSpeak(e){let t="http://tts.baidu.com/text2audio?lan=zh&ie=UTF-8&spd=2&text"+encodeURI(e),n=new Audio(t);n.src=t,e?n.play():n.pause()}}},H=G,K=(n("7054"),Object(m["a"])(H,i,s,!1,null,"d8e3ba1e",null));t["default"]=K.exports},d08a:function(e,t,n){"use strict";n("ed43")},e0c0:function(e,t,n){"use strict";n("2c25")},e3c6:function(e,t,n){},ed43:function(e,t,n){},f238:function(e,t,n){"use strict";n("ae32")},f796:function(e,t,n){
/*!
* screenfull
* v5.2.0 - 2021-11-03
* (c) Sindre Sorhus; MIT License
*/
(function(){"use strict";var t="undefined"!==typeof window&&"undefined"!==typeof window.document?window.document:{},n=e.exports,i=function(){for(var e,n=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],i=0,s=n.length,l={};i<s;i++)if(e=n[i],e&&e[1]in t){for(i=0;i<e.length;i++)l[n[0][i]]=e[i];return l}return!1}(),s={change:i.fullscreenchange,error:i.fullscreenerror},l={request:function(e,n){return new Promise(function(s,l){var a=function(){this.off("change",a),s()}.bind(this);this.on("change",a),e=e||t.documentElement;var r=e[i.requestFullscreen](n);r instanceof Promise&&r.then(a).catch(l)}.bind(this))},exit:function(){return new Promise(function(e,n){if(this.isFullscreen){var s=function(){this.off("change",s),e()}.bind(this);this.on("change",s);var l=t[i.exitFullscreen]();l instanceof Promise&&l.then(s).catch(n)}else e()}.bind(this))},toggle:function(e,t){return this.isFullscreen?this.exit():this.request(e,t)},onchange:function(e){this.on("change",e)},onerror:function(e){this.on("error",e)},on:function(e,n){var i=s[e];i&&t.addEventListener(i,n,!1)},off:function(e,n){var i=s[e];i&&t.removeEventListener(i,n,!1)},raw:i};i?(Object.defineProperties(l,{isFullscreen:{get:function(){return Boolean(t[i.fullscreenElement])}},element:{enumerable:!0,get:function(){return t[i.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(t[i.fullscreenEnabled])}}}),n?e.exports=l:window.screenfull=l):n?e.exports={isEnabled:!1}:window.screenfull={isEnabled:!1}})()},fa4f:function(e,t,n){}}]);
//# sourceMappingURL=chunk-5d37a523.173da6cb.js.map