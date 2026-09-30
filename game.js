const C=document.getElementById('c'),ctx=C.getContext('2d');
const menu=document.getElementById('menu'),game=document.getElementById('game'),result=document.getElementById('result');
const lv=document.getElementById('lv'),scoreEl=document.getElementById('score'),title=document.getElementById('title'),obj=document.getElementById('obj'),steps=document.getElementById('steps'),sab=document.getElementById('sab'),timer=document.getElementById('timer');
const hintBtn=document.getElementById('hintBtn'),hintBox=document.getElementById('hintBox'),hintCount=document.getElementById('hintCount'),howModal=document.getElementById('howModal');
const A={};['player','key','exit','wall','spike','laser','enemy','switch','portal','block','mirror','battery','alarm','dark','door'].forEach(n=>{A[n]=new Image();A[n].src='assets/'+n+'.png'});
let n=1,score=Number(localStorage.getItem('eg5score')||0),unlock=Number(localStorage.getItem('eg5unlock')||1),L,px=1,py=1,started=0,done=false,flags={},moves=0,hintsUsed=0,stuckTimer=null;
function show(e){[menu,game,result].forEach(x=>x.classList.add('hide'));e.classList.remove('hide')}
function save(){localStorage.setItem('eg5score',score);localStorage.setItem('eg5unlock',unlock)}
function updateHintUI(){hintCount.textContent='Hints: '+hintsUsed+'/3'}
function armHintTimer(){if(stuckTimer)clearTimeout(stuckTimer);stuckTimer=setTimeout(()=>{if(!done)showHint(true)},45000)}
function showHint(auto=false){
 if(done)return;
 if(hintsUsed>=3){hintBox.innerHTML='<b>💡 All 3 hints used.</b><br>Try another route.';hintBox.classList.remove('hide');return}
 const h=L.hints&&L.hints['hint'+(hintsUsed+1)] ? L.hints['hint'+(hintsUsed+1)] : 'Study the objective and try a different route.';
 hintsUsed++; score=Math.max(0,score-50); scoreEl.textContent=score; save(); updateHintUI();
 hintBox.innerHTML='<b>💡 Hint '+hintsUsed+'</b><br>'+h+(auto?'<br><small>You were stuck for 45 seconds, so a clue appeared.</small>':'');
 hintBox.classList.remove('hide');
}
function start(i){
 n=Math.max(1,Math.min(Number(i)||1,unlock));L=LEVELS[n-1];px=1;py=1;started=performance.now();done=false;moves=0;flags={};hintsUsed=0;
 lv.textContent=n;scoreEl.textContent=score;title.textContent='LEVEL '+n+' — '+L.name;obj.textContent=L.objective;steps.textContent=L.steps;sab.textContent=L.sabotage;
 hintBox.classList.add('hide');hintBox.textContent='';updateHintUI();armHintTimer();show(game);requestAnimationFrame(loop)
}
function at(x,y){return L.grid[y]&&L.grid[y][x] ? L.grid[y][x] : '#'}
function blocked(x,y){const c=at(x,y);return c==='#'||(c==='R'&&!flags.key)}
function sabotage(c){
 if(flags.sab)return;
 if(n%5===0&&c==='S'){flags.sab=true;flags.wallShift=true}
 else if(n%5===1&&c==='K'){flags.sab=true;flags.dark=true}
 else if(n%5===2&&c==='S'){flags.sab=true;flags.hunt=true}
 else if(n%5===3&&c==='K'){flags.sab=true;flags.collapse=true}
 else if(n%5===4&&c==='R'){flags.sab=true;flags.decoy=true}
}
function move(dx,dy){
 if(done)return;const nx=px+dx,ny=py+dy;if(blocked(nx,ny))return;px=nx;py=ny;moves++;armHintTimer();
 const c=at(px,py);
 if(c==='K')flags.key=true;
 if(c==='S')flags.switch=true;
 if(c==='T')return fail('A trap caught you.');
 if(c==='L'&&moves%2===0)return fail('You crossed an active laser.');
 if(c==='E'&&flags.hunt)return fail('The hunter caught you.');
 if(c==='O'){for(let y=1;y<14;y++)for(let x=1;x<14;x++){if(at(x,y)==='O'&&(x!==px||y!==py)){px=x;py=y;return sabotage(c)}}}
 sabotage(c);
 if(c==='G')win();
}
function win(){
 if(done)return;done=true;if(stuckTimer)clearTimeout(stuckTimer);const t=(performance.now()-started)/1000;let pts=Math.max(100,1000+n*35+Math.max(0,Math.floor((100-t)*5))-hintsUsed*50);score+=pts;if(n===unlock&&unlock<100)unlock++;save();
 document.getElementById('rtitle').textContent=n===100?'YOU ESCAPED THE GRID':'LEVEL CLEARED';document.getElementById('rtext').textContent=L.name+' · '+t.toFixed(1)+'s · +'+pts+' points · '+hintsUsed+' hint(s)';document.getElementById('rbtn').textContent=n===100?'RESTART GAME':'NEXT LEVEL';show(result)
}
function fail(msg){if(done)return;done=true;if(stuckTimer)clearTimeout(stuckTimer);document.getElementById('rtitle').textContent='SABOTAGE TRIGGERED';document.getElementById('rtext').textContent=msg+' Retry the level and adapt to its unique sabotage.';document.getElementById('rbtn').textContent='RETRY';show(result)}
function draw(){
 const T=48;ctx.fillStyle='#070b15';ctx.fillRect(0,0,720,720);
 for(let y=0;y<15;y++)for(let x=0;x<15;x++){const c=at(x,y),X=x*T,Y=y*T;ctx.fillStyle=(x+y)%2?'#0d1627':'#0f192b';ctx.fillRect(X,Y,T,T);ctx.strokeStyle='#18263d';ctx.strokeRect(X,Y,T,T);const type={'#':'wall','G':'exit','K':'key','T':'spike','L':'laser','E':'enemy','S':'switch','O':'portal','C':'block','M':'mirror','B':'battery','A':'alarm','D':'dark','R':'door'}[c];if(type&&A[type].complete)ctx.drawImage(A[type],X+3,Y+3,T-6,T-6)}
 if(flags.dark){ctx.fillStyle='rgba(0,0,0,.84)';ctx.fillRect(0,0,720,720);const cx=px*T+24,cy=py*T+24,g=ctx.createRadialGradient(cx,cy,15,cx,cy,130);g.addColorStop(0,'rgba(0,0,0,0)');g.addColorStop(1,'rgba(0,0,0,.95)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(cx,cy,130,0,Math.PI*2);ctx.fill()}
 if(A.player.complete)ctx.drawImage(A.player,px*T+4,py*T+4,T-8,T-8)
}
function loop(){if(done)return;draw();timer.textContent=((performance.now()-started)/1000).toFixed(1);requestAnimationFrame(loop)}
window.addEventListener('keydown',e=>{const k=e.key.toLowerCase();if(['arrowup','arrowdown','arrowleft','arrowright',' '].includes(k))e.preventDefault();if(k==='r'&&!game.classList.contains('hide'))start(n);else if(k==='h'&&!game.classList.contains('hide'))showHint(false);else if(k==='w'||k==='arrowup')move(0,-1);else if(k==='escape')howModal.classList.add('hide');else if(k==='s'||k==='arrowdown')move(0,1);else if(k==='a'||k==='arrowleft')move(-1,0);else if(k==='d'||k==='arrowright')move(1,0)});
document.querySelectorAll('.touch button').forEach(b=>b.addEventListener('click',()=>{const d=b.dataset.m;if(d==='up')move(0,-1);if(d==='down')move(0,1);if(d==='left')move(-1,0);if(d==='right')move(1,0)}));
hintBtn.addEventListener('click',()=>showHint(false));document.getElementById('how').addEventListener('click',()=>howModal.classList.remove('hide'));document.getElementById('howGame').addEventListener('click',()=>howModal.classList.remove('hide'));document.getElementById('closeHow').addEventListener('click',()=>howModal.classList.add('hide'));document.getElementById('closeHow2').addEventListener('click',()=>howModal.classList.add('hide'));document.getElementById('play').addEventListener('click',()=>start(1));document.getElementById('cont').addEventListener('click',()=>start(unlock));document.getElementById('home').addEventListener('click',()=>show(menu));
document.getElementById('rbtn').addEventListener('click',()=>{if(n===100){score=0;unlock=1;save();start(1)}else if(document.getElementById('rbtn').textContent==='RETRY')start(n);else start(n+1)});
scoreEl.textContent=score;show(menu);
