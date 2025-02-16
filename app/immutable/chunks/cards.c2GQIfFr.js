import{a as v,t as h}from"./disclose-version.CJA4W1qP.js";import"./legacy.BewyaaDY.js";import{h as rt,p as St,an as u,a6 as ot,V as o,S as a,al as _,a as wt,ao as d,ap as f,aq as L,n as Vt}from"./runtime.DECP8v5C.js";import{f as $t,s as Gt,g as Bt,a as D,b as k,h as y}from"./preload-helper.DLeTyN-A.js";import{h as Ot}from"./html.CuS_bZjE.js";import{p as j,t as zt,s as F,a as It}from"./index.Z1XYZlun.js";import{p as S}from"./proxy.8_ulJ0W0.js";import{b as it}from"./this.BZr6R6JJ.js";import{c as ct,a as H,p as Et}from"./cardIsOpen.Cq6rM5L-.js";import{o as lt}from"./index-client.BR0cwrFj.js";import{m as Nt}from"./metadata.CegqjW4e.js";function Lt(t,e,n){var r=t.__className,s=Dt(e);rt&&t.className===s?t.__className=s:(r!==s||rt&&t.className!==s)&&(e==null&&!n?t.removeAttribute("class"):t.className=s,t.__className=s)}function Dt(t,e){return(t??"")+""}function kt(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}var Ht=h('<div><button><div class="back svelte-1t0syrn"><div class="content svelte-1t0syrn"><p class="intro svelte-1t0syrn"> </p> <p class="main-content svelte-1t0syrn"> </p> <p class="sign-off svelte-1t0syrn"> </p></div></div> <div class="front svelte-1t0syrn"><div class="hardcoded-front-content svelte-1t0syrn"><!></div> <div class="content svelte-1t0syrn"><p class="svelte-1t0syrn"> </p></div></div> <div class="lining svelte-1t0syrn"></div></button></div>');function i(t,e){St(e,!0);const n=Gt(),r=()=>D(H,"$cardIsOpen",n),s=()=>D(ct,"$cardText",n),dt=()=>D(It,"$i18n",n),K=()=>D(zt,"$t",n),{decompressFromEncodedURIComponent:ft}=Et;let g="closed",M="open";const b=j.url.pathname.includes("edit"),w=j.url.pathname.includes("view"),ut=!b&&!w,X=b?"edit":w?"view":"preview",Y=e.cardClass.split(" ")[0],{isWide:vt,defaultText:q,hardcodedFrontText:J}=Nt[Y];let V=u(!1),T=u(S(b&&r()?M:g));ot(()=>{b?r()?o(T,M):o(T,g):a(V)?o(T,M):o(T,g)});let l=u(S(b||ut?s():q));ot(()=>{o(l,S(b?s():q))});function ht(){r()?(H.updateCardIsOpen(!1),o(V,!1)):(o(G,0),o(B,0),H.updateCardIsOpen(!0),o(V,!0))}function pt(){X==="preview"&&(o(T,g),H.updateCardIsOpen(!1),o(V,!1))}let $=u(null),A=u(null),G=u(0),B=u(0),Q=u(0),Z=u(0),mt=S(w?.5:0);function tt(c){if(a(A))if(a(T)===g&&X==="view"){const{innerWidth:m,innerHeight:x}=window,C=c.clientX/m*2-1,N=c.clientY/x*2-1;o(G,C*10),o(B,N*-10),et(C,N)}else o(G,0),o(B,0),et(-400,-400)}function et(c,m){if(!a($))return;const x=a($).getBoundingClientRect();o(Q,1-c*(x.right-x.left)),o(Z,1-m*(x.bottom-x.top))}function xt(){const c=j.url.searchParams.get("data")||"",m=ft(c),x=decodeURIComponent;if(!m)return;const[C,N,Ct,_t]=m.split("|").map(x);return{frontText:C==="null"?null:C,innerText1:N,innerText2:Ct,innerText3:_t}}let nt=u(!1);lt(()=>o(nt,!0)),lt(()=>{if(w){const c=xt();c&&(o(l,S(c)),ct.updateText(a(l)))}return window.addEventListener("mousemove",tt),()=>{window.removeEventListener("mousemove",tt)}});const yt=c=>c?c.split("").map(m=>`<span>${m}</span>`).join(""):"";var O=Ht(),p=d(O);p.__click=ht;var P=d(p),st=d(P),z=d(st),Tt=d(z,!0);_(()=>k(Tt,a(l).innerText1?K()(a(l).innerText1):"")),f(z);var I=L(z,2),Ft=d(I,!0);_(()=>k(Ft,a(l).innerText2?K()(a(l).innerText2):"")),f(I);var R=L(I,2),bt=d(R,!0);_(()=>k(bt,a(l).innerText3?K()(a(l).innerText3):"")),f(R),f(st),f(P);var U=L(P,2),E=d(U),Kt=d(E);Ot(Kt,()=>J&&yt(K()(J))),f(E);var at=L(E,2),W=d(at),gt=d(W,!0);_(()=>k(gt,a(l).frontText?K()(a(l).frontText):"")),f(W),f(at),f(U),Vt(2),f(p),it(p,c=>o(A,c),()=>a(A)),f(O),it(O,c=>o($,c),()=>a($)),_(()=>{F(p,"style",`transform: rotateY(${a(G)??""}deg) rotateX(${a(B)??""}deg); opacity: 0;`),Lt(p,`card ${a(T)??""} ${dt().language??""} ${e.cardClass??""} ${X??""} ${(vt?"wide":"tall")??""} svelte-1t0syrn`),kt(p,"ready",a(nt)),F(z,"style",`font-family: ${e.fonts.innerText1Font??""}`),F(I,"style",`font-family: ${e.fonts.innerText2Font??""}`),F(R,"style",`font-family: ${e.fonts.innerText3Font??""}`),F(U,"style",`--sheenX: ${a(Q)??""}px; --sheenY: ${a(Z)??""}px; --sheenOpacity: ${mt??""}; ${(Y!=="empty"?`background-image: url(/images/cards/${Y}.webp);`:"")??""} `),F(E,"style",`font-family: ${e.fonts.frontTextFont??""}`),F(W,"style",`font-family: ${e.fonts.frontTextFont??""}`)}),Bt("mouseleave",p,pt),v(t,O),wt()}$t(["click"]);function Mt(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"other001-gulf-mexico"})}function Xt(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines009"})}function Yt(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"valentines008"})}function At(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"valentines007"})}function Pt(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines006"})}var Rt=h(`<style>.valentines005 .hardcoded-front-content {
      color: #111;
      font-weight: bold;
      line-height: 1.25em;
      top: 0.4em;
    }</style>`);function Ut(t){const e={frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="valentines005";y(r=>{var s=Rt();v(r,s)}),i(t,{fonts:e,cardClass:n})}var Wt=h(`<style>.valentines004 .hardcoded-front-content {
      color: #f11;
      font-size: 7em;
      line-height: 1.25em;
      top: 0.4em;
      right: 0.25em;
      left: 2em;
    }</style>`);function jt(t){const e={frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},n="valentines004";y(r=>{var s=Wt();v(r,s)}),i(t,{fonts:e,cardClass:n})}function qt(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"valentines003"})}function Jt(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines002"})}function Qt(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines001 fancy-wide"})}var Zt=h(`<style>.birthday009 .hardcoded-front-content {
      font-size: 8em;
      text-shadow: 0.05em 0.05em 0.02em rgba(0, 0, 0, 0.15);
      top: 0.3em;
      bottom: auto;
      line-height: 1.4em;
    }

    .birthday009.de .hardcoded-front-content,
    .birthday009.fr .hardcoded-front-content {
      font-size: 6em;
    }</style>`);function te(t){const e={frontTextFont:'"Kaushan Script", cursive',innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday009";y(r=>{var s=Zt();v(r,s)}),i(t,{fonts:e,cardClass:n})}var ee=h(`<style>.birthday008 .front .content {
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
    }</style>`);function ne(t){const e={frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday008";y(r=>{var s=ee();v(r,s)}),i(t,{fonts:e,cardClass:n})}var se=h(`<style>.birthday007 .front .content {
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
    }</style>`);function ae(t){const e={frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday007";y(r=>{var s=se();v(r,s)}),i(t,{fonts:e,cardClass:n})}var re=h(`<style>.birthday006 .hardcoded-front-content {
      font-size: 8em;
      text-shadow: 0.05em 0.05em 0.02em rgba(0, 0, 0, 0.15);
      top: 0.3em;
      bottom: auto;
      line-height: 1.4em;
    }

    .birthday006.de .hardcoded-front-content,
    .birthday006.fr .hardcoded-front-content {
      font-size: 6em;
    }</style>`);function oe(t){const e={frontTextFont:'"Kaushan Script", cursive',innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday006";y(r=>{var s=re();v(r,s)}),i(t,{fonts:e,cardClass:n})}var ie=h(`<style>.birthday005 .hardcoded-front-content {
      top: 0.5em;
      bottom: auto;
      font-size: 4.75em;
    }</style>`);function ce(t){const e={frontTextFont:'"Kaushan Script", cursive',innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday005";y(r=>{var s=ie();v(r,s)}),i(t,{fonts:e,cardClass:n})}function le(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"birthday004"})}function de(t){i(t,{fonts:{frontTextFont:'"Kaushan Script", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"happybirthday003"})}function fe(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"happybirthday001"})}var ue=h(`<style>.happybirthday002 .front .content {
      top: 0;
    }

    .happybirthday002 .front .content p {
      line-height: 1em;
      font-size: 20em;
      color: rgb(57, 0, 57);
      text-shadow: 0.05em 0.05em 0.02em rgba(0, 0, 0, 0.15);
    }</style>`);function ve(t){const e={frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},n="happybirthday002";y(r=>{var s=ue();v(r,s)}),i(t,{fonts:e,cardClass:n})}function he(t){i(t,{fonts:"",cardClass:"empty"})}const we={"other001-gulf-mexico":{component:Mt},valentines009:{component:Xt},valentines008:{component:Yt},valentines007:{component:At},valentines006:{component:Pt},valentines005:{component:Ut},valentines004:{component:jt},valentines003:{component:qt},valentines002:{component:Jt},valentines001:{component:Qt},birthday009:{component:te},birthday008:{component:ne},birthday007:{component:ae},birthday006:{component:oe},birthday005:{component:ce},birthday004:{component:le},happybirthday003:{component:de},happybirthday001:{component:fe},happybirthday002:{component:ve},empty:{component:he}};export{he as E,we as c,kt as t};
