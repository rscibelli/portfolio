(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{126:function(e,t,c){},127:function(e,t,c){},134:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(19),r=c.n(a),s=c(89),j=c(10),i=(c(126),c(8)),l=c(213),b=(c(127),c(214)),o=c(215),d=c(83),x=c(216),u=c(107),O=c.n(u),h=c(220),p=c(201),f=c(210),m=c(204),g=c(208),k=c(209),v=c(101),y=c.n(v),C=c(104),w=c.n(C),S=c(105),F=c.n(S),B=c(106),M=c.n(B),P=c(103),T=c.n(P),N=c(102),A=c.n(N),G=c(221),D=c(2);function J(e){var t=e.drawerOpen,c=e.toggleDrawer,n=Object(j.m)(),a=function(){c(),n("/feedback")},r=function(){c(),n("/portfolio")},s=function(){c(),n("/projects")};return Object(D.jsx)(h.a,{anchor:"left",open:t,onClose:c,children:Object(D.jsxs)("div",{children:[Object(D.jsx)(p.a,{children:Object(D.jsx)(m.a,{children:Object(D.jsxs)(G.a,{onClick:r,children:[Object(D.jsx)(g.a,{children:Object(D.jsx)(y.a,{})}),Object(D.jsx)(k.a,{primary:"Home"})]})})}),Object(D.jsx)(f.a,{}),Object(D.jsxs)(p.a,{children:[Object(D.jsx)(m.a,{children:Object(D.jsxs)(G.a,{onClick:s,children:[Object(D.jsx)(g.a,{children:Object(D.jsx)(A.a,{})}),Object(D.jsx)(k.a,{primary:"Projects"})]})}),Object(D.jsx)(m.a,{children:Object(D.jsxs)(G.a,{onClick:s,children:[Object(D.jsx)(g.a,{children:Object(D.jsx)(T.a,{})}),Object(D.jsx)(k.a,{primary:"Golf"})]})}),Object(D.jsx)(m.a,{children:Object(D.jsxs)(G.a,{children:[Object(D.jsx)(g.a,{children:Object(D.jsx)(w.a,{})}),Object(D.jsx)(k.a,{primary:"Email Me"})]})}),Object(D.jsx)(m.a,{children:Object(D.jsxs)(G.a,{onClick:a,children:[Object(D.jsx)(g.a,{children:Object(D.jsx)(F.a,{})}),Object(D.jsx)(k.a,{primary:"Leave Feedback"})]})}),Object(D.jsx)(m.a,{children:Object(D.jsxs)(G.a,{children:[Object(D.jsx)(g.a,{children:Object(D.jsx)(M.a,{})}),Object(D.jsx)(k.a,{primary:"Source Code"})]})})]})]})})}var L=Object(l.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1},appBar:{background:"#175812"}}}));var E=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),c=t[0],a=t[1],r=function(){a(!c)},s=L();return Object(D.jsx)("main",{children:Object(D.jsxs)("div",{children:[Object(D.jsx)(b.a,{position:"static",className:s.appBar,children:Object(D.jsxs)(o.a,{children:[Object(D.jsx)(x.a,{edge:"start",className:s.menuButton,color:"inherit","aria-label":"menu",children:Object(D.jsx)(O.a,{onClick:r})}),Object(D.jsx)(d.a,{variant:"h6",className:s.title,children:"Robert Scibelli's Portfolio"})]})}),Object(D.jsx)(J,{drawerOpen:c,toggleDrawer:r})]})})},I=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,226)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),r(e),s(e)}))},R=c(219),H=c(218),V=c(14),Y=c(23),q="localhost:8080";function z(){return(z=Object(Y.a)(Object(V.a)().mark((function e(t){var c;return Object(V.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(q+"/feedback",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({message:t})});case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function K(){return Q.apply(this,arguments)}function Q(){return(Q=Object(Y.a)(Object(V.a)().mark((function e(){var t;return Object(V.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("/feedback");case 3:return t=e.sent,e.next=6,t.json();case 6:return e.abrupt("return",e.sent);case 9:return e.prev=9,e.t0=e.catch(0),e.abrupt("return",[]);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}function U(){var e=Object(n.useState)({feedbackMessage:"noMessage",feedback:"No Feedback Yet!"}),t=Object(i.a)(e,2),c=t[0],a=t[1];return Object(D.jsxs)("div",{style:{textAlign:"center",padding:"20px"},children:[Object(D.jsx)(R.a,{id:"outlined-multiline-static",label:"Multiline",multiline:!0,rows:4,defaultValue:"Type feedback here",onChange:function(e){a({feedbackMessage:e.target.value})}}),Object(D.jsx)(H.a,{variant:"outlined",onClick:function(){return function(e){return z.apply(this,arguments)}(c.feedbackMessage)},children:"Submit"}),Object(D.jsx)(H.a,{variant:"outlined",onClick:function(){a({feedback:K()})},children:"Get All Feedback"}),Object(D.jsx)("h2",{children:c.feedback})]})}function W(){return Object(D.jsx)("h1",{style:{textAlign:"center"},children:"Projects page"})}function X(){return Object(D.jsx)("div",{style:{textAlign:"center",padding:"20px"},children:Object(D.jsx)("h1",{children:"This is the home page"})})}r.a.render(Object(D.jsx)(s.a,{children:Object(D.jsxs)("div",{children:[Object(D.jsx)(E,{}),Object(D.jsxs)(j.c,{children:[Object(D.jsx)(j.a,{exact:!0,path:"/feedback",element:Object(D.jsx)(U,{})}),Object(D.jsx)(j.a,{exact:!0,path:"/portfolio",element:Object(D.jsx)(X,{})}),Object(D.jsx)(j.a,{exact:!0,path:"/projects",element:Object(D.jsx)(W,{})}),Object(D.jsx)(j.a,{exact:!0,path:"*",element:Object(D.jsx)(W,{})})]})]})}),document.getElementById("root")),I()}},[[134,1,2]]]);
//# sourceMappingURL=main.27b36609.chunk.js.map