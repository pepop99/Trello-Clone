(this.webpackJsonpdemo_zuddl=this.webpackJsonpdemo_zuddl||[]).push([[0],{15:function(t,a,e){},22:function(t,a,e){},23:function(t,a,e){},30:function(t,a,e){"use strict";e.r(a);var s=e(0),c=e.n(s),n=e(7),r=e.n(n),o=(e(22),e(23),e(5)),d=e(9),i=(e(15),e(2)),l=Object(o.b)((function(t,a){return{task:t.task[a.taskId]}}))((function(t){var a=t.task;return Object(i.jsx)("div",{className:"Task",children:a.text})})),b=Object(o.b)((function(t,a){return{stage:t.stage[a.stageId]}}))((function(t){var a=t.stage,e=Object(s.useState)(!1),c=Object(d.a)(e,2),n=c[0],r=c[1];return Object(i.jsxs)("div",{className:"Stage",children:[Object(i.jsx)("div",{className:"Stage-Title",onClick:void 0,children:a.title}),a.tasks&&a.tasks.map((function(t,e){return Object(i.jsx)(l,{stageId:a.id,taskId:t,index:e})})),n?console.log(1):Object(i.jsx)("div",{className:"Toggle-Add-Stage",onClick:function(){return r(!n)},children:"Add a card"})]})})),u=Object(o.b)((function(t){return{board:t.board}}))((function(t){var a=t.board;return Object(i.jsx)("div",{className:"Board",children:a.stages.map((function(t,a){return Object(i.jsx)(b,{stageId:t,index:a})}))})}));var g=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)("div",{className:"Header",children:"Board"}),Object(i.jsx)(u,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,31)).then((function(a){var e=a.getCLS,s=a.getFID,c=a.getFCP,n=a.getLCP,r=a.getTTFB;e(t),s(t),c(t),n(t),r(t)}))},p=e(11),O=e(10);var T=e(13),k=e(12),v=e(4),A=e(1);var y=Object(p.a)({board:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{stages:[]},a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_STAGE":var e=a.payload.stageId;return{stages:[].concat(Object(O.a)(t.stages),[e])};case"MOVE_STAGE":var s=a.payload,c=s.from,n=s.to,r=Array.from(t.stages);return r.splice(n,0,r.splice(c,1)[0]),{stages:r};case"DELETE_STAGE":var o=a.payload.stageId,d=t.stages.filter((function(t){return t!==o}));return{stages:d};default:return t}},stage:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_STAGE":var e=a.payload,s=e.stageId,c=e.stageTitle;return Object(A.a)(Object(A.a)({},t),{},Object(v.a)({},s,{id:s,title:c,tasks:[]}));case"DELETE_STAGE":var n=a.payload.stageId,r=(t[n],Object(T.a)(t,[n].map(k.a)));return r;case"RENAME_STAGE":var o=a.payload,i=o.stageId,l=o.stageTitle;return Object(A.a)(Object(A.a)({},t),{},Object(v.a)({},i,Object(A.a)(Object(A.a)({},t[i]),{},{title:l})));case"ADD_TASK":var b=a.payload,u=b.stageId,g=b.taskId;return Object(A.a)(Object(A.a)({},t),{},Object(v.a)({},u,Object(A.a)(Object(A.a)({},t[u]),{},{tasks:[].concat(Object(O.a)(t[u].tasks),[g])})));case"DELETE_TASK":var j=a.payload,p=j.stageId,y=j.taskId,h=t[p].tasks.filter((function(t){return t!==y}));return Object(A.a)(Object(A.a)({},t),{},Object(v.a)({},p,Object(A.a)(Object(A.a)({},t[p]),{},{tasks:h})));case"MOVE_TASK":var I,f=a.payload,D=f.source,S=f.target,E=f.oldIndex,x=f.newIndex;if(D===S){var m=Array.from(t[D].tasks);return m.splice(x,0,m.splice(E,1)[0]),Object(A.a)(Object(A.a)({},t),{},Object(v.a)({},D,Object(A.a)(Object(A.a)({},t[D]),{},{tasks:m})))}var _=Array.from(t[D].tasks),K=_.splice(E,1),G=Object(d.a)(K,1),w=G[0],N=Array.from(t[S].tasks);return N.splice(x,0,w),Object(A.a)(Object(A.a)({},t),{},(I={},Object(v.a)(I,D,Object(A.a)(Object(A.a)({},t[D]),{},{tasks:_})),Object(v.a)(I,S,Object(A.a)(Object(A.a)({},t[S]),{},{tasks:N})),I));default:return t}},task:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_TASK":var e=a.payload,s=e.taskId,c=e.taskText;return Object(A.a)(Object(A.a)({},t),{},Object(v.a)({},s,{id:s,text:c}));case"CHANGE_TASK_TEXT":var n=a.payload,r=n.taskId,o=n.taskText;return Object(A.a)(Object(A.a)({},t),{},Object(v.a)({},r,Object(A.a)(Object(A.a)({},t[r]),{},{text:o})));case"DELETE_TASK":var d=a.payload.taskId,i=(t[d],Object(T.a)(t,[d].map(k.a)));return i;case"DELETE_STAGE":var l=a.payload.tasks,b=Object(A.a)({},t);return l.forEach((function(t){delete b[t]})),b;default:return t}}}),h=e(3),I=e.n(h),f=function(t){console.log("Fetching from fake API since no local data detected");var a=I()();t.dispatch({type:"ADD_STAGE",payload:{stageId:a,stageTitle:"Resources"}}),t.dispatch({type:"ADD_TASK",payload:{stageId:a,taskId:I()(),taskText:"Financials"}}),t.dispatch({type:"ADD_TASK",payload:{stageId:a,taskId:I()(),taskText:"2017 Goals"}}),t.dispatch({type:"ADD_TASK",payload:{stageId:a,taskId:I()(),taskText:"Brands guide"}});var e=I()();t.dispatch({type:"ADD_STAGE",payload:{stageId:e,stageTitle:"Todo"}}),t.dispatch({type:"ADD_TASK",payload:{stageId:e,taskId:I()(),taskText:"Taco drone"}}),t.dispatch({type:"ADD_TASK",payload:{stageId:e,taskId:I()(),taskText:"BITCOIN"}}),t.dispatch({type:"ADD_TASK",payload:{stageId:e,taskId:I()(),taskText:"Elon musk"}});var s=I()();t.dispatch({type:"ADD_STAGE",payload:{stageId:s,stageTitle:"Doing"}}),t.dispatch({type:"ADD_TASK",payload:{stageId:s,taskId:I()(),taskText:"Matic"}}),t.dispatch({type:"ADD_TASK",payload:{stageId:s,taskId:I()(),taskText:"Safe Moono"}});var c=I()();t.dispatch({type:"ADD_STAGE",payload:{stageId:c,stageTitle:"Done"}}),t.dispatch({type:"ADD_TASK",payload:{stageId:c,taskId:I()(),taskText:"Zuddl To the moon"}})},D=function(t){},S=function(){try{var t=localStorage.getItem("state");return t?JSON.parse(t):void 0}catch(a){console.log("unable to load local state")}}(),E=Object(p.b)(y,S);0===E.getState().board.stages.length&&f(E),D(E),E.subscribe=function(){!function(t){try{localStorage.setItem("state",JSON.stringify(t))}catch(a){console.log("unable to save state")}}(E.getState())};var x=E;r.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(o.a,{store:x,children:Object(i.jsx)(g,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)})),j()}},[[30,1,2]]]);
//# sourceMappingURL=main.f3ee2e82.chunk.js.map