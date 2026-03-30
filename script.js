// ─── 100 Compliments ─────────────────────────────────────
const compliments = [
  // Original & refined
  "You have the kindest soul nobody truly deserves.",
  "Your smile can light up every darkness that exists.",
  "You are pure sunshine on a cloudy day.",
  "You're the kind of person people write poetry about.",
  "You make ordinary moments feel extraordinary.",
  "You bring warmth wherever you go.",
  "You are effortlessly graceful.",
  "You have the most calming presence.",
  "Your modesty makes you glow the most.",
  "The way you care is truly rare.",
  "You make 'being kind' look easy.",
  "You're more lovely than the word 'lovely' itself.",
  "You handle everything with such grace and softness.",
  "You inspire calm in the middle of chaos.",
  "You have a voice that soothes storms.",
  "You listen like you truly hear people.",
  "You are the definition of soft strength.",
  "You are elegance in human form.",
  "Your sincerity is like poetry.",
  "You make silence feel beautiful.",
  "You make the world a little softer just by existing.",
  "You are the first page of everyone's favourite book.",
  "You radiate a kindness that makes people believe again.",
  "You are what healing would look like if it had a face.",
  "You're the reason some people still believe in good.",
  "You are the gentle reminder the world needs.",
  "You carry a grace not taught, but born from love.",
  "Your voice is the kind that echoes in people's minds long after.",
  "You're a safe place in a very noisy world.",
  "You are moonlight wrapped in human form.",
  "You're not just kind — you're kindness itself.",
  "No star can outshine the spark of your eyes.",
  "You are the sun — a necessity, not a luxury.",
  "You shine in ways words can't quite hold.",
  "You wear humility, peace, and kindness like a crown.",
  "You are a masterpiece no artist could ever capture.",
  "Your voice is sweeter than all the sweetness in the world combined.",
  "Your silence is more special than the quiet of early morning.",
  "You see the good when others forget to look.",
  "Everything you touch turns golden.",
  "You are the very definition of a wonderful human being.",
  "You are the rare kind of beautiful that only deepens with time.",
  "You are deeper than all the ocean's depth.",
  "No algorithm could ever understand you — you're beyond calculation.",
  "No one can match the beauty you carry inside and out.",
  // New compliments
  "You have a way of making people feel seen without even trying.",
  "You are the calm everyone searches for but rarely finds.",
  "Your presence alone is a form of kindness.",
  "You carry warmth in your words that lingers for days.",
  "You are the kind of rare that makes people grateful to know you.",
  "There is something eternal in the way you love.",
  "You are someone the universe took extra time to create.",
  "Your gentleness is not weakness — it is the rarest strength.",
  "You are someone whose memory makes people smile.",
  "Even your smallest gestures carry the weight of real love.",
  "You make people feel like they matter — and that is everything.",
  "The world is measurably better because you are in it.",
  "You are the answer to questions people didn't know they had.",
  "You hold more light than you will ever see in a mirror.",
  "You are not just good — you are the kind of good that restores faith.",
  "Your laugh is the sound the world needs more of.",
  "You have a soul the depth of which cannot be measured.",
  "You are everything soft and strong at once.",
  "Your care for others is one of the finest things about you.",
  "You exist in a league of your own — quietly, beautifully.",
  "The way you carry yourself tells a story of dignity and grace.",
  "You are someone people describe as 'the good one' in every room.",
  "You are made of the kind of stuff that stories remember.",
  "You are the friend everyone hopes to one day find.",
  "You love deeply, and that is your most beautiful quality.",
  "Your honesty is a gift so rare most people don't recognise it.",
  "You have the kind of beauty that time only improves.",
  "You are proof that being gentle is the bravest thing.",
  "You are the kind of soul that leaves rooms feeling lighter.",
  "You have a heart that gives without keeping score.",
  "You are more than enough — in every possible way.",
  "Your loyalty is something people carry like treasure.",
  "You speak with care in a world that forgets to.",
  "You are a living reminder that kindness is power.",
  "You have the ability to make ordinary days feel like gifts.",
  "You are someone worth knowing deeply.",
  "Your thoughtfulness is extraordinary in the most ordinary moments.",
  "You bring a kind of peace that money cannot buy and time cannot teach.",
  "You are genuinely one of the good ones.",
  "There is magic in the way you notice things others miss.",
  "Your soul must have been made on a very good day.",
  "You are the reason certain people believe they deserve kindness.",
  "You are quietly one of the most remarkable people alive.",
  "The stars themselves are a little envious of your glow.",
  "You are what tenderness would look like if it took human form.",
  "You are the morning feeling — soft, hopeful, and golden.",
  "You are the kind of beautiful that has nothing to do with mirrors.",
  "Your kindness has changed more lives than you will ever know.",
  "You are someone whose existence is genuinely a blessing.",
  "You are a whole universe in one person — boundless and breathtaking.",
  "You are the reminder that something truly lovely still exists in this world.",
  "You are living proof that grace is a real thing.",
  "Even the way you disagree is kind.",
  "You have a gift for making people feel at home.",
  "You are rare in all the best ways.",
];

