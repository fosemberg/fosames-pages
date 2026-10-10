import{n as e,r as t,t as n}from"./vendor-EV4rRv3L.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var r=t(),i=e(),a=1/60,o=[`rime`,`cinder`,`arc`,`basalt`,`quill`,`void`,`flare`,`blight`];o.length;var s=[`hailstorm`,`thermalShock`,`collapse`,`shrapnel`,`overcharge`,`sunrot`,`entropy`,`anchorline`],c={Alive:1,Air:2,Boss:4,Untargetable:8,Slowed:16,Burning:32,Cracked:64,Shielded:128,Guarded:256,Marked:512,Leaked:1024},l=[`swift`,`armored`,`frugal`,`brittle`,`bountiful`,`unanchored`,`relentless`,`elite`],u={Summon:1,Merge:2,MergeReject:3,Overload:4,Sell:5,Move:6,Fire:7,Hit:8,Chain:9,Kill:10,Leak:11,WaveStart:12,WaveClear:13,Hasten:14,BossSpawn:15,BossSpecial:16,SynergyOn:17,SynergyOff:18,Ability:19,Essence:20,WardLost:21,Defeat:22,Victory:23,Tutorial:24,Pool:25},d={NotEnoughEssence:1,DifferentType:2,DifferentTier:3,MaxTier:4,BoardFull:5,CellOccupied:6,Bounty:7,WaveBonus:8,Refund:9,Rewarded:10,Drained:11},f=1.85,p=1.07,m=.04,h=[`bolt`,`beam`,`chain`,`burst`,`field`,`shard`],g={rime:{type:`rime`,shot:`field`,damage:5,rate:2,range:340,air:!0,area:150,speed:0,slow:.55,slowFor:1.6},cinder:{type:`cinder`,shot:`burst`,damage:9,rate:.9,range:350,air:!1,area:170,speed:900,burnDps:4,burnFor:3},arc:{type:`arc`,shot:`chain`,damage:10,rate:1.1,range:400,air:!0,area:0,speed:0,hops:2,hopFalloff:.7},basalt:{type:`basalt`,shot:`bolt`,damage:26,rate:.5,range:440,air:!1,area:0,speed:1100,armorBreak:8},quill:{type:`quill`,shot:`shard`,damage:4,rate:1.6,range:300,air:!0,area:0,speed:1500,shards:2},void:{type:`void`,shot:`field`,damage:6,rate:1.5,range:380,air:!1,area:160,speed:0,pull:26},flare:{type:`flare`,shot:`beam`,damage:13,rate:8,range:520,air:!0,area:0,speed:0,pierce:.6},blight:{type:`blight`,shot:`field`,damage:7,rate:1.2,range:320,air:!1,area:150,speed:0,decay:.18}},_=[`rime`,`cinder`,`arc`,`basalt`,`quill`];function v(e){return o.indexOf(e)}var y=.08;function b(e,t,n=0){return g[e].damage*f**(t-1)*(1+y*n)}function x(e,t,n=0){return g[e].range*p**(t-1)*(1+n)}function S(e,t,n=0){return g[e].rate*(1+m*(t-1))*(1+n)}var C=.5;function w(e){return Math.min(120,18+6*e)}function T(e){return 18*2**(e-1)}var E=.5,D=.1;function O(e,t=0){return Math.floor(T(e)*(E+D*t))}function k(e,t=1){return Math.max(1,Math.round((2+Math.floor(e/4))*t))}function A(e){return 20+4*e}function j(e){return Math.max(0,Math.round(e*2))}var M=1.115,N=.012,P=1.8;function F(e){return Math.min(60,6+Math.floor(e*1.25))}function I(e){return M**(e-1)}function ee(e){return Math.min(P,1+N*(e-1))}function te(e){return 1+.05*(e-1)}function ne(e){return Math.max(.25,Math.min(.8,1.1-.012*e))}function re(e,t=!1){return e>0&&e%(t?5:10)==0}var ie=.15;function ae(e,t,n=0){let r=Math.max(0,t*(1-n));return Math.max(e*ie,e-r)}var L=[{kind:`shardling`,hp:40,speed:150,armor:0,air:!1,boss:!1,bountyMul:1,wardCost:1,from:1,weight:10},{kind:`flicker`,hp:24,speed:260,armor:0,air:!1,boss:!1,bountyMul:1,wardCost:1,from:3,weight:7},{kind:`husk`,hp:90,speed:110,armor:6,air:!1,boss:!1,bountyMul:1.4,wardCost:1,from:5,weight:6},{kind:`drifter`,hp:55,speed:170,armor:0,air:!0,boss:!1,bountyMul:1.3,wardCost:1,from:7,weight:5},{kind:`splitter`,hp:110,speed:130,armor:2,air:!1,boss:!1,bountyMul:1.2,wardCost:1,from:9,weight:5},{kind:`leech`,hp:70,speed:140,armor:0,air:!1,boss:!1,bountyMul:1.6,wardCost:1,from:12,weight:4},{kind:`bulwark`,hp:160,speed:100,armor:8,air:!1,boss:!1,bountyMul:1.8,wardCost:1,from:15,weight:3},{kind:`phase`,hp:80,speed:160,armor:0,air:!1,boss:!1,bountyMul:1.5,wardCost:1,from:18,weight:4},{kind:`glacian`,hp:2600,speed:82,armor:10,air:!1,boss:!0,bountyMul:12,wardCost:5,from:10,weight:0},{kind:`cindermaw`,hp:4e3,speed:86,armor:14,air:!1,boss:!0,bountyMul:14,wardCost:5,from:20,weight:0},{kind:`arcwright`,hp:5600,speed:90,armor:18,air:!0,boss:!0,bountyMul:16,wardCost:5,from:30,weight:0},{kind:`basaltTitan`,hp:7600,speed:76,armor:26,air:!1,boss:!0,bountyMul:18,wardCost:5,from:40,weight:0},{kind:`nullChoir`,hp:1e4,speed:84,armor:22,air:!1,boss:!0,bountyMul:22,wardCost:5,from:50,weight:0}],oe=.6,se=.3;function ce(e,t=!1){let n=Math.max(1,Math.floor(e/(t?5:10)));return 8+Math.min(4,n-1)}function le(e,t=!1){let n=L[ce(e,t)],r=Math.max(0,Math.floor((e-50)/10));return n.hp*I(e)*1.9**r}var R=[{id:`hailstorm`,pair:[`rime`,`arc`],maxLevel:3},{id:`thermalShock`,pair:[`rime`,`cinder`],maxLevel:3},{id:`collapse`,pair:[`cinder`,`void`],maxLevel:3},{id:`shrapnel`,pair:[`basalt`,`quill`],maxLevel:3},{id:`overcharge`,pair:[`arc`,`flare`],maxLevel:3},{id:`sunrot`,pair:[`flare`,`blight`],maxLevel:3},{id:`entropy`,pair:[`void`,`blight`],maxLevel:3},{id:`anchorline`,pair:[`basalt`,`void`],maxLevel:3}],ue={hailstorm:[.3,.4,.5],thermalShock:[.15,.25,.35],collapse:[80,160,260],shrapnel:[.25,.35,.45],overcharge:[1,2,3],sunrot:[4,8,12],entropy:[30,60,100],anchorline:[.05,.09,.13]};function de(e,t,n=3){return e<=0||t<=0?0:Math.min(n,1+Math.floor((e+t-2)/4))}function fe(e,t){let n=0;for(let r=0;r<R.length;r++){let i=R[r],a=de(e[v(i.pair[0])]??0,e[v(i.pair[1])]??0,i.maxLevel);t[r]=a,a>0&&(n|=1<<r)}return n}function z(e,t){let n=ue[e];return!n||t<=0?0:n[Math.min(n.length,t)-1]}function pe(e,t,n){let r=null,i=5;for(let n of e){let e=t[v(n)]??0;e>i&&(i=e,r=n)}return r??n.pick(e)}function me(e,t,n){for(let r of e){let e=v(r);t[e]=r===n?0:(t[e]??0)+1}}function he(e,t,n,r,i){if(t>=7)return{kind:`overload`,type:e,tier:7};let a=t+1;return r!==null&&r===e?{kind:`merge`,type:e,tier:a}:{kind:`merge`,type:i.pick(n),tier:a}}var ge=.08,_e=.1,ve=.4,B={swift:!1,armored:!1,frugal:!1,brittle:!1,bountiful:!0,unanchored:!1,relentless:!1,elite:!1},V=1.15,ye=.8,be=1.25;function xe(e){let t={enemySpeed:1,enemyArmor:0,regenMul:1,wards:20,bountyMul:1,anchor:!0,wavePeriod:30,elite:!1};for(let n of e)n===`swift`?t.enemySpeed*=V:n===`armored`?t.enemyArmor+=6:n===`frugal`?t.regenMul*=ye:n===`brittle`?t.wards=10:n===`bountiful`?t.bountyMul*=be:n===`unanchored`?t.anchor=!1:n===`relentless`?t.wavePeriod=24:n===`elite`&&(t.elite=!0);return t}var Se=1e3;function Ce(e,t,n){return Math.max(0,Math.floor(e*Se+t*1+n*25))}function we(e,t){return Math.floor(e*8+t/3)}function Te(e){return 1+Math.min(1,.25*Math.max(0,e-1))}var Ee={runeLevel:{rime:0,cinder:0,arc:0,basalt:0,quill:0,void:0,flare:0,blight:0},regen:0,startEssence:0,wards:0,refund:0};function De(e){return Math.round(60*1.6**e)}function Oe(e){return Math.round(120*1.75**e)}s.length;var ke=18,Ae=[{transform:`translate(-50%, 0) scale(0.6)`,opacity:0},{transform:`translate(-50%, -14px) scale(1.12)`,opacity:1,offset:.18},{transform:`translate(-50%, -34px) scale(1)`,opacity:.95,offset:.65},{transform:`translate(-50%, -52px) scale(0.92)`,opacity:0}],je={duration:900,easing:`cubic-bezier(.2,.8,.3,1)`,fill:`both`},H={duration:1400,easing:`cubic-bezier(.2,.8,.3,1)`,fill:`both`};function Me(e){let t=e.parentElement,n=document.createElement(`div`);n.className=`floaters`,n.setAttribute(`aria-hidden`,`true`);let r=[];for(let e=0;e<ke;e++){let e=document.createElement(`div`);e.className=`floater`;let t=document.createElement(`span`);e.appendChild(t),n.appendChild(e),r.push({wrap:e,label:t})}t?.appendChild(n);let i=typeof n.animate==`function`,a=0,o=4;return{spawn(e,t,n,s){if(!i||o<=0)return;o--;let c=r[a];a=(a+1)%ke,c.wrap.style.transform=`translate3d(${e.toFixed(1)}px, ${t.toFixed(1)}px, 0)`,c.label.textContent=`+${Math.max(1,Math.round(n))}`,c.label.className=s===2?`is-big`:s===1?`is-combo`:``,c.label.animate(Ae,s===2?H:je)},frame(){o=4},dispose(){n.remove()}}}var U=1200,Ne=1900;function Pe(e,t){return t*3+e}function Fe(e){return e%3}function Ie(e){return Math.floor(e/3)}function W(e){return 331+Fe(e)*184+85}function G(e){return 400+Ie(e)*234+85}function Le(e,t,n=.25){let r=85*(1+n),i=Math.round((e-331-85)/184),a=Math.round((t-400-85)/234);if(i<0||i>=3||a<0||a>=5)return-1;let o=Pe(i,a);return Math.abs(e-W(o))>r||Math.abs(t-G(o))>r?-1:o}var Re=1573,K=[235,255,235,800,235,Re,965,Re,965,800,965,255],ze=[235,255,600,1262.68,965,255],q=1070,Be=1633,Ve=3190,He=1916.7;K[0],K[1],K[K.length-2],K[K.length-1];function Ue(e){let t=[0];for(let n=2;n<e.length;n+=2){let r=e[n]-e[n-2],i=e[n+1]-e[n-1];t.push(t[t.length-1]+Math.hypot(r,i))}return t}var We=Ue(K),Ge=Ue(ze),Ke=We[We.length-1],qe=Ge[Ge.length-1];function Je(e,t,n,r){let i=t[t.length-1],a=n<0?0:n>i?i:n,o=0;for(;o<t.length-2&&t[o+1]<a;)o++;let s=e[o*2],c=e[o*2+1],l=e[o*2+2],u=e[o*2+3],d=t[o+1]-t[o],f=d>0?(a-t[o])/d:0;return r.x=s+(l-s)*f,r.y=c+(u-c)*f,r.angle=Math.atan2(u-c,l-s),r}function Ye(e,t){return Je(K,We,e,t)}function Xe(e,t){return Je(ze,Ge,e,t)}function Ze(e,t,n){let r=Math.max(1,e),i=Math.max(1,t),a=Math.min(r/U,i/Ne),o=n??{scale:1,offsetX:0,offsetY:0};return o.scale=a,o.offsetX=(r-U*a)/2,o.offsetY=(i-Ne*a)/2,o}function Qe(e,t){return(e-t.offsetX)/t.scale}function $e(e,t){return(e-t.offsetY)/t.scale}function et(e){let t=e+1831565813|0,n=t;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),[((t^t>>>14)>>>0)/4294967296,n]}function tt(e){let t=2166136261;for(let n=0;n<e.length;n++)t^=e.charCodeAt(n),t=Math.imul(t,16777619);return t>>>0}function nt(e){return tt(`rune-bastion/daily/${e}`)>>>0}function rt(e){return new Date(e).toISOString().slice(0,10)}function it(e){let t=e|0,n={get state(){return t},set state(e){t=e|0},next(){let[e,n]=et(t);return t=n,e},int(e){return e<=1?0:Math.floor(n.next()*e)%e},pick(e){return e[n.int(e.length)]},chance(e){return n.next()<e}};return n}var at=[`regen`,`startEssence`,`wards`,`refund`],ot={regen:5,startEssence:3,wards:3,refund:2},st=[`firstSigil`,`crestBearer`,`monolith`,`apex`,`overload`,`wardenTen`,`thirtyStrong`,`flawlessTen`,`synergist`];function ct(){return{v:1,shards:0,unlocked:[..._],runeLevel:{...Ee.runeLevel},bastion:{regen:0,startEssence:0,wards:0,refund:0},deck:[..._].slice(0,5),anchor:_[0],bestWave:0,bestScore:0,streak:{day:``,count:0},dailyDone:null,achievements:[],tutorialDone:!1,lossStreak:0,runs:0}}var lt=e=>typeof e==`string`&&o.includes(e);function ut(e){let t=ct();if(!e||typeof e!=`object`)return t;let n=e,r=(e,t,n,r)=>typeof e==`number`&&Number.isFinite(e)?Math.max(t,Math.min(n,Math.floor(e))):r,i=Array.isArray(n.unlocked)?[...new Set([..._,...n.unlocked.filter(lt)])]:t.unlocked,a=Array.isArray(n.deck)?[...new Set(n.deck.filter(e=>lt(e)&&i.includes(e)))]:[],s={...t,shards:r(n.shards,0,1e9,0),unlocked:i,deck:a.length===5?a:t.deck,bestWave:r(n.bestWave,0,1e6,0),bestScore:r(n.bestScore,0,1e9,0),dailyDone:typeof n.dailyDone==`string`?n.dailyDone:null,tutorialDone:n.tutorialDone===!0,lossStreak:r(n.lossStreak,0,1e3,0),runs:r(n.runs,0,1e9,0),achievements:Array.isArray(n.achievements)?n.achievements.filter(e=>st.includes(e)):[]};s.anchor=lt(n.anchor)&&s.deck.includes(n.anchor)?n.anchor:s.deck[0];for(let e of o)s.runeLevel[e]=r(n.runeLevel?.[e],0,5,0);for(let e of at)s.bastion[e]=r(n.bastion?.[e],0,ot[e],0);return n.streak&&typeof n.streak.day==`string`&&(s.streak={day:n.streak.day,count:r(n.streak.count,0,1e5,0)}),s}function dt(e){return{runeLevel:{...e.runeLevel},...e.bastion}}function ft(e,t){return!e.unlocked.includes(t)&&e.shards>=250}function pt(e,t){return ft(e,t)?(e.shards-=250,e.unlocked.push(t),!0):!1}function mt(e,t){let n=e.runeLevel[t];return n>=5||!e.unlocked.includes(t)?null:De(n)}function ht(e,t){let n=mt(e,t);return n===null||e.shards<n?!1:(e.shards-=n,e.runeLevel[t]++,!0)}function gt(e,t){return e.bastion[t]>=ot[t]?null:Oe(e.bastion[t])}function _t(e,t){let n=gt(e,t);return n===null||e.shards<n?!1:(e.shards-=n,e.bastion[t]++,!0)}function vt(e,t){if(!e.unlocked.includes(t))return;let n=e.deck.indexOf(t);if(n>=0){if(e.deck.length<=2)return;e.deck.splice(n,1)}else e.deck.length<5&&e.deck.push(t);e.deck.includes(e.anchor)||(e.anchor=e.deck[0])}function yt(e){let t=new Date(`${e}T00:00:00Z`);return t.setUTCDate(t.getUTCDate()-1),t.toISOString().slice(0,10)}var bt={firstSigil:e=>e.bestTier>=3,crestBearer:e=>e.bestTier>=4,monolith:e=>e.bestTier>=6,apex:e=>e.bestTier>=7,overload:e=>e.overloads>0,wardenTen:e=>e.wavesCleared>=10,thirtyStrong:e=>e.wavesCleared>=30,flawlessTen:e=>e.wavesCleared>=10&&e.leaksBeforeTen===0,synergist:e=>e.maxSynergies>=3};function xt(e,t){let n=[];for(let r of st)!e.achievements.includes(r)&&bt[r](t)&&(e.achievements.push(r),n.push(r));return n}function St(e,t,n){e.streak.day!==n&&(e.streak={day:n,count:e.streak.day===yt(n)?e.streak.count+1:1});let r=Te(e.streak.count),i=Math.floor(we(t.wavesCleared,t.kills)*r);e.shards+=i,e.runs++;let a=t.score>e.bestScore;return e.bestScore=Math.max(e.bestScore,t.score),e.bestWave=Math.max(e.bestWave,t.wavesCleared),t.mode===`daily`&&(e.dailyDone=n),e.lossStreak=t.wavesCleared<8?e.lossStreak+1:0,{shards:i,multiplier:r,newAchievements:xt(e,t),newBest:a}}function Ct(e){return e.lossStreak>=3?30:0}function wt(e){let t=nt(e),n=it(t),r=[...o],i=[];for(;i.length<5;)i.push(r.splice(n.int(r.length),1)[0]);let a=[...l].filter(e=>e!==`elite`),s=[a.splice(n.int(a.length),1)[0]];return n.chance(.5)&&s.push(a.splice(n.int(a.length),1)[0]),{day:e,seed:t,deck:i,anchor:i[n.int(i.length)],modifiers:s}}function Tt(e=256){let t=Math.max(8,e|0),n=Array(t);for(let e=0;e<t;e++)n[e]={kind:u.Summon,a:0,b:0,c:0,d:0,x:0,y:0,at:0};let r=0,i=0,a=0;return{capacity:t,get length(){return i},get dropped(){return a},at(e){return n[(r+e)%t]},push(e,o=0,s=0,c=0,l=0,u=0,d=0,f=0){let p;i<t?(p=(r+i)%t,i++):(p=r,r=(r+1)%t,a++);let m=n[p];m.kind=e,m.a=o,m.b=s,m.c=c,m.d=l,m.x=u,m.y=d,m.at=f},clear(){r=0,i=0}}}var Et=new Map;for(let[e,t]of Object.entries(u))Et.set(t,e);var Dt=e=>L.findIndex(t=>t.kind===e),Ot=Dt(`splitter`),kt=Dt(`leech`),At=Dt(`bulwark`),jt=Dt(`phase`),Mt=.2,Nt=Object.fromEntries(h.map((e,t)=>[e,t]));function Pt(e=256){return{capacity:e,count:0,id:new Int32Array(e),kind:new Uint8Array(e),flags:new Uint16Array(e),hp:new Float32Array(e),maxHp:new Float32Array(e),armor:new Float32Array(e),dist:new Float32Array(e),speed:new Float32Array(e),baseSpeed:new Float32Array(e),x:new Float32Array(e),y:new Float32Array(e),slowUntil:new Float32Array(e),slowFactor:new Float32Array(e),burnUntil:new Float32Array(e),burnDps:new Float32Array(e),markUntil:new Float32Array(e),phaseUntil:new Float32Array(e),decayUntil:new Float32Array(e),crackUntil:new Float32Array(e),hitAt:new Float32Array(e)}}function Ft(){let e=Array(15);for(let t=0;t<15;t++)e[t]={index:t,type:null,tier:1,id:0,bornAt:0,cooldown:0,targetId:0,damage:0,kills:0,disabledUntil:0};return e}function It(e){let t=xe(e.modifiers),n=Tt(),r=it(e.seed),i={x:0,y:0,angle:0},l=new Int32Array(o.length),f=1,p=1,m=0,h={mode:e.mode,seed:e.seed,rng:r.state,phase:`idle`,time:0,wave:Math.max(0,e.startWave??0),wavesCleared:Math.max(0,e.startWave??0),waveIn:12,waveActive:!1,spawnsLeft:0,spawnIn:0,waveProgress:0,essence:120+e.meta.startEssence*30,essenceMax:320,essenceRegen:(10+e.meta.regen*C)*t.regenMul,summonCost:w(0),wards:t.wards+e.meta.wards*2,wardsMax:t.wards+e.meta.wards*2,score:0,cells:Ft(),enemies:Pt(),synergyMask:0,synergyLevel:new Uint8Array(s.length),pools:{capacity:8,x:new Float32Array(8),y:new Float32Array(8),until:new Float32Array(8),dps:new Float32Array(8)},pity:new Int32Array(o.length),abilities:{pulseCd:0,resonanceCd:0,resonanceUntil:0},boss:{id:0,kind:0,hp:0,maxHp:0,specialIn:0},stats:{kills:0,leaks:0,summons:0,merges:0,essenceSpent:0,essenceEarned:0,bestTier:1,damageByRune:new Float32Array(o.length),overloads:0,hastens:0},config:e},_=()=>{let e=0;for(let t=0;t<15;t++)h.cells[t].type!==null&&e++;return e},y=()=>{h.summonCost=w(_())},T=()=>{l.fill(0);for(let e=0;e<15;e++){let t=h.cells[e];if(t.type===null)continue;let n=v(t.type);t.tier>l[n]&&(l[n]=t.tier),t.tier>h.stats.bestTier&&(h.stats.bestTier=t.tier)}let e=h.synergyMask,t=fe(l,h.synergyLevel);if(t!==e){for(let r=0;r<s.length;r++){let i=1<<r;(t&i)!==0&&(e&i)===0?n.push(u.SynergyOn,r,h.synergyLevel[r],0,0,0,0,h.time):(t&i)===0&&(e&i)!==0&&n.push(u.SynergyOff,r,0,0,0,0,0,h.time)}h.synergyMask=t}Me()},E=(e,t)=>{let r=h.essence;h.essence=Math.min(h.essenceMax,Math.max(0,h.essence+e));let i=h.essence-r;i>0?h.stats.essenceEarned+=i:h.stats.essenceSpent-=i,n.push(u.Essence,Math.round(i),t,0,0,0,0,h.time)},D=()=>{let e=s.indexOf(`anchorline`);return z(`anchorline`,h.synergyLevel[e]??0)},M=()=>h.time<h.abilities.resonanceUntil?ve:0,N=(e,r=0,i=0)=>{let a=h.enemies;if(a.count>=a.capacity)return 0;let o=L[e],s=a.count++,l=f++,d=r>0?r:o.hp*I(Math.max(1,h.wave));a.id[s]=l,a.kind[s]=e,a.flags[s]=c.Alive|(o.air?c.Air:0)|(o.boss?c.Boss:0),a.hp[s]=d,a.maxHp[s]=d,a.armor[s]=(o.armor+t.enemyArmor)*te(Math.max(1,h.wave)),a.dist[s]=i;let p=o.air?qe/He:Ke/Ve;return a.baseSpeed[s]=o.speed*p*ee(Math.max(1,h.wave))*t.enemySpeed,a.speed[s]=a.baseSpeed[s],a.slowUntil[s]=0,a.slowFactor[s]=1,a.burnUntil[s]=0,a.burnDps[s]=0,a.markUntil[s]=0,a.phaseUntil[s]=0,a.decayUntil[s]=0,a.crackUntil[s]=0,a.hitAt[s]=-1,P(s),o.boss&&(h.boss.id=l,h.boss.kind=e,h.boss.hp=d,h.boss.maxHp=d,h.boss.specialIn=14,n.push(u.BossSpawn,l,e,d,0,a.x[s],a.y[s],h.time)),l},P=e=>{let t=h.enemies;(t.flags[e]&c.Air)===0?Ye(t.dist[e],i):Xe(t.dist[e],i),t.x[e]=i.x,t.y[e]=i.y},ie=e=>{let t=h.enemies,n=--t.count;e!==n&&(t.id[e]=t.id[n],t.kind[e]=t.kind[n],t.flags[e]=t.flags[n],t.hp[e]=t.hp[n],t.maxHp[e]=t.maxHp[n],t.armor[e]=t.armor[n],t.dist[e]=t.dist[n],t.speed[e]=t.speed[n],t.baseSpeed[e]=t.baseSpeed[n],t.x[e]=t.x[n],t.y[e]=t.y[n],t.slowUntil[e]=t.slowUntil[n],t.slowFactor[e]=t.slowFactor[n],t.burnUntil[e]=t.burnUntil[n],t.burnDps[e]=t.burnDps[n],t.markUntil[e]=t.markUntil[n],t.phaseUntil[e]=t.phaseUntil[n],t.decayUntil[e]=t.decayUntil[n],t.crackUntil[e]=t.crackUntil[n],t.hitAt[e]=t.hitAt[n]),t.id[n]=0,t.flags[n]=0},R=e=>{let r=h.enemies,i=r.kind[e],a=L[i];h.stats.kills++,a.boss&&r.id[e]===h.boss.id&&(h.boss.id=0);let o=k(Math.max(1,h.wave),a.bountyMul);n.push(u.Kill,r.id[e],i,o,+!!a.boss,r.x[e],r.y[e],h.time),E(o*t.bountyMul,d.Bounty);let s=r.dist[e],l=r.maxHp[e];if(H>0&&h.time<r.markUntil[e]&&(r.flags[e]&c.Air)===0&&ue(r.x[e],r.y[e]),ie(e),i===Ot)for(let e=0;e<2;e++)N(0,l*oe*.5,Math.max(0,s-18*e))},ue=(e,t)=>{let r=h.pools,i=0;for(let e=0;e<r.capacity;e++){if(r.until[e]<=h.time){i=e;break}r.until[e]<r.until[i]&&(i=e)}r.x[i]=e,r.y[i]=t,r.until[i]=h.time+3,r.dps[i]=H,n.push(u.Pool,i,125,3,H,e,t,h.time)},de=e=>{let t=h.pools,n=h.enemies;for(let r=0;r<t.capacity;r++){if(t.until[r]<=h.time)continue;let i=t.x[r],a=t.y[r],o=t.dps[r]*e;for(let e=n.count-1;e>=0;e--){if(e>=n.count||(n.flags[e]&c.Air)!==0)continue;let t=n.x[e]-i,r=n.y[e]-a;t*t+r*r>15625||(n.decayUntil[e]=Math.max(n.decayUntil[e],h.time+.5),B(e,o,`blight`))}}},B=(e,t,n,r=0)=>{let i=h.enemies,a=h.time,o=1;a<i.markUntil[e]&&(o+=Mt),a<i.decayUntil[e]&&(o+=g.blight.decay??0),n!==null&&a<i.slowUntil[e]&&(o+=Ee),(i.flags[e]&c.Guarded)!==0&&(o*=1-se);let s=i.armor[e];a<i.crackUntil[e]&&(s=Math.max(0,s-(g.basalt.armorBreak??0)-De));let l=ae(t*o,s,r);return i.hp[e]=i.hp[e]-l,i.hitAt[e]=a,n!==null&&(h.stats.damageByRune[v(n)]+=l),(i.flags[e]&c.Boss)!==0&&i.id[e]===h.boss.id&&(h.boss.hp=Math.max(0,i.hp[e])),i.hp[e]<=0&&(R(e),!0)},V=e=>{let t=h.enemies,r=L[t.kind[e]];h.stats.leaks++,h.wards=Math.max(0,h.wards-r.wardCost),n.push(u.Leak,t.id[e],t.kind[e],r.wardCost,0,t.x[e],t.y[e],h.time),n.push(u.WardLost,h.wards,0,0,0,0,0,h.time),r.boss&&t.id[e]===h.boss.id&&(h.boss.id=0),ie(e),h.wards<=0&&we(`defeat`)},ye=e=>{h.wave++;let r=re(h.wave,t.elite),i=r?Math.ceil(F(h.wave)/2):F(h.wave);m=i+ +!!r,h.spawnsLeft=i,h.spawnIn=0,h.waveActive=!0,h.waveProgress=0,n.push(u.WaveStart,h.wave,m,+!!r,+!!e,0,0,h.time),r&&N(ce(h.wave,t.elite),le(h.wave,t.elite))},be=()=>{let e=0;for(let t=0;t<L.length;t++){let n=L[t];!n.boss&&n.from<=h.wave&&(e+=n.weight)}if(e<=0)return 0;let t=r.next()*e;for(let e=0;e<L.length;e++){let n=L[e];if(!(n.boss||n.from>h.wave)&&(t-=n.weight,t<=0))return e}return 0},Se=()=>{h.waveActive=!1,h.wavesCleared++,h.waveProgress=1;let r=A(h.wave);n.push(u.WaveClear,h.wave,r,0,0,0,0,h.time),E(r,d.WaveBonus),h.score=Ce(h.wavesCleared,h.stats.kills,h.wards),e.maxWaves!==void 0&&h.wavesCleared>=e.maxWaves?we(`victory`):h.waveIn=t.wavePeriod},we=e=>{h.phase!==`defeat`&&h.phase!==`victory`&&(h.phase=e,h.score=Ce(h.wavesCleared,h.stats.kills,h.wards),n.push(e===`defeat`?u.Defeat:u.Victory,h.wave,h.score,0,0,0,0,h.time))},Te=()=>{let e=h.enemies,t=-1;for(let n=0;n<e.count;n++)e.id[n]===h.boss.id&&(t=n);if(t<0)return;let i=e.kind[t],a=L[i].kind,o=0;if(a===`arcwright`)e.dist[t]=e.dist[t]+220,o=1;else if(a===`nullChoir`)e.hp[t]=Math.min(e.maxHp[t],e.hp[t]+e.maxHp[t]*.08),h.boss.hp=e.hp[t],o=2;else{let e=a===`cindermaw`?1:2,t=a===`cindermaw`?5:3;for(let a=0;a<e;a++){let e=r.int(15),a=h.cells[e];a.type!==null&&(a.disabledUntil=h.time+t,n.push(u.BossSpecial,h.boss.id,i,0,e,W(e),G(e),h.time))}return}n.push(u.BossSpecial,h.boss.id,i,o,-1,e.x[t],e.y[t],h.time)},Ee=0,De=0,Oe=0,ke=0,Ae=0,je=0,H=0,Me=()=>{let e=h.synergyLevel;Ee=z(`thermalShock`,e[1]),Oe=z(`hailstorm`,e[0]),je=z(`collapse`,e[2]),Ae=z(`shrapnel`,e[3]),ke=z(`overcharge`,e[4]),De=z(`sunrot`,e[5]),H=z(`entropy`,e[6])},U=(e,t)=>{let n=h.enemies.flags[e];return(n&c.Untargetable)===0?t||(n&c.Air)===0:!1},Ne=(e,t,n,r,i,a)=>{let o=h.enemies,s=g[i],l=0,u=h.time;for(let d=o.count-1;d>=0;d--){if(!U(d,a))continue;let f=r,p=o.x[d]-e,m=o.y[d]-t;p*p+m*m>n*n||(i===`rime`?(o.slowUntil[d]=u+(s.slowFor??1),o.slowFactor[d]=Math.min(o.slowFactor[d]<1&&u<o.slowUntil[d]?o.slowFactor[d]:1,s.slow??1)):i===`cinder`?(o.burnUntil[d]=u+(s.burnFor??0),o.burnDps[d]=Math.max(o.burnDps[d],(s.burnDps??0)*r/s.damage),je>0&&u<o.markUntil[d]&&(o.markUntil[d]=0,f+=je)):i===`void`?((o.flags[d]&c.Boss)===0&&(o.dist[d]=Math.max(0,o.dist[d]-(s.pull??0))),o.markUntil[d]=u+2):i===`blight`&&(o.decayUntil[d]=u+2,De>0&&(o.crackUntil[d]=u+2)),B(d,f,i)&&l++)}return l},Pe=(e,t,n,r,i,a)=>{let o=h.enemies,s=-1,c=n*n;for(let n=0;n<o.count;n++){if(!U(n,r))continue;let l=!1;for(let e=0;e<a;e++)i[e]===o.id[n]&&(l=!0);if(l)continue;let u=o.x[n]-e,d=o.y[n]-t,f=u*u+d*d;f<c&&(c=f,s=n)}return s},Fe=new Int32Array(8),Ie=e=>{let t=h.enemies,r=D(),i=M();for(let a=0;a<15;a++){let o=h.cells[a];if(o.type===null||h.time<o.disabledUntil||(o.cooldown-=e,o.cooldown>0))continue;let s=o.type,l=g[s],d=W(a),f=G(a),p=x(s,o.tier,r),m=l.air,_=-1,y=-1;for(let e=0;e<t.count;e++){if(!U(e,m))continue;let n=t.x[e]-d,r=t.y[e]-f;if(n*n+r*r>p*p)continue;let i=(t.flags[e]&c.Air)===0?t.dist[e]:t.dist[e]/qe*Ke;i>y&&(y=i,_=e)}if(_<0){o.targetId=0,o.cooldown=0;continue}o.targetId=t.id[_];let C=S(s,o.tier,i);o.cooldown=1/Math.max(.05,C);let w=b(s,o.tier,h.config.meta.runeLevel[s]),T=t.x[_],E=t.y[_];n.push(u.Fire,a,v(s),o.tier,Nt[l.shot],T,E,h.time);let D=0,O=h.stats.damageByRune[v(s)];switch(l.shot){case`beam`:w/=Math.max(1,l.rate),B(_,w,s,l.pierce??0)&&D++;break;case`bolt`:t.crackUntil[_]=h.time+2.5,B(_,w,s)&&D++,Ae>0&&(D+=Ne(T,E,120,w*Ae,s,!1));break;case`shard`:{let e=l.shards??1;for(let t=0;t<e;t++){let e=t===0?_:Pe(T,E,200,m,Fe,0);if(e<0)break;B(e,w,s)&&D++}break}case`chain`:{let e=(l.hops??0)+ke,r=_,i=0;for(let a=0;a<=e&&r>=0&&i<Fe.length;a++){Fe[i++]=t.id[r];let e=t.x[r],o=t.y[r];n.push(u.Chain,t.id[r],v(s),a,Math.round(w),e,o,h.time),Oe>0&&(t.slowUntil[r]=h.time+1.2,t.slowFactor[r]=1-Oe),B(r,w,s)&&D++,w*=l.hopFalloff??1,r=Pe(e,o,260,m,Fe,i)}break}case`burst`:case`field`:D+=Ne(T,E,l.area,w,s,m)}o.damage+=h.stats.damageByRune[v(s)]-O,o.kills+=D}},Le=(e,t=!1)=>{let i=e;if(e===-1){let e=_();if(e>=15)return{ok:!1,reason:d.BoardFull};if(!t&&h.essence<h.summonCost)return{ok:!1,reason:d.NotEnoughEssence};let n=r.int(15-e);i=-1;for(let e=0;e<15;e++)if(h.cells[e].type===null&&n--===0){i=e;break}}if(i<0||i>=15)return{ok:!1,reason:d.CellOccupied};let a=h.cells[i];if(a.type!==null)return{ok:!1,reason:d.CellOccupied};if(!t&&h.essence<h.summonCost)return{ok:!1,reason:d.NotEnoughEssence};let o=t?0:h.summonCost,s=pe(h.config.deck,h.pity,r);return me(h.config.deck,h.pity,s),a.type=s,a.tier=1,a.id=p++,a.bornAt=h.time,a.cooldown=0,a.damage=0,a.kills=0,h.essence-=o,h.stats.essenceSpent+=o,h.stats.summons++,n.push(u.Summon,i,v(s),1,o,W(i),G(i),h.time),y(),T(),{ok:!0}},Re=(e,i)=>{if(e===i||e<0||i<0||e>=15||i>=15)return{ok:!1,reason:d.DifferentType};let a=h.cells[e],o=h.cells[i];if(a.type===null)return{ok:!1,reason:d.DifferentType};if(o.type===null)return K(e,i);if(a.type!==o.type)return{ok:!1,reason:d.DifferentType};if(a.tier!==o.tier)return{ok:!1,reason:d.DifferentTier};let s=he(a.type,a.tier,h.config.deck,t.anchor?h.config.anchor:null,r);if(s.kind===`overload`){a.type=null,o.type=null,h.stats.overloads++,n.push(u.Overload,i,0,150,0,W(i),G(i),h.time),E(150,d.WaveBonus);let e=h.enemies;for(let t=e.count-1;t>=0;t--)B(t,e.maxHp[t]*ge,null,1);return y(),T(),{ok:!0}}return a.type=null,o.type=s.type,o.tier=s.tier,o.id=p++,o.bornAt=h.time,o.cooldown=0,h.stats.merges++,n.push(u.Merge,e,i,v(s.type),s.tier,W(i),G(i),h.time),y(),T(),{ok:!0}},K=(e,t)=>{if(e===t||e<0||t<0||e>=15||t>=15)return{ok:!1,reason:d.CellOccupied};let r=h.cells[e],i=h.cells[t];return r.type===null||i.type!==null?{ok:!1,reason:d.CellOccupied}:(i.type=r.type,i.tier=r.tier,i.id=r.id,i.bornAt=r.bornAt,i.cooldown=r.cooldown,i.damage=r.damage,i.kills=r.kills,r.type=null,r.damage=0,r.kills=0,n.push(u.Move,e,t,v(i.type),i.tier,W(t),G(t),h.time),T(),{ok:!0})},ze=e=>{if(e<0||e>=15)return{ok:!1,reason:d.CellOccupied};let t=h.cells[e];if(t.type===null)return{ok:!1,reason:d.CellOccupied};let r=O(t.tier,h.config.meta.refund);return n.push(u.Sell,e,v(t.type),t.tier,r,W(e),G(e),h.time),t.type=null,t.damage=0,t.kills=0,E(r,d.Refund),y(),T(),{ok:!0}},q=()=>{if(h.waveActive)return{ok:!1,reason:d.BoardFull};let e=h.waveIn,t=j(e);return h.stats.hastens++,n.push(u.Hasten,h.wave+1,t,Math.round(e),0,0,0,h.time),E(t,d.WaveBonus),h.waveIn=0,ye(!0),{ok:!0}},Be=e=>{if(e===`wardPulse`){if(h.abilities.pulseCd>0)return{ok:!1,reason:d.NotEnoughEssence};h.abilities.pulseCd=45,n.push(u.Ability,0,0,0,0,0,0,h.time);let e=h.enemies;for(let t=e.count-1;t>=0;t--)e.slowUntil[t]=h.time+3,e.slowFactor[t]=.6,B(t,e.maxHp[t]*_e+40,null,1);return{ok:!0}}return h.abilities.resonanceCd>0?{ok:!1,reason:d.NotEnoughEssence}:(h.abilities.resonanceCd=60,h.abilities.resonanceUntil=h.time+8,n.push(u.Ability,1,0,0,0,0,0,h.time),{ok:!0})};return{state:h,events:n,step:(e=a)=>{if(h.phase!==`running`)return;let t=Math.min(Math.max(e,0),.1);if(h.time+=t,h.essence=Math.min(h.essenceMax,h.essence+h.essenceRegen*t),h.abilities.pulseCd>0&&(h.abilities.pulseCd=Math.max(0,h.abilities.pulseCd-t)),h.abilities.resonanceCd>0&&(h.abilities.resonanceCd=Math.max(0,h.abilities.resonanceCd-t)),!h.waveActive)h.waveIn-=t,h.waveIn<=0&&ye(!1);else if(h.spawnsLeft>0)for(h.spawnIn-=t;h.spawnIn<=0&&h.spawnsLeft>0;)N(be()),h.spawnsLeft--,h.spawnIn+=ne(h.wave);let n=h.enemies;for(let e=n.count-1;e>=0;e--){let r=h.time<n.slowUntil[e];if(r?n.flags[e]=n.flags[e]|c.Slowed:n.flags[e]=n.flags[e]&~c.Slowed,n.speed[e]=n.baseSpeed[e]*(r?n.slowFactor[e]:1),n.dist[e]=n.dist[e]+n.speed[e]*t,h.time<n.burnUntil[e]&&n.burnDps[e]>0&&B(e,n.burnDps[e]*t,`cinder`))continue;let i=(n.flags[e]&c.Air)===0?Ke:qe;if(n.dist[e]>=i){V(e);continue}P(e)}let i=0,o=0;for(let e=0;e<n.count;e++){let t=n.kind[e];t===kt?i++:t===At?o++:t===jt&&((h.time+n.id[e]*.37)%2.5<.8?n.flags[e]=n.flags[e]|c.Untargetable:n.flags[e]=n.flags[e]&~c.Untargetable)}i>0&&(h.essence=Math.max(0,h.essence-4*i*t));for(let e=0;e<n.count;e++){let t=!1;if(o>0&&n.kind[e]!==At)for(let r=0;r<n.count&&!t;r++){if(n.kind[r]!==At)continue;let i=n.x[r]-n.x[e],a=n.y[r]-n.y[e];i*i+a*a<9e4&&(t=!0)}t?n.flags[e]=n.flags[e]|c.Guarded:n.flags[e]=n.flags[e]&~c.Guarded}if(h.boss.id!==0&&(h.boss.specialIn-=t,h.boss.specialIn<=0&&(h.boss.specialIn=14,Te())),Ie(t),de(t),h.waveActive){let e=h.spawnsLeft+h.enemies.count;h.waveProgress=m>0?Math.max(0,Math.min(1,1-e/m)):0,e===0&&Se()}h.score=Ce(h.wavesCleared,h.stats.kills,h.wards),h.rng=r.state},input(e){switch(e.type){case`begin`:return h.phase!==`idle`&&h.phase!==`paused`?{ok:!1}:(h.phase=`running`,{ok:!0});case`pause`:return e.on&&h.phase===`running`?h.phase=`paused`:!e.on&&h.phase===`paused`&&(h.phase=`running`),{ok:!0};case`summon`:return h.phase===`running`?Le(e.cell):{ok:!1};case`merge`:return h.phase===`running`?Re(e.from,e.to):{ok:!1};case`move`:return h.phase===`running`?K(e.from,e.to):{ok:!1};case`sell`:return h.phase===`running`?ze(e.cell):{ok:!1};case`hasten`:return h.phase===`running`?q():{ok:!1};case`ability`:return h.phase===`running`?Be(e.id):{ok:!1};case`grant`:if(e.what===`essence`)E(e.amount,d.Rewarded);else if(e.what===`wards`)h.wards=Math.min(h.wardsMax,h.wards+e.amount),h.wards>0&&h.phase===`defeat`&&(h.phase=`running`);else{let t=Math.max(0,Math.floor(e.amount));for(;t>0&&Le(-1,!0).ok;)t--;t>0&&E(h.summonCost*t,d.Rewarded)}return{ok:!0};default:return{ok:!1}}},serialize(){let e=[];for(let t=0;t<15;t++){let n=h.cells[t];e.push(n.type===null?-1:v(n.type),n.tier)}return{v:1,config:h.config,rng:r.state,phase:h.phase,time:h.time,wave:h.wave,wavesCleared:h.wavesCleared,waveIn:h.waveIn,essence:h.essence,wards:h.wards,score:h.score,cells:e,pity:Array.from(h.pity),stats:{kills:h.stats.kills,leaks:h.stats.leaks,summons:h.stats.summons,merges:h.stats.merges,bestTier:h.stats.bestTier,overloads:h.stats.overloads,hastens:h.stats.hastens}}},restore(e){if(e.v!==1||e.config.mode!==h.mode||e.cells.length!==30)return!1;r.state=e.rng,h.rng=e.rng,h.phase=e.phase,h.time=e.time,h.pools.until.fill(0),h.wave=e.wave,h.wavesCleared=e.wavesCleared,h.waveIn=Math.max(6,e.waveIn),h.waveActive=!1,h.spawnsLeft=0,h.essence=e.essence,h.wards=e.wards,h.score=e.score,h.enemies.count=0;for(let t=0;t<15;t++){let n=h.cells[t],r=e.cells[t*2];n.type=r<0?null:o[r],n.tier=Math.min(7,Math.max(1,e.cells[t*2+1])),n.id=t+1,n.bornAt=h.time,n.cooldown=0,n.targetId=0,n.damage=0,n.kills=0,n.disabledUntil=0}for(let t=0;t<h.pity.length;t++)h.pity[t]=e.pity[t]??0;return h.stats.kills=e.stats.kills,h.stats.leaks=e.stats.leaks,h.stats.summons=e.stats.summons,h.stats.merges=e.stats.merges,h.stats.bestTier=Math.max(1,Math.min(7,e.stats.bestTier)),h.stats.overloads=e.stats.overloads,h.stats.hastens=e.stats.hastens,y(),T(),!0}}}function Lt(e={}){return{mode:`siege`,seed:1,deck:[`rime`,`cinder`,`arc`,`basalt`,`quill`],anchor:null,meta:{runeLevel:{rime:0,cinder:0,arc:0,basalt:0,quill:0,void:0,flare:0,blight:0},regen:0,startEssence:0,wards:0,refund:0},modifiers:[],...e}}var Rt=.5;function zt(){return{scale:1,avgMs:16.7,cooldown:0}}function Bt(e,t){return Math.max(.5,Math.min(e||1,2)*t.scale)}function Vt(e,t){return!(t>0)||t>250?!1:(e.avgMs+=(t-e.avgMs)*.05,e.cooldown>0?(e.cooldown--,!1):e.avgMs>22&&e.scale>.5?(e.scale=Math.max(Rt,e.scale-.15),e.cooldown=90,!0):e.avgMs<13&&e.scale<1&&(e.scale=Math.min(1,e.scale+.1),e.cooldown=180,!0))}function Ht(e){return e.getContext(`webgl2`,{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:`high-performance`,desynchronized:!0})}function Ut(e,t,n){let r=e.createShader(t);if(!r)throw Error(`createShader failed`);return e.shaderSource(r,n),e.compileShader(r),r}function Wt(e,t,n,r){let i=e.getExtension(`KHR_parallel_shader_compile`),a=Ut(e,e.VERTEX_SHADER,t),o=Ut(e,e.FRAGMENT_SHADER,n),s=e.createProgram();e.attachShader(s,a),e.attachShader(s,o),e.linkProgram(s);let c=null;return{program:s,poll:()=>{if(c)return c;if(i&&!e.getProgramParameter(s,i.COMPLETION_STATUS_KHR))return null;if(!e.getProgramParameter(s,e.LINK_STATUS)&&!e.isContextLost()){let t=[e.getShaderInfoLog(a),e.getShaderInfoLog(o),e.getProgramInfoLog(s)].filter(Boolean).join(`
`);throw Error(`WebGL program failed to build:\n${t}`)}e.deleteShader(a),e.deleteShader(o);let t={};for(let n of r)t[n]=e.getUniformLocation(s,n);return c={program:s,uniforms:t},c}}}function Gt(e){return{capacity:e,count:0,x:new Float32Array(e),y:new Float32Array(e),vx:new Float32Array(e),vy:new Float32Array(e),life:new Float32Array(e),ttl:new Float32Array(e),size:new Float32Array(e),rgb:new Float32Array(e*3),kind:new Uint8Array(e),gpu:new Float32Array(e*8)}}function Kt(e,t,n,r,i,a,o=Math.random,s=0,c=1){for(let l=0;l<r;l++){let r;r=e.count<e.capacity?e.count++:Math.floor(o()*e.capacity);let l=o()*Math.PI*2,u=i*(.35+o()*.65);e.x[r]=t,e.y[r]=n,e.vx[r]=Math.cos(l)*u,e.vy[r]=Math.sin(l)*u,e.ttl[r]=.45+o()*.55,e.life[r]=e.ttl[r],e.size[r]=(6+o()*16)*c,e.kind[r]=s;let d=.75+o()*.25;e.rgb[r*3]=Math.min(1,a[0]*d+.15),e.rgb[r*3+1]=Math.min(1,a[1]*d+.15),e.rgb[r*3+2]=Math.min(1,a[2]*d+.15)}}function qt(e,t,n=2.2,r=260){let i=Math.exp(-n*t),a=0;for(;a<e.count;){if(e.life[a]-=t,e.life[a]<=0){let t=--e.count;a!==t&&(e.x[a]=e.x[t],e.y[a]=e.y[t],e.vx[a]=e.vx[t],e.vy[a]=e.vy[t],e.life[a]=e.life[t],e.ttl[a]=e.ttl[t],e.size[a]=e.size[t],e.rgb[a*3]=e.rgb[t*3],e.rgb[a*3+1]=e.rgb[t*3+1],e.rgb[a*3+2]=e.rgb[t*3+2],e.kind[a]=e.kind[t]);continue}e.vx[a]*=i,e.vy[a]=e.vy[a]*i+r*t,e.x[a]+=e.vx[a]*t,e.y[a]+=e.vy[a]*t;let n=a*8;e.gpu[n]=e.x[a],e.gpu[n+1]=e.y[a],e.gpu[n+2]=e.size[a],e.gpu[n+3]=e.life[a]/e.ttl[a],e.gpu[n+4]=e.rgb[a*3],e.gpu[n+5]=e.rgb[a*3+1],e.gpu[n+6]=e.rgb[a*3+2],e.gpu[n+7]=e.kind[a],a++}return e.count}var J=`#version 300 es
precision highp float;
precision highp int;
`,Jt=`
const vec3 PAL[13] = vec3[13](
  vec3(0.56, 0.85, 1.00),  // 0 rime
  vec3(1.00, 0.48, 0.24),  // 1 cinder
  vec3(0.71, 0.55, 1.00),  // 2 arc
  vec3(0.88, 0.65, 0.37),  // 3 basalt
  vec3(0.49, 1.00, 0.69),  // 4 quill
  vec3(0.48, 0.43, 1.00),  // 5 void
  vec3(1.00, 0.89, 0.42),  // 6 flare
  vec3(0.71, 1.00, 0.29),  // 7 blight
  vec3(1.00, 1.00, 1.00),  // 8 white
  vec3(1.00, 0.83, 0.42),  // 9 gate gold
  vec3(1.00, 0.25, 0.30),  // 10 danger red
  vec3(1.00, 0.31, 0.55),  // 11 crystal magenta
  vec3(0.37, 0.90, 0.77)   // 12 leyline teal
);
vec3 pal(float i) { return PAL[int(clamp(i, 0.0, 12.0) + 0.5)]; }
`,Yt=`
float hash12(vec2 p) {
  vec3 p3 = fract(vec3(p.xyx) * 0.1031);
  p3 += dot(p3, p3.yzx + 33.33);
  return fract((p3.x + p3.y) * p3.z);
}
float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash12(i), hash12(i + vec2(1, 0)), u.x), mix(hash12(i + vec2(0, 1)), hash12(i + vec2(1, 1)), u.x), u.y);
}
float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * vnoise(p);
    p = p * 2.03 + vec2(17.1, 9.2);
    a *= 0.5;
  }
  return v;
}
`,Xt=`
uniform vec2 u_res;
uniform vec3 u_fit;
vec4 toClip(vec2 b) {
  vec2 p = b * u_fit.x + u_fit.yz;
  return vec4(p.x / u_res.x * 2.0 - 1.0, 1.0 - p.y / u_res.y * 2.0, 0.0, 1.0);
}
`,Zt=`${J}
out vec2 v_uv;
void main() {
  vec2 p = vec2((gl_VertexID << 1) & 2, gl_VertexID & 2);
  v_uv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}
