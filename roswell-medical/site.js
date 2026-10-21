(function(){var r=document.querySelectorAll('.card,.reveal-me,h2');if('IntersectionObserver' in window&&!matchMedia('(prefers-reduced-motion: reduce)').matches){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});r.forEach(function(el){el.classList.add('reveal');io.observe(el)})}
document.querySelectorAll('[data-car]').forEach(function(c){var s=c.querySelectorAll('.slide'),d=c.querySelector('.dots'),p=c.querySelector('.pb'),i=0,t=null,rm=matchMedia('(prefers-reduced-motion: reduce)').matches;
s.forEach(function(_,k){var b=document.createElement('button');b.type='button';b.setAttribute('aria-label','Show slide '+(k+1)+' of '+s.length);b.onclick=function(){go(k);stop()};d.appendChild(b)});
function go(k){i=(k+s.length)%s.length;s.forEach(function(el,j){el.classList.toggle('on',j==i);el.setAttribute('aria-hidden',j!=i);el.querySelectorAll('a').forEach(function(a){a.tabIndex=j==i?0:-1})});d.querySelectorAll('button').forEach(function(b,j){b.setAttribute('aria-current',j==i)})}
function play(){t=setInterval(function(){go(i+1)},6500);p.textContent='Pause';p.setAttribute('aria-label','Pause slideshow')}
function stop(){clearInterval(t);t=null;p.textContent='Play';p.setAttribute('aria-label','Play slideshow')}
p.onclick=function(){t?stop():play()};c.querySelector('.prev').onclick=function(){go(i-1);stop()};c.querySelector('.next').onclick=function(){go(i+1);stop()};
c.addEventListener('focusin',function(){if(t)stop()});go(0);rm?stop():play()})})();
