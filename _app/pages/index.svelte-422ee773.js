import{S as G,i as N,s as W,e as d,t as $,k as x,c as k,a as v,h as b,d as c,m as H,g as y,J as i,K as j,j as q,n as S,x as w,y as z,b as T,z as B,r as I,p as J,C as M}from"../chunks/index-b441bb80.js";function O(p){let e,o,a,n,h,r,_,f,E;return{c(){e=d("main"),o=d("h1"),a=$(p[0]),n=$(" clicks per second"),h=x(),r=d("button"),_=$("click")},l(l){e=k(l,"MAIN",{});var s=v(e);o=k(s,"H1",{});var u=v(o);a=b(u,p[0]),n=b(u," clicks per second"),u.forEach(c),h=H(s),r=k(s,"BUTTON",{});var t=v(r);_=b(t,"click"),t.forEach(c),s.forEach(c)},m(l,s){y(l,e,s),i(e,o),i(o,a),i(o,n),i(e,h),i(e,r),i(r,_),f||(E=j(r,"click",p[1]),f=!0)},p(l,[s]){s&1&&q(a,l[0])},i:S,o:S,d(l){l&&c(e),f=!1,E()}}}function P(p,e,o){let a=0;function n(){o(0,a++,a),setTimeout(()=>o(0,a--,a),1e3)}return[a,n]}class R extends G{constructor(e){super(),N(this,e,P,O,W,{})}}function U(p){let e,o,a,n,h,r,_,f,E,l,s,u;return s=new R({}),{c(){e=d("h1"),o=$("Welcome to SvelteKit"),a=x(),n=d("p"),h=$("Check out my "),r=d("a"),_=$("GitHub"),f=d("a"),E=$("!"),l=x(),w(s.$$.fragment),this.h()},l(t){e=k(t,"H1",{});var m=v(e);o=b(m,"Welcome to SvelteKit"),m.forEach(c),a=H(t),n=k(t,"P",{});var C=v(n);h=b(C,"Check out my "),r=k(C,"A",{href:!0});var A=v(r);_=b(A,"GitHub"),A.forEach(c),f=k(C,"A",{href:!0});var K=v(f);E=b(K,"!"),K.forEach(c),C.forEach(c),l=H(t),z(s.$$.fragment,t),this.h()},h(){T(r,"href","https://github.com/cooperuser"),T(f,"href","/")},m(t,m){y(t,e,m),i(e,o),y(t,a,m),y(t,n,m),i(n,h),i(n,r),i(r,_),i(n,f),i(f,E),y(t,l,m),B(s,t,m),u=!0},p:S,i(t){u||(I(s.$$.fragment,t),u=!0)},o(t){J(s.$$.fragment,t),u=!1},d(t){t&&c(e),t&&c(a),t&&c(n),t&&c(l),M(s,t)}}}class D extends G{constructor(e){super(),N(this,e,null,U,W,{})}}export{D as default};
