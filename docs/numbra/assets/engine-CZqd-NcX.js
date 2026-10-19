import{n as e,r as t,t as n}from"./index-CCn-iq_z.js";var r=1024;function i(e,t,n,r,i,a,o){if(t<0||n<0||t>=16||n>=16)return;let s=(n*16+t)*4;e[s]=Math.max(e[s],r),e[s+1]=Math.max(e[s+1],i),e[s+2]=Math.max(e[s+2],a),e[s+3]=Math.max(e[s+3],o)}function a(t,n,r){if(n.fill(0),t.kind===`sudoku`){let a=t.selected>=0?t.grid[t.selected]:0;for(let o=0;o<81;o++){let s=o%9,c=o/9|0,l=0;for(let n of e[o])t.solvedUnits[n]&&(l=255);t.done&&(l=255);let u=0;o===t.selected?u=255:a&&t.grid[o]===a&&(u=120);let d=r.showErrors&&t.grid[o]&&t.grid[o]!==t.solution[o]?255:0;i(n,s,c,l,u,d,255)}if(t.beam)for(let e of t.beam.path)i(n,e%9,e/9|0,0,200,t.beam.kind===`error`?160:0,255);return{cols:9,rows:9}}if(t.kind===`tenlight`){let e=t.board.cells.length/8;for(let e=0;e<t.board.cells.length;e++){let r=e%8,a=e/8|0,o=t.board.cells[e],s=t.selected>=0?t.board.cells[t.selected]:0,c=o&&s&&(o===s||o+s===10)&&e!==t.selected;i(n,r,a,t.done?255:0,e===t.selected?255:c?90:0,0,o?255:60)}if(t.beam)for(let e of t.beam.path)i(n,e%8,e/8|0,0,200,0,255);return{cols:8,rows:Math.max(e,1)}}for(let e=0;e<81;e++)i(n,e%9,e/9|0,t.done?255:t.revealed[e]?110:0,e===t.selected?255:t.flags[e]?70:0,t.exposed[e]?255:0,255);if(t.beam)for(let e of t.beam.path)i(n,e%9,e/9|0,0,200,t.beam.kind===`error`?160:0,255);return{cols:9,rows:9}}function o(e){if(e.done)return 1;if(e.kind===`sudoku`){let t=0;for(let n=0;n<81;n++)e.grid[n]===e.solution[n]&&t++;return t/81}if(e.kind===`tenlight`){let t=0;for(let n of e.board.cells)n&&t++;return 1-Math.min(1,t/e.initialCount)}let t=0;for(let n=0;n<81;n++)e.revealed[n]&&t++;return t/e.safeTotal}function s(e){return t[e]}var c=.5;function l(){return{scale:1,avgMs:16.7,cooldown:0}}function u(e,t){return Math.max(.5,Math.min(e||1,2)*t.scale)}function d(e,t){return!(t>0)||t>250?!1:(e.avgMs+=(t-e.avgMs)*.05,e.cooldown>0?(e.cooldown--,!1):e.avgMs>22&&e.scale>.5?(e.scale=Math.max(c,e.scale-.15),e.cooldown=90,!0):e.avgMs<13&&e.scale<1&&(e.scale=Math.min(1,e.scale+.1),e.cooldown=180,!0))}var f=`#version 300 es
// Attribute-less fullscreen triangle: draw with gl.drawArrays(gl.TRIANGLES, 0, 3) and an empty VAO.
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}
`,p=`#version 300 es
precision highp float;

// Ink paper under a lantern. One fullscreen pass: grain + slow warmth, a flickering lantern above the board, the
// light mask (one texel per cell: R solved glow, G selection/highlight, B error, A presence) bled into a soft
// bloom, the Deduction Beam as a glowing polyline with a travelling head, a board-wide flare, vignette, tone
// curve and dither.

uniform vec2 u_res;        // drawing-buffer size in px
uniform float u_time;      // seconds
uniform vec4 u_board;      // x, y (bottom-left corner, buffer px), width, height
uniform vec2 u_grid;       // columns, rows
uniform sampler2D u_light; // 16x16 RGBA, row 0 = top row of the board
uniform vec2 u_beam[8];    // polyline points, buffer px
uniform int u_beamN;       // points in use (0 = no beam)
uniform float u_beamT;     // 0..1 travel of the head along the polyline
uniform float u_beamKind;  // 0 = hint (amber/teal), 1 = error (rose)
uniform vec3 u_lantern;    // x, y (buffer px), intensity
uniform float u_flash;     // 0..1 board flare (board done)
uniform vec2 u_shake;      // offset in buffer px
uniform float u_quality;   // 1 = full, 0 = low (fewer octaves)
uniform vec3 u_amber;
uniform vec3 u_teal;
uniform vec3 u_rose;

out vec4 outColor;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

const mat2 ROT = mat2(1.6, 1.2, -1.2, 1.6);

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  int octaves = u_quality > 0.5 ? 3 : 2;
  for (int i = 0; i < 3; i++) {
    if (i >= octaves) break;
    v += a * noise(p);
    p = ROT * p;
    a *= 0.5;
  }
  return v;
}

// distance from p to segment ab, and the parameter along it
vec2 segment(vec2 p, vec2 a, vec2 b) {
  vec2 ab = b - a;
  float len2 = max(dot(ab, ab), 1e-4);
  float h = clamp(dot(p - a, ab) / len2, 0.0, 1.0);
  return vec2(length(p - a - ab * h), h);
}

void main() {
  vec2 frag = gl_FragCoord.xy + u_shake;
  float unit = min(u_res.x, u_res.y);
  vec2 uv = (frag - 0.5 * u_res) / unit;

  // ---- paper: ink with grain and a slow warm breath
  vec3 col = vec3(0.039, 0.043, 0.071);
  float grain = hash(floor(frag * 0.5)) - 0.5;
  col += grain * 0.022;
  float warmth = fbm(uv * 1.8 + vec2(u_time * 0.02, -u_time * 0.013));
  col += u_amber * warmth * warmth * 0.09;

  // ---- lantern above the board
  vec2 toL = frag - u_lantern.xy;
  float dL = length(toL) / unit;
  float flicker = 0.96 + 0.025 * sin(u_time * 3.7) + 0.015 * sin(u_time * 9.1 + 1.3);
  float lantern = exp(-dL * 2.6) * u_lantern.z * flicker;
  col += u_amber * lantern * 0.42;
  col += vec3(1.0, 0.92, 0.78) * exp(-dL * 14.0) * u_lantern.z * 0.35; // the flame itself

  // ---- light mask through the board rect, bled one cell outward
  vec2 cellSize = u_board.zw / max(u_grid, vec2(1.0));
  float fx = (frag.x - u_board.x) / cellSize.x;
  float fy = (u_board.y + u_board.w - frag.y) / cellSize.y; // row 0 at the top
  vec2 cellUv = vec2(fx, fy) / 16.0;
  float inBoard = step(-1.0, fx) * step(fx, u_grid.x + 1.0) * step(-1.0, fy) * step(fy, u_grid.y + 1.0);
  vec4 L = texture(u_light, cellUv);
  vec2 tap = 0.85 / 16.0 * vec2(1.0, 0.0);
  vec2 tapY = 0.85 / 16.0 * vec2(0.0, 1.0);
  vec4 bleed = texture(u_light, cellUv + tap) + texture(u_light, cellUv - tap) + texture(u_light, cellUv + tapY) + texture(u_light, cellUv - tapY);
  vec4 light = (L * 0.6 + bleed * 0.14) * inBoard;
  float breathe = 0.85 + 0.15 * sin(u_time * 1.7 + fx * 0.9 + fy * 0.7);
  col += u_amber * light.r * 0.62 * breathe;
  col += u_teal * light.g * 0.5;
  col += u_rose * light.b * 0.55;
  // the paper of the board itself is a touch lighter where cells exist
  col += vec3(0.035, 0.034, 0.03) * light.a;

  // ---- board flare when a board is done
  float onBoard = step(0.0, fx) * step(fx, u_grid.x) * step(0.0, fy) * step(fy, u_grid.y);
  col += u_amber * u_flash * (0.35 + 0.25 * onBoard) * inBoard;

  // ---- Deduction Beam: glowing polyline with a travelling head
  if (u_beamN >= 1) {
    float total = 0.0;
    for (int i = 0; i < 7; i++) {
      if (i + 1 >= u_beamN) break;
      total += length(u_beam[i + 1] - u_beam[i]);
    }
    float head = u_beamT * max(total, 1.0);
    float glow = 0.0;
    float dot = 0.0;
    float acc = 0.0;
    vec3 beamCol = mix(u_amber, u_rose, u_beamKind);
    vec3 fringe = mix(u_teal, u_rose, u_beamKind);
    if (u_beamN == 1) {
      float d = length(frag - u_beam[0]) / unit;
      dot = exp(-d * 60.0) * 1.2 + exp(-d * 18.0) * 0.5;
    }
    for (int i = 0; i < 7; i++) {
      if (i + 1 >= u_beamN) break;
      vec2 a = u_beam[i];
      vec2 b = u_beam[i + 1];
      float segLen = length(b - a);
      vec2 sd = segment(frag, a, b);
      float s = acc + sd.y * segLen;          // arc position of the closest point
      float lit = smoothstep(head + unit * 0.01, head - unit * 0.02, s); // only behind the head
      float trail = exp(-(head - s) / max(total * 0.9, 1.0));
      float w = sd.x / unit;
      glow += lit * (exp(-w * 90.0) * 0.9 + exp(-w * 28.0) * 0.35) * (0.45 + 0.55 * trail);
      acc += segLen;
    }
    // the head
    float remain = head;
    vec2 hp = u_beam[0];
    for (int i = 0; i < 7; i++) {
      if (i + 1 >= u_beamN) break;
      float segLen = length(u_beam[i + 1] - u_beam[i]);
      if (remain <= segLen) {
        hp = mix(u_beam[i], u_beam[i + 1], remain / max(segLen, 1e-3));
        break;
      }
      remain -= segLen;
      hp = u_beam[i + 1];
    }
    float dh = length(frag - hp) / unit;
    dot += exp(-dh * 70.0) * 1.4 + exp(-dh * 20.0) * 0.45;
    col += beamCol * glow * 0.9 + fringe * glow * 0.25 + mix(beamCol, vec3(1.0), 0.5) * dot;
  }

  // ---- vignette (normalised on the short axis), tone curve, dither
  col *= 1.0 - 0.38 * dot(uv, uv);
  col = 1.0 - exp(-col * 1.3);
  col += (hash(gl_FragCoord.xy + fract(u_time)) - 0.5) / 255.0;
  outColor = vec4(col, 1.0);
}
`,m=`#version 300 es
layout(location = 0) in vec4 a_posSizeLife; // xy = css px (top-left origin), z = size css px, w = life 0..1
layout(location = 1) in vec3 a_color;

uniform vec2 u_cssSize;
uniform float u_dpr;

out vec3 v_color;
out float v_life;

void main() {
  vec2 clip = a_posSizeLife.xy / u_cssSize * 2.0 - 1.0;
  gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
  float life = a_posSizeLife.w;
  gl_PointSize = a_posSizeLife.z * u_dpr * (0.35 + 0.65 * life);
  v_color = a_color;
  v_life = life;
}
`,h=`#version 300 es
precision mediump float;

in vec3 v_color;
in float v_life;
out vec4 outColor;

void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = pow(max(1.0 - d, 0.0), 2.0) * v_life;
  outColor = vec4(v_color * a, a); // premultiplied, drawn with additive blending
}
`;function g(e){return e.getContext(`webgl2`,{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:`high-performance`,desynchronized:!0})}function _(e,t,n){let r=e.createShader(t);if(!r)throw Error(`createShader failed`);return e.shaderSource(r,n),e.compileShader(r),r}function v(e,t,n,r){let i=e.getExtension(`KHR_parallel_shader_compile`),a=_(e,e.VERTEX_SHADER,t),o=_(e,e.FRAGMENT_SHADER,n),s=e.createProgram();e.attachShader(s,a),e.attachShader(s,o),e.linkProgram(s);let c=null;return{program:s,poll:()=>{if(c)return c;if(i&&!e.getProgramParameter(s,i.COMPLETION_STATUS_KHR))return null;if(!e.getProgramParameter(s,e.LINK_STATUS)&&!e.isContextLost()){let t=[e.getShaderInfoLog(a),e.getShaderInfoLog(o),e.getProgramInfoLog(s)].filter(Boolean).join(`
`);throw Error(`WebGL program failed to build:\n${t}`)}e.deleteShader(a),e.deleteShader(o);let t={};for(let n of r)t[n]=e.getUniformLocation(s,n);return c={program:s,uniforms:t},c}}}function y(e){let t=e.replace(`#`,``),n=t.length===3?t.replace(/./g,e=>e+e):t,r=Number.parseInt(n,16);return n.length!==6||Number.isNaN(r)?[1,1,1]:[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}function b(e){return{capacity:e,count:0,x:new Float32Array(e),y:new Float32Array(e),vx:new Float32Array(e),vy:new Float32Array(e),life:new Float32Array(e),ttl:new Float32Array(e),size:new Float32Array(e),rgb:new Float32Array(e*3),gpu:new Float32Array(e*7)}}function x(e,t,n,r,i,a,o=Math.random){for(let s=0;s<r;s++){let r;r=e.count<e.capacity?e.count++:Math.floor(o()*e.capacity);let s=o()*Math.PI*2,c=i*(.35+o()*.65);e.x[r]=t,e.y[r]=n,e.vx[r]=Math.cos(s)*c,e.vy[r]=Math.sin(s)*c,e.ttl[r]=.45+o()*.55,e.life[r]=e.ttl[r],e.size[r]=6+o()*16;let l=.75+o()*.25;e.rgb[r*3]=Math.min(1,a[0]*l+.15),e.rgb[r*3+1]=Math.min(1,a[1]*l+.15),e.rgb[r*3+2]=Math.min(1,a[2]*l+.15)}}function S(e,t,n=2.2,r=260){let i=Math.exp(-n*t),a=0;for(;a<e.count;){if(e.life[a]-=t,e.life[a]<=0){let t=--e.count;a!==t&&(e.x[a]=e.x[t],e.y[a]=e.y[t],e.vx[a]=e.vx[t],e.vy[a]=e.vy[t],e.life[a]=e.life[t],e.ttl[a]=e.ttl[t],e.size[a]=e.size[t],e.rgb[a*3]=e.rgb[t*3],e.rgb[a*3+1]=e.rgb[t*3+1],e.rgb[a*3+2]=e.rgb[t*3+2]);continue}e.vx[a]*=i,e.vy[a]=e.vy[a]*i+r*t,e.x[a]+=e.vx[a]*t,e.y[a]+=e.vy[a]*t;let n=a*7;e.gpu[n]=e.x[a],e.gpu[n+1]=e.y[a],e.gpu[n+2]=e.size[a],e.gpu[n+3]=e.life[a]/e.ttl[a],e.gpu[n+4]=e.rgb[a*3],e.gpu[n+5]=e.rgb[a*3+1],e.gpu[n+6]=e.rgb[a*3+2],a++}return e.count}var C=[`u_res`,`u_time`,`u_board`,`u_grid`,`u_light`,`u_beam`,`u_beamN`,`u_beamT`,`u_beamKind`,`u_lantern`,`u_flash`,`u_shake`,`u_quality`,`u_amber`,`u_teal`,`u_rose`],w=[`u_cssSize`,`u_dpr`],T=`#ffb454`,E=`#3ec1c9`,D=`#ff6b7a`,O=`#0a0b12`;function k(){return{time:0,dt:0,boardX:0,boardY:0,boardW:1,boardH:1,cols:9,rows:9,lanternX:0,lanternY:0,lantern:.8,beam:new Float32Array(16),beamN:0,beamT:0,beamKind:0,flash:0,shakeX:0,shakeY:0,quality:1}}function A(e,t=384){let n=g(e);if(!n)return null;let r=y(T),i=y(E),a=y(D),o=y(O),s=b(t),c=new Float32Array(16),l=1,u=1,d=1,_=null,k=null,A=null,j=()=>null,M=()=>null,N=[],P=null,F=null,I=null,L=null;function R(){k=A=null,e.dataset.ready=``;let t=v(n,f,p,C),r=v(n,m,h,w);j=t.poll,M=r.poll,N=[t.program,r.program],P=n.createVertexArray(),F=n.createVertexArray(),I=n.createBuffer(),n.bindVertexArray(F),n.bindBuffer(n.ARRAY_BUFFER,I),n.bufferData(n.ARRAY_BUFFER,s.gpu.byteLength,n.DYNAMIC_DRAW),n.enableVertexAttribArray(0),n.vertexAttribPointer(0,4,n.FLOAT,!1,28,0),n.enableVertexAttribArray(1),n.vertexAttribPointer(1,3,n.FLOAT,!1,28,16),n.bindVertexArray(null),L=n.createTexture(),n.bindTexture(n.TEXTURE_2D,L),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,16,16,0,n.RGBA,n.UNSIGNED_BYTE,_??new Uint8Array(1024)),n.bindTexture(n.TEXTURE_2D,null)}function z(){if(k&&A)return!0;let t=j(),o=M();return!t||!o?!1:(n.useProgram(t.program),n.uniform3fv(t.uniforms.u_amber,r),n.uniform3fv(t.uniforms.u_teal,i),n.uniform3fv(t.uniforms.u_rose,a),n.uniform1i(t.uniforms.u_light,0),k=t,A=o,e.dataset.ready=`1`,!0)}function B(){if(!n.isContextLost()){for(let e of N)n.deleteProgram(e);N=[],n.deleteVertexArray(P),n.deleteVertexArray(F),n.deleteBuffer(I),n.deleteTexture(L),k=A=null}}let V=e=>{e.preventDefault(),k=A=null},H=()=>R();return e.addEventListener(`webglcontextlost`,V),e.addEventListener(`webglcontextrestored`,H),R(),{get ready(){return k!==null&&A!==null},resize(t,n,r){l=Math.max(1,t),u=Math.max(1,n),d=r;let i=Math.max(1,Math.round(l*d)),a=Math.max(1,Math.round(u*d));(e.width!==i||e.height!==a)&&(e.width=i,e.height=a)},uploadLights(e){_=e,!n.isContextLost()&&L&&(n.bindTexture(n.TEXTURE_2D,L),n.texSubImage2D(n.TEXTURE_2D,0,0,0,16,16,n.RGBA,n.UNSIGNED_BYTE,e),n.bindTexture(n.TEXTURE_2D,null))},render(t){if(n.isContextLost())return;if(!z()||!k||!A){n.clearColor(o[0],o[1],o[2],1),n.clear(n.COLOR_BUFFER_BIT);return}let r=e.width,i=e.height,a=r/l,d=i/u;n.viewport(0,0,r,i),n.disable(n.BLEND),n.useProgram(k.program),n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,L),n.uniform2f(k.uniforms.u_res,r,i),n.uniform1f(k.uniforms.u_time,t.time),n.uniform4f(k.uniforms.u_board,t.boardX*a,i-(t.boardY+t.boardH)*d,t.boardW*a,t.boardH*d),n.uniform2f(k.uniforms.u_grid,t.cols,t.rows);for(let e=0;e<8;e++)c[e*2]=t.beam[e*2]*a,c[e*2+1]=i-t.beam[e*2+1]*d;n.uniform2fv(k.uniforms.u_beam,c),n.uniform1i(k.uniforms.u_beamN,t.beamN),n.uniform1f(k.uniforms.u_beamT,t.beamT),n.uniform1f(k.uniforms.u_beamKind,t.beamKind),n.uniform3f(k.uniforms.u_lantern,t.lanternX*a,i-t.lanternY*d,t.lantern),n.uniform1f(k.uniforms.u_flash,t.flash),n.uniform2f(k.uniforms.u_shake,t.shakeX*a,-t.shakeY*d),n.uniform1f(k.uniforms.u_quality,t.quality),n.bindVertexArray(P),n.drawArrays(n.TRIANGLES,0,3);let f=S(s,t.dt,2.4,140);f>0&&(n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE),n.useProgram(A.program),n.uniform2f(A.uniforms.u_cssSize,l,u),n.uniform1f(A.uniforms.u_dpr,a),n.bindVertexArray(F),n.bindBuffer(n.ARRAY_BUFFER,I),n.bufferSubData(n.ARRAY_BUFFER,0,s.gpu,0,f*7),n.drawArrays(n.POINTS,0,f)),n.bindVertexArray(null)},burst(e,t,n,r,i=260){x(s,e,t,n,i,r)},dispose(){e.removeEventListener(`webglcontextlost`,V),e.removeEventListener(`webglcontextrestored`,H),B()}}}var j=.9,M=.18,N=class{host;renderer;quality=l();frame=k();lights=new Uint8Array(r);amber=y(T);teal=y(E);rose=y(D);ro;boardEl=null;board={x:0,y:0,w:1,h:1};canvasRect={left:0,top:0};raf=0;last=0;clock=0;lastRev=-1;lastSession=null;lightsDirty=!0;layoutDirty=!0;layoutCountdown=0;beamRef=null;beamStart=0;flash=0;shake=0;shakeT=0;fpsFrames=0;fpsTime=0;disposed=!1;padOn=!1;constructor(e){this.host=e;let t=e.canvas;this.renderer=A(t),t.dataset.gl=this.renderer?`webgl2`:`none`,this.ro=new ResizeObserver(()=>{this.layoutDirty=!0,this.applySize()}),this.ro.observe(t),this.applySize(),window.addEventListener(`scroll`,this.markLayout,!0),document.addEventListener(`visibilitychange`,this.onVisibility),n.onReady(()=>this.syncAudio()),this.loop()}get hasGl(){return this.renderer!==null}attachBoard(e){this.boardEl!==e&&(this.boardEl&&this.ro.unobserve(this.boardEl),this.boardEl=e,e&&this.ro.observe(e),this.layoutDirty=!0,this.lightsDirty=!0)}notify(){let e=this.host.session();if(this.lightsDirty=!0,this.layoutCountdown=2,!e)return;let t=e.events.splice(0);for(let n of t)this.react(e,n);this.syncAudio()}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),this.ro.disconnect(),window.removeEventListener(`scroll`,this.markLayout,!0),document.removeEventListener(`visibilitychange`,this.onVisibility),n.get()?.stopPad(),this.renderer?.dispose(),this.renderer=null}react(e,t){let r=n.get(),i=this.host.settings().haptics,a=(e,t)=>r?.play(e,t),o=e=>{i&&navigator.vibrate?.(e)};switch(t.t){case`place`:{a(`pluck`,{digit:t.d});let n=this.cellCenter(e,t.i);this.renderer?.burst(n.x,n.y,6,this.amber,120),o(6);break}case`wrong`:a(`thud`),this.kick(1),o(14);break;case`erase`:a(`tick`);break;case`note`:a(`click`);break;case`unit`:a(`chord`);for(let n of s(t.unit)){let t=this.cellCenter(e,n);this.renderer?.burst(t.x,t.y,3,this.amber,90)}o(10);break;case`clear`:{a(`ting`,{combo:t.combo});let n=this.cellCenter(e,t.a),r=this.cellCenter(e,t.b);this.renderer?.burst(n.x,n.y,14,this.amber,220),this.renderer?.burst(r.x,r.y,14,this.amber,220),o(6);break}case`fold`:a(`sweep`);break;case`add`:a(`whoosh`);break;case`reveal`:a(`tick`);break;case`flag`:a(`click`),o(6);break;case`spark`:{a(`ember`);let n=this.cellCenter(e,t.i);this.renderer?.burst(n.x,n.y,26,this.rose,240),this.kick(1.4),o(20);break}case`beam`:a(`beam`);break;case`stuck`:a(`thud`);break;case`undo`:a(`click`);break;case`select`:break;case`done`:a(`bell`),r?.play(`fanfare`),this.flash=1;for(let e=0;e<8;e++){let t=this.board.x+this.board.w*(e+.5)/8;this.renderer?.burst(t,this.board.y+this.board.h*.5,10,e%2?this.teal:this.amber,320)}o(30)}}kick(e){this.shake=e,this.shakeT=M}cellCenter(e,t){let n=e.kind===`tenlight`?8:9,r=e.kind===`tenlight`?Math.max(1,e.board.cells.length/8):9,i=this.board.w/n,a=e.kind===`tenlight`?i:this.board.h/r;return{x:this.board.x+(t%n+.5)*i,y:this.board.y+((t/n|0)+.5)*a}}markLayout=()=>{this.layoutDirty=!0};applySize(){let e=this.host.canvas,t=e.clientWidth||1,n=e.clientHeight||1,r=e.getBoundingClientRect();this.canvasRect={left:r.left,top:r.top},this.renderer?.resize(t,n,u(window.devicePixelRatio,this.quality)),this.layoutDirty=!0}measureBoard(){this.layoutDirty=!1;let e=this.boardEl;if(!e){let e=this.host.canvas,t=e.clientWidth||1;this.board={x:t*.1,y:(e.clientHeight||1)*.3,w:t*.8,h:t*.8};return}let t=e.getBoundingClientRect();this.board={x:t.left-this.canvasRect.left,y:t.top-this.canvasRect.top,w:Math.max(1,t.width),h:Math.max(1,t.height)}}loop=()=>{this.disposed||(this.raf=requestAnimationFrame(this.tick))};tick=e=>{this.loop();let t=this.last?e-this.last:16.7;this.last=e;let r=Math.min(t,100)/1e3;this.clock+=r,d(this.quality,t)&&this.applySize(),this.layoutCountdown>0&&--this.layoutCountdown===0&&(this.layoutDirty=!0),this.layoutDirty&&this.measureBoard();let i=this.host.session(),s=this.frame;if(s.time=this.clock,s.dt=r,s.quality=this.quality.scale<.75?0:1,s.boardX=this.board.x,s.boardY=this.board.y,s.boardW=this.board.w,s.boardH=this.board.h,s.lanternX=this.board.x+this.board.w/2,s.lanternY=Math.max(24,this.board.y-this.board.w*.3),i!==this.lastSession&&(this.lastSession=i,this.lastRev=-1,this.beamRef=null,this.flash=0),i){if(i.rev!==this.lastRev||this.lightsDirty){this.lastRev=i.rev,this.lightsDirty=!1;let e=a(i,this.lights,{showErrors:this.host.settings().showErrors});s.cols=e.cols,s.rows=e.rows,this.renderer?.uploadLights(this.lights);let t=o(i);s.lantern=.75+t*.55,n.get()?.setIntensity(t)}if(i.beam!==this.beamRef&&(this.beamRef=i.beam,this.beamStart=this.clock),i.beam){let e=Math.min(i.beam.path.length,8);for(let t=0;t<e;t++){let e=this.cellCenter(i,i.beam.path[t]);s.beam[t*2]=e.x,s.beam[t*2+1]=e.y}s.beamN=e;let t=Math.min(1,(this.clock-this.beamStart)/j);s.beamT=1-(1-t)*(1-t),s.beamKind=+(i.beam.kind===`error`)}else s.beamN=0}else s.beamN=0,s.lantern=.8+.05*Math.sin(this.clock*.7),this.lastRev!==-2&&(this.lastRev=-2,this.lights.fill(0),this.renderer?.uploadLights(this.lights));if(this.flash=Math.max(0,this.flash-r*1.6),s.flash=this.flash,this.shakeT>0){this.shakeT-=r;let e=this.shakeT/M*this.shake*6;s.shakeX=Math.sin(this.clock*95)*e,s.shakeY=Math.cos(this.clock*71)*e}else s.shakeX=0,s.shakeY=0;if(this.renderer)try{this.renderer.render(s)}catch(e){console.error(e),this.renderer.dispose(),this.renderer=null,this.host.canvas.dataset.gl=`none`}this.host.onFps&&this.measureFps(r)};syncAudio(){let e=n.get();if(!e)return;let t=this.host.settings();e.setPrefs({sound:t.sound,music:t.music});let r=this.host.session()!==null&&!this.host.session().done;r&&t.music&&!this.padOn?(e.startPad(),this.padOn=!0):(!r||!t.music)&&this.padOn&&(e.stopPad(),this.padOn=!1)}sessionChanged(){this.lightsDirty=!0,this.layoutDirty=!0,this.syncAudio()}onVisibility=()=>{document.hidden?(cancelAnimationFrame(this.raf),n.get()?.suspend()):(this.last=0,n.get()?.resume(),cancelAnimationFrame(this.raf),this.loop())};measureFps(e){this.fpsFrames++,this.fpsTime+=e,this.fpsTime>=1&&(this.host.onFps?.(Math.round(this.fpsFrames/this.fpsTime)),this.fpsFrames=0,this.fpsTime=0)}};export{N as Engine};