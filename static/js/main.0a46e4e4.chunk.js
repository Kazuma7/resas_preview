(this.webpackJsonpresas_preview=this.webpackJsonpresas_preview||[]).push([[0],{177:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(60),c=a.n(s),o=(a(68),a(2)),i=a(3),l=a.n(i),u=a(10),p=a(7),F=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("prefNameDate")&&(a=JSON.parse(localStorage.getItem("prefNameDate")),new Date(a).getMonth()!==(new Date).getMonth()&&localStorage.removeItem("prefName")),!localStorage.getItem("prefName")){e.next=3;break}return e.abrupt("return",JSON.parse(localStorage.getItem("prefName")));case 3:return e.next=5,fetch("https://opendata.resas-portal.go.jp/api/v1/prefectures",{headers:{"X-API-KEY":t}});case 5:return r=e.sent,e.next=8,r.json();case 8:return n=e.sent,localStorage.setItem("prefNameDate",JSON.stringify(new Date)),localStorage.setItem("prefName",JSON.stringify(n.result)),e.abrupt("return",n.result);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=Object(u.a)(l.a.mark((function e(t){var a,r,n,s,c,o,i;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(localStorage.getItem("prefInfoDate")&&(a=JSON.parse(localStorage.getItem("prefInfoDate")),new Date(a).getMonth()!==(new Date).getMonth()&&localStorage.removeItem("prefInfo")),!localStorage.getItem("prefInfo")){e.next=3;break}return e.abrupt("return",JSON.parse(localStorage.getItem("prefInfo")));case 3:for(r=[],n=0;n<47;n++)r.push(b(t,n+1));return e.next=7,Promise.all(r);case 7:for(s=e.sent,c=[],o=function(e){var t=s[e],a=Object.keys(t.result.data[0].data).map((function(e){return t.result.data[0].data[e].value/1e3}));c.push(a)},i=0;i<47;i++)o(i);return localStorage.setItem("prefInfoDate",JSON.stringify(new Date)),localStorage.setItem("prefInfo",JSON.stringify(c)),e.abrupt("return",c);case 14:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(u.a)(l.a.mark((function e(t,a){var r,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?cityCode=-&prefCode=".concat(a),{headers:{"X-API-KEY":t}});case 2:return r=e.sent,e.next=5,r.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),d=a(1),j=function(e){var t=e.checked,a=e.disabled,r=e.prefName,n=e.prefCode,s=e.onChange;return Object(d.jsxs)("div",{className:"checkboxOut",children:[Object(d.jsx)("input",{type:"checkbox",id:n+"checkbox_pref",disabled:a,checked:t,onChange:s}),Object(d.jsx)("label",{htmlFor:n+"checkbox_pref",children:r})]})},h=a(63),m=["#FFB8B8","#FFC1B8","#FFCAB8","#FFD3B8","#FFDCB8","#FFE4B8","#FFEDB8","#FFF6B8","#FFFFB8","#F6FFB8","#EDFFB8","#E4FFB8","#DCFFB8","#D3FFB8","#CAFFB8","#C1FFB8","#B8FFB8","#B8FFC1","#B8FFCA","#B8FFD3","#B8FFDC","#B8FFE4","#B8FFED","#B8FFF6","#B8FFFF","#B8F6FF","#B8EDFF","#B8E4FF","#B8DCFF","#B8D3FF","#B8CAFF","#B8C1FF","#B8B8FF","#C1B8FF","#CAB8FF","#D3B8FF","#DCB8FF","#E4B8FF","#EDB8FF","#F6B8FF","#FFB8FF","#FFB8F6","#FFB8ED","#FFB8E4","#FFB8DC","#FFB8D3"],g=(a(177),function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:"mainMessageBox",children:Object(d.jsx)("p",{children:"\ud83d\udca1\u3053\u3053\u306fRESAS-API\u3092\u7528\u3044\u3066\u90fd\u9053\u5e9c\u770c\u3054\u3068\u306e\u7dcf\u4eba\u53e3\u3092\u8abf\u3079\u3001\u6bd4\u8f03\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u308bweb\u30b5\u30fc\u30d3\u30b9\u3067\u3059\u3002\u4e0b\u306b\u4e26\u3079\u3089\u308c\u305f\u770c\u540d\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b\u3053\u3068\u3067\u305d\u308c\u305e\u308c\u306e\u7dcf\u4eba\u53e3\u30b0\u30e9\u30d5\u3092\u8868\u793a\u3057\u307e\u3059\u3002"})}),Object(d.jsxs)("div",{className:"subMessageBox",children:[Object(d.jsx)("p",{className:"subM",children:"RESAS-API\u306b\u3064\u3044\u3066\u306f\u3053\u3061\u3089"}),Object(d.jsx)("a",{className:"subMA1",href:"https://opendata.resas-portal.go.jp/",children:"https://opendata.resas-portal.go.jp/"}),Object(d.jsx)("p",{className:"subM",children:"\u30bd\u30fc\u30b9\u30b3\u30fc\u30c9\u306fGitHub\u3067\u516c\u958b\u4e2d"}),Object(d.jsx)("a",{className:"subMA",href:"https://github.com/Kazuma7/resas-app",children:"https://github.com/Kazuma7/resas_preview"})]})]})}),B="kZpPSC2OuUSuQx8qGem9FRbrHq6u14XPmrzqh3K9",O={scales:{x:{display:!0,title:{display:!0,text:"\u5e74\u4ee3 (\u5e74)"}},y:{display:!0,title:{display:!0,text:"\u7dcf\u4eba\u53e3 (\u5343\u4eba)"},suggestedMin:0,suggestedMax:15e3}},responsive:!0,maintainAspectRatio:!1},x=function(){var e=Object(r.useState)({}),t=Object(p.a)(e,2),a=t[0],n=t[1],s=Object(r.useState)(!1),c=Object(p.a)(s,2),i=c[0],b=c[1],x=Object(r.useState)(Array(47).fill(!1)),v=Object(p.a)(x,2),S=v[0],C=v[1],D=Object(r.useState)([]),N=Object(p.a)(D,2),I=N[0],k=N[1],w=Object(r.useState)([]),y=Object(p.a)(w,2),E=y[0],A=y[1];Object(r.useEffect)((function(){(function(){var e=Object(u.a)(l.a.mark((function e(){var t,a,r,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return b(!0),e.next=3,Promise.all([F(B),f(B)]);case 3:t=e.sent,a=Object(p.a)(t,2),r=a[0],s=a[1],n(r),A(s),b(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"\u65e5\u672c\u7dcf\u4eba\u53e3\u6bd4\u8f03web\u30b5\u30fc\u30d3\u30b9"}),Object(d.jsx)(g,{}),Object(d.jsx)("h2",{children:"\u90fd\u9053\u5e9c\u770c"}),Object(d.jsx)("div",{className:"checkboxes",children:Object.keys(a).map((function(e){return Object(d.jsx)(j,{checked:S[a[e].prefCode-1],disabled:i,prefName:a[e].prefName,prefCode:a[e].prefCode,onChange:function(){return function(e){b(!0);var t=S.slice();if(t[e]=!t[e],S[e]){console.log(I.slice());var r=I.slice();console.log(r);for(var n=0;n<r.length;n++)r[n].label===a[e].prefName&&r.splice(n,1);console.log(r),C(t),k(r),b(!1)}else{var s={data:E[e],label:a[e].prefName,backgroundColor:m[e],borderColor:m[e]};C(t),k([].concat(Object(o.a)(I),[s])),b(!1)}}(a[e].prefCode-1)}},a[e].prefCode+"checkbox_key")}))}),Object(d.jsx)("h2",{children:"\u7dcf\u4eba\u53e3\u30b0\u30e9\u30d5"}),Object(d.jsx)("div",{className:"graph",children:Object(d.jsx)("div",{className:"graphInner",children:Object(d.jsx)(h.a,{data:{labels:[1960,1965,1970,1975,1980,1985,1990,1995,2e3,2005,2010,2015,2020,2025,2030,2035,2040,2045],datasets:I},options:O})})}),Object(d.jsx)("div",{className:"footer",children:"created by kazuma iizumi"})]})},v=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,179)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))};c.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),v()},68:function(e,t,a){}},[[178,1,2]]]);
//# sourceMappingURL=main.0a46e4e4.chunk.js.map