// Sayı doğrusunun güncel konumu, boyutu ve origin'i üzerinden çalışan ortak motor.
// Taşınan her sayı için başlangıç konumu ve boyutu layout açılırken okunur.
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const ease=t=>1-(1-t)**3;
const setXY=(o,x,y)=>{o.x=x;o.y=y;};
function world(o,u,v){
 const dx=(u-o.originX)*o.width,dy=(v-o.originY)*o.height,c=Math.cos(o.angle),s=Math.sin(o.angle);
 return [o.x+dx*c-dy*s,o.y+dx*s+dy*c];
}
function local(o,x,y){
 const dx=x-o.x,dy=y-o.y,c=Math.cos(o.angle),s=Math.sin(o.angle);
 return [(dx*c+dy*s)/o.width+o.originX,(-dx*s+dy*c)/o.height+o.originY];
}
function center(o){return world(o,.5,.5);}
function centerAt(o,x,y){const [cx,cy]=center(o);o.x+=x-cx;o.y+=y-cy;}
function pointer(o,e){return o.layer.cssPxToLayer(e.clientX,e.clientY);}
function contains(o,e){
 const [x,y]=pointer(o,e),[u,v]=local(o,x,y);
 return Math.abs(u-.5)<=Math.max(.5,36/Math.abs(o.width))&&Math.abs(v-.5)<=Math.max(.5,42/Math.abs(o.height));
}
function cellPosition(s,cell,ball=false){return world(s.board,cell.u,ball?(cell.feedbackV??s.config.ballV??cell.v-cell.h*.7):cell.v);}
function restoreSize(p){p.inst.width=p.width;p.inst.height=p.height;}
function fitSize(s,p,cell){
 const scale=Math.min(1,Math.abs(s.board.width)*cell.w*.88/Math.max(p.width,...p.companions.map(c=>c.width)),Math.abs(s.board.height)*cell.h*.88/Math.max(p.height,...p.companions.map(c=>c.height)));
 p.inst.width=p.width*scale;p.inst.height=p.height*scale;
}
function snap(s,p,cell){
 p.cell=cell;
 if(cell){cell.part=p;fitSize(s,p,cell);centerAt(p.inst,...cellPosition(s,cell));}
 else{restoreSize(p);setXY(p.inst,...p.home);}
}
function fx(s,type,x,y,size,life,vx=0,vy=0,g=0,spin=0){
 const inst=s.runtime.objects[type].createInstance('Cevap Efektleri',x,y);
 inst.isVisible=true;inst.opacity=1;inst.width=inst.height=size;
 s.effects.push({inst,x,y,size,life,vx,vy,g,spin,age:0});
}
function burst(s,x,y){
 fx(s,'cevap_yildizi',x,y,54,.95,(Math.random()-.5)*85,-185,-35,2);
 for(let i=0;i<6;i++){const a=2*Math.PI*i/6;fx(s,'cevap_yildizi',x,y,13+Math.random()*9,.55,Math.cos(a)*105,Math.sin(a)*105-60,0,3);}
}
function celebrate(s){
 s.won=true;
 for(let i=0;i<100;i++)s.pending.push({at:s.time+Math.random()*1.8,size:22+Math.random()*36});
}
// Nötr seçim işareti: kontrol edilene kadar doğruluk rengini göstermez.
function updateChoiceMarker(s){
 const marker=s.choiceMarker;if(!marker)return;
 marker.isVisible=s.selected>=0&&!s.won&&!s.resetChoice&&s.busy===0;
 if(!marker.isVisible)return;
 const o=s.options[s.selected].inst;
 setXY(marker,...center(o));marker.width=Math.abs(o.width)*1.14;marker.height=Math.abs(o.height)*1.14;marker.angle=o.angle;marker.opacity=1;
}
function down(s,e){
 if(s.busy>0||s.won||e.button>0||s.drags.has(e.pointerId)||s.runtime.layout.name!==s.config.layout)return;
 if(s.config.mode==='choice'){
  const index=s.options.findIndex(p=>contains(p.inst,e));
  if(index<0)return;
  s.selected=index;
  s.options.forEach((p,i)=>{p.inst.animationFrame=0;p.inst.width=p.width*(s.selected===i?1.08:1);p.inst.height=p.height*(s.selected===i?1.08:1);p.inst.opacity=1;});
  updateChoiceMarker(s);
  return;
 }
 for(const p of [...s.parts].reverse()){
  if(p.dragging||!contains(p.inst,e))continue;
  const [x,y]=pointer(p.inst,e),old=p.cell;
  if(old)old.part=null;
  p.cell=null;p.dragging=true;
  // Kutuya sığması için küçülmüşse sürüklemede kendi boyutuna geri dönsün.
  const [cx,cy]=center(p.inst);restoreSize(p);centerAt(p.inst,cx,cy);
  s.drags.set(e.pointerId,{p,old,dx:p.inst.x-x,dy:p.inst.y-y});p.inst.moveToTop();break;
 }
}
function move(s,e){const d=s.drags.get(e.pointerId);if(!d)return;const [x,y]=pointer(d.p.inst,e);setXY(d.p.inst,x+d.dx,y+d.dy);}
function up(s,e,cancel=false){
 const d=s.drags.get(e.pointerId);if(!d)return;
 if(!cancel)move(s,e);
 s.drags.delete(e.pointerId);d.p.dragging=false;
 if(cancel){snap(s,d.p,d.old&&!d.old.part?d.old:null);return;}
 const [u,v]=local(s.board,...center(d.p.inst));
 const distance=c=>((u-c.u)/c.w)**2+((v-c.v)/c.h)**2;
 const target=[...s.cells].sort((a,b)=>distance(a)-distance(b))[0];
 if(target&&!target.fixed&&!target.part&&Math.abs(u-target.u)<=target.w/2+.006&&Math.abs(v-target.v)<=target.h/2+.018)snap(s,d.p,target);
 else snap(s,d.p,d.old&&!d.old.part?d.old:null);
}
function updateFx(s,dt){
 for(let i=s.pending.length-1;i>=0;i--){
  const p=s.pending[i];if(p.at>s.time)continue;
  fx(s,'cevap_yildizi',70+Math.random()*(s.runtime.layout.width-140),s.runtime.layout.height+Math.random()*100,p.size,2.3+Math.random()*.7,(Math.random()-.5)*260,-450-Math.random()*340,135,(Math.random()-.5)*5);
  s.pending.splice(i,1);
 }
 // Tüm kutlama yıldızları yayıldığı anda buton geçişinin bekleme süresi başlar.
 if(s.won&&s.celebrationDoneAt===null&&s.pending.length===0)s.celebrationDoneAt=s.time;
 for(let i=s.effects.length-1;i>=0;i--){
  const f=s.effects[i];f.age+=dt;
  if(f.age>=f.life){f.inst.destroy();s.effects.splice(i,1);continue;}
  setXY(f.inst,f.x+f.vx*f.age,f.y+f.vy*f.age+.5*f.g*f.age*f.age);f.inst.angle=f.spin*f.age;
  const t=f.age/f.life,scale=Math.min(1,f.age/.12)*(1+.12*Math.sin(Math.PI*t));
  f.inst.width=f.inst.height=f.size*scale;f.inst.opacity=clamp((1-t)/.3,0,1);
 }
}
// Kontrol butonunun güncel transformu hedef olarak alınır.
function buttonTransform(o){return {x:o.x,y:o.y,width:o.width,height:o.height,angle:o.angle,opacity:o.opacity,isVisible:o.isVisible};}
function setupButtons(s){
 const controls=s.runtime.objects.kontrolet?.getAllInstances()??[];
 const forwards=s.runtime.objects.ileri?.getAllInstances()??[];
 s.buttons=[];
 controls.forEach((control,index)=>{
  const forward=forwards[index];if(!forward)return;
  const target=buttonTransform(control),originalForward=buttonTransform(forward);
  Object.assign(forward,target,{isVisible:false,opacity:0});
  s.buttons.push({control,forward,target,originalForward});
 });
}
function updateButtons(s){
 if(!s.won||s.celebrationDoneAt===null)return;
 // Son yıldız yayılımından sonra tam 1 saniye bekle.
 const elapsed=s.time-s.celebrationDoneAt-1;
 if(elapsed<0)return;
 for(const b of s.buttons){
  const t=b.target,offY=s.runtime.layout.height+Math.abs(t.height)*1.5+40;
  const exit=clamp(elapsed/.55,0,1);
  b.control.x=t.x;b.control.y=t.y+(offY-t.y)*exit**3;
  b.control.isVisible=exit<1;
  if(exit<1)continue;
  const enter=clamp((elapsed-.55)/.65,0,1);
  const back=1+2.70158*(enter-1)**3+1.70158*(enter-1)**2;
  b.forward.isVisible=true;b.forward.x=t.x;
  b.forward.y=offY+(t.y-offY)*back;
  b.forward.width=t.width*(.82+.18*back);b.forward.height=t.height*(.82+.18*back);
  b.forward.angle=t.angle-.10*(1-enter);b.forward.opacity=clamp(enter/.45,0,1);
  if(enter===1)Object.assign(b.forward,t,{isVisible:true,opacity:1});
 }
}
export function soruOlustur(config){
 const states=new WeakMap();
 function temizle(runtime){
  const s=states.get(runtime);if(!s)return;
  for(const [name,fn]of Object.entries(s.handlers))runtime.removeEventListener(name,fn);
  for(const f of s.effects)f.inst.destroy();
  if(s.choiceMarker)s.choiceMarker.destroy();
  for(const p of s.parts){restoreSize(p);setXY(p.inst,...p.home);for(const c of p.companions){c.inst.width=c.width;c.inst.height=c.height;setXY(c.inst,...c.home);}}
  for(const p of s.options){p.inst.animationFrame=0;p.inst.width=p.width;p.inst.height=p.height;p.inst.opacity=1;}
  for(const b of s.buttons){Object.assign(b.control,b.target);Object.assign(b.forward,b.originalForward);}
  states.delete(runtime);
 }
 function baslat(runtime){
  temizle(runtime);
  if(runtime.layout.name!==config.layout)return;
  const s={runtime,config,board:null,choiceMarker:null,parts:[],cells:[],options:[],selected:-1,drags:new Map(),effects:[],returns:[],pending:[],busy:0,time:0,won:false,celebrationDoneAt:null,buttons:[],handlers:{}};
  setupButtons(s);
  if(config.mode==='choice'){
   for(const name of config.options){const inst=runtime.objects[name].getFirstInstance();inst.animationSpeed=0;inst.animationFrame=0;s.options.push({inst,width:inst.width,height:inst.height});}
   if(runtime.objects.secim_isareti){
    for(const inst of runtime.objects.secim_isareti.getAllInstances())inst.destroy();
    s.choiceMarker=runtime.objects.secim_isareti.createInstance('Cevap Efektleri',-1000,-1000);s.choiceMarker.isVisible=false;
   }
  }else{
   s.board=runtime.objects[config.board].getFirstInstance();
   if(!s.board)throw new Error(config.layout+': sayı doğrusu bulunamadı');
   s.cells=config.cells.map(c=>({...c,fixed:false,part:null}));
   const seen=new Set();
   for(const entry of config.numbers){
    const name=typeof entry==='string'?entry:entry.name;
    const value=typeof entry==='string'?Number(name.match(/\d+$/)?.[0]):entry.value;
    if(!Number.isFinite(value))throw new Error(config.layout+': sayı değeri eksik: '+name);
    for(const inst of runtime.objects[name].getAllInstances()){
     if(seen.has(inst))continue;seen.add(inst);
     const [u,v]=local(s.board,...center(inst));
     const cell=s.cells.find(c=>Math.abs(u-c.u)<=c.w/2&&Math.abs(v-c.v)<=c.h/2);
     if(cell){cell.fixed=true;continue;}
     const companions=[];
     if(typeof entry==='object'&&entry.companion){
      const companion=runtime.objects[entry.companion.type].getAllInstances().find(o=>o.uid===entry.companion.uid);
      if(companion)companions.push({inst:companion,home:[companion.x,companion.y],width:companion.width,height:companion.height});
     }
     s.parts.push({inst,value,home:[inst.x,inst.y],width:inst.width,height:inst.height,cell:null,dragging:false,companions});
    }
   }
  }
  for(const name of ['cevap_yildizi','yanlis_carpi'])for(const inst of runtime.objects[name].getAllInstances())inst.destroy();
  s.handlers.pointerdown=e=>down(s,e);s.handlers.pointermove=e=>move(s,e);s.handlers.pointerup=e=>up(s,e);s.handlers.pointercancel=e=>up(s,e,true);
  s.handlers.suspend=()=>{for(const id of [...s.drags.keys()])up(s,{pointerId:id},true);};
  for(const [name,fn]of Object.entries(s.handlers))runtime.addEventListener(name,fn);
  states.set(runtime,s);
 }
 function kontrolEt(runtime){
  const s=states.get(runtime);if(!s||s.busy>0||s.won||s.drags.size)return;
  if(config.mode==='choice'){
   if(s.selected<0)return;
   const p=s.options[s.selected],correct=s.selected===config.correct;
   p.inst.animationFrame=config.feedbackFrames===false?0:1;p.inst.width=p.width;p.inst.height=p.height;
   if(s.choiceMarker)s.choiceMarker.isVisible=false;
   const [x,y]=center(p.inst);
   if(correct){burst(s,x,y);runtime.globalVars.RitmikDogruSesBekliyor=1;celebrate(s);s.busy=4;}
   else{fx(s,'yanlis_carpi',x,y-p.height*.7,36,1.18);s.busy=1.3;s.resetChoice=true;}
   return;
  }
  let correct=0,wrong=0;
  for(const p of s.parts){
   if(!p.cell)continue;
   if(p.value===p.cell.value){correct++;burst(s,...cellPosition(s,p.cell));}
   else{wrong++;fx(s,'yanlis_carpi',...cellPosition(s,p.cell,true),36,1.18);s.returns.push({p,age:0,x:p.inst.x,y:p.inst.y,width:p.inst.width,height:p.inst.height});}
  }
  if(correct>0)runtime.globalVars.RitmikDogruSesBekliyor=1;
  const needed=s.cells.filter(c=>!c.fixed).length;
  if(needed>0&&correct===needed){celebrate(s);s.busy=4;}
  else if(wrong)s.busy=1.3;
  else if(correct)s.busy=.95;
 }
 function guncelle(runtime){
  const s=states.get(runtime);if(!s)return;
  const dt=clamp(runtime.dt,0,.1);s.time+=dt;s.busy=Math.max(0,s.busy-dt);
  if(s.resetChoice&&s.busy===0){s.resetChoice=false;s.selected=-1;for(const p of s.options){p.inst.animationFrame=0;p.inst.width=p.width;p.inst.height=p.height;p.inst.opacity=1;}}
  for(let i=s.returns.length-1;i>=0;i--){
   const r=s.returns[i];r.age+=dt;if(r.age<.72)continue;
   const t=clamp((r.age-.72)/.44,0,1),k=ease(t);
   setXY(r.p.inst,r.x+(r.p.home[0]-r.x)*k,r.y+(r.p.home[1]-r.y)*k);
   r.p.inst.width=r.width+(r.p.width-r.width)*k;r.p.inst.height=r.height+(r.p.height-r.height)*k;
   if(t===1){if(r.p.cell)r.p.cell.part=null;r.p.cell=null;s.returns.splice(i,1);}
  }
  // Layouttaki sayı doğrusu oyun sırasında hareket ettirilirse yerleşmiş sayılar onu izler.
  for(const p of s.parts)if(p.cell&&!p.dragging&&!s.returns.some(r=>r.p===p)){fitSize(s,p,p.cell);centerAt(p.inst,...cellPosition(s,p.cell));}
  for(const p of s.parts){
   const active=p.dragging||p.cell||s.returns.some(r=>r.p===p);
   for(const c of p.companions){
    if(active){const scale=p.inst.width/p.width;c.inst.width=c.width*scale;c.inst.height=c.height*scale;centerAt(c.inst,...center(p.inst));}
    else{c.inst.width=c.width;c.inst.height=c.height;setXY(c.inst,...c.home);}
   }
  }
  updateFx(s,dt);
  updateButtons(s);
  if(config.mode==='choice')updateChoiceMarker(s);
 }
 return{baslat,guncelle,kontrolEt,temizle};
}
