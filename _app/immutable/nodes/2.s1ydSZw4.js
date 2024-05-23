import{r as ee,s as te,a as b,n as F}from"../chunks/scheduler.Dw93JyHj.js";import{o as O,q as W,S as se,i as ae,e as I,s as z,c as M,a as N,f as D,d as P,l as t,g as U,h as o,t as J,A as le,b as L,k as Q,B as R,m as X,p as ce,j as re,n as Y,w as ie,x as ne,y as oe,z as de,u as ue}from"../chunks/index.Cgf65226.js";function Z(s){return(s==null?void 0:s.length)!==void 0?s:Array.from(s)}function fe(s,l){O(s,1,1,()=>{l.delete(s.key)})}function me(s,l,i,c,m,e,n,S,v,p,y,A){let f=s.length,q=e.length,j=f;const k={};for(;j--;)k[s[j].key]=j;const C=[],K=new Map,G=new Map,E=[];for(j=q;j--;){const d=A(m,e,j),h=i(d);let a=n.get(h);a?E.push(()=>a.p(d,l)):(a=p(h,d),a.c()),K.set(h,C[j]=a),h in k&&G.set(h,Math.abs(j-k[h]))}const V=new Set,T=new Set;function H(d){W(d,1),d.m(S,y),n.set(d.key,d),y=d.first,q--}for(;f&&q;){const d=C[q-1],h=s[f-1],a=d.key,r=h.key;d===h?(y=d.first,f--,q--):K.has(r)?!n.has(a)||V.has(a)?H(d):T.has(r)?f--:G.get(a)>G.get(r)?(T.add(a),H(d)):(V.add(r),f--):(v(h,n),f--)}for(;f--;){const d=s[f];K.has(d.key)||v(d,n)}for(;q;)H(C[q-1]);return ee(E),C}function he(s){let l,i,c,m,e,n,S,v,p,y,A,f,q,j,k,C,K,G,E,V,T,H,d,h,a,r,g,B;return{c(){l=I("div"),i=I("img"),m=z(),e=I("div"),n=I("img"),v=z(),p=I("img"),A=z(),f=I("img"),j=z(),k=I("img"),K=z(),G=I("img"),V=z(),T=I("img"),d=z(),h=I("img"),r=z(),g=I("img"),this.h()},l(u){l=M(u,"DIV",{class:!0,"data-color":!0});var _=N(l);i=M(_,"IMG",{class:!0,src:!0,alt:!0}),m=D(_),e=M(_,"DIV",{class:!0});var w=N(e);n=M(w,"IMG",{class:!0,src:!0,alt:!0}),v=D(w),p=M(w,"IMG",{class:!0,src:!0,alt:!0}),A=D(w),f=M(w,"IMG",{class:!0,src:!0,alt:!0}),j=D(w),k=M(w,"IMG",{class:!0,src:!0,alt:!0}),K=D(w),G=M(w,"IMG",{class:!0,src:!0,alt:!0}),V=D(w),T=M(w,"IMG",{class:!0,src:!0,alt:!0}),d=D(w),h=M(w,"IMG",{class:!0,src:!0,alt:!0}),r=D(w),g=M(w,"IMG",{class:!0,src:!0,alt:!0}),w.forEach(P),_.forEach(P),this.h()},h(){t(i,"class","card-front-image card-image svelte-1edacaq"),b(i.src,c=s[0])||t(i,"src",c),t(i,"alt",s[2]),t(n,"class","card-fader card-image svelte-1edacaq"),b(n.src,S=s[0])||t(n,"src",S),t(n,"alt",""),t(p,"class","card-fader card-image svelte-1edacaq"),b(p.src,y=s[0])||t(p,"src",y),t(p,"alt",""),t(f,"class","card-fader card-image svelte-1edacaq"),b(f.src,q=s[0])||t(f,"src",q),t(f,"alt",""),t(k,"class","card-fader card-image svelte-1edacaq"),b(k.src,C=s[0])||t(k,"src",C),t(k,"alt",""),t(G,"class","card-fader card-image svelte-1edacaq"),b(G.src,E=s[0])||t(G,"src",E),t(G,"alt",""),t(T,"class","card-fader card-image svelte-1edacaq"),b(T.src,H=s[0])||t(T,"src",H),t(T,"alt",""),t(h,"class","card-fader card-image svelte-1edacaq"),b(h.src,a=s[0])||t(h,"src",a),t(h,"alt",""),t(g,"class","card-fader card-image svelte-1edacaq"),b(g.src,B=s[0])||t(g,"src",B),t(g,"alt",""),t(e,"class","card-faders svelte-1edacaq"),t(l,"class","card svelte-1edacaq"),t(l,"data-color",s[1])},m(u,_){U(u,l,_),o(l,i),o(l,m),o(l,e),o(e,n),o(e,v),o(e,p),o(e,A),o(e,f),o(e,j),o(e,k),o(e,K),o(e,G),o(e,V),o(e,T),o(e,d),o(e,h),o(e,r),o(e,g)},p(u,[_]){_&1&&!b(i.src,c=u[0])&&t(i,"src",c),_&4&&t(i,"alt",u[2]),_&1&&!b(n.src,S=u[0])&&t(n,"src",S),_&1&&!b(p.src,y=u[0])&&t(p,"src",y),_&1&&!b(f.src,q=u[0])&&t(f,"src",q),_&1&&!b(k.src,C=u[0])&&t(k,"src",C),_&1&&!b(G.src,E=u[0])&&t(G,"src",E),_&1&&!b(T.src,H=u[0])&&t(T,"src",H),_&1&&!b(h.src,a=u[0])&&t(h,"src",a),_&1&&!b(g.src,B=u[0])&&t(g,"src",B),_&2&&t(l,"data-color",u[1])},i:F,o:F,d(u){u&&P(l)}}}function ge(s,l,i){let{src:c}=l,{color:m}=l,{description:e}=l;return s.$$set=n=>{"src"in n&&i(0,c=n.src),"color"in n&&i(1,m=n.color),"description"in n&&i(2,e=n.description)},[c,m,e]}class _e extends se{constructor(l){super(),ae(this,l,ge,he,te,{src:0,color:1,description:2})}}function $(s,l,i){const c=s.slice();return c[5]=l[i],c}function x(s,l){let i,c,m;return c=new _e({props:{src:l[5].src,color:l[5].color,description:l[5].description}}),{key:s,first:null,c(){i=Y(),ie(c.$$.fragment),this.h()},l(e){i=Y(),ne(c.$$.fragment,e),this.h()},h(){this.first=i},m(e,n){U(e,i,n),oe(c,e,n),m=!0},p(e,n){l=e},i(e){m||(W(c.$$.fragment,e),m=!0)},o(e){O(c.$$.fragment,e),m=!1},d(e){e&&P(i),de(c,e)}}}function ve(s){let l,i,c,m,e=[],n=new Map,S,v,p,y,A,f,q,j="This is a test of my stuff",k,C,K="Click Me",G,E,V,T,H,d=Z(s[2]);const h=a=>a[5].id;for(let a=0;a<d.length;a+=1){let r=$(s,d,a),g=h(r);n.set(g,e[a]=x(g,r))}return{c(){l=I("meta"),i=z(),c=I("div"),m=I("div");for(let a=0;a<e.length;a+=1)e[a].c();S=z(),v=I("div"),p=I("h2"),y=J(s[0]),A=J(" Stuff"),f=z(),q=I("p"),q.textContent=j,k=z(),C=I("button"),C.textContent=K,G=z(),E=I("input"),this.h()},l(a){const r=le("svelte-jtuwyu",document.head);l=M(r,"META",{name:!0,content:!0}),r.forEach(P),i=D(a),c=M(a,"DIV",{id:!0,class:!0});var g=N(c);m=M(g,"DIV",{id:!0,class:!0});var B=N(m);for(let w=0;w<e.length;w+=1)e[w].l(B);B.forEach(P),S=D(g),v=M(g,"DIV",{class:!0});var u=N(v);p=M(u,"H2",{});var _=N(p);y=L(_,s[0]),A=L(_," Stuff"),_.forEach(P),f=D(u),q=M(u,"P",{"data-svelte-h":!0}),Q(q)!=="svelte-1wnqaq2"&&(q.textContent=j),k=D(u),C=M(u,"BUTTON",{"data-svelte-h":!0}),Q(C)!=="svelte-26fsla"&&(C.textContent=K),G=D(u),E=M(u,"INPUT",{type:!0}),u.forEach(P),g.forEach(P),this.h()},h(){document.title="Home",t(l,"name","description"),t(l,"content","Kaleb's Personal Website Homepage"),t(m,"id","cards"),t(m,"class","svelte-11zvj3j"),t(E,"type","text"),t(v,"class","index"),t(c,"id","content"),t(c,"class","svelte-11zvj3j")},m(a,r){o(document.head,l),U(a,i,r),U(a,c,r),o(c,m);for(let g=0;g<e.length;g+=1)e[g]&&e[g].m(m,null);o(c,S),o(c,v),o(v,p),o(p,y),o(p,A),o(v,f),o(v,q),o(v,k),o(v,C),o(v,G),o(v,E),R(E,s[0]),V=!0,T||(H=[X(C,"click",s[1]),X(E,"input",s[3])],T=!0)},p(a,[r]){r&4&&(d=Z(a[2]),ue(),e=me(e,r,h,1,a,d,n,m,fe,x,null,$),ce()),(!V||r&1)&&re(y,a[0]),r&1&&E.value!==a[0]&&R(E,a[0])},i(a){if(!V){for(let r=0;r<d.length;r+=1)W(e[r]);V=!0}},o(a){for(let r=0;r<e.length;r+=1)O(e[r]);V=!1},d(a){a&&(P(i),P(c)),P(l);for(let r=0;r<e.length;r+=1)e[r].d();T=!1,ee(H)}}}function pe(s,l,i){let c="Kaleb :)";const m=()=>{i(0,c="Kaleb is the best")};class e{constructor(p,y,A,f){this.id=p,this.src=y,this.color=A,this.description=f}}let n=[new e(1,"https://img.icons8.com/?size=100&id=116742&format=png&color=000000","red","This is a red card"),new e(2,"https://img.icons8.com/?size=100&id=43824&format=png&color=000000","blue","This is a blue card"),new e(3,"https://img.icons8.com/?size=100&id=19798&format=png&color=000000","green","This is a green card")];function S(){c=this.value,i(0,c)}return[c,m,n,S]}class Ie extends se{constructor(l){super(),ae(this,l,pe,ve,te,{})}}export{Ie as component};
