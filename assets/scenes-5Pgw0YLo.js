import{S as a,g as o}from"./gsap-CiEuWA-R.js";import{$ as s,a as n,p as i}from"./index-BM1xTxxd.js";const d=`
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
</svg>`;`${[[210,146,"A"],[640,98,"B"],[1075,43,"C"]].map(([t,e,r])=>`
    <g class="road-marker" data-marker="${r}">
      <circle cx="${t}" cy="${e}" r="15" fill="var(--paper)" stroke="var(--brand-green)" stroke-width="1.8"/>
      <text x="${t}" y="${e+5}" text-anchor="middle" fill="var(--brand-green)" stroke="none"
            font-size="14" font-weight="600" font-family="'Inter Tight',sans-serif">${r}</text>
    </g>`).join("")}`;o.registerPlugin(a);function g(){h(),l()}function l(){i()||n("[data-parallax]").forEach(t=>{o.fromTo(t,{yPercent:-6},{yPercent:6,ease:"none",scrollTrigger:{trigger:t.closest(".band")||t,start:"top bottom",end:"bottom top",scrub:!0}})})}function h(){const t=s(".reveal-frame__sketch");t&&(t.innerHTML=d),n(".reveal-frame").forEach(e=>{if(i()){e.classList.add("is-revealed");return}a.create({trigger:e,start:"top 68%",once:!0,onEnter:()=>e.classList.add("is-revealed")})})}export{g as initSceneAnimations};
