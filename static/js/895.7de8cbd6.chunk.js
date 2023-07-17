"use strict";(self.webpackChunkKidsLike=self.webpackChunkKidsLike||[]).push([[895],{9441:function(e,s,a){a.d(s,{Z:function(){return j}});a(2791);var n=a(5048),r=a(7689),t=a(12),c=(a(2644),a(4436)),i="ProgressBar_ProgressWrapper__x1CPO",o="ProgressBar_ProgressWrapperAwards__eKNcr",l="ProgressBar_PointsTextAwards__KuDHd",d="ProgressBar_PointsAmount__pTab1",x="ProgressBar_ProgressBox__LqNJZ",_="ProgressBar_PointAmount__Hrx1T",u="ProgressBar_PlannedPoints__luv6x",m="ProgressBar_ProgressTool__rwjO5",h=a(184),p=Object.freeze({MAIN:"/",PLANNING:"/planning",AWARD:"/awards"}),j=function(){var e=(0,r.TH)().pathname,s=(0,n.v9)(c.w_||0,n.wU),a=(0,n.v9)(c.e8||0,n.wU),j=parseInt(s/a*100);return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)("div",{className:e===p.AWARD?o:i,children:[(0,h.jsxs)("p",{className:l,children:["Points earned this week:",(0,h.jsx)("span",{className:d,children:s})]}),(0,h.jsxs)("p",{className:l,children:["Planned points for this week:",(0,h.jsx)("span",{className:d,children:a})]}),(0,h.jsxs)("div",{className:x,children:[(0,h.jsxs)("span",{className:_,children:[(0,h.jsx)("span",{className:u,children:s})," /"," ",a]}),(0,h.jsx)("div",{className:m,children:(0,h.jsx)(t.Progress,{percent:s?j>=100?100:j:0,theme:{success:{symbol:" ",color:"rgb(223, 105, 180)"},active:{symbol:" ",color:"#8ec63f"},default:{symbol:" ",color:"#8ec63f"}}})})]})]})})}},9806:function(e,s,a){a.r(s),a.d(s,{default:function(){return Q}});var n=a(9439),r=a(2791),t=a(5048),c=a(1087),i=a(5118),o="CurrentDay_CurrentDayTitle__jZls0",l="CurrentDay_CurrentDayText__7GQN3",d=a(184),x=function(e){var s,a,n=e.selectedDate,r=null===(s=(a=n)?new Date(a).toLocaleString("en-GB",{weekday:"long",day:"numeric",month:"numeric",year:"numeric"}).replaceAll("/","-"):null)||void 0===s?void 0:s.toUpperCase();return(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("p",{className:o,children:["My tasks:",(0,d.jsx)("span",{className:l,children:r})]})})},_=a(9174),u=a(9750),m="CurrentWeekRange_WeekRangeText__RXmc+",h=function(){var e=(0,t.v9)(_.Ms,t.wU);return(0,d.jsx)(d.Fragment,{children:e?(0,d.jsx)("p",{className:m,children:function(e){return"object"===typeof e.currentMonth?"Week: ".concat(e.startDate," ").concat(e.currentMonth[0]," - ").concat(e.endDate," ").concat(e.currentMonth[1]):"Week: ".concat(e.startDate,"-").concat(e.endDate,"\n    ").concat(e.currentMonth)}(e)}):(0,d.jsx)(u.Z,{height:"20"})})},p=a(1482),j=a(3303),k=a(979),N=a(3924),g=a(6666),f=a(5221),b={NoTaskTitle:"NoTasks_NoTaskTitle__C-jjk",NoTaskLinkBox:"NoTasks_NoTaskLinkBox__0MXQX",NoTaskButton:"NoTasks_NoTaskButton__3XGTW"},v=function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("p",{className:b.NoTaskTitle,children:"No tasks on this day"}),(0,d.jsx)("div",{className:b.NoTaskLinkBox,children:(0,d.jsx)(c.rU,{className:b.NoTaskLink,to:"/planning",children:(0,d.jsx)("button",{className:b.NoTaskButton,children:"Schedule tasks"})})}),(0,d.jsxs)("picture",{children:[(0,d.jsx)("source",{srcSet:"".concat(p," 1x, ").concat(j," 2x"),media:"(min-width:1280px)"}),(0,d.jsx)("source",{srcSet:"".concat(k," 1x, ").concat(N," 2x"),media:"(min-width:768px)"}),(0,d.jsx)("source",{srcSet:"".concat(g," 1x, ").concat(f," 2x"),media:"(min-width:320px)"}),(0,d.jsx)("img",{src:g,alt:"background"})]})]})},T=a(9441),W=a(6257),P=a(4436),w="WeekTabContent_WeekTabWrapper__rnzVs",y="WeekTabContent_NoTaskWrapper__ZLASB",L="WeekTabContent_CardListWrapper__Ka4ee",D=function(e){var s=e.selectedDate,a=(0,t.v9)((function(e){return(0,P.PQ)(e,s)}),t.wU),n=null;return n=a?a.length?(0,d.jsx)("div",{className:L,children:(0,d.jsx)(i.Z,{tasks:a})}):(0,d.jsx)("div",{className:y,children:(0,d.jsx)(v,{})}):(0,d.jsx)("div",{className:L,children:(0,d.jsx)(W.Z,{})}),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:w,children:[(0,d.jsxs)("div",{children:[(0,d.jsx)(h,{}),(0,d.jsx)(x,{selectedDate:s})]}),(0,d.jsx)(T.Z,{})]}),(0,d.jsx)("div",{children:n})]})},B=a(4805),C="WeekTabs_WeekListWrapper__ukhGZ",M="WeekTabs_WeekList__7UTm+",Z="WeekTabs_WeekListItem__dEaSt",A="WeekTabs_WeekListInput__o9Cso",S="WeekTabs_WeekListLabel__-PfnH",U="WeekTabs_WeekListTitle__RIn7j",F="WeekTabs_LoaderWrapper__47-EQ",G=function(e){var s=e.weekDays,a=(0,B.useMediaQuery)({minWidth:1280}),t=(new Date).toLocaleString("en-US",{weekday:"long"}),i=(0,c.lr)(),o=(0,n.Z)(i,2),l=o[0],x=o[1],_=(0,r.useState)(l.get("day")||t),m=(0,n.Z)(_,2),h=m[0],p=m[1];(0,r.useEffect)((function(){x({day:h})}),[h,x]);var j=function(e){var s=e.target.value;x({day:s}),p(s)};return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:C,children:s.length?(0,d.jsx)("ul",{className:M,children:s.map((function(e){return(0,d.jsxs)("li",{className:Z,children:[(0,d.jsx)("input",{className:A,id:e,type:"radio",name:"dayOfWeek",value:e,checked:(s=e,h===s),onChange:j}),(0,d.jsx)("label",{className:S,htmlFor:e,children:(0,d.jsx)("span",{className:U,children:a?e:e.slice(0,2)})})]},e);var s}))}):(0,d.jsx)("div",{className:F,children:(0,d.jsx)(u.Z,{width:"100",color:"#5679D7"})})})})},I=a(3987),O="MainPage_MainContainer__dOUfU",R="MainPage_MainWrapper__GJl64",H="MainPage_MainBox__vsvL1",K="MainPage_FooterBox__8SHC1",Q=function(){var e=(0,t.v9)(_.At,t.wU),s=(0,c.lr)(),a=(0,n.Z)(s,1)[0].get("day"),i=(0,r.useMemo)((function(){return Object.keys(e)}),[e]);return(0,d.jsx)(d.Fragment,{children:(0,d.jsx)("div",{className:O,children:(0,d.jsxs)("div",{className:R,children:[(0,d.jsx)(G,{weekDays:i}),(0,d.jsxs)("div",{className:H,children:[(0,d.jsx)(D,{selectedDate:e[a]}),(0,d.jsx)("div",{className:K,children:(0,d.jsx)(I.Z,{})})]})]})})})}},3303:function(e,s,a){e.exports=a.p+"static/media/desk-2x.0ad1772df6f1d88ceb9b.png"},1482:function(e,s,a){e.exports=a.p+"static/media/desk.3bb8ec7c58cbbd27c5b6.png"},5221:function(e,s,a){e.exports=a.p+"static/media/mob-2x.ad83ae29beaef847b930.png"},6666:function(e,s,a){e.exports=a.p+"static/media/mob.91518e2aa6fc1760b3bd.png"},3924:function(e,s,a){e.exports=a.p+"static/media/tablet-2x.9465d0e474e8c9774e50.png"},979:function(e,s,a){e.exports=a.p+"static/media/tablet.413a977656966c34f677.png"}}]);
//# sourceMappingURL=895.7de8cbd6.chunk.js.map