import{a as v,t as m}from"./disclose-version.bXSku7Es.js";import"./legacy.DzwSoQjj.js";import{h as st,p as wt,aw as u,O as rt,a3 as r,S as o,a8 as _,a as Vt,aa as d,ab as f,ac as N,n as $t}from"./runtime.9UboM5y6.js";import{e as Gt,s as Bt,g as Ot,a as D,b as k,h as x}from"./preload-helper.B3MuCvQR.js";import{h as qt}from"./html.C4KJpROL.js";import{p as W,t as It,s as b,a as zt}from"./index.CBLim5D4.js";import{p as S}from"./proxy.gDOiuoQ2.js";import{b as ot}from"./this.uemqCEGi.js";import{c as it,a as H,p as Et}from"./cardIsOpen.BfDQiiYO.js";import{o as ct}from"./index-client.DJQ1-XUa.js";import{m as Nt}from"./metadata.lr5tc_oc.js";function Dt(t,e,n){var s=t.__className,a=kt(e);st&&t.className===a?t.__className=a:(s!==a||st&&t.className!==a)&&(e==null&&!n?t.removeAttribute("class"):t.className=a,t.__className=a)}function kt(t,e){return(t??"")+""}var Ht=m('<div><button aria-label="Card"><div class="back svelte-e4ye0q"><div class="content svelte-e4ye0q"><p class="intro svelte-e4ye0q"> </p> <p class="main-content svelte-e4ye0q"> </p> <p class="sign-off svelte-e4ye0q"> </p></div></div> <div class="front svelte-e4ye0q"><div class="hardcoded-front-content svelte-e4ye0q"><!></div> <div class="content svelte-e4ye0q"><p class="svelte-e4ye0q"> </p></div></div> <div class="lining svelte-e4ye0q"></div></button></div>');function i(t,e){wt(e,!0);const n=Bt(),s=()=>D(H,"$cardIsOpen",n),a=()=>D(it,"$cardText",n),lt=()=>D(zt,"$i18n",n),K=()=>D(It,"$t",n),{decompressFromEncodedURIComponent:dt}=Et;let g="closed",X="open";const F=W.url.pathname.includes("edit"),w=W.url.pathname.includes("view"),ft=!F&&!w,Y=F?"edit":w?"view":"preview",M=e.cardClass.split(" ")[0],{isWide:ut,defaultText:j,hardcodedFrontText:J}=Nt[M];let V=u(!1),y=u(S(F&&s()?X:g));rt(()=>{F?s()?r(y,X):r(y,g):o(V)?r(y,X):r(y,g)});let l=u(S(F||ft?a():j));rt(()=>{r(l,S(F?a():j))});function vt(){s()?(H.updateCardIsOpen(!1),r(V,!1)):(r(G,0),r(B,0),H.updateCardIsOpen(!0),r(V,!0))}function mt(){Y==="preview"&&(r(y,g),H.updateCardIsOpen(!1),r(V,!1))}let $=u(null),A=u(null),G=u(0),B=u(0),Q=u(0),Z=u(0),ht=S(w?.5:0);function tt(c){if(o(A))if(o(y)===g&&Y==="view"){const{innerWidth:h,innerHeight:p}=window,C=c.clientX/h*2-1,E=c.clientY/p*2-1;r(G,C*10),r(B,E*-10),et(C,E)}else r(G,0),r(B,0),et(-400,-400)}function et(c,h){if(!o($))return;const p=o($).getBoundingClientRect();r(Q,1-c*(p.right-p.left)),r(Z,1-h*(p.bottom-p.top))}function pt(){const c=W.url.searchParams.get("data")||"",h=dt(c),p=decodeURIComponent;if(!h)return;const[C,E,_t,St]=h.split("|").map(p);return{frontText:C==="null"?null:C,innerText1:E,innerText2:_t,innerText3:St}}let xt=u(!1);ct(()=>r(xt,!0)),ct(()=>{if(w){const c=pt();c&&(r(l,S(c)),it.updateText(o(l)))}return window.addEventListener("mousemove",tt),()=>{window.removeEventListener("mousemove",tt)}});const yt=c=>c?c.split("").map(h=>`<span>${h}</span>`).join(""):"";let Tt=M!=="empty"?`/images/cards/${M}.webp`:"";var O=Ht(),T=d(O);T.__click=vt;var L=d(T),nt=d(L),q=d(nt),bt=d(q,!0);_(()=>k(bt,o(l).innerText1?K()(o(l).innerText1):"")),f(q);var I=N(q,2),Ft=d(I,!0);_(()=>k(Ft,o(l).innerText2?K()(o(l).innerText2):"")),f(I);var P=N(I,2),Kt=d(P,!0);_(()=>k(Kt,o(l).innerText3?K()(o(l).innerText3):"")),f(P),f(nt),f(L);var R=N(L,2),z=d(R),gt=d(z);qt(gt,()=>J&&yt(K()(J))),f(z);var at=N(z,2),U=d(at),Ct=d(U,!0);_(()=>k(Ct,o(l).frontText?K()(o(l).frontText):"")),f(U),f(at),f(R),$t(2),f(T),ot(T,c=>r(A,c),()=>o(A)),f(O),ot(O,c=>r($,c),()=>o($)),_(()=>{b(T,"style",`transform: rotateY(${o(G)??""}deg) rotateX(${o(B)??""}deg);`),Dt(T,`card ${o(y)??""} ${lt().language??""} ${e.cardClass??""} ${Y??""} ${(ut?"wide":"tall")??""} svelte-e4ye0q`),b(q,"style",`font-family: ${e.fonts.innerText1Font??""}`),b(I,"style",`font-family: ${e.fonts.innerText2Font??""}`),b(P,"style",`font-family: ${e.fonts.innerText3Font??""}`),b(R,"style",`--sheenX: ${o(Q)??""}px; --sheenY: ${o(Z)??""}px; --sheenOpacity: ${ht??""}; background-image: url(${Tt??""});`),b(z,"style",`font-family: ${e.fonts.frontTextFont??""}`),b(U,"style",`font-family: ${e.fonts.frontTextFont??""}`)}),Ot("mouseleave",T,mt),v(t,O),Vt()}Gt(["click"]);function Xt(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines009"})}function Yt(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"valentines008"})}function Mt(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"valentines007"})}function At(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines006"})}var Lt=m(`<style>.valentines005 .hardcoded-front-content {
      color: #111;
      font-weight: bold;
      line-height: 1.25em;
      top: 0.4em;
    }</style>`);function Pt(t){const e={frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="valentines005";x(s=>{var a=Lt();v(s,a)}),i(t,{fonts:e,cardClass:n})}var Rt=m(`<style>.valentines004 .hardcoded-front-content {
      color: #f11;
      font-size: 7em;
      line-height: 1.25em;
      top: 0.4em;
      right: 0.25em;
      left: 2em;
    }</style>`);function Ut(t){const e={frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},n="valentines004";x(s=>{var a=Rt();v(s,a)}),i(t,{fonts:e,cardClass:n})}function Wt(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"valentines003"})}function jt(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines002"})}function Jt(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines001 fancy-wide"})}var Qt=m(`<style>.birthday009 .hardcoded-front-content {
      font-size: 8em;
      text-shadow: 0.05em 0.05em 0.02em rgba(0, 0, 0, 0.15);
      top: 0.3em;
      bottom: auto;
      line-height: 1.4em;
    }

    .birthday009.de .hardcoded-front-content,
    .birthday009.fr .hardcoded-front-content {
      font-size: 6em;
    }</style>`);function Zt(t){const e={frontTextFont:'"Kaushan Script", cursive',innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday009";x(s=>{var a=Qt();v(s,a)}),i(t,{fonts:e,cardClass:n})}var te=m(`<style>.birthday008 .front .content {
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
    }</style>`);function ee(t){const e={frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday008";x(s=>{var a=te();v(s,a)}),i(t,{fonts:e,cardClass:n})}var ne=m(`<style>.birthday007 .front .content {
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
    }</style>`);function ae(t){const e={frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday007";x(s=>{var a=ne();v(s,a)}),i(t,{fonts:e,cardClass:n})}var se=m(`<style>.birthday006 .hardcoded-front-content {
      font-size: 8em;
      text-shadow: 0.05em 0.05em 0.02em rgba(0, 0, 0, 0.15);
      top: 0.3em;
      bottom: auto;
      line-height: 1.4em;
    }

    .birthday006.de .hardcoded-front-content,
    .birthday006.fr .hardcoded-front-content {
      font-size: 6em;
    }</style>`);function re(t){const e={frontTextFont:'"Kaushan Script", cursive',innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday006";x(s=>{var a=se();v(s,a)}),i(t,{fonts:e,cardClass:n})}var oe=m(`<style>.birthday005 .hardcoded-front-content {
      top: 0.5em;
      bottom: auto;
      font-size: 4.75em;
    }</style>`);function ie(t){const e={frontTextFont:'"Kaushan Script", cursive',innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday005";x(s=>{var a=oe();v(s,a)}),i(t,{fonts:e,cardClass:n})}function ce(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"birthday004"})}function le(t){i(t,{fonts:{frontTextFont:'"Kaushan Script", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"happybirthday003"})}function de(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"happybirthday001"})}var fe=m(`<style>.happybirthday002 .front .content {
      top: 0;
    }

    .happybirthday002 .front .content p {
      line-height: 1em;
      font-size: 20em;
      color: rgb(57, 0, 57);
      text-shadow: 0.05em 0.05em 0.02em rgba(0, 0, 0, 0.15);
    }</style>`);function ue(t){const e={frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},n="happybirthday002";x(s=>{var a=fe();v(s,a)}),i(t,{fonts:e,cardClass:n})}function ve(t){i(t,{fonts:"",cardClass:"empty"})}const Se={valentines009:{component:Xt},valentines008:{component:Yt},valentines007:{component:Mt},valentines006:{component:At},valentines005:{component:Pt},valentines004:{component:Ut},valentines003:{component:Wt},valentines002:{component:jt},valentines001:{component:Jt},birthday009:{component:Zt},birthday008:{component:ee},birthday007:{component:ae},birthday006:{component:re},birthday005:{component:ie},birthday004:{component:ce},happybirthday003:{component:le},happybirthday001:{component:de},happybirthday002:{component:ue},empty:{component:ve}};export{ve as E,Se as c};
