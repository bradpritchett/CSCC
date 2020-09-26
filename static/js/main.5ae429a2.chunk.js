(this.webpackJsonpcscc=this.webpackJsonpcscc||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(7),c=a.n(r),u=(a(14),function(){return l.a.createElement("div",{className:"head"},l.a.createElement("h1",null,"Tables"))}),i=a(8),s=a(1),o=function(){return fetch("https://code-challenge.spectrumtoolbox.com/api/restaurants",{method:"GET",headers:{Authorization:"Api-Key q3MNxtfep8Gt"}}).then((function(e){return e.json()}))},m=function(e){var t=e.data;return l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Restaurant"),l.a.createElement("th",null,"Address"),l.a.createElement("th",null,"City"),l.a.createElement("th",null,"State"),l.a.createElement("th",null,"Telephone"),l.a.createElement("th",null,"Genre"))),l.a.createElement("tbody",null,t.map((function(e){return l.a.createElement("tr",{key:e.id},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.address1),l.a.createElement("td",null,e.city),l.a.createElement("td",null,e.state),l.a.createElement("td",null,e.telephone),l.a.createElement("td",null,e.genre))}))))},f=function(e){for(var t=e.pagesPer,a=e.page,r=e.total,c=e.paginate,u=[],i=1;i<=Math.ceil(r/t);i++)u.push(i);return Object(n.useEffect)((function(){for(var e=document.querySelector(".pagination"),t=document.querySelectorAll(".pagination li"),n=document.getElementsByClassName("".concat(a)),l=0;l<t.length;l++)e.classList.remove("load"),t[l].classList.remove("active");void 0!==n[0]&&n[0].classList.add("active")}),[a]),r<10?l.a.createElement("div",null,console.log(r)):l.a.createElement("ul",{className:"pagination load"},u.map((function(e){return l.a.createElement("li",{key:e,className:e},l.a.createElement("a",{onClick:function(){return c(e)}},e))})))},d=function(e){var t=e.searchData;return l.a.createElement("input",{type:"text",name:"search",onChange:function(e){var a=e.target.value;t(a)},placeholder:"Search by restaurant Name, City or Genre"})},E=a(4),h=a(5),g=["All States","AK","AL","AR","AZ","CA","CO","CT","DC","DE","FL","GA","HI","IA","ID","IL","IN","KS","KY","LA","MA","MD","ME","MI","MN","MO","MS","MT","NC","ND","NE","NH","NJ","NM","NV","NY","OH","OK","OR","PA","RI","SC","SD","TN","TX","UT","VA","VT","WA","WI","WV","WY"],p=["All Genres","American","Asian","Bakery","Belgian","British","Bistro","Cafe","Coffee","Contemporary","Continental","Eclectic","European","French","Fusion","Grill","Hawaiian","International","Irish","Italian","Japanese","Kosher","Oysters","Pasta","Pacific Rim","Polynesian","Sandwiches","Seafood","Steak","Sushi","Tea","Traditional","Vegetarian","Vietnamese"],v=function(e){var t=e.filterDataItems,a=Object(n.useState)({state:"All States",genre:"All Genre"}),r=Object(s.a)(a,2),c=r[0],u=r[1];function i(e){var t=e.target.name,a=e.target.value;o(t,a)}var o=function(e,a){var n;n=Object(h.a)(Object(h.a)({},c),{},Object(E.a)({},e,a)),u(n),t(n)};return l.a.createElement("div",{className:"select"},l.a.createElement("span",null,l.a.createElement("select",{name:"state",onChange:i,value:c.states},function(){for(var e=[],t=0;t<=g.length;t++)e.push(l.a.createElement("option",{key:t,value:g[t]},g[t]));return e}())),l.a.createElement("span",null,l.a.createElement("select",{name:"genre",onChange:i,value:c.genre},function(){for(var e=[],t=0;t<=p.length;t++)e.push(l.a.createElement("option",{key:t,value:p[t]},p[t]));return e}())))},b=function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)({}),u=Object(s.a)(c,2),E=u[0],h=u[1],g=Object(n.useState)(1),p=Object(s.a)(g,2),b=p[0],A=p[1],O=Object(n.useState)(10),S=Object(s.a)(O,1)[0],j=Object(n.useState)("default"),y=Object(s.a)(j,2),N=y[0],C=y[1],I=Object(n.useState)({state:"All States",genre:"All Genre"}),M=Object(s.a)(I,2),D=M[0],T=M[1];Object(n.useEffect)((function(){o().then((function(e){h(e),k(e)}))}),[]);var k=function(e){var t=Object(i.a)(e);t.sort((function(e,t){return e.name<t.name?-1:e.name>t.name?1:0})),G(t)},G=function(e){r(e)};function L(e){A(1);var t=e.state,a=e.genre;T({state:t,genre:a});var n=E;if(t.includes("All")&&a.includes("All")?k(E):n=!t.includes("All")&&a.includes("All")?E.filter((function(e){return e.state===t})):t.includes("All")&&!a.includes("All")?E.filter((function(e){return e.genre.includes(a)})):(n=E.filter((function(e){return e.state===t}))).filter((function(e){return e.genre.includes(a)})),0!==n.length)return k(n);k([{id:Math.floor(20*Math.random()),name:"No results for "+t}])}Object(n.useEffect)((function(){!function(){A(1);var e=["id","address1","state","zip","lat","long","telephone","tags","website","hours","attire"],t=N.toLowerCase();if(""===t)L(D);else{var n=a.filter((function(a){return Object.keys(a).some((function(n){return!e.includes(n)&&a[n].toString().toLowerCase().includes(t)}))}));k(n)}}()}),[N]);var w=b*S,B=w-S,K=a.slice(B,w);return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{searchData:function(e){C(e)}}),l.a.createElement(v,{data:a,sortData:k,filterDataItems:L}),l.a.createElement(m,{data:K}),l.a.createElement(f,{pagesPer:S,page:b,total:a.length,paginate:function(e){A(e)}}))};var A=function(){return l.a.createElement("div",{className:"container"},l.a.createElement(u,null),l.a.createElement(b,null))};c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(A,null)),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.5ae429a2.chunk.js.map