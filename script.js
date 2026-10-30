const state={lang:localStorage.getItem('ds_lang')==='es'?'es':'en'};
const translations={};
function setLanguage(lang){state.lang=lang;document.documentElement.lang=lang;document.querySelectorAll('[data-en][data-es]').forEach(el=>{el.textContent=el.dataset[lang]});const btn=document.getElementById('currentLang');if(btn)btn.textContent=lang==='en'?'ES':'EN';localStorage.setItem('ds_lang',lang)}
setLanguage(state.lang);
document.getElementById('langSwitch')?.addEventListener('click',()=>setLanguage(state.lang==='en'?'es':'en'));
const menu=document.getElementById('menuToggle');const nav=document.getElementById('main-nav');
menu?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(open))});
nav?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menu?.setAttribute('aria-expanded','false')}));
if('IntersectionObserver' in window){const obs=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');obs.unobserve(entry.target)}}),{threshold:.09});document.querySelectorAll('.reveal').forEach(el=>obs.observe(el))}else{document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'))}