`,Qt=`${J}${Jt}${Yt}
uniform vec2 u_res;
uniform vec3 u_fit;
uniform float u_time;
uniform vec2 u_path[6];
uniform vec2 u_air[3];
uniform vec4 u_grid;     // x, y, cell, gap
uniform float u_rowgap;  // vertical gap between rows
uniform vec4 u_sel;      // x, y, range, alpha
uniform vec4 u_fx;       // waveEnergy, leylineFlare, danger, resonance
uniform vec2 u_gate;     // wards fraction, rift activity
uniform float u_hover;   // hovered cell index or -1
in vec2 v_uv;
out vec4 o;

float sdSeg(vec2 p, vec2 a, vec2 b, out float h) {
  vec2 pa = p - a, ba = b - a;
  h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}
float sdRound(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  vec2 frag = vec2(gl_FragCoord.x, u_res.y - gl_FragCoord.y);
  vec2 b = (frag - u_fit.yz) / u_fit.x;
  float px = 1.0 / u_fit.x; // one buffer pixel in board units
  float t = u_time;

  // nebula (parallax-drifting fbm, navy -> indigo with teal + magenta wisps)
  vec2 q = b * 0.0011;
  float n1 = fbm(q * 1.6 + vec2(t * 0.012, -t * 0.008));
  float n2 = fbm(q * 3.1 - vec2(t * 0.02, t * 0.011) + n1);
  vec3 col = mix(vec3(0.018, 0.024, 0.07), vec3(0.05, 0.06, 0.17), smoothstep(0.2, 0.9, n1));
  col += vec3(0.05, 0.22, 0.2) * pow(smoothstep(0.45, 1.0, n2), 2.0) * 0.55;
  col += vec3(0.28, 0.05, 0.22) * pow(smoothstep(0.5, 1.0, fbm(q * 2.3 + 7.0 + t * 0.006)), 3.0) * 0.6;
  // stars
  vec2 sg = floor(b / 38.0);
  float sh = hash12(sg);
  if (sh > 0.93) {
    vec2 sp = (sg + 0.5 + (vec2(hash12(sg + 3.1), hash12(sg + 7.7)) - 0.5) * 0.7) * 38.0;
    float tw = 0.55 + 0.45 * sin(t * (1.0 + sh * 3.0) + sh * 40.0);
    col += vec3(0.7, 0.8, 1.0) * tw * smoothstep(3.0 * px + 2.0, 0.0, length(b - sp)) * 0.8;
  }

  // bastion platform under the grid
  vec2 gc = u_grid.xy + vec2(3.0 * u_grid.z + 2.0 * u_grid.w, 5.0 * u_grid.z + 4.0 * u_rowgap) * 0.5;
  vec2 gh = vec2(3.0 * u_grid.z + 2.0 * u_grid.w, 5.0 * u_grid.z + 4.0 * u_rowgap) * 0.5;
  float plat = sdRound(b - gc, gh + 46.0, 60.0);
  float platMask = smoothstep(px * 2.0, -px * 2.0, plat);
  vec3 stone = vec3(0.045, 0.055, 0.12) + 0.03 * fbm(b * 0.02);
  col = mix(col, stone, platMask * 0.92);
  col += vec3(0.62, 0.7, 1.0) * 0.35 * smoothstep(2.5 * px + 1.5, 0.0, abs(plat)) * (0.6 + 0.4 * u_fx.w);
  col += vec3(0.25, 0.3, 0.8) * 0.12 * exp(-max(plat, 0.0) * 0.03) * (1.0 - platMask);

  // glass cells
  vec2 lc = b - u_grid.xy;
  vec2 pitch = vec2(u_grid.z + u_grid.w, u_grid.z + u_rowgap);
  vec2 cid = floor((lc + vec2(u_grid.w, u_rowgap) * 0.5) / pitch);
  if (cid.x >= 0.0 && cid.x < 3.0 && cid.y >= 0.0 && cid.y < 5.0) {
    vec2 cc = cid * pitch + u_grid.z * 0.5;
    vec2 lp = lc - cc;
    float d = sdRound(lp, vec2(u_grid.z * 0.5), 26.0);
    float inside = smoothstep(px * 1.5, -px * 1.5, d);
    float hover = step(abs(cid.y * 3.0 + cid.x - u_hover), 0.1);
    vec3 glass = vec3(0.07, 0.09, 0.2) + vec3(0.04, 0.06, 0.12) * (1.0 - (lp.y / u_grid.z + 0.5));
    glass += vec3(0.1, 0.3, 0.35) * hover * 0.6;
    glass += vec3(0.15, 0.1, 0.35) * u_fx.w * 0.35;
    col = mix(col, glass, inside * 0.9);
    float edge = smoothstep(2.2 * px + 1.0, 0.0, abs(d));
    col += mix(vec3(0.45, 0.55, 1.0), vec3(0.37, 0.9, 0.77), hover) * edge * (0.45 + hover * 0.8);
    // engraved corner ticks
    vec2 a = abs(lp) - u_grid.z * 0.5 + 18.0;
    col += vec3(0.5, 0.6, 1.0) * 0.18 * inside * step(0.0, a.x) * step(0.0, a.y) * step(abs(a.x - a.y), 3.0);
  }

  // leyline river
  float best = 1e9;
  float along = 0.0;
  float acc = 0.0;
  for (int i = 0; i < 5; i++) {
    float h;
    vec2 a = u_path[i];
    vec2 c = u_path[i + 1];
    float d = sdSeg(b, a, c, h);
    float L = length(c - a);
    if (d < best) { best = d; along = acc + h * L; }
    acc += L;
  }
  float lane = 38.0;
  float energy = u_fx.x;
  float flow = fbm(vec2(along * 0.012 - t * 1.6, best * 0.05));
  float flow2 = vnoise(vec2(along * 0.035 - t * 3.2, best * 0.12));
  float core = smoothstep(lane, lane - 6.0, best);
  vec3 ley = pal(12.0);
  vec3 river = mix(vec3(0.02, 0.12, 0.13), ley * 0.8, flow * 0.7 + 0.15);
  river += ley * pow(flow2, 4.0) * 1.6;
  river += ley * smoothstep(0.6, 0.0, abs(best - lane + 6.0) / 6.0) * 0.4;
  float pulse = 0.5 + 0.5 * sin(along * 0.02 - t * 4.0);
  river *= 0.8 + 0.25 * pulse * energy + u_fx.y * 1.5;
  col = mix(col, river, core);
  col += ley * 0.18 * exp(-max(best - lane, 0.0) * 0.045) * (1.0 - core) * (1.0 + u_fx.y * 3.0);
  // chevrons pointing downstream
  float chev = fract(along / 90.0 - t * 0.35);
  col += ley * core * smoothstep(0.06, 0.0, abs(chev - 0.5 - abs(best) * 0.004)) * 0.25;

  // air lane: faint dotted arc
  for (int i = 0; i < 2; i++) {
    float h;
    float d = sdSeg(b, u_air[i], u_air[i + 1], h);
    float dots = step(0.5, fract(h * 22.0 - t * 0.5 + float(i) * 0.5));
    col += vec3(0.75, 0.6, 1.0) * 0.12 * smoothstep(5.0, 0.0, d) * dots * (1.0 - platMask * 0.6);
  }

  // rift (spawn) — swirling magenta vortex
  vec2 rp = b - u_path[0];
  float rr = length(rp);
  float ang = atan(rp.y, rp.x);
  float swirl = sin(ang * 5.0 + rr * 0.08 - t * 4.0) * 0.5 + 0.5;
  float riftGlow = exp(-rr * 0.022) * (0.7 + 0.3 * swirl) * (1.0 + u_gate.y * 1.5);
  col += pal(11.0) * riftGlow * 0.9;
  col += vec3(1.0, 0.8, 0.95) * smoothstep(14.0, 0.0, rr) * 0.6;

  // gate — golden arch whose brightness follows the wards left
  vec2 gp = b - u_path[5];
  float gr = length(gp);
  float wards = u_gate.x;
  vec3 gateCol = mix(pal(10.0), pal(9.0), wards);
  float ring = smoothstep(5.0, 0.0, abs(gr - 52.0)) + smoothstep(3.0, 0.0, abs(gr - 36.0 - sin(t * 2.0) * 3.0)) * 0.6;
  col += gateCol * ring * (0.9 + 0.3 * sin(t * 3.0));
  col += gateCol * exp(-gr * 0.03) * 0.45;

  // selected rune range ring
  if (u_sel.w > 0.0) {
    float dr = length(b - u_sel.xy);
    float ringSel = smoothstep(3.0 * px + 2.0, 0.0, abs(dr - u_sel.z));
    float fill = step(dr, u_sel.z) * 0.06;
    col += vec3(0.55, 0.95, 0.9) * (ringSel * 0.8 + fill) * u_sel.w;
  }

  // danger flash on leaks
  col += pal(10.0) * u_fx.z * 0.25 * smoothstep(300.0, 1400.0, length(frag - u_res * 0.5) / max(u_fit.x, 0.2));
  o = vec4(col, 1.0);
}
`,$t=`${J}${Xt}
layout(location = 0) in vec2 a_corner;
layout(location = 1) in vec4 a0;
layout(location = 2) in vec4 a1;
out vec2 v_uv;
flat out vec4 v0;
flat out vec4 v1;
void main() {
  float pop = a1.y;
  // ease-out-back pop on spawn / merge
  float c = 1.70158;
  float e = 1.0 + (c + 1.0) * pow(pop - 1.0, 3.0) + c * pow(pop - 1.0, 2.0);
  float s = a0.z * 0.5 * mix(0.2, 1.0, clamp(e, 0.0, 1.3)) * 1.35 * 1.22;
  v_uv = a_corner * 1.35;
  v0 = a0;
  v1 = a1;
  gl_Position = toClip(a0.xy + a_corner * s);
}
`,en=`${J}${Jt}
uniform float u_time;
in vec2 v_uv;
flat in vec4 v0;
flat in vec4 v1;
out vec4 o;

