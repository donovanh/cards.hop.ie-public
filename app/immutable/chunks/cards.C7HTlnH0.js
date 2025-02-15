import{c as Ct,a as h,t as x}from"./disclose-version.asJor3Hs.js";import"./legacy.DJ_zAm6N.js";import{h as rt,p as St,aw as u,a6 as ot,a2 as s,$ as r,f as wt,a as Vt,am as v,ak as w,an as m,ao as I,n as $t}from"./runtime.C2qJ6Fam.js";import{d as Gt,s as Bt,a as N,g as qt,b as k,h as y}from"./preload-helper.CEEF5yzx.js";import{i as Ot,b as it}from"./this.DsO9XKdb.js";import{h as zt}from"./html.F4-CuqoV.js";import{p as U,t as It,s as K,a as Nt}from"./index.B1hVXQYW.js";import{c as ct,a as D,t as kt,p as Dt,f as Et}from"./cardIsOpen.BcttWf5b.js";import{p as V}from"./proxy.D5VcTd1S.js";import{o as lt}from"./index-client.BhfHQSBr.js";import{m as Ht}from"./metadata.DylG7R3E.js";function Xt(t,e,n){var o=t.__className,a=Yt(e);rt&&t.className===a?t.__className=a:(o!==a||rt&&t.className!==a)&&(e==null&&!n?t.removeAttribute("class"):t.className=a,t.__className=a)}function Yt(t,e){return(t??"")+""}var Mt=x('<div><button><div class="back svelte-e4ye0q"><div class="content svelte-e4ye0q"><p class="intro svelte-e4ye0q"> </p> <p class="main-content svelte-e4ye0q"> </p> <p class="sign-off svelte-e4ye0q"> </p></div></div> <div class="front svelte-e4ye0q"><div class="hardcoded-front-content svelte-e4ye0q"><!></div> <div class="content svelte-e4ye0q"><p class="svelte-e4ye0q"> </p></div></div> <div class="lining svelte-e4ye0q"></div></button></div>');function i(t,e){St(e,!0);const n=Bt(),o=()=>N(D,"$cardIsOpen",n),a=()=>N(ct,"$cardText",n),dt=()=>N(Nt,"$i18n",n),_=()=>N(It,"$t",n),{decompressFromEncodedURIComponent:ft}=Dt;let C="closed",E="open";const T=U.url.pathname.includes("edit"),$=U.url.pathname.includes("view"),ut=!T&&!$,H=T?"edit":$?"view":"preview",W=e.cardClass.split(" ")[0],{isWide:vt,defaultText:j,hardcodedFrontText:J}=Ht[W];let G=u(!1),b=u(V(T&&o()?E:C));ot(()=>{T?o()?s(b,E):s(b,C):r(G)?s(b,E):s(b,C)});let f=u(V(T||ut?a():j));ot(()=>{s(f,V(T?a():j))});function mt(){o()?(D.updateCardIsOpen(!1),s(G,!1)):(s(q,0),s(O,0),D.updateCardIsOpen(!0),s(G,!0))}function ht(){H==="preview"&&(s(b,C),D.updateCardIsOpen(!1),s(G,!1))}let B=u(null),X=u(null),q=u(0),O=u(0),Y=u("none"),Q=u(0),Z=u(0),pt=V($?.5:0);function tt(c){if(r(X))if(r(b)===C&&H==="view"){const{innerWidth:d,innerHeight:l}=window,p=c.clientX/d*2-1,F=c.clientY/l*2-1;s(q,p*10),s(O,F*-10),s(Y,"none"),et(p,F)}else s(Y,"transform linear 0.1s"),s(q,0),s(O,0),et(-400,-400)}function et(c,d){if(!r(B))return;const l=r(B).getBoundingClientRect();s(Q,1-c*(l.right-l.left)),s(Z,1-d*(l.bottom-l.top))}function xt(){const c=U.url.searchParams.get("data")||"",d=ft(c),l=decodeURIComponent;if(!d)return;const[p,F,g,M]=d.split("|").map(l);return{frontText:p==="null"?null:p,innerText1:F,innerText2:g,innerText3:M}}let nt=u(!1);lt(()=>s(nt,!0)),lt(()=>{if($){const c=xt();c&&(s(f,V(c)),ct.updateText(r(f)))}return window.addEventListener("mousemove",tt),()=>{window.removeEventListener("mousemove",tt)}});const yt=c=>c?c.split("").map(d=>`<span>${d}</span>`).join(""):"";var at=Ct(),Tt=wt(at);{var bt=c=>{var d=Mt(),l=v(d);l.__click=mt;var p=v(l),F=v(p),g=v(F),M=v(g,!0);w(()=>k(M,r(f).innerText1?_()(r(f).innerText1):"")),m(g);var S=I(g,2),Ft=v(S,!0);w(()=>k(Ft,r(f).innerText2?_()(r(f).innerText2):"")),m(S);var A=I(S,2),Kt=v(A,!0);w(()=>k(Kt,r(f).innerText3?_()(r(f).innerText3):"")),m(A),m(F),m(p);var L=I(p,2),z=v(L),gt=v(z);zt(gt,()=>J&&yt(_()(J))),m(z);var st=I(z,2),P=v(st),_t=v(P,!0);w(()=>k(_t,r(f).frontText?_()(r(f).frontText):"")),m(P),m(st),m(L),$t(2),m(l),it(l,R=>s(X,R),()=>r(X)),m(d),it(d,R=>s(B,R),()=>r(B)),w(()=>{K(l,"style",`transform: rotateY(${r(q)??""}deg) rotateX(${r(O)??""}deg); transition: ${r(Y)??""};`),Xt(l,`card ${r(b)??""} ${dt().language??""} ${e.cardClass??""} ${H??""} ${(vt?"wide":"tall")??""} svelte-e4ye0q`),K(g,"style",`font-family: ${e.fonts.innerText1Font??""}`),K(S,"style",`font-family: ${e.fonts.innerText2Font??""}`),K(A,"style",`font-family: ${e.fonts.innerText3Font??""}`),K(L,"style",`--sheenX: ${r(Q)??""}px; --sheenY: ${r(Z)??""}px; --sheenOpacity: ${pt??""}; background-image: url(/images/cards/${W??""}.webp);`),K(z,"style",`font-family: ${e.fonts.frontTextFont??""}`),K(P,"style",`font-family: ${e.fonts.frontTextFont??""}`)}),qt("mouseleave",l,ht),kt(1,d,()=>Et,()=>({duration:400,delay:50})),h(c,d)};Ot(Tt,c=>{(r(nt)||T)&&c(bt)})}h(t,at),Vt()}Gt(["click"]);function At(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines009"})}function Lt(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"valentines008"})}function Pt(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"valentines007"})}function Rt(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines006"})}var Ut=x(`<style>.valentines005 .hardcoded-front-content {
      color: #111;
      font-weight: bold;
      line-height: 1.25em;
      top: 0.4em;
    }</style>`);function Wt(t){const e={frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="valentines005";y(o=>{var a=Ut();h(o,a)}),i(t,{fonts:e,cardClass:n})}var jt=x(`<style>.valentines004 .hardcoded-front-content {
      color: #f11;
      font-size: 7em;
      line-height: 1.25em;
      top: 0.4em;
      right: 0.25em;
      left: 2em;
    }</style>`);function Jt(t){const e={frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},n="valentines004";y(o=>{var a=jt();h(o,a)}),i(t,{fonts:e,cardClass:n})}function Qt(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"valentines003"})}function Zt(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines002"})}function te(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines001 fancy-wide"})}var ee=x(`<style>.birthday009 .hardcoded-front-content {
      font-size: 8em;
      text-shadow: 0.05em 0.05em 0.02em rgba(0, 0, 0, 0.15);
      top: 0.3em;
      bottom: auto;
      line-height: 1.4em;
    }

    .birthday009.de .hardcoded-front-content,
    .birthday009.fr .hardcoded-front-content {
      font-size: 6em;
    }</style>`);function ne(t){const e={frontTextFont:'"Kaushan Script", cursive',innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday009";y(o=>{var a=ee();h(o,a)}),i(t,{fonts:e,cardClass:n})}var ae=x(`<style>.birthday008 .front .content {
      top: auto;
      text-align: center;
      left: 0;
      right: 0;
      top: 60%;
      margin: -50% 0 0 -5em;
    }

    .birthday008 .front .content p {
      color: rgba(255, 255, 255, 0.85);
      text-shadow: 0.02em 0.02em 0.02em rgba(0, 0, 0, 0.45);
      font-size: 32em;
      letter-spacing: -0.1em;
      line-height: 1em;
    }</style>`);function se(t){const e={frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday008";y(o=>{var a=ae();h(o,a)}),i(t,{fonts:e,cardClass:n})}var re=x(`<style>.birthday007 .front .content {
      top: 6em;
    }

    .birthday007.fr .front .content {
      top: 10em;
    }

    .birthday007.de .front .content {
      top: 10em;
    }

    .birthday007 .front .content p {
      color: #fff;
      text-shadow: 0.05em 0.05em 0.02em rgba(0, 0, 0, 0.75);
    }

    :global {
      .birthday007 .hardcoded-front-content span:nth-child(3n + 1) {
        color: rgb(18, 160, 255);
      }

      .birthday007 .hardcoded-front-content span:nth-child(3n + 2) {
        color: white;
      }

      .birthday007 .hardcoded-front-content span:nth-child(3n + 3) {
        color: #f73500;
      }
    }

    .birthday007 .hardcoded-front-content {
      font-size: 5em;
      text-shadow: 0.05em 0.05em 0.02em rgba(0, 0, 0, 0.75);
      top: 0.5em;
      bottom: auto;
    }

    .birthday007.de .hardcoded-front-content,
    .birthday007.fr .hardcoded-front-content {
      line-height: 1.25;
      top: 0.25em;
    }</style>`);function oe(t){const e={frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday007";y(o=>{var a=re();h(o,a)}),i(t,{fonts:e,cardClass:n})}var ie=x(`<style>.birthday006 .hardcoded-front-content {
      font-size: 8em;
      text-shadow: 0.05em 0.05em 0.02em rgba(0, 0, 0, 0.15);
      top: 0.3em;
      bottom: auto;
      line-height: 1.4em;
    }

    .birthday006.de .hardcoded-front-content,
    .birthday006.fr .hardcoded-front-content {
      font-size: 6em;
    }</style>`);function ce(t){const e={frontTextFont:'"Kaushan Script", cursive',innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday006";y(o=>{var a=ie();h(o,a)}),i(t,{fonts:e,cardClass:n})}var le=x(`<style>.birthday005 .hardcoded-front-content {
      top: 0.5em;
      bottom: auto;
      font-size: 4.75em;
    }</style>`);function de(t){const e={frontTextFont:'"Kaushan Script", cursive',innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday005";y(o=>{var a=le();h(o,a)}),i(t,{fonts:e,cardClass:n})}function fe(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"birthday004"})}function ue(t){i(t,{fonts:{frontTextFont:'"Kaushan Script", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"happybirthday003"})}function ve(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"happybirthday001"})}var me=x(`<style>.happybirthday002 .front .content {
      top: 0;
    }

    .happybirthday002 .front .content p {
      line-height: 1em;
      font-size: 20em;
      color: rgb(57, 0, 57);
      text-shadow: 0.05em 0.05em 0.02em rgba(0, 0, 0, 0.15);
    }</style>`);function he(t){const e={frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},n="happybirthday002";y(o=>{var a=me();h(o,a)}),i(t,{fonts:e,cardClass:n})}const we={valentines009:{component:At},valentines008:{component:Lt},valentines007:{component:Pt},valentines006:{component:Rt},valentines005:{component:Wt},valentines004:{component:Jt},valentines003:{component:Qt},valentines002:{component:Zt},valentines001:{component:te},birthday009:{component:ne},birthday008:{component:se},birthday007:{component:oe},birthday006:{component:ce},birthday005:{component:de},birthday004:{component:fe},happybirthday003:{component:ue},happybirthday001:{component:ve},happybirthday002:{component:he}};export{we as c};
