(function(){"use strict";var t={7542:function(t,n,i){var e=i(9242),r=i(3396);function s(t,n,i,e,s,o){const a=(0,r.up)("NewBingoGame");return(0,r.wg)(),(0,r.j4)(a)}var o=i(7139),a=i.p+"static/img/center.a3d9bde4.png",u=i.p+"static/img/circle1.96f79237.png",l=i.p+"static/img/circle2.91803c75.png";const c=t=>((0,r.dD)("data-v-7de32f82"),t=t(),(0,r.Cn)(),t),h={class:"NewBingoGame"},m={class:"contianer"},d=(0,r.uE)('<div class="center" data-v-7de32f82><img src="'+a+'" data-v-7de32f82></div><div class="top" data-v-7de32f82><img src="" data-v-7de32f82></div><div class="tip" data-v-7de32f82> 總計抽出35個數字，優先連成三條線於聊天室打上”我中獎了！“，並開啟視訊完成驗證 </div>',3),f=c((()=>(0,r._)("img",{src:u},null,-1))),p=[f],v=c((()=>(0,r._)("img",{src:l},null,-1))),g=[v],w={class:"circle3"},N={class:"groupAll groupAllshow"},_={class:"groupAllTxt"},I={class:"groupNum groupNumshow"},b={class:"groupNumTxt"};function x(t,n,i,s,a,u){return(0,r.wg)(),(0,r.iD)("div",h,[(0,r._)("div",m,[d,(0,r._)("div",{class:(0,o.C_)(["circle-bg",{fadeInUp:a.isfadeInUp}])},[(0,r._)("div",{class:(0,o.C_)(["circle1",{rotateIn1:a.isrotateIn1}])},p,2),(0,r._)("div",{class:(0,o.C_)(["circle2",{rotateIn2:a.isrotateIn2}])},g,2),(0,r._)("div",w,[(0,r._)("span",{class:"BingoText",onClick:n[0]||(n[0]=(...t)=>u.startBtn&&u.startBtn(...t))},"Bingo")])],2),(0,r.wy)((0,r._)("div",N,[(0,r._)("div",_,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(a.totalNumner,(t=>((0,r.wg)(),(0,r.iD)("span",{key:t,class:"list-item"},(0,o.zw)(t),1)))),128))])],512),[[e.F8,a.groupAll]]),(0,r.wy)((0,r._)("div",I,[(0,r._)("div",b,[(0,r._)("span",null,(0,o.zw)(a.result),1)])],512),[[e.F8,a.groupNum]])])])}i(7658);var y={name:"NewBingoGame",created(){window.addEventListener("keydown",this.startBtn)},data(){return{count:0,isfadeInUp:!1,min:1,max:75,totalNumner:[],fistNumner:[],result:0,music:i(2226),groupAll:!1,groupNum:!1,isrotateIn1:!1,isrotateIn2:!1}},methods:{startBtn(t){if("Enter"==t.key){let t=0;if(this.max=parseInt(this.max),this.min=parseInt(this.min),this.lotteryNumner=[],this.groupNum=!1,this.totalNumner.length<35&&(this.isrotateIn1=!0,this.isrotateIn2=!0),0==this.totalNumner.length){this.result=0,this.isfadeInUp=!0;for(var n=0;n<13;n++){t=Math.round(this.min+Math.random()*(this.max-this.min));for(var i=0;i<=this.fistNumner.length;i){while(this.fistNumner.includes(t))t=Math.round(this.min+Math.random()*(this.max-this.min));i++}this.fistNumner.push(t)}}else if(this.totalNumner.length<35&&this.totalNumner.length>=13){this.count+=1,t=Math.round(this.min+Math.random()*(this.max-this.min));while(this.totalNumner.includes(t))t=Math.round(this.min+Math.random()*(this.max-this.min))}0==this.count&&(window.setTimeout((()=>{this.groupAll=!0}),6e3),window.setTimeout((()=>{this.totalNumner=this.fistNumner.sort(O)}),9e3)),this.totalNumner.length<35&&window.setTimeout((()=>{this.isrotateIn1=!1,this.isrotateIn2=!1}),6e3),this.count>=1&&window.setTimeout((()=>{this.groupNum=!0,this.result=t,this.totalNumner.splice(this.totalNumner.length+1,0,t),this.totalNumner=this.totalNumner.sort(O)}),6e3)}}}};function O(t,n){return t-n}var k=i(89);const B=(0,k.Z)(y,[["render",x],["__scopeId","data-v-7de32f82"]]);var M=B,T={name:"App",components:{NewBingoGame:M}};const j=(0,k.Z)(T,[["render",s]]);var A=j;(0,e.ri)(A).mount("#app")},2226:function(t,n,i){t.exports=i.p+"static/media/lucky.65ae616e.mp3"}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var s=n[e]={exports:{}};return t[e](s,s.exports,i),s.exports}i.m=t,function(){var t=[];i.O=function(n,e,r,s){if(!e){var o=1/0;for(c=0;c<t.length;c++){e=t[c][0],r=t[c][1],s=t[c][2];for(var a=!0,u=0;u<e.length;u++)(!1&s||o>=s)&&Object.keys(i.O).every((function(t){return i.O[t](e[u])}))?e.splice(u--,1):(a=!1,s<o&&(o=s));if(a){t.splice(c--,1);var l=r();void 0!==l&&(n=l)}}return n}s=s||0;for(var c=t.length;c>0&&t[c-1][2]>s;c--)t[c]=t[c-1];t[c]=[e,r,s]}}(),function(){i.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(n,{a:n}),n}}(),function(){i.d=function(t,n){for(var e in n)i.o(n,e)&&!i.o(t,e)&&Object.defineProperty(t,e,{enumerable:!0,get:n[e]})}}(),function(){i.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){i.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)}}(),function(){i.p=""}(),function(){var t={143:0};i.O.j=function(n){return 0===t[n]};var n=function(n,e){var r,s,o=e[0],a=e[1],u=e[2],l=0;if(o.some((function(n){return 0!==t[n]}))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(u)var c=u(i)}for(n&&n(e);l<o.length;l++)s=o[l],i.o(t,s)&&t[s]&&t[s][0](),t[s]=0;return i.O(c)},e=self["webpackChunkvue_lotte"]=self["webpackChunkvue_lotte"]||[];e.forEach(n.bind(null,0)),e.push=n.bind(null,e.push.bind(e))}();var e=i.O(void 0,[998],(function(){return i(7542)}));e=i.O(e)})();
//# sourceMappingURL=app.5a6a50f6.js.map