float seg(vec2 p, vec2 a, vec2 b) {
  vec2 pa = p - a, ba = b - a;
  float h = clamp(dot(pa, ba) / dot(ba, ba), 0.0, 1.0);
  return length(pa - ba * h);
}
mat2 rot(float a) { float c = cos(a), s = sin(a); return mat2(c, -s, s, c); }

float glyph(int type, vec2 p, float t) {
  float w = 0.055;
  if (type == 0) { // rime: six-armed frost star
    float d = 1e9;
    for (int i = 0; i < 3; i++) {
      vec2 q = rot(float(i) * 1.0472) * p;
      d = min(d, seg(q, vec2(0.0, -0.42), vec2(0.0, 0.42)));
      q.y = abs(q.y);
      d = min(d, seg(q, vec2(0.0, 0.26), vec2(0.11, 0.36)));
      d = min(d, seg(q, vec2(0.0, 0.26), vec2(-0.11, 0.36)));
    }
    return d - w * 0.8;
  }
  if (type == 1) { // cinder: flame triangle with inner tongue
    vec2 q = p;
    q.x += sin(q.y * 9.0 + t * 7.0) * 0.025;
    float d = seg(q, vec2(-0.3, 0.3), vec2(0.0, -0.42));
    d = min(d, seg(q, vec2(0.3, 0.3), vec2(0.0, -0.42)));
    d = min(d, seg(q, vec2(-0.3, 0.3), vec2(0.3, 0.3)));
    d = min(d, seg(q, vec2(0.0, 0.18), vec2(0.0, -0.12)));
    return d - w;
  }
  if (type == 2) { // arc: zig-zag bolt
    float d = seg(p, vec2(0.12, -0.44), vec2(-0.16, 0.0));
    d = min(d, seg(p, vec2(-0.16, 0.0), vec2(0.16, 0.0)));
    d = min(d, seg(p, vec2(0.16, 0.0), vec2(-0.12, 0.44)));
    return d - w;
  }
  if (type == 3) { // basalt: square in square
    vec2 q = rot(0.7854) * p;
    float outer = abs(max(abs(q.x), abs(q.y)) - 0.34);
    float inner = max(abs(p.x), abs(p.y)) - 0.1;
    return min(outer - w * 0.8, inner);
  }
  if (type == 4) { // quill: twin chevrons
    vec2 q = vec2(abs(p.x), p.y);
    float d = seg(q, vec2(0.0, -0.38), vec2(0.3, -0.08));
    d = min(d, seg(q, vec2(0.0, -0.02), vec2(0.3, 0.28)));
    d = min(d, seg(p, vec2(0.0, -0.38), vec2(0.0, 0.42)));
    return d - w * 0.85;
  }
  if (type == 5) { // void: ring + core + orbit
    float r = length(p);
    float d = abs(r - 0.34) - w;
    d = min(d, r - 0.1);
    vec2 orb = vec2(cos(t * 2.0), sin(t * 2.0)) * 0.34;
    d = min(d, length(p - orb) - 0.07);
    return d;
  }
  if (type == 6) { // flare: eight rays round a sun
    float r = length(p);
    float a = atan(p.y, p.x);
    float ray = abs(fract(a / 6.2832 * 8.0 + t * 0.05) - 0.5) * 2.0;
    float d = max(r - 0.44, ray * r * 2.4 - 0.08);
    d = max(d, 0.2 - r);
    return min(d, abs(r - 0.15) - w * 0.9);
  }
  // blight: trefoil
  float d = 1e9;
  for (int i = 0; i < 3; i++) {
    vec2 c = rot(float(i) * 2.0944 + t * 0.3) * vec2(0.0, -0.2);
    d = min(d, abs(length(p - c) - 0.17) - w * 0.8);
  }
  return min(d, length(p) - 0.07);
}

void main() {
  int type = int(v0.w + 0.5);
  float tier = v1.x;
  float flags = v1.z;
  bool selected = mod(flags, 2.0) >= 1.0;
  bool hint = mod(floor(flags / 2.0), 2.0) >= 1.0;
  bool ghost = mod(floor(flags / 4.0), 2.0) >= 1.0;
  bool dim = mod(floor(flags / 8.0), 2.0) >= 1.0;
  bool reso = mod(floor(flags / 16.0), 2.0) >= 1.0;
  vec3 c = pal(v0.w);
  float t = u_time + v1.w * 10.0;
  vec2 p = v_uv;
  float r = length(p);
  float aa = fwidth(r) * 1.2;

  // plate: dark core disc with a coloured rim whose thickness grows with tier
  float disc = smoothstep(0.62 + aa, 0.62 - aa, r);
  float rimW = 0.02 + tier * 0.012;
  float rim = smoothstep(rimW + aa, rimW - aa, abs(r - 0.62));
  vec3 col = mix(vec3(0.03, 0.035, 0.08), c * 0.22, 0.6 + 0.4 * (1.0 - r)) * disc;
  col += c * rim * (1.1 + tier * 0.12);

  // glyph, slowly breathing
  float g = glyph(type, p * (1.0 - 0.03 * sin(t * 2.0)), t);
  float ga = fwidth(g);
  float core = smoothstep(ga, -ga, g);
  float glow = exp(-max(g, 0.0) * (30.0 - tier * 1.5)) * (0.45 + tier * 0.07);
  col += c * glow * disc * 1.4;
  col = mix(col, mix(c, vec3(1.0), 0.55), core);

  // tier pips orbiting outside the rim
  float pips = 0.0;
  for (int i = 0; i < 7; i++) {
    if (float(i) >= tier) break;
    float a = -1.5708 + (float(i) - (tier - 1.0) * 0.5) * 0.42;
    vec2 pp = vec2(cos(a), sin(a)) * 0.78;
    pips += smoothstep(0.075, 0.045, length(p - pp));
  }
  col += mix(c, vec3(1.0), 0.6) * pips * 1.3;

  // apex aura
  if (tier >= 6.0) col += c * smoothstep(0.08, 0.0, abs(r - 0.92 - 0.03 * sin(t * 3.0))) * 0.8;

  float alpha = max(disc, max(pips, smoothstep(0.1, 0.0, max(g, r - 1.3)) * glow));
  alpha = clamp(alpha + glow * 0.4, 0.0, 1.0);

  if (hint) {
    float hp = 0.5 + 0.5 * sin(u_time * 7.0);
    float hr = smoothstep(0.05, 0.0, abs(r - 0.74 - hp * 0.08));
    col += vec3(1.0) * hr * 0.9;
    alpha = max(alpha, hr);
  }
  if (selected) {
    float sr = smoothstep(0.04, 0.0, abs(r - 0.84));
    float dash = step(0.5, fract(atan(p.y, p.x) / 6.2832 * 16.0 + u_time * 0.4));
    col += vec3(0.55, 1.0, 0.9) * sr * dash * 1.5;
    alpha = max(alpha, sr * dash);
  }
  if (reso) col *= 1.0 + 0.35 * (0.5 + 0.5 * sin(u_time * 10.0));
  if (dim) { col *= 0.35; alpha *= 0.6; }
  if (ghost) alpha *= 0.85;
  // spawn flash
  col += vec3(1.0) * pow(1.0 - v1.y, 2.0) * 0.7 * disc;
  o = vec4(col * alpha, alpha);
}
`,tn=`${J}${Xt}
uniform float u_time;
layout(location = 0) in vec2 a_corner;
layout(location = 1) in vec4 a0;
layout(location = 2) in vec4 a1;
out vec2 v_uv;
flat out vec4 v0;
flat out vec4 v1;
void main() {
  v_uv = a_corner * 1.5;
  v0 = a0;
  v1 = a1;
  vec2 pos = a0.xy;
  float air = mod(a1.z, 2.0);
  pos.y += air * (sin(u_time * 3.0 + a1.w * 20.0) * 8.0 - 26.0);
  gl_Position = toClip(pos + a_corner * a0.z * 1.5);
}
`,nn=`${J}${Xt}
layout(location = 0) in vec2 a_corner;
layout(location = 1) in vec4 a0;
layout(location = 2) in vec4 a1;
out vec2 v_uv;
flat out vec4 v1;
void main() {
  v_uv = a_corner * 3.0;
  v1 = a1;
  gl_Position = toClip(a0.xy + a_corner * a0.z * 3.0 * vec2(1.0, 0.55));
}
`,rn=`${J}${Jt}
uniform float u_time;
in vec2 v_uv;
flat in vec4 v1;
out vec4 o;

void main() {
  float flags = v1.z;
  bool air = mod(flags, 2.0) >= 1.0;
  bool boss = mod(floor(flags / 2.0), 2.0) >= 1.0;
  bool slowed = mod(floor(flags / 4.0), 2.0) >= 1.0;
  bool burning = mod(floor(flags / 8.0), 2.0) >= 1.0;
  bool phased = mod(floor(flags / 16.0), 2.0) >= 1.0;
  float seed = v1.w;
  // round in quad space = a flat ellipse on the ground, because the quad itself is squashed
  float r = length(v_uv) / 3.0;
  float breathe = 0.86 + 0.14 * sin(u_time * 2.1 + seed * 24.0);
  float g = exp(-r * 3.4) * breathe;
  vec3 col = pal(11.0);
  if (slowed) col = mix(col, vec3(0.45, 0.78, 1.0), 0.75);
  if (burning) col = mix(col, pal(1.0), 0.7);
  if (boss) col = mix(col, vec3(0.75, 0.25, 1.0), 0.5);
  float amp = (boss ? 0.5 : 0.26) * (air ? 0.45 : 1.0) * (phased ? 0.35 : 1.0);
  o = vec4(col * g * amp, 0.0);
}
`,an=`${J}${Jt}
uniform float u_time;
in vec2 v_uv;
flat in vec4 v0;
flat in vec4 v1;
out vec4 o;

