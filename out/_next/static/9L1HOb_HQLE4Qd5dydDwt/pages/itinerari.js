(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{"+oTT":function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/itinerari",function(){return r("OSeI")}])},"CoA/":function(e,t,r){"use strict";var i,n=r("rePB"),o=r("BaYo"),c=r("llVf");function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}var l=o.a.xs,u=o.a.sm,s=o.a.md,p=o.a.lg,f=o.a.xl,b=(i={},Object(n.a)(i,l,{}),Object(n.a)(i,u,{}),Object(n.a)(i,s,{}),Object(n.a)(i,p,{}),Object(n.a)(i,f,{}),i);t.a=Object(c.styled)("aside",function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){Object(n.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({width:"100%",height:"100%"},b))},OSeI:function(e,t,r){"use strict";r.r(t),r.d(t,"__N_SSG",(function(){return d})),r.d(t,"default",(function(){return h}));var i=r("KQm4"),n=r("ODXe"),o=r("q1tI"),c=r.n(o),a=r("8Kt/"),l=r.n(a),u=r("bX8F"),s=r("cqeO"),p=r("llVf"),f=r("x242"),b=r("CoA/"),m=c.a.createElement,d=!0;function h(e){var t=e.itinerari,r=e.luoghi,c=e.percorsi,a=Object(o.useState)(""),d=a[0],h=a[1],O=Object(p.useStyletron)(),g=Object(n.a)(O,1)[0],j=function(e){return h(e)};function w(e){return e.filter((function(e){return e.itinerari.some((function(e){return d===e}))}))}var v=[].concat(Object(i.a)(w(r)),Object(i.a)(w(c)));return m(s.a,{id:"itinerari",style:{height:"100vh",width:"100%",position:"fixed",top:0,left:0,overflow:"hidden",paddingBottom:"0"}},m(l.a,null,m("link",{key:"mapbox-gl",href:"https://api.tiles.mapbox.com/mapbox-gl-js/v1.10.0/mapbox-gl.css",rel:"stylesheet"})),m(f.Row,{h:"100%"},m(f.Col,{size:3,p:{b:"4rem"},h:"100vh"},m(b.a,{className:g({overflowY:"auto"})},m(f.Div,{bg:"#fff",pos:"sticky",top:"0",p:".5rem"},m(f.Div,{bg:"#111",h:"3rem",m:{b:"1rem",l:"100px"},d:"flex",align:"center",justify:"center"},m(f.Text,{tag:"h5",textSize:"h5",className:g({color:"#fff",fontWeight:300,letterSpacing:"3px",textTransform:"uppercase"})},"Itinerari")),m(f.Div,{p:{x:".5rem"}},m(f.Text,{className:g({fontSize:".8rem",lineHeight:1.2})},"Restituzione digitale del \u2018viaggio\u2019 di Leonardo Recchia e Renato Ruotolo nel Parco Metropolitano delle Colline di Napoli."))),m(f.Div,{p:".5rem"},t.filter((function(e){return null===e.itinerario})).map((function(e){return m(f.Div,{key:e.id,cursor:"pointer",p:".75rem"},m(f.Text,{tag:"h5",textSize:"subheader",textWeight:"600",m:{b:".75rem"},onClick:function(){return j(e.id)}},e.id,". ",e.nome),e.children&&e.children.map((function(e){return m(f.Div,{key:e.id,m:{b:".5rem"},p:{l:".75rem"}},m(f.Text,{onClick:function(){return j(e.id)},className:g({lineHeight:1.2})},e.id.slice(-2),". ",e.nome))})))}))))),m(f.Col,{size:9},m(u.a,{places:v,withPopup:!0}))))}}},[["+oTT",0,2,4,7,1,3,5,6,8]]]);