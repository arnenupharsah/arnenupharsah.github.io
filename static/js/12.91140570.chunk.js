(this["webpackJsonparnenupharsah.github.io"]=this["webpackJsonparnenupharsah.github.io"]||[]).push([[12],{174:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),r=a(5),i=a(21),l=function(e){var t=e.label,a=e.link,s=e.value,r=e.format;return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{width:"70%",children:t}),Object(n.jsx)("td",{children:a?Object(n.jsx)("a",{href:a,children:r(s)}):r(s)})]})};l.defaultProps={format:function(e){return e},link:null,value:null};var c=l,o=function(e){var t=e.data;return Object(n.jsx)("table",{children:Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsx)(c,{format:e.format,label:e.label,link:e.link,value:e.value},e.label)}))})})},u=a(22),b=function(){var e=Object(s.useState)(),t=Object(u.a)(e,2),a=t[0],r=t[1];return Object(s.useEffect)((function(){var e=setInterval((function(){return function(){var e=new Date("1990-02-05T09:24:00");r(((Date.now()-e)/31556925190.079998).toFixed(11))}()}),25);return function(){clearInterval(e)}}),[]),Object(n.jsx)(n.Fragment,{children:a})},h=[{key:"age",label:"Current age",value:Object(n.jsx)(b,{})},{key:"countries",label:"Countries visited",value:53,link:"https://www.google.com/maps/d/u/0/embed?mid=1kqL9OzBL550zAxY1zlpk_58cwihJLKvT"},{key:"location",label:"Current city",value:"Bangalore, India"}],j=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h3",{children:"Some stats about me"}),Object(n.jsx)(o,{data:h})]})},d=a(161),p=a.n(d),m=a(57),f=a(163),O=a(73),g=a.n(O),k=[{label:"Stars this repository has on github",key:"stargazers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of people watching this repository",key:"subscribers_count",link:"https://github.com/mldangelo/personal-site/stargazers"},{label:"Number of forks",key:"forks",link:"https://github.com/mldangelo/personal-site/network"},{label:"Number of spoons",value:"0"},{label:"Number of linter warnings",value:"0"},{label:"Open github issues",key:"open_issues_count",link:"https://github.com/mldangelo/personal-site/issues"},{label:"Last updated at",key:"pushed_at",link:"https://github.com/mldangelo/personal-site/commits",format:function(e){return g()(e).format("MMMM DD, YYYY")}},{label:"Lines of Javascript powering this website",value:"2115",link:"https://github.com/mldangelo/personal-site/graphs/contributors"}],v=function(){var e=Object(s.useState)(k),t=Object(u.a)(e,2),a=t[0],r=t[1],i=Object(s.useCallback)(Object(f.a)(p.a.mark((function e(){var t,a;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.github.com/repos/mldangelo/personal-site");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,r(k.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{value:Object.keys(a).includes(e.key)?a[e.key]:e.value})})));case 7:case"end":return e.stop()}}),e)}))),[]);return Object(s.useEffect)((function(){i()}),[i]),Object(n.jsxs)("div",{children:[Object(n.jsx)("h3",{children:"Some stats about this site"}),Object(n.jsx)(o,{data:a})]})};t.default=function(){return Object(n.jsx)(i.a,{title:"Stats",description:"Some statistics about Aulick Sah and aulicksah.com",children:Object(n.jsxs)("article",{className:"post",id:"stats",children:[Object(n.jsx)("header",{children:Object(n.jsx)("div",{className:"title",children:Object(n.jsx)("h2",{"data-testid":"heading",children:Object(n.jsx)(r.b,{to:"/stats",children:"Stats"})})})}),Object(n.jsx)(j,{}),Object(n.jsx)(v,{})]})})}}}]);
//# sourceMappingURL=12.91140570.chunk.js.map