void main() {
  float kind = v0.w;
  float flags = v1.z;
  bool air = mod(flags, 2.0) >= 1.0;
  bool boss = mod(floor(flags / 2.0), 2.0) >= 1.0;
  bool slowed = mod(floor(flags / 4.0), 2.0) >= 1.0;
  bool burning = mod(floor(flags / 8.0), 2.0) >= 1.0;
  bool phased = mod(floor(flags / 16.0), 2.0) >= 1.0;
  bool guarded = mod(floor(flags / 32.0), 2.0) >= 1.0;
  bool marked = mod(floor(flags / 64.0), 2.0) >= 1.0;
  float seed = v1.w;
  float t = u_time;
  vec2 p = v_uv;

  // polygon sides per kind: shardling 4, flicker 3, husk 6, drifter 4, splitter 5, leech 3,
  // bulwark 8, phase 6, bosses 7.. The last arm is the boss fall-through: ENEMY_KINDS index 8 is
  // FIRST_BOSS_KIND_INDEX, so there are exactly 8 thresholds here (gl.test.ts pins that).
  float sides = kind < 0.5 ? 4.0 : kind < 1.5 ? 3.0 : kind < 2.5 ? 6.0 : kind < 3.5 ? 4.0 : kind < 4.5 ? 5.0 : kind < 5.5 ? 3.0 : kind < 6.5 ? 8.0 : kind < 7.5 ? 6.0 : 7.0;
  float spin = t * (boss ? 0.4 : 1.2) * (mod(seed * 7.0, 2.0) > 1.0 ? 1.0 : -1.0) + seed * 6.28;
  // the Drifter flies: squash it into a wide, flat crystal so air reads at a glance
  float squash = kind > 2.5 && kind < 3.5 ? 0.58 : 1.0;
  vec2 q = vec2(p.x, p.y / squash);
  float a = atan(q.y, q.x) - spin;
  float r = length(q);
  float seg = 6.2832 / sides;
  float local = mod(a, seg) - seg * 0.5;
  float polyR = cos(seg * 0.5) / cos(local);
  float rr = r / polyR;
  float spikes = boss ? 0.15 * pow(abs(cos(a * sides * 0.5)), 8.0) : 0.0;
  float edge = 1.0 + spikes;
  float aa = fwidth(rr) * 1.5;
  float body = smoothstep(edge + aa, edge - aa, rr);

  // fake facets: each wedge has a normal tilted outward, the light rotates
  float facet = floor(mod(a, 6.2832) / seg);
  float fa = (facet + 0.5) * seg + spin;
  vec3 n = normalize(vec3(cos(fa) * 0.7 * rr, sin(fa) * 0.7 * rr, 0.75));
  vec3 L = normalize(vec3(cos(t * 0.7) * 0.6, -0.6, 0.6));
  float diff = max(dot(n, L), 0.0);
  float spec = pow(max(dot(reflect(-L, n), vec3(0, 0, 1)), 0.0), 18.0);
  vec3 base = mix(pal(11.0), vec3(1.0, 0.6, 0.82), 0.25 * sin(kind + 1.0) + 0.25);
  if (kind > 7.5) base = mix(pal(11.0), vec3(0.75, 0.25, 1.0), 0.45);
  if (air) base = mix(base, vec3(0.7, 0.5, 1.0), 0.45);
  vec3 col = base * (0.35 + 1.1 * diff) + vec3(1.0, 0.9, 1.0) * spec * 0.7;
  // inner core glow + facet seams
  col += base * exp(-rr * 3.0) * 0.9;
  float seam = smoothstep(0.035, 0.0, abs(local) * r) * step(rr, 1.0);
  col += vec3(1.0, 0.8, 0.95) * seam * 0.35;
  col += vec3(1.0, 0.85, 1.0) * smoothstep(0.08, 0.0, abs(rr - edge + 0.05)) * 0.6;

  if (slowed) col = mix(col, vec3(0.45, 0.75, 1.0), 0.3);
  if (burning) col += pal(1.0) * (0.5 + 0.5 * sin(t * 18.0 + seed * 9.0)) * 0.5;
  if (marked) col += pal(5.0) * smoothstep(0.06, 0.0, abs(r - 1.2)) * 1.5;
  float alpha = body;
  if (guarded) {
    float sh = smoothstep(0.05, 0.0, abs(r - 1.3)) * 0.8;
    col += vec3(0.5, 0.7, 1.0) * sh;
    alpha = max(alpha, sh);
  }
  col = mix(col, vec3(1.0, 0.85, 0.95), clamp(v1.y, 0.0, 1.0) * 0.55);
  if (phased) alpha *= 0.3;

  // hp bar under the crystal
  float hp = v1.x;
  if (hp < 0.999) {
    vec2 bp = p - vec2(0.0, 1.3);
    float barW = boss ? 1.2 : 0.9;
    float inBar = step(abs(bp.x), barW) * step(abs(bp.y), 0.09);
    float fill = step((bp.x + barW) / (2.0 * barW), hp);
    vec3 bc = mix(vec3(0.15, 0.02, 0.06), mix(vec3(1.0, 0.3, 0.4), vec3(0.4, 1.0, 0.8), hp), fill);
    col = mix(col, bc, inBar);
    alpha = max(alpha, inBar * 0.95);
  }
  o = vec4(col * alpha, alpha);
}
`,on=`${J}${Xt}
layout(location = 0) in vec2 a_corner;
layout(location = 1) in vec4 a0;
layout(location = 2) in vec4 a1;
out vec2 v_uv;
flat out vec4 v1;
flat out float v_len;
void main() {
  vec2 a = a0.xy;
  vec2 b = a0.zw;
  vec2 d = b - a;
  float len = max(length(d), 1.0);
  vec2 dir = d / len;
  vec2 nrm = vec2(-dir.y, dir.x);
  float w = a1.x * 2.5;
  vec2 pos = mix(a, b, a_corner.x * 0.5 + 0.5) + dir * a_corner.x * w + nrm * a_corner.y * w;
  v_uv = vec2((a_corner.x * 0.5 + 0.5) * (len + 2.0 * w) - w, a_corner.y * w);
  v1 = a1;
  v_len = len;
  gl_Position = toClip(pos);
}
`,sn=`${J}${Jt}${Yt}
uniform float u_time;
in vec2 v_uv;
flat in vec4 v1;
flat in float v_len;
out vec4 o;
void main() {
  float w = v1.x;
  vec3 c = pal(v1.y);
  float life = v1.z;
  // links pack 10 + arc length at the segment start into style so the flow pattern is continuous
  float arc0 = v1.w >= 9.5 ? v1.w - 10.0 : 0.0;
  int style = v1.w >= 9.5 ? 4 : int(v1.w + 0.5);
  float x = v_uv.x;
  float y = v_uv.y;
  float a = 0.0;
  if (style == 0 || style == 3) {
    // a streak travelling from start to end while life goes 1 -> 0
    float head = (1.0 - life) * v_len;
    float tail = head - (style == 0 ? 90.0 : 60.0);
    float along = clamp((x - tail) / max(head - tail, 1.0), 0.0, 1.0) * step(x, head + w);
    float core = exp(-y * y / (w * w * 0.35));
    a = along * core * step(tail, x);
  } else if (style == 1) {
    float wob = 1.0 + 0.25 * sin(x * 0.15 - u_time * 40.0);
    a = exp(-y * y / (w * w * 0.25 * wob)) * smoothstep(0.0, 0.3, life) * 1.2;
    a += exp(-y * y / (w * w * 1.8)) * 0.35;
  } else if (style == 4) {
    // synergy link: thin steady thread with beads of light flowing along it; life = intensity
    float core = exp(-y * y / (w * w * 0.22));
    float halo = exp(-y * y / (w * w * 2.0)) * 0.25;
    // clip to the segment so neighbouring segments meet edge-to-edge (additive caps would double up)
    float clipX = step(0.0, x) * step(x, v_len);
    float flow = 0.35 + 0.65 * pow(0.5 + 0.5 * sin((x + arc0) * 0.07 - u_time * 7.0), 4.0);
    a = (core * flow + halo) * life * clipX;
  } else {
    float jag = (vnoise(vec2(x * 0.045, u_time * 30.0 + v1.y)) - 0.5) * w * 2.2 * sin(3.1416 * clamp(x / v_len, 0.0, 1.0));
    float d = abs(y - jag);
    a = (exp(-d * d / (w * w * 0.08)) + exp(-d * d / (w * w * 0.9)) * 0.4) * life;
  }
  vec3 col = mix(c, vec3(1.0), 0.45) * a * 1.6;
  o = vec4(col, 0.0); // additive
}
`,cn=`${J}${Xt}
layout(location = 0) in vec2 a_corner;
layout(location = 1) in vec4 a0;
layout(location = 2) in vec4 a1;
out vec2 v_uv;
flat out vec4 v0;
flat out vec4 v1;
void main() {
  v_uv = a_corner * 1.1;
  v0 = a0;
  v1 = a1;
  gl_Position = toClip(a0.xy + a_corner * a0.z * 1.1);
}
`,ln=`${J}${Jt}${Yt}
uniform float u_time;
in vec2 v_uv;
flat in vec4 v0;
flat in vec4 v1;
out vec4 o;
void main() {
  float life = v1.x;
  int style = int(v1.y + 0.5);
  vec3 c = pal(v0.w);
  float r = length(v_uv);
  float a = 0.0;
  float k = 1.0 - life;
  if (style == 0) {
    float n = fbm(v_uv * 3.0 + vec2(u_time * 0.8, v0.x * 0.01));
    a = smoothstep(1.0, 0.6, r) * (0.18 + 0.25 * n) * sin(3.1416 * life);
    a += smoothstep(0.04, 0.0, abs(r - 0.25 - k * 0.7)) * life * 0.6;
  } else if (style == 1 || style == 3) {
    float rad = 0.15 + k * 0.85;
    float w = style == 3 ? 0.06 : 0.04;
    a = smoothstep(w, 0.0, abs(r - rad)) * life * (style == 3 ? 1.4 : 0.7);
    a += smoothstep(rad, 0.0, r) * life * 0.12;
  } else if (style == 4) {
    // Entropy decay pool: a void-violet vortex with a blight-green ragged rim, fades in and out
    float fade = smoothstep(0.0, 0.18, life) * smoothstep(1.0, 0.92, life);
    float ang = atan(v_uv.y, v_uv.x);
    float n = fbm(vec2(ang * 1.6 + u_time * 1.3 + r * 3.0, r * 3.5 - u_time * 1.1) + v0.xy * 0.013);
    float disc = smoothstep(1.0, 0.55, r) * (0.09 + 0.3 * n);
    float rim = smoothstep(0.07, 0.0, abs(r - 0.9 - 0.05 * sin(ang * 7.0 + u_time * 4.0)));
    vec3 cc = mix(pal(5.0), c, smoothstep(0.15, 0.85, r));
    o = vec4(cc * (disc + rim * 0.9) * fade, 0.0);
    return;
  } else {
    a = exp(-r * r * 6.0) * life * 1.4 + smoothstep(0.05, 0.0, abs(r - k * 0.9)) * life;
  }
  o = vec4(mix(c, vec3(1.0), 0.15) * a, 0.0);
}
`,un=`${J}${Xt}
layout(location = 0) in vec2 a_corner;
layout(location = 1) in vec4 a0;
layout(location = 2) in vec4 a1;
out vec2 v_uv;
flat out vec4 v0;
flat out vec4 v1;
void main() {
  v_uv = a_corner;
  v0 = a0;
  v1 = a1;
  float s = a0.z * (0.4 + 0.6 * a0.w);
  gl_Position = toClip(a0.xy + a_corner * s);
}
`,dn=`${J}
in vec2 v_uv;
flat in vec4 v0;
flat in vec4 v1;
out vec4 o;
void main() {
  float r = length(v_uv);
  float a;
  if (v1.w > 0.5) {
    // crystal shard: a diamond
    a = smoothstep(1.0, 0.7, abs(v_uv.x) + abs(v_uv.y) * 1.8);
  } else {
    a = exp(-r * r * 4.0);
  }
  a *= v0.w;
  o = vec4(mix(v1.rgb, vec3(1.0), a * 0.35) * a * 1.4, 0.0);
}
`,fn=`${J}
uniform sampler2D u_src;
uniform vec2 u_texel;
uniform float u_threshold; // < 0: plain downsample
in vec2 v_uv;
out vec4 o;
vec3 prefilter(vec3 c) {
  if (u_threshold < 0.0) return c;
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - u_threshold + 0.25, 0.0, 0.5);
  soft = soft * soft / (4.0 * 0.25 + 1e-4);
  float contrib = max(soft, br - u_threshold) / max(br, 1e-4);
  return c * contrib;
}
void main() {
  vec2 h = u_texel * 0.5;
  vec3 s = texture(u_src, v_uv).rgb * 4.0;
  s += texture(u_src, v_uv - h).rgb;
  s += texture(u_src, v_uv + h).rgb;
  s += texture(u_src, v_uv + vec2(h.x, -h.y)).rgb;
  s += texture(u_src, v_uv - vec2(h.x, -h.y)).rgb;
  o = vec4(prefilter(s / 8.0), 1.0);
}
`,pn=`${J}
uniform sampler2D u_src;
uniform vec2 u_texel;
in vec2 v_uv;
out vec4 o;
void main() {
  vec2 h = u_texel * 0.5;
  vec3 s = texture(u_src, v_uv + vec2(-h.x * 2.0, 0.0)).rgb;
  s += texture(u_src, v_uv + vec2(-h.x, h.y)).rgb * 2.0;
  s += texture(u_src, v_uv + vec2(0.0, h.y * 2.0)).rgb;
  s += texture(u_src, v_uv + vec2(h.x, h.y)).rgb * 2.0;
  s += texture(u_src, v_uv + vec2(h.x * 2.0, 0.0)).rgb;
  s += texture(u_src, v_uv + vec2(h.x, -h.y)).rgb * 2.0;
  s += texture(u_src, v_uv + vec2(0.0, -h.y * 2.0)).rgb;
  s += texture(u_src, v_uv + vec2(-h.x, -h.y)).rgb * 2.0;
  o = vec4(s / 12.0, 1.0);
}
`,mn=`${J}
uniform sampler2D u_scene;
uniform sampler2D u_bloom;
uniform vec2 u_res;
uniform vec4 u_shock[4];   // x, y (uv, y up), age s, strength
uniform vec4 u_post;       // bloom strength, aberration, desaturate, red vignette
uniform float u_useBloom;
uniform float u_time;
in vec2 v_uv;
out vec4 o;
vec3 aces(vec3 x) {
  return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}
