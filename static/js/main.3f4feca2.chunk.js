(this["webpackJsonpkanye-rest"]=this["webpackJsonpkanye-rest"]||[]).push([[0],{11:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){"use strict";n.r(e);var a=n(1),i=n(0),c=n.n(i),r=n(7),s=n.n(r),o=(n(28),n(29),n(3)),l=n(4);n(20);n(11);var u=n.p+"static/media/kanye-west.7935d92f.png";var j=n(5);function d(t){var e=t.toggle;return Object(a.jsx)(j.a.div,{initial:"pageInitial",animate:"pageAnimate",variants:{pageInitial:{opacity:0},pageAnimate:{opacity:1,scale:[.2,1.1,.9,1],rotate:[0,10,-10,0],transition:{duration:.7}}},children:Object(a.jsx)("img",{src:u,className:"kanye"})},e)}var g=n(22);function b(t){var e=t.toggle,n=Object(g.a)(t,["toggle"]);return Object(a.jsx)(j.a.div,{initial:"pageInitial",animate:"pageAnimate",variants:{pageInitial:{opacity:0,display:"inline"},pageAnimate:{opacity:1,scale:[.2,1.1,.9,1],transition:{delay:n.delay,duration:.7}}},children:n.children},e)}var p=n(21),O=n.n(p);n(64);function f(){var t=Object(i.useState)({toggle:!1}),e=Object(l.a)(t,2),n=e[0],c=e[1],r=function(t,e){var n=Object(i.useState)({data:null,isLoading:!0}),a=Object(l.a)(n,2),c=a[0],r=a[1];return Object(i.useEffect)((function(){return O.a.get(t).then((function(t){var e=t.data;return r({data:e,isLoading:!1})})).catch((function(t){return console.log(t)})),function(){r({data:null,isLoading:!0})}}),[e]),[c]}("https://api.kanye.rest?format=text",n),s=Object(l.a)(r,1)[0];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(d,Object(o.a)({},n)),Object(a.jsx)("h1",{children:"Kanye Says"}),Object(a.jsx)(b,Object(o.a)(Object(o.a)({delay:.3},n),{},{children:Object(a.jsxs)("span",{children:["\u201c",s.data,"\u201d"]})})),Object(a.jsx)("button",{className:"button",onClick:function(){c({toggle:!n.toggle})},children:"Get Quote"})]})}var h=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)("header",{className:"App-header",children:Object(a.jsx)(f,{})})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,67)).then((function(e){var n=e.getCLS,a=e.getFID,i=e.getFCP,c=e.getLCP,r=e.getTTFB;n(t),a(t),i(t),c(t),r(t)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root")),v()}},[[65,1,2]]]);
//# sourceMappingURL=main.3f4feca2.chunk.js.map