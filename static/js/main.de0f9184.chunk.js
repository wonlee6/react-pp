(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){"use strict";n.r(t);var c=n(2),o=n.n(c),s=n(11),i=n.n(s),r=(n(28),n(15)),a=n(17),u=n(13),d=(n(29),n(5)),l=function(e){var t=e.onInsert,n=Object(c.useState)(""),o=Object(r.a)(n,2),s=o[0],i=o[1],a=Object(c.useCallback)((function(e){i(e.target.value)}),[]),l=Object(c.useCallback)((function(e){t(s),i(""),e.preventDefault()}),[t,s]);return Object(d.jsxs)("form",{className:"TodoInsert",onSubmit:l,children:[Object(d.jsx)("input",{placeholder:"\ud560 \uc77c\uc744 \uc785\ub825\ud558\uc138\uc694",value:s,onChange:a}),Object(d.jsx)("button",{type:"submit",children:Object(d.jsx)(u.a,{})})]})},j=n(20),b=n.n(j),O=(n(31),function(e){var t=e.todo,n=e.onRemove,c=e.onToggle,o=e.style,s=t.id,i=t.text,r=t.checked;return Object(d.jsx)("div",{className:"TodoListItem-virtualized",style:o,children:Object(d.jsxs)("div",{className:"TodoListItem",children:[Object(d.jsxs)("div",{className:b()("checkbox",{checked:r}),onClick:function(){return c(s)},children:[r?Object(d.jsx)(u.b,{}):Object(d.jsx)(u.c,{}),Object(d.jsx)("div",{className:"text",children:i})]}),Object(d.jsx)("div",{className:"remove",onClick:function(){return n(s)},children:Object(d.jsx)(u.d,{})})]})})}),h=o.a.memo(O,(function(e,t){return e.todo===t.todo})),f=(n(32),n(23)),v=function(e){var t=e.todos,n=e.onRemove,o=e.onToggle,s=Object(c.useCallback)((function(e){var c=e.index,s=e.key,i=e.style,r=t[c];return Object(d.jsx)(h,{todo:r,onRemove:n,onToggle:o,style:i},s)}),[t,n,o]);return Object(d.jsx)(f.a,{className:"TodoList",width:512,height:513,rowCount:t.length,rowHeight:57,rowRenderer:s,list:t,style:{outline:"none"}})},m=o.a.memo(v),x=(n(45),function(e){var t=e.children;return Object(d.jsxs)("div",{className:"TodoTemplate",children:[Object(d.jsx)("div",{className:"app-title",children:"\uc77c\uc815\uad00\ub9ac"}),Object(d.jsx)("div",{className:"content",children:t})]})});function p(){for(var e=[],t=1;t<=2500;t++)e.push({id:t,text:"\ud560 \uc77c ".concat(t),checked:!1});return e}function g(e,t){switch(t.type){case"INSERT":return e.concat(t.todo);case"REMOVE":return e.filter((function(e){return e.id!==t.id}));case"TOGGLE":return e.map((function(e){return e.id===t.id?Object(a.a)(Object(a.a)({},e),{},{checked:!e.checked}):e}));default:return e}}var k=function(){var e=Object(c.useReducer)(g,void 0,p),t=Object(r.a)(e,2),n=t[0],o=t[1],s=Object(c.useRef)(2501),i=Object(c.useCallback)((function(e){var t={id:s.current,text:e,checked:!1};o({type:"INSERT",todo:t}),s.current+=1}),[]),a=Object(c.useCallback)((function(e){o({type:"REMOVE",id:e})}),[]),u=Object(c.useCallback)((function(e){o({type:"TOGGLE",id:e})}));return Object(d.jsxs)(x,{children:[Object(d.jsx)(l,{onInsert:i}),Object(d.jsx)(m,{todos:n,onRemove:a,onToggle:u})]})},T=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,47)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),c(e),o(e),s(e),i(e)}))};i.a.render(Object(d.jsx)(o.a.StrictMode,{children:Object(d.jsx)(k,{})}),document.getElementById("root")),T()}},[[46,1,2]]]);
//# sourceMappingURL=main.de0f9184.chunk.js.map