void main() {
  vec2 uv = v_uv;
  float aspect = u_res.x / u_res.y;
  // shockwave distortion
  for (int i = 0; i < 4; i++) {
    vec4 s = u_shock[i];
    if (s.w <= 0.0) continue;
    vec2 d = uv - s.xy;
    d.x *= aspect;
    float dist = length(d);
    float radius = s.z * 0.9;
    float w = 0.06;
    float k = smoothstep(w, 0.0, abs(dist - radius)) * s.w * max(0.0, 1.0 - s.z * 1.4);
    uv -= normalize(d + 1e-5) * vec2(1.0 / aspect, 1.0) * k * 0.012;
  }
  vec2 dc = uv - 0.5;
  float ab = u_post.y * 0.006 + 0.0008;
  vec3 col;
  col.r = texture(u_scene, uv + dc * ab).r;
  col.g = texture(u_scene, uv).g;
  col.b = texture(u_scene, uv - dc * ab).b;
  if (u_useBloom > 0.5) col += texture(u_bloom, uv).rgb * u_post.x;
  col = aces(col * 1.05);
  // grade: cool shadows, warm-magenta highlights
  float lum = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(col, col * vec3(0.92, 1.0, 1.08), (1.0 - lum) * 0.3);
  col = mix(col, vec3(lum), u_post.z);
  float v = smoothstep(1.15, 0.35, length(dc * vec2(aspect, 1.0) * 1.25));
  col *= mix(0.55, 1.0, v);
  col += vec3(0.9, 0.08, 0.15) * u_post.w * (1.0 - v) * 0.8;
  // tiny dither to kill banding
  col += (fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233)) + u_time) * 43758.5453) - 0.5) / 255.0;
  o = vec4(col, 1.0);
}
`,hn=8,gn=8,_n=8,vn=8,yn=27,bn=256,xn=256,Sn=128,Cn=1400,wn=8,Tn=9,En=10,Dn=11,On=[[.56,.85,1],[1,.48,.24],[.71,.55,1],[.88,.65,.37],[.49,1,.69],[.48,.43,1],[1,.89,.42],[.71,1,.29],[1,1,1],[1,.83,.42],[1,.25,.3],[1,.31,.55],[.37,.9,.77]],kn=h.indexOf(`beam`),An=h.indexOf(`chain`),jn=h.indexOf(`bolt`),Mn=h.indexOf(`shard`),Nn=h.indexOf(`burst`),Pn=h.indexOf(`field`),Fn=[`u_res`,`u_fit`,`u_time`,`u_path`,`u_air`,`u_grid`,`u_rowgap`,`u_sel`,`u_fx`,`u_gate`,`u_hover`],In=[`u_res`,`u_fit`,`u_time`],Ln=[`u_src`,`u_texel`,`u_threshold`],Rn=[`u_src`,`u_texel`],zn=[`u_scene`,`u_bloom`,`u_res`,`u_shock`,`u_post`,`u_useBloom`,`u_time`];function Bn(e,t){return{data:new Float32Array(e*t),life:new Float32Array(e),ttl:new Float32Array(e),count:0,cap:e,floats:t}}function Vn(e,t){let n=e.count;if(n>=e.cap){let t=0;for(let n=1;n<e.cap;n++)e.life[n]<e.life[t]&&(t=n);n=t}else e.count++;return e.life[n]=t,e.ttl[n]=t,n*e.floats}function Hn(e,t,n){let r=0;for(;r<e.count;){if(e.life[r]-=t,e.life[r]<=0){let t=--e.count;r!==t&&(e.life[r]=e.life[t],e.ttl[r]=e.ttl[t],e.data.copyWithin(r*e.floats,t*e.floats,t*e.floats+e.floats));continue}e.data[r*e.floats+n]=e.life[r]/e.ttl[r],r++}}var Un=1,Wn=()=>(Un^=Un<<13,Un^=Un>>>17,Un^=Un<<5,(Un>>>0)%1e5/1e5);function Gn(e,t={}){let n=Ht(e);if(!n)return null;let r=1,i=1,a=1,s=`high`,l=!1,d=null,f=null,p=null,m=null,h=null,_=null,v=null,y=null,b=null,x=null,S=[],C=[],w=null,T=null,E=[],D=null,O=[],k=new Float32Array(yn*hn),A=new Float32Array(bn*gn),j=Bn(xn,_n),M=Bn(Sn,vn),N=new Float32Array(R.length*12*_n),P=new Float32Array(R.length),F=new Int32Array(o.length),I=new Map(o.map((e,t)=>[e,t])),ee=Gt(Cn),te=new Float32Array(K),ne=new Float32Array(ze),re=new Float32Array(16),ie=new Float32Array(4),ae=0,L=0,oe=0,se=0,ce=0,le=0,ue=0,de=0,fe=0,z=0,pe=0,me=0,he=0,ge=[null,null,null,null],_e=null,ve={scale:1,offsetX:0,offsetY:0},B=new Int16Array(8),V=new Int16Array(8),ye=new Uint8Array(8),be=new Uint8Array(8),xe=new Float32Array(8);function Se(e,t){let r=n.createTexture();n.bindTexture(n.TEXTURE_2D,r),l?n.texImage2D(n.TEXTURE_2D,0,n.RGBA16F,e,t,0,n.RGBA,n.HALF_FLOAT,null):n.texImage2D(n.TEXTURE_2D,0,n.RGBA8,e,t,0,n.RGBA,n.UNSIGNED_BYTE,null),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE);let i=n.createFramebuffer();return n.bindFramebuffer(n.FRAMEBUFFER,i),n.framebufferTexture2D(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,r,0),n.bindFramebuffer(n.FRAMEBUFFER,null),{fb:i,tex:r,w:e,h:t}}function Ce(e){e&&!n.isContextLost()&&(n.deleteFramebuffer(e.fb),n.deleteTexture(e.tex))}function we(){Ce(D);for(let e of O)Ce(e);O=[];let t=Math.max(1,e.width),n=Math.max(1,e.height);D=Se(t,n);let r=s===`high`?5:s===`medium`?4:0,i=t,a=n;for(let e=0;e<r;e++)i=Math.max(1,i>>1),a=Math.max(1,a>>1),O.push(Se(i,a))}function Te(e,t){let r=n.createVertexArray(),i=n.createBuffer();return n.bindVertexArray(r),n.bindBuffer(n.ARRAY_BUFFER,T),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,2,n.FLOAT,!1,0,0),n.bindBuffer(n.ARRAY_BUFFER,i),n.bufferData(n.ARRAY_BUFFER,e*t*4,n.DYNAMIC_DRAW),n.enableVertexAttribArray(1),n.vertexAttribPointer(1,4,n.FLOAT,!1,e*4,0),n.vertexAttribDivisor(1,1),n.enableVertexAttribArray(2),n.vertexAttribPointer(2,4,n.FLOAT,!1,e*4,16),n.vertexAttribDivisor(2,1),n.bindVertexArray(null),E.push({vao:r,buf:i}),E.length-1}function Ee(){d=f=p=m=h=_=v=y=b=x=null,l=!!n.getExtension(`EXT_color_buffer_float`);let e=(e,t,r,i)=>{let a=Wt(n,e,t,r);C.push(a.program),S.push(()=>{let e=a.poll();return e&&i(e),e!==null})};C=[],S=[],e(Zt,Qt,Fn,e=>d=e),e($t,en,In,e=>f=e),e(tn,an,In,e=>p=e),e(nn,rn,In,e=>m=e),e(on,sn,In,e=>h=e),e(cn,ln,In,e=>_=e),e(un,dn,In,e=>v=e),e(Zt,fn,Ln,e=>y=e),e(Zt,pn,Rn,e=>b=e),e(Zt,mn,zn,e=>x=e),w=n.createVertexArray(),T=n.createBuffer(),n.bindBuffer(n.ARRAY_BUFFER,T),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),n.STATIC_DRAW),E.length=0,Te(hn,yn),Te(gn,bn),Te(_n,xn),Te(vn,Sn),Te(8,Cn),we()}let De=!1;function Oe(){if(De)return!0;let e=!0;for(let t of S)t()||(e=!1);return e&&(De=!0),e}function ke(){if(!n.isContextLost()){for(let e of C)n.deleteProgram(e);for(let e of E)n.deleteVertexArray(e.vao),n.deleteBuffer(e.buf);n.deleteVertexArray(w),n.deleteBuffer(T),Ce(D);for(let e of O)Ce(e);D=null,O=[],C=[],De=!1}}let Ae=e=>{e.preventDefault(),De=!1,S=[]},je=()=>Ee();e.addEventListener(`webglcontextlost`,Ae),e.addEventListener(`webglcontextrestored`,je),Ee();function H(e,t,n,r,i,a){let o=Vn(M,i),s=M.data;s[o]=e,s[o+1]=t,s[o+2]=n,s[o+3]=r,s[o+4]=1,s[o+5]=a,s[o+6]=0,s[o+7]=0}function Me(e,t,n,r,i,a,o,s){let c=Vn(j,o),l=j.data;l[c]=e,l[c+1]=t,l[c+2]=n,l[c+3]=r,l[c+4]=i,l[c+5]=a,l[c+6]=1,l[c+7]=s}function U(e,t,n,r,i,a=0,o=1){Kt(ee,e,t,n,r,On[i],Wn,a,o)}function Ne(e,t,n){let r=ae;ae=(ae+1)%4,re[r*4]=e,re[r*4+1]=t,re[r*4+3]=n,ie[r]=0}function Pe(e,t){for(let e=0;e<t.length;e++){let n=t.at(e);switch(n.kind){case u.Summon:{let e=W(n.a),t=G(n.a);H(e,t,140,n.b,.4,1),U(e,t,16,520,n.b);break}case u.Merge:{let e=W(n.b),t=G(n.b);for(let e=0;e<8;e++)if(!(xe[e]>0)){B[e]=n.a,V[e]=n.b,ye[e]=n.c,be[e]=Math.max(1,n.d-1),xe[e]=.16;break}H(e,t,230,n.c,.45,1),H(e,t,120,n.c,.3,2),U(e,t,20+n.d*5,700,n.c),U(e,t,6,400,wn),n.d>=4&&Ne(e,t,.3+n.d*.06),L=Math.min(1,L+.12+n.d*.03);break}case u.Overload:H(n.x,n.y,1400,wn,1,3),H(n.x,n.y,900,Tn,.8,3),U(n.x,n.y,120,1500,Tn),Ne(n.x,n.y,1.6),le=1,L=1;break;case u.Sell:{let e=W(n.a),t=G(n.a);U(e,t,14,300,n.b),H(e,t,120,Tn,.35,2);break}case u.Move:H(W(n.b),G(n.b),110,n.c,.3,1);break;case u.Fire:{let e=W(n.a),t=G(n.a),r=n.b,i=n.d,a=1+n.c*.18;if(i===kn)Me(e,t,n.x,n.y,9*a,r,.13,1);else if(i===An)me=e,he=t;else if(i===jn)Me(e,t,n.x,n.y,13*a,r,.2,0),U(n.x,n.y,6,260,r,1,.8);else if(i===Mn)Me(e-14,t,n.x,n.y,6*a,r,.14,3),Me(e+14,t,n.x+10,n.y-6,6*a,r,.17,3);else if(i===Nn){Me(e,t,n.x,n.y,11*a,r,.16,0);let i=o[r];H(n.x,n.y,i?g[i].area:160,r,.4,2),U(n.x,n.y,10,380,r)}else if(i===Pn){let e=o[r];H(n.x,n.y,e?g[e].area:150,r,.55,0)}break}case u.Chain:Me(me,he,n.x,n.y,9,n.b,.16,2),me=n.x,he=n.y;break;case u.Kill:{let e=n.d===1;U(n.x,n.y,e?90:14,e?1100:520,Dn,1,e?1.8:1),U(n.x,n.y,e?30:5,300,wn),H(n.x,n.y,e?520:90,Dn,e?.8:.3,e?3:2),e&&(Ne(n.x,n.y,1.4),L=1,le=.8);break}case u.Leak:ue=1,L=Math.min(1,L+.35),U(K[K.length-2],K[K.length-1],26,600,En);break;case u.WaveStart:fe=1,H(K[0],K[1],300,Dn,.8,3),n.c===1&&(L=Math.min(1,L+.5));break;case u.WaveClear:de=1;break;case u.BossSpawn:L=1,Ne(n.x,n.y,1.2),le=.6;break;case u.BossSpecial:n.c===0?(H(n.x,n.y,130,Dn,.6,1),U(n.x,n.y,16,300,Dn,1)):H(n.x,n.y,260,n.c===1?2:Dn,.6,3),L=Math.min(1,L+.25);break;case u.Ability:{let e=K[K.length-2],t=K[K.length-1];n.a===0?(H(e,t,2200,Tn,1.1,3),Ne(e,t,1.2),L=Math.min(1,L+.4)):(H(600,900,900,2,.9,3),U(600,900,60,900,2));break}case u.SynergyOn:n.a>=0&&n.a<P.length&&(P[n.a]=1);break;case u.Pool:H(n.x,n.y,n.b,7,n.c,4),H(n.x,n.y,n.b*.8,5,.35,2),U(n.x,n.y,10,260,7);break;case u.Defeat:L=1,le=1}}}function Fe(e,t,n){if(e.synergyMask===0)return 0;F.fill(-1);for(let t=0;t<15;t++){let n=e.cells[t];if(n.type===null)continue;let r=I.get(n.type),i=F[r];(i<0||e.cells[i].tier<n.tier)&&(F[r]=t)}let r=n>=0?e.cells[n]:void 0;r&&r.type!==null&&(F[I.get(r.type)]=n);let i=0;for(let n=0;n<R.length;n++){if(P[n]>0&&(P[n]=Math.max(0,P[n]-t*.9)),!(e.synergyMask&1<<n))continue;let r=R[n],a=I.get(r.pair[0]),o=I.get(r.pair[1]),s=F[a],c=F[o];if(s<0||c<0)continue;let l=W(s),u=G(s),d=W(c),f=G(c),p=d-l,m=f-u,h=Math.hypot(p,m)||1,g=(n&1?-1:1)*Math.max(76.5,h*.22),_=(l+d)*.5+-m/h*g,v=(u+f)*.5+p/h*g,y=e.synergyLevel[n],b=P[n],x=b*b*(3-2*b),S=.06+.03*y+x*1.25,C=l,w=u,T=0;for(let e=1;e<=12;e++){let t=e/12,n=1-t,r=n*n*l+2*n*t*_+t*t*d,s=n*n*u+2*n*t*v+t*t*f,c=i*_n;N[c]=C,N[c+1]=w,N[c+2]=r,N[c+3]=s,N[c+4]=2+y*.5+x*4,N[c+5]=e<=6?a:o,N[c+6]=S,N[c+7]=10+T,T+=Math.hypot(r-C,s-w),i++,C=r,w=s}}return i}function Ie(e,t,n,r,i,a,o,s){if(e>=yn)return e;let c=e*hn;return k[c]=t,k[c+1]=n,k[c+2]=170*(.84+i*.02),k[c+3]=r,k[c+4]=i,k[c+5]=a,k[c+6]=o,k[c+7]=s,e+1}function Le(e,t){let n=0,r=e.time<e.abilities.resonanceUntil?16:0;for(let i=0;i<15;i++){let a=e.cells[i];if(a.type===null)continue;let s=o.indexOf(a.type),c=Math.min(1,Math.max(0,(e.time-a.bornAt)/.32)),l=r;t.selected===i&&(l|=1),t.hintMask&1<<i&&(l|=2),(t.drag&&t.drag.from===i||e.time<a.disabledUntil)&&(l|=8),n=Ie(n,W(i),G(i),s,a.tier,e.phase===`idle`?1:c,l,a.id%97/97)}for(let e=0;e<8;e++){if(xe[e]<=0)continue;let t=1-xe[e]/.16,r=t*t,i=W(B[e])+(W(V[e])-W(B[e]))*r,a=G(B[e])+(G(V[e])-G(B[e]))*r;n=Ie(n,i,a,ye[e],be[e],1,0,.5)}if(t.drag){let r=e.cells[t.drag.from];r&&r.type!==null&&(n=Ie(n,t.drag.x,t.drag.y,o.indexOf(r.type),r.tier,1,5,r.id%97/97))}return n}function Re(e){let t=e.enemies,n=e.time,r=0;for(let e=0;e<t.count&&r<bn;e++){let i=r*gn,a=t.flags[e],o=(a&c.Boss)!==0;A[i]=t.x[e],A[i+1]=t.y[e],A[i+2]=o?92:t.kind[e]===2||t.kind[e]===6?52:t.kind[e]===1?36:44,A[i+3]=t.kind[e],A[i+4]=t.maxHp[e]>0?Math.max(0,t.hp[e]/t.maxHp[e]):1,A[i+5]=Math.max(0,1-(n-t.hitAt[e])/.09);let s=0;(a&c.Air)!==0&&(s|=1),o&&(s|=2),n<t.slowUntil[e]&&(s|=4),n<t.burnUntil[e]&&(s|=8),(a&c.Untargetable)!==0&&(s|=16),(a&c.Guarded)!==0&&(s|=32),(n<t.markUntil[e]||n<t.decayUntil[e])&&(s|=64),A[i+6]=s,A[i+7]=t.id[e]%101/101,r++}return r}function q(t,r,i,a){n.useProgram(t.program),n.uniform2f(t.uniforms.u_res,e.width,e.height),n.uniform3f(t.uniforms.u_fit,a,r,i),n.uniform1f(t.uniforms.u_time,pe)}function Be(e,t,r,i){if(r<=0)return;let a=E[e];n.bindVertexArray(a.vao),n.bindBuffer(n.ARRAY_BUFFER,a.buf),n.bufferSubData(n.ARRAY_BUFFER,0,t,0,r*i),n.drawArraysInstanced(n.TRIANGLE_STRIP,0,4,r)}function Ve(e,t){t<=0||(n.bindVertexArray(E[e].vao),n.drawArraysInstanced(n.TRIANGLE_STRIP,0,4,t))}function He(){n.bindVertexArray(w),n.drawArrays(n.TRIANGLES,0,3)}return{get ready(){return De},resize(t,o,s){r=Math.max(1,t),i=Math.max(1,o),a=s;let c=Math.max(1,Math.round(r*a)),l=Math.max(1,Math.round(i*a));(e.width!==c||e.height!==l)&&(e.width=c,e.height=l,n.isContextLost()||we())},setQuality(e){e!==s&&(s=e,n.isContextLost()||we())},flashLink(e){e>=0&&e<P.length&&(P[e]=Math.max(P[e],1))},reset(){j.count=0,M.count=0,P.fill(0),ee.count=0,xe.fill(0),L=0,ue=0,z=0},render(t,i,a,o){if(n.isContextLost())return;let u=Math.min(.1,Math.max(0,o));if(pe+=u,!Oe()||!d||!f||!p||!m||!h||!_||!v||!y||!b||!x||!D){n.bindFramebuffer(n.FRAMEBUFFER,null),n.clearColor(.024,.031,.08,1),n.clear(n.COLOR_BUFFER_BIT);return}Pe(t,i),L=Math.max(0,L-u*1.6),le=Math.max(0,le-u*1.8),ue=Math.max(0,ue-u*2.2),de=Math.max(0,de-u*.9),fe=Math.max(0,fe-u*.7);let S=t.phase===`defeat`?.65:0;z+=(S-z)*Math.min(1,u*2);for(let e=0;e<8;e++)xe[e]>0&&(xe[e]=xe[e]-u);for(let e=0;e<4;e++)ie[e]=ie[e]+u;if(Hn(j,u,6),Hn(M,u,4),oe+=u,oe>.09){oe=0;let e=t.pools;for(let n=0;n<e.until.length;n++){if(e.until[n]<=t.time)continue;let r=Wn()*Math.PI*2,i=Wn()*95;U(e.x[n]+Math.cos(r)*i,e.y[n]+Math.sin(r)*i,1,70,Wn()<.5?5:7,0,.8)}}if(se+=u,se>(s===`low`?.14:.07)&&t.phase===`running`){se=0;let e=t.enemies,n=Math.min(e.count,s===`low`?6:14);for(let r=0;r<n;r++){ce=ce+1>=e.count?0:ce+1;let n=ce,r=t.time,i=r<e.burnUntil[n]?1:r<e.slowUntil[n]?0:r<e.decayUntil[n]?7:(e.flags[n]&c.Boss)===0?11:10,a=Wn()*Math.PI*2,o=20+Wn()*14;U(e.x[n]+Math.cos(a)*o,e.y[n]+Math.sin(a)*o,1,30,i,0,1.3)}}let C=qt(ee,u,3.2,0),w=L*L*14;ve.scale=a.fit.scale,ve.offsetX=a.fit.offsetX+(Wn()*2-1)*w,ve.offsetY=a.fit.offsetY+(Wn()*2-1)*w;let T=e.width/r,E=ve.scale*T,P=ve.offsetX*T,F=ve.offsetY*T,I=e.width,ae=e.height;n.bindFramebuffer(n.FRAMEBUFFER,D.fb),n.viewport(0,0,I,ae),n.disable(n.BLEND),n.useProgram(d.program);let R=d.uniforms;n.uniform2f(R.u_res,I,ae),n.uniform3f(R.u_fit,E,P,F),n.uniform1f(R.u_time,pe),n.uniform2fv(R.u_path,te),n.uniform2fv(R.u_air,ne),n.uniform4f(R.u_grid,331,400,170,14),n.uniform1f(R.u_rowgap,64);let me=a.selected>=0?t.cells[a.selected]:void 0;if(me&&me.type!==null){let e=g[me.type];n.uniform4f(R.u_sel,W(a.selected),G(a.selected),e.range*1.07**(me.tier-1),1)}else n.uniform4f(R.u_sel,0,0,0,0);let he=+(t.time<t.abilities.resonanceUntil);n.uniform4f(R.u_fx,t.waveActive?.4+t.waveProgress*.6:.25,de,ue,he),n.uniform2f(R.u_gate,t.wardsMax>0?t.wards/t.wardsMax:1,fe),n.uniform1f(R.u_hover,a.hover),He(),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE),q(_,P,F,E),Be(3,M.data,M.count,vn);let B=Fe(t,u,a.selected);B>0&&(q(h,P,F,E),Be(2,N,B,_n));let V=Re(t);s!==`low`&&V>0&&(q(m,P,F,E),Be(1,A,V,gn)),n.blendFunc(n.ONE,n.ONE_MINUS_SRC_ALPHA),q(p,P,F,E),s!==`low`&&V>0?Ve(1,V):Be(1,A,V,gn),q(f,P,F,E),Be(0,k,Le(t,a),hn),n.blendFunc(n.ONE,n.ONE),q(h,P,F,E),Be(2,j.data,j.count,_n),C>0&&(q(v,P,F,E),Be(4,ee.gpu,C,8)),n.disable(n.BLEND);let ye=O.length>0;if(ye){n.useProgram(y.program),n.uniform1i(y.uniforms.u_src,0),n.activeTexture(n.TEXTURE0);let e=D;for(let t=0;t<O.length;t++){let r=O[t];n.bindFramebuffer(n.FRAMEBUFFER,r.fb),n.viewport(0,0,r.w,r.h),n.bindTexture(n.TEXTURE_2D,e.tex),n.uniform2f(y.uniforms.u_texel,1/e.w,1/e.h),n.uniform1f(y.uniforms.u_threshold,t===0?l?.85:.6:-1),He(),e=r}n.useProgram(b.program),n.uniform1i(b.uniforms.u_src,0),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE);for(let e=O.length-1;e>0;e--){let t=O[e],r=O[e-1];n.bindFramebuffer(n.FRAMEBUFFER,r.fb),n.viewport(0,0,r.w,r.h),n.bindTexture(n.TEXTURE_2D,t.tex),n.uniform2f(b.uniforms.u_texel,1/t.w,1/t.h),He()}n.disable(n.BLEND)}if(n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,I,ae),n.useProgram(x.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,D.tex),n.uniform1i(x.uniforms.u_scene,0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,ye?O[0].tex:D.tex),n.uniform1i(x.uniforms.u_bloom,1),n.activeTexture(n.TEXTURE0),n.uniform2f(x.uniforms.u_res,I,ae),_e!==x.program){_e=x.program;for(let e=0;e<4;e++)ge[e]=n.getUniformLocation(x.program,`u_shock[${e}]`)}for(let e=0;e<4;e++){let t=re[e*4],r=re[e*4+1],i=re[e*4+3],a=ie[e];a>.9&&(re[e*4+3]=0);let o=t*E+P,s=r*E+F;n.uniform4f(ge[e],o/I,1-s/ae,a,a>.9?0:i)}n.uniform4f(x.uniforms.u_post,s===`high`?.7:.6,le,z,ue),n.uniform1f(x.uniforms.u_useBloom,+!!ye),n.uniform1f(x.uniforms.u_time,pe%100),He(),n.bindVertexArray(null)},dispose(){e.removeEventListener(`webglcontextlost`,Ae),e.removeEventListener(`webglcontextrestored`,je),ke()}}}var Kn=`fosames:rune-bastion:`;function qn(e,t){try{let n=globalThis.localStorage?.getItem(Kn+e);return n==null?t:JSON.parse(n)}catch{return t}}function Jn(e){try{globalThis.localStorage?.removeItem(Kn+e)}catch{}}function Y(e,t){try{globalThis.localStorage?.setItem(Kn+e,JSON.stringify(t))}catch{}}var Yn={en:{title:`Rune Bastion`,tagline:`Summon runes. Merge them. Hold the leyline.`,siege:`Siege`,siegeSub:`Endless — how long can the Bastion stand?`,daily:`Daily Siege`,dailySub:`Same seed for everyone today`,dailyDone:`Held today`,dailyTwist:`Today's twist`,dailyDeck:`Deck of the day`,freeSummons:`+3 Summons`,freeSummonsHint:`free · short ad`,mod:{swift:`Swift`,armored:`Armored`,frugal:`Frugal`,brittle:`Brittle`,bountiful:`Bountiful`,unanchored:`Unanchored`,relentless:`Relentless`,elite:`Elite`},modDesc:{swift:`Crystals move 15% faster`,armored:`Every crystal carries +6 armour`,frugal:`Essence flows 20% slower`,brittle:`Only 10 Wards instead of 20`,bountiful:`+25% Essence from every kill`,unanchored:`No Anchor Glyph this siege`,relentless:`A wave every 24 s instead of 30`,elite:`A boss every 5 waves`},deck:`Deck`,codex:`Codex`,leaderboard:`Leaderboard`,lbToday:`Daily`,lbWeek:`This week`,lbAll:`All-time`,settings:`Settings`,bestWave:`Best wave`,shards:`Shards`,streak:`day streak`,again:`Siege again`,menu:`Menu`,resume:`Resume`,quit:`Leave siege`,paused:`Paused`,wave:`Wave`,nextWave:`Next wave`,wards:`Wards`,essence:`Essence`,score:`Score`,summon:`Summon`,hasten:`Hasten`,pulse:`Ward Pulse`,resonance:`Resonance`,unbind:`Unbind`,boss:`Boss`,full:`Board full`,needEssence:`Not enough Essence`,damageBy:`Damage by rune`,iapTitle:`Rune pack`,iapSoon:`coming soon`,resumeRun:`Siege in progress — resume?`,defeatTitle:`The gate has fallen`,victoryTitle:`The leyline holds`,wavesHeld:`Waves held`,kills:`Crystals shattered`,bestTier:`Best rune`,newBest:`New record!`,earned:`Shards earned`,rank:`Rank`,restore:`Restore 5 Wards`,restoreHint:`watch a short ad`,synergyOn:`Synergy:`,synergies:`Synergies`,yourName:`Your name`,online:`online`,offline:`offline · this device`,empty:`No sieges recorded yet — be the first!`,noWebgl:`WebGL2 is not available — graphics are disabled.`,music:`Music`,sfx:`Sound effects`,vibration:`Vibration`,quality:`Graphics`,language:`Language`,qualityAuto:`Auto`,qualityHigh:`High`,qualityLow:`Low`,replayTips:`Replay tips`,close:`Close`,back:`Back`,deckHint:`Pick 5 rune families. Tap ⚓ to choose the Anchor — it keeps its family when merged.`,anchor:`Anchor`,unlock:`Unlock`,maxed:`Max`,level:`Lv`,bastion:`Bastion`,hints:{summon:`Tap SUMMON to call a rune onto the bastion`,summonMore:`Summon one more rune`,merge:`Drag a rune onto its twin (same glyph, same pips) to merge`,defend:`Runes fire on their own — keep crystals away from the gate`,hasten:`HASTEN calls the next wave early for bonus Essence`},rune:{rime:`Rime`,cinder:`Cinder`,arc:`Arc`,basalt:`Basalt`,quill:`Quill`,void:`Void`,flare:`Flare`,blight:`Blight`},runeDesc:{rime:`Frost field, slows everything`,cinder:`Burning splash`,arc:`Chain lightning, hits flyers`,basalt:`Heavy bolt, cracks armour`,quill:`Fast twin needles`,void:`Gravity well, drags back`,flare:`Long beam, pierces armour`,blight:`Decay: targets take more damage`},tier:[`Mote`,`Shard`,`Sigil`,`Crest`,`Pillar`,`Monolith`,`Apex`],synergy:{hailstorm:`Hailstorm`,thermalShock:`Thermal Shock`,collapse:`Collapse`,shrapnel:`Shrapnel`,overcharge:`Overcharge`,sunrot:`Sunrot`,entropy:`Entropy`,anchorline:`Anchorline`},bastionKey:{regen:`Flow: +0.5 Essence/s`,startEssence:`Reserve: +30 start Essence`,wards:`Bulwarks: +2 Wards`,refund:`Salvage: +10% Unbind refund`},ach:{firstSigil:`First Sigil`,crestBearer:`Crest Bearer`,monolith:`Monolith Raised`,apex:`Apex Rune`,overload:`Overload!`,wardenTen:`Warden of Ten`,thirtyStrong:`Thirty Strong`,flawlessTen:`Flawless Ten`,synergist:`Synergist`},bosses:[`Glacian`,`Cindermaw`,`Arcwright`,`Basalt Titan`,`Null Choir`],pause:`Pause`},ru:{title:`Rune Bastion`,tagline:`Призывай руны. Сливай их. Удержи лейлинию.`,siege:`Осада`,siegeSub:`Бесконечно — сколько выстоит бастион?`,daily:`Осада дня`,dailySub:`Один сид для всех сегодня`,dailyDone:`Сегодня пройдена`,dailyTwist:`Поворот дня`,dailyDeck:`Колода дня`,freeSummons:`Призывы +3`,freeSummonsHint:`бесплатно · реклама`,mod:{swift:`Стремительность`,armored:`Броня`,frugal:`Скупость`,brittle:`Хрупкость`,bountiful:`Щедрость`,unanchored:`Без якоря`,relentless:`Неумолимость`,elite:`Элита`},modDesc:{swift:`Кристаллы быстрее на 15%`,armored:`Броня каждого кристалла +6`,frugal:`Эссенция копится на 20% медленнее`,brittle:`Обереги: 10 вместо 20`,bountiful:`+25% эссенции за каждое убийство`,unanchored:`В этой осаде нет якорной руны`,relentless:`Волна каждые 24 с вместо 30`,elite:`Босс на каждой 5-й волне`},deck:`Колода`,codex:`Кодекс`,leaderboard:`Рекорды`,lbToday:`Осада дня`,lbWeek:`Неделя`,lbAll:`Всё время`,settings:`Настройки`,bestWave:`Лучшая волна`,shards:`Осколки`,streak:`дн. подряд`,again:`Новая осада`,menu:`Меню`,resume:`Продолжить`,quit:`Покинуть осаду`,paused:`Пауза`,wave:`Волна`,nextWave:`Следующая`,wards:`Обереги`,essence:`Эссенция`,score:`Очки`,summon:`Призыв`,hasten:`Ускорить`,pulse:`Импульс`,resonance:`Резонанс`,unbind:`Развеять`,boss:`Босс`,full:`Поле занято`,needEssence:`Мало эссенции`,damageBy:`Урон по рунам`,iapTitle:`Набор рун`,iapSoon:`скоро`,resumeRun:`Осада не закончена — продолжить?`,defeatTitle:`Врата пали`,victoryTitle:`Лейлиния выстояла`,wavesHeld:`Волн удержано`,kills:`Кристаллов разбито`,bestTier:`Лучшая руна`,newBest:`Новый рекорд!`,earned:`Получено осколков`,rank:`Место`,restore:`Обереги: +5`,restoreHint:`короткая реклама`,synergyOn:`Синергия:`,synergies:`Синергии`,yourName:`Твоё имя`,online:`онлайн`,offline:`офлайн · это устройство`,empty:`Пока никто не держал осаду — будь первым!`,noWebgl:`WebGL2 недоступен — графика отключена.`,music:`Музыка`,sfx:`Звуки`,vibration:`Вибрация`,quality:`Графика`,language:`Язык`,qualityAuto:`Авто`,qualityHigh:`Высокая`,qualityLow:`Низкая`,replayTips:`Показать подсказки снова`,close:`Закрыть`,back:`Назад`,deckHint:`Семейств рун в колоде: 5. Нажми ⚓, чтобы выбрать Якорь — он сохраняет семейство при слиянии.`,anchor:`Якорь`,unlock:`Открыть`,maxed:`Макс`,level:`Ур`,bastion:`Бастион`,hints:{summon:`Нажми ПРИЗЫВ, чтобы вызвать руну на бастион`,summonMore:`Призови ещё одну руну`,merge:`Перетащи руну на её близнеца (тот же знак и метки), чтобы слить`,defend:`Руны стреляют сами — не пускай кристаллы к вратам`,hasten:`УСКОРИТЬ вызывает волну раньше и даёт бонус эссенции`},rune:{rime:`Иней`,cinder:`Пепел`,arc:`Дуга`,basalt:`Базальт`,quill:`Игла`,void:`Пустота`,flare:`Вспышка`,blight:`Гниль`},runeDesc:{rime:`Ледяное поле, замедляет всех`,cinder:`Горящий взрыв по площади`,arc:`Цепная молния, бьёт летунов`,basalt:`Тяжёлый снаряд, ломает броню`,quill:`Быстрые парные иглы`,void:`Гравитация, тянет назад`,flare:`Дальний луч, пробивает броню`,blight:`Распад: цели получают больше урона`},tier:[`Искра`,`Осколок`,`Сигил`,`Герб`,`Столп`,`Монолит`,`Вершина`],synergy:{hailstorm:`Градобой`,thermalShock:`Термошок`,collapse:`Коллапс`,shrapnel:`Шрапнель`,overcharge:`Перегрузка`,sunrot:`Солнечная гниль`,entropy:`Энтропия`,anchorline:`Якорная линия`},bastionKey:{regen:`Поток: эссенция +0.5/с`,startEssence:`Запас: эссенция +30 на старте`,wards:`Твердыня: обереги +2`,refund:`Возврат: +10% при развеивании`},ach:{firstSigil:`Первый сигил`,crestBearer:`Носитель герба`,monolith:`Монолит воздвигнут`,apex:`Вершинная руна`,overload:`Перегрузка!`,wardenTen:`Страж десяти`,thirtyStrong:`Тридцать волн`,flawlessTen:`Безупречная десятка`,synergist:`Синергист`},bosses:[`Гласиан`,`Пеплозев`,`Дуговед`,`Базальтовый титан`,`Нуль-хор`],pause:`Пауза`}};function Xn(e,t,n=null){let r=new URLSearchParams(e).get(`lang`);if(r===`ru`||r===`en`)return r;if(n===`ru`||n===`en`)return n;let i=t.find(Boolean)?.toLowerCase()??`en`;return/^(ru|be|uk|kk|ky|uz|tg|hy|az)\b/.test(i)?`ru`:`en`}var Zn=typeof window>`u`?`en`:Xn(window.location.search,window.navigator.languages??[],qn(`lang`,null)),Qn={en:`English`,ru:`Русский`};function $n(e){if(e===Zn||(Y(`lang`,e),typeof window>`u`))return;let t=new URL(window.location.href);t.searchParams.delete(`lang`),window.location.replace(t.toString())}var X=Yn[Zn],er=10,tr=3,nr=.7,rr=`run`,ir=432e5,ar=2.5,or=5,sr=1e3;function cr(){Jn(rr)}var lr=class{game;renderer;quality=zt();floaters;fit={scale:1,offsetX:0,offsetY:0};view={fit:this.fit,selected:-1,hover:-1,drag:null,hintMask:0};ro;raf=0;last=0;acc=0;hitStop=0;comboAt=-9;combo=0;publishIn=0;disposed=!1;rect={left:0,top:0};pointer=null;mode=`siege`;day=``;restoredOnce=!1;rewardWave=-1;offerGoneAt=-9;offerWasReady=!1;modifiers=[];maxSynergies=0;leaksBeforeTen=0;hintSince=0;fpsFrames=0;fpsTime=0;toastId=0;debug;ended=!1;glReady=!1;wallMs=0;lastPoorToast=-9;saveIn=0;runAchievements=[];d;constructor(e){this.d={...e};let t=this.d,n=new URLSearchParams(window.location.search);this.debug=n.has(`debug`),this.game=It(Lt({deck:t.profile.deck,anchor:t.profile.anchor})),this.renderer=Gn(t.canvas),this.floaters=Me(t.canvas);let r=this.renderer?`webgl2`:`none`;t.canvas.dataset.gl=r,t.canvas.dataset.ready=``,t.hud.set({gl:r}),this.applyQualitySetting(),this.ro=new ResizeObserver(()=>this.applySize()),this.ro.observe(t.canvas),this.applySize(),t.canvas.addEventListener(`pointerdown`,this.onDown),t.canvas.addEventListener(`pointermove`,this.onMove),t.canvas.addEventListener(`pointerup`,this.onUp),t.canvas.addEventListener(`pointercancel`,this.onCancel),t.canvas.addEventListener(`contextmenu`,this.prevent),window.addEventListener(`keydown`,this.onKey),document.addEventListener(`visibilitychange`,this.onVisibility),(this.debug||n.has(`test`))&&this.installDebugHook(),this.loop()}start(e){let t=this.d.profile;this.d.audio.unlock(),this.mode=e,this.day=rt(Date.now());let n;if(e===`daily`){let e=wt(this.day);n=Lt({mode:`daily`,seed:e.seed,deck:e.deck,anchor:e.anchor,modifiers:e.modifiers,label:e.day,meta:dt(t)}),this.modifiers=e.modifiers}else n=Lt({mode:`siege`,seed:(Date.now()^Math.random()*1e9)>>>0,deck:[...t.deck],anchor:t.anchor,meta:dt(t)}),this.modifiers=[];this.game=It(n),this.game.input({type:`begin`});let r=e===`siege`?Ct(t):0;r>0&&this.game.input({type:`grant`,what:`essence`,amount:r}),this.game.events.clear(),this.renderer?.reset(),this.view.selected=-1,this.view.drag=null,this.view.hintMask=0,this.acc=0,this.restoredOnce=!1,this.rewardWave=-1,this.offerGoneAt=-9,this.offerWasReady=!1,this.maxSynergies=0,this.comboAt=-9,this.combo=0,this.leaksBeforeTen=0,this.ended=!1,this.hintSince=0,this.wallMs=0,this.saveIn=or,this.lastPoorToast=-9,this.runAchievements.length=0,cr(),this.d.audio.startMusic(),this.d.audio.sfx(`waveClear`),this.d.hud.set({screen:`playing`,mode:e,modifiers:[...this.modifiers],result:null,selected:null,toast:null,rewardReady:!1}),this.publish(!0)}pause(e){let t=this.game.state;e&&t.phase===`running`?(this.game.input({type:`pause`,on:!0}),this.d.hud.set({screen:`paused`})):!e&&t.phase===`paused`&&(this.game.input({type:`pause`,on:!1}),this.d.audio.unlock(),this.d.audio.startMusic(),this.d.hud.set({screen:`playing`}),this.last=0)}quit(){let e=this.game.state;(e.phase===`running`||e.phase===`paused`)&&this.finishRun(!1,!0),cr(),this.d.audio.stopMusic(),this.d.audio.setIntensity(0),this.game=It(Lt({deck:this.d.profile.deck,anchor:this.d.profile.anchor})),this.renderer?.reset(),this.view.selected=-1,this.d.hud.set({screen:`menu`,selected:null,hint:null})}restoreWards(){return this.restoredOnce||this.game.state.phase!==`defeat`?!1:(this.restoredOnce=!0,this.game.input({type:`grant`,what:`wards`,amount:5}),this.ended=!1,this.d.audio.startMusic(),this.d.hud.set({screen:`playing`,result:null}),this.publish(!0),!0)}resume(){let e=qn(rr,null);if(cr(),!e||e.v!==1||!e.snap||typeof e.at!=`number`||Date.now()-e.at>ir||e.snap.phase!==`running`&&e.snap.phase!==`paused`)return!1;let t=It(e.snap.config);return t.restore(e.snap)?(this.game=t,this.mode=e.mode===`daily`?`daily`:`siege`,this.day=typeof e.day==`string`?e.day:rt(Date.now()),this.modifiers=[...e.snap.config.modifiers],this.wallMs=Math.max(0,e.wallMs|0),this.maxSynergies=Math.max(0,e.maxSynergies|0),this.leaksBeforeTen=Math.max(0,e.leaksBeforeTen|0),this.rewardWave=e.rewardWave|0,this.restoredOnce=e.restoredOnce===!0,this.runAchievements.length=0,this.game.input({type:`pause`,on:!0}),this.game.events.clear(),this.renderer?.reset(),this.view.selected=-1,this.view.drag=null,this.view.hintMask=0,this.acc=0,this.ended=!1,this.saveIn=or,this.d.hud.set({screen:`paused`,mode:this.mode,modifiers:[...this.modifiers],result:null,selected:null,toast:null,rewardReady:!1}),this.publish(!0),!0):!1}saveRun(){let e=this.game.state;if(this.saveIn=or,e.phase!==`running`&&e.phase!==`paused`)return cr();Y(rr,{v:1,at:Date.now(),mode:this.mode,day:this.day,wallMs:Math.round(this.wallMs),maxSynergies:this.maxSynergies,leaksBeforeTen:this.leaksBeforeTen,rewardWave:this.rewardWave,restoredOnce:this.restoredOnce,snap:this.game.serialize()})}get rewardReady(){let e=this.game.state;return e.phase===`running`&&e.waveActive&&e.wave>=tr&&this.rewardWave!==e.wave}freeSummons(){return this.rewardReady?(this.rewardWave=this.game.state.wave,this.game.input({type:`grant`,what:`summons`,amount:3}),this.d.audio.sfx(`resonance`),this.vibrate(20),this.toast(X.freeSummons),this.publish(!0),!0):!1}act(e){let t=this.game.input(e);if(t.ok)e.type===`hasten`&&this.d.audio.sfx(`hasten`);else{(t.reason===d.NotEnoughEssence||t.reason===d.DifferentType||t.reason===d.DifferentTier||t.reason===d.BoardFull)&&(this.d.audio.sfx(`reject`),this.vibrate(25));let e=t.reason===d.NotEnoughEssence?X.needEssence:t.reason===d.BoardFull?X.full:null,n=this.game.state.time;e!==null&&n-this.lastPoorToast>=ar&&(this.lastPoorToast=n,this.toast(e))}return this.publish(!0),t.ok}focusSynergy(e){this.renderer?.flashLink(e);let t=s[e];t&&this.toast(`${X.synergy[t]} · ${this.game.state.synergyLevel[e]??0}/3`),this.d.audio.sfx(`select`,{rune:e}),this.vibrate(8)}summon(){this.act({type:`summon`,cell:-1})}sellSelected(){let e=this.view.selected;e<0||this.act({type:`sell`,cell:e})&&this.select(-1)}applyQualitySetting(){let e=this.d.settings().quality;this.renderer?.setQuality(e===`low`?`low`:e===`high`?`high`:this.quality.scale<.7?`medium`:`high`)}setProfile(e){this.d.profile=e}dispose(){this.saveRun(),this.disposed=!0,cancelAnimationFrame(this.raf),this.ro.disconnect();let e=this.d.canvas;e.removeEventListener(`pointerdown`,this.onDown),e.removeEventListener(`pointermove`,this.onMove),e.removeEventListener(`pointerup`,this.onUp),e.removeEventListener(`pointercancel`,this.onCancel),e.removeEventListener(`contextmenu`,this.prevent),window.removeEventListener(`keydown`,this.onKey),document.removeEventListener(`visibilitychange`,this.onVisibility),this.d.audio.stopMusic(),this.floaters.dispose(),this.renderer?.dispose()}applySize(){let e=this.d.canvas,t=e.clientWidth||1,n=e.clientHeight||1,r=e.getBoundingClientRect();this.rect={left:r.left,top:r.top};let i=Math.min(118,n*.13),a=Math.min(150,n*.17);Ze(t,n,this.fit);let o=n-i-a,s=q-130,c=Be-175,l=Math.min(t/s,o/c);this.fit.scale=l,this.fit.offsetX=t/2-(130+q)/2*l,this.fit.offsetY=i+(o-c*l)/2-175*l,this.renderer?.resize(t,n,Bt(window.devicePixelRatio,this.quality))}loop=()=>{this.disposed||(this.raf=requestAnimationFrame(this.frame))};frame=e=>{this.loop();let t=this.last?e-this.last:16.7;this.last=e;let n=Math.min(t,100)/1e3;Vt(this.quality,t)&&(this.applySize(),this.applyQualitySetting());let r=this.game;if(this.hitStop>0)this.hitStop-=n;else{this.acc+=n;let e=0;for(;this.acc>=.016666666666666666&&e<6;)r.step(a),this.acc-=a,e++;e>=6&&(this.acc=0)}if(this.handleEvents(),!this.glReady&&this.renderer?.ready&&(this.glReady=!0,this.d.canvas.dataset.ready=`1`),this.renderer)try{this.renderer.render(r.state,r.events,this.view,n)}catch(e){console.error(e),this.renderer.dispose(),this.renderer=null,this.d.canvas.dataset.gl=`none`,this.d.hud.set({gl:`none`})}r.events.clear(),r.state.phase===`running`&&(this.wallMs+=Math.min(t,1e3)),this.publishIn-=n,this.publishIn<=0&&this.publish(!1),this.saveIn-=n,this.saveIn<=0&&this.saveRun(),this.debug&&this.measureFps(n)};handleEvents(){let e=this.game,t=e.state,n=this.d.audio,r=e.events,i=!1;this.floaters.frame();for(let e=0;e<r.length;e++){let a=r.at(e);switch(a.kind){case u.Summon:n.sfx(`summon`,{rune:a.b}),this.vibrate(8);break;case u.Merge:n.sfx(`merge`,{rune:a.c,tier:a.d}),this.vibrate(15),(this.view.selected===a.a||this.view.selected===a.b)&&this.select(-1),i=!0;break;case u.Overload:n.sfx(`overload`),this.vibrate(60),this.hitStop=.08,i=!0;break;case u.Sell:n.sfx(`sell`);break;case u.Move:n.sfx(`move`);break;case u.Fire:n.sfx(`fire`,{rune:a.b,tier:a.c});break;case u.Kill:if(a.c>0){this.combo=a.at-this.comboAt<.7?this.combo+1:1,this.comboAt=a.at;let e=W(1),t=a.x+Math.sign(e-a.x)*46,n=a.d===1?2:+(this.combo>=4);this.floaters.spawn(t*this.fit.scale+this.fit.offsetX,a.y*this.fit.scale+this.fit.offsetY-12,a.c,n)}a.d===1?(n.sfx(`bossKill`),this.vibrate(80),this.hitStop=.12):n.sfx(`kill`);break;case u.Leak:n.sfx(`leak`),this.vibrate(40),t.wavesCleared<10&&this.leaksBeforeTen++;break;case u.WaveStart:n.sfx(`waveStart`),this.vibrate(10),a.c===1&&n.setBoss(!0);break;case u.WaveClear:n.sfx(`waveClear`),n.setBoss(!1),i=!0,!this.d.profile.tutorialDone&&t.wavesCleared>=2&&(this.d.profile.tutorialDone=!0,this.d.saveProfile(this.d.profile));break;case u.BossSpecial:n.sfx(`reject`),this.vibrate(30);break;case u.BossSpawn:n.sfx(`bossSpawn`),this.vibrate(80);break;case u.SynergyOn:{n.sfx(`synergy`);let e=s[a.a];e&&this.toast(`${X.synergyOn} ${X.synergy[e]}`);let r=0;for(let e=0;e<s.length;e++)t.synergyMask&1<<e&&r++;this.maxSynergies=Math.max(this.maxSynergies,r),i=!0;break}case u.Pool:n.sfx(`pool`);break;case u.Ability:n.sfx(a.a===0?`pulse`:`resonance`),this.vibrate(20);break;case u.Defeat:n.sfx(`defeat`),this.vibrate(100),this.finishRun(!1,!1);break;case u.Victory:n.sfx(`victory`),this.finishRun(!0,!1)}}i&&!this.ended&&this.checkAchievements(),n.setIntensity(t.waveActive?.25+t.waveProgress*.6+(t.boss.id===0?0:.2):.08)}achievementProgress(){let e=this.game.state;return{wavesCleared:e.wavesCleared,bestTier:e.stats.bestTier,overloads:e.stats.overloads,maxSynergies:this.maxSynergies,leaksBeforeTen:this.leaksBeforeTen}}checkAchievements(){let e=this.d.profile,t=xt(e,this.achievementProgress());t.length!==0&&(this.runAchievements.push(...t),this.d.saveProfile(e),this.toast(t.map(e=>`★ ${X.ach[e]}`).join(` · `)),this.d.audio.sfx(`victory`),this.vibrate(20))}finishRun(e,t){if(this.ended)return;this.ended=!0;let n=this.game.state,r=this.d.profile,i=St(r,{mode:this.mode,wavesCleared:n.wavesCleared,kills:n.stats.kills,score:n.score,bestTier:n.stats.bestTier,overloads:n.stats.overloads,leaks:n.stats.leaks,maxSynergies:this.maxSynergies,leaksBeforeTen:this.leaksBeforeTen},this.day||rt(Date.now()));this.d.saveProfile(r),cr();let a=Math.max(sr,Math.round(n.time*1e3),Math.round(this.wallMs));this.d.onRunEnd({mode:this.mode,score:n.score,waves:n.wavesCleared,kills:n.stats.kills,durationMs:a,day:this.day}),this.d.audio.stopMusic(),this.d.audio.setIntensity(0),!t&&(this.select(-1),this.d.hud.set({screen:`results`,result:{mode:this.mode,victory:e,waves:n.wavesCleared,kills:n.stats.kills,score:n.score,bestTier:n.stats.bestTier,shards:i.shards,multiplier:i.multiplier,newBest:i.newBest,achievements:[...this.runAchievements,...i.newAchievements],damage:ur(n.stats.damageByRune),modifiers:[...this.modifiers],rank:null,online:null,canRestore:!this.restoredOnce&&!e}}))}hint(){let e=this.d.profile,t=this.game.state;if(e.tutorialDone||t.phase!==`running`)return null;let n=t.stats;return n.summons===0?`summon`:n.summons===1?`summonMore`:n.merges===0&&this.hasPair()?`merge`:t.waveActive&&t.wave===1?`defend`:!t.waveActive&&t.wavesCleared>=1&&n.hastens===0&&t.wave<3?`hasten`:null}hasPair(){let e=this.game.state.cells;for(let t=0;t<15;t++){let n=e[t];if(n.type!==null)for(let r=t+1;r<15;r++){let t=e[r];if(t.type===n.type&&t.tier===n.tier)return!0}}return!1}publish(e){this.publishIn=.1;let t=this.game.state,n=this.d.hud.get();if(n.screen!==`playing`&&n.screen!==`paused`&&!e)return;let r=this.view.selected>=0?t.cells[this.view.selected]:void 0,i=r&&r.type!==null?n.selected&&n.selected.cell===r.index&&n.selected.type===r.type&&n.selected.tier===r.tier?n.selected:{cell:r.index,type:r.type,tier:r.tier,refund:O(r.tier,t.config.meta.refund)}:null,a=0;for(let e=0;e<15;e++)t.cells[e].type!==null&&a++;let o=this.hint(),s=this.rewardReady;this.offerWasReady&&!s&&(this.offerGoneAt=t.time),this.offerWasReady=s,this.hintSince=o===n.hint?this.hintSince:o===null?0:this.hintSince+1,this.d.hud.set({wave:t.wave,waveIn:Math.ceil(Math.max(0,t.waveIn)),waveActive:t.waveActive,waveProgress:Math.round(t.waveProgress*50)/50,essence:Math.floor(t.essence),essenceMax:t.essenceMax,summonCost:t.summonCost,boardFull:a>=15,wards:t.wards,wardsMax:t.wardsMax,score:t.score,pulseCd:Math.ceil(t.abilities.pulseCd),resonanceCd:Math.ceil(t.abilities.resonanceCd),bossHp:t.boss.id!==0&&t.boss.maxHp>0?Math.round(t.boss.hp/t.boss.maxHp*100)/100:-1,bossKind:t.boss.kind,selected:i,synergyMask:t.synergyMask,synergyLevels:dr(t.synergyLevel),hint:o,rewardReady:s,hastenLock:t.time-this.offerGoneAt<nr})}toast(e){this.d.hud.set({toast:{id:++this.toastId,text:e}})}vibrate(e){if(this.d.settings().vibration)try{navigator.vibrate?.(e)}catch{}}select(e){this.view.selected=e,this.view.hintMask=e>=0?this.partners(e):0,this.publish(!0)}partners(e){let t=this.game.state.cells,n=t[e];if(!n||n.type===null)return 0;let r=0;for(let i=0;i<15;i++){if(i===e)continue;let a=t[i];a.type===n.type&&a.tier===n.tier&&(r|=1<<i)}return r}toBoard(e){let t=e.clientX-this.rect.left,n=e.clientY-this.rect.top;return[Qe(t,this.fit),$e(n,this.fit)]}onDown=e=>{if(this.game.state.phase!==`running`)return;e.preventDefault();let t=this.d.canvas.getBoundingClientRect();this.rect={left:t.left,top:t.top};let[n,r]=this.toBoard(e),i=Le(n,r,.1);this.pointer={id:e.pointerId,cell:i,sx:e.clientX,sy:e.clientY,dragging:!1};try{this.d.canvas.setPointerCapture(e.pointerId)}catch{}};onMove=e=>{let t=this.pointer,[n,r]=this.toBoard(e);if(!t||t.id!==e.pointerId){if(e.pointerType===`mouse`){let e=Le(n,r,.1);this.view.hover=e}return}let i=t.cell>=0?this.game.state.cells[t.cell]:void 0;!t.dragging&&i&&i.type!==null&&Math.hypot(e.clientX-t.sx,e.clientY-t.sy)>er&&(t.dragging=!0,this.view.drag={from:t.cell,x:n,y:r},this.view.hintMask=this.partners(t.cell),this.d.audio.sfx(`select`,{rune:o.indexOf(i.type)})),t.dragging&&this.view.drag&&(this.view.drag.x=n,this.view.drag.y=r,this.view.hover=Le(n,r,.2))};onUp=e=>{let t=this.pointer;if(!t||t.id!==e.pointerId)return;this.pointer=null;let n=this.game.state;if(t.dragging){let[n,r]=this.toBoard(e),i=Le(n,r,.2);this.view.drag=null,this.view.hover=-1,i>=0&&i!==t.cell?(this.act({type:`merge`,from:t.cell,to:i}),this.select(-1)):this.select(this.view.selected);return}let r=t.cell;if(r<0){this.select(-1);return}let i=n.cells[r];if(i.type===null){this.view.selected>=0&&this.select(-1),this.act({type:`summon`,cell:r});return}let a=this.view.selected;if(a>=0&&a!==r){let e=n.cells[a];if(e.type===i.type&&e.tier===i.tier){this.act({type:`merge`,from:a,to:r}),this.select(-1);return}}this.d.audio.sfx(`select`,{rune:o.indexOf(i.type)}),a!==r&&this.flareRuneLinks(i.type),this.select(a===r?-1:r)};flareRuneLinks(e){let t=this.game.state;for(let n=0;n<R.length;n++){if(!(t.synergyMask&1<<n))continue;let r=R[n].pair;(r[0]===e||r[1]===e)&&this.renderer?.flashLink(n)}}onCancel=()=>{this.pointer=null,this.view.drag=null,this.view.hover=-1};onKey=e=>{let t=this.d.hud.get().screen;if(e.key===`Escape`||e.key===`p`||e.key===`P`){t===`playing`?this.pause(!0):t===`paused`&&this.pause(!1);return}t!==`playing`||e.repeat||e.target instanceof HTMLElement&&(e.target.tagName===`INPUT`||e.target.tagName===`BUTTON`)&&(e.key===` `||e.key===`Enter`)||(e.key===` `?(e.preventDefault(),this.summon()):e.key===`h`||e.key===`H`?this.act({type:`hasten`}):e.key===`q`||e.key===`Q`?this.act({type:`ability`,id:`wardPulse`}):e.key===`e`||e.key===`E`?this.act({type:`ability`,id:`resonance`}):(e.key===`Delete`||e.key===`Backspace`)&&this.sellSelected())};onVisibility=()=>{document.hidden?(this.pause(!0),this.saveRun(),cancelAnimationFrame(this.raf),this.d.audio.suspend()):(this.last=0,this.d.audio.resume(),cancelAnimationFrame(this.raf),this.loop())};prevent=e=>e.preventDefault();measureFps(e){this.fpsFrames++,this.fpsTime+=e,this.fpsTime>=1&&(this.d.hud.set({fps:Math.round(this.fpsFrames/this.fpsTime)}),this.fpsFrames=0,this.fpsTime=0)}installDebugHook(){let e=this;window.__game={get state(){return e.game.state},act:t=>e.act(t),cellScreen:t=>({x:W(t)*e.fit.scale+e.fit.offsetX,y:G(t)*e.fit.scale+e.fit.offsetY}),start:(t=`siege`)=>e.start(t),startWith(t={}){e.start(t.mode??`siege`);let n={...e.game.state.config,...t};e.game=It(n),e.game.input({type:`begin`}),e.game.events.clear(),e.renderer?.reset(),e.acc=0,e.publish(!0)},saveRun:()=>e.saveRun(),resume:()=>e.resume(),freeSummons:()=>e.freeSummons(),get rewardReady(){return e.rewardReady},fastForward(t){let n=Math.round(t/a);for(let t=0;t<n&&e.game.state.phase===`running`;t++)e.game.step(a),e.handleEvents(),e.game.events.clear();e.publish(!0)},bot(){let t=e.game.state;for(let n=0;n<15;n++)for(let r=n+1;r<15;r++){let i=t.cells[n],a=t.cells[r];if(i.type!==null&&i.type===a.type&&i.tier===a.tier){e.act({type:`merge`,from:n,to:r});return}}t.essence>=t.summonCost&&e.act({type:`summon`,cell:-1})},lose(){e.game.state.wards=1,e.game.input({type:`grant`,what:`wards`,amount:0});let t=e.game.state;t.wards=0,e.finishRun(!1,!1),t.phase=`defeat`},get dropped(){return e.game.events.dropped},cellCenter(t){let n=W(t),r=G(t);return{x:n*e.fit.scale+e.fit.offsetX+e.rect.left,y:r*e.fit.scale+e.fit.offsetY+e.rect.top}}}}};function ur(e){let t=0;for(let n=0;n<e.length;n++)t+=Math.max(0,e[n]);if(t<=0)return[];let n=[];for(let r=0;r<e.length;r++){let i=Math.max(0,e[r])/t,a=o[r];a!==void 0&&i>=.02&&n.push({type:a,share:i})}return n.sort((e,t)=>t.share-e.share),n.slice(0,5)}function dr(e){let t=0;for(let n=0;n<e.length;n++)t|=(e[n]&3)<<n*2;return t}function fr(e){let t=e,n=new Set;return{get:()=>t,set(e){let r=!1;for(let n in e)if(!Object.is(t[n],e[n])){r=!0;break}if(r){t={...t,...e};for(let e of n)e()}},subscribe(e){return n.add(e),()=>n.delete(e)}}}var pr=`scores`,mr=`scores-daily`,hr=20,gr=60,_r=6048e5,vr=/^[A-Za-z0-9_-]{8,64}$/,yr=8192;function br(e=Date.now()){return new Date(e).toISOString().slice(0,10)}function xr(e){let t=(e??`/api`).trim();return t===``||t===`off`?null:t.replace(/\/+$/,``)}function Sr(e){return String(e??``).replace(/[\u0000-\u001f\u007f<>]/g,``).trim().slice(0,16).trim()||`Player`}function Cr(e,t){if(!Array.isArray(e))throw Error(`bad payload`);return e.slice(0,t).map(e=>{let t={name:Sr(e?.name),score:Math.max(0,Math.floor(Number(e?.score)||0)),createdAt:Number(e?.createdAt)||void 0},n=Number(e?.waves);return e?.waves!=null&&Number.isFinite(n)&&(t.waves=Math.max(0,Math.floor(n))),t})}function wr(){let e=qn(mr,[]);return Array.isArray(e)?e.filter(e=>typeof e?.day==`string`).slice(0,gr).map(e=>({...Cr([e],1)[0],day:e.day})):[]}function Tr(e=10,t=`all`,n){if(t===`daily`){let t=n??br();return wr().filter(e=>e.day===t).slice(0,e).map(({day:e,...t})=>t)}let r=qn(pr,[]);if(!Array.isArray(r))return[];let i=Cr(r,hr);if(t===`weekly`){let t=Date.now()-_r;return i.filter(e=>(e.createdAt??0)>=t).slice(0,e)}return i.slice(0,e)}function Er(e){let t={name:Sr(e.name),score:e.score,createdAt:e.createdAt??Date.now()};if(e.waves!=null&&(t.waves=e.waves),e.mode===`daily`){let n=e.day??br(),r={...t,day:n},i=[...wr(),r].sort((e,t)=>e.day===t.day?t.score-e.score:e.day<t.day?1:-1);return Y(mr,i.slice(0,gr)),i.filter(e=>e.day===n).indexOf(r)+1}let n=Tr(hr);return n.push(t),n.sort((e,t)=>t.score-e.score),Y(pr,n.slice(0,hr)),n.indexOf(t)+1}function Dr(e,t=(e,t)=>fetch(e,t),n=5e3){async function r(r,i){if(e===null)throw Error(`api disabled`);let a=new AbortController,o=setTimeout(()=>a.abort(),n);try{let n=await t(e+r,{...i,signal:a.signal,headers:{"content-type":`application/json`,...i?.headers}});if(!n.ok)throw Error(`HTTP ${n.status}`);if(!(n.headers.get(`content-type`)??``).includes(`application/json`))throw Error(`not json`);return await n.json()}finally{clearTimeout(o)}}async function i(e=10,t=`all`,n){try{let i=`/scores?limit=${e}`;return t!==`all`&&(i+=`&board=${t}`),t===`daily`&&n&&(i+=`&day=${encodeURIComponent(n)}`),{entries:Cr((await r(i)).scores,e),source:`online`}}catch{return{entries:Tr(e,t,n),source:`offline`}}}async function a(e){let t=Er({name:e.name,score:e.score,waves:e.waves,mode:e.mode,day:e.day});try{let t=await r(`/scores`,{method:`POST`,body:JSON.stringify({...e,name:Sr(e.name)})});return{source:`online`,rank:Number(t.rank)||null}}catch{return{source:`offline`,rank:t}}}return{base:e,top:i,submit:a,async submitAndTop(e,t=10){let{source:n,rank:r}=await a(e),o=e.mode===`daily`?`daily`:`all`,s=o===`daily`?e.day:void 0;return{rank:r,board:n===`online`?await i(t,o,s):{entries:Tr(t,o,s),source:`offline`}}},async saveCloud(e,t){try{if(!vr.test(e))return!1;let n=JSON.stringify(t);return typeof n!=`string`||new TextEncoder().encode(n).byteLength>yr?!1:(await r(`/save/${e}`,{method:`PUT`,body:n}),!0)}catch{return!1}},async loadCloud(e){try{if(!vr.test(e))return null;let t=await r(`/save/${e}`);return t.data===void 0||t.data===null?null:{data:t.data,updatedAt:Number(t.updatedAt)||0}}catch{return null}}}}var Or=Dr(xr(`off`)),kr=18e4;function Ar(e=Date.now){let t=e();return{async rewarded(e){return this.track(`ad_show`,{placement:e}),!0},interstitial(){e()-t<kr||(t=e(),this.track(`ad_show`,{placement:`interstitial`}))},track(e,t){}}}var jr=Ar();function Mr(){return{screen:`menu`,gl:`pending`,mode:`siege`,modifiers:[],wave:0,waveIn:0,waveActive:!1,waveProgress:0,essence:0,essenceMax:320,summonCost:18,boardFull:!1,wards:20,wardsMax:20,score:0,pulseCd:0,resonanceCd:0,bossHp:-1,bossKind:0,selected:null,synergyMask:0,synergyLevels:0,hint:null,rewardReady:!1,hastenLock:!1,result:null,toast:null,fps:0}}var Nr={music:!0,sfx:!0,vibration:!0,quality:`auto`},Z=n();function Pr({modifiers:e,detailed:t=!1,className:n=``}){return e.length===0?null:(0,Z.jsx)(`ul`,{className:`mods${t?` mods--detailed`:``}${n?` ${n}`:``}`,"aria-label":X.dailyTwist,"data-testid":`mods`,children:e.map(e=>(0,Z.jsxs)(`li`,{className:`mod-chip${B[e]?` is-boon`:``}`,"data-testid":`mod-${e}`,title:X.modDesc[e],children:[(0,Z.jsx)(`b`,{children:X.mod[e]}),t&&(0,Z.jsx)(`small`,{children:X.modDesc[e]})]},e))})}var Fr={rime:`#8fd8ff`,cinder:`#ff7a3d`,arc:`#b48cff`,basalt:`#e0a75e`,quill:`#7dffb0`,void:`#7b6dff`,flare:`#ffe36b`,blight:`#b6ff4a`},Ir={rime:`M12 3v18M4.2 7.5l15.6 9M4.2 16.5l15.6-9M10 4.5l2 2 2-2M10 19.5l2-2 2 2`,cinder:`M6.5 17.5L12 4l5.5 13.5zM12 15v-5`,arc:`M14 3l-5 9h6l-5 9`,basalt:`M12 4.5l7.5 7.5-7.5 7.5L4.5 12zM10.5 10.5h3v3h-3z`,quill:`M12 4v16M6.5 9.5L12 4l5.5 5.5M6.5 15.5L12 10l5.5 5.5`,void:`M12 6a6 6 0 1 0 0.01 0M12 10.5a1.5 1.5 0 1 0 0.01 0`,flare:`M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8M12 9.5a2.5 2.5 0 1 0 0.01 0`,blight:`M12 4.5a3 3 0 1 0 0.01 0M7.5 12.5a3 3 0 1 0 0.01 0M16.5 12.5a3 3 0 1 0 0.01 0`};function Lr({type:e,size:t=28,tier:n=0}){let r=Fr[e];return(0,Z.jsxs)(`svg`,{className:`rune-icon`,viewBox:`0 0 24 24`,width:t,height:t,"aria-hidden":`true`,style:{color:r},children:[(0,Z.jsx)(`circle`,{cx:`12`,cy:`12`,r:`11`,fill:`rgb(8 10 28 / 0.85)`,stroke:`currentColor`,strokeOpacity:`0.7`,strokeWidth:`1.2`}),(0,Z.jsx)(`path`,{d:Ir[e],fill:`none`,stroke:`currentColor`,strokeWidth:`1.8`,strokeLinecap:`round`,strokeLinejoin:`round`}),Array.from({length:n},(e,t)=>(0,Z.jsx)(`circle`,{cx:12+(t-(n-1)/2)*2.6,cy:23.2,r:`0.9`,fill:`#fff`},t))]})}function Rr({hud:e,onSummon:t,onHasten:n,onPulse:r,onResonance:i,onSell:a,onPause:o,onFreeSummons:c,onSynergy:l}){let u=e.essence>=e.summonCost&&!e.boardFull,d=e.wardsMax>0?e.wards/e.wardsMax:0,f=Math.min(1,e.essence/e.essenceMax),p=[],m=1,h=0;for(let t=0;t<s.length;t++)if(e.synergyMask&1<<t){p.push(t);let e=66+X.synergy[s[t]].length*7;h>0&&h+6+e>350?(m++,h=e):h+=(h>0?6:0)+e}let g=p.length>4||m>2||e.selected!==null&&p.length>2;return(0,Z.jsxs)(`div`,{className:`hud`,"data-testid":`hud`,children:[(0,Z.jsxs)(`header`,{className:`hud__top`,children:[(0,Z.jsxs)(`div`,{className:`hud__wave`,"data-testid":`hud-wave`,children:[(0,Z.jsx)(`span`,{className:`hud__label`,children:e.waveActive||e.wave>0?X.wave:X.nextWave}),(0,Z.jsx)(`strong`,{className:`hud__wave-num`,children:e.wave}),(0,Z.jsx)(`div`,{className:`hud__wave-bar`,"aria-hidden":`true`,children:(0,Z.jsx)(`i`,{style:{transform:`scaleX(${e.waveActive?e.waveProgress:1})`}})}),!e.waveActive&&(0,Z.jsxs)(`span`,{className:`hud__timer`,children:[e.waveIn,`s`]})]}),(0,Z.jsxs)(`div`,{className:`hud__wards${d<.35?` is-low`:``}`,"aria-label":`${X.wards} ${e.wards}`,children:[(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`20`,height:`20`,"aria-hidden":`true`,children:(0,Z.jsx)(`path`,{d:`M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5z`,fill:`currentColor`})}),(0,Z.jsx)(`strong`,{"data-testid":`hud-wards`,children:e.wards})]}),(0,Z.jsxs)(`div`,{className:`hud__score`,children:[(0,Z.jsx)(`span`,{className:`hud__label`,children:X.score}),(0,Z.jsx)(`strong`,{"data-testid":`hud-score`,children:e.score})]}),(0,Z.jsx)(`button`,{type:`button`,className:`icon-btn`,"aria-label":X.pause,onClick:o,"data-testid":`pause`,children:(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`20`,height:`20`,"aria-hidden":`true`,children:[(0,Z.jsx)(`rect`,{x:`6`,y:`5`,width:`4`,height:`14`,rx:`1.5`,fill:`currentColor`}),(0,Z.jsx)(`rect`,{x:`14`,y:`5`,width:`4`,height:`14`,rx:`1.5`,fill:`currentColor`})]})})]}),e.modifiers.length>0&&!e.waveActive&&(0,Z.jsx)(Pr,{modifiers:e.modifiers,className:`mods--hud`}),e.bossHp>=0&&(0,Z.jsxs)(`div`,{className:`hud__boss`,"data-testid":`boss-bar`,children:[(0,Z.jsx)(`span`,{children:X.bosses[Math.max(0,e.bossKind-8)]??X.bosses[0]}),(0,Z.jsx)(`div`,{className:`hud__boss-bar`,children:(0,Z.jsx)(`i`,{style:{transform:`scaleX(${e.bossHp})`}})})]}),e.wave>0&&e.waveActive&&(0,Z.jsxs)(`div`,{className:`wave-banner${e.bossHp>=0?` is-boss`:``}`,"aria-hidden":`true`,children:[(0,Z.jsx)(`small`,{children:e.bossHp>=0?X.boss:X.wave}),(0,Z.jsx)(`strong`,{children:e.bossHp>=0?X.bosses[Math.max(0,e.bossKind-8)]??e.wave:e.wave})]},`w${e.wave}`),e.hint&&(0,Z.jsx)(`p`,{className:`hud__hint`,"data-testid":`hint`,"data-hint":e.hint,children:X.hints[e.hint]},e.hint),(0,Z.jsxs)(`div`,{className:`hud__bottom${e.selected?` has-selected`:``}`,children:[p.length>0&&(0,Z.jsx)(`ul`,{className:`hud__synergies${g?` is-compact`:``}`,"aria-label":X.synergies,children:p.map(t=>{let n=s[t],[r,i]=R[t].pair,a=e.synergyLevels>>t*2&3;return(0,Z.jsx)(`li`,{children:(0,Z.jsxs)(`button`,{type:`button`,className:`syn-chip`,style:{"--ca":Fr[r],"--cb":Fr[i]},onClick:()=>l?.(t),"data-testid":`syn-${n}`,"aria-label":X.synergy[n],title:X.synergy[n],children:[(0,Z.jsx)(`i`,{className:`syn-chip__dot`,"aria-hidden":`true`}),(0,Z.jsx)(`span`,{className:`syn-chip__name`,children:X.synergy[n]}),(0,Z.jsx)(`span`,{className:`syn-chip__pips`,"aria-label":`${a}/3`,children:[1,2,3].map(e=>(0,Z.jsx)(`b`,{className:e<=a?`is-on`:void 0},e))})]})},n)})}),e.selected&&(0,Z.jsxs)(`div`,{className:`hud__selected`,"data-testid":`selected`,children:[(0,Z.jsx)(Lr,{type:e.selected.type,size:34}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`strong`,{children:X.rune[e.selected.type]}),(0,Z.jsx)(`span`,{children:X.tier[e.selected.tier-1]})]}),(0,Z.jsxs)(`button`,{type:`button`,className:`chip-btn`,onClick:a,"data-testid":`sell`,children:[X.unbind,` +`,e.selected.refund]})]}),(0,Z.jsxs)(`nav`,{className:`dock`,children:[(0,Z.jsxs)(`div`,{className:`dock__essence`,"aria-label":`${X.essence} ${e.essence}`,children:[(0,Z.jsx)(`div`,{className:`dock__gauge`,children:(0,Z.jsx)(`i`,{style:{transform:`scaleY(${f})`}})}),(0,Z.jsx)(`strong`,{"data-testid":`essence`,children:e.essence}),(0,Z.jsx)(`span`,{children:X.essence})]}),(0,Z.jsxs)(`button`,{type:`button`,className:`dock__summon${u?` is-ready`:``}${e.hint===`summon`||e.hint===`summonMore`?` is-hinted`:``}`,onClick:t,"aria-disabled":!u,"data-testid":`summon`,children:[(0,Z.jsx)(`span`,{className:`dock__summon-label`,children:e.boardFull?X.full:X.summon}),(0,Z.jsxs)(`span`,{className:`dock__cost`,children:[(0,Z.jsx)(`i`,{"aria-hidden":`true`}),e.summonCost]})]}),(0,Z.jsxs)(`div`,{className:`dock__side`,children:[e.rewardReady&&c?(0,Z.jsxs)(`button`,{type:`button`,className:`round-btn round-btn--reward`,onClick:c,"aria-label":`${X.freeSummons} · ${X.freeSummonsHint}`,title:X.freeSummonsHint,"data-testid":`free-summons`,children:[(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`20`,height:`20`,"aria-hidden":`true`,children:(0,Z.jsx)(`path`,{d:`M12 3l2.2 5.1L20 9l-4 3.9 1 5.6-5-2.8-5 2.8 1-5.6L4 9l5.8-.9z`,fill:`currentColor`})}),(0,Z.jsxs)(`small`,{children:[`+`,3]})]}):(0,Z.jsxs)(`button`,{type:`button`,className:`round-btn round-btn--hasten${e.hint===`hasten`?` is-hinted`:``}`,onClick:n,disabled:e.waveActive||e.hastenLock,"aria-label":X.hasten,"data-testid":`hasten`,children:[(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`20`,height:`20`,"aria-hidden":`true`,children:(0,Z.jsx)(`path`,{d:`M4 5l8 7-8 7zM12 5l8 7-8 7z`,fill:`currentColor`})}),!e.waveActive&&(0,Z.jsxs)(`small`,{children:[`+`,j(e.waveIn)]})]}),(0,Z.jsxs)(`button`,{type:`button`,className:`round-btn round-btn--pulse`,onClick:r,disabled:e.pulseCd>0,"aria-label":X.pulse,children:[(0,Z.jsxs)(`svg`,{viewBox:`0 0 24 24`,width:`20`,height:`20`,"aria-hidden":`true`,children:[(0,Z.jsx)(`circle`,{cx:`12`,cy:`12`,r:`3`,fill:`currentColor`}),(0,Z.jsx)(`circle`,{cx:`12`,cy:`12`,r:`7.5`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`})]}),e.pulseCd>0&&(0,Z.jsx)(`small`,{children:e.pulseCd})]}),(0,Z.jsxs)(`button`,{type:`button`,className:`round-btn round-btn--reso`,onClick:i,disabled:e.resonanceCd>0,"aria-label":X.resonance,children:[(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`20`,height:`20`,"aria-hidden":`true`,children:(0,Z.jsx)(`path`,{d:`M3 12h3l2-6 4 12 3-9 2 3h4`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinejoin:`round`})}),e.resonanceCd>0&&(0,Z.jsx)(`small`,{children:e.resonanceCd})]})]})]})]})]})}var zr=[`daily`,`weekly`,`all`],Br={daily:()=>X.lbToday,weekly:()=>X.lbWeek,all:()=>X.lbAll};function Vr({board:e,highlight:t,kind:n,onKind:r}){return(0,Z.jsxs)(`section`,{className:`board`,"aria-label":X.leaderboard,"aria-busy":e===null,children:[n&&r&&(0,Z.jsx)(`div`,{className:`board__tabs`,role:`tablist`,children:zr.map(e=>(0,Z.jsx)(`button`,{type:`button`,role:`tab`,"aria-selected":e===n,className:`board__tab${e===n?` is-on`:``}`,onClick:()=>e!==n&&r(e),"data-testid":`lb-tab-${e}`,children:Br[e]()},e))}),(0,Z.jsxs)(`header`,{className:`board__head`,children:[(0,Z.jsx)(`h2`,{children:X.leaderboard}),e&&(0,Z.jsx)(`span`,{className:`badge badge--${e.source}`,"data-testid":`lb-source`,"data-source":e.source,children:e.source===`online`?X.online:X.offline})]}),e===null?(0,Z.jsx)(`ol`,{className:`board__list`,"data-testid":`lb-loading`,children:[0,1,2].map(e=>(0,Z.jsx)(`li`,{className:`board__row board__row--skeleton`},e))}):e.entries.length===0?(0,Z.jsx)(`p`,{className:`board__empty`,children:X.empty}):(0,Z.jsx)(`ol`,{className:`board__list`,"data-testid":`lb-list`,children:e.entries.map((e,n)=>(0,Z.jsxs)(`li`,{className:`board__row${t&&e.name===t?` is-me`:``}`,children:[(0,Z.jsx)(`span`,{className:`board__rank`,children:n+1}),(0,Z.jsx)(`span`,{className:`board__name`,children:e.name}),(0,Z.jsx)(`span`,{className:`board__score`,children:e.score})]},`${n}-${e.name}-${e.score}`))})]})}var Hr=`+500`;function Ur({children:e,className:t=``,label:n}){return(0,Z.jsx)(`div`,{className:`overlay`,role:`dialog`,"aria-label":n,children:(0,Z.jsx)(`section`,{className:`panel ${t}`,children:e})})}function Wr(){return(0,Z.jsxs)(`svg`,{className:`crest`,viewBox:`0 0 120 120`,"aria-hidden":`true`,children:[(0,Z.jsx)(`defs`,{children:(0,Z.jsxs)(`linearGradient`,{id:`crest-g`,x1:`0`,y1:`0`,x2:`1`,y2:`1`,children:[(0,Z.jsx)(`stop`,{offset:`0`,stopColor:`#5ee6c4`}),(0,Z.jsx)(`stop`,{offset:`1`,stopColor:`#7b6dff`})]})}),(0,Z.jsx)(`path`,{d:`M60 6l44 16v34c0 28-19 48-44 58C35 104 16 84 16 56V22z`,fill:`none`,stroke:`url(#crest-g)`,strokeWidth:`4`}),(0,Z.jsx)(`path`,{d:`M60 30v54M42 46l18-16 18 16M42 70l18-16 18 16`,fill:`none`,stroke:`#eaf0ff`,strokeWidth:`5`,strokeLinecap:`round`,strokeLinejoin:`round`})]})}function Gr({profile:e,today:t,daily:n,onSiege:r,onDaily:i,onDeck:a,onLeaderboard:o,onSettings:s}){let c=e.dailyDone===t;return(0,Z.jsx)(`div`,{className:`overlay overlay--menu`,"data-testid":`menu`,children:(0,Z.jsxs)(`section`,{className:`menu`,children:[(0,Z.jsx)(Wr,{}),(0,Z.jsx)(`h1`,{className:`menu__title`,children:X.title}),(0,Z.jsx)(`p`,{className:`menu__tagline`,children:X.tagline}),(0,Z.jsxs)(`div`,{className:`menu__stats`,children:[(0,Z.jsxs)(`span`,{children:[X.bestWave,` `,(0,Z.jsx)(`strong`,{children:e.bestWave})]}),(0,Z.jsxs)(`span`,{children:[(0,Z.jsx)(`i`,{className:`shard-dot`,"aria-hidden":`true`}),` `,(0,Z.jsx)(`strong`,{"data-testid":`shards`,children:e.shards})]}),e.streak.count>1&&(0,Z.jsxs)(`span`,{children:[`🔥 `,(0,Z.jsx)(`strong`,{children:e.streak.count}),` `,X.streak]})]}),(0,Z.jsxs)(`button`,{type:`button`,className:`play-btn`,onClick:r,"data-testid":`play`,autoFocus:!0,children:[(0,Z.jsx)(`span`,{children:X.siege}),(0,Z.jsx)(`small`,{children:X.siegeSub})]}),(0,Z.jsxs)(`button`,{type:`button`,className:`play-btn play-btn--alt${c?` is-done`:``}`,onClick:i,"data-testid":`daily`,children:[(0,Z.jsx)(`span`,{children:X.daily}),(0,Z.jsx)(`small`,{children:c?X.dailyDone:X.dailySub}),(0,Z.jsx)(`span`,{className:`daily-deck`,"aria-label":X.dailyDeck,children:n.deck.map(e=>(0,Z.jsx)(Lr,{type:e,size:20},e))}),(0,Z.jsx)(Pr,{modifiers:n.modifiers,className:`mods--menu`})]}),(0,Z.jsxs)(`div`,{className:`menu__row`,children:[(0,Z.jsxs)(`button`,{type:`button`,className:`ghost-btn`,onClick:a,"data-testid":`open-deck`,children:[(0,Z.jsx)(`span`,{className:`menu__deck-icons`,"aria-hidden":`true`,children:e.deck.slice(0,5).map(e=>(0,Z.jsx)(Lr,{type:e,size:18},e))}),X.deck,` · `,X.codex]}),(0,Z.jsx)(`button`,{type:`button`,className:`ghost-btn`,onClick:o,"data-testid":`open-board`,children:X.leaderboard}),(0,Z.jsx)(`button`,{type:`button`,className:`ghost-btn ghost-btn--icon`,onClick:s,"aria-label":X.settings,"data-testid":`open-settings`,children:(0,Z.jsx)(`svg`,{viewBox:`0 0 24 24`,width:`20`,height:`20`,"aria-hidden":`true`,children:(0,Z.jsx)(`path`,{d:`M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm8 3.5l2-1.5-2-3.5-2.4.8a7.6 7.6 0 00-2-1.2L15 4h-4l-.6 2.6a7.6 7.6 0 00-2 1.2L6 7 4 10.5 6 12l-2 1.5L6 17l2.4-.8a7.6 7.6 0 002 1.2L11 20h4l.6-2.6a7.6 7.6 0 002-1.2L20 17l2-3.5z`,fill:`none`,stroke:`currentColor`,strokeWidth:`1.6`})})})]})]})})}function Kr({onResume:e,onSettings:t,onQuit:n,modifiers:r=[]}){return(0,Z.jsxs)(Ur,{label:X.paused,children:[(0,Z.jsx)(`h2`,{className:`panel__title`,children:X.paused}),r.length>0&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(`h3`,{className:`panel__sub`,children:X.dailyTwist}),(0,Z.jsx)(Pr,{modifiers:r,detailed:!0})]}),(0,Z.jsx)(`button`,{type:`button`,className:`play-btn`,onClick:e,"data-testid":`resume`,autoFocus:!0,children:(0,Z.jsx)(`span`,{children:X.resume})}),(0,Z.jsx)(`button`,{type:`button`,className:`ghost-btn`,onClick:t,children:X.settings}),(0,Z.jsx)(`button`,{type:`button`,className:`ghost-btn ghost-btn--danger`,onClick:n,"data-testid":`quit`,children:X.quit})]})}var qr=600;function Jr({result:e,name:t,onName:n,onAgain:i,onMenu:a,onRestore:o,children:s}){let[c,l]=(0,r.useState)(!0);return(0,r.useEffect)(()=>{let e=window.setTimeout(()=>l(!1),qr);return()=>window.clearTimeout(e)},[]),(0,Z.jsxs)(Ur,{label:e.victory?X.victoryTitle:X.defeatTitle,className:`results`,children:[(0,Z.jsx)(`h2`,{className:`panel__title`,"data-testid":`results-title`,children:e.victory?X.victoryTitle:X.defeatTitle}),(0,Z.jsxs)(`div`,{className:`results__score`,children:[(0,Z.jsx)(`strong`,{"data-testid":`final-score`,children:e.score}),e.newBest&&(0,Z.jsx)(`span`,{className:`badge badge--gold`,children:X.newBest})]}),(0,Z.jsxs)(`dl`,{className:`results__stats`,children:[(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`dt`,{children:X.wavesHeld}),(0,Z.jsx)(`dd`,{"data-testid":`final-waves`,children:e.waves})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`dt`,{children:X.kills}),(0,Z.jsx)(`dd`,{children:e.kills})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`dt`,{children:X.bestTier}),(0,Z.jsx)(`dd`,{children:X.tier[e.bestTier-1]})]}),(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`dt`,{children:X.earned}),(0,Z.jsxs)(`dd`,{children:[`+`,e.shards,e.multiplier>1&&(0,Z.jsxs)(`small`,{children:[` ×`,e.multiplier.toFixed(2)]})]})]}),e.rank!==null&&(0,Z.jsxs)(`div`,{children:[(0,Z.jsx)(`dt`,{children:X.rank}),(0,Z.jsxs)(`dd`,{children:[`#`,e.rank]})]})]}),e.damage.length>0&&(0,Z.jsxs)(`div`,{className:`dmg`,"data-testid":`damage-breakdown`,children:[(0,Z.jsx)(`h3`,{className:`dmg__title`,children:X.damageBy}),(0,Z.jsx)(`ul`,{className:`dmg__list`,children:e.damage.map(e=>(0,Z.jsxs)(`li`,{"data-rune":e.type,children:[(0,Z.jsx)(Lr,{type:e.type,size:20}),(0,Z.jsx)(`span`,{className:`dmg__name`,children:X.rune[e.type]}),(0,Z.jsx)(`span`,{className:`dmg__bar`,"aria-hidden":`true`,children:(0,Z.jsx)(`i`,{style:{transform:`scaleX(${e.share})`,background:Fr[e.type]}})}),(0,Z.jsxs)(`b`,{className:`dmg__pct`,children:[Math.round(e.share*100),`%`]})]},e.type))})]}),e.modifiers.length>0&&(0,Z.jsx)(Pr,{modifiers:e.modifiers,className:`mods--results`}),e.achievements.length>0&&(0,Z.jsx)(`ul`,{className:`results__ach`,children:e.achievements.map(e=>(0,Z.jsxs)(`li`,{children:[`★ `,X.ach[e]]},e))}),e.canRestore&&(0,Z.jsxs)(`button`,{type:`button`,className:`ghost-btn ghost-btn--gold`,onClick:o,disabled:c,"data-testid":`restore`,children:[X.restore,` `,(0,Z.jsxs)(`small`,{children:[`· `,X.restoreHint]})]}),(0,Z.jsxs)(`label`,{className:`field`,children:[(0,Z.jsx)(`span`,{className:`field__label`,children:X.yourName}),(0,Z.jsx)(`input`,{className:`field__input`,value:t,maxLength:16,onChange:e=>n(e.target.value)})]}),s,(0,Z.jsxs)(`div`,{className:`panel__row`,children:[(0,Z.jsx)(`button`,{type:`button`,className:`ghost-btn`,onClick:a,disabled:c,"data-testid":`to-menu`,children:X.menu}),(0,Z.jsx)(`button`,{type:`button`,className:`play-btn play-btn--small`,onClick:i,disabled:c,"data-testid":`again`,children:(0,Z.jsx)(`span`,{children:X.again})})]})]})}function Yr({settings:e,onChange:t,onReplayTips:n,onClose:r}){let i=n=>t({...e,[n]:!e[n]});return(0,Z.jsxs)(Ur,{label:X.settings,children:[(0,Z.jsx)(`h2`,{className:`panel__title`,children:X.settings}),[`music`,`sfx`,`vibration`].map(t=>(0,Z.jsxs)(`button`,{type:`button`,className:`setting`,role:`switch`,"aria-checked":e[t],onClick:()=>i(t),"data-testid":`set-${t}`,children:[(0,Z.jsx)(`span`,{children:X[t]}),(0,Z.jsx)(`i`,{className:`switch${e[t]?` is-on`:``}`,"aria-hidden":`true`})]},t)),(0,Z.jsxs)(`div`,{className:`setting setting--seg`,children:[(0,Z.jsx)(`span`,{children:X.quality}),(0,Z.jsx)(`div`,{className:`seg`,children:[`auto`,`high`,`low`].map(n=>(0,Z.jsx)(`button`,{type:`button`,"aria-pressed":e.quality===n,onClick:()=>t({...e,quality:n}),children:n===`auto`?X.qualityAuto:n===`high`?X.qualityHigh:X.qualityLow},n))})]}),(0,Z.jsxs)(`div`,{className:`setting setting--seg`,children:[(0,Z.jsx)(`span`,{children:X.language}),(0,Z.jsx)(`div`,{className:`seg`,"data-testid":`set-lang`,children:[`en`,`ru`].map(e=>(0,Z.jsx)(`button`,{type:`button`,lang:e,"aria-pressed":Zn===e,onClick:()=>$n(e),children:Qn[e]},e))})]}),(0,Z.jsx)(`button`,{type:`button`,className:`ghost-btn`,onClick:n,children:X.replayTips}),(0,Z.jsx)(`button`,{type:`button`,className:`play-btn play-btn--small`,onClick:r,"data-testid":`close-settings`,children:(0,Z.jsx)(`span`,{children:X.close})})]})}function Xr({profile:e,onToggle:t,onAnchor:n,onUnlock:r,onUpgrade:i,onBastion:a,onClose:s}){return(0,Z.jsxs)(Ur,{label:X.deck,className:`deck`,children:[(0,Z.jsxs)(`header`,{className:`deck__head`,children:[(0,Z.jsxs)(`h2`,{className:`panel__title`,children:[X.deck,` `,e.deck.length,`/`,5]}),(0,Z.jsxs)(`span`,{className:`deck__shards`,children:[(0,Z.jsx)(`i`,{className:`shard-dot`,"aria-hidden":`true`}),` `,e.shards]})]}),(0,Z.jsx)(`p`,{className:`deck__hint`,children:X.deckHint}),(0,Z.jsx)(`ul`,{className:`deck__grid`,children:o.map(a=>{let o=e.unlocked.includes(a),s=e.deck.includes(a),c=mt(e,a);return(0,Z.jsxs)(`li`,{className:`rune-card${s?` is-in`:``}${o?``:` is-locked`}`,"data-testid":`rune-${a}`,children:[(0,Z.jsxs)(`button`,{type:`button`,className:`rune-card__main`,onClick:()=>o?t(a):r(a),"aria-pressed":s,children:[(0,Z.jsx)(Lr,{type:a,size:40}),(0,Z.jsx)(`strong`,{children:X.rune[a]}),(0,Z.jsx)(`small`,{children:o?X.runeDesc[a]:`${X.unlock} · 250`})]}),o&&(0,Z.jsxs)(`div`,{className:`rune-card__foot`,children:[(0,Z.jsx)(`button`,{type:`button`,className:`anchor-btn${e.anchor===a?` is-on`:``}`,onClick:()=>n(a),disabled:!s,"aria-label":`${X.anchor} ${X.rune[a]}`,"aria-pressed":e.anchor===a,children:`⚓`}),(0,Z.jsxs)(`button`,{type:`button`,className:`chip-btn`,disabled:c===null||e.shards<c,onClick:()=>i(a),children:[X.level,e.runeLevel[a],` `,c===null?`· ${X.maxed}`:`↑ ${c}`]})]})]},a)})}),(0,Z.jsx)(`h3`,{className:`deck__sub`,children:X.bastion}),(0,Z.jsx)(`ul`,{className:`bastion`,children:at.map(t=>{let n=gt(e,t);return(0,Z.jsxs)(`li`,{children:[(0,Z.jsxs)(`span`,{children:[X.bastionKey[t],` `,(0,Z.jsxs)(`small`,{children:[`(`,e.bastion[t],`)`]})]}),(0,Z.jsx)(`button`,{type:`button`,className:`chip-btn`,disabled:n===null||e.shards<n,onClick:()=>a(t),children:n===null?X.maxed:`↑ ${n}`})]},t)})}),(0,Z.jsxs)(`p`,{className:`iap`,"data-testid":`iap-soon`,children:[(0,Z.jsxs)(`span`,{className:`iap__icon`,"aria-hidden":`true`,children:[(0,Z.jsx)(`i`,{className:`shard-dot`}),(0,Z.jsx)(`i`,{className:`shard-dot`}),(0,Z.jsx)(`i`,{className:`shard-dot`})]}),(0,Z.jsxs)(`span`,{className:`iap__text`,children:[(0,Z.jsx)(`strong`,{children:X.iapTitle}),(0,Z.jsxs)(`small`,{children:[`· `,X.iapSoon]})]}),(0,Z.jsx)(`span`,{className:`iap__badge`,"aria-hidden":`true`,children:Hr})]}),(0,Z.jsx)(`button`,{type:`button`,className:`play-btn play-btn--small`,onClick:s,"data-testid":`close-deck`,children:(0,Z.jsx)(`span`,{children:X.back})})]})}function Zr({children:e,onClose:t}){return(0,Z.jsxs)(Ur,{label:X.leaderboard,children:[e,(0,Z.jsx)(`button`,{type:`button`,className:`play-btn play-btn--small`,onClick:t,"data-testid":`close-board`,children:(0,Z.jsx)(`span`,{children:X.back})})]})}var Qr=(()=>{let e=qn(`deviceId`,``);if(!/^[A-Za-z0-9_-]{8,64}$/.test(e)){let t=new Uint8Array(12);globalThis.crypto?.getRandomValues?.(t),e=Array.from(t,e=>(e%36).toString(36)).join(``)+Date.now().toString(36),Y(`deviceId`,e)}return e})();function $r({audio:e}){let t=(0,r.useRef)(null),n=(0,r.useRef)(null),[i]=(0,r.useState)(()=>fr(Mr())),a=(0,r.useSyncExternalStore)(i.subscribe,i.get),[o,s]=(0,r.useState)(()=>ut(qn(`profile`,null))),c=(0,r.useRef)(o),[l,u]=(0,r.useState)(()=>({...Nr,...qn(`settings`,{})})),d=(0,r.useRef)(l),[f,p]=(0,r.useState)(()=>qn(`name`,`Warden${Math.floor(Math.random()*900+100)}`)),m=(0,r.useRef)(f);m.current=f;let[h,g]=(0,r.useState)(null),[_,v]=(0,r.useState)(`none`),[y,b]=(0,r.useState)(`all`),[x,S]=(0,r.useState)(null),[C,w]=(0,r.useState)(null),T=rt(Date.now()),E=(0,r.useMemo)(()=>wt(T),[T]),D=(0,r.useCallback)((e,t=Date.now())=>{let r=ut(JSON.parse(JSON.stringify(e)));c.current=r,Y(`profile`,r),Y(`profileAt`,t),s(r),n.current?.setProfile(r)},[]);(0,r.useEffect)(()=>{let e=!0;Or.loadCloud(Qr).then(t=>{e&&t&&t.data?.profile&&(t.updatedAt<=qn(`profileAt`,0)||i.get().screen===`menu`&&D(ut(t.data.profile),t.updatedAt))});let t=()=>{document.visibilityState===`hidden`&&Or.saveCloud(Qr,{profile:c.current})};return document.addEventListener(`visibilitychange`,t),()=>{e=!1,document.removeEventListener(`visibilitychange`,t)}},[D,i]),(0,r.useEffect)(()=>{let e=!0;return Or.top().then(t=>e&&g(t)),()=>{e=!1}},[]),(0,r.useEffect)(()=>{if(_!==`leaderboard`)return;let e=!0;return S(null),Or.top(20,y,y===`all`?void 0:T).then(t=>e&&S(t)),()=>{e=!1}},[_,y,T]),(0,r.useEffect)(()=>{e.setMusicOn(l.music),e.setSfxOn(l.sfx)},[e,l.music,l.sfx]),(0,r.useEffect)(()=>{let r=new lr({canvas:t.current,hud:i,audio:e,profile:c.current,settings:()=>d.current,saveProfile:e=>D(e),onRunEnd:e=>{jr.track(`run_end`,e),g(null),Or.saveCloud(Qr,{profile:c.current});let t=Sr(m.current);Or.submitAndTop({name:t,score:e.score,durationMs:e.durationMs,waves:e.waves,kills:e.kills,mode:e.mode,day:e.day}).then(e=>{g(e.board);let t=i.get().result;t&&i.set({result:{...t,rank:e.rank,online:e.board.source===`online`}})})}});return n.current=r,r.resume(),()=>{r.dispose(),n.current=null}},[i,e,D]),(0,r.useEffect)(()=>{if(!a.toast)return;w(a.toast);let e=window.setTimeout(()=>w(null),2200);return()=>window.clearTimeout(e)},[a.toast]);let O=(0,r.useCallback)(t=>{d.current=t,u(t),Y(`settings`,t),n.current?.applyQualitySetting(),e.sfx(`click`)},[e]),k=(0,r.useCallback)(e=>{Y(`name`,Sr(m.current)),v(`none`),jr.track(`run_start`,{mode:e}),n.current?.start(e)},[]),A=(0,r.useCallback)(()=>{jr.interstitial(),n.current?.quit(),v(`none`)},[]),j=(0,r.useCallback)(t=>{let n=ut(JSON.parse(JSON.stringify(c.current)));t(n)===!1?e.sfx(`reject`):(e.sfx(`click`),D(n))},[e,D]),M=()=>n.current,N=a.screen;return(0,Z.jsxs)(`div`,{className:`app`,"data-screen":N,children:[(0,Z.jsx)(`canvas`,{ref:t,className:`stage`,"aria-label":X.title,"data-testid":`stage`}),(N===`playing`||N===`paused`)&&(0,Z.jsx)(Rr,{hud:a,onSummon:()=>M()?.summon(),onHasten:()=>M()?.act({type:`hasten`}),onPulse:()=>M()?.act({type:`ability`,id:`wardPulse`}),onResonance:()=>M()?.act({type:`ability`,id:`resonance`}),onSell:()=>M()?.sellSelected(),onPause:()=>M()?.pause(!0),onFreeSummons:()=>{jr.rewarded(`freeSummons`).then(e=>e&&M()?.freeSummons())},onSynergy:e=>M()?.focusSynergy(e)}),N===`menu`&&_===`none`&&(0,Z.jsx)(Gr,{profile:o,today:T,daily:E,onSiege:()=>k(`siege`),onDaily:()=>k(`daily`),onDeck:()=>v(`deck`),onLeaderboard:()=>v(`leaderboard`),onSettings:()=>v(`settings`)}),N===`paused`&&_===`none`&&(0,Z.jsx)(Kr,{onResume:()=>M()?.pause(!1),onSettings:()=>v(`settings`),onQuit:A,modifiers:a.modifiers}),N===`results`&&a.result&&_===`none`&&(0,Z.jsx)(Jr,{result:a.result,name:f,onName:e=>{p(e),Y(`name`,Sr(e))},onAgain:()=>k(a.result?.mode??`siege`),onMenu:A,onRestore:()=>{jr.rewarded(`restoreWards`).then(e=>e&&M()?.restoreWards())},children:(0,Z.jsx)(Vr,{board:h,highlight:Sr(f)})}),_===`settings`&&(0,Z.jsx)(Yr,{settings:l,onChange:O,onReplayTips:()=>j(e=>void(e.tutorialDone=!1)),onClose:()=>v(`none`)}),_===`deck`&&(0,Z.jsx)(Xr,{profile:o,onToggle:e=>j(t=>vt(t,e)),onAnchor:e=>j(t=>t.deck.includes(e)?void(t.anchor=e):!1),onUnlock:e=>j(t=>pt(t,e)),onUpgrade:e=>j(t=>ht(t,e)),onBastion:e=>j(t=>_t(t,e)),onClose:()=>v(`none`)}),_===`leaderboard`&&(0,Z.jsx)(Zr,{onClose:()=>v(`none`),children:(0,Z.jsx)(Vr,{board:x,highlight:Sr(f),kind:y,onKind:b})}),C&&(0,Z.jsx)(`p`,{className:`toast`,role:`status`,children:C.text},C.id),a.gl===`none`&&(0,Z.jsx)(`p`,{className:`toast toast--error`,role:`alert`,children:X.noWebgl}),a.fps>0&&(0,Z.jsxs)(`span`,{className:`fps`,children:[a.fps,` fps`]})]})}var ei=73.42,ti=[0,2,3,5,7,9,10],ni=[0,6,3,4];function Q(e){let t=Math.floor(e/7);return ti[(e%7+7)%7]+12*t}function $(e){return ei*2**(e/12)}function ri(e){let t=[0,2,4,7,9,12,14,16];return $(24+t[Math.max(0,Math.min(t.length-1,e-1))])}function ii(e){let t=new Float64Array(32);return(n,r)=>r-t[n]<e?!1:(t[n]=r,!0)}function ai(){let e=null,t,n,r,i,a,o,s=!0,c=!0,l=0,u=!1,d=!1,f=0,p=0,m=0,h=0,g=ii(.07),_=ii(.035),v=ii(.25);function y(e){let l=e.createDynamicsCompressor();l.threshold.value=-16,l.ratio.value=5,l.attack.value=.004,l.release.value=.2;let u=e.createDynamicsCompressor();u.threshold.value=-2,u.ratio.value=20,u.attack.value=.001,t=e.createGain(),t.gain.value=.85,t.connect(l).connect(u).connect(e.destination),n=e.createGain(),n.gain.value=c?.8:0,n.connect(t),r=e.createGain(),r.gain.value=s?.5:0,r.connect(t);let d=Math.floor(e.sampleRate*2.4),f=e.createBuffer(2,d,e.sampleRate);for(let e=0;e<2;e++){let t=f.getChannelData(e);for(let e=0;e<d;e++)t[e]=(Math.random()*2-1)*(1-e/d)**3}i=e.createConvolver(),i.buffer=f,a=e.createGain(),a.gain.value=.35,a.connect(i).connect(t),o=e.createBuffer(1,e.sampleRate,e.sampleRate);let p=o.getChannelData(0);for(let e=0;e<p.length;e++)p[e]=Math.random()*2-1}function b(t,n,r,i,o,s=`sine`,c={}){if(!e||h>28)return;h++;let l=e.createOscillator();l.type=s,l.frequency.setValueAtTime(r,n),c.glide&&l.frequency.exponentialRampToValueAtTime(Math.max(20,r*c.glide),n+i);let u=null;if(c.fm){u=e.createOscillator();let t=e.createGain();u.frequency.value=r*(c.fmRatio??2),t.gain.setValueAtTime(r*c.fm,n),t.gain.exponentialRampToValueAtTime(1,n+i),u.connect(t).connect(l.frequency),u.start(n),u.stop(n+i+.05)}let d=e.createGain(),f=c.attack??.004;d.gain.setValueAtTime(0,n),d.gain.linearRampToValueAtTime(o,n+f),d.gain.exponentialRampToValueAtTime(1e-4,n+i);let p=l.connect(d);if(c.cutoff){let t=e.createBiquadFilter();t.type=`lowpass`,t.frequency.value=c.cutoff,p=d.connect(t)}if(p.connect(t),c.reverb){let t=e.createGain();t.gain.value=c.reverb,p.connect(t).connect(a)}l.start(n),l.stop(n+i+.05),l.onended=()=>{h--,d.disconnect()}}function x(t,n,r,i,a,s=1,c=`bandpass`,l=1){if(!e||h>28)return;h++;let u=e.createBufferSource();u.buffer=o,u.playbackRate.value=.8+Math.random()*.4;let d=e.createBiquadFilter();d.type=c,d.frequency.setValueAtTime(a,n),l!==1&&d.frequency.exponentialRampToValueAtTime(Math.max(30,a*l),n+r),d.Q.value=s;let f=e.createGain();f.gain.setValueAtTime(i,n),f.gain.exponentialRampToValueAtTime(1e-4,n+r),u.connect(d).connect(f).connect(t),u.start(n,Math.random()*.5),u.stop(n+r+.02),u.onended=()=>{h--,f.disconnect()}}function S(e,t,r,i,a){let o=a?.12:.35,s=n;switch(e){case 0:b(s,t,r*2,o*1.6,i,`sine`,{fm:3,fmRatio:3.5,reverb:.5});break;case 1:x(s,t,o,i*.9,1800,.8,`highpass`),b(s,t,r*.5,o,i*.8,`sine`,{glide:.5});break;case 2:b(s,t,r*2,o*.8,i*.5,`square`,{glide:.35,cutoff:3200});break;case 3:b(s,t,r*.75,o*.7,i*1.1,`triangle`,{glide:.6}),x(s,t,.05,i*.5,900,2);break;case 4:b(s,t,r*4,o*.6,i*.6,`triangle`,{glide:.97});break;case 5:b(s,t,r*1.5,o*1.4,i*.9,`sine`,{glide:.25,reverb:.4});break;case 6:b(s,t,r*3,o,i*.35,`sawtooth`,{cutoff:4200,attack:.01});break;default:x(s,t,o,i*.8,600,6,`bandpass`,2.5)}}function C(e,t){let n=Math.floor(t/16),i=t%16,a=ni[Math.floor(n/2)%ni.length],o=Q(a),s=r;if(i===0&&n%2==0){let t=60/84*8;for(let n of[0,2,4]){let r=$(12+Q(a+n));b(s,e,r,t,.05,`sawtooth`,{attack:1.2,cutoff:500+l*900,reverb:.6}),b(s,e,r*1.006,t,.04,`sawtooth`,{attack:1.4,cutoff:600,reverb:.4})}b(s,e,$(o),t,.12,`sine`,{attack:.6})}if(l>.05&&((i===0||i===8||l>.6&&i===10)&&b(s,e,90,.35,.5*(.5+l*.5),`sine`,{glide:.4}),i%4==2&&l>.25&&x(s,e,.06,.08+l*.06,7e3,1,`highpass`),l>.5&&i%2==1&&x(s,e,.03,.04*l,9e3,1,`highpass`),i===12&&l>.4&&x(s,e,.18,.12,1500,.7)),l>.55&&i%2==0){let t=[0,2,4,7,4,2,0,4];b(s,e,$(24+Q(a+t[i/2%t.length])),.25,.05,`triangle`,{reverb:.5})}u&&(i===4||i===6||i===14)&&b(s,e,i===14?110:130,.3,.3,`sine`,{glide:.5}),i===6&&(n%4==1||n%4==3)&&b(s,e,$(36+Q(a+n%3*2)),1.6,.04,`sine`,{fm:1.5,fmRatio:3.5,reverb:.8})}function w(){if(e&&d)for(;p<e.currentTime+.15;)C(p,m),m++,p+=.17857142857142858}return{unlock(){if(typeof window<`u`){if(!e){let t=window.AudioContext??window.webkitAudioContext;if(!t)return;e=new t({latencyHint:`interactive`}),y(e)}e.state===`suspended`&&e.resume()}},sfx(t,r={}){if(!e||!c||e.state!==`running`)return;let i=e.currentTime+.005,a=r.rune??0,o=r.tier??1,s=n;switch(t){case`summon`:S(a,i,$(24+Q(a%7)),.35,!1),b(s,i,$(31),.2,.08,`sine`,{reverb:.4});break;case`merge`:{let e=ri(o);b(s,i,e,.6,.22,`sine`,{fm:1.2,fmRatio:2,reverb:.6}),b(s,i+.06,e*1.5,.5,.14,`sine`,{reverb:.6}),b(s,i+.12,e*2,.7,.08,`triangle`,{reverb:.7});break}case`reject`:b(s,i,140,.15,.3,`square`,{glide:.7,cutoff:800});break;case`overload`:for(let e of[0,7,12,16,19])b(s,i,$(12+e),2.2,.12,`sawtooth`,{cutoff:2500,reverb:.8,attack:.02});b(s,i,55,1.2,.7,`sine`,{glide:.4}),x(s,i,1.2,.5,400,.5,`lowpass`,.2);break;case`sell`:b(s,i,$(31),.2,.15,`triangle`,{glide:.6}),b(s,i+.05,$(26),.25,.12,`triangle`);break;case`move`:x(s,i,.12,.15,1400,1.5,`bandpass`,2);break;case`fire`:if(!g(a,e.currentTime))return;S(a,i,$(24+Q(a%7)),.08,!0);break;case`kill`:if(!_(0,e.currentTime))return;b(s,i,1800+Math.random()*1200,.18,.06,`sine`,{fm:2,fmRatio:2.7,reverb:.3}),x(s,i,.08,.08,6e3,2);break;case`bossKill`:b(s,i,60,1.4,.8,`sine`,{glide:.3}),x(s,i,1,.5,3e3,.6,`bandpass`,.15);for(let e of[0,3,7,10])b(s,i+.1,$(24+e),1.8,.08,`sine`,{fm:1.5,reverb:.8});break;case`leak`:b(s,i,98,.9,.5,`sine`,{fm:.6,fmRatio:1.41,reverb:.6}),b(s,i,104,.9,.25,`triangle`,{glide:.8});break;case`waveStart`:for(let e=0;e<10;e++)x(s,i+e*.045,.08,.06+e*.03,220+e*25,1.4,`bandpass`);b(s,i+.45,65,.6,.6,`sine`,{glide:.5});break;case`waveClear`:for(let e=0;e<4;e++)b(s,i+e*.07,$(24+Q([0,2,4,7][e])),.6,.12,`triangle`,{reverb:.6});break;case`bossSpawn`:b(s,i,55,2,.7,`sawtooth`,{cutoff:300,attack:.05}),b(s,i,82.4,2,.35,`sawtooth`,{cutoff:400,attack:.3,reverb:.5}),x(s,i,1.5,.3,200,.5,`lowpass`);break;case`synergy`:b(s,i,$(29),.5,.12,`sine`,{reverb:.6}),b(s,i+.08,$(36),.6,.12,`sine`,{reverb:.6});break;case`pool`:if(!v(0,e.currentTime))return;b(s,i,180,.7,.22,`sine`,{glide:.35,fm:.8,fmRatio:1.5,reverb:.5}),x(s,i,.5,.12,320,3,`bandpass`,5);break;case`pulse`:x(s,i,.8,.4,300,.7,`lowpass`,8),b(s,i,$(19),1,.2,`sine`,{fm:2,reverb:.7});break;case`resonance`:for(let e=0;e<6;e++)b(s,i+e*.04,$(36+Q(e*2)),.6,.06,`sine`,{reverb:.7});break;case`hasten`:x(s,i,.4,.3,500,1,`bandpass`,6);break;case`defeat`:for(let e=0;e<4;e++)b(s,i+e*.25,$(24-Q(e*2)),1,.15,`triangle`,{reverb:.8});break;case`victory`:for(let e=0;e<6;e++)b(s,i+e*.1,$(24+Q(e*2)),.9,.12,`triangle`,{reverb:.7});break;case`click`:b(s,i,1200,.05,.08,`sine`);break;case`select`:b(s,i,$(31+Q(a%7)),.12,.08,`sine`,{reverb:.2})}},setIntensity(e){l=Math.max(0,Math.min(1,e))},setBoss(e){u=e},startMusic(){e&&!d&&(d=!0,p=e.currentTime+.1,m=0,f=window.setInterval(w,50),w())},stopMusic(){d=!1,window.clearInterval(f)},setMusicOn(t){s=t,e&&r.gain.setTargetAtTime(t?.5:0,e.currentTime,.1)},setSfxOn(t){c=t,e&&n.gain.setTargetAtTime(t?.8:0,e.currentTime,.05)},suspend(){e&&e.state===`running`&&e.suspend()},resume(){e&&e.state===`suspended`&&e.resume()}}}function oi(e,t=window){let n=()=>e.unlock(),r={capture:!0,passive:!0};return t.addEventListener(`pointerdown`,n,r),t.addEventListener(`keydown`,n,r),t.addEventListener(`touchend`,n,r),()=>{t.removeEventListener(`pointerdown`,n,r),t.removeEventListener(`keydown`,n,r),t.removeEventListener(`touchend`,n,r)}}document.documentElement.lang=Zn;var si=e=>e.preventDefault();document.addEventListener(`gesturestart`,si,{passive:!1}),document.addEventListener(`dblclick`,si,{passive:!1});var ci=ai();oi(ci),(0,i.createRoot)(document.getElementById(`root`)).render((0,Z.jsx)(r.StrictMode,{children:(0,Z.jsx)($r,{audio:ci})}));