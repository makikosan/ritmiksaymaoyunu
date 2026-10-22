// Başla: mevcut tıklama olayını değiştirmeyen, hafif nefes ve süzülme animasyonu.
const states=new WeakMap();
function restore(s){Object.assign(s.inst,{x:s.x,y:s.y,width:s.width,height:s.height});}
export function temizle(runtime){const s=states.get(runtime);if(s){restore(s);states.delete(runtime);}}
export function baslat(runtime){
 temizle(runtime);const inst=runtime.objects.basla.getFirstInstance();if(!inst)return;
 states.set(runtime,{inst,x:inst.x,y:inst.y,width:inst.width,height:inst.height,t:0});
}
export function guncelle(runtime){
 const s=states.get(runtime);if(!s)return;
 if(!s.inst.isVisible||!s.inst.layer.isVisible){restore(s);return;}
 s.t+=Math.min(.1,Math.max(0,runtime.dt));const wave=Math.sin(2*Math.PI*s.t/2.8),scale=1+.015*wave;
 const o=s.inst,c=Math.cos(o.angle),a=Math.sin(o.angle),dx=(.5-o.originX)*(s.width*scale-s.width),dy=(.5-o.originY)*(s.height*scale-s.height);
 o.width=s.width*scale;o.height=s.height*scale;o.x=s.x-dx*c+dy*a;o.y=s.y-dx*a-dy*c+3*wave;
}