let lastIndex = -1;
let clickCount = 0;

function showCompliment() {
  const el = document.getElementById('compliment');

  // Fade out
  el.classList.remove('pop');
  el.classList.add('hidden');
  el.classList.remove('compliment-placeholder');

  setTimeout(() => {
    // Pick a different compliment each time
    let idx;
    do { idx = Math.floor(Math.random() * compliments.length); }
    while (idx === lastIndex && compliments.length > 1);
    lastIndex = idx;

    el.textContent = compliments[idx];
    el.classList.remove('hidden');
    el.classList.add('pop');

    // Tiny sparkle burst on button
    spawnSparkles();
  }, 310);
}

// ─── Particle / starfield canvas ──────────────────────────
(function() {
  const c = document.getElementById('particles');
  const ctx = c.getContext('2d');
  let stars = [], sparkles = [], shooters = [];

  function resize() {
    c.width  = window.innerWidth;
    c.height = window.innerHeight;
    stars = Array.from({length: 260}, () => ({
      x: Math.random() * c.width,
      y: Math.random() * c.height,
      r: Math.random() < 0.12 ? Math.random()*1.2+1.1
       : Math.random() < 0.4  ? Math.random()*0.6+0.6
       : Math.random()*0.35+0.1,
      phase: Math.random() * Math.PI * 2,
      speed: 0.002 + Math.random() * 0.007,
      col: Math.random()<0.14 ? '255,220,170'
         : Math.random()<0.1  ? '180,205,255'
         : '245,215,232'
    }));
    sparkles = Array.from({length:16}, () => ({
      x: Math.random()*c.width, y: Math.random()*c.height,
      size: Math.random()*3.5+2.5,
      phase: Math.random()*Math.PI*2, speed:0.004+Math.random()*0.006
    }));
  }

  function spawnShooter() {
    shooters.push({
      x: Math.random()*c.width*0.75, y: Math.random()*c.height*0.38,
      len: 75+Math.random()*85, speed:5+Math.random()*5,
      angle: Math.PI/5+Math.random()*0.35, alpha:1, progress:0
    });
  }
  setInterval(()=>{ if(Math.random()<0.6) spawnShooter(); }, 2600);

  function drawSparkle(ctx,x,y,size,a){
    ctx.save(); ctx.globalAlpha=a;
    ctx.strokeStyle=`rgba(255,228,160,${a})`; ctx.lineWidth=0.7;
    ctx.beginPath();
    ctx.moveTo(x-size,y); ctx.lineTo(x+size,y);
    ctx.moveTo(x,y-size); ctx.lineTo(x,y+size);
    const d=size*0.45;
    ctx.moveTo(x-d,y-d); ctx.lineTo(x+d,y+d);
    ctx.moveTo(x+d,y-d); ctx.lineTo(x-d,y+d);
    ctx.stroke();
    ctx.beginPath(); ctx.arc(x,y,size*0.16,0,Math.PI*2);
    ctx.fillStyle=`rgba(255,248,205,${a})`; ctx.fill();
    ctx.restore();
  }

  function draw(t) {
    ctx.clearRect(0,0,c.width,c.height);

    // Nebula glows
    [
      {x:c.width*.70,y:c.height*.16,r:c.width*.22,c1:'rgba(120,50,160,0.055)',c2:'rgba(180,70,130,0.018)'},
      {x:c.width*.22,y:c.height*.68,r:c.width*.18,c1:'rgba(55,35,140,0.05)', c2:'rgba(100,55,150,0.014)'},
      {x:c.width*.52,y:c.height*.44,r:c.width*.27,c1:'rgba(90,28,115,0.04)', c2:'rgba(140,65,95,0.01)'}
    ].forEach(n=>{
      const g=ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r);
      g.addColorStop(0,n.c1); g.addColorStop(1,n.c2);
      ctx.beginPath(); ctx.arc(n.x,n.y,n.r,0,Math.PI*2);
      ctx.fillStyle=g; ctx.fill();
    });

    // Stars
    stars.forEach(s=>{
      const a=0.18+0.72*Math.sin(s.phase+t*s.speed);
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(${s.col},${a})`; ctx.fill();
    });

    // Sparkles
    sparkles.forEach(s=>{
      const a=0.1+0.8*Math.abs(Math.sin(s.phase+t*s.speed));
      drawSparkle(ctx,s.x,s.y,s.size,a);
    });

    // Shooting stars
    for(let i=shooters.length-1;i>=0;i--){
      const s=shooters[i];
      s.progress+=s.speed;
      const px=s.x+Math.cos(s.angle)*s.progress;
      const py=s.y+Math.sin(s.angle)*s.progress;
      const tx=px-Math.cos(s.angle)*s.len, ty=py-Math.sin(s.angle)*s.len;
      s.alpha=Math.max(0,1-s.progress/(s.len*2.4));
      if(s.alpha<=0||px>c.width+60||py>c.height+60){shooters.splice(i,1);continue;}
      const gr=ctx.createLinearGradient(tx,ty,px,py);
      gr.addColorStop(0,`rgba(255,248,215,0)`);
      gr.addColorStop(0.6,`rgba(255,238,170,${s.alpha*0.5})`);
      gr.addColorStop(1,`rgba(255,255,235,${s.alpha})`);
      ctx.beginPath(); ctx.moveTo(tx,ty); ctx.lineTo(px,py);
      ctx.strokeStyle=gr; ctx.lineWidth=1.3; ctx.stroke();
      ctx.beginPath(); ctx.arc(px,py,1.4,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,255,215,${s.alpha})`; ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  window.addEventListener('resize', resize);
  resize();
  requestAnimationFrame(draw);
})();

// ─── Floating petals ──────────────────────────────────────
(function(){
  const cols=['#f9a8d4','#e879f9','#c084fc','#fda4af','#fbbf24','#f0abfc','#e8a4b8'];
  for(let i=0;i<24;i++){
    const p=document.createElement('div');
    p.className='petal';
    p.style.cssText=`
      left:${Math.random()*100}%;
      width:${5+Math.random()*7}px; height:${5+Math.random()*7}px;
      background:${cols[Math.floor(Math.random()*cols.length)]};
      animation-duration:${9+Math.random()*12}s;
      animation-delay:${Math.random()*14}s; top:-20px;`;
    document.body.appendChild(p);
  }
})();

// ─── Button sparkle burst ──────────────────────────────────
function spawnSparkles(){
  const btn = document.querySelector('.jar-btn');
  const rect = btn.getBoundingClientRect();
  const cx = rect.left + rect.width/2;
  const cy = rect.top + rect.height/2;
  for(let i=0;i<8;i++){
    const s=document.createElement('div');
    const angle=Math.random()*Math.PI*2;
    const dist=40+Math.random()*50;
    const size=4+Math.random()*5;
    s.style.cssText=`
      position:fixed; z-index:999; pointer-events:none;
      left:${cx}px; top:${cy}px;
      width:${size}px; height:${size}px;
      border-radius:50%;
      background:rgba(245,215,100,0.9);
      transform:translate(-50%,-50%);
      transition:all 0.55s ease-out;
      opacity:1;`;
    document.body.appendChild(s);
    requestAnimationFrame(()=>{
      s.style.left = cx + Math.cos(angle)*dist + 'px';
      s.style.top  = cy + Math.sin(angle)*dist + 'px';
      s.style.opacity = '0';
      s.style.transform = 'translate(-50%,-50%) scale(0.2)';
    });
    setTimeout(()=>s.remove(), 580);
  }
}
