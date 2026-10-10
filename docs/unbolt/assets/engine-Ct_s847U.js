import{_ as e,a as t,b as n,d as r,f as i,g as a,h as o,i as s,l as c,m as l,n as u,o as d,p as f,r as p,s as m,u as h,x as g,y as _}from"./api-Djuf3ayO.js";import"./index-DUc6CxyU.js";import{a as v,c as y,l as b,o as x,s as ee}from"./levels-Bn7lDnnD.js";var S=[`fixed`,`turning`,`flying`,`crated`,`railed`,`gone`],C=[`pinned`,`swinging`,`falling`,`gone`],w=18,T=-4,E=t=>{let s=f(),u=b(1),d=t,p=new Int32Array,E=new Float32Array,D=new Float32Array,O=0,k=0,A={};function j(e){return s.push(e,A.time)}function te(e,t){A.def=e;let n=e.screws.map(e=>({id:e.id,color:e.color,drive:o(e.color),threads:e.threads,layer:e.layer,state:`fixed`,progress:0,reachable:e.blockers.length===0,blocked:!1,plateCount:e.plates.length,slot:-1,since:A.time,x:e.x,y:e.y,z:e.z,ax:e.ax,ay:e.ay,az:e.az,fromRail:!1,toCrate:!1})),r=e.plates.map(e=>({id:e.id,shape:e.shape,layer:e.layer,tint:e.tint,opaque:e.opaque,state:`pinned`,pinsLeft:e.screws.length,pivot:-1,since:A.time,x:e.x,y:e.y,z:e.z,rx:e.rx,ry:e.ry,rz:e.rz,w:e.w,h:e.h,t:e.t}));A.screws=n,A.plates=r,p=new Int32Array(e.screws.length);for(let t of e.screws)p[t.id]=t.blockers.length;E=new Float32Array(e.plates.length),D=new Float32Array(e.plates.length),A.crates=[],A.queueAt=0;for(let e=0;e<3;e++)A.crates.push(re(e));t||(A.rail=[],A.railSlots=5,A.railPeak=0),A.screwsLeft=n.length,A.platesLeft=r.length,A.result=null}let ne=0;function re(e){let t=A.def.crateQueue,n=A.queueAt<t.length?t[A.queueAt++]:-1;return{id:ne++,color:n,filled:0,screws:[],sealing:!1,since:A.time,sealAt:-1,pullAt:A.time+120/1e3}}function ie(e){return(e-1)*6+3}function ae(e,t,n){if(e.mode===`teardown`){let t=y(e.level??1);if((e.fails??0)>=2&&t.crateQueue.length>3){let e=t.crateQueue,n=e[3];e[3]=e[2],e[2]=n}return t}if(e.mode===`daily`){let e=2+t%4;return v(x(e,t>>>3),t,ie(e))}let r=ee(n);return v(x(r,n),t+Math.imul(n,2654435761)>>>0,ie(r))}function oe(t){t&&(d=t);let n=d,r=n.seed??(n.mode===`daily`?l(g(Date.now())):n.mode===`scrapline`?Date.now()>>>0:e(`unbolt:level:${n.level??1}`));n.seed===void 0&&(d={...n,seed:r}),s.clear(),u.seek(r),A.mode=n.mode,A.phase=`intro`,A.level=n.mode===`teardown`?Math.max(1,n.level??1):0,A.stage=0,A.seed=r,A.runId=(A.runId??0)+1,A.time=0,A.wall=0,A.score=0,A.scoreGained=0,A.flow=0,A.flowMul=1,A.bestFlow=0,A.screwsRemoved=0,A.platesFallen=0,A.railPulls=0,A.xray=0;let i=n.mode===`daily`?{}:n.boosters??{lumenLens:2,spareRail:1,magnetRake:1,rewindSpindle:1};A.boosters={lumenLens:0,spareRail:0,magnetRake:0,rewindSpindle:0};for(let e of m)A.boosters[e]=i[e]??0;A.continuesUsed=0,A.railFill=0,A.hitStop=0,A.trauma=0,A.tutorial=n.seen?.spin?`none`:`spin`,A.tutorialTarget=-1,O=0,k=0,te(ae(n,r,0),!1),A.rngState=u.state,n.snapshot&&De(n.snapshot),M(),A.tutorial===`spin`&&(A.tutorialTarget=se())}function se(){let e=-1,t=-1e9;for(let n=0;n<2;n++){for(let r of A.screws){if(r.state!==`fixed`||!r.reachable||r.az<0||n===0&&ce(r.color)<0)continue;let i=-Math.hypot(r.x,r.y);i>t&&(t=i,e=r.id)}if(e>=0)return e}return e}function ce(e){for(let t=0;t<3;t++){let n=A.crates[t];if(n.color===e&&!n.sealing&&n.filled<3)return t}return-1}function le(){let e=0;for(let t of A.screws)t.state===`turning`&&e++;return e}function M(){let e=A.rail.length+le()>=A.railSlots;for(let t of A.screws)t.blocked=t.state===`fixed`&&e&&ce(t.color)<0;A.railFill=A.railSlots?A.rail.length/A.railSlots:0}function N(e){let t=A.screws[e];if(!t||A.phase!==`playing`&&A.phase!==`intro`||t.state!==`fixed`||!t.reachable)return;if(A.phase===`intro`&&(A.phase=`playing`),A.rail.length+le()>=A.railSlots&&ce(t.color)<0){P(j(`screwBlocked`),t);return}t.state=`turning`,t.progress=0,t.since=A.time;let n=j(`screwTapped`);P(n,t),n.value=t.threads,(A.tutorial===`spin`||A.tutorial===`firstScrew`)&&(A.tutorial=`none`,A.tutorialTarget=-1,j(`tutorial`).value=0),M()}function P(e,t){e.screw=t.id,e.color=t.color,e.x=t.x,e.y=t.y,e.z=t.z}function ue(e){let t=ce(e.color);if(t<0&&A.rail.length>=A.railSlots){e.state=`fixed`,e.progress=0,P(j(`screwBlocked`),e);return}if(e.state=`flying`,e.since=A.time,e.fromRail=!1,A.screwsRemoved++,A.screwsLeft--,P(j(`screwFreed`),e),t>=0){let n=A.crates[t];n.screws.push(e.id),n.filled++,e.slot=t,e.toCrate=!0}else{e.toCrate=!1,A.rail.push(e.id),e.slot=A.rail.length-1,A.rail.length>A.railPeak&&(A.railPeak=A.rail.length);let t=a(A.flow);A.flow=0,A.flowMul=1,t>1&&(j(`flowBreak`).value=t)}for(let t of A.def.screws[e.id].plates){let e=A.plates[t];if(e.pinsLeft--,e.pinsLeft===1){e.state=`swinging`,e.since=A.time;for(let n of A.def.plates[t].screws)(A.screws[n].state===`fixed`||A.screws[n].state===`turning`)&&(e.pivot=n);let n=j(`plateSwing`);n.plate=t,n.x=e.x,n.y=e.y,n.z=e.z}else e.pinsLeft<=0&&de(e)}}function de(e){let t=A.def.plates[e.id];e.x=t.x,e.y=t.y,e.rz=t.rz,e.state=`falling`,e.since=A.time,e.pivot=-1,E[e.id]=1.2,D[e.id]=(u.next()-.5)*5,A.platesLeft--,A.platesFallen++,A.score+=40,A.scoreGained=40,A.hitStop=45/1e3,A.trauma=Math.min(1,A.trauma+.22);let n=j(`plateFell`);n.plate=e.id,n.points=40,n.x=e.x,n.y=e.y,n.z=e.z,n.value=e.layer;let r=0;for(let t of A.def.screws)t.blockers.includes(e.id)&&(p[t.id]--,p[t.id]===0&&A.screws[t.id].state===`fixed`&&(A.screws[t.id].reachable=!0,r++));if(r>0){let t=j(`layerRevealed`);t.value=r,t.plate=e.id,t.x=e.x,t.y=e.y,t.z=e.z}}function fe(e){e.state=`crated`,e.since=A.time;let t=e.fromRail,n;if(t)n=60;else{let t=A.flowMul;A.flow++,A.bestFlow=Math.max(A.bestFlow,A.flow),A.flowMul=a(A.flow),n=_(A.flow,e.layer,e.plateCount>1),A.flowMul>t&&(j(`flowUp`).value=A.flowMul)}A.score+=n,A.scoreGained=n;let r=j(`screwSeated`);P(r,e),r.crate=e.slot,r.points=n,r.value=A.flow}function pe(e){e.state=`railed`,e.since=A.time,A.score+=5,A.scoreGained=5;let t=j(`screwRailed`);P(t,e),t.value=A.rail.indexOf(e.id),t.points=5}function me(){let e=0;for(let t=0;t<3;t++){let n=A.crates[t];if(!(n.color<0)){if(!n.sealing&&n.filled>=3){let r=!0;for(let e of n.screws)A.screws[e].state!==`crated`&&(r=!1);if(r){n.sealing=!0,n.sealAt=A.time;let r=i(A.flow);A.score+=r,A.scoreGained=r;let a=j(`crateSealed`);if(a.crate=t,a.color=n.color,a.points=r,a.value=O++,++e>8)throw Error(`seal chain overflow`)}}if(n.sealing&&A.time-n.sealAt>=240/1e3){for(let e of n.screws)A.screws[e].state=`gone`;let e=re(t);A.crates[t]=e;let r=j(`crateArrive`);r.crate=t,r.color=e.color,r.value=e.id}}}for(let e=0;e<3;e++){let t=A.crates[e];if(!(t.color<0||t.sealing||t.filled>=3||A.time<t.pullAt))for(let n=0;n<A.rail.length;n++){let r=A.screws[A.rail[n]];if(r.color!==t.color||r.state!==`railed`)continue;A.rail.splice(n,1);for(let e=0;e<A.rail.length;e++)A.screws[A.rail[e]].slot=e;r.state=`flying`,r.fromRail=!0,r.toCrate=!0,r.since=A.time,r.slot=e,t.screws.push(r.id),t.filled++,t.pullAt=A.time+120/1e3,A.railPulls++;let i=j(`railPull`);P(i,r),i.crate=e,i.points=60;break}}}function he(e){for(let t of A.plates)if(t.state===`swinging`){let e=A.def.plates[t.id],n=t.pivot>=0?A.def.screws[t.pivot]:null,r=.16*Math.sin((A.time-t.since)*3.4)*Math.exp(-(A.time-t.since)*.6);if(t.rz=e.rz+r,n){let i=Math.cos(r),a=Math.sin(r),o=e.x-n.x,s=e.y-n.y;t.x=n.x+o*i-s*a,t.y=n.y+o*a+s*i}}else t.state===`falling`&&(E[t.id]-=w*e,t.y+=E[t.id]*e,t.z+=(t.z>=0?1:-1)*.9*e,t.rz+=D[t.id]*e,t.rx+=D[t.id]*.4*e,t.y<T&&(t.state=`gone`))}function ge(){for(let e of A.screws)if(e.state===`turning`||e.state===`flying`)return!0;for(let e of A.crates)if(e.sealing)return!0;return!1}function _e(){if(A.rail.length<A.railSlots)return!0;for(let e of A.screws)if(e.state===`fixed`&&e.reachable&&ce(e.color)>=0)return!0;for(let e of A.crates)if(!(e.color<0||e.filled>=3)){for(let t of A.rail)if(A.screws[t].color===e.color)return!0}return!1}function ve(e){let t=A.def.screws.length,i=Math.round(A.time*1e3),a=Math.round(A.wall),o=0;if(e){let e=A.mode===`scrapline`?0:r(t,A.time,A.railPeak,A.railSlots);A.score+=e,A.scoreGained=e,o=n(t,A.time,A.railPeak)}A.phase=e?`won`:`lost`,A.result={mode:A.mode,level:A.level,seed:A.seed,won:e,score:A.score,stars:o,timeMs:i,wallMs:a,screws:A.screwsRemoved,plates:A.platesFallen,railPeak:A.railPeak,bestFlow:A.bestFlow,platesLeft:A.platesLeft,progress:t?A.screwsRemoved/t:0};let s=j(e?`levelWon`:`levelLost`);s.points=A.score,s.value=o}function ye(e,t){let n=Math.min(c,Math.max(0,e));if(A.phase===`paused`||A.phase===`boot`)return;if(A.phase===`won`||A.phase===`lost`){he(n);return}if(A.wall+=Math.max(0,t??e*1e3),A.hitStop>0){A.hitStop=Math.max(0,A.hitStop-n);return}A.phase===`intro`&&A.time>.42&&(A.phase=`playing`),A.time+=n,A.trauma=Math.max(0,A.trauma-1.6*n),A.xray>0&&(A.xray=Math.max(0,A.xray-n),A.xray===0&&j(`xrayEnd`));for(let e of A.screws)if(e.state===`turning`){let t=e.threads*180/1e3,n=Math.floor(e.progress*e.threads);e.progress=Math.min(1,(A.time-e.since)/t);let r=Math.floor(e.progress*e.threads);if(r>n&&e.progress<1){let t=j(`unscrewTick`);P(t,e),t.value=r}e.progress>=1&&ue(e)}else e.state===`flying`&&A.time-e.since>=320/1e3&&(e.toCrate?fe(e):pe(e));me(),he(n);let r=A.railFill;if(M(),A.railFill!==r){let e=A.rail.length;e===A.railSlots-1&&k!==1?(k=1,j(`railWarning`).value=e):e>=A.railSlots&&k!==2?(k=2,j(`railCritical`).value=e):e<A.railSlots-1&&(k=0)}if(A.crates.every(e=>!e.sealing)&&A.time-be()>1.2&&(O=0),A.platesLeft===0&&!ge()){if(A.mode===`scrapline`){xe();return}ve(!0);return}!ge()&&!_e()&&(j(`railCritical`).value=A.rail.length,ve(!1))}function be(){let e=-1e9;for(let t of A.crates)e=Math.max(e,t.sealAt,t.since);return e}function xe(){A.stage++;let e=250*A.stage;A.score+=e,A.scoreGained=e;let t=j(`levelWon`);t.value=-1,t.points=e;let n=A.rail.map(e=>A.screws[e].color);te(ae(d,A.seed,A.stage),!0),A.rail=[];for(let e of n){let t=A.screws.length,n={id:t,color:e,drive:o(e),threads:1,layer:0,state:`railed`,progress:1,reachable:!1,blocked:!1,plateCount:0,slot:A.rail.length,since:A.time,x:0,y:0,z:0,ax:0,ay:0,az:1,fromRail:!0,toCrate:!1};A.screws.push(n),A.rail.push(t)}M()}function Se(e){switch(e.kind){case`tapScrew`:N(e.screw);break;case`pause`:(A.phase===`playing`||A.phase===`intro`)&&(A.phase=`paused`);break;case`resume`:A.phase===`paused`&&(A.phase=`playing`);break;case`booster`:F(e.booster);break;case`continue`:if(A.phase!==`lost`||A.mode===`daily`)break;if(e.rescue){let t=A.result;if(A.phase=`playing`,A.result=null,!F(e.rescue)){A.phase=`lost`,A.result=t;break}}else{if(A.continuesUsed>=1)break;A.continuesUsed++,A.railSlots+=2,A.phase=`playing`,A.result=null}M();break;case`dismissTutorial`:A.tutorial=`none`,A.tutorialTarget=-1}}function F(e){if(A.phase!==`playing`&&A.phase!==`intro`||(A.boosters[e]??0)<=0)return!1;let t=-1;if(e===`lumenLens`){if(A.xray>0)return!1;A.xray=h/1e3,j(`xrayStart`)}else if(e===`spareRail`){if(A.railSlots>5)return!1;A.railSlots+=1}else if(e===`magnetRake`){if(!Ce())return!1}else if(e===`rewindSpindle`){if(t=Te(),t<0)return!1}else return!1;A.boosters[e]--;let n=j(`boosterUsed`);return n.value=m.indexOf(e),n.screw=t,M(),!0}function Ce(){let e=0;for(let t=0;t<A.rail.length&&e<3;){let n=A.screws[A.rail[t]];if(n.state!==`railed`){t++;continue}A.rail.splice(t,1),n.state=`gone`,n.since=A.time,n.slot=-1,e++}if(e===0)return!1;for(let e=0;e<A.rail.length;e++)A.screws[A.rail[e]].slot=e;return k=0,!0}function we(){for(let e=A.rail.length-1;e>=0;e--){let t=A.rail[e];if(!(A.screws[t].state!==`railed`||t>=A.def.screws.length))for(let n of A.def.screws[t].plates){let t=A.plates[n].state;if(t===`pinned`||t===`swinging`)return e}}return-1}function Te(){let e=we();if(e<0)return-1;let t=A.screws[A.rail[e]];A.rail.splice(e,1);for(let e=0;e<A.rail.length;e++)A.screws[A.rail[e]].slot=e;t.state=`fixed`,t.progress=0,t.slot=-1,t.since=A.time,t.fromRail=!1,t.toCrate=!1,A.screwsLeft++,A.screwsRemoved--;for(let e of A.def.screws[t.id].plates){let t=A.plates[e];if((t.state===`pinned`||t.state===`swinging`)&&(t.pinsLeft++,t.state===`swinging`&&t.pinsLeft>=2)){let n=A.def.plates[e];t.state=`pinned`,t.pivot=-1,t.x=n.x,t.y=n.y,t.rz=n.rz}}k=0;let n=j(`screwTapped`);return P(n,t),n.value=0,t.id}function Ee(){let e=[];for(let t of A.screws)e.push(S.indexOf(t.state===`turning`?`fixed`:t.state),t.slot);return{v:1,mode:A.mode,level:A.level,stage:A.stage,seed:A.seed,rngState:u.state,time:A.time,wall:A.wall,score:A.score,flow:A.flow,bestFlow:A.bestFlow,railSlots:A.railSlots,railPeak:A.railPeak,queueAt:A.queueAt,rail:A.rail.slice(),screws:e,plates:A.plates.map(e=>C.indexOf(e.state===`pinned`||e.state===`swinging`?e.state:`gone`)),crates:A.crates.map(e=>({id:e.id,color:e.color,filled:e.filled,screws:e.screws.slice()})),boosters:{...A.boosters},continuesUsed:A.continuesUsed,screwsRemoved:A.screwsRemoved,platesFallen:A.platesFallen,railPulls:A.railPulls}}function De(e){if(e.v===1&&e.mode!==`scrapline`&&e.screws.length===A.screws.length*2){A.time=e.time,A.wall=e.wall??e.time*1e3,A.score=e.score,A.flow=e.flow,A.flowMul=a(e.flow),A.bestFlow=e.bestFlow,A.railSlots=e.railSlots,A.railPeak=e.railPeak,A.queueAt=e.queueAt,A.rail=e.rail.slice(),A.boosters={...e.boosters},A.continuesUsed=e.continuesUsed,A.screwsRemoved=e.screwsRemoved,A.platesFallen=e.platesFallen,A.railPulls=e.railPulls,u.seek(e.rngState),A.screws.forEach((t,n)=>{let r=S[e.screws[n*2]]??`fixed`;t.state=r===`flying`?`crated`:r,t.slot=e.screws[n*2+1],t.progress=t.state===`fixed`?0:1}),A.plates.forEach((t,n)=>{t.state=C[e.plates[n]]??`pinned`}),A.crates=e.crates.map(e=>({...e,screws:e.screws.slice(),sealing:!1,since:A.time,sealAt:-1,pullAt:A.time})),A.screwsLeft=A.screws.filter(e=>e.state===`fixed`).length,A.platesLeft=0;for(let e of A.plates)e.pinsLeft=A.def.plates[e.id].screws.filter(e=>A.screws[e].state===`fixed`).length,(e.state===`falling`||e.pinsLeft===0)&&(e.state=`gone`),e.state!==`gone`&&A.platesLeft++;for(let e of A.def.screws)p[e.id]=e.blockers.filter(e=>A.plates[e].state!==`gone`).length,A.screws[e.id].reachable=p[e.id]===0;A.phase=`paused`}}function Oe(){let e=2166136261,t=t=>{e^=t|0,e=Math.imul(e,16777619)};t(A.score),t(A.flow),t(A.queueAt),t(Math.round(A.time*1e3));for(let e of A.screws)t(S.indexOf(e.state)),t(e.slot);for(let e of A.rail)t(e);for(let e of A.crates)t(e.color),t(e.filled);return e>>>0}return oe(t),{get state(){return A},events:s,step:ye,input:Se,flush(){s.clear()},reset:oe,serialize:Ee,hash:Oe}},D=.5;function O(){return{scale:1,avgMs:16.7,cooldown:0}}function k(e,t){return Math.max(.5,Math.min(e||1,2)*t.scale)}function A(e,t){return!(t>0)||t>250?!1:(e.avgMs+=(t-e.avgMs)*.05,e.cooldown>0?(e.cooldown--,!1):e.avgMs>22&&e.scale>.5?(e.scale=Math.max(D,e.scale-.15),e.cooldown=90,!0):e.avgMs<13&&e.scale<1&&(e.scale=Math.min(1,e.scale+.1),e.cooldown=180,!0))}var j=`#version 300 es
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
`;function M(e){return e.getContext(`webgl2`,{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:`high-performance`,desynchronized:!0})}function N(e,t,n){let r=e.createShader(t);if(!r)throw Error(`createShader failed`);return e.shaderSource(r,n),e.compileShader(r),r}function P(e,t,n,r){let i=e.getExtension(`KHR_parallel_shader_compile`),a=N(e,e.VERTEX_SHADER,t),o=N(e,e.FRAGMENT_SHADER,n),s=e.createProgram();e.attachShader(s,a),e.attachShader(s,o),e.linkProgram(s);let c=null;return{program:s,poll:()=>{if(c)return c;if(i&&!e.getProgramParameter(s,i.COMPLETION_STATUS_KHR))return null;if(!e.getProgramParameter(s,e.LINK_STATUS)&&!e.isContextLost()){let t=[e.getShaderInfoLog(a),e.getShaderInfoLog(o),e.getProgramInfoLog(s)].filter(Boolean).join(`
`);throw Error(`WebGL program failed to build:\n${t}`)}e.deleteShader(a),e.deleteShader(o);let t={};for(let n of r)t[n]=e.getUniformLocation(s,n);return c={program:s,uniforms:t},c}}}function ue(e){let t=e.replace(`#`,``),n=t.length===3?t.replace(/./g,e=>e+e):t,r=Number.parseInt(n,16);return n.length!==6||Number.isNaN(r)?[1,1,1]:[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}function de(){let e=new Float32Array(16);return e[0]=e[5]=e[10]=e[15]=1,e}function fe(e,t,n,r,i){let a=1/Math.tan(t/2);return e.fill(0),e[0]=a/n,e[5]=a,e[10]=(i+r)/(r-i),e[11]=-1,e[14]=2*i*r/(r-i),e}function pe(e,t,n,r,i,a,o){let s=t-i,c=n-a,l=r-o,u=Math.hypot(s,c,l)||1;s/=u,c/=u,l/=u;let d=l,f=0,p=-s;u=Math.hypot(d,f,p)||1,d/=u,f/=u,p/=u;let m=c*p-l*f,h=l*d-s*p,g=s*f-c*d;return e[0]=d,e[1]=m,e[2]=s,e[3]=0,e[4]=f,e[5]=h,e[6]=c,e[7]=0,e[8]=p,e[9]=g,e[10]=l,e[11]=0,e[12]=-(d*t+f*n+p*r),e[13]=-(m*t+h*n+g*r),e[14]=-(s*t+c*n+l*r),e[15]=1,e}function me(e,t,n){for(let r=0;r<4;r++){let i=n[r*4],a=n[r*4+1],o=n[r*4+2],s=n[r*4+3];for(let n=0;n<4;n++)e[r*4+n]=t[n]*i+t[4+n]*a+t[8+n]*o+t[12+n]*s}return e}function he(e,t,n,r,i){let a=e[0]*t+e[4]*n+e[8]*r+e[12],o=e[1]*t+e[5]*n+e[9]*r+e[13],s=e[3]*t+e[7]*n+e[11]*r+e[15];return s<=1e-5?!1:(i[0]=a/s,i[1]=o/s,i[2]=s,!0)}function ge(e){let t=1-Math.min(1,Math.max(0,e));return 1-t*t*t}function _e(e){let t=Math.max(0,Math.min(1,e));return t<.5?4*t*t*t:1-(-2*t+2)**3/2}var ve=.078,ye=38*Math.PI/180,be={slab:0,disc:1,ring:3,elbow:4,tee:5,wedge:6},xe=.42,Se=.5,F=16,Ce=8,we=[`u_vp`,`u_kind`,`u_eye`,`u_time`,`u_xray`,`u_range`,`u_glyph`,`u_colors`,`u_tints`],Te=[`u_res`,`u_time`,`u_az`,`u_el`,`u_range`,`u_octaves`,`u_danger`],Ee=[`u_vp`,`u_scale`,`u_range`],De=[`u_tex`,`u_texel`,`u_threshold`,`u_range`],Oe=[`u_scene`,`u_bloom`,`u_res`,`u_time`,`u_range`,`u_bloomGain`,`u_warm`,`u_danger`,`u_desat`,`u_grain`,`u_waves`];function ke(e){let t=ue(e);return[t[0]**2.2,t[1]**2.2,t[2]**2.2]}function Ae(){let e=[],t=[];for(let[n,r,i]of[[[0,0,1],[1,0,0],[0,1,0]],[[0,0,-1],[-1,0,0],[0,1,0]],[[1,0,0],[0,0,-1],[0,1,0]],[[-1,0,0],[0,0,1],[0,1,0]],[[0,1,0],[1,0,0],[0,0,-1]],[[0,-1,0],[1,0,0],[0,0,1]]]){let a=e.length/7;for(let[t,a]of[[-1,-1],[1,-1],[1,1],[-1,1]])e.push(n[0]+r[0]*t+i[0]*a,n[1]+r[1]*t+i[1]*a,n[2]+r[2]*t+i[2]*a,n[0],n[1],n[2],0);t.push(a,a+1,a+2,a,a+2,a+3)}return{data:new Float32Array(e),index:new Uint16Array(t)}}function je(e=20){let t=[],n=[],r=(n,r,i,a,o)=>{let s=t.length/7;for(let s=0;s<=e;s++){let c=s/e*Math.PI*2,l=Math.cos(c),u=Math.sin(c),d=Math.hypot(a,i)||1;t.push(l*n,r,u*n,l*a/d,i/d,u*a/d,o)}return s},i=(t,r)=>{for(let i=0;i<e;i++)n.push(t+i,r+i,t+i+1,t+i+1,r+i,r+i+1)};i(r(.34,-2.4,0,1,0),r(.34,0,0,1,0)),i(r(1,0,-.2,1,1),r(1,.32,.3,1,1));let a=r(1,.32,1,.25,2),o=r(.6,.42,1,.12,2);i(a,o);let s=t.length/7;t.push(0,.45,0,0,1,0,2);for(let t=0;t<e;t++)n.push(o+t,s,o+t+1);return{data:new Float32Array(t),index:new Uint16Array(n)}}var I=(e,n)=>{let r=M(e);if(!r)return null;let i=s[n.quality],a=n.reducedMotion,o=n.bigGlyphs??!1,c=ue(n.clearColor??`#0A0E14`),l=new Float32Array(t.flatMap(ke)),d=new Float32Array(p.flatMap(ke)),f={drawCalls:0,triangles:0,particles:0,bytes:0,pending:0},m={azimuth:.35,elevation:.22,distance:6,zoom:1},h=u,g=1,_=1,v=0,y=0,b=!1,x=1,ee=1,S=0,C=0,w=0,T=null,E=-1,D=0,O=de(),k=de(),A=de(),N=new Float32Array(3),I=new Float32Array(3),L=new Float32Array(960),R=new Float32Array(120*F),Me=new Float32Array(120*F),Ne=new Float32Array(120),z=new Int32Array(120),B=new Float32Array(240*F),Pe=new Float32Array(128),Fe=0,V=new Float32Array(12),Ie=0,Le=new Float32Array(240),Re=new Float32Array(240),ze=new Float32Array(240),H=-1,U={x0:-1,x1:1,y:-1},Be=new Float32Array(480),Ve=new Uint8Array(240),W=3072,G={n:0,x:new Float32Array(W),y:new Float32Array(W),z:new Float32Array(W),vx:new Float32Array(W),vy:new Float32Array(W),vz:new Float32Array(W),life:new Float32Array(W),ttl:new Float32Array(W),size:new Float32Array(W),rgb:new Float32Array(W*3),gpu:new Float32Array(W*Ce)},He=1,K=()=>(He=Math.imul(He,1664525)+1013904223>>>0,He/4294967296),q=null,J=null,Y=null,X=null,Ue=null,We=null,Z=null,Ge=[],Ke=[],qe=[],Je=[],Ye=null,Xe=null,Ze=null,Qe=null,$e=null,et=null,tt=null,nt=null,rt=null,it=0,at=0,Q=null,$=[],ot=!1,st=1;function ct(e,t,n,i){let a=P(r,e,t,n);Ke.push(a.program);let o=!1;Ge.push(()=>{if(o)return!0;let e=a.poll();return e?(i(e),o=!0,!0):!1})}function lt(e,t){let n=r,i=n.createVertexArray();Je.push(i),n.bindVertexArray(i);let a=n.createBuffer();qe.push(a),n.bindBuffer(n.ARRAY_BUFFER,a),n.bufferData(n.ARRAY_BUFFER,e.data,n.STATIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,3,n.FLOAT,!1,28,0),n.enableVertexAttribArray(1),n.vertexAttribPointer(1,3,n.FLOAT,!1,28,12),n.enableVertexAttribArray(2),n.vertexAttribPointer(2,1,n.FLOAT,!1,28,24);let o=n.createBuffer();qe.push(o),n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,o),n.bufferData(n.ELEMENT_ARRAY_BUFFER,e.index,n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,t);for(let e=0;e<4;e++)n.enableVertexAttribArray(3+e),n.vertexAttribPointer(3+e,4,n.FLOAT,!1,64,e*16),n.vertexAttribDivisor(3+e,1);return n.bindVertexArray(null),i}function ut(){let t=r;e.dataset.ready=``,q=J=Y=X=Ue=We=Z=null,Ge=[],Ke=[],qe=[],Je=[],ot=!!t.getExtension(`EXT_color_buffer_float`),st=ot?1:.25,ct(ne,re,we,e=>q=e),ct(j,te,Te,e=>J=e),ct(ie,ae,Ee,e=>Y=e),ct(j,oe,De,e=>X=e),ct(j,se,De,e=>Ue=e),ct(j,ce,De,e=>We=e),ct(j,le,Oe,e=>Z=e),Ye=t.createVertexArray(),Je.push(Ye);let n=e=>{let n=t.createBuffer();return qe.push(n),t.bindBuffer(t.ARRAY_BUFFER,n),t.bufferData(t.ARRAY_BUFFER,e,t.DYNAMIC_DRAW),n};et=n(R.byteLength),tt=n(Pe.byteLength),nt=n(B.byteLength),rt=n(G.gpu.byteLength);let i=Ae(),a=je();it=i.index.length,at=a.index.length,Xe=lt(i,et),Ze=lt(i,tt),Qe=lt(a,nt),$e=t.createVertexArray(),Je.push($e),t.bindVertexArray($e),t.bindBuffer(t.ARRAY_BUFFER,rt),t.enableVertexAttribArray(0),t.vertexAttribPointer(0,4,t.FLOAT,!1,32,0),t.enableVertexAttribArray(1),t.vertexAttribPointer(1,4,t.FLOAT,!1,32,16),t.bindVertexArray(null),Q=null,$=[],T=null,pt()}function dt(e,t){let n=r,i=n.createTexture();n.bindTexture(n.TEXTURE_2D,i),ot?n.texImage2D(n.TEXTURE_2D,0,n.RGBA16F,e,t,0,n.RGBA,n.HALF_FLOAT,null):n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);let a=n.createFramebuffer();return n.bindFramebuffer(n.FRAMEBUFFER,a),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,i,0),{fb:a,tex:i,w:e,h:t}}function ft(){let e=r;Q&&(e.deleteFramebuffer(Q.fb),e.deleteTexture(Q.tex),e.deleteRenderbuffer(Q.depth));for(let t of $)e.deleteFramebuffer(t.fb),e.deleteTexture(t.tex);Q=null,$=[]}function pt(){let t=r;if(t.isContextLost())return;ft();let n=Math.max(1,e.width),a=Math.max(1,e.height),o=dt(n,a),s=t.createRenderbuffer();t.bindRenderbuffer(t.RENDERBUFFER,s),t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_COMPONENT24,n,a),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,s),Q={...o,depth:s};let c=Math.max(1,n>>1),l=Math.max(1,a>>1);for(let e=0;e<Math.max(1,i.bloomLevels);e++)$.push(dt(c,l)),c=Math.max(1,c>>1),l=Math.max(1,l>>1);t.bindFramebuffer(t.FRAMEBUFFER,null),f.bytes=n*a*(ot?8:4)*1.4+n*a*4}function mt(){let t=!0,n=0;for(let e of Ge)e()||(t=!1,n++);return f.pending=n,t&&e.dataset.ready!==`1`&&(e.dataset.ready=`1`),t}function ht(e){let t=1e9,n=-1e9,r=1e9,i=-1e9,a=0;for(let o of e.plates){let e=Math.max(o.w,o.h);t=Math.min(t,o.x-e),n=Math.max(n,o.x+e),r=Math.min(r,o.y-e),i=Math.max(i,o.y+e),a=Math.max(a,Math.hypot(Math.abs(o.x)+o.w,Math.abs(o.y)+o.h))}ee=Math.max(.75,a*.95),T===null&&(x=ee),Fe=0;let o=(e,t,n,r,i,a,o,s)=>{let c=Fe++*F;Pe.set([e,t,n,r,i,0,0,s,a,o,0,0,1,0,0,0],c)},s=(t+n)/2,c=(r+i)/2,l=Math.max(.2,(n-t)/2-.08),u=Math.max(.2,(i-r)/2-.08);o(s,c,0,2,0,l,u,.03),o(s,r-.22,0,2,0,.05,.24,.05),o(s,r-.48,0,2,Math.PI/2,.5,.5,.03),o(s-l-.03,c,0,2,0,.03,u+.04,.06),o(s+l+.03,c,0,2,0,.03,u+.04,.06),U.x0=s-l-.12,U.x1=s+l+.12,U.y=r-.18}function gt(e,t,n,r,o,s,c=.035){let u=Math.min(W,i.maxParticles),d=a?Math.ceil(r*.2):r,f=s>=0?s*3:-1;for(let r=0;r<d;r++){let r=G.n<u?G.n++:Math.floor(K()*u),i=K()*Math.PI*2,a=Math.acos(2*K()-1),s=o*(.3+K()*.7);G.x[r]=e,G.y[r]=t,G.z[r]=n,G.vx[r]=Math.sin(a)*Math.cos(i)*s,G.vy[r]=Math.abs(Math.cos(a))*s*.8+s*.3,G.vz[r]=Math.sin(a)*Math.sin(i)*s+(n>=0?.6:-.6)*s,G.ttl[r]=.35+K()*.6,G.life[r]=G.ttl[r],G.size[r]=c*(.5+K());let d=K()<.5||f<0;G.rgb[r*3]=d?1:l[f],G.rgb[r*3+1]=d?.78:l[f+1],G.rgb[r*3+2]=d?.45:l[f+2]}}function _t(e){let t=Math.exp(-1.8*e),n=0;for(;n<G.n;){if(G.life[n]-=e,G.life[n]<=0){let e=--G.n;n!==e&&(G.x[n]=G.x[e],G.y[n]=G.y[e],G.z[n]=G.z[e],G.vx[n]=G.vx[e],G.vy[n]=G.vy[e],G.vz[n]=G.vz[e],G.life[n]=G.life[e],G.ttl[n]=G.ttl[e],G.size[n]=G.size[e],G.rgb[n*3]=G.rgb[e*3],G.rgb[n*3+1]=G.rgb[e*3+1],G.rgb[n*3+2]=G.rgb[e*3+2]);continue}G.vx[n]*=t,G.vy[n]=G.vy[n]*t-6*e,G.vz[n]*=t,G.x[n]+=G.vx[n]*e,G.y[n]+=G.vy[n]*e,G.z[n]+=G.vz[n]*e;let r=n*Ce;G.gpu[r]=G.x[n],G.gpu[r+1]=G.y[n],G.gpu[r+2]=G.z[n],G.gpu[r+3]=G.size[n],G.gpu[r+4]=G.rgb[n*3],G.gpu[r+5]=G.rgb[n*3+1],G.gpu[r+6]=G.rgb[n*3+2],G.gpu[r+7]=G.life[n]/G.ttl[n],n++}return G.n}function vt(e,t,n,r){if(i.maxShockwaves<=0||a||!he(A,e,t,n,I))return;let o=Ie++%Math.min(3,i.maxShockwaves)*4;V[o]=I[0]*.5+.5,V[o+1]=I[1]*.5+.5,V[o+2]=0,V[o+3]=r}function yt(e,t){for(let n=0;n<t.length;n++){let r=t.at(n);switch(r.type){case`screwTapped`:r.screw>=0&&(Le[r.screw]=.5),gt(r.x,r.y,r.z,4,.6,-1,.02);break;case`unscrewTick`:gt(r.x,r.y,r.z,6,.7,-1,.018);break;case`screwBlocked`:r.screw>=0&&(Re[r.screw]=.3),S=Math.min(1,S+.08);break;case`screwFreed`:gt(r.x,r.y,r.z,18,1.6,r.color,.03);break;case`plateFell`:{let t=e.def.plates[r.plate];if(t)for(let n of t.screws)gt(e.def.screws[n].x,e.def.screws[n].y,e.def.screws[n].z,10,1.4,-1,.03);vt(r.x,r.y,r.z,.9),S=Math.min(1,S+.22);break}case`layerRevealed`:vt(r.x,r.y,r.z,.5),w=Math.max(w,.3);break;case`crateSealed`:w=Math.max(w,.45);break;case`levelWon`:w=1,vt(0,0,0,1);break;case`levelLost`:S=Math.min(1,S+.4);break;case`boosterUsed`:r.value===2?(H=1,S=Math.min(1,S+.12),w=Math.max(w,.25)):r.value===3&&r.screw>=0&&r.screw<240&&(ze[r.screw]=Se,w=Math.max(w,.2))}}}function bt(e){if(H<0)return;let t=H;H-=e/xe;let n=1-Math.max(0,H),r=U.x0+(U.x1-U.x0)*ge(n);gt(r,U.y+(K()-.5)*.08,0,5,.9,1,.026),t>=.5&&H<.5&&vt(r,U.y,0,.45),H<=0&&(H=-1,gt(U.x1,U.y,0,14,1.5,1,.032),vt(U.x1,U.y,0,.7))}function xt(e,t){if(!b){m.azimuth+=v*e,m.elevation+=y*e;let t=Math.exp(-4.5*e);v*=t,y*=t,Math.abs(v)<.01&&(v=0),Math.abs(y)<.01&&(y=0),m.elevation+=(.2-m.elevation)*Math.min(1,e*.4)}m.elevation=Math.max(-1.15,Math.min(1.15,m.elevation)),x+=(ee-x)*Math.min(1,e*3);let n=g/_,r=h.top,i=_-h.bottom,o=Math.max(.25,(i-r)/_),s=Math.tan(ye/2),c=ge((C-D)/.42),l=t.phase===`won`?Math.min(1,(C-St)*1.2):0,u=Math.max(x/(.98*s*n),x/(o*1*s))*m.zoom*(1+(1-c)*.35+l*(a?0:.12));m.distance=u;let d=Math.cos(m.elevation),f=Math.sin(m.azimuth)*d*u,p=Math.sin(m.elevation)*u,w=Math.cos(m.azimuth)*d*u;if(S=Math.max(S,t.trauma),!a&&S>0){let e=S*S*.06*u*.15;f+=Math.sin(C*34.1)*e,p+=Math.sin(C*29.7+1.3)*e}S=Math.max(0,S-1.6*e),N[0]=f,N[1]=p,N[2]=w,pe(k,f,p,w,0,-(1-c)*.3,0),fe(O,ye,n,.1,u*4);let T=1-(r+i)/2/_*2;O[9]=-T,me(A,O,k)}let St=0;function Ct(e){let t=0,n=k[2],r=k[6],i=k[10];for(let a of e.plates){if(a.state===`gone`)continue;let e=t*F,o=a.state===`falling`,s=o?C-wt[a.id]:0;R[e]=a.x,R[e+1]=a.y,R[e+2]=a.z,R[e+3]=be[a.shape],R[e+4]=a.rx,R[e+5]=a.ry,R[e+6]=a.rz,R[e+7]=a.t*.5,R[e+8]=a.w,R[e+9]=a.h,R[e+10]=a.tint,R[e+11]=+!!a.opaque,R[e+12]=o?Math.max(0,1-s*.8):1,R[e+13]=o?Math.max(0,.5-s*3):0,R[e+14]=0,R[e+15]=0,Ne[t]=(a.x-N[0])*n+(a.y-N[1])*r+(a.z-N[2])*i,z[t]=t,t++}for(let e=1;e<t;e++){let t=z[e],n=Ne[t],r=e-1;for(;r>=0&&Ne[z[r]]>n;)z[r+1]=z[r],r--;z[r+1]=t}for(let e=0;e<t;e++){let t=z[e]*F;for(let n=0;n<F;n++)Me[e*F+n]=R[t+n]}return t}let wt=new Float32Array(120);function Tt(e,t){let n=0;g/2;let r=_/2,i=O[5];for(let a of e.screws){let o=a.id,s=o*4;if(L[s+3]=0,o>=240)break;if(a.state===`crated`||a.state===`railed`||a.state===`gone`||a.state===`flying`&&a.fromRail)continue;let c=a.x,l=a.y,u=a.z,d=0,f=0,p=1,m=ve;if(a.state===`turning`)d=a.progress*a.threads*.03,f=a.progress*a.threads*Math.PI*4;else if(a.state===`flying`){let t=Math.min(1,(e.time-a.since)/(320/1e3));if(f=a.threads*Math.PI*4+t*Math.PI*6,Ve[o]&&_>1){let e=a.threads*.03+.12,n=c+a.ax*e,r=l+a.ay*e,i=u+a.az*e,s=k[2],d=k[6],f=k[10],h=Math.max(.5,-((n-N[0])*s+(r-N[1])*d+(i-N[2])*f)),v=Be[o*2]/g*2-1,y=1-Be[o*2+1]/_*2+O[9],b=v*h/O[0],x=y*h/O[5],ee=N[0]+k[0]*b+k[1]*x-s*h,S=N[1]+k[4]*b+k[5]*x-d*h,C=N[2]+k[8]*b+k[9]*x-f*h,w=Math.min(1,t/.22),T=t<.22?0:_e((t-.22)/.78),E=(1-(1-w)*(1-w))*.32*(1-T),D=Math.sin(T*Math.PI)*.25*h*.1;c=n+(ee-n)*T+a.ax*E+k[1]*D,l=r+(S-r)*T+a.ay*E+k[5]*D,u=i+(C-i)*T+a.az*E+k[9]*D,p=t>.9?1-(t-.9)*10:1,m*=1-.3*T}else d=a.threads*.03+t*.45,l-=t*t*1.6,p=1-t*t,m*=1-.35*t}if(Re[o]>0&&(Re[o]=Math.max(0,Re[o]-t),c+=Math.sin(Re[o]*60)*.02*(Re[o]/.3)),ze[o]>0){ze[o]=Math.max(0,ze[o]-t);let e=ze[o]/Se;f-=e*e*Math.PI*7,d+=e*e*.075}Le[o]>0&&(Le[o]=Math.max(0,Le[o]-t*3));let h=a.state===`fixed`,v=n*F;B[v]=c,B[v+1]=l,B[v+2]=u,B[v+3]=m*(1+Le[o]*.16),B[v+4]=a.ax,B[v+5]=a.ay,B[v+6]=a.az,B[v+7]=f+o*.7,B[v+8]=a.color,B[v+9]=h&&a.reachable&&e.phase!==`won`&&e.phase!==`lost`?1:0,B[v+10]=d,B[v+11]=a.reachable||!h?0:1,B[v+12]=p,B[v+13]=h&&a.blocked?1:0,B[v+14]=Le[o],B[v+15]=+(a.plateCount>1),n++;let y=c+a.ax*(d+m*.4),b=l+a.ay*(d+m*.4),x=u+a.az*(d+m*.4);if(he(A,y,b,x,I)){L[s]=(I[0]*.5+.5)*g,L[s+1]=(.5-I[1]*.5)*_,L[s+2]=m*i/I[2]*r;let e=(N[0]-y)*a.ax+(N[1]-b)*a.ay+(N[2]-x)*a.az;L[s+3]=h&&a.reachable&&e>0?1:0}}return n}function Et(e,t,n,i,a,o){if(i<=0||!q)return;let s=r;s.uniform1i(q.uniforms.u_kind,a),s.bindVertexArray(e),s.bindBuffer(s.ARRAY_BUFFER,t),s.bufferSubData(s.ARRAY_BUFFER,0,n,0,i*F),s.drawElementsInstanced(s.TRIANGLES,o,s.UNSIGNED_SHORT,0,i),f.drawCalls++,f.triangles+=o/3*i}function Dt(){r.bindVertexArray(Ye),r.drawArrays(r.TRIANGLES,0,3),f.drawCalls++}let Ot=e=>{e.preventDefault(),q=J=Y=X=Ue=We=Z=null,Ge=[],Q=null,$=[]},kt=()=>ut();return e.addEventListener(`webglcontextlost`,Ot),e.addEventListener(`webglcontextrestored`,kt),ut(),{get ready(){return q!==null&&Z!==null&&J!==null},get tier(){return i.tier},stats:f,camera:m,resize(t,n,r){g=Math.max(1,t),_=Math.max(1,n);let a=Math.min(r,i.maxDpr),o=Math.max(1,Math.round(g*a)),s=Math.max(1,Math.round(_*a));(e.width!==o||e.height!==s||!Q)&&(e.width=o,e.height=s,pt())},setInsets(e){h=e},render(t,n,s){let u=r;if(u.isContextLost())return;C+=s,f.drawCalls=0,f.triangles=0,(t.def!==T||t.runId!==E)&&(t.runId!==E&&(D=C),E=t.runId,ht(t.def),T=t.def,G.n=0,ze.fill(0),H=-1),t.phase===`won`&&St<D&&(St=C);for(let e of t.plates)e.state===`falling`&&wt[e.id]<D&&(wt[e.id]=C);if(!mt()||!Q||!q||!J||!Y||!X||!Ue||!We||!Z){u.bindFramebuffer(u.FRAMEBUFFER,null),u.viewport(0,0,e.width,e.height),u.clearColor(c[0],c[1],c[2],1),u.clear(u.COLOR_BUFFER_BIT);return}xt(s,t),yt(t,n),bt(s);let p=Q.w,h=Q.h;u.bindFramebuffer(u.FRAMEBUFFER,Q.fb),u.viewport(0,0,p,h),u.disable(u.BLEND),u.disable(u.DEPTH_TEST),u.depthMask(!1),u.useProgram(J.program),u.uniform2f(J.uniforms.u_res,p,h),u.uniform1f(J.uniforms.u_time,C),u.uniform1f(J.uniforms.u_az,m.azimuth),u.uniform1f(J.uniforms.u_el,m.elevation),u.uniform1f(J.uniforms.u_range,st),u.uniform1i(J.uniforms.u_octaves,i.bgOctaves),u.uniform1f(J.uniforms.u_danger,t.railFill>=1?1:t.railFill>=.8?.35:0),Dt(),u.enable(u.DEPTH_TEST),u.depthFunc(u.LEQUAL),u.depthMask(!0),u.clear(u.DEPTH_BUFFER_BIT),u.useProgram(q.program),u.uniformMatrix4fv(q.uniforms.u_vp,!1,A),u.uniform3f(q.uniforms.u_eye,N[0],N[1],N[2]),u.uniform1f(q.uniforms.u_time,C),u.uniform1f(q.uniforms.u_xray,Math.min(1,t.xray*4)),u.uniform1f(q.uniforms.u_range,st),u.uniform1f(q.uniforms.u_glyph,o?1.25:1),u.uniform3fv(q.uniforms.u_colors,l),u.uniform3fv(q.uniforms.u_tints,d),Et(Ze,tt,Pe,Fe,0,it);let g=Tt(t,s);Et(Qe,nt,B,g,1,at),u.enable(u.BLEND),u.blendFunc(u.SRC_ALPHA,u.ONE_MINUS_SRC_ALPHA);let _=Ct(t);Et(Xe,et,Me,_,0,it);let v=_t(t.hitStop>0&&!a?0:s);f.particles=v,v>0&&(u.depthMask(!1),u.blendFunc(u.ONE,u.ONE),u.useProgram(Y.program),u.uniformMatrix4fv(Y.uniforms.u_vp,!1,A),u.uniform1f(Y.uniforms.u_scale,O[5]*h*.5),u.uniform1f(Y.uniforms.u_range,st),u.bindVertexArray($e),u.bindBuffer(u.ARRAY_BUFFER,rt),u.bufferSubData(u.ARRAY_BUFFER,0,G.gpu,0,v*Ce),u.drawArrays(u.POINTS,0,v),f.drawCalls++),u.disable(u.DEPTH_TEST),u.depthMask(!0),u.disable(u.BLEND);let y=$.length;u.activeTexture(u.TEXTURE0),u.useProgram(X.program),u.uniform1i(X.uniforms.u_tex,0),u.uniform1f(X.uniforms.u_threshold,.9),u.uniform1f(X.uniforms.u_range,st),u.uniform2f(X.uniforms.u_texel,1/p,1/h),u.bindFramebuffer(u.FRAMEBUFFER,$[0].fb),u.viewport(0,0,$[0].w,$[0].h),u.bindTexture(u.TEXTURE_2D,Q.tex),Dt(),u.useProgram(Ue.program),u.uniform1i(Ue.uniforms.u_tex,0);for(let e=1;e<y;e++){let t=$[e-1],n=$[e];u.bindFramebuffer(u.FRAMEBUFFER,n.fb),u.viewport(0,0,n.w,n.h),u.uniform2f(Ue.uniforms.u_texel,1/t.w,1/t.h),u.bindTexture(u.TEXTURE_2D,t.tex),Dt()}u.useProgram(We.program),u.uniform1i(We.uniforms.u_tex,0),u.enable(u.BLEND),u.blendFunc(u.ONE,u.ONE);for(let e=y-1;e>0;e--){let t=$[e],n=$[e-1];u.bindFramebuffer(u.FRAMEBUFFER,n.fb),u.viewport(0,0,n.w,n.h),u.uniform2f(We.uniforms.u_texel,1/t.w,1/t.h),u.bindTexture(u.TEXTURE_2D,t.tex),Dt()}u.disable(u.BLEND);for(let e=0;e<3;e++)V[e*4+2]+=s,V[e*4+2]>1.4&&(V[e*4+3]=0);w=Math.max(0,w-s*1.1),u.bindFramebuffer(u.FRAMEBUFFER,null),u.viewport(0,0,e.width,e.height),u.useProgram(Z.program),u.uniform1i(Z.uniforms.u_scene,0),u.uniform1i(Z.uniforms.u_bloom,1),u.activeTexture(u.TEXTURE1),u.bindTexture(u.TEXTURE_2D,$[0].tex),u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,Q.tex),u.uniform2f(Z.uniforms.u_res,e.width,e.height),u.uniform1f(Z.uniforms.u_time,C),u.uniform1f(Z.uniforms.u_range,st),u.uniform1f(Z.uniforms.u_bloomGain,.55+w*.9+(t.flowMul-1)*.05),u.uniform1f(Z.uniforms.u_warm,Math.min(1,(t.flowMul-1)*.22)),u.uniform1f(Z.uniforms.u_danger,t.railFill>=1?.8:t.railFill>=.8?.3:0),u.uniform1f(Z.uniforms.u_desat,t.phase===`lost`?.65:0),u.uniform1f(Z.uniforms.u_grain,i.grain),u.uniform4fv(Z.uniforms.u_waves,V),Dt(),u.bindVertexArray(null)},pick(e,t){let n=-1,r=1e9;for(let i=0;i<240;i++){let a=i*4;if(L[a+3]!==1)continue;let o=L[a]-e,s=L[a+1]-t,c=Math.hypot(o,s);c<=Math.max(22,L[a+2]*1.35)&&c<r&&(r=c,n=i)}return n},screwScreenPos(e,t){return e<0||e>=240?!1:(t.x=L[e*4],t.y=L[e*4+1],L[e*4+3]===1)},orbit(e,t){b=!0,m.azimuth+=e,m.elevation+=t},orbitRelease(e,t){b=!1,v=Math.max(-8,Math.min(8,e)),y=Math.max(-8,Math.min(8,t))},setZoom(e){m.zoom=Math.max(.7,Math.min(1.6,e))},reframe(){m.zoom=1,v=y=0},setQuality(e){i=s[e],pt()},setReducedMotion(e){a=e},setFlyTarget(e,t,n){e<0||e>=240||(Ve[e]=Number.isFinite(t)&&Number.isFinite(n)?1:0,Be[e*2]=t,Be[e*2+1]=n)},setBigGlyphs(e){o=e},shake(e){a||(S=Math.min(1,S+e))},burst(e,t,n,r,i){gt(e,t,n,r,1.5,i)},dispose(){if(e.removeEventListener(`webglcontextlost`,Ot),e.removeEventListener(`webglcontextrestored`,kt),!r.isContextLost()){ft();for(let e of Ke)r.deleteProgram(e);for(let e of qe)r.deleteBuffer(e);for(let e of Je)r.deleteVertexArray(e);Ke=[],qe=[],Je=[]}}}};function L(e){for(let t of e.def.screws)if(t.plates.length>1)return!0;return!1}function R(e){for(let t of e.rail)if(!(e.screws[t]?.state!==`railed`||t>=e.def.screws.length))for(let n of e.def.screws[t].plates){let t=e.plates[n].state;if(t===`pinned`||t===`swinging`)return!0}return!1}function Me(){return window.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches??!1}function Ne(e){document.documentElement.dataset.reduced=e?`1`:`0`}var z=class{canvas;hud;audio;engine;renderer;quality=O();qualityMode=`auto`;autoTier=`high`;slowFrames=0;showcasing=!1;ro;debug;raf=0;last=0;disposed=!1;running=!1;rect={left:0,top:0};seen=new Set;reported=null;captionUntil=0;clock=0;lastPhase=`boot`;fpsFrames=0;fpsTime=0;downX=0;downY=0;lastX=0;lastY=0;lastMoveT=0;vA=0;vE=0;downT=0;pointerId=-1;orbiting=!1;lastTapT=0;pinchDist=0;pointers=new Map;keys={l:!1,r:!1,u:!1,d:!1};vibration=!0;onResult=null;onSnapshot=null;onFirstInput=null;onBoosterUsed=null;ghost=null;live=null;liveCopy=null;ghostOn=!1;ghostAt=0;ghostPos={x:0,y:0};reducedMode=`auto`;reduced=!1;motionQuery=window.matchMedia?.(`(prefers-reduced-motion: reduce)`)??null;constructor(e,t,n,r=[],i=`auto`){this.canvas=e,this.hud=t,this.audio=n;let a=new URLSearchParams(window.location.search);this.debug=a.has(`debug`);for(let e of r)this.seen.add(e);this.engine=E({mode:`teardown`,level:1,seen:{spin:!0}});let o=Me();this.reduced=o,Ne(o),this.qualityMode=i,this.autoTier=d({dpr:window.devicePixelRatio||1,cores:navigator.hardwareConcurrency,memoryGb:navigator.deviceMemory,mobile:window.matchMedia?.(`(pointer: coarse)`).matches??!1,reducedMotion:o});let s=i===`auto`?this.autoTier:i;this.renderer=I(e,{quality:s,reducedMotion:o});let c=this.renderer?`webgl2`:`none`;e.dataset.gl=c,this.hud.set({gl:c}),this.ro=new ResizeObserver(()=>this.applySize()),this.ro.observe(e),this.applySize(),e.addEventListener(`pointerdown`,this.onDown),e.addEventListener(`pointermove`,this.onMove),e.addEventListener(`pointerup`,this.onUp),e.addEventListener(`pointercancel`,this.onUp),e.addEventListener(`wheel`,this.onWheel,{passive:!1}),e.addEventListener(`contextmenu`,this.preventDefault),window.addEventListener(`keydown`,this.onKey),window.addEventListener(`keyup`,this.onKeyUp),document.addEventListener(`visibilitychange`,this.onVisibility),window.addEventListener(`pagehide`,this.onPageHide),this.motionQuery?.addEventListener?.(`change`,this.onMotionQuery),this.loop()}start(e){this.showcasing&&(this.showcasing=!1,this.renderer?.orbitRelease(0,0)),this.audio.unlock(),this.engine.reset({...e,seen:{spin:this.seen.has(`hintSpin`)}}),this.running=!0,this.audio.music(`play`),this.audio.setDucked(!1),this.captionUntil=0,this.ghostOn=!this.seen.has(`hintSpin`)&&e.mode===`teardown`,this.ghostAt=0,this.seen.has(`hintSpin`)?!this.seen.has(`hintBolt`)&&L(this.engine.state)?this.caption(`hintBolt`,4.2):this.hud.set({caption:``}):this.caption(`hintSpin`,6),this.publish(!0)}showcase(e){this.running=!1,this.showcasing=!0,this.ghostOn=!1,this.engine.reset({mode:`teardown`,level:Math.max(1,e),seen:{spin:!0}}),this.engine.flush(),this.renderer?.reframe()}stop(){this.running=!1,this.audio.music(`menu`),this.hud.set({phase:`idle`})}pause(){this.engine.input({kind:`pause`}),this.audio.setDucked(!0),this.publish(!0)}resume(){this.engine.input({kind:`resume`}),this.audio.setDucked(!1),this.last=0,this.publish(!0)}booster(e){this.engine.input({kind:`booster`,booster:e})}continueRun(e){let t=this.engine.state.phase;this.engine.input({kind:`continue`,rescue:e}),this.engine.state.phase!==t&&(e||this.audio.sfx(`continue`),this.audio.music(`play`),this.reported=null,this.hud.set({result:null}),this.publish(!0))}setQuality(e){this.qualityMode=e,this.renderer?.setQuality(e===`auto`?this.autoTier:e),this.quality.scale=1,this.quality.avgMs=16.7,this.quality.cooldown=30,this.slowFrames=0,this.applySize()}adaptTier(e){if(this.qualityMode!==`auto`||!this.renderer||!this.running||e>250)return;let t=this.quality;if(t.scale<=.501&&t.avgMs>24?this.slowFrames++:this.slowFrames=Math.max(0,this.slowFrames-2),this.slowFrames<240)return;this.slowFrames=0;let n=this.autoTier===`high`?`medium`:this.autoTier===`medium`?`low`:null;n&&(this.autoTier=n,this.renderer.setQuality(n),t.scale=.8,t.cooldown=120,this.applySize())}seenCaptions(){return[...this.seen]}setBigGlyphs(e){this.renderer?.setBigGlyphs(e)}setReducedMotion(e){this.reducedMode=e;let t=e===`auto`?Me():e===`on`;this.reduced=t,this.renderer?.setReducedMotion(t),Ne(t)}get reducedMotion(){return this.reduced}setInsets(e,t){this.renderer?.setInsets({top:e,bottom:t,left:0,right:0})}screwPos(e){let t={x:0,y:0};return this.renderer?.screwScreenPos(e,t)?t:null}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.ro.disconnect();let e=this.canvas;e.removeEventListener(`pointerdown`,this.onDown),e.removeEventListener(`pointermove`,this.onMove),e.removeEventListener(`pointerup`,this.onUp),e.removeEventListener(`pointercancel`,this.onUp),e.removeEventListener(`wheel`,this.onWheel),e.removeEventListener(`contextmenu`,this.preventDefault),window.removeEventListener(`keydown`,this.onKey),window.removeEventListener(`keyup`,this.onKeyUp),this.motionQuery?.removeEventListener?.(`change`,this.onMotionQuery),document.removeEventListener(`visibilitychange`,this.onVisibility),window.removeEventListener(`pagehide`,this.onPageHide),this.renderer?.dispose()}applySize(){let e=this.canvas.clientWidth||1,t=this.canvas.clientHeight||1,n=this.canvas.getBoundingClientRect();this.rect={left:n.left,top:n.top},this.renderer?.resize(e,t,k(window.devicePixelRatio,this.quality))}loop=()=>{this.disposed||(this.raf=requestAnimationFrame(this.frame))};frame=e=>{this.loop();let t=this.last?e-this.last:16.7;this.last=e;let n=Math.min(t,100)/1e3;this.clock+=n,A(this.quality,t)&&this.applySize(),this.adaptTier(t);let r=this.engine,i=this.keys;if(this.renderer&&(i.l||i.r||i.u||i.d)&&this.renderer.orbit((+!!i.r-!!i.l)*.9*n*2,(+!!i.u-!!i.d)*.9*n),this.running?r.step(n,t):this.showcasing&&this.renderer&&!document.hidden&&this.renderer.orbit(n*.28,(.32-this.renderer.camera.elevation)*Math.min(1,n*1.5)),this.handleEvents(),this.renderer)try{this.renderer.render(r.state,r.events,n,1)}catch(e){console.error(e),this.renderer.dispose(),this.renderer=null,this.canvas.dataset.gl=`none`,this.hud.set({gl:`none`})}r.flush(),r.state.phase!==this.lastPhase&&(this.lastPhase=r.state.phase,this.running&&this.publish(!1)),this.captionUntil&&this.clock>this.captionUntil&&(this.captionUntil=0,this.hud.set({caption:``})),this.updateGhost(),this.debug&&this.measureFps(n)};updateGhost(){let e=this.ghost;if(!e)return;let t=this.engine.state;if(!(this.ghostOn&&this.running&&t.tutorial!==`none`&&t.phase===`playing`&&this.clock>1.2&&!this.orbiting)){e.dataset.on===`1`&&(e.dataset.on=`0`);return}if(this.clock-this.ghostAt>.4){this.ghostAt=this.clock;let n=!1,r=t.screws[t.tutorialTarget];r&&r.state===`fixed`&&r.reachable&&!r.blocked&&(n=this.renderer?.screwScreenPos(r.id,this.ghostPos)??!1);for(let e=0;e<2&&!n;e++)for(let r of t.screws)if(r.state===`fixed`&&r.reachable&&!r.blocked&&(e!==0||t.crates.some(e=>e.color===r.color&&!e.sealing&&e.filled<3))&&this.renderer?.screwScreenPos(r.id,this.ghostPos)){n=!0;break}if(!n)return;e.style.transform=`translate3d(${this.ghostPos.x.toFixed(1)}px, ${this.ghostPos.y.toFixed(1)}px, 0)`}e.dataset.on!==`1`&&(e.dataset.on=`1`)}aimFlight(e){let t=this.renderer;if(!t||e<0)return;let n=this.engine.state.screws[e];if(!n)return;let r=n.toCrate!==!1,i=null;if(r){let e=this.engine.state.crates[n.slot],t=Math.max(0,Math.min(2,(e?.filled??1)-1));i=document.querySelector(`.crate[data-slot="${n.slot}"] .socket:nth-child(${t+1})`)}else i=document.querySelectorAll(`.rail__slot`)[n.slot]??null;if(!i){t.setFlyTarget(e,NaN,NaN);return}let a=i.getBoundingClientRect(),o=this.canvas.getBoundingClientRect();t.setFlyTarget(e,a.left+a.width/2-o.left,a.top+a.height/2-o.top)}caption(e,t=2.4){if(e!==`blocked`){if(this.seen.has(e))return;this.seen.add(e)}this.hud.set({caption:e}),this.captionUntil=this.clock+t,e!==`blocked`&&this.audio.sfx(`hint`)}announce(e){let t=this.live;t&&t.textContent!==e&&(t.textContent=e)}onMotionQuery=()=>{this.reducedMode===`auto`&&this.setReducedMotion(`auto`)};buzz(e){this.vibration&&navigator.vibrate?.(e)}handleEvents(){let e=this.engine,t=e.events;if(t.length===0)return;let n=e.state,r=this.audio,i=!1,a=0;for(let e=0;e<t.length;e++){let o=t.at(e),s=Math.max(-1,Math.min(1,o.x));switch(o.points>a&&(a=o.points),o.type){case`screwTapped`:r.sfx(`tap`,{color:o.color,pan:s}),this.buzz(5);for(let e=0;e<o.value;e++)r.sfx(`ratchet`,{turn:e,turns:o.value,delay:e*.18,pan:s});break;case`screwBlocked`:r.sfx(`blocked`),this.buzz(25),this.caption(`blocked`,1.6);break;case`unscrewTick`:this.buzz(3);break;case`screwFreed`:this.aimFlight(o.screw),r.sfx(`screwFree`,{color:o.color,pan:s}),this.buzz(10),i=!0;break;case`screwSeated`:r.sfx(`seat`,{flow:o.value,pan:s}),this.buzz(6),n.screwsRemoved===1&&this.caption(`hintCrate`),i=!0;break;case`screwRailed`:r.sfx(`rail`),this.buzz(8),this.caption(`hintRail`,3.2),i=!0;break;case`railPull`:r.sfx(`railPull`,{semitones:n.railPulls%7}),this.buzz(6),i=!0;break;case`crateSealed`:{r.sfx(`crateSeal`,{index:o.value}),this.buzz(14),this.caption(`hintSeal`);let e=this.liveCopy;e&&this.announce(e.sealed.replace(`{c}`,e.colors[o.color]??``).replace(`{n}`,String(n.screwsLeft))),i=!0;break}case`crateArrive`:r.sfx(`crateArrive`),i=!0;break;case`flowUp`:r.sfx(`flowUp`,{flow:o.value}),r.setFlow(o.value),this.buzz(10),this.hud.set({praise:o.value,praiseId:this.hud.get().praiseId+1});break;case`flowBreak`:r.sfx(`flowBreak`),r.setFlow(1);break;case`plateSwing`:r.sfx(`creak`,{pan:s});break;case`plateFell`:r.sfx(`plateFall`,{pan:s}),this.buzz(18),i=!0;break;case`layerRevealed`:r.sfx(`layerReveal`),this.buzz(12),this.caption(`hintLayer`),this.liveCopy&&this.announce(this.liveCopy.revealed.replace(`{n}`,String(Math.max(1,o.value))));break;case`railWarning`:r.sfx(`railWarn`),r.music(`tense`);break;case`railCritical`:r.sfx(`railCrit`),r.music(`critical`),this.buzz(20);break;case`xrayStart`:r.sfx(`xrayOn`),this.buzz(8),i=!0;break;case`xrayEnd`:r.sfx(`xrayOff`),i=!0;break;case`boosterUsed`:{let e=m[o.value];r.sfx(e===`magnetRake`?`rake`:e===`rewindSpindle`?`rewind`:`booster`),this.buzz(e===`magnetRake`?24:e===`rewindSpindle`?16:10),e===`magnetRake`&&this.hud.set({rakeId:this.hud.get().rakeId+1}),e&&this.onBoosterUsed?.(e),i=!0;break}case`levelWon`:o.value>=0?(r.sfx(`win`),r.music(`result`),this.buzz(30)):r.sfx(`shelve`),i=!0;break;case`levelLost`:r.sfx(`lose`),r.music(`result`),this.buzz(24),this.liveCopy&&this.announce(this.liveCopy.jammed),i=!0;break;case`tutorial`:this.ghostOn=!1,this.ghost?.dataset.on===`1`&&(this.ghost.dataset.on=`0`),this.hud.get().caption===`hintSpin`&&(this.captionUntil=0,this.hud.set({caption:``}))}}a>0&&(this.hud.set({gain:a,gainId:this.hud.get().gainId+1}),i=!0),n.rail.length<n.railSlots-1&&n.phase===`playing`&&r.music(`play`),r.setIntensity(n.railFill*.6+n.flowMul*.08),(i||n.phase!==this.hud.get().phase)&&this.publish(!1),n.result&&(n.phase===`won`||n.phase===`lost`)&&this.reported!==n.result&&(this.reported=n.result,this.hud.get().result!==n.result&&this.hud.set({result:n.result}),this.onResult?.(n.result))}publish(e){let t=this.engine.state,n=this.hud.get(),r=[],i=n.crates.length===3;for(let e=0;e<3;e++){let a=t.crates[e],o=a.screws.filter(e=>t.screws[e].state===`crated`||t.screws[e].state===`gone`).length,s={id:a.id,color:a.color,filled:o,sealing:a.sealing},c=n.crates[e];(!c||c.id!==s.id||c.filled!==s.filled||c.sealing!==s.sealing||c.color!==s.color)&&(i=!1),r.push(s)}let a=t.rail.filter(e=>t.screws[e].state===`railed`).map(e=>t.screws[e].color),o=a.length===n.rail.length&&a.every((e,t)=>e===n.rail[t]);this.hud.set({mode:t.mode,level:t.level,phase:this.running?t.phase:`idle`,runId:t.runId,score:t.score,flowMul:t.flowMul,crates:i&&!e?n.crates:r,rail:o&&!e?n.rail:a,railSlots:t.railSlots,lens:t.boosters.lumenLens,spare:t.boosters.spareRail,rake:t.boosters.magnetRake,rewind:t.boosters.rewindSpindle,canRewind:R(t),xray:t.xray>0,screwsLeft:t.screwsLeft,screwsTotal:t.def.screws.length,result:t.result}),this.canvas.dataset.phase=t.phase}onDown=e=>{e.preventDefault(),this.audio.unlock(),this.onFirstInput?.(),this.canvas.setPointerCapture?.(e.pointerId);let t=e.clientX-this.rect.left,n=e.clientY-this.rect.top;if(this.pointers.set(e.pointerId,{x:t,y:n}),this.pointers.size===2){let[e,t]=[...this.pointers.values()];this.pinchDist=Math.hypot(e.x-t.x,e.y-t.y),this.orbiting=!0;return}this.pointerId=e.pointerId,this.downX=this.lastX=t,this.downY=this.lastY=n,this.downT=this.lastMoveT=performance.now(),this.vA=this.vE=0,this.orbiting=!1};onMove=e=>{if(!this.pointers.has(e.pointerId))return;let t=e.clientX-this.rect.left,n=e.clientY-this.rect.top;if(this.pointers.set(e.pointerId,{x:t,y:n}),this.pointers.size===2&&this.renderer){let[e,t]=[...this.pointers.values()],n=Math.hypot(e.x-t.x,e.y-t.y);this.pinchDist>0&&this.renderer.setZoom(this.renderer.camera.zoom*(this.pinchDist/n)),this.pinchDist=n;return}if(e.pointerId===this.pointerId){if(!this.orbiting&&Math.hypot(t-this.downX,n-this.downY)>12&&(this.orbiting=!0),this.orbiting&&this.renderer){let e=2.6/Math.max(320,Math.min(this.canvas.clientWidth,this.canvas.clientHeight)),r=-(t-this.lastX)*e,i=(n-this.lastY)*e;this.renderer.orbit(r,i);let a=performance.now(),o=Math.max(1,a-this.lastMoveT)/1e3;this.vA=this.vA*.6+r/o*.4,this.vE=this.vE*.6+i/o*.4,this.lastMoveT=a}this.lastX=t,this.lastY=n}};onUp=e=>{if(this.pointers.delete(e.pointerId),e.pointerId!==this.pointerId)return;this.pointerId=-1;let t=performance.now();if(this.orbiting){let e=t-this.lastMoveT>80;this.renderer?.orbitRelease(e?0:this.vA,e?0:this.vE),this.orbiting=!1;return}if(this.renderer?.orbitRelease(0,0),t-this.downT>500)return;let n=this.showcasing?-1:this.renderer?.pick(this.downX,this.downY)??-1;n>=0?this.engine.input({kind:`tapScrew`,screw:n}):t-this.lastTapT<320&&this.renderer?.reframe(),this.lastTapT=t};onWheel=e=>{e.preventDefault(),this.renderer&&this.renderer.setZoom(this.renderer.camera.zoom*(1+Math.sign(e.deltaY)*.08))};onKey=e=>{let t=e.key;if(t===`ArrowLeft`||t===`a`||t===`A`)this.keys.l=!0;else if(t===`ArrowRight`||t===`d`||t===`D`)this.keys.r=!0;else if(t===`ArrowUp`||t===`w`||t===`W`)this.keys.u=!0;else if(t===`ArrowDown`||t===`s`||t===`S`)this.keys.d=!0;else if((t===` `||t===`Enter`)&&this.running&&this.engine.state.phase!==`won`&&this.engine.state.phase!==`lost`){let t=e.target;if(t&&(t.tagName===`BUTTON`||t.tagName===`INPUT`))return;e.preventDefault(),this.unscrewNearestCentre()}else t===`x`||t===`X`?this.booster(`lumenLens`):t===`m`||t===`M`?this.booster(`magnetRake`):t===`z`||t===`Z`?this.booster(`rewindSpindle`):t===`f`||t===`F`?this.renderer?.reframe():t===`+`||t===`=`?this.renderer?.setZoom(this.renderer.camera.zoom*.92):t===`-`&&this.renderer?.setZoom(this.renderer.camera.zoom*1.08)};onKeyUp=e=>{let t=e.key;t===`ArrowLeft`||t===`a`||t===`A`?this.keys.l=!1:t===`ArrowRight`||t===`d`||t===`D`?this.keys.r=!1:t===`ArrowUp`||t===`w`||t===`W`?this.keys.u=!1:(t===`ArrowDown`||t===`s`||t===`S`)&&(this.keys.d=!1)};unscrewNearestCentre(){if(!this.renderer)return;let e=this.canvas.clientWidth/2,t=this.canvas.clientHeight*.36,n={x:0,y:0},r=-1,i=1e9;for(let a of this.engine.state.screws){if(a.state!==`fixed`||!a.reachable||a.blocked||!this.renderer.screwScreenPos(a.id,n))continue;let o=Math.hypot(n.x-e,n.y-t);o<i&&(i=o,r=a.id)}r>=0&&this.engine.input({kind:`tapScrew`,screw:r})}onVisibility=()=>{document.hidden?(this.snapshotOnHide(),cancelAnimationFrame(this.raf),this.audio.suspend()):(this.last=0,this.audio.resume(),cancelAnimationFrame(this.raf),this.loop())};onPageHide=()=>this.snapshotOnHide();snapshotOnHide(){let e=this.engine.state;this.running&&e.mode===`teardown`&&(e.phase===`playing`||e.phase===`paused`)&&(e.phase===`playing`&&this.pause(),this.onSnapshot?.(this.engine.serialize()))}preventDefault=e=>e.preventDefault();measureFps(e){this.fpsFrames++,this.fpsTime+=e,this.fpsTime>=1&&(this.hud.set({fps:Math.round(this.fpsFrames/this.fpsTime)}),this.fpsFrames=0,this.fpsTime=0)}};export{z as Game};