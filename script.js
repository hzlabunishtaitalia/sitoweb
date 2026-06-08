function toggleMenu(){document.querySelector('.links').classList.toggle('open')}
function copyIban(){navigator.clipboard.writeText('IT65Z0200861624000107426851');alert('IBAN copiato')}


function openCallPopup(){const p=document.getElementById('callPopup'); if(p){p.style.display='flex';p.setAttribute('aria-hidden','false')}}
function closeCallPopup(){const p=document.getElementById('callPopup'); if(p){p.style.display='none';p.setAttribute('aria-hidden','true')}}
function openWhatsappPopup(){const p=document.getElementById('whatsappPopup'); if(p){p.style.display='flex';p.setAttribute('aria-hidden','false')}}
function closeWhatsappPopup(){const p=document.getElementById('whatsappPopup'); if(p){p.style.display='none';p.setAttribute('aria-hidden','true')}}
document.addEventListener('click',function(e){if(e.target&&e.target.id==='callPopup')closeCallPopup(); if(e.target&&e.target.id==='whatsappPopup')closeWhatsappPopup()});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeCallPopup();closeWhatsappPopup()}});
