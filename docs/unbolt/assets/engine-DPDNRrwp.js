import{_ as e,a as t,b as n,d as r,f as i,g as a,h as o,i as s,l as c,n as l,o as u,p as d,r as f,s as p,u as m,y as h}from"./api-Djuf3ayO.js";import"./index-CHsoH2tp.js";import{a as g,c as _,l as v,o as y,s as b}from"./levels-Bn7lDnnD.js";var x=[`fixed`,`turning`,`flying`,`crated`,`railed`,`gone`],ee=[`pinned`,`swinging`,`falling`,`gone`],S=18,C=-4,w=t=>{let s=d(),l=v(1),u=t,f=new Int32Array,w=new Float32Array,T=new Float32Array,E=0,D=0,O={};function k(e){return s.push(e,O.time)}function te(e,t){O.def=e;let n=e.screws.map(e=>({id:e.id,color:e.color,drive:o(e.color),threads:e.threads,layer:e.layer,state:`fixed`,progress:0,reachable:e.blockers.length===0,blocked:!1,plateCount:e.plates.length,slot:-1,since:O.time,x:e.x,y:e.y,z:e.z,ax:e.ax,ay:e.ay,az:e.az,fromRail:!1,toCrate:!1})),r=e.plates.map(e=>({id:e.id,shape:e.shape,layer:e.layer,tint:e.tint,opaque:e.opaque,state:`pinned`,pinsLeft:e.screws.length,pivot:-1,since:O.time,x:e.x,y:e.y,z:e.z,rx:e.rx,ry:e.ry,rz:e.rz,w:e.w,h:e.h,t:e.t}));O.screws=n,O.plates=r,f=new Int32Array(e.screws.length);for(let t of e.screws)f[t.id]=t.blockers.length;w=new Float32Array(e.plates.length),T=new Float32Array(e.plates.length),O.crates=[],O.queueAt=0;for(let e=0;e<3;e++)O.crates.push(re(e));t||(O.rail=[],O.railSlots=5,O.railPeak=0),O.screwsLeft=n.length,O.platesLeft=r.length,O.result=null}let ne=0;function re(e){let t=O.def.crateQueue,n=O.queueAt<t.length?t[O.queueAt++]:-1;return{id:ne++,color:n,filled:0,screws:[],sealing:!1,since:O.time,sealAt:-1,pullAt:O.time+120/1e3}}function ie(e){return(e-1)*6+3}function ae(e,t,n){if(e.mode===`teardown`){let t=_(e.level??1);if((e.fails??0)>=2&&t.crateQueue.length>3){let e=t.crateQueue,n=e[3];e[3]=e[2],e[2]=n}return t}if(e.mode===`daily`){let e=2+t%4;return g(y(e,t>>>3),t,ie(e))}let r=b(n);return g(y(r,n),t+Math.imul(n,2654435761)>>>0,ie(r))}function oe(t){t&&(u=t);let n=u,r=n.seed??(n.mode===`scrapline`?Date.now()>>>0:e(`unbolt:level:${n.level??1}`));n.seed===void 0&&(u={...n,seed:r}),s.clear(),l.seek(r),O.mode=n.mode,O.phase=`intro`,O.level=n.mode===`teardown`?Math.max(1,n.level??1):0,O.stage=0,O.seed=r,O.runId=(O.runId??0)+1,O.time=0,O.wall=0,O.score=0,O.scoreGained=0,O.flow=0,O.flowMul=1,O.bestFlow=0,O.screwsRemoved=0,O.platesFallen=0,O.railPulls=0,O.xray=0;let i=n.mode===`daily`?{}:n.boosters??{lumenLens:2,spareRail:1,magnetRake:1,rewindSpindle:1};O.boosters={lumenLens:0,spareRail:0,magnetRake:0,rewindSpindle:0};for(let e of p)O.boosters[e]=i[e]??0;O.continuesUsed=0,O.railFill=0,O.hitStop=0,O.trauma=0,O.tutorial=n.seen?.spin?`none`:`spin`,O.tutorialTarget=-1,E=0,D=0,te(ae(n,r,0),!1),O.rngState=l.state,n.snapshot&&Oe(n.snapshot),ue(),O.tutorial===`spin`&&(O.tutorialTarget=se())}function se(){let e=-1,t=-1e9;for(let n=0;n<2;n++){for(let r of O.screws){if(r.state!==`fixed`||!r.reachable||r.az<0||n===0&&ce(r.color)<0)continue;let i=-Math.hypot(r.x,r.y);i>t&&(t=i,e=r.id)}if(e>=0)return e}return e}function ce(e){for(let t=0;t<3;t++){let n=O.crates[t];if(n.color===e&&!n.sealing&&n.filled<3)return t}return-1}function le(){let e=0;for(let t of O.screws)t.state===`turning`&&e++;return e}function ue(){let e=O.rail.length+le()>=O.railSlots;for(let t of O.screws)t.blocked=t.state===`fixed`&&e&&ce(t.color)<0;O.railFill=O.railSlots?O.rail.length/O.railSlots:0}function A(e){let t=O.screws[e];if(!t||O.phase!==`playing`&&O.phase!==`intro`||t.state!==`fixed`||!t.reachable)return;if(O.phase===`intro`&&(O.phase=`playing`),O.rail.length+le()>=O.railSlots&&ce(t.color)<0){j(k(`screwBlocked`),t);return}t.state=`turning`,t.progress=0,t.since=O.time;let n=k(`screwTapped`);j(n,t),n.value=t.threads,(O.tutorial===`spin`||O.tutorial===`firstScrew`)&&(O.tutorial=`none`,O.tutorialTarget=-1,k(`tutorial`).value=0),ue()}function j(e,t){e.screw=t.id,e.color=t.color,e.x=t.x,e.y=t.y,e.z=t.z}function de(e){let t=ce(e.color);if(t<0&&O.rail.length>=O.railSlots){e.state=`fixed`,e.progress=0,j(k(`screwBlocked`),e);return}if(e.state=`flying`,e.since=O.time,e.fromRail=!1,O.screwsRemoved++,O.screwsLeft--,j(k(`screwFreed`),e),t>=0){let n=O.crates[t];n.screws.push(e.id),n.filled++,e.slot=t,e.toCrate=!0}else{e.toCrate=!1,O.rail.push(e.id),e.slot=O.rail.length-1,O.rail.length>O.railPeak&&(O.railPeak=O.rail.length);let t=a(O.flow);O.flow=0,O.flowMul=1,t>1&&(k(`flowBreak`).value=t)}for(let t of O.def.screws[e.id].plates){let e=O.plates[t];if(e.pinsLeft--,e.pinsLeft===1){e.state=`swinging`,e.since=O.time;for(let n of O.def.plates[t].screws)(O.screws[n].state===`fixed`||O.screws[n].state===`turning`)&&(e.pivot=n);let n=k(`plateSwing`);n.plate=t,n.x=e.x,n.y=e.y,n.z=e.z}else e.pinsLeft<=0&&fe(e)}}function fe(e){let t=O.def.plates[e.id];e.x=t.x,e.y=t.y,e.rz=t.rz,e.state=`falling`,e.since=O.time,e.pivot=-1,w[e.id]=1.2,T[e.id]=(l.next()-.5)*5,O.platesLeft--,O.platesFallen++,O.score+=40,O.scoreGained=40,O.hitStop=45/1e3,O.trauma=Math.min(1,O.trauma+.22);let n=k(`plateFell`);n.plate=e.id,n.points=40,n.x=e.x,n.y=e.y,n.z=e.z,n.value=e.layer;let r=0;for(let t of O.def.screws)t.blockers.includes(e.id)&&(f[t.id]--,f[t.id]===0&&O.screws[t.id].state===`fixed`&&(O.screws[t.id].reachable=!0,r++));if(r>0){let t=k(`layerRevealed`);t.value=r,t.plate=e.id,t.x=e.x,t.y=e.y,t.z=e.z}}function pe(e){e.state=`crated`,e.since=O.time;let t=e.fromRail,n;if(t)n=60;else{let t=O.flowMul;O.flow++,O.bestFlow=Math.max(O.bestFlow,O.flow),O.flowMul=a(O.flow),n=h(O.flow,e.layer,e.plateCount>1),O.flowMul>t&&(k(`flowUp`).value=O.flowMul)}O.score+=n,O.scoreGained=n;let r=k(`screwSeated`);j(r,e),r.crate=e.slot,r.points=n,r.value=O.flow}function me(e){e.state=`railed`,e.since=O.time,O.score+=5,O.scoreGained=5;let t=k(`screwRailed`);j(t,e),t.value=O.rail.indexOf(e.id),t.points=5}function he(){let e=0;for(let t=0;t<3;t++){let n=O.crates[t];if(!(n.color<0)){if(!n.sealing&&n.filled>=3){let r=!0;for(let e of n.screws)O.screws[e].state!==`crated`&&(r=!1);if(r){n.sealing=!0,n.sealAt=O.time;let r=i(O.flow);O.score+=r,O.scoreGained=r;let a=k(`crateSealed`);if(a.crate=t,a.color=n.color,a.points=r,a.value=E++,++e>8)throw Error(`seal chain overflow`)}}if(n.sealing&&O.time-n.sealAt>=240/1e3){for(let e of n.screws)O.screws[e].state=`gone`;let e=re(t);O.crates[t]=e;let r=k(`crateArrive`);r.crate=t,r.color=e.color,r.value=e.id}}}for(let e=0;e<3;e++){let t=O.crates[e];if(!(t.color<0||t.sealing||t.filled>=3||O.time<t.pullAt))for(let n=0;n<O.rail.length;n++){let r=O.screws[O.rail[n]];if(r.color!==t.color||r.state!==`railed`)continue;O.rail.splice(n,1);for(let e=0;e<O.rail.length;e++)O.screws[O.rail[e]].slot=e;r.state=`flying`,r.fromRail=!0,r.toCrate=!0,r.since=O.time,r.slot=e,t.screws.push(r.id),t.filled++,t.pullAt=O.time+120/1e3,O.railPulls++;let i=k(`railPull`);j(i,r),i.crate=e,i.points=60;break}}}function ge(e){for(let t of O.plates)if(t.state===`swinging`){let e=O.def.plates[t.id],n=t.pivot>=0?O.def.screws[t.pivot]:null,r=.16*Math.sin((O.time-t.since)*3.4)*Math.exp(-(O.time-t.since)*.6);if(t.rz=e.rz+r,n){let i=Math.cos(r),a=Math.sin(r),o=e.x-n.x,s=e.y-n.y;t.x=n.x+o*i-s*a,t.y=n.y+o*a+s*i}}else t.state===`falling`&&(w[t.id]-=S*e,t.y+=w[t.id]*e,t.z+=(t.z>=0?1:-1)*.9*e,t.rz+=T[t.id]*e,t.rx+=T[t.id]*.4*e,t.y<C&&(t.state=`gone`))}function _e(){for(let e of O.screws)if(e.state===`turning`||e.state===`flying`)return!0;for(let e of O.crates)if(e.sealing)return!0;return!1}function ve(){if(O.rail.length<O.railSlots)return!0;for(let e of O.screws)if(e.state===`fixed`&&e.reachable&&ce(e.color)>=0)return!0;for(let e of O.crates)if(!(e.color<0||e.filled>=3)){for(let t of O.rail)if(O.screws[t].color===e.color)return!0}return!1}function ye(e){let t=O.def.screws.length,i=Math.round(O.time*1e3),a=Math.round(O.wall),o=0;if(e){let e=O.mode===`scrapline`?0:r(t,O.time,O.railPeak,O.railSlots);O.score+=e,O.scoreGained=e,o=n(t,O.time,O.railPeak)}O.phase=e?`won`:`lost`,O.result={mode:O.mode,level:O.level,seed:O.seed,won:e,score:O.score,stars:o,timeMs:i,wallMs:a,screws:O.screwsRemoved,plates:O.platesFallen,railPeak:O.railPeak,bestFlow:O.bestFlow,platesLeft:O.platesLeft,progress:t?O.screwsRemoved/t:0};let s=k(e?`levelWon`:`levelLost`);s.points=O.score,s.value=o}function be(e,t){let n=Math.min(c,Math.max(0,e));if(O.phase===`paused`||O.phase===`boot`)return;if(O.phase===`won`||O.phase===`lost`){ge(n);return}if(O.wall+=Math.max(0,t??e*1e3),O.hitStop>0){O.hitStop=Math.max(0,O.hitStop-n);return}O.phase===`intro`&&O.time>.42&&(O.phase=`playing`),O.time+=n,O.trauma=Math.max(0,O.trauma-1.6*n),O.xray>0&&(O.xray=Math.max(0,O.xray-n),O.xray===0&&k(`xrayEnd`));for(let e of O.screws)if(e.state===`turning`){let t=e.threads*180/1e3,n=Math.floor(e.progress*e.threads);e.progress=Math.min(1,(O.time-e.since)/t);let r=Math.floor(e.progress*e.threads);if(r>n&&e.progress<1){let t=k(`unscrewTick`);j(t,e),t.value=r}e.progress>=1&&de(e)}else e.state===`flying`&&O.time-e.since>=320/1e3&&(e.toCrate?pe(e):me(e));he(),ge(n);let r=O.railFill;if(ue(),O.railFill!==r){let e=O.rail.length;e===O.railSlots-1&&D!==1?(D=1,k(`railWarning`).value=e):e>=O.railSlots&&D!==2?(D=2,k(`railCritical`).value=e):e<O.railSlots-1&&(D=0)}if(O.crates.every(e=>!e.sealing)&&O.time-xe()>1.2&&(E=0),O.platesLeft===0&&!_e()){if(O.mode===`scrapline`){Se();return}ye(!0);return}!_e()&&!ve()&&(k(`railCritical`).value=O.rail.length,ye(!1))}function xe(){let e=-1e9;for(let t of O.crates)e=Math.max(e,t.sealAt,t.since);return e}function Se(){O.stage++;let e=250*O.stage;O.score+=e,O.scoreGained=e;let t=k(`levelWon`);t.value=-1,t.points=e;let n=O.rail.map(e=>O.screws[e].color);te(ae(u,O.seed,O.stage),!0),O.rail=[];for(let e of n){let t=O.screws.length,n={id:t,color:e,drive:o(e),threads:1,layer:0,state:`railed`,progress:1,reachable:!1,blocked:!1,plateCount:0,slot:O.rail.length,since:O.time,x:0,y:0,z:0,ax:0,ay:0,az:1,fromRail:!0,toCrate:!1};O.screws.push(n),O.rail.push(t)}ue()}function Ce(e){switch(e.kind){case`tapScrew`:A(e.screw);break;case`pause`:(O.phase===`playing`||O.phase===`intro`)&&(O.phase=`paused`);break;case`resume`:O.phase===`paused`&&(O.phase=`playing`);break;case`booster`:M(e.booster);break;case`continue`:if(O.phase!==`lost`||O.mode===`daily`)break;if(e.rescue){let t=O.result;if(O.phase=`playing`,O.result=null,!M(e.rescue)){O.phase=`lost`,O.result=t;break}}else{if(O.continuesUsed>=1)break;O.continuesUsed++,O.railSlots+=2,O.phase=`playing`,O.result=null}ue();break;case`dismissTutorial`:O.tutorial=`none`,O.tutorialTarget=-1}}function M(e){if(O.phase!==`playing`&&O.phase!==`intro`||(O.boosters[e]??0)<=0)return!1;let t=-1;if(e===`lumenLens`){if(O.xray>0)return!1;O.xray=m/1e3,k(`xrayStart`)}else if(e===`spareRail`){if(O.railSlots>5)return!1;O.railSlots+=1}else if(e===`magnetRake`){if(!we())return!1}else if(e===`rewindSpindle`){if(t=Ee(),t<0)return!1}else return!1;O.boosters[e]--;let n=k(`boosterUsed`);return n.value=p.indexOf(e),n.screw=t,ue(),!0}function we(){let e=0;for(let t=0;t<O.rail.length&&e<3;){let n=O.screws[O.rail[t]];if(n.state!==`railed`){t++;continue}O.rail.splice(t,1),n.state=`gone`,n.since=O.time,n.slot=-1,e++}if(e===0)return!1;for(let e=0;e<O.rail.length;e++)O.screws[O.rail[e]].slot=e;return D=0,!0}function Te(){for(let e=O.rail.length-1;e>=0;e--){let t=O.rail[e];if(!(O.screws[t].state!==`railed`||t>=O.def.screws.length))for(let n of O.def.screws[t].plates){let t=O.plates[n].state;if(t===`pinned`||t===`swinging`)return e}}return-1}function Ee(){let e=Te();if(e<0)return-1;let t=O.screws[O.rail[e]];O.rail.splice(e,1);for(let e=0;e<O.rail.length;e++)O.screws[O.rail[e]].slot=e;t.state=`fixed`,t.progress=0,t.slot=-1,t.since=O.time,t.fromRail=!1,t.toCrate=!1,O.screwsLeft++,O.screwsRemoved--;for(let e of O.def.screws[t.id].plates){let t=O.plates[e];if((t.state===`pinned`||t.state===`swinging`)&&(t.pinsLeft++,t.state===`swinging`&&t.pinsLeft>=2)){let n=O.def.plates[e];t.state=`pinned`,t.pivot=-1,t.x=n.x,t.y=n.y,t.rz=n.rz}}D=0;let n=k(`screwTapped`);return j(n,t),n.value=0,t.id}function De(){let e=[];for(let t of O.screws)e.push(x.indexOf(t.state===`turning`?`fixed`:t.state),t.slot);return{v:1,mode:O.mode,level:O.level,stage:O.stage,seed:O.seed,rngState:l.state,time:O.time,wall:O.wall,score:O.score,flow:O.flow,bestFlow:O.bestFlow,railSlots:O.railSlots,railPeak:O.railPeak,queueAt:O.queueAt,rail:O.rail.slice(),screws:e,plates:O.plates.map(e=>ee.indexOf(e.state===`pinned`||e.state===`swinging`?e.state:`gone`)),crates:O.crates.map(e=>({id:e.id,color:e.color,filled:e.filled,screws:e.screws.slice()})),boosters:{...O.boosters},continuesUsed:O.continuesUsed,screwsRemoved:O.screwsRemoved,platesFallen:O.platesFallen,railPulls:O.railPulls}}function Oe(e){if(e.v===1&&e.mode!==`scrapline`&&e.screws.length===O.screws.length*2){O.time=e.time,O.wall=e.wall??e.time*1e3,O.score=e.score,O.flow=e.flow,O.flowMul=a(e.flow),O.bestFlow=e.bestFlow,O.railSlots=e.railSlots,O.railPeak=e.railPeak,O.queueAt=e.queueAt,O.rail=e.rail.slice(),O.boosters={...e.boosters},O.continuesUsed=e.continuesUsed,O.screwsRemoved=e.screwsRemoved,O.platesFallen=e.platesFallen,O.railPulls=e.railPulls,l.seek(e.rngState),O.screws.forEach((t,n)=>{let r=x[e.screws[n*2]]??`fixed`;t.state=r===`flying`?`crated`:r,t.slot=e.screws[n*2+1],t.progress=t.state===`fixed`?0:1}),O.plates.forEach((t,n)=>{t.state=ee[e.plates[n]]??`pinned`}),O.crates=e.crates.map(e=>({...e,screws:e.screws.slice(),sealing:!1,since:O.time,sealAt:-1,pullAt:O.time})),O.screwsLeft=O.screws.filter(e=>e.state===`fixed`).length,O.platesLeft=0;for(let e of O.plates)e.pinsLeft=O.def.plates[e.id].screws.filter(e=>O.screws[e].state===`fixed`).length,(e.state===`falling`||e.pinsLeft===0)&&(e.state=`gone`),e.state!==`gone`&&O.platesLeft++;for(let e of O.def.screws)f[e.id]=e.blockers.filter(e=>O.plates[e].state!==`gone`).length,O.screws[e.id].reachable=f[e.id]===0;O.phase=`paused`}}function ke(){let e=2166136261,t=t=>{e^=t|0,e=Math.imul(e,16777619)};t(O.score),t(O.flow),t(O.queueAt),t(Math.round(O.time*1e3));for(let e of O.screws)t(x.indexOf(e.state)),t(e.slot);for(let e of O.rail)t(e);for(let e of O.crates)t(e.color),t(e.filled);return e>>>0}return oe(t),{get state(){return O},events:s,step:be,input:Ce,flush(){s.clear()},reset:oe,serialize:De,hash:ke}},T=.5;function E(){return{scale:1,avgMs:16.7,cooldown:0}}function D(e,t){return Math.max(.5,Math.min(e||1,2)*t.scale)}function O(e,t){return!(t>0)||t>250?!1:(e.avgMs+=(t-e.avgMs)*.05,e.cooldown>0?(e.cooldown--,!1):e.avgMs>22&&e.scale>.5?(e.scale=Math.max(T,e.scale-.15),e.cooldown=90,!0):e.avgMs<13&&e.scale<1&&(e.scale=Math.min(1,e.scale+.1),e.cooldown=180,!0))}var k=`#version 300 es
// Attribute-less fullscreen triangle.
out vec2 v_uv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  v_uv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}
`,te=`#version 300 es
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform float u_az;
uniform float u_el;
uniform float u_range;
uniform int u_octaves;
uniform float u_danger;
out vec4 outColor;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), u.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 5; i++) {
    if (i >= u_octaves) break;
    v += a * noise(p);
    p = mat2(1.6, 1.2, -1.2, 1.6) * p;
    a *= 0.5;
  }
  return v;
}
void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);
  vec2 par = vec2(-u_az, u_el) * 0.33;
  float t = u_time * 0.03;
  vec2 q = vec2(fbm(uv * 1.4 + par + t), fbm(uv * 1.4 + par + vec2(4.1, 1.7) - t));
  float n = fbm(uv * 2.2 + par + 2.6 * q);
  vec3 col = mix(vec3(0.028, 0.038, 0.056), vec3(0.07, 0.1, 0.13), smoothstep(0.2, 0.9, n));
  // cold key glow from above, warm floor glow from the crate row
  col += vec3(0.05, 0.22, 0.2) * smoothstep(0.9, -0.2, length(uv - vec2(0.0, 0.55)));
  col += vec3(0.22, 0.11, 0.03) * smoothstep(0.8, 0.0, length((uv - vec2(0.0, -0.9)) * vec2(0.6, 1.6)));
  // parallax light rails (a slow grid)
  vec2 g = uv * 5.0 + par * 3.0;
  vec2 gf = abs(fract(g) - 0.5);
  float line = smoothstep(0.02, 0.0, min(gf.x, gf.y) - 0.002) * 0.06;
  float travel = smoothstep(0.96, 1.0, fract(g.y * 0.1 + u_time * 0.08 + floor(g.x) * 0.37));
  col += vec3(0.15, 0.6, 0.55) * line * (0.4 + travel * 2.5) * smoothstep(1.2, 0.2, length(uv));
  col = mix(col, col + vec3(0.25, 0.02, 0.05) * smoothstep(0.3, 1.2, length(uv)), u_danger);
  outColor = vec4(col * u_range, 1.0);
}
`,ne=`#version 300 es
precision highp float;
layout(location = 0) in vec3 a_pos;
layout(location = 1) in vec3 a_nrm;
layout(location = 2) in float a_part;
layout(location = 3) in vec4 i0;
layout(location = 4) in vec4 i1;
layout(location = 5) in vec4 i2;
layout(location = 6) in vec4 i3;

uniform mat4 u_vp;
uniform int u_kind; // 0 = box (plates, frame), 1 = screw

out vec3 v_wpos;
out vec3 v_nrm;
out vec3 v_local;
out float v_part;
flat out vec4 v_i0;
flat out vec4 v_i2;
flat out vec4 v_i3;

mat3 euler(vec3 r) {
  float cx = cos(r.x), sx = sin(r.x);
  float cy = cos(r.y), sy = sin(r.y);
  float cz = cos(r.z), sz = sin(r.z);
  mat3 rx = mat3(1.0, 0.0, 0.0, 0.0, cx, sx, 0.0, -sx, cx);
  mat3 ry = mat3(cy, 0.0, -sy, 0.0, 1.0, 0.0, sy, 0.0, cy);
  mat3 rz = mat3(cz, sz, 0.0, -sz, cz, 0.0, 0.0, 0.0, 1.0);
  return rz * ry * rx;
}

void main() {
  vec3 wp;
  if (u_kind == 0) {
    vec3 lp = a_pos * vec3(i2.x, i2.y, i1.w);
    mat3 R = euler(i1.xyz);
    wp = i0.xyz + R * lp;
    v_nrm = R * a_nrm;
    v_local = lp;
  } else {
    vec3 ax = normalize(i1.xyz);
    vec3 t = abs(ax.y) < 0.9 ? normalize(cross(ax, vec3(0.0, 1.0, 0.0))) : normalize(cross(ax, vec3(1.0, 0.0, 0.0)));
    vec3 b = cross(ax, t);
    float c = cos(i1.w), s = sin(i1.w);
    vec3 t2 = t * c + b * s;
    vec3 b2 = -t * s + b * c;
    vec3 lp = a_pos * i0.w;
    // through-bolt: the shank runs on through the plate beneath
    if (i3.w > 0.5 && a_pos.y < 0.0) lp.y *= 1.9;
    wp = i0.xyz + t2 * lp.x + ax * (lp.y + i2.z) + b2 * lp.z;
    v_nrm = t2 * a_nrm.x + ax * a_nrm.y + b2 * a_nrm.z;
    v_local = a_pos;
  }
  v_wpos = wp;
  v_part = a_part;
  v_i0 = i0;
  v_i2 = i2;
  v_i3 = i3;
  gl_Position = u_vp * vec4(wp, 1.0);
}
`,re=`#version 300 es
precision highp float;
precision highp int;
in vec3 v_wpos;
in vec3 v_nrm;
in vec3 v_local;
in float v_part;
flat in vec4 v_i0;
flat in vec4 v_i2;
flat in vec4 v_i3;

uniform int u_kind;
uniform vec3 u_eye;
uniform float u_time;
uniform float u_xray;
uniform float u_range;
uniform float u_glyph;
uniform vec3 u_colors[6];
uniform vec3 u_tints[6];
/**
 * Acrylic refraction (QualityProfile.refraction, \`high\` tier only). \`u_opaque\` is a copy of the
 * scene AFTER the opaque pass (frame + screws + backdrop) and BEFORE any plate is blended, so a
 * frosted plate can displace what is really behind it instead of just tinting it. 0 disables the
 * sample entirely — the texture is not even read, so the lower tiers pay nothing.
 */
uniform sampler2D u_opaque;
uniform vec2 u_res;
uniform float u_refract;

out vec4 outColor;

const vec3 KEY = normalize(vec3(0.45, 0.85, 0.75));
const vec3 FILL = normalize(vec3(-0.5, -0.6, 0.6));
const vec3 MINT = vec3(0.18, 0.89, 0.78);
// keep in sync with game/levels.ts
const float RING_HOLE = 0.36;
const float TEE_BAR = 0.38;
const float TEE_STEM = 0.4;
const float WEDGE_TIP = 0.34;
/** how far in from a cut edge the faked side wall rolls the face normal over */
const float WALL = 0.03;
const float GRAD_E = 0.004;

vec3 env(vec3 r) {
  float y = r.y;
  vec3 col = mix(vec3(0.035, 0.05, 0.065), vec3(0.22, 0.42, 0.42), smoothstep(0.0, 1.0, y));
  col = mix(col, vec3(0.16, 0.09, 0.04), smoothstep(0.0, -0.9, y));
  col += vec3(2.4, 2.9, 2.8) * pow(max(dot(r, KEY), 0.0), 60.0);
  col += vec3(1.6, 0.9, 0.4) * pow(max(dot(r, FILL), 0.0), 30.0);
  col += vec3(0.5, 0.7, 0.75) * smoothstep(0.08, 0.0, abs(y - 0.18)) * 0.6; // rim band
  return col;
}

float sdBox(vec2 p, vec2 b) {
  vec2 d = abs(p) - b;
  return length(max(d, 0.0)) + min(max(d.x, d.y), 0.0);
}

/** keystone that tapers from half-width r1 at y=-he to r2 at y=+he (iq) */
float sdTrapezoid(vec2 p, float r1, float r2, float he) {
  vec2 k1 = vec2(r2, he);
  vec2 k2 = vec2(r2 - r1, 2.0 * he);
  p.x = abs(p.x);
  vec2 ca = vec2(p.x - min(p.x, p.y < 0.0 ? r1 : r2), abs(p.y) - he);
  vec2 cb = p - k1 + k2 * clamp(dot(k1 - p, k2) / dot(k2, k2), 0.0, 1.0);
  float s = cb.x < 0.0 && ca.y < 0.0 ? -1.0 : 1.0;
  return s * sqrt(min(dot(ca, ca), dot(cb, cb)));
}

float sdSeg(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}

float glyph(vec2 p, int kind, float s) {
  p /= s;
  float d;
  if (kind == 0) {
    vec2 q = abs(p);
    d = max(q.x * 0.866 + q.y * 0.5, q.y) - 0.36;
  } else if (kind == 1) {
    d = sdBox(p, vec2(0.28));
  } else if (kind == 2) {
    float a = atan(p.y, p.x);
    d = length(p) - (0.34 + 0.1 * cos(6.0 * a));
  } else if (kind == 3) {
    d = min(min(sdSeg(p, vec2(0.0), vec2(0.0, 0.5)), sdSeg(p, vec2(0.0), vec2(0.433, -0.25))), sdSeg(p, vec2(0.0), vec2(-0.433, -0.25))) - 0.09;
  } else if (kind == 4) {
    d = sdBox(p, vec2(0.6, 0.085));
  } else {
    d = min(sdBox(p, vec2(0.52, 0.085)), sdBox(p, vec2(0.085, 0.52)));
  }
  return d * s;
}

float ggx(float nh, float a) {
  float a2 = a * a;
  float d = nh * nh * (a2 - 1.0) + 1.0;
  return a2 / (3.14159 * d * d);
}

vec3 shade(vec3 albedo, float metal, float rough, vec3 n, vec3 v) {
  float nv = max(dot(n, v), 0.001);
  vec3 f0 = mix(vec3(0.04), albedo, metal);
  vec3 F = f0 + (1.0 - f0) * pow(1.0 - nv, 5.0);
  vec3 h = normalize(KEY + v);
  float nl = max(dot(n, KEY), 0.0);
  float nf = max(dot(n, FILL), 0.0);
  float spec = ggx(max(dot(n, h), 0.0), rough) * 0.25;
  vec3 diff = albedo * (1.0 - metal) * (nl * vec3(0.9, 1.0, 1.0) + nf * vec3(0.55, 0.32, 0.14) + 0.12);
  vec3 r = reflect(-v, n);
  vec3 refl = env(r) * F * mix(1.0, 0.35, rough);
  return diff + refl + spec * F * nl * vec3(1.0, 1.05, 1.05) * 3.0;
}

/** signed distance to a plate silhouette in its scaled local XY (hw = the box half-extents) */
float plateSdf(vec2 p, float shape, vec2 hw) {
  if (shape > 0.5 && shape < 1.5) return length(p) - hw.x; // disc
  if (shape > 2.5 && shape < 3.5) return abs(length(p) - hw.x * (0.5 + 0.5 * RING_HOLE)) - hw.x * (0.5 - 0.5 * RING_HOLE); // ring
  if (shape > 4.5 && shape < 5.5) {
    // tee: a full-width cross-bar at +y unioned with a narrow stem down the middle
    float bh = hw.y * TEE_BAR;
    float bar = sdBox(p - vec2(0.0, hw.y - bh), vec2(hw.x, bh) - 0.03) - 0.03;
    float stem = sdBox(p + vec2(0.0, bh), vec2(hw.x * TEE_STEM, hw.y - bh) - 0.03) - 0.03;
    return min(bar, stem);
  }
  if (shape > 5.5) return sdTrapezoid(p, hw.x, hw.x * WEDGE_TIP, hw.y); // wedge
  float d = sdBox(p, hw - 0.06) - 0.06;
  if (shape > 3.5) d = max(d, -(sdBox(p - hw, hw) - 0.03)); // elbow: +x/+y quadrant cut away
  return d;
}

void main() {
  vec3 n = normalize(v_nrm);
  vec3 v = normalize(u_eye - v_wpos);
  if (!gl_FrontFacing) n = -n;
  vec3 col;
  float alpha = 1.0;
  if (u_kind == 0) {
    float shape = v_i0.w;
    vec2 p = v_local.xy;
    float d = plateSdf(p, shape, v_i2.xy);
    if (d > 0.004) discard; // side faces sit exactly on d = 0: a small bias stops float noise from stippling them
    float rim = smoothstep(-0.022, 0.0, d);
    float face = step(0.5, abs(v_local.z) / max(abs(v_local.z), 1e-4)) * step(0.6, abs(n.z));
    // Cut edges (a ring's hole, an elbow's notch, a tee's shoulders, a wedge's taper) have no side-wall
    // geometry — the box is carved by \`discard\`. Roll the face normal outwards along the SDF gradient over
    // the last WALL of the silhouette so every edge catches the key light like a real machined wall.
    if (face > 0.5 && d > -WALL) {
      vec2 g = vec2(plateSdf(p + vec2(GRAD_E, 0.0), shape, v_i2.xy) - plateSdf(p - vec2(GRAD_E, 0.0), shape, v_i2.xy),
                    plateSdf(p + vec2(0.0, GRAD_E), shape, v_i2.xy) - plateSdf(p - vec2(0.0, GRAD_E), shape, v_i2.xy));
      float gl = length(g);
      if (gl > 1e-5) n = normalize(mix(n, vec3(g / gl, 0.0), smoothstep(-WALL, 0.0, d) * 0.88));
    }
    if (shape > 1.5 && shape < 2.5) {
      // machined frame: brushed steel, darker
      vec3 alb = vec3(0.46, 0.52, 0.56);
      float ba = v_local.x * 240.0 + sin(v_local.y * 9.0) * 3.0;
      float baa = clamp(1.0 - fwidth(ba) * 0.35, 0.0, 1.0); // fade the brushing before it aliases
      float brush = 0.5 + 0.5 * sin(ba) * baa;
      float nv = max(dot(n, v), 0.0);
      col = shade(alb, 0.85, 0.34 + 0.08 * brush, n, v) * 0.9;
      col += vec3(0.30, 0.42, 0.46) * (0.10 + 0.03 * brush);
      col *= 0.82 + 0.3 * smoothstep(-v_i2.y, v_i2.y, v_local.y); // soft top light
      col += MINT * (rim * 0.35 + pow(1.0 - nv, 3.0) * 0.12);
    } else {
      vec3 tint = u_tints[int(v_i2.z) % 6];
      bool opaque = v_i2.w > 0.5;
      float nv = max(dot(n, v), 0.0);
      float F = 0.04 + 0.96 * pow(1.0 - nv, 5.0);
      if (opaque) {
        float ob = (v_local.x + v_local.y) * 50.0;
        float brush = 0.5 + 0.5 * sin(ob) * clamp(1.0 - fwidth(ob) * 0.35, 0.0, 1.0);
        col = shade(vec3(0.42, 0.46, 0.5), 0.85, 0.32 + 0.1 * brush, n, v) * 0.8;
        col += vec3(0.6, 0.75, 0.8) * rim * 0.34;
        alpha = 1.0;
      } else {
        // frosted acrylic: light pastel body, fresnel edge glow, a soft diagonal sheen
        vec3 base = tint;
        float nl = max(dot(n, KEY), 0.0);
        float sheen = smoothstep(0.18, 0.0, abs(v_local.x * 0.7 + v_local.y - 0.25 * (v_i2.x + v_i2.y) + 0.35)) * 0.35
                    + smoothstep(0.06, 0.0, abs(v_local.x * 0.7 + v_local.y - 0.25 * (v_i2.x + v_i2.y) + 0.75)) * 0.18;
        float edge = pow(1.0 - nv, 2.5);
        col = base * (0.42 + 0.55 * nl) + env(reflect(-v, n)) * (F * 0.9 + 0.05);
        col += mix(base, vec3(1.0), 0.5) * (edge * 0.55 + sheen * face);
        col += mix(base * 2.2, vec3(0.9, 1.0, 0.98), 0.5) * rim * 0.68;
        alpha = mix(0.46, 0.92, max(F, edge * 0.6)) + rim * 0.3 + sheen * face * 0.15;
        if (u_refract > 0.0) {
          /**
           * Displace the view ray by the surface normal and read the opaque scene there. A 6 mm
           * acrylic sheet bends what is behind it MOST at a cut edge (where \`n\` has already been
           * rolled outwards along the SDF gradient above) and barely at all across a flat face, so
           * the sample is weighted by \`rim\`/fresnel and the plate keeps its own pastel body colour
           * everywhere else.
           *
           * The first draft mixed at 0.72 uniformly. MEASURED and LOOKED AT: it replaced the plate
           * colour with the dark frame behind it, so the signature frosted-pastel acrylic went a
           * uniform lavender-grey. The effect was real and the tuning was wrong — which is only
           * visible in a screenshot, not in the diff number.
           */
          vec2 off = n.xy * u_refract * (0.006 + 0.030 * rim);
          vec3 behind = texture(u_opaque, clamp(gl_FragCoord.xy / u_res + off, vec2(0.002), vec2(0.998))).rgb;
          float bend = (0.09 + 0.34 * rim + 0.16 * edge) * u_refract;
          col = mix(col, col * 0.78 + behind * mix(vec3(1.0), base * 1.6, 0.6) * 0.8, bend);
        }
      }
      alpha = mix(alpha, alpha * 0.22, u_xray);
      col += MINT * u_xray * rim * 1.2;
      col *= mix(1.0, 0.85, face * 0.0);
      // fade during the fall
      alpha *= v_i3.x;
      col += vec3(1.0, 0.9, 0.7) * v_i3.y; // flash
    }
  } else {
    int ci = int(v_i2.x + 0.5);
    vec3 cc = u_colors[ci];
    float reach = v_i2.y;
    float blocked = v_i3.y;
    float hidden = v_i2.w;
    vec3 alb = mix(cc, vec3(0.72, 0.76, 0.8), 0.18);
    if (v_part < 0.5) {
      // shaft with a thread
      float th = sin(v_local.y * 28.0) * 0.5 + 0.5;
      vec3 sn = normalize(n + normalize(v_local * vec3(1.0, 0.0, 1.0) + 1e-4) * (th - 0.5) * 0.6);
      col = shade(vec3(0.7, 0.74, 0.78), 1.0, 0.3, sn, v) * 0.8;
    } else {
      float r = length(v_local.xz);
      float aniso = 0.5 + 0.5 * sin(r * 70.0);
      col = shade(alb, 0.35, 0.25 + 0.1 * aniso, n, v) + cc * 0.32;
      // machined bevel highlight on the rim
      col += vec3(0.9, 1.0, 1.0) * smoothstep(0.8, 1.0, r) * pow(max(dot(n, normalize(KEY + v)), 0.0), 8.0) * 0.6;
      if (v_i3.w > 0.5) {
        // through-bolt: a knurled brass collar round the head says "this one holds two plates"
        float knurl = 0.75 + 0.25 * sin(atan(v_local.z, v_local.x) * 24.0);
        float band = v_part < 1.5 ? 1.0 : smoothstep(0.84, 0.9, r);
        col = mix(col, shade(vec3(0.86, 0.64, 0.3), 0.9, 0.3, n, v) * knurl * 1.4 + vec3(0.2, 0.13, 0.04), band * 0.9);
      }
      if (v_part > 1.5) {
        // colour assist: u_glyph > 1 makes the drive mark bigger AND higher-contrast, so the six
        // screw kinds are told apart by shape alone (settings → "Large drive glyphs")
        float gb = clamp((u_glyph - 1.0) * 4.0, 0.0, 1.0);
        float g = glyph(v_local.xz, ci, u_glyph);
        float cut = smoothstep(0.02, -0.02, g);
        col = mix(col, cc * mix(0.08, 0.015, gb), cut);
        col += cc * smoothstep(0.05 + gb * 0.035, 0.0, abs(g)) * (0.9 + gb * 1.3);
        // reachability ring
        float ring = smoothstep(0.12, 0.0, abs(r - 0.86)) * reach;
        float pulse = 0.65 + 0.35 * sin(u_time * 5.0 + v_wpos.x * 7.0);
        col += MINT * ring * pulse * 2.2;
      }
    }
    col = mix(col, vec3(dot(col, vec3(0.3, 0.5, 0.2))) * 0.45, blocked * 0.7);
    col *= mix(1.0, 0.7, hidden * (1.0 - u_xray));
    col += cc * u_xray * hidden * 1.4;
    col += vec3(1.0, 0.95, 0.85) * v_i3.z; // hover / tap flash
    alpha = v_i3.x;
  }
  outColor = vec4(col * u_range, alpha);
}
`,ie=`#version 300 es
precision highp float;
layout(location = 0) in vec4 a_p;   // xyz, size (world)
layout(location = 1) in vec4 a_c;   // rgb, life 0..1
uniform mat4 u_vp;
uniform float u_scale;              // px per world unit at w = 1
out vec4 v_c;
void main() {
  gl_Position = u_vp * vec4(a_p.xyz, 1.0);
  gl_PointSize = clamp(a_p.w * u_scale / gl_Position.w, 1.0, 64.0);
  v_c = a_c;
}
`,ae=`#version 300 es
precision mediump float;
in vec4 v_c;
uniform float u_range;
out vec4 outColor;
void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = smoothstep(1.0, 0.0, d);
  a *= a;
  float life = v_c.a;
  vec3 col = mix(v_c.rgb, vec3(1.0, 0.97, 0.9), life * life * 0.7) * (1.0 + 3.0 * life);
  outColor = vec4(col * a * life * u_range, 0.0);
}
`,oe=`#version 300 es
precision mediump float;
uniform sampler2D u_tex;
uniform vec2 u_texel;
uniform float u_threshold;
uniform float u_range;
out vec4 outColor;
in vec2 v_uv;
void main() {
  vec3 c = vec3(0.0);
  c += texture(u_tex, v_uv + u_texel * vec2(-1.0, -1.0)).rgb;
  c += texture(u_tex, v_uv + u_texel * vec2(1.0, -1.0)).rgb;
  c += texture(u_tex, v_uv + u_texel * vec2(-1.0, 1.0)).rgb;
  c += texture(u_tex, v_uv + u_texel * vec2(1.0, 1.0)).rgb;
  c = c * 0.25 / u_range;
  float br = max(c.r, max(c.g, c.b));
  float knee = 0.5;
  float soft = clamp(br - u_threshold + knee, 0.0, 2.0 * knee);
  soft = soft * soft / (4.0 * knee + 1e-4);
  float w = max(soft, br - u_threshold) / max(br, 1e-4);
  outColor = vec4(c * w * u_range, 1.0);
}
`,se=`#version 300 es
precision mediump float;
uniform sampler2D u_tex;
uniform vec2 u_texel;
in vec2 v_uv;
out vec4 outColor;
void main() {
  vec3 c = texture(u_tex, v_uv).rgb * 0.5;
  c += texture(u_tex, v_uv + u_texel * vec2(-1.0, -1.0)).rgb * 0.125;
  c += texture(u_tex, v_uv + u_texel * vec2(1.0, -1.0)).rgb * 0.125;
  c += texture(u_tex, v_uv + u_texel * vec2(-1.0, 1.0)).rgb * 0.125;
  c += texture(u_tex, v_uv + u_texel * vec2(1.0, 1.0)).rgb * 0.125;
  outColor = vec4(c, 1.0);
}
`,ce=`#version 300 es
precision mediump float;
uniform sampler2D u_tex;
uniform vec2 u_texel;
in vec2 v_uv;
out vec4 outColor;
void main() {
  vec3 c = texture(u_tex, v_uv).rgb * 4.0;
  c += texture(u_tex, v_uv + u_texel * vec2(-1.0, 0.0)).rgb * 2.0;
  c += texture(u_tex, v_uv + u_texel * vec2(1.0, 0.0)).rgb * 2.0;
  c += texture(u_tex, v_uv + u_texel * vec2(0.0, -1.0)).rgb * 2.0;
  c += texture(u_tex, v_uv + u_texel * vec2(0.0, 1.0)).rgb * 2.0;
  c += texture(u_tex, v_uv + u_texel * vec2(-1.0, -1.0)).rgb;
  c += texture(u_tex, v_uv + u_texel * vec2(1.0, -1.0)).rgb;
  c += texture(u_tex, v_uv + u_texel * vec2(-1.0, 1.0)).rgb;
  c += texture(u_tex, v_uv + u_texel * vec2(1.0, 1.0)).rgb;
  outColor = vec4(c / 16.0, 1.0);
}
`,le=`#version 300 es
precision highp float;
uniform sampler2D u_scene;
uniform sampler2D u_bloom;
uniform vec2 u_res;
uniform float u_time;
uniform float u_range;
uniform float u_bloomGain;
uniform float u_warm;
uniform float u_danger;
uniform float u_desat;
uniform float u_grain;
uniform vec4 u_waves[3];
in vec2 v_uv;
out vec4 outColor;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

vec3 aces(vec3 x) {
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}

void main() {
  vec2 uv = v_uv;
  float aspect = u_res.x / u_res.y;
  float ca = 0.0;
  for (int i = 0; i < 3; i++) {
    vec4 w = u_waves[i];
    if (w.w <= 0.0) continue;
    vec2 d = (uv - w.xy) * vec2(aspect, 1.0);
    float dist = length(d);
    float r = w.z * 0.9;
    float k = (dist - r) / 0.045;
    float ring = exp(-k * k) * w.w * exp(-w.z * 2.5);
    uv -= d / max(dist, 1e-3) * ring * 0.018 * vec2(1.0 / aspect, 1.0);
    ca += ring;
  }
  vec3 col;
  if (ca > 0.001) {
    vec2 off = (uv - 0.5) * ca * 0.012;
    col = vec3(texture(u_scene, uv + off).r, texture(u_scene, uv).g, texture(u_scene, uv - off).b);
  } else {
    col = texture(u_scene, uv).rgb;
  }
  col /= u_range;
  col += texture(u_bloom, uv).rgb / u_range * u_bloomGain;
  // grade: lift / gamma / gain, warmer with flow
  col *= mix(vec3(0.97, 1.0, 1.03), vec3(1.07, 1.0, 0.9), u_warm);
  col = aces(col * 1.05);
  float l = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = mix(col, vec3(l), u_desat);
  vec2 vc = v_uv - 0.5;
  float vig = 1.0 - dot(vc, vc) * (0.9 + u_danger * 0.8);
  col *= vig;
  col += vec3(0.35, 0.02, 0.06) * u_danger * smoothstep(0.15, 0.5, length(vc)) * (0.6 + 0.4 * sin(u_time * 6.28));
  col = pow(col, vec3(1.0 / 1.08));
  col += (hash(gl_FragCoord.xy + fract(u_time * 7.0)) - 0.5) * (1.0 / 255.0 + u_grain);
  outColor = vec4(col, 1.0);
}
`;function ue(e){return e.getContext(`webgl2`,{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:`high-performance`,desynchronized:!0})}function A(e,t,n){let r=e.createShader(t);if(!r)throw Error(`createShader failed`);return e.shaderSource(r,n),e.compileShader(r),r}function j(e,t,n,r){let i=e.getExtension(`KHR_parallel_shader_compile`),a=A(e,e.VERTEX_SHADER,t),o=A(e,e.FRAGMENT_SHADER,n),s=e.createProgram();e.attachShader(s,a),e.attachShader(s,o),e.linkProgram(s);let c=null;return{program:s,poll:()=>{if(c)return c;if(i&&!e.getProgramParameter(s,i.COMPLETION_STATUS_KHR))return null;if(!e.getProgramParameter(s,e.LINK_STATUS)&&!e.isContextLost()){let t=[e.getShaderInfoLog(a),e.getShaderInfoLog(o),e.getProgramInfoLog(s)].filter(Boolean).join(`
`);throw Error(`WebGL program failed to build:\n${t}`)}e.deleteShader(a),e.deleteShader(o);let t={};for(let n of r)t[n]=e.getUniformLocation(s,n);return c={program:s,uniforms:t},c}}}function de(e){let t=e.replace(`#`,``),n=t.length===3?t.replace(/./g,e=>e+e):t,r=Number.parseInt(n,16);return n.length!==6||Number.isNaN(r)?[1,1,1]:[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}function fe(){let e=new Float32Array(16);return e[0]=e[5]=e[10]=e[15]=1,e}function pe(e,t,n,r,i){let a=1/Math.tan(t/2);return e.fill(0),e[0]=a/n,e[5]=a,e[10]=(i+r)/(r-i),e[11]=-1,e[14]=2*i*r/(r-i),e}function me(e,t,n,r,i,a,o){let s=t-i,c=n-a,l=r-o,u=Math.hypot(s,c,l)||1;s/=u,c/=u,l/=u;let d=l,f=0,p=-s;u=Math.hypot(d,f,p)||1,d/=u,f/=u,p/=u;let m=c*p-l*f,h=l*d-s*p,g=s*f-c*d;return e[0]=d,e[1]=m,e[2]=s,e[3]=0,e[4]=f,e[5]=h,e[6]=c,e[7]=0,e[8]=p,e[9]=g,e[10]=l,e[11]=0,e[12]=-(d*t+f*n+p*r),e[13]=-(m*t+h*n+g*r),e[14]=-(s*t+c*n+l*r),e[15]=1,e}function he(e,t,n){for(let r=0;r<4;r++){let i=n[r*4],a=n[r*4+1],o=n[r*4+2],s=n[r*4+3];for(let n=0;n<4;n++)e[r*4+n]=t[n]*i+t[4+n]*a+t[8+n]*o+t[12+n]*s}return e}function ge(e,t,n,r,i){let a=e[0]*t+e[4]*n+e[8]*r+e[12],o=e[1]*t+e[5]*n+e[9]*r+e[13],s=e[3]*t+e[7]*n+e[11]*r+e[15];return s<=1e-5?!1:(i[0]=a/s,i[1]=o/s,i[2]=s,!0)}function _e(e){let t=1-Math.min(1,Math.max(0,e));return 1-t*t*t}function ve(e){let t=Math.max(0,Math.min(1,e));return t<.5?4*t*t*t:1-(-2*t+2)**3/2}var ye=.078,be=38*Math.PI/180,xe={slab:0,disc:1,ring:3,elbow:4,tee:5,wedge:6},Se=.42,Ce=.5,M=16,we=8,Te=[`u_vp`,`u_kind`,`u_eye`,`u_time`,`u_xray`,`u_range`,`u_glyph`,`u_colors`,`u_tints`,`u_opaque`,`u_res`,`u_refract`],Ee=[`u_res`,`u_time`,`u_az`,`u_el`,`u_range`,`u_octaves`,`u_danger`],De=[`u_vp`,`u_scale`,`u_range`],Oe=[`u_tex`,`u_texel`,`u_threshold`,`u_range`],ke=[`u_scene`,`u_bloom`,`u_res`,`u_time`,`u_range`,`u_bloomGain`,`u_warm`,`u_danger`,`u_desat`,`u_grain`,`u_waves`];function Ae(e){let t=de(e);return[t[0]**2.2,t[1]**2.2,t[2]**2.2]}function je(){let e=[],t=[];for(let[n,r,i]of[[[0,0,1],[1,0,0],[0,1,0]],[[0,0,-1],[-1,0,0],[0,1,0]],[[1,0,0],[0,0,-1],[0,1,0]],[[-1,0,0],[0,0,1],[0,1,0]],[[0,1,0],[1,0,0],[0,0,-1]],[[0,-1,0],[1,0,0],[0,0,1]]]){let a=e.length/7;for(let[t,a]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(n[0]+r[0]*t+i[0]*a,n[1]+r[1]*t+i[1]*a,n[2]+r[2]*t+i[2]*a,n[0],n[1],n[2],0);t.push(a,a+1,a+2,a,a+2,a+3)}return{data:new Float32Array(e),index:new Uint16Array(t)}}function Me(e=20){let t=[],n=[],r=(n,r,i,a,o)=>{let s=t.length/7;for(let s=0;s<=e;s++){let c=s/e*Math.PI*2,l=Math.cos(c),u=Math.sin(c),d=Math.hypot(a,i)||1;t.push(l*n,r,u*n,l*a/d,i/d,u*a/d,o)}return s},i=(t,r)=>{for(let i=0;i<e;i++)n.push(t+i,r+i,t+i+1,t+i+1,r+i,r+i+1)};i(r(.34,-2.4,0,1,0),r(.34,0,0,1,0)),i(r(1,0,-.2,1,1),r(1,.32,.3,1,1));let a=r(1,.32,1,.25,2),o=r(.6,.42,1,.12,2);i(a,o);let s=t.length/7;t.push(0,.45,0,0,1,0,2);for(let t=0;t<e;t++)n.push(o+t,s,o+t+1);return{data:new Float32Array(t),index:new Uint16Array(n)}}var Ne=(e,n)=>{let r=ue(e);if(!r)return null;let i=s[n.quality],a=n.reducedMotion,o=n.bigGlyphs??!1,c=de(n.clearColor??`#0A0E14`),u=new Float32Array(t.flatMap(Ae)),d=new Float32Array(f.flatMap(Ae)),p={drawCalls:0,triangles:0,particles:0,bytes:0,pending:0},m={azimuth:.35,elevation:.22,distance:6,zoom:1},h=l,g=1,_=1,v=0,y=0,b=!1,x=1,ee=1,S=0,C=0,w=0,T=null,E=-1,D=0,O=fe(),A=fe(),Ne=fe(),N=new Float32Array(3),P=new Float32Array(3),F=new Float32Array(960),I=new Float32Array(120*M),Pe=new Float32Array(120*M),Fe=new Float32Array(120),L=new Int32Array(120),R=new Float32Array(240*M),Ie=new Float32Array(128),Le=0,z=new Float32Array(12),Re=0,ze=new Float32Array(240),Be=new Float32Array(240),Ve=new Float32Array(240),B=-1,V={x0:-1,x1:1,y:-1},He=new Float32Array(480),Ue=new Uint8Array(240),H=3072,U={n:0,x:new Float32Array(H),y:new Float32Array(H),z:new Float32Array(H),vx:new Float32Array(H),vy:new Float32Array(H),vz:new Float32Array(H),life:new Float32Array(H),ttl:new Float32Array(H),size:new Float32Array(H),rgb:new Float32Array(H*3),gpu:new Float32Array(H*we)},We=1,W=()=>(We=Math.imul(We,1664525)+1013904223>>>0,We/4294967296),G=null,K=null,q=null,J=null,Ge=null,Ke=null,Y=null,qe=[],Je=[],Ye=[],Xe=[],Ze=null,Qe=null,$e=null,et=null,tt=null,nt=null,rt=null,it=null,at=null,ot=0,st=0,X=null,Z=[],Q=null,ct=null,lt=!1,ut=1;function dt(e,t,n,i){let a=j(r,e,t,n);Je.push(a.program);let o=!1;qe.push(()=>{if(o)return!0;let e=a.poll();return e?(i(e),o=!0,!0):!1})}function ft(e,t){let n=r,i=n.createVertexArray();Xe.push(i),n.bindVertexArray(i);let a=n.createBuffer();Ye.push(a),n.bindBuffer(n.ARRAY_BUFFER,a),n.bufferData(n.ARRAY_BUFFER,e.data,n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,3,n.FLOAT,!1,28,0),n.enableVertexAttribArray(1),n.vertexAttribPointer(1,3,n.FLOAT,!1,28,12),n.enableVertexAttribArray(2),n.vertexAttribPointer(2,1,n.FLOAT,!1,28,24);let o=n.createBuffer();Ye.push(o),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,o),n.bufferData(n.ELEMENT_ARRAY_BUFFER,e.index,n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,t);for(let e=0;e<4;e++)n.enableVertexAttribArray(3+e),n.vertexAttribPointer(3+e,4,n.FLOAT,!1,64,e*16),n.vertexAttribDivisor(3+e,1);return n.bindVertexArray(null),i}function pt(){let t=r;e.dataset.ready=``,G=K=q=J=Ge=Ke=Y=null,qe=[],Je=[],Ye=[],Xe=[],lt=!!t.getExtension(`EXT_color_buffer_float`),ut=lt?1:.25,dt(ne,re,Te,e=>G=e),dt(k,te,Ee,e=>K=e),dt(ie,ae,De,e=>q=e),dt(k,oe,Oe,e=>J=e),dt(k,se,Oe,e=>Ge=e),dt(k,ce,Oe,e=>Ke=e),dt(k,le,ke,e=>Y=e),Ze=t.createVertexArray(),Xe.push(Ze);let n=e=>{let n=t.createBuffer();return Ye.push(n),t.bindBuffer(t.ARRAY_BUFFER,n),t.bufferData(t.ARRAY_BUFFER,e,t.DYNAMIC_DRAW),n};nt=n(I.byteLength),rt=n(Ie.byteLength),it=n(R.byteLength),at=n(U.gpu.byteLength);let i=je(),a=Me();ot=i.index.length,st=a.index.length,Qe=ft(i,nt),$e=ft(i,rt),et=ft(a,it),tt=t.createVertexArray(),Xe.push(tt),t.bindVertexArray(tt),t.bindBuffer(t.ARRAY_BUFFER,at),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,4,t.FLOAT,!1,32,0),t.enableVertexAttribArray(1),t.vertexAttribPointer(1,4,t.FLOAT,!1,32,16),t.bindVertexArray(null),X=null,Z=[],ct=null,T=null,_t()}function mt(e,t){let n=r,i=n.createTexture();n.bindTexture(n.TEXTURE_2D,i),lt?n.texImage2D(n.TEXTURE_2D,0,n.RGBA16F,e,t,0,n.RGBA,n.HALF_FLOAT,null):n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);let a=n.createFramebuffer();return n.bindFramebuffer(n.FRAMEBUFFER,a),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0),{fb:a,tex:i,w:e,h:t}}function ht(){let e=r;X&&(e.deleteFramebuffer(X.fb),e.deleteTexture(X.tex),e.deleteRenderbuffer(X.depth));for(let t of Z)e.deleteFramebuffer(t.fb),e.deleteTexture(t.tex);Q&&(e.deleteFramebuffer(Q.fb),e.deleteTexture(Q.tex)),X=null,Z=[],Q=null}function gt(){let e=r;return ct||(ct=e.createTexture(),e.bindTexture(e.TEXTURE_2D,ct),e.texImage2D(e.TEXTURE_2D,0,e.RGBA8,1,1,0,e.RGBA,e.UNSIGNED_BYTE,new Uint8Array([0,0,0,255])),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),ct)}function _t(){let t=r;if(t.isContextLost())return;ht();let n=Math.max(1,e.width),a=Math.max(1,e.height),o=mt(n,a),s=t.createRenderbuffer();t.bindRenderbuffer(t.RENDERBUFFER,s),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT24,n,a),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,s),X={...o,depth:s};let c=Math.max(1,n>>1),l=Math.max(1,a>>1);for(let e=0;e<Math.max(1,i.bloomLevels);e++)Z.push(mt(c,l)),c=Math.max(1,c>>1),l=Math.max(1,l>>1);i.refraction&&(Q=mt(n,a)),t.bindFramebuffer(t.FRAMEBUFFER,null),p.bytes=n*a*(lt?8:4)*(1.4+ +!!Q)+n*a*4}function vt(){let t=!0,n=0;for(let e of qe)e()||(t=!1,n++);return p.pending=n,t&&e.dataset.ready!==`1`&&(e.dataset.ready=`1`),t}function yt(e){let t=1e9,n=-1e9,r=1e9,i=-1e9,a=0;for(let o of e.plates){let e=Math.max(o.w,o.h);t=Math.min(t,o.x-e),n=Math.max(n,o.x+e),r=Math.min(r,o.y-e),i=Math.max(i,o.y+e),a=Math.max(a,Math.hypot(Math.abs(o.x)+o.w,Math.abs(o.y)+o.h))}ee=Math.max(.75,a*.95),T===null&&(x=ee),Le=0;let o=(e,t,n,r,i,a,o,s)=>{let c=Le++*M;Ie.set([e,t,n,r,i,0,0,s,a,o,0,0,1,0,0,0],c)},s=(t+n)/2,c=(r+i)/2,l=Math.max(.2,(n-t)/2-.08),u=Math.max(.2,(i-r)/2-.08);o(s,c,0,2,0,l,u,.03),o(s,r-.22,0,2,0,.05,.24,.05),o(s,r-.48,0,2,Math.PI/2,.5,.5,.03),o(s-l-.03,c,0,2,0,.03,u+.04,.06),o(s+l+.03,c,0,2,0,.03,u+.04,.06),V.x0=s-l-.12,V.x1=s+l+.12,V.y=r-.18}function $(e,t,n,r,o,s,c=.035){let l=Math.min(H,i.maxParticles),d=a?Math.ceil(r*.2):r,f=s>=0?s*3:-1;for(let r=0;r<d;r++){let r=U.n<l?U.n++:Math.floor(W()*l),i=W()*Math.PI*2,a=Math.acos(2*W()-1),s=o*(.3+W()*.7);U.x[r]=e,U.y[r]=t,U.z[r]=n,U.vx[r]=Math.sin(a)*Math.cos(i)*s,U.vy[r]=Math.abs(Math.cos(a))*s*.8+s*.3,U.vz[r]=Math.sin(a)*Math.sin(i)*s+(n>=0?.6:-.6)*s,U.ttl[r]=.35+W()*.6,U.life[r]=U.ttl[r],U.size[r]=c*(.5+W());let d=W()<.5||f<0;U.rgb[r*3]=d?1:u[f],U.rgb[r*3+1]=d?.78:u[f+1],U.rgb[r*3+2]=d?.45:u[f+2]}}function bt(e){let t=Math.exp(-1.8*e),n=0;for(;n<U.n;){if(U.life[n]-=e,U.life[n]<=0){let e=--U.n;n!==e&&(U.x[n]=U.x[e],U.y[n]=U.y[e],U.z[n]=U.z[e],U.vx[n]=U.vx[e],U.vy[n]=U.vy[e],U.vz[n]=U.vz[e],U.life[n]=U.life[e],U.ttl[n]=U.ttl[e],U.size[n]=U.size[e],U.rgb[n*3]=U.rgb[e*3],U.rgb[n*3+1]=U.rgb[e*3+1],U.rgb[n*3+2]=U.rgb[e*3+2]);continue}U.vx[n]*=t,U.vy[n]=U.vy[n]*t-6*e,U.vz[n]*=t,U.x[n]+=U.vx[n]*e,U.y[n]+=U.vy[n]*e,U.z[n]+=U.vz[n]*e;let r=n*we;U.gpu[r]=U.x[n],U.gpu[r+1]=U.y[n],U.gpu[r+2]=U.z[n],U.gpu[r+3]=U.size[n],U.gpu[r+4]=U.rgb[n*3],U.gpu[r+5]=U.rgb[n*3+1],U.gpu[r+6]=U.rgb[n*3+2],U.gpu[r+7]=U.life[n]/U.ttl[n],n++}return U.n}function xt(e,t,n,r){if(i.maxShockwaves<=0||a||!ge(Ne,e,t,n,P))return;let o=Re++%Math.min(3,i.maxShockwaves)*4;z[o]=P[0]*.5+.5,z[o+1]=P[1]*.5+.5,z[o+2]=0,z[o+3]=r}function St(e,t){for(let n=0;n<t.length;n++){let r=t.at(n);switch(r.type){case`screwTapped`:r.screw>=0&&(ze[r.screw]=.5),$(r.x,r.y,r.z,4,.6,-1,.02);break;case`unscrewTick`:$(r.x,r.y,r.z,6,.7,-1,.018);break;case`screwBlocked`:r.screw>=0&&(Be[r.screw]=.3),S=Math.min(1,S+.08);break;case`screwFreed`:$(r.x,r.y,r.z,18,1.6,r.color,.03);break;case`plateFell`:{let t=e.def.plates[r.plate];if(t)for(let n of t.screws)$(e.def.screws[n].x,e.def.screws[n].y,e.def.screws[n].z,10,1.4,-1,.03);xt(r.x,r.y,r.z,.9),S=Math.min(1,S+.22);break}case`layerRevealed`:xt(r.x,r.y,r.z,.5),w=Math.max(w,.3);break;case`crateSealed`:w=Math.max(w,.45);break;case`levelWon`:w=1,xt(0,0,0,1);break;case`levelLost`:S=Math.min(1,S+.4);break;case`boosterUsed`:r.value===2?(B=1,S=Math.min(1,S+.12),w=Math.max(w,.25)):r.value===3&&r.screw>=0&&r.screw<240&&(Ve[r.screw]=Ce,w=Math.max(w,.2))}}}function Ct(e){if(B<0)return;let t=B;B-=e/Se;let n=1-Math.max(0,B),r=V.x0+(V.x1-V.x0)*_e(n);$(r,V.y+(W()-.5)*.08,0,5,.9,1,.026),t>=.5&&B<.5&&xt(r,V.y,0,.45),B<=0&&(B=-1,$(V.x1,V.y,0,14,1.5,1,.032),xt(V.x1,V.y,0,.7))}function wt(e,t){if(!b){m.azimuth+=v*e,m.elevation+=y*e;let t=Math.exp(-4.5*e);v*=t,y*=t,Math.abs(v)<.01&&(v=0),Math.abs(y)<.01&&(y=0),m.elevation+=(.2-m.elevation)*Math.min(1,e*.4)}m.elevation=Math.max(-1.15,Math.min(1.15,m.elevation)),x+=(ee-x)*Math.min(1,e*3);let n=g/_,r=h.top,i=_-h.bottom,o=Math.max(.25,(i-r)/_),s=Math.tan(be/2),c=_e((C-D)/.42),l=t.phase===`won`?Math.min(1,(C-Tt)*1.2):0,u=Math.max(x/(.98*s*n),x/(o*1*s))*m.zoom*(1+(1-c)*.35+l*(a?0:.12));m.distance=u;let d=Math.cos(m.elevation),f=Math.sin(m.azimuth)*d*u,p=Math.sin(m.elevation)*u,w=Math.cos(m.azimuth)*d*u;if(S=Math.max(S,t.trauma),!a&&S>0){let e=S*S*.06*u*.15;f+=Math.sin(C*34.1)*e,p+=Math.sin(C*29.7+1.3)*e}S=Math.max(0,S-1.6*e),N[0]=f,N[1]=p,N[2]=w,me(A,f,p,w,0,-(1-c)*.3,0),pe(O,be,n,.1,u*4);let T=1-(r+i)/2/_*2;O[9]=-T,he(Ne,O,A)}let Tt=0;function Et(e){let t=0,n=A[2],r=A[6],i=A[10];for(let a of e.plates){if(a.state===`gone`)continue;let e=t*M,o=a.state===`falling`,s=o?C-Dt[a.id]:0;I[e]=a.x,I[e+1]=a.y,I[e+2]=a.z,I[e+3]=xe[a.shape],I[e+4]=a.rx,I[e+5]=a.ry,I[e+6]=a.rz,I[e+7]=a.t*.5,I[e+8]=a.w,I[e+9]=a.h,I[e+10]=a.tint,I[e+11]=+!!a.opaque,I[e+12]=o?Math.max(0,1-s*.8):1,I[e+13]=o?Math.max(0,.5-s*3):0,I[e+14]=0,I[e+15]=0,Fe[t]=(a.x-N[0])*n+(a.y-N[1])*r+(a.z-N[2])*i,L[t]=t,t++}for(let e=1;e<t;e++){let t=L[e],n=Fe[t],r=e-1;for(;r>=0&&Fe[L[r]]>n;)L[r+1]=L[r],r--;L[r+1]=t}for(let e=0;e<t;e++){let t=L[e]*M;for(let n=0;n<M;n++)Pe[e*M+n]=I[t+n]}return t}let Dt=new Float32Array(120);function Ot(e,t){let n=0;g/2;let r=_/2,i=O[5];for(let a of e.screws){let o=a.id,s=o*4;if(F[s+3]=0,o>=240)break;if(a.state===`crated`||a.state===`railed`||a.state===`gone`||a.state===`flying`&&a.fromRail)continue;let c=a.x,l=a.y,u=a.z,d=0,f=0,p=1,m=ye;if(a.state===`turning`)d=a.progress*a.threads*.03,f=a.progress*a.threads*Math.PI*4;else if(a.state===`flying`){let t=Math.min(1,(e.time-a.since)/(320/1e3));if(f=a.threads*Math.PI*4+t*Math.PI*6,Ue[o]&&_>1){let e=a.threads*.03+.12,n=c+a.ax*e,r=l+a.ay*e,i=u+a.az*e,s=A[2],d=A[6],f=A[10],h=Math.max(.5,-((n-N[0])*s+(r-N[1])*d+(i-N[2])*f)),v=He[o*2]/g*2-1,y=1-He[o*2+1]/_*2+O[9],b=v*h/O[0],x=y*h/O[5],ee=N[0]+A[0]*b+A[1]*x-s*h,S=N[1]+A[4]*b+A[5]*x-d*h,C=N[2]+A[8]*b+A[9]*x-f*h,w=Math.min(1,t/.22),T=t<.22?0:ve((t-.22)/.78),E=(1-(1-w)*(1-w))*.32*(1-T),D=Math.sin(T*Math.PI)*.25*h*.1;c=n+(ee-n)*T+a.ax*E+A[1]*D,l=r+(S-r)*T+a.ay*E+A[5]*D,u=i+(C-i)*T+a.az*E+A[9]*D,p=t>.9?1-(t-.9)*10:1,m*=1-.3*T}else d=a.threads*.03+t*.45,l-=t*t*1.6,p=1-t*t,m*=1-.35*t}if(Be[o]>0&&(Be[o]=Math.max(0,Be[o]-t),c+=Math.sin(Be[o]*60)*.02*(Be[o]/.3)),Ve[o]>0){Ve[o]=Math.max(0,Ve[o]-t);let e=Ve[o]/Ce;f-=e*e*Math.PI*7,d+=e*e*.075}ze[o]>0&&(ze[o]=Math.max(0,ze[o]-t*3));let h=a.state===`fixed`,v=n*M;R[v]=c,R[v+1]=l,R[v+2]=u,R[v+3]=m*(1+ze[o]*.16),R[v+4]=a.ax,R[v+5]=a.ay,R[v+6]=a.az,R[v+7]=f+o*.7,R[v+8]=a.color,R[v+9]=h&&a.reachable&&e.phase!==`won`&&e.phase!==`lost`?1:0,R[v+10]=d,R[v+11]=a.reachable||!h?0:1,R[v+12]=p,R[v+13]=h&&a.blocked?1:0,R[v+14]=ze[o],R[v+15]=+(a.plateCount>1),n++;let y=c+a.ax*(d+m*.4),b=l+a.ay*(d+m*.4),x=u+a.az*(d+m*.4);if(ge(Ne,y,b,x,P)){F[s]=(P[0]*.5+.5)*g,F[s+1]=(.5-P[1]*.5)*_,F[s+2]=m*i/P[2]*r;let e=(N[0]-y)*a.ax+(N[1]-b)*a.ay+(N[2]-x)*a.az;F[s+3]=h&&a.reachable&&e>0?1:0}}return n}function kt(e,t,n,i,a,o){if(i<=0||!G)return;let s=r;s.uniform1i(G.uniforms.u_kind,a),s.bindVertexArray(e),s.bindBuffer(s.ARRAY_BUFFER,t),s.bufferSubData(s.ARRAY_BUFFER,0,n,0,i*M),s.drawElementsInstanced(s.TRIANGLES,o,s.UNSIGNED_SHORT,0,i),p.drawCalls++,p.triangles+=o/3*i}function At(){r.bindVertexArray(Ze),r.drawArrays(r.TRIANGLES,0,3),p.drawCalls++}let jt=e=>{e.preventDefault(),G=K=q=J=Ge=Ke=Y=null,qe=[],X=null,Z=[]},Mt=()=>pt();return e.addEventListener(`webglcontextlost`,jt),e.addEventListener(`webglcontextrestored`,Mt),pt(),{get ready(){return G!==null&&Y!==null&&K!==null},get tier(){return i.tier},stats:p,camera:m,resize(t,n,r){g=Math.max(1,t),_=Math.max(1,n);let a=Math.min(r,i.maxDpr),o=Math.max(1,Math.round(g*a)),s=Math.max(1,Math.round(_*a));(e.width!==o||e.height!==s||!X)&&(e.width=o,e.height=s,_t())},setInsets(e){h=e},render(t,n,s){let l=r;if(l.isContextLost())return;C+=s,p.drawCalls=0,p.triangles=0,(t.def!==T||t.runId!==E)&&(t.runId!==E&&(D=C),E=t.runId,yt(t.def),T=t.def,U.n=0,Ve.fill(0),B=-1),t.phase===`won`&&Tt<D&&(Tt=C);for(let e of t.plates)e.state===`falling`&&Dt[e.id]<D&&(Dt[e.id]=C);if(!vt()||!X||!G||!K||!q||!J||!Ge||!Ke||!Y){l.bindFramebuffer(l.FRAMEBUFFER,null),l.viewport(0,0,e.width,e.height),l.clearColor(c[0],c[1],c[2],1),l.clear(l.COLOR_BUFFER_BIT);return}wt(s,t),St(t,n),Ct(s);let f=X.w,h=X.h;l.bindFramebuffer(l.FRAMEBUFFER,X.fb),l.viewport(0,0,f,h),l.disable(l.BLEND),l.disable(l.DEPTH_TEST),l.depthMask(!1),l.useProgram(K.program),l.uniform2f(K.uniforms.u_res,f,h),l.uniform1f(K.uniforms.u_time,C),l.uniform1f(K.uniforms.u_az,m.azimuth),l.uniform1f(K.uniforms.u_el,m.elevation),l.uniform1f(K.uniforms.u_range,ut),l.uniform1i(K.uniforms.u_octaves,i.bgOctaves),l.uniform1f(K.uniforms.u_danger,t.railFill>=1?1:t.railFill>=.8?.35:0),At(),l.enable(l.DEPTH_TEST),l.depthFunc(l.LEQUAL),l.depthMask(!0),l.clear(l.DEPTH_BUFFER_BIT),l.useProgram(G.program),l.uniformMatrix4fv(G.uniforms.u_vp,!1,Ne),l.uniform3f(G.uniforms.u_eye,N[0],N[1],N[2]),l.uniform1f(G.uniforms.u_time,C),l.uniform1f(G.uniforms.u_xray,Math.min(1,t.xray*4)),l.uniform1f(G.uniforms.u_range,ut),l.uniform1f(G.uniforms.u_glyph,o?1.25:1),l.uniform3fv(G.uniforms.u_colors,u),l.uniform3fv(G.uniforms.u_tints,d),l.uniform2f(G.uniforms.u_res,f,h),l.uniform1f(G.uniforms.u_refract,0),l.activeTexture(l.TEXTURE3),l.bindTexture(l.TEXTURE_2D,gt()),l.uniform1i(G.uniforms.u_opaque,3),kt($e,rt,Ie,Le,0,ot);let g=Ot(t,s);kt(et,it,R,g,1,st),Q&&(l.activeTexture(l.TEXTURE3),l.bindTexture(l.TEXTURE_2D,Q.tex),l.copyTexSubImage2D(l.TEXTURE_2D,0,0,0,0,0,f,h),l.uniform1f(G.uniforms.u_refract,1)),l.enable(l.BLEND),l.blendFunc(l.SRC_ALPHA,l.ONE_MINUS_SRC_ALPHA);let _=Et(t);kt(Qe,nt,Pe,_,0,ot),Q&&l.uniform1f(G.uniforms.u_refract,0);let v=bt(t.hitStop>0&&!a?0:s);p.particles=v,v>0&&(l.depthMask(!1),l.blendFunc(l.ONE,l.ONE),l.useProgram(q.program),l.uniformMatrix4fv(q.uniforms.u_vp,!1,Ne),l.uniform1f(q.uniforms.u_scale,O[5]*h*.5),l.uniform1f(q.uniforms.u_range,ut),l.bindVertexArray(tt),l.bindBuffer(l.ARRAY_BUFFER,at),l.bufferSubData(l.ARRAY_BUFFER,0,U.gpu,0,v*we),l.drawArrays(l.POINTS,0,v),p.drawCalls++),l.disable(l.DEPTH_TEST),l.depthMask(!0),l.disable(l.BLEND);let y=Z.length;l.activeTexture(l.TEXTURE0),l.useProgram(J.program),l.uniform1i(J.uniforms.u_tex,0),l.uniform1f(J.uniforms.u_threshold,.9),l.uniform1f(J.uniforms.u_range,ut),l.uniform2f(J.uniforms.u_texel,1/f,1/h),l.bindFramebuffer(l.FRAMEBUFFER,Z[0].fb),l.viewport(0,0,Z[0].w,Z[0].h),l.bindTexture(l.TEXTURE_2D,X.tex),At(),l.useProgram(Ge.program),l.uniform1i(Ge.uniforms.u_tex,0);for(let e=1;e<y;e++){let t=Z[e-1],n=Z[e];l.bindFramebuffer(l.FRAMEBUFFER,n.fb),l.viewport(0,0,n.w,n.h),l.uniform2f(Ge.uniforms.u_texel,1/t.w,1/t.h),l.bindTexture(l.TEXTURE_2D,t.tex),At()}l.useProgram(Ke.program),l.uniform1i(Ke.uniforms.u_tex,0),l.enable(l.BLEND),l.blendFunc(l.ONE,l.ONE);for(let e=y-1;e>0;e--){let t=Z[e],n=Z[e-1];l.bindFramebuffer(l.FRAMEBUFFER,n.fb),l.viewport(0,0,n.w,n.h),l.uniform2f(Ke.uniforms.u_texel,1/t.w,1/t.h),l.bindTexture(l.TEXTURE_2D,t.tex),At()}l.disable(l.BLEND);for(let e=0;e<3;e++)z[e*4+2]+=s,z[e*4+2]>1.4&&(z[e*4+3]=0);w=Math.max(0,w-s*1.1),l.bindFramebuffer(l.FRAMEBUFFER,null),l.viewport(0,0,e.width,e.height),l.useProgram(Y.program),l.uniform1i(Y.uniforms.u_scene,0),l.uniform1i(Y.uniforms.u_bloom,1),l.activeTexture(l.TEXTURE1),l.bindTexture(l.TEXTURE_2D,Z[0].tex),l.activeTexture(l.TEXTURE0),l.bindTexture(l.TEXTURE_2D,X.tex),l.uniform2f(Y.uniforms.u_res,e.width,e.height),l.uniform1f(Y.uniforms.u_time,C),l.uniform1f(Y.uniforms.u_range,ut),l.uniform1f(Y.uniforms.u_bloomGain,.55+w*.9+(t.flowMul-1)*.05),l.uniform1f(Y.uniforms.u_warm,Math.min(1,(t.flowMul-1)*.22)),l.uniform1f(Y.uniforms.u_danger,t.railFill>=1?.8:t.railFill>=.8?.3:0),l.uniform1f(Y.uniforms.u_desat,t.phase===`lost`?.65:0),l.uniform1f(Y.uniforms.u_grain,i.grain),l.uniform4fv(Y.uniforms.u_waves,z),At(),l.bindVertexArray(null)},pick(e,t){let n=-1,r=1e9;for(let i=0;i<240;i++){let a=i*4;if(F[a+3]!==1)continue;let o=F[a]-e,s=F[a+1]-t,c=Math.hypot(o,s);c<=Math.max(22,F[a+2]*1.35)&&c<r&&(r=c,n=i)}return n},screwScreenPos(e,t){return e<0||e>=240?!1:(t.x=F[e*4],t.y=F[e*4+1],F[e*4+3]===1)},orbit(e,t){b=!0,m.azimuth+=e,m.elevation+=t},orbitRelease(e,t){b=!1,v=Math.max(-8,Math.min(8,e)),y=Math.max(-8,Math.min(8,t))},setZoom(e){m.zoom=Math.max(.7,Math.min(1.6,e))},reframe(){m.zoom=1,v=y=0},setQuality(e){i=s[e],_t()},setReducedMotion(e){a=e},setFlyTarget(e,t,n){e<0||e>=240||(Ue[e]=Number.isFinite(t)&&Number.isFinite(n)?1:0,He[e*2]=t,He[e*2+1]=n)},setBigGlyphs(e){o=e},shake(e){a||(S=Math.min(1,S+e))},burst(e,t,n,r,i){$(e,t,n,r,1.5,i)},dispose(){if(e.removeEventListener(`webglcontextlost`,jt),e.removeEventListener(`webglcontextrestored`,Mt),!r.isContextLost()){ht();for(let e of Je)r.deleteProgram(e);for(let e of Ye)r.deleteBuffer(e);for(let e of Xe)r.deleteVertexArray(e);Je=[],Ye=[],Xe=[]}}}};function N(e){for(let t of e.def.screws)if(t.plates.length>1)return!0;return!1}function P(e){for(let t of e.rail)if(!(e.screws[t]?.state!==`railed`||t>=e.def.screws.length))for(let n of e.def.screws[t].plates){let t=e.plates[n].state;if(t===`pinned`||t===`swinging`)return!0}return!1}function F(){return window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1}function I(e){document.documentElement.dataset.reduced=e?`1`:`0`}var Pe=class{canvas;hud;audio;engine;renderer;quality=E();qualityMode=`auto`;autoTier=`high`;slowFrames=0;showcasing=!1;ro;debug;raf=0;last=0;disposed=!1;running=!1;rect={left:0,top:0};seen=new Set;reported=null;captionUntil=0;clock=0;lastPhase=`boot`;fpsFrames=0;fpsTime=0;downX=0;downY=0;lastX=0;lastY=0;lastMoveT=0;vA=0;vE=0;downT=0;pointerId=-1;orbiting=!1;lastTapT=0;pinchDist=0;pointers=new Map;keys={l:!1,r:!1,u:!1,d:!1};vibration=!0;onResult=null;onSnapshot=null;onFirstInput=null;onBoosterUsed=null;ghost=null;live=null;liveCopy=null;ghostOn=!1;ghostAt=0;ghostPos={x:0,y:0};reducedMode=`auto`;reduced=!1;motionQuery=window.matchMedia?.(`(prefers-reduced-motion: reduce)`)??null;constructor(e,t,n,r=[],i=`auto`){this.canvas=e,this.hud=t,this.audio=n;let a=new URLSearchParams(window.location.search);this.debug=a.has(`debug`);for(let e of r)this.seen.add(e);this.engine=w({mode:`teardown`,level:1,seen:{spin:!0}});let o=F();this.reduced=o,I(o),this.qualityMode=i,this.autoTier=u({dpr:window.devicePixelRatio||1,cores:navigator.hardwareConcurrency,memoryGb:navigator.deviceMemory,mobile:window.matchMedia?.(`(pointer: coarse)`).matches??!1,reducedMotion:o});let s=i===`auto`?this.autoTier:i;this.renderer=Ne(e,{quality:s,reducedMotion:o});let c=this.renderer?`webgl2`:`none`;e.dataset.gl=c,this.hud.set({gl:c}),this.ro=new ResizeObserver(()=>this.applySize()),this.ro.observe(e),this.applySize(),e.addEventListener(`pointerdown`,this.onDown),e.addEventListener(`pointermove`,this.onMove),e.addEventListener(`pointerup`,this.onUp),e.addEventListener(`pointercancel`,this.onUp),e.addEventListener(`wheel`,this.onWheel,{passive:!1}),e.addEventListener(`contextmenu`,this.preventDefault),window.addEventListener(`keydown`,this.onKey),window.addEventListener(`keyup`,this.onKeyUp),document.addEventListener(`visibilitychange`,this.onVisibility),window.addEventListener(`pagehide`,this.onPageHide),this.motionQuery?.addEventListener?.(`change`,this.onMotionQuery),this.loop()}start(e){this.showcasing&&(this.showcasing=!1,this.renderer?.orbitRelease(0,0)),this.audio.unlock(),this.engine.reset({...e,seen:{spin:this.seen.has(`hintSpin`)}}),this.running=!0,this.audio.music(`play`),this.audio.setDucked(!1),this.captionUntil=0,this.ghostOn=!this.seen.has(`hintSpin`)&&e.mode===`teardown`,this.ghostAt=0,this.seen.has(`hintSpin`)?!this.seen.has(`hintBolt`)&&N(this.engine.state)?this.caption(`hintBolt`,4.2):this.hud.set({caption:``}):this.caption(`hintSpin`,6),this.publish(!0)}showcase(e){this.running=!1,this.showcasing=!0,this.ghostOn=!1,this.engine.reset({mode:`teardown`,level:Math.max(1,e),seen:{spin:!0}}),this.engine.flush(),this.renderer?.reframe()}stop(){this.running=!1,this.audio.music(`menu`),this.hud.set({phase:`idle`})}pause(){this.engine.input({kind:`pause`}),this.audio.setDucked(!0),this.publish(!0)}resume(){this.engine.input({kind:`resume`}),this.audio.setDucked(!1),this.last=0,this.publish(!0)}booster(e){this.engine.input({kind:`booster`,booster:e})}continueRun(e){let t=this.engine.state.phase;this.engine.input({kind:`continue`,rescue:e}),this.engine.state.phase!==t&&(e||this.audio.sfx(`continue`),this.audio.music(`play`),this.reported=null,this.hud.set({result:null}),this.publish(!0))}setQuality(e){this.qualityMode=e,this.renderer?.setQuality(e===`auto`?this.autoTier:e),this.quality.scale=1,this.quality.avgMs=16.7,this.quality.cooldown=30,this.slowFrames=0,this.applySize()}adaptTier(e){if(this.qualityMode!==`auto`||!this.renderer||!this.running||e>250)return;let t=this.quality;if(t.scale<=.501&&t.avgMs>24?this.slowFrames++:this.slowFrames=Math.max(0,this.slowFrames-2),this.slowFrames<240)return;this.slowFrames=0;let n=this.autoTier===`high`?`medium`:this.autoTier===`medium`?`low`:null;n&&(this.autoTier=n,this.renderer.setQuality(n),t.scale=.8,t.cooldown=120,this.applySize())}seenCaptions(){return[...this.seen]}setBigGlyphs(e){this.renderer?.setBigGlyphs(e)}setReducedMotion(e){this.reducedMode=e;let t=e===`auto`?F():e===`on`;this.reduced=t,this.renderer?.setReducedMotion(t),I(t)}get reducedMotion(){return this.reduced}setInsets(e,t){this.renderer?.setInsets({top:e,bottom:t,left:0,right:0})}screwPos(e){let t={x:0,y:0};return this.renderer?.screwScreenPos(e,t)?t:null}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.ro.disconnect();let e=this.canvas;e.removeEventListener(`pointerdown`,this.onDown),e.removeEventListener(`pointermove`,this.onMove),e.removeEventListener(`pointerup`,this.onUp),e.removeEventListener(`pointercancel`,this.onUp),e.removeEventListener(`wheel`,this.onWheel),e.removeEventListener(`contextmenu`,this.preventDefault),window.removeEventListener(`keydown`,this.onKey),window.removeEventListener(`keyup`,this.onKeyUp),this.motionQuery?.removeEventListener?.(`change`,this.onMotionQuery),document.removeEventListener(`visibilitychange`,this.onVisibility),window.removeEventListener(`pagehide`,this.onPageHide),this.renderer?.dispose()}applySize(){let e=this.canvas.clientWidth||1,t=this.canvas.clientHeight||1,n=this.canvas.getBoundingClientRect();this.rect={left:n.left,top:n.top},this.renderer?.resize(e,t,D(window.devicePixelRatio,this.quality))}loop=()=>{this.disposed||(this.raf=requestAnimationFrame(this.frame))};frame=e=>{this.loop();let t=this.last?e-this.last:16.7;this.last=e;let n=Math.min(t,100)/1e3;this.clock+=n,O(this.quality,t)&&this.applySize(),this.adaptTier(t);let r=this.engine,i=this.keys;if(this.renderer&&(i.l||i.r||i.u||i.d)&&this.renderer.orbit((+!!i.r-!!i.l)*.9*n*2,(+!!i.u-!!i.d)*.9*n),this.running?r.step(n,t):this.showcasing&&this.renderer&&!document.hidden&&this.renderer.orbit(n*.28,(.32-this.renderer.camera.elevation)*Math.min(1,n*1.5)),this.handleEvents(),this.renderer)try{this.renderer.render(r.state,r.events,n,1)}catch(e){console.error(e),this.renderer.dispose(),this.renderer=null,this.canvas.dataset.gl=`none`,this.hud.set({gl:`none`})}r.flush(),r.state.phase!==this.lastPhase&&(this.lastPhase=r.state.phase,this.running&&this.publish(!1)),this.captionUntil&&this.clock>this.captionUntil&&(this.captionUntil=0,this.hud.set({caption:``})),this.updateGhost(),this.debug&&this.measureFps(n)};updateGhost(){let e=this.ghost;if(!e)return;let t=this.engine.state;if(!(this.ghostOn&&this.running&&t.tutorial!==`none`&&t.phase===`playing`&&this.clock>1.2&&!this.orbiting)){e.dataset.on===`1`&&(e.dataset.on=`0`);return}if(this.clock-this.ghostAt>.4){this.ghostAt=this.clock;let n=!1,r=t.screws[t.tutorialTarget];r&&r.state===`fixed`&&r.reachable&&!r.blocked&&(n=this.renderer?.screwScreenPos(r.id,this.ghostPos)??!1);for(let e=0;e<2&&!n;e++)for(let r of t.screws)if(r.state===`fixed`&&r.reachable&&!r.blocked&&(e!==0||t.crates.some(e=>e.color===r.color&&!e.sealing&&e.filled<3))&&this.renderer?.screwScreenPos(r.id,this.ghostPos)){n=!0;break}if(!n)return;e.style.transform=`translate3d(${this.ghostPos.x.toFixed(1)}px, ${this.ghostPos.y.toFixed(1)}px, 0)`}e.dataset.on!==`1`&&(e.dataset.on=`1`)}aimFlight(e){let t=this.renderer;if(!t||e<0)return;let n=this.engine.state.screws[e];if(!n)return;let r=n.toCrate!==!1,i=null;if(r){let e=this.engine.state.crates[n.slot],t=Math.max(0,Math.min(2,(e?.filled??1)-1));i=document.querySelector(`.crate[data-slot="${n.slot}"] .socket:nth-child(${t+1})`)}else i=document.querySelectorAll(`.rail__slot`)[n.slot]??null;if(!i){t.setFlyTarget(e,NaN,NaN);return}let a=i.getBoundingClientRect(),o=this.canvas.getBoundingClientRect();t.setFlyTarget(e,a.left+a.width/2-o.left,a.top+a.height/2-o.top)}caption(e,t=2.4){if(e!==`blocked`){if(this.seen.has(e))return;this.seen.add(e)}this.hud.set({caption:e}),this.captionUntil=this.clock+t,e!==`blocked`&&this.audio.sfx(`hint`)}announce(e){let t=this.live;t&&t.textContent!==e&&(t.textContent=e)}onMotionQuery=()=>{this.reducedMode===`auto`&&this.setReducedMotion(`auto`)};buzz(e){this.vibration&&navigator.vibrate?.(e)}handleEvents(){let e=this.engine,t=e.events;if(t.length===0)return;let n=e.state,r=this.audio,i=!1,a=0;for(let e=0;e<t.length;e++){let o=t.at(e),s=Math.max(-1,Math.min(1,o.x));switch(o.points>a&&(a=o.points),o.type){case`screwTapped`:r.sfx(`tap`,{color:o.color,pan:s}),this.buzz(5);for(let e=0;e<o.value;e++)r.sfx(`ratchet`,{turn:e,turns:o.value,delay:e*.18,pan:s});break;case`screwBlocked`:r.sfx(`blocked`),this.buzz(25),this.caption(`blocked`,1.6);break;case`unscrewTick`:this.buzz(3);break;case`screwFreed`:this.aimFlight(o.screw),r.sfx(`screwFree`,{color:o.color,pan:s}),this.buzz(10),i=!0;break;case`screwSeated`:r.sfx(`seat`,{flow:o.value,pan:s}),this.buzz(6),n.screwsRemoved===1&&this.caption(`hintCrate`),i=!0;break;case`screwRailed`:r.sfx(`rail`),this.buzz(8),this.caption(`hintRail`,3.2),i=!0;break;case`railPull`:r.sfx(`railPull`,{semitones:n.railPulls%7}),this.buzz(6),i=!0;break;case`crateSealed`:{r.sfx(`crateSeal`,{index:o.value}),this.buzz(14),this.caption(`hintSeal`);let e=this.liveCopy;e&&this.announce(e.sealed.replace(`{c}`,e.colors[o.color]??``).replace(`{n}`,String(n.screwsLeft))),i=!0;break}case`crateArrive`:r.sfx(`crateArrive`),i=!0;break;case`flowUp`:r.sfx(`flowUp`,{flow:o.value}),r.setFlow(o.value),this.buzz(10),this.hud.set({praise:o.value,praiseId:this.hud.get().praiseId+1});break;case`flowBreak`:r.sfx(`flowBreak`),r.setFlow(1);break;case`plateSwing`:r.sfx(`creak`,{pan:s});break;case`plateFell`:r.sfx(`plateFall`,{pan:s}),this.buzz(18),i=!0;break;case`layerRevealed`:r.sfx(`layerReveal`),this.buzz(12),this.caption(`hintLayer`),this.liveCopy&&this.announce(this.liveCopy.revealed.replace(`{n}`,String(Math.max(1,o.value))));break;case`railWarning`:r.sfx(`railWarn`),r.music(`tense`);break;case`railCritical`:r.sfx(`railCrit`),r.music(`critical`),this.buzz(20);break;case`xrayStart`:r.sfx(`xrayOn`),this.buzz(8),i=!0;break;case`xrayEnd`:r.sfx(`xrayOff`),i=!0;break;case`boosterUsed`:{let e=p[o.value];r.sfx(e===`magnetRake`?`rake`:e===`rewindSpindle`?`rewind`:`booster`),this.buzz(e===`magnetRake`?24:e===`rewindSpindle`?16:10),e===`magnetRake`&&this.hud.set({rakeId:this.hud.get().rakeId+1}),e&&this.onBoosterUsed?.(e),i=!0;break}case`levelWon`:o.value>=0?(r.sfx(`win`),r.music(`result`),this.buzz(30)):r.sfx(`shelve`),i=!0;break;case`levelLost`:r.sfx(`lose`),r.music(`result`),this.buzz(24),this.liveCopy&&this.announce(this.liveCopy.jammed),i=!0;break;case`tutorial`:this.ghostOn=!1,this.ghost?.dataset.on===`1`&&(this.ghost.dataset.on=`0`),this.hud.get().caption===`hintSpin`&&(this.captionUntil=0,this.hud.set({caption:``}))}}a>0&&(this.hud.set({gain:a,gainId:this.hud.get().gainId+1}),i=!0),n.rail.length<n.railSlots-1&&n.phase===`playing`&&r.music(`play`),r.setIntensity(n.railFill*.6+n.flowMul*.08),(i||n.phase!==this.hud.get().phase)&&this.publish(!1),n.result&&(n.phase===`won`||n.phase===`lost`)&&this.reported!==n.result&&(this.reported=n.result,this.hud.get().result!==n.result&&this.hud.set({result:n.result}),this.onResult?.(n.result))}publish(e){let t=this.engine.state,n=this.hud.get(),r=[],i=n.crates.length===3;for(let e=0;e<3;e++){let a=t.crates[e],o=a.screws.filter(e=>t.screws[e].state===`crated`||t.screws[e].state===`gone`).length,s={id:a.id,color:a.color,filled:o,sealing:a.sealing},c=n.crates[e];(!c||c.id!==s.id||c.filled!==s.filled||c.sealing!==s.sealing||c.color!==s.color)&&(i=!1),r.push(s)}let a=t.rail.filter(e=>t.screws[e].state===`railed`).map(e=>t.screws[e].color),o=a.length===n.rail.length&&a.every((e,t)=>e===n.rail[t]);this.hud.set({mode:t.mode,level:t.level,phase:this.running?t.phase:`idle`,runId:t.runId,score:t.score,flowMul:t.flowMul,crates:i&&!e?n.crates:r,rail:o&&!e?n.rail:a,railSlots:t.railSlots,lens:t.boosters.lumenLens,spare:t.boosters.spareRail,rake:t.boosters.magnetRake,rewind:t.boosters.rewindSpindle,canRewind:P(t),xray:t.xray>0,screwsLeft:t.screwsLeft,screwsTotal:t.def.screws.length,result:t.result}),this.canvas.dataset.phase=t.phase}onDown=e=>{e.preventDefault(),this.audio.unlock(),this.onFirstInput?.(),this.canvas.setPointerCapture?.(e.pointerId);let t=e.clientX-this.rect.left,n=e.clientY-this.rect.top;if(this.pointers.set(e.pointerId,{x:t,y:n}),this.pointers.size===2){let[e,t]=[...this.pointers.values()];this.pinchDist=Math.hypot(e.x-t.x,e.y-t.y),this.orbiting=!0;return}this.pointerId=e.pointerId,this.downX=this.lastX=t,this.downY=this.lastY=n,this.downT=this.lastMoveT=performance.now(),this.vA=this.vE=0,this.orbiting=!1};onMove=e=>{if(!this.pointers.has(e.pointerId))return;let t=e.clientX-this.rect.left,n=e.clientY-this.rect.top;if(this.pointers.set(e.pointerId,{x:t,y:n}),this.pointers.size===2&&this.renderer){let[e,t]=[...this.pointers.values()],n=Math.hypot(e.x-t.x,e.y-t.y);this.pinchDist>0&&this.renderer.setZoom(this.renderer.camera.zoom*(this.pinchDist/n)),this.pinchDist=n;return}if(e.pointerId===this.pointerId){if(!this.orbiting&&Math.hypot(t-this.downX,n-this.downY)>12&&(this.orbiting=!0),this.orbiting&&this.renderer){let e=2.6/Math.max(320,Math.min(this.canvas.clientWidth,this.canvas.clientHeight)),r=-(t-this.lastX)*e,i=(n-this.lastY)*e;this.renderer.orbit(r,i);let a=performance.now(),o=Math.max(1,a-this.lastMoveT)/1e3;this.vA=this.vA*.6+r/o*.4,this.vE=this.vE*.6+i/o*.4,this.lastMoveT=a}this.lastX=t,this.lastY=n}};onUp=e=>{if(this.pointers.delete(e.pointerId),e.pointerId!==this.pointerId)return;this.pointerId=-1;let t=performance.now();if(this.orbiting){let e=t-this.lastMoveT>80;this.renderer?.orbitRelease(e?0:this.vA,e?0:this.vE),this.orbiting=!1;return}if(this.renderer?.orbitRelease(0,0),t-this.downT>500)return;let n=this.showcasing?-1:this.renderer?.pick(this.downX,this.downY)??-1;n>=0?this.engine.input({kind:`tapScrew`,screw:n}):t-this.lastTapT<320&&this.renderer?.reframe(),this.lastTapT=t};onWheel=e=>{e.preventDefault(),this.renderer&&this.renderer.setZoom(this.renderer.camera.zoom*(1+Math.sign(e.deltaY)*.08))};onKey=e=>{let t=e.key;if(t===`ArrowLeft`||t===`a`||t===`A`)this.keys.l=!0;else if(t===`ArrowRight`||t===`d`||t===`D`)this.keys.r=!0;else if(t===`ArrowUp`||t===`w`||t===`W`)this.keys.u=!0;else if(t===`ArrowDown`||t===`s`||t===`S`)this.keys.d=!0;else if((t===` `||t===`Enter`)&&this.running&&this.engine.state.phase!==`won`&&this.engine.state.phase!==`lost`){let t=e.target;if(t&&(t.tagName===`BUTTON`||t.tagName===`INPUT`))return;e.preventDefault(),this.unscrewNearestCentre()}else t===`x`||t===`X`?this.booster(`lumenLens`):t===`m`||t===`M`?this.booster(`magnetRake`):t===`z`||t===`Z`?this.booster(`rewindSpindle`):t===`f`||t===`F`?this.renderer?.reframe():t===`+`||t===`=`?this.renderer?.setZoom(this.renderer.camera.zoom*.92):t===`-`&&this.renderer?.setZoom(this.renderer.camera.zoom*1.08)};onKeyUp=e=>{let t=e.key;t===`ArrowLeft`||t===`a`||t===`A`?this.keys.l=!1:t===`ArrowRight`||t===`d`||t===`D`?this.keys.r=!1:t===`ArrowUp`||t===`w`||t===`W`?this.keys.u=!1:(t===`ArrowDown`||t===`s`||t===`S`)&&(this.keys.d=!1)};unscrewNearestCentre(){if(!this.renderer)return;let e=this.canvas.clientWidth/2,t=this.canvas.clientHeight*.36,n={x:0,y:0},r=-1,i=1e9;for(let a of this.engine.state.screws){if(a.state!==`fixed`||!a.reachable||a.blocked||!this.renderer.screwScreenPos(a.id,n))continue;let o=Math.hypot(n.x-e,n.y-t);o<i&&(i=o,r=a.id)}r>=0&&this.engine.input({kind:`tapScrew`,screw:r})}onVisibility=()=>{document.hidden?(this.snapshotOnHide(),cancelAnimationFrame(this.raf),this.audio.suspend()):(this.last=0,this.audio.resume(),cancelAnimationFrame(this.raf),this.loop())};onPageHide=()=>this.snapshotOnHide();snapshotOnHide(){let e=this.engine.state;this.running&&e.mode===`teardown`&&(e.phase===`playing`||e.phase===`paused`)&&(e.phase===`playing`&&this.pause(),this.onSnapshot?.(this.engine.serialize()))}preventDefault=e=>e.preventDefault();measureFps(e){this.fpsFrames++,this.fpsTime+=e,this.fpsTime>=1&&(this.hud.set({fps:Math.round(this.fpsFrames/this.fpsTime)}),this.fpsFrames=0,this.fpsTime=0)}};export{Pe as Game};