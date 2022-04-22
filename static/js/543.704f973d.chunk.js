"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[543],{8275:function(e,t,n){n.d(t,{e:function(){return l}});var r=n(501),a=n(2007),u=n.n(a),i="MovieItem_item__iPuYx",o="MovieItem_item_link__LJLUu",c=n(184),s=function(e){var t=e.title,n=e.itemId,a=e.location;return(0,c.jsx)("li",{className:i,children:(0,c.jsx)(r.rU,{className:o,to:"/movies/".concat(n),state:{from:a},children:t})})};s.protoTypes={title:u().string.isRequired,itemId:u().number.isRequired,location:u().object.isRequired};var p="MovieList_list__yjDCC",l=function(e){var t=e.films,n=e.location;return(0,c.jsx)("ul",{className:p,children:t.map((function(e){var t=e.id,r=e.title,a=e.name,u=r||a;return(0,c.jsx)(s,{itemId:t,title:u,location:n},t)}))})};l.protoTypes={films:u().array.isRequired,location:u().object.isRequired}},543:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(5861),a=n(885),u=n(7757),i=n.n(u),o=n(2791),c=n(501),s=n(6871),p=n(614),l=n(8275),f=n(577),m="MoviePage_form__dOm+x",v="MoviePage_button__HsoPA",d="MoviePage_input__JZkDm",h="MoviePage_loading__yDVXG",g=n(184),_=function(){var e=(0,o.useState)(""),t=(0,a.Z)(e,2),n=t[0],u=t[1],_=(0,o.useState)(null),x=(0,a.Z)(_,2),b=x[0],y=x[1],k=(0,o.useState)(!1),w=(0,a.Z)(k,2),j=w[0],Z=w[1],S=(0,c.lr)(),q=(0,a.Z)(S,2),M=q[0],C=q[1],N=(0,s.TH)();return(0,o.useEffect)((function(){var e=M.get("query");if(y(null),""!==N.search){var t=function(){var t=(0,r.Z)(i().mark((function t(){var n;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return Z(!0),t.prev=1,t.next=4,(0,p.XR)(e);case 4:if(0!==(n=t.sent).data.results.length){t.next=8;break}return y(null),t.abrupt("return",(0,f.Am)("Movie ".concat(e," not found!"),{position:"top-center"}));case 8:y(n.data.results),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),console.log(t.t0);case 14:return t.prev=14,Z(!1),t.finish(14);case 17:case"end":return t.stop()}}),t,null,[[1,11,14,17]])})));return function(){return t.apply(this,arguments)}}();t()}}),[M,C,N.search]),(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("form",{className:m,onSubmit:function(e){if(e.preventDefault(),""===n)return C(""),(0,f.Am)("Please, enter movie name!",{position:"top-center"});C({query:n}),u("")},children:[(0,g.jsx)("input",{className:d,onChange:function(e){u(e.currentTarget.value.toLowerCase().trim())},type:"text",value:n,autoComplete:"off",autoFocus:!0,placeholder:"Search films"}),(0,g.jsx)("button",{className:v,type:"submit"})]}),j&&(0,g.jsx)("div",{className:h,children:"Loading..."}),b&&(0,g.jsx)(l.e,{films:b,location:N})]})}},614:function(e,t,n){n.d(t,{Bs:function(){return p},XR:function(){return m},nF:function(){return l},y_:function(){return s},zV:function(){return f}});var r=n(5861),a=n(7757),u=n.n(a),i=n(4569),o=n.n(i),c="19261be26ee50f4d2c275bad83bad0b4",s=function(){var e=(0,r.Z)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat(c));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(c,"&language=en-US"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(c,"&language=en-US"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(c,"&language=en-US&page=1"));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,r.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o().get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=543.704f973d.chunk.js.map