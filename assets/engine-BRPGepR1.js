import{g as p,S as m}from"./gsap-CiEuWA-R.js";import{p as k}from"./index-BYRjnALw.js";const L=""+new URL("icon-1-DZZDEk3x.png",import.meta.url).href,R=""+new URL("icon-2-Dzi71nDD.png",import.meta.url).href,C=""+new URL("icon-3-Bgrxyban.png",import.meta.url).href,E=""+new URL("icon-4-JbRFixlB.png",import.meta.url).href,S=""+new URL("icon-5-CDUX_ELl.png",import.meta.url).href,D=""+new URL("icon-6-Dnp-zmk7.png",import.meta.url).href,M=""+new URL("icon-7-CuJoihDo.png",import.meta.url).href,I=""+new URL("icon-8-D8yxLgX1.png",import.meta.url).href,_={1:"①",2:"②",3:"③",4:"④",5:"⑤",6:"⑥",7:"⑦"};p.registerPlugin(m);const g=[{n:1,title:"Showcase & Retail",body:"Showcase and retail special vehicles — a rotating floor of machines worth crossing town to stand next to."},{n:2,title:"Workshop",body:"Maintain, restore and customise vehicles in an open workshop where the craft is the attraction."},{n:3,title:"Academy",body:"Host events, workshops, lectures and master-classes that pass the knowledge on, hands first."},{n:4,title:"Community Spaces",body:"Cafés and restaurants built for lingering — where a coffee turns into a conversation about carburettors."},{n:5,title:"Analogue Culture",body:"Anything related to motoring and the analogue culture — vinyl, print, film, mechanical watches, the tactile world."},{n:6,title:"Industry Stage",body:"Unique events and presentations by industry leaders, staged where the machines actually live."},{n:7,title:"The Club",body:"Exclusive receptions for selected groups or clubs — a members’ room behind the workshop doors."}],n=360,l=250,d=104,u=l+64,U=Object.assign({"../assets/icons/icon-1.png":L,"../assets/icons/icon-2.png":R,"../assets/icons/icon-3.png":C,"../assets/icons/icon-4.png":E,"../assets/icons/icon-5.png":S,"../assets/icons/icon-6.png":D,"../assets/icons/icon-7.png":M,"../assets/icons/icon-8.png":I}),y={};for(const[e,o]of Object.entries(U)){const r=e.match(/icon-(\d+)\.png$/);r&&(y[+r[1]]=o)}const h=e=>y[e];function O(){const e=document.getElementById("engine-diagram"),o=document.getElementById("engine-accordion");if(!e||!o)return;e.innerHTML=A(),o.innerHTML=F();const r={index:document.querySelector(".engine__panel-index"),title:document.querySelector(".engine__panel-title"),body:document.querySelector(".engine__panel-body")},c=[...e.querySelectorAll(".engine-part")],i=t=>{const s=g.find(a=>a.n===t);s&&(c.forEach(a=>a.classList.toggle("is-active",+a.dataset.n===t)),r.index.textContent=_[t],r.title.textContent=s.title,r.body.textContent=s.body)};c.forEach(t=>{const s=+t.dataset.n;t.addEventListener("mouseenter",()=>i(s)),t.addEventListener("focus",()=>i(s)),t.addEventListener("click",()=>i(s)),t.addEventListener("keydown",a=>{(a.key==="Enter"||a.key===" ")&&(a.preventDefault(),i(s))})}),i(1),k()||(p.set(c,{opacity:0}),m.create({trigger:e,start:"top 72%",once:!0,onEnter:()=>p.to(c,{opacity:1,duration:.6,stagger:.08,ease:"power2.out"})}))}function A(){const e=g.map((o,r)=>{const c=(-90+r*(360/g.length))*(Math.PI/180),i=Math.cos(c),t=Math.sin(c),s=n+l*i,a=n+l*t,f=n+120*i,b=n+120*t,x=n+(l-58)*i,v=n+(l-58)*t,w=n+u*i,$=n+u*t;return`
    <g class="engine-part" data-n="${o.n}" tabindex="0" role="button" aria-label="${o.n}. ${o.title}">
      <line class="leader" x1="${f.toFixed(1)}" y1="${b.toFixed(1)}" x2="${x.toFixed(1)}" y2="${v.toFixed(1)}"
            stroke="var(--ink)" stroke-width="1.2"/>
      <image class="part-icon" href="${h(o.n)}" x="${(s-d/2).toFixed(1)}" y="${(a-d/2).toFixed(1)}"
             width="${d}" height="${d}" preserveAspectRatio="xMidYMid meet"/>
      <g class="part-num" transform="translate(${w.toFixed(1)} ${$.toFixed(1)})">
        <circle r="15" fill="var(--paper)" stroke="var(--ink)" stroke-width="1.4"/>
        <text y="5" text-anchor="middle" font-size="14" font-weight="600"
              fill="var(--ink)" font-family="'Inter Tight',sans-serif">${o.n}</text>
      </g>
    </g>`}).join("");return`
    <svg viewBox="0 0 720 720" fill="none">
      <circle cx="${n}" cy="${n}" r="${l}" stroke="var(--line)" stroke-width="1" fill="none" opacity="0.6"/>
      <!-- centre: icon-8 at 50% opacity -->
      <image class="engine-center" href="${h(8)}" x="${n-72}" y="${n-72}" width="144" height="144"
             preserveAspectRatio="xMidYMid meet" opacity="0.5"/>
      ${e}
    </svg>`}function F(){return g.map(e=>`
    <details class="acc-item">
      <summary class="acc-head">
        <span class="acc-head__num">${_[e.n]}</span>
        <span class="acc-head__icon"><img src="${h(e.n)}" alt="" loading="lazy" /></span>
        <span class="acc-head__title">${e.title}</span>
        <span class="acc-head__chev" aria-hidden="true">+</span>
      </summary>
      <div class="acc-body">${e.body}</div>
    </details>`).join("")}export{g as PILLARS,O as initEngine};
