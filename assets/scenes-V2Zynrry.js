import{S as d,g as r}from"./gsap-CiEuWA-R.js";import{$ as o,a as s,p as n}from"./index-0d3rafmd.js";const c=`
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
  ${[156,170,184,198,212,226,234].map(t=>`<path d="M${t} 306 V276"/>`).join("")}
  <path d="M150 276 H240"/>
  <path d="M150 270 H240"/>
  <path d="M148 270 L195 250 L242 270"/>
  <!-- city buildings below the rock -->
  <path d="M30 372 V330 H70 V372 M40 340 H60 M40 352 H60"/>
  <path d="M300 372 V336 H346 V372 M312 348 H334 M312 360 H334"/>
  <path d="M84 372 V348 H108 V372"/>
  <path d="M280 372 V352 H298 V372"/>
</svg>`,l=`
<svg viewBox="0 0 1200 170" fill="none" stroke="var(--ink)"
     stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
  <path class="road-line" pathLength="1" stroke="var(--ink)" stroke-width="1.6"
        d="M30 150 C 300 146, 470 122, 640 98 C 830 72, 980 54, 1170 30"/>
  <path class="road-dash" pathLength="1" stroke="var(--ink-soft)" stroke-width="1"
        stroke-dasharray="2 12" opacity="0.55"
        d="M30 150 C 300 146, 470 122, 640 98 C 830 72, 980 54, 1170 30"/>
  ${[[210,146,"A"],[640,98,"B"],[1075,43,"C"]].map(([t,e,a])=>`
    <g class="road-marker" data-marker="${a}">
      <circle cx="${t}" cy="${e}" r="15" fill="var(--paper)" stroke="var(--brand-green)" stroke-width="1.8"/>
      <text x="${t}" y="${e+5}" text-anchor="middle" fill="var(--brand-green)" stroke="none"
            font-size="14" font-weight="600" font-family="'Inter Tight',sans-serif">${a}</text>
    </g>`).join("")}
</svg>`;r.registerPlugin(d);function m(){p(),g(),h()}function h(){n()||s("[data-parallax]").forEach(t=>{r.fromTo(t,{yPercent:-6},{yPercent:6,ease:"none",scrollTrigger:{trigger:t.closest(".band")||t,start:"top bottom",end:"bottom top",scrub:!0}})})}function p(){const t=o(".reveal-frame__sketch");t&&(t.innerHTML=c),s(".reveal-frame").forEach(e=>{if(n()){e.classList.add("is-revealed");return}d.create({trigger:e,start:"top 68%",once:!0,onEnter:()=>e.classList.add("is-revealed")})})}function g(){const t=document.getElementById("road");if(!t)return;t.innerHTML=l;const e=o(".road-line",t),a=o(".road-dash",t),i=s(".road-marker",t);if(n()){r.set([e,a],{strokeDashoffset:0});return}r.set(e,{strokeDasharray:1,strokeDashoffset:1}),r.set(a,{opacity:0}),r.set(i,{transformOrigin:"50% 50%",scale:.7,opacity:0}),r.timeline({scrollTrigger:{trigger:t,start:"top 76%",once:!0}}).to(e,{strokeDashoffset:0,duration:1.5,ease:"power2.inOut"}).to(a,{opacity:.55,duration:.6,ease:"power1.out"},.9).to(i,{scale:1,opacity:1,duration:.55,stagger:.16,ease:"power3.out"},.7)}export{m as initSceneAnimations};
