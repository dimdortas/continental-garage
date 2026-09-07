import{S as h,g as r}from"./gsap-CiEuWA-R.js";import{D as M}from"./data-Lg7BMD_s.js";import{$ as l,a as i,p as c}from"./index-D6b1s_LE.js";const x=`
<svg viewBox="0 0 400 500" fill="none" stroke="var(--ink)" stroke-width="1.4"
     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <!-- horizon + hills -->
  <path d="M0 372 H400"/>
  <path d="M0 372 C 60 356, 120 360, 170 340 C 210 324, 250 330, 300 348 C 340 360, 380 356, 400 366"/>
  <!-- Acropolis rock -->
  <path d="M120 340 C 150 330, 210 330, 250 342"/>
  <!-- Parthenon: stylobate, columns, entablature, pediment -->
  <path d="M150 312 H240"/>
  <path d="M150 306 H240"/>
  ${[156,170,184,198,212,226,234].map(e=>`<path d="M${e} 306 V276"/>`).join("")}
  <path d="M150 276 H240"/>
  <path d="M150 270 H240"/>
  <path d="M148 270 L195 250 L242 270"/>
  <!-- city buildings below the rock -->
  <path d="M30 372 V330 H70 V372 M40 340 H60 M40 352 H60"/>
  <path d="M300 372 V336 H346 V372 M312 348 H334 M312 360 H334"/>
  <path d="M84 372 V348 H108 V372"/>
  <path d="M280 372 V352 H298 V372"/>
</svg>`;function $(e){const t=[300,250],a={ROME:[110,205],ISTANBUL:[402,150],"TEL AVIV":[470,356],DUBAI:[600,322],LONDON:[126,66]};return`
    <svg viewBox="0 0 640 480" fill="none" stroke="var(--ink)"
         stroke-linecap="round" stroke-linejoin="round">
      <!-- Eastern-Mediterranean coastlines — hand-drawn, intentional -->
      <g opacity="0.5" stroke-width="1.2">
        <!-- Italy (boot) + Sicily -->
        <path d="M150 110 C 138 134, 128 160, 112 182 C 100 198, 84 206, 90 220 C 96 232, 110 224, 120 210 C 134 190, 142 166, 156 146 C 166 132, 162 112, 150 110 Z"/>
        <path d="M60 222 L80 228 L66 240 Z"/>
        <!-- Greece + Attica cape (Athens) + Peloponnese -->
        <path d="M206 148 C 232 146, 250 166, 270 172 C 286 177, 300 176, 312 190 C 320 200, 316 214, 322 226 C 326 236, 316 246, 306 250 C 298 253, 292 248, 286 242 C 276 232, 262 236, 256 246 C 250 256, 258 268, 246 272 C 236 275, 230 264, 232 252 C 234 240, 224 234, 216 224 C 204 210, 198 184, 202 162 C 203 153, 202 149, 206 148 Z"/>
        <!-- Anatolia (Turkey) -->
        <path d="M348 158 C 380 146, 420 150, 460 146 C 500 142, 540 148, 580 142 C 604 138, 620 146, 618 158 C 616 170, 596 172, 576 176 C 540 182, 520 200, 486 206 C 452 212, 430 200, 400 204 C 376 207, 356 200, 346 184 C 340 174, 340 162, 348 158 Z"/>
        <!-- Levant coast -->
        <path d="M598 206 C 606 232, 600 260, 596 288 C 592 316, 598 340, 588 360 C 584 368, 576 366, 576 356 C 576 330, 582 300, 584 272 C 586 248, 582 226, 588 210 C 590 204, 596 200, 598 206 Z"/>
        <!-- North African coast -->
        <path d="M110 450 C 210 434, 320 444, 410 436 C 500 428, 560 440, 636 432"/>
        <!-- Islands: Crete, Cyprus + Aegean specks -->
        <path d="M250 332 C 288 326, 322 328, 358 332 C 364 333, 364 340, 356 342 C 320 346, 282 344, 252 342 C 246 341, 245 334, 250 332 Z"/>
        <path d="M492 240 C 502 238, 514 242, 512 250 C 510 256, 498 256, 492 252 C 488 249, 488 242, 492 240 Z"/>
        <circle cx="332" cy="204" r="2"/><circle cx="346" cy="220" r="1.6"/>
        <circle cx="356" cy="196" r="1.6"/><circle cx="338" cy="236" r="1.6"/>
      </g>
      ${e.map(s=>{const[o,n]=a[s.city],p=(t[0]+o)/2,f=(t[1]+n)/2,g=o-t[0],k=n-t[1],C=p-k*.22,u=f+g*.22,m=o<t[0]?"end":"start",y=o<t[0]?o-8:o+8;return`
      <path class="map-arc" pathLength="1" d="M${t[0]} ${t[1]} Q ${C.toFixed(0)} ${u.toFixed(0)} ${o} ${n}"
            stroke="var(--brand-green)" stroke-width="1.4" stroke-dasharray="4 5"/>
      <circle cx="${o}" cy="${n}" r="3.2" fill="var(--brand-green)"/>
      <text x="${y}" y="${n-10}" text-anchor="${m}" fill="var(--ink-soft)" stroke="none"
            font-size="11" font-weight="500" letter-spacing="1.4"
            font-family="'Inter Tight',sans-serif">${s.city} · ${s.time}</text>`}).join("")}
      <!-- Athens node marked with the G monogram -->
      <g transform="translate(${t[0]-16} ${t[1]-16}) scale(0.32)" stroke="var(--ink)"
         stroke-width="9" stroke-linecap="round" stroke-linejoin="round">
        <path d="M70 34 C66 22 54 16 42 18 C27 20 18 33 19 49 C20 65 32 76 47 74 C60 72 68 61 67 49 L48 51"/>
      </g>
      <text x="${t[0]}" y="${t[1]+30}" text-anchor="middle" fill="var(--ink)" stroke="none"
            font-size="12" font-weight="600" letter-spacing="2"
            font-family="'Inter Tight',sans-serif">ATHENS</text>
    </svg>`}const v=`
<svg viewBox="0 0 1200 170" fill="none" stroke="var(--ink)"
     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path class="road-line" pathLength="1" stroke="var(--ink)" stroke-width="1.6"
        d="M30 150 C 300 146, 470 122, 640 98 C 830 72, 980 54, 1170 30"/>
  <path class="road-dash" pathLength="1" stroke="var(--ink-soft)" stroke-width="1"
        stroke-dasharray="2 12" opacity="0.55"
        d="M30 150 C 300 146, 470 122, 640 98 C 830 72, 980 54, 1170 30"/>
  ${[[210,146,"A"],[640,98,"B"],[1075,43,"C"]].map(([e,t,a])=>`
    <g class="road-marker" data-marker="${a}">
      <circle cx="${e}" cy="${t}" r="15" fill="var(--paper)" stroke="var(--brand-green)" stroke-width="1.8"/>
      <text x="${e}" y="${t+5}" text-anchor="middle" fill="var(--brand-green)" stroke="none"
            font-size="14" font-weight="600" font-family="'Inter Tight',sans-serif">${a}</text>
    </g>`).join("")}
</svg>`;r.registerPlugin(h);function V(){H(),A(),L(),w()}function w(){c()||i("[data-parallax]").forEach(e=>{r.fromTo(e,{yPercent:-6},{yPercent:6,ease:"none",scrollTrigger:{trigger:e.closest(".band")||e,start:"top bottom",end:"bottom top",scrub:!0}})})}function H(){const e=l(".reveal-frame__sketch");e&&(e.innerHTML=x),i(".reveal-frame").forEach(t=>{if(c()){t.classList.add("is-revealed");return}h.create({trigger:t,start:"top 68%",once:!0,onEnter:()=>t.classList.add("is-revealed")})})}function A(){const e=document.getElementById("map");if(!e)return;e.innerHTML=$(M);const t=i(".map-arc",e);if(c()){r.set(t,{strokeDashoffset:0});return}r.set(t,{strokeDasharray:"4 5",strokeDashoffset:40,opacity:0}),h.create({trigger:e,start:"top 72%",once:!0,onEnter:()=>r.to(t,{strokeDashoffset:0,opacity:1,duration:1.1,stagger:.14,ease:"power2.out"})})}function L(){const e=document.getElementById("road");if(!e)return;e.innerHTML=v;const t=l(".road-line",e),a=l(".road-dash",e),d=i(".road-marker",e);if(c()){r.set([t,a],{strokeDashoffset:0});return}r.set(t,{strokeDasharray:1,strokeDashoffset:1}),r.set(a,{opacity:0}),r.set(d,{transformOrigin:"50% 50%",scale:.7,opacity:0}),r.timeline({scrollTrigger:{trigger:e,start:"top 76%",once:!0}}).to(t,{strokeDashoffset:0,duration:1.5,ease:"power2.inOut"}).to(a,{opacity:.55,duration:.6,ease:"power1.out"},.9).to(d,{scale:1,opacity:1,duration:.55,stagger:.16,ease:"power3.out"},.7)}export{V as initSceneAnimations};
