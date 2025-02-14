import{c as Ct,a as h,t as x}from"./disclose-version.asJor3Hs.js";import"./legacy.DJ_zAm6N.js";import{h as rt,p as St,aw as u,a6 as ot,a2 as s,$ as r,f as wt,a as Vt,am as v,ak as w,an as m,ao as N,n as $t}from"./runtime.C2qJ6Fam.js";import{d as Gt,s as Bt,a as k,g as Ot,b as D,h as y}from"./preload-helper.CEEF5yzx.js";import{i as zt,b as it}from"./this.DsO9XKdb.js";import{h as It}from"./html.F4-CuqoV.js";import{p as W,t as Nt,s as g,a as kt}from"./index.B-fFYWXM.js";import{c as ct,a as E,t as Dt,p as Et,f as Ht}from"./cardIsOpen.CfHoNr-a.js";import{p as V}from"./proxy.D5VcTd1S.js";import{o as lt}from"./index-client.BhfHQSBr.js";import{m as Xt}from"./metadata.DylG7R3E.js";function Yt(t,e,n){var o=t.__className,a=Mt(e);rt&&t.className===a?t.__className=a:(o!==a||rt&&t.className!==a)&&(e==null&&!n?t.removeAttribute("class"):t.className=a,t.__className=a)}function Mt(t,e){return(t??"")+""}var At=x('<div><button><div class="back svelte-1cg5bb0"><div class="content svelte-1cg5bb0"><p class="intro svelte-1cg5bb0"> </p> <p class="main-content svelte-1cg5bb0"> </p> <p class="sign-off svelte-1cg5bb0"> </p></div></div> <div class="front svelte-1cg5bb0"><div class="hardcoded-front-content svelte-1cg5bb0"><!></div> <div class="content svelte-1cg5bb0"><p class="svelte-1cg5bb0"> </p></div></div> <div class="lining svelte-1cg5bb0"></div></button></div>');function i(t,e){St(e,!0);const n=Bt(),o=()=>k(E,"$cardIsOpen",n),a=()=>k(ct,"$cardText",n),dt=()=>k(kt,"$i18n",n),_=()=>k(Nt,"$t",n),{decompressFromEncodedURIComponent:ft}=Et;let C="closed",H="open";const b=W.url.pathname.includes("edit"),$=W.url.pathname.includes("view"),ut=!b&&!$,X=b?"edit":$?"view":"preview",j=e.cardClass.split(" ")[0],{isWide:vt,defaultText:q,hardcodedFrontText:J}=Xt[j];let G=u(!1),T=u(V(b&&o()?H:C));ot(()=>{b?o()?s(T,H):s(T,C):r(G)?s(T,H):s(T,C)});let f=u(V(b||ut?a():q));ot(()=>{s(f,V(b?a():q))});function mt(){o()?(E.updateCardIsOpen(!1),s(G,!1)):(s(O,0),s(z,0),E.updateCardIsOpen(!0),s(G,!0))}function ht(){X==="preview"&&(s(T,C),E.updateCardIsOpen(!1),s(G,!1))}let B=u(null),Y=u(null),O=u(0),z=u(0),M=u("none"),Q=u(0),Z=u(0),pt=V($?.5:0);function tt(c){if(r(Y))if(r(T)===C&&X==="view"){const{innerWidth:d,innerHeight:l}=window,p=c.clientX/d*2-1,F=c.clientY/l*2-1;s(O,p*10),s(z,F*-10),s(M,"none"),et(p,F)}else s(M,"transform linear 0.1s"),s(O,0),s(z,0),et(-400,-400)}function et(c,d){if(!r(B))return;const l=r(B).getBoundingClientRect();s(Q,1-c*(l.right-l.left)),s(Z,1-d*(l.bottom-l.top))}function xt(){const c=W.url.searchParams.get("data")||"",d=ft(c),l=decodeURIComponent;if(!d)return;const[p,F,K,A]=d.split("|").map(l);return{frontText:p==="null"?null:p,innerText1:F,innerText2:K,innerText3:A}}let nt=u(!1);lt(()=>s(nt,!0)),lt(()=>{if($){const c=xt();c&&(s(f,V(c)),ct.updateText(r(f)))}return window.addEventListener("mousemove",tt),()=>{window.removeEventListener("mousemove",tt)}});const yt=c=>c?c.split("").map(d=>`<span>${d}</span>`).join(""):"";var at=Ct(),bt=wt(at);{var Tt=c=>{var d=At(),l=v(d);l.__click=mt;var p=v(l),F=v(p),K=v(F),A=v(K,!0);w(()=>D(A,r(f).innerText1?_()(r(f).innerText1):"")),m(K);var S=N(K,2),Ft=v(S,!0);w(()=>D(Ft,r(f).innerText2?_()(r(f).innerText2):"")),m(S);var L=N(S,2),gt=v(L,!0);w(()=>D(gt,r(f).innerText3?_()(r(f).innerText3):"")),m(L),m(F),m(p);var P=N(p,2),I=v(P),Kt=v(I);It(Kt,()=>J&&yt(_()(J))),m(I);var st=N(I,2),R=v(st),_t=v(R,!0);w(()=>D(_t,r(f).frontText?_()(r(f).frontText):"")),m(R),m(st),m(P),$t(2),m(l),it(l,U=>s(Y,U),()=>r(Y)),m(d),it(d,U=>s(B,U),()=>r(B)),w(()=>{g(l,"style",`transform: rotateY(${r(O)??""}deg) rotateX(${r(z)??""}deg); transition: ${r(M)??""};`),Yt(l,`card ${r(T)??""} ${dt().language??""} ${e.cardClass??""} ${X??""} ${(vt?"wide":"tall")??""} svelte-1cg5bb0`),g(K,"style",`font-family: ${e.fonts.innerText1Font??""}`),g(S,"style",`font-family: ${e.fonts.innerText2Font??""}`),g(L,"style",`font-family: ${e.fonts.innerText3Font??""}`),g(P,"style",`--sheenX: ${r(Q)??""}px; --sheenY: ${r(Z)??""}px; --sheenOpacity: ${pt??""}; background-image: url(/images/cards/${j??""}.webp);`),g(I,"style",`font-family: ${e.fonts.frontTextFont??""}`),g(R,"style",`font-family: ${e.fonts.frontTextFont??""}`)}),Ot("mouseleave",l,ht),Dt(1,d,()=>Ht,()=>({duration:400,delay:50})),h(c,d)};zt(bt,c=>{(r(nt)||b)&&c(Tt)})}h(t,at),Vt()}Gt(["click"]);function Lt(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines009"})}function Pt(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"valentines008"})}function Rt(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"valentines007"})}function Ut(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines006"})}var Wt=x(`<style>.valentines005 .hardcoded-front-content {
      color: #111;
      font-weight: bold;
      line-height: 1.25em;
      top: 0.4em;
    }</style>`);function jt(t){const e={frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="valentines005";y(o=>{var a=Wt();h(o,a)}),i(t,{fonts:e,cardClass:n})}var qt=x(`<style>.valentines004 .hardcoded-front-content {
      color: #f11;
      font-size: 7em;
      line-height: 1.25em;
      top: 0.4em;
      right: 0.25em;
      left: 2em;
    }</style>`);function Jt(t){const e={frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},n="valentines004";y(o=>{var a=qt();h(o,a)}),i(t,{fonts:e,cardClass:n})}function Qt(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"valentines003"})}function Zt(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines002"})}function te(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines001 fancy-wide"})}var ee=x(`<style>.birthday009 .hardcoded-front-content {
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
    }</style>`);function he(t){const e={frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},n="happybirthday002";y(o=>{var a=me();h(o,a)}),i(t,{fonts:e,cardClass:n})}const we={valentines009:{component:Lt},valentines008:{component:Pt},valentines007:{component:Rt},valentines006:{component:Ut},valentines005:{component:jt},valentines004:{component:Jt},valentines003:{component:Qt},valentines002:{component:Zt},valentines001:{component:te},birthday009:{component:ne},birthday008:{component:se},birthday007:{component:oe},birthday006:{component:ce},birthday005:{component:de},birthday004:{component:fe},happybirthday003:{component:ue},happybirthday001:{component:ve},happybirthday002:{component:he}};export{we as c};
