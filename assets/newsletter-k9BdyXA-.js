import{p as a}from"./index-BM1xTxxd.js";const c=/^[^\s@]+@[^\s@]+\.[^\s@]+$/,l="/api/subscribe";function p(){const t=document.getElementById("subscribe-form");if(!t)return;const s=document.getElementById("email"),e=document.getElementById("plate-msg"),n=t,o=document.getElementById("plate-stamp");o.innerHTML=m(),t.addEventListener("submit",async r=>{r.preventDefault();const i=s.value.trim();if(!c.test(i)){s.classList.add("is-invalid"),e.textContent="That address needs a second look.",e.classList.add("is-error"),s.focus();return}s.classList.remove("is-invalid"),e.classList.remove("is-error"),await d(i),n.classList.add("is-stamped"),a()||(document.body.classList.add("is-shaking"),setTimeout(()=>document.body.classList.remove("is-shaking"),450)),e.textContent="Welcome to the garage. We’ll be in touch."})}async function d(t,s){try{const e=await fetch(l,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:t})});if(!e.ok)throw new Error(`HTTP ${e.status}`)}catch{const n=JSON.parse(localStorage.getItem("cg-subscribers")||"[]");n.includes(t)||(n.push(t),localStorage.setItem("cg-subscribers",JSON.stringify(n))),console.warn(`[Continental Garage] TODO: newsletter endpoint not wired up. Stored "${t}" in localStorage["cg-subscribers"]. Set SUBSCRIBE_ENDPOINT in src/js/newsletter.js to your Mailchimp/Brevo endpoint.`)}}function m(){return`
    <svg viewBox="0 0 200 200" fill="none" aria-hidden="true">
      <g stroke="#B4443C" stroke-width="3" fill="none">
        <circle cx="100" cy="100" r="92"/>
        <circle cx="100" cy="100" r="78"/>
      </g>
      <path id="stamp-top" d="M 100 100 m -60 0 a 60 60 0 0 1 120 0" fill="none"/>
      <path id="stamp-bot" d="M 100 100 m 60 0 a 60 60 0 0 1 -120 0" fill="none"/>
      <text fill="#B4443C" font-family="'Inter Tight',sans-serif" font-weight="600"
            font-size="15" letter-spacing="2.5">
        <textPath href="#stamp-top" startOffset="50%" text-anchor="middle">CONTINENTAL GARAGE</textPath>
      </text>
      <text fill="#B4443C" font-family="'Inter Tight',sans-serif" font-weight="600"
            font-size="13" letter-spacing="3">
        <textPath href="#stamp-bot" startOffset="50%" text-anchor="middle">FOUNDING FRIEND</textPath>
      </text>
      <g stroke="#B4443C" stroke-width="2.5" fill="none" stroke-linecap="round">
        <circle cx="100" cy="100" r="30"/>
        <path d="M85 100 h30 M100 85 v30" opacity="0.9"/>
      </g>
    </svg>`}export{p as initNewsletter};
