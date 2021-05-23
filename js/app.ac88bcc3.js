(function(t){function e(e){for(var n,c,a=e[0],s=e[1],u=e[2],d=0,p=[];d<a.length;d++)c=a[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);l&&l(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),o()}function o(){for(var t,e=0;e<i.length;e++){for(var o=i[e],n=!0,a=1;a<o.length;a++){var s=o[a];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},i=[];function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/todo/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var u=0;u<a.length;u++)e(a[u]);var l=s;i.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("div",{attrs:{id:"nav"}},[o("router-link",{attrs:{to:"/all"}},[t._v("全部")]),t._v(" | "),o("router-link",{attrs:{to:"/active"}},[t._v("未完成")]),t._v(" | "),o("router-link",{attrs:{to:"/complete"}},[t._v("已完成")])],1),o("TodoInput"),o("div",{staticClass:"list"},t._l(t.todoIndex,(function(t){return o("TodoListItem",{key:t,attrs:{index:t}})})),1)],1)},i=[],c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todoInput"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.todo,expression:"todo",modifiers:{trim:!0}},{name:"focus",rawName:"v-focus"}],attrs:{type:"text",placeholder:"請輸入代辦事項"},domProps:{value:t.todo},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitHanlder(e)},input:function(e){e.target.composing||(t.todo=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])},a=[],s={data:function(){return{todo:""}},methods:{submitHanlder:function(){this.todo&&(this.$store.commit("ADD_TODO",{content:this.todo,complete:!1}),this.todo="")}}},u=s,l=o("2877"),d=Object(l["a"])(u,c,a,!1,null,null,null),p=d.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todoListItem"},[null!==t.edit?o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.edit,expression:"edit",modifiers:{trim:!0}},{name:"focus",rawName:"v-focus"}],staticClass:"edit",attrs:{type:"text"},domProps:{value:t.edit},on:{keyup:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.submitHandler(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:t.cancelHandler(e)}],blur:[t.cancelHandler,function(e){return t.$forceUpdate()}],input:function(e){e.target.composing||(t.edit=e.target.value.trim())}}}):[o("input",{directives:[{name:"model",rawName:"v-model",value:t.complete,expression:"complete"}],staticClass:"toggle",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.complete)?t._i(t.complete,null)>-1:t.complete},on:{change:function(e){var o=t.complete,n=e.target,r=!!n.checked;if(Array.isArray(o)){var i=null,c=t._i(o,i);n.checked?c<0&&(t.complete=o.concat([i])):c>-1&&(t.complete=o.slice(0,c).concat(o.slice(c+1)))}else t.complete=r}}}),o("label",{on:{dblclick:t.editHandler}},[t._v(t._s(t.todo.content))]),o("button",{staticClass:"destroy",on:{click:t.destroyHandler}})]],2)},m=[],v=(o("a9e3"),{data:function(){return{edit:null}},props:{index:{type:Number,required:!0}},computed:{todo:function(){return this.$store.state.todos[this.index]},complete:{get:function(){return this.todo.complete},set:function(t){this.$store.commit("UPDATE_TODO",{index:this.index,data:{content:this.todo.content,complete:t}})}}},methods:{destroyHandler:function(){confirm("是否確認刪除 ".concat(this.todo.content," ?"))&&this.$store.commit("REMOVE_TODO",this.index)},editHandler:function(){this.edit=this.todo.content},submitHandler:function(){this.edit||this.destroyHandler(),this.$store.commit("UPDATE_TODO",{index:this.index,data:{content:this.edit,complete:this.todo.complete}}),this.cancelHandler()},cancelHandler:function(){this.edit=null}}}),h=v,y=Object(l["a"])(h,f,m,!1,null,null,null),O=y.exports,b={components:{TodoInput:p,TodoListItem:O},computed:{todoIndex:function(){return this.$store.getters["todoIndex"]}},mounted:function(){this.$store.dispatch("INIT_TODOS")}},_=b,x=(o("efc4"),Object(l["a"])(_,r,i,!1,null,null,null)),g=x.exports,k=o("31bd"),T=o("8c4f");n["a"].use(T["a"]);var w=[{path:"/all",name:"all"},{path:"/active",name:"active"},{path:"/complete",name:"complete"},{path:"*",redirect:"/all"}],D=new T["a"]({mode:"hash",base:"todo/all",routes:w}),E=D,I=(o("4de4"),o("c975"),o("d81d"),o("a434"),o("b0c0"),o("2f62"));n["a"].use(I["a"]);var S={load:function(){return JSON.parse(localStorage.getItem("vue-todos")||"[]")},save:function(t){localStorage.setItem("vue-todos",JSON.stringify(t))}},j={all:function(t){return t},active:function(t){return t.filter((function(t){return!t.complete}))},complete:function(t){return t.filter((function(t){return t.complete}))}},H=new I["a"].Store({strict:!0,state:{todos:[{content:"todo-content",complete:!1},{content:"todo-content",complete:!0},{content:"todo-content",complete:!1}]},getters:{todoIndex:function(t){return j[t.route.name](t.todos).map((function(e){return t.todos.indexOf(e)}))}},mutations:{SET_TODOS:function(t,e){t.todos=e,S.save(t.todos)},ADD_TODO:function(t,e){t.todos.push(e),S.save(t.todos)},UPDATE_TODO:function(t,e){var o=e.index,n=e.data;t.todos[o].complete=n.complete,t.todos[o].content=n.content,S.save(t.todos)},REMOVE_TODO:function(t,e){t.todos.splice(e,1),S.save(t.todos)}},actions:{INIT_TODOS:function(t){var e=t.commit;e("SET_TODOS",S.load())}}});Object(k["sync"])(H,E),n["a"].config.productionTip=!1,n["a"].directive("focus",{inserted:function(t){t.focus()}}),new n["a"]({router:E,store:H,render:function(t){return t(g)}}).$mount("#app")},c107:function(t,e,o){},efc4:function(t,e,o){"use strict";o("c107")}});
//# sourceMappingURL=app.ac88bcc3.js.map