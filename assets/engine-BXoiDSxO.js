import{g as u,S as p}from"./gsap-CiEuWA-R.js";import{p as k}from"./index-0d3rafmd.js";const m={1:"①",2:"②",3:"③",4:"④",5:"⑤",6:"⑥",7:"⑦"};u.registerPlugin(p);const h=[{n:1,title:"Showcase & Retail",body:"Showcase and retail special vehicles — a rotating floor of machines worth crossing town to stand next to."},{n:2,title:"Workshop",body:"Maintain, restore and customise vehicles in an open workshop where the craft is the attraction."},{n:3,title:"Academy",body:"Host events, workshops, lectures and master-classes that pass the knowledge on, hands first."},{n:4,title:"Community Spaces",body:"Cafés and restaurants built for lingering — where a coffee turns into a conversation about carburettors."},{n:5,title:"Analogue Culture",body:"Anything related to motoring and the analogue culture — vinyl, print, film, mechanical watches, the tactile world."},{n:6,title:"Industry Stage",body:"Unique events and presentations by industry leaders, staged where the machines actually live."},{n:7,title:"The Club",body:"Exclusive receptions for selected groups or clubs — a members’ room behind the workshop doors."}],n=360,c=250,d=104,y=c+64,g=t=>`assets/photos/icon-${t}.png`;function M(){const t=document.getElementById("engine-diagram"),s=document.getElementById("engine-accordion");if(!t||!s)return;t.innerHTML=_(),s.innerHTML=C();const l={index:document.querySelector(".engine__panel-index"),title:document.querySelector(".engine__panel-title"),body:document.querySelector(".engine__panel-body")},r=[...t.querySelectorAll(".engine-part")],a=e=>{const o=h.find(i=>i.n===e);o&&(r.forEach(i=>i.classList.toggle("is-active",+i.dataset.n===e)),l.index.textContent=m[e],l.title.textContent=o.title,l.body.textContent=o.body)};r.forEach(e=>{const o=+e.dataset.n;e.addEventListener("mouseenter",()=>a(o)),e.addEventListener("focus",()=>a(o)),e.addEventListener("click",()=>a(o)),e.addEventListener("keydown",i=>{(i.key==="Enter"||i.key===" ")&&(i.preventDefault(),a(o))})}),a(1),k()||(u.set(r,{opacity:0}),p.create({trigger:t,start:"top 72%",once:!0,onEnter:()=>u.to(r,{opacity:1,duration:.6,stagger:.08,ease:"power2.out"})}))}function _(){const t=h.map((s,l)=>{const r=(-90+l*(360/h.length))*(Math.PI/180),a=Math.cos(r),e=Math.sin(r),o=n+c*a,i=n+c*e,f=n+120*a,x=n+120*e,b=n+(c-58)*a,v=n+(c-58)*e,$=n+y*a,w=n+y*e;return`
    <g class="engine-part" data-n="${s.n}" tabindex="0" role="button" aria-label="${s.n}. ${s.title}">
      <line class="leader" x1="${f.toFixed(1)}" y1="${x.toFixed(1)}" x2="${b.toFixed(1)}" y2="${v.toFixed(1)}"
            stroke="var(--ink)" stroke-width="1.2"/>
      <image class="part-icon" href="${g(s.n)}" x="${(o-d/2).toFixed(1)}" y="${(i-d/2).toFixed(1)}"
             width="${d}" height="${d}" preserveAspectRatio="xMidYMid meet"/>
      <g class="part-num" transform="translate(${$.toFixed(1)} ${w.toFixed(1)})">
        <circle r="15" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.4"/>
        <text y="5" text-anchor="middle" font-size="14" font-weight="600"
              fill="var(--ink)" font-family="'Inter Tight',sans-serif">${s.n}</text>
      </g>
    </g>`}).join("");return`
    <svg viewBox="0 0 720 720" fill="none">
      <circle cx="${n}" cy="${n}" r="${c}" stroke="var(--line)" stroke-width="1" fill="none" opacity="0.6"/>
      <!-- centre: icon-8 at 50% opacity -->
      <image class="engine-center" href="${g(8)}" x="${n-120}" y="${n-120}" width="240" height="240"
             preserveAspectRatio="xMidYMid meet" opacity="0.5"/>
      ${t}
    </svg>`}function C(){return h.map(t=>`
    <details class="acc-item">
      <summary class="acc-head">
        <span class="acc-head__num">${m[t.n]}</span>
        <span class="acc-head__icon"><img src="${g(t.n)}" alt="" loading="lazy" /></span>
        <span class="acc-head__title">${t.title}</span>
        <span class="acc-head__chev" aria-hidden="true">+</span>
      </summary>
      <div class="acc-body">${t.body}</div>
    </details>`).join("")}export{h as PILLARS,M as initEngine};
