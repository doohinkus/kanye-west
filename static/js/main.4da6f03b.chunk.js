(this["webpackJsonpkanye-rest"]=this["webpackJsonpkanye-rest"]||[]).push([[0],{22:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},78:function(t,e,n){},81:function(t,e,n){"use strict";n.r(e);var a=n(3),c=n.n(a),i=n(10),r=n(2),s=n(0),o=n.n(s),u=n(16),l=n.n(u),p=(n(41),n(42),n(9)),j=n(4);n(31);n(22);var d=n.p+"static/media/kanye-west.7935d92f.png";var g=n(14);function b(t){var e=t.toggle;return Object(r.jsx)(g.a.div,{initial:"pageInitial",animate:"pageAnimate",variants:{pageInitial:{opacity:0},pageAnimate:{opacity:1,scale:[.2,1.1,.9,1],rotate:[0,10,-10,0],transition:{duration:.7}}},children:Object(r.jsx)("img",{src:d,className:"kanye"})},e)}var f=n(33);function h(t){var e=t.toggle,n=Object(f.a)(t,["toggle"]);return Object(r.jsx)(g.a.div,{initial:"pageInitial",animate:"pageAnimate",variants:{pageInitial:{opacity:0,display:"inline"},pageAnimate:{opacity:1,scale:[.2,1.1,.9,1],transition:{delay:n.delay,duration:.7}}},children:n.children},e)}var O=n(32),x=n.n(O);n(78);function m(){var t=function(){var t=Object(s.useState)(""),e=Object(j.a)(t,2),n=e[0],a=e[1],r=Object(s.useState)({toggle:!1}),o=Object(j.a)(r,2),u=o[0],l=o[1],p="https://api.kanye.rest?format=text";return Object(s.useEffect)((function(){var t=!1;function e(){return(e=Object(i.a)(c.a.mark((function e(){var n,i,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get(p);case 2:return n=e.sent,e.next=5,n;case 5:i=e.sent,r=i.data,!t&&r&&a(r.quote),t||r||a("Trouble fetching quote...");case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return function(){e.apply(this,arguments)}(),function(){t=!0}}),[u]),[{quote:n,toggle:u},l]}(),e=Object(j.a)(t,2),n=e[0],a=n.quote,o=n.toggle,u=e[1];return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(b,Object(p.a)({},o)),Object(r.jsx)("h1",{children:"Kanye Says"}),Object(r.jsx)(h,Object(p.a)(Object(p.a)({delay:.3},o),{},{children:Object(r.jsxs)("span",{"data-testid":"quote",children:["\u201c",a,"\u201d"]})})),Object(r.jsx)("button",{"data-testid":"getQuote",className:"button",onClick:function(){return u({toggle:!o.toggle})},children:"Get Quote"})]})}var y=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsx)("header",{className:"App-header",children:Object(r.jsx)(m,{})})})},v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,83)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),i(t),r(t)}))},k=n(12),w=n(17),A=[n(7).c.get("https://api.kanye.rest",(function(t,e,n){t.url.searchParams.get("format");return e(n.text("some weird text"),n.json({data:"some weird text"}))}))];w.a.apply(void 0,Object(k.a)(A));function I(){return(I=Object(i.a)(c.a.mark((function t(){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:t.next=3;break;case 3:console.log("ENV>>>>","production"),l.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(y,{})}),document.getElementById("root"));case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){I.apply(this,arguments)}(),v()}},[[81,1,2]]]);
//# sourceMappingURL=main.4da6f03b.chunk.js.map