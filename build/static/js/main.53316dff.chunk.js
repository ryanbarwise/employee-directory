(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],[,,,,,,,function(e,t,n){e.exports=n(15)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(2),l=n.n(o),c=(n(12),n(3)),i=n(4),s=n(6),u=n(5),d=(n(13),n(14),function(e){var t=e.headers;return r.a.createElement("thead",null,t.map((function(e){return r.a.createElement("th",null,e)})))}),m=function(e){var t=e.picture,n=e.name,a=e.dob,o=e.gender,l=e.email,c=e.phone;return r.a.createElement("tr",null,r.a.createElement("td",null,r.a.createElement("img",{src:t,alt:"".concat(n," photo")})),r.a.createElement("td",null,n),r.a.createElement("td",null,a),r.a.createElement("td",null,o),r.a.createElement("td",null,l),r.a.createElement("td",null,c))},p=function(e){var t=e.filteredEmployees;return r.a.createElement("table",{className:"table"},r.a.createElement(d,{headers:["Picture","Name","DOB","Gender","Email","Phone"]}),t.map((function(e){return r.a.createElement(m,{picture:e.picture.thumbnail,name:"".concat(e.name.first," ").concat(e.name.last),dob:e.dob.date,gender:e.gender,email:e.email,phone:e.phone})})))},f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={unfilteredEmployees:[],filteredEmployees:[]},e.filterBy=function(t){var n=t.target.innerText.toLowerCase(),a=e.state.unfilteredEmployees.filter((function(e){return e.gender===n}));e.setState({filteredEmployees:a})},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://randomuser.me/api/?results=15").then((function(e){return e.json()})).then((function(t){e.setState({unfilteredEmployees:t.results,filteredEmployees:t.results}),console.log(t.results)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null," Employee Directory"),r.a.createElement("div",{class:"dropdown"},r.a.createElement("button",{class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenu2","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"},"Filter"),r.a.createElement("div",{class:"dropdown-menu","aria-labelledby":"dropdownMenu2"},r.a.createElement("button",{class:"dropdown-item",type:"button",onClick:this.filterBy},"Male"),r.a.createElement("button",{class:"dropdown-item",type:"button",onClick:this.filterBy},"Female"))),r.a.createElement(p,{filteredEmployees:this.state.filteredEmployees||[]}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.53316dff.chunk.js.map