import{g as c,S as p}from"./gsap-CiEuWA-R.js";import{C as y}from"./data-Lg7BMD_s.js";import{p as g}from"./index-BZvTrULW.js";const u={piston:`
    <rect x="-26" y="-32" width="52" height="46" rx="4"/>
    <path d="M-26 -20 H26 M-26 -11 H26"/>
    <circle cx="0" cy="4" r="7"/>
    <path d="M-6 12 L-3 40 M6 12 L3 40"/>`,crankshaft:`
    <path d="M-66 0 H66"/>
    <circle cx="-66" cy="0" r="9"/><circle cx="0" cy="0" r="9"/><circle cx="66" cy="0" r="9"/>
    <path d="M-42 0 V-16 H-24 V0"/><circle cx="-33" cy="-22" r="7"/>
    <path d="M24 0 V16 H42 V0"/><circle cx="33" cy="22" r="7"/>`,camshaft:`
    <path d="M-66 0 H66"/>
    ${[-44,-8,28,62].map(t=>`<path d="M${t-9} 2 A9 9 0 1 0 ${t+9} 2 L${t+3} -18 Z"/>`).join("")}`,valve:`
    <path d="M0 -38 V22"/>
    <circle cx="0" cy="-38" r="3"/>
    <path d="M-16 22 C-16 36 16 36 16 22"/>
    <path d="M-16 22 H16"/>`,flywheel:`
    <circle cx="0" cy="0" r="42"/>
    <circle cx="0" cy="0" r="11"/>
    ${Array.from({length:24},(t,a)=>{const e=a/24*Math.PI*2,s=Math.cos(e)*42,i=Math.sin(e)*42,n=Math.cos(e)*48,r=Math.sin(e)*48;return`<path d="M${s.toFixed(1)} ${i.toFixed(1)} L${n.toFixed(1)} ${r.toFixed(1)}"/>`}).join("")}
    ${Array.from({length:6},(t,a)=>{const e=a/6*Math.PI*2;return`<circle cx="${(Math.cos(e)*24).toFixed(1)}" cy="${(Math.sin(e)*24).toFixed(1)}" r="3"/>`}).join("")}`,carburetor:`
    <rect x="-20" y="-30" width="40" height="46" rx="3"/>
    <rect x="-14" y="-44" width="28" height="14" rx="2"/>
    <rect x="16" y="-14" width="16" height="22" rx="2"/>
    <path d="M-20 -6 H20"/>
    <circle cx="0" cy="-6" r="4"/>
    <path d="M0 16 V28"/>`,sparkplug:`
    <path d="M-7 -36 H7 V-22 H-7 Z"/>
    <path d="M-10 -22 H10 L7 -8 H-7 Z"/>
    <path d="M-12 -8 L-6 -2 H6 L12 -8 M-12 4 L-6 -2 M12 4 L6 -2 M-12 -8 V4 M12 -8 V4 M-12 4 H12"/>
    <path d="M-8 4 H8 V20 H-8 Z"/>
    <path d="M-8 9 H8 M-8 14 H8"/>
    <path d="M0 20 V32 M0 32 H8 V38"/>`};function x(t){return`<svg viewBox="-52 -52 104 104" fill="none" stroke="var(--ink)"
    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
    ${u[t]}</svg>`}c.registerPlugin(p);const d=[{n:1,key:"piston",title:"Showcase & Retail",pos:[332,84],body:"Showcase and retail special vehicles — a rotating floor of machines worth crossing town to stand next to."},{n:2,key:"crankshaft",title:"Workshop",pos:[345,452],body:"Maintain, restore and customise vehicles in an open workshop where the craft is the attraction."},{n:3,key:"camshaft",title:"Academy",pos:[540,205],body:"Host events, workshops, lectures and master-classes that pass the knowledge on, hands first."},{n:4,key:"valve",title:"Community Spaces",pos:[232,150],body:"Cafés and restaurants built for lingering — where a coffee turns into a conversation about carburettors."},{n:5,key:"flywheel",title:"Analogue Culture",pos:[552,402],body:"Anything related to motoring and the analogue culture — vinyl, print, film, mechanical watches, the tactile world."},{n:6,key:"carburetor",title:"Industry Stage",pos:[150,330],body:"Unique events and presentations by industry leaders, staged where the machines actually live."},{n:7,key:"sparkplug",title:"The Club",pos:[470,92],body:"Exclusive receptions for selected groups or clubs — a members’ room behind the workshop doors."}],h=[350,285];function b(){const t=document.getElementById("engine-diagram"),a=document.getElementById("engine-accordion");if(!t||!a)return;t.innerHTML=m(),a.innerHTML=f();const e={index:document.querySelector(".engine__panel-index"),title:document.querySelector(".engine__panel-title"),body:document.querySelector(".engine__panel-body")},s=[...t.querySelectorAll(".engine-part")],i=n=>{const r=d.find(o=>o.n===n);r&&(s.forEach(o=>o.classList.toggle("is-active",+o.dataset.n===n)),e.index.textContent=y[n],e.title.textContent=r.title,e.body.textContent=r.body)};s.forEach(n=>{const r=+n.dataset.n;n.addEventListener("mouseenter",()=>i(r)),n.addEventListener("focus",()=>i(r)),n.addEventListener("click",()=>i(r)),n.addEventListener("keydown",o=>{(o.key==="Enter"||o.key===" ")&&(o.preventDefault(),i(r))})}),i(1),g()||(c.set(s,{opacity:0}),p.create({trigger:t,start:"top 72%",once:!0,onEnter:()=>c.to(s,{opacity:1,duration:.6,stagger:.07,ease:"power2.out"})}))}function m(){return`
    <svg viewBox="0 0 700 560" fill="none" stroke="var(--ink)" stroke-width="1.5"
         stroke-linecap="round" stroke-linejoin="round">
      <!-- faint assembly reference at the centre -->
      <g opacity="0.16" stroke-width="1.2">
        <rect x="300" y="238" width="100" height="96" rx="4"/>
        <path d="M320 238 V214 H380 V238"/>
        <path d="M300 300 H400"/>
      </g>
      ${d.map(a=>{const[e,s]=a.pos;let i=e-h[0],n=s-h[1];const r=Math.hypot(i,n)||1,o=i/r*62,l=n/r*62;return`
    <g transform="translate(${e} ${s})">
      <g class="engine-part" data-n="${a.n}" tabindex="0" role="button"
         aria-label="${a.n}. ${a.title}">
        <line class="leader" x1="0" y1="0" x2="${o.toFixed(1)}" y2="${l.toFixed(1)}"
              stroke="var(--ink)" stroke-width="1"/>
        <g class="part-icon">${u[a.key]}</g>
        <g class="part-num" transform="translate(${o.toFixed(1)} ${l.toFixed(1)})">
          <circle r="13" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.4"/>
          <text y="4.5" text-anchor="middle" font-size="13" font-weight="600"
                fill="var(--ink)" stroke="none" font-family="'Inter Tight',sans-serif">${a.n}</text>
        </g>
      </g>
    </g>`}).join("")}
    </svg>`}function f(){return d.map(t=>`
    <details class="acc-item">
      <summary class="acc-head">
        <span class="acc-head__num">${y[t.n]}</span>
        <span class="acc-head__icon">${x(t.key)}</span>
        <span class="acc-head__title">${t.title}</span>
        <span class="acc-head__chev" aria-hidden="true">+</span>
      </summary>
      <div class="acc-body">${t.body}</div>
    </details>`).join("")}export{d as PILLARS,b as initEngine};
