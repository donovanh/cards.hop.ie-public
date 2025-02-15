import{a as v,t as h}from"./disclose-version.CvcJnQgu.js";import"./legacy.D3UXn0A8.js";import{h as st,p as wt,aw as u,N as rt,a2 as r,R as o,a7 as _,a as Vt,a9 as d,aa as f,ab as E,n as $t}from"./runtime.B9YhlTFU.js";import{e as Gt,s as Bt,g as qt,a as L,b as D,h as x}from"./preload-helper.CitP97AU.js";import{h as Ot}from"./html.BgmjoNoo.js";import{p as W,t as It,s as b,a as zt}from"./index.Cv10PAzI.js";import{p as S}from"./proxy.BUuFEfZn.js";import{b as ot}from"./this.Dds8diJC.js";import{c as it,a as k,p as Nt}from"./cardIsOpen.ClW7eRH4.js";import{o as ct}from"./index-client.DonmUIX4.js";import{m as Et}from"./metadata.lr5tc_oc.js";function Lt(t,e,n){var s=t.__className,a=Dt(e);st&&t.className===a?t.__className=a:(s!==a||st&&t.className!==a)&&(e==null&&!n?t.removeAttribute("class"):t.className=a,t.__className=a)}function Dt(t,e){return(t??"")+""}function Se(t,e,n){if(n){if(t.classList.contains(e))return;t.classList.add(e)}else{if(!t.classList.contains(e))return;t.classList.remove(e)}}var kt=h('<div><button aria-label="Card"><div class="back svelte-e4ye0q"><div class="content svelte-e4ye0q"><p class="intro svelte-e4ye0q"> </p> <p class="main-content svelte-e4ye0q"> </p> <p class="sign-off svelte-e4ye0q"> </p></div></div> <div class="front svelte-e4ye0q"><div class="hardcoded-front-content svelte-e4ye0q"><!></div> <div class="content svelte-e4ye0q"><p class="svelte-e4ye0q"> </p></div></div> <div class="lining svelte-e4ye0q"></div></button></div>');function i(t,e){wt(e,!0);const n=Bt(),s=()=>L(k,"$cardIsOpen",n),a=()=>L(it,"$cardText",n),lt=()=>L(zt,"$i18n",n),K=()=>L(It,"$t",n),{decompressFromEncodedURIComponent:dt}=Nt;let g="closed",H="open";const F=W.url.pathname.includes("edit"),w=W.url.pathname.includes("view"),ft=!F&&!w,X=F?"edit":w?"view":"preview",Y=e.cardClass.split(" ")[0],{isWide:ut,defaultText:j,hardcodedFrontText:J}=Et[Y];let V=u(!1),y=u(S(F&&s()?H:g));rt(()=>{F?s()?r(y,H):r(y,g):o(V)?r(y,H):r(y,g)});let l=u(S(F||ft?a():j));rt(()=>{r(l,S(F?a():j))});function vt(){s()?(k.updateCardIsOpen(!1),r(V,!1)):(r(G,0),r(B,0),k.updateCardIsOpen(!0),r(V,!0))}function ht(){X==="preview"&&(r(y,g),k.updateCardIsOpen(!1),r(V,!1))}let $=u(null),M=u(null),G=u(0),B=u(0),Q=u(0),Z=u(0),mt=S(w?.5:0);function tt(c){if(o(M))if(o(y)===g&&X==="view"){const{innerWidth:m,innerHeight:p}=window,C=c.clientX/m*2-1,N=c.clientY/p*2-1;r(G,C*10),r(B,N*-10),et(C,N)}else r(G,0),r(B,0),et(-400,-400)}function et(c,m){if(!o($))return;const p=o($).getBoundingClientRect();r(Q,1-c*(p.right-p.left)),r(Z,1-m*(p.bottom-p.top))}function pt(){const c=W.url.searchParams.get("data")||"",m=dt(c),p=decodeURIComponent;if(!m)return;const[C,N,_t,St]=m.split("|").map(p);return{frontText:C==="null"?null:C,innerText1:N,innerText2:_t,innerText3:St}}let xt=u(!1);ct(()=>r(xt,!0)),ct(()=>{if(w){const c=pt();c&&(r(l,S(c)),it.updateText(o(l)))}return window.addEventListener("mousemove",tt),()=>{window.removeEventListener("mousemove",tt)}});const yt=c=>c?c.split("").map(m=>`<span>${m}</span>`).join(""):"";let Tt=Y!=="empty"?`/images/cards/${Y}.webp`:"";var q=kt(),T=d(q);T.__click=vt;var R=d(T),nt=d(R),O=d(nt),bt=d(O,!0);_(()=>D(bt,o(l).innerText1?K()(o(l).innerText1):"")),f(O);var I=E(O,2),Ft=d(I,!0);_(()=>D(Ft,o(l).innerText2?K()(o(l).innerText2):"")),f(I);var A=E(I,2),Kt=d(A,!0);_(()=>D(Kt,o(l).innerText3?K()(o(l).innerText3):"")),f(A),f(nt),f(R);var P=E(R,2),z=d(P),gt=d(z);Ot(gt,()=>J&&yt(K()(J))),f(z);var at=E(z,2),U=d(at),Ct=d(U,!0);_(()=>D(Ct,o(l).frontText?K()(o(l).frontText):"")),f(U),f(at),f(P),$t(2),f(T),ot(T,c=>r(M,c),()=>o(M)),f(q),ot(q,c=>r($,c),()=>o($)),_(()=>{b(T,"style",`transform: rotateY(${o(G)??""}deg) rotateX(${o(B)??""}deg);`),Lt(T,`card ${o(y)??""} ${lt().language??""} ${e.cardClass??""} ${X??""} ${(ut?"wide":"tall")??""} svelte-e4ye0q`),b(O,"style",`font-family: ${e.fonts.innerText1Font??""}`),b(I,"style",`font-family: ${e.fonts.innerText2Font??""}`),b(A,"style",`font-family: ${e.fonts.innerText3Font??""}`),b(P,"style",`--sheenX: ${o(Q)??""}px; --sheenY: ${o(Z)??""}px; --sheenOpacity: ${mt??""}; background-image: url(${Tt??""});`),b(z,"style",`font-family: ${e.fonts.frontTextFont??""}`),b(U,"style",`font-family: ${e.fonts.frontTextFont??""}`)}),qt("mouseleave",T,ht),v(t,q),Vt()}Gt(["click"]);function Ht(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines009"})}function Xt(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"valentines008"})}function Yt(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"valentines007"})}function Mt(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines006"})}var Rt=h(`<style>.valentines005 .hardcoded-front-content {
      color: #111;
      font-weight: bold;
      line-height: 1.25em;
      top: 0.4em;
    }</style>`);function At(t){const e={frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="valentines005";x(s=>{var a=Rt();v(s,a)}),i(t,{fonts:e,cardClass:n})}var Pt=h(`<style>.valentines004 .hardcoded-front-content {
      color: #f11;
      font-size: 7em;
      line-height: 1.25em;
      top: 0.4em;
      right: 0.25em;
      left: 2em;
    }</style>`);function Ut(t){const e={frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},n="valentines004";x(s=>{var a=Pt();v(s,a)}),i(t,{fonts:e,cardClass:n})}function Wt(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"valentines003"})}function jt(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines002"})}function Jt(t){i(t,{fonts:{frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"valentines001 fancy-wide"})}var Qt=h(`<style>.birthday009 .hardcoded-front-content {
      font-size: 8em;
      text-shadow: 0.05em 0.05em 0.02em rgba(0, 0, 0, 0.15);
      top: 0.3em;
      bottom: auto;
      line-height: 1.4em;
    }

    .birthday009.de .hardcoded-front-content,
    .birthday009.fr .hardcoded-front-content {
      font-size: 6em;
    }</style>`);function Zt(t){const e={frontTextFont:'"Kaushan Script", cursive',innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday009";x(s=>{var a=Qt();v(s,a)}),i(t,{fonts:e,cardClass:n})}var te=h(`<style>.birthday008 .front .content {
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
    }</style>`);function ee(t){const e={frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday008";x(s=>{var a=te();v(s,a)}),i(t,{fonts:e,cardClass:n})}var ne=h(`<style>.birthday007 .front .content {
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
    }</style>`);function ae(t){const e={frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday007";x(s=>{var a=ne();v(s,a)}),i(t,{fonts:e,cardClass:n})}var se=h(`<style>.birthday006 .hardcoded-front-content {
      font-size: 8em;
      text-shadow: 0.05em 0.05em 0.02em rgba(0, 0, 0, 0.15);
      top: 0.3em;
      bottom: auto;
      line-height: 1.4em;
    }

    .birthday006.de .hardcoded-front-content,
    .birthday006.fr .hardcoded-front-content {
      font-size: 6em;
    }</style>`);function re(t){const e={frontTextFont:'"Kaushan Script", cursive',innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday006";x(s=>{var a=se();v(s,a)}),i(t,{fonts:e,cardClass:n})}var oe=h(`<style>.birthday005 .hardcoded-front-content {
      top: 0.5em;
      bottom: auto;
      font-size: 4.75em;
    }</style>`);function ie(t){const e={frontTextFont:'"Kaushan Script", cursive',innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},n="birthday005";x(s=>{var a=oe();v(s,a)}),i(t,{fonts:e,cardClass:n})}function ce(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"birthday004"})}function le(t){i(t,{fonts:{frontTextFont:'"Kaushan Script", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},cardClass:"happybirthday003"})}function de(t){i(t,{fonts:{frontTextFont:"Kalam, cursive",innerText1Font:"Kalam, cursive",innerText2Font:'"Kaushan Script", cursive',innerText3Font:"Kalam, cursive"},cardClass:"happybirthday001"})}var fe=h(`<style>.happybirthday002 .front .content {
      top: 0;
    }

    .happybirthday002 .front .content p {
      line-height: 1em;
      font-size: 20em;
      color: rgb(57, 0, 57);
      text-shadow: 0.05em 0.05em 0.02em rgba(0, 0, 0, 0.15);
    }</style>`);function ue(t){const e={frontTextFont:'"Great Vibes", cursive',innerText1Font:'"Kaushan Script", cursive',innerText2Font:'"Great Vibes", cursive',innerText3Font:'"Kaushan Script", cursive'},n="happybirthday002";x(s=>{var a=fe();v(s,a)}),i(t,{fonts:e,cardClass:n})}function ve(t){i(t,{fonts:"",cardClass:"empty"})}const we={valentines009:{component:Ht},valentines008:{component:Xt},valentines007:{component:Yt},valentines006:{component:Mt},valentines005:{component:At},valentines004:{component:Ut},valentines003:{component:Wt},valentines002:{component:jt},valentines001:{component:Jt},birthday009:{component:Zt},birthday008:{component:ee},birthday007:{component:ae},birthday006:{component:re},birthday005:{component:ie},birthday004:{component:ce},happybirthday003:{component:le},happybirthday001:{component:de},happybirthday002:{component:ue},empty:{component:ve}};export{ve as E,we as c,Se as t};
