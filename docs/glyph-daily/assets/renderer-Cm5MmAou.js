import{l as e,u as t}from"./index-K9EcXivC.js";var n=`#version 300 es
// Attribute-less fullscreen triangle: draw with gl.drawArrays(gl.TRIANGLES, 0, 3) and an empty VAO.
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}
`,r=`#version 300 es
precision highp float;

// Ink chamber: domain-warped smoke, slow light shafts, typing impulses, glowing rune bodies under the DOM
// letters (Lit = solid amber core, Halo = violet ring, Ash = dim slate), shockwave distortion, grade, dither.

uniform vec2 u_res;        // drawing-buffer px
uniform float u_scale;     // buffer px per css px
uniform float u_time;
uniform float u_tension;   // 0..1
uniform float u_flash;     // 0..1 global bloom flash
uniform vec4 u_shock;      // xy buffer px (bottom-left), z age s, w strength
uniform vec4 u_imp[8];     // xy buffer px, z age, w strength
uniform int u_tileCount;
uniform vec4 u_tiles[32];  // xy centre buffer px, zw half size buffer px
uniform vec4 u_tinfo[32];  // x state (0 empty 1 filled 2 ash 3 halo 4 lit 5 mint), y glow 0..1, z radius px, w flip
uniform vec3 u_ink;
uniform vec3 u_smokeLo;
uniform vec3 u_smokeHi;
uniform vec3 u_lit;
uniform vec3 u_litDeep;
uniform vec3 u_halo;
uniform vec3 u_haloDeep;
uniform vec3 u_ice;
uniform vec3 u_mint;
uniform float u_grain;
uniform sampler2D u_smokeTex;
uniform float u_smokeMode; // 1 = sample the low-res smoke field, 0 = compute inline (no FBO support)
uniform float u_refract;   // Glasswork: animated prismatic refraction 0..1
uniform float u_light;     // 1 = light (Vellum) background

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
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

const mat2 ROT = mat2(1.6, 1.2, -1.2, 1.6);

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    v += a * noise(p);
    p = ROT * p;
    a *= 0.5;
  }
  return v;
}

float sdBox(vec2 p, vec2 b, float r) {
  vec2 q = abs(p) - b + r;
  return length(max(q, 0.0)) + min(max(q.x, q.y), 0.0) - r;
}

void main() {
  vec2 frag = gl_FragCoord.xy;
  float unit = min(u_res.x, u_res.y);

  // shockwave ring bends space
  vec2 toS = frag - u_shock.xy;
  float dS = length(toS);
  float ringR = u_shock.z * unit * 1.4;
  float k = (dS - ringR) / (unit * 0.04);
  float ring = exp(-k * k) * u_shock.w * exp(-u_shock.z * 2.0);
  frag -= toS / max(dS, 1.0) * ring * unit * 0.03;

  vec2 uv = (frag - 0.5 * u_res) / unit;
  float t = u_time * 0.035;

  vec2 fragT = frag; // rune glows stay locked to the DOM tiles
  // Glasswork: a slow lattice of glass facets bends the chamber behind the runes
  float facet = 0.0;
  if (u_refract > 0.0) {
    // triangular lattice of glass facets drifting slowly; each facet bends the chamber behind it
    vec2 g = uv * 3.6 + vec2(u_time * 0.03, -u_time * 0.02);
    float a1 = g.x;
    float a2 = dot(g, vec2(0.5, 0.866));
    float a3 = dot(g, vec2(-0.5, 0.866));
    float e = max(max(abs(fract(a1) - 0.5), abs(fract(a2) - 0.5)), abs(fract(a3) - 0.5));
    facet = smoothstep(0.465, 0.5, e);
    vec2 cellId = floor(vec2(a1, a2)) + floor(a3) * 0.37;
    float h = hash(cellId);
    vec2 bend = vec2(cos(h * 6.2831 + u_time * 0.3), sin(h * 6.2831 + u_time * 0.3)) * 0.018 * u_refract;
    frag += bend * unit;
    uv = (frag - 0.5 * u_res) / unit;
  }

  float smoke;
  float dens;
  float rx;
  float n;
  float qy;
  if (u_smokeMode > 0.5) {
    vec4 sm = texture(u_smokeTex, frag / u_res);
    smoke = sm.r * 2.0;
    rx = sm.g;
    n = sm.b;
    qy = sm.b;
    dens = sm.a;
  } else {
    // impulses: local upward swirl + density
    dens = 0.0;
    vec2 push = vec2(0.0);
    for (int i = 0; i < 8; i++) {
      vec4 im = u_imp[i];
      if (im.w <= 0.0) continue;
      vec2 d = (frag - im.xy) / unit;
      float age = im.z;
      float rad = 0.07 + age * 0.12;
      float fall = exp(-dot(d, d) / (rad * rad)) * im.w * exp(-age * 1.1);
      dens += fall;
      push += vec2(-d.y, d.x) * fall * 0.6 + vec2(0.0, -fall * 0.15);
    }

    vec2 p = uv * 1.6 + push;
    vec2 q = vec2(fbm(p + vec2(0.0, -t * 2.0)), fbm(p + vec2(5.2, 1.3) + t));
    vec2 r = vec2(fbm(p + 3.2 * q + vec2(1.7, 9.2) - t * 1.3), fbm(p + 3.2 * q + vec2(8.3, 2.8) + t));
    n = fbm(p + 2.6 * r);
    smoke = smoothstep(0.25, 0.95, n) + dens * 0.8;
    rx = r.x;
    qy = q.y;
  }

  vec3 col = u_ink;
  col = mix(col, u_smokeLo, clamp(smoke * 1.1, 0.0, 1.0));
  col = mix(col, u_smokeHi, clamp((smoke - 0.55) * 1.4, 0.0, 1.0) * 0.8);
  // faint violet / ice tints carried by the warp
  col += u_haloDeep * 0.06 * smoothstep(0.4, 0.9, rx) + u_ice * 0.035 * smoothstep(0.5, 1.0, qy);
  col += u_lit * dens * 0.08;

  // two slow light shafts from the top
  vec2 sp = uv;
  float shaft1 = exp(-pow(abs(sp.x * 0.9 + sp.y * 0.35 + 0.18 + 0.05 * sin(u_time * 0.21)), 2.0) * 22.0);
  float shaft2 = exp(-pow(abs(sp.x * 0.8 - sp.y * 0.3 - 0.32 + 0.04 * sin(u_time * 0.17 + 2.0)), 2.0) * 30.0);
  float top = smoothstep(-0.6, 0.6, uv.y);
  col += (u_smokeHi * 0.35 + u_ice * 0.04) * (shaft1 + shaft2 * 0.7) * top * (0.6 + 0.4 * n);

  if (u_refract > 0.0) {
    // prismatic glints along the facet edges, drifting through the spectrum
    vec3 spec = 0.5 + 0.5 * cos(6.2831 * (uv.x * 0.6 - uv.y * 0.4 + u_time * 0.06 + vec3(0.0, 0.33, 0.67)));
    float sweep = exp(-pow(uv.x * 0.7 + uv.y * 0.7 - sin(u_time * 0.23) * 1.3, 2.0) * 5.0);
    col += spec * facet * (0.018 + 0.16 * sweep) * u_refract;
  }
  if (u_light > 0.5) {
    // parchment: smoke reads as soft sepia wash, shafts as warm light
    col = mix(u_ink, u_smokeHi, clamp(smoke * 0.55, 0.0, 1.0));
    col += vec3(0.06, 0.05, 0.03) * (shaft1 + shaft2 * 0.7) * top;
  }

  // rune bodies
  vec3 glow = vec3(0.0);
  for (int i = 0; i < 32; i++) {
    if (i >= u_tileCount) break;
    vec4 tr = u_tiles[i];
    vec4 ti = u_tinfo[i];
    vec2 d = fragT - tr.xy;
    float sd = sdBox(d, tr.zw, ti.z);
    float st = ti.x;
    float g = ti.y;
    float px = u_scale;
    if (st >= 3.5 && st < 4.5) {
      // Lit: hot core + wide amber bloom
      float outer = exp(-max(sd, 0.0) / (14.0 * px)) * 0.55;
      float inner = smoothstep(2.0 * px, -tr.w * 0.9, sd);
      glow += (u_litDeep * outer + mix(u_litDeep, u_lit, inner) * inner * 0.85) * g;
    } else if (st >= 2.5 && st < 3.5) {
      // Halo: a ring sitting on the rim, slowly breathing
      float ringD = abs(sd + 3.0 * px) / (3.5 * px);
      float rr = exp(-ringD * ringD);
      float outer = exp(-max(sd, 0.0) / (10.0 * px)) * 0.3;
      float breathe = 0.85 + 0.15 * sin(u_time * 2.0 + float(i));
      glow += (u_halo * rr * 1.1 + u_haloDeep * outer) * g * breathe;
    } else if (st >= 4.5) {
      float outer = exp(-max(sd, 0.0) / (12.0 * px)) * 0.5;
      float inner = smoothstep(2.0 * px, -tr.w, sd);
      glow += (u_mint * (outer + inner * 0.6)) * g;
    } else if (st >= 0.5) {
      // filled / ash: a faint rim of light so the glass edge reads
      float rim = exp(-abs(sd) / (1.5 * px)) * (st >= 1.5 ? 0.05 : 0.12);
      glow += u_ice * rim * g;
    }
  }
  if (u_light > 0.5) {
    float gm = clamp(max(glow.r, max(glow.g, glow.b)), 0.0, 1.0);
    col = mix(col, clamp(glow * 0.9, 0.0, 1.0), gm * 0.5);
  } else {
    col += glow;
  }

  // shock glow + global flash
  col += mix(u_lit, vec3(1.0), 0.4) * ring * 0.25;
  col += u_lit * u_flash * 0.12;

  // tension grade: tighter vignette, push toward red
  float vig = 1.0 - (0.42 + 0.12 * u_tension) * dot(uv, uv);
  col *= mix(vig, 1.0 - 0.14 * dot(uv, uv), u_light);
  col = mix(col, col * vec3(1.15, 0.86, 0.85), u_tension * 0.35 * smoothstep(0.6, 1.0, u_tension));

  // tone map + grain + dither
  col = u_light > 0.5 ? clamp(col, 0.0, 1.0) : 1.0 - exp(-col * 1.25);
  col += (hash(gl_FragCoord.xy + fract(u_time * 7.0)) - 0.5) * (1.0 / 255.0 + u_grain * 0.025);
  outColor = vec4(col, 1.0);
}
`,i=`#version 300 es
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
`,a=`#version 300 es
precision mediump float;

in vec3 v_color;
in float v_life;
out vec4 outColor;

void main() {
  float d = length(gl_PointCoord - 0.5) * 2.0;
  float a = pow(max(1.0 - d, 0.0), 2.0) * v_life;
  outColor = vec4(v_color * a, a); // premultiplied: additive on dark themes, "over" on light ones
}
`,o=`#version 300 es
// Fullscreen triangle with uv for the post chain (bloom down/up + composite).
out vec2 v_uv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  v_uv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}
`,s=`#version 300 es
precision mediump float;
// 13-tap-lite downsample (4 bilinear taps + centre). First pass also applies a soft-knee threshold.
in vec2 v_uv;
uniform sampler2D u_src;
uniform vec2 u_texel;      // 1 / source size
uniform float u_prefilter; // 1 on the first pass
uniform float u_threshold;
out vec4 outColor;

vec3 knee(vec3 c) {
  float br = max(c.r, max(c.g, c.b));
  float soft = clamp(br - u_threshold + 0.25, 0.0, 0.5);
  soft = soft * soft / 2.0;
  float contrib = max(soft, br - u_threshold) / max(br, 1e-4);
  return c * contrib;
}

void main() {
  vec2 o = u_texel;
  vec3 c = texture(u_src, v_uv).rgb * 0.5;
  c += texture(u_src, v_uv + vec2(-o.x, -o.y)).rgb * 0.125;
  c += texture(u_src, v_uv + vec2(o.x, -o.y)).rgb * 0.125;
  c += texture(u_src, v_uv + vec2(-o.x, o.y)).rgb * 0.125;
  c += texture(u_src, v_uv + vec2(o.x, o.y)).rgb * 0.125;
  if (u_prefilter > 0.5) c = knee(c);
  outColor = vec4(c, 1.0);
}
`,c=`#version 300 es
precision mediump float;
// 9-tap tent upsample, blended additively onto the next larger mip.
in vec2 v_uv;
uniform sampler2D u_src;
uniform vec2 u_texel;
uniform float u_radius;
out vec4 outColor;

void main() {
  vec2 o = u_texel * u_radius;
  vec3 c = texture(u_src, v_uv).rgb * 4.0;
  c += texture(u_src, v_uv + vec2(-o.x, 0.0)).rgb * 2.0;
  c += texture(u_src, v_uv + vec2(o.x, 0.0)).rgb * 2.0;
  c += texture(u_src, v_uv + vec2(0.0, -o.y)).rgb * 2.0;
  c += texture(u_src, v_uv + vec2(0.0, o.y)).rgb * 2.0;
  c += texture(u_src, v_uv + vec2(-o.x, -o.y)).rgb;
  c += texture(u_src, v_uv + vec2(o.x, -o.y)).rgb;
  c += texture(u_src, v_uv + vec2(-o.x, o.y)).rgb;
  c += texture(u_src, v_uv + vec2(o.x, o.y)).rgb;
  outColor = vec4(c / 16.0, 1.0);
}
`,l=`#version 300 es
precision mediump float;
// Scene + bloom, optional chromatic fringe near the edges, gentle amber/violet split-tone grade.
in vec2 v_uv;
uniform sampler2D u_scene;
uniform sampler2D u_bloom;
uniform float u_bloomGain;
uniform float u_chroma;   // 0..1
uniform float u_flash;    // 0..1
out vec4 outColor;

void main() {
  vec2 d = v_uv - 0.5;
  vec3 col;
  if (u_chroma > 0.0) {
    vec2 off = d * dot(d, d) * 0.012 * u_chroma;
    col.r = texture(u_scene, v_uv + off).r;
    col.g = texture(u_scene, v_uv).g;
    col.b = texture(u_scene, v_uv - off).b;
  } else {
    col = texture(u_scene, v_uv).rgb;
  }
  vec3 b = texture(u_bloom, v_uv).rgb;
  col += b * (u_bloomGain + u_flash * 0.9);
  // split-tone: shadows lean violet-blue, highlights lean amber
  float l = dot(col, vec3(0.299, 0.587, 0.114));
  col = mix(col * vec3(0.97, 0.96, 1.06), col * vec3(1.05, 1.0, 0.92), smoothstep(0.25, 0.85, l));
  col = col / (1.0 + max(col - 1.0, 0.0)); // soft shoulder above 1
  outColor = vec4(col, 1.0);
}
`,u=`#version 300 es
precision highp float;

// Low-resolution smoke field (1/smokeDiv of the drawing buffer, refreshed at smokeHz). The domain-warped fbm
// is the most expensive part of the ink chamber; the background pass samples this texture bilinearly instead.
// Output: r = smoke density / 2, g = warp r.x, b = fbm n, a = impulse density.

uniform vec2 u_res;   // FULL drawing-buffer px (the math runs in full-res coordinates)
uniform vec2 u_div;   // full-res px per smoke texel (x, y)
uniform float u_time;
uniform vec4 u_imp[8];

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
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x), mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x), u.y);
}

const mat2 ROT = mat2(1.6, 1.2, -1.2, 1.6);

float fbm(vec2 p) {
  float v = 0.0;
  float a = 0.5;
  for (int i = 0; i < 3; i++) {
    v += a * noise(p);
    p = ROT * p;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 frag = gl_FragCoord.xy * u_div;
  float unit = min(u_res.x, u_res.y);
  vec2 uv = (frag - 0.5 * u_res) / unit;
  float t = u_time * 0.035;
  float dens = 0.0;
  vec2 push = vec2(0.0);
  for (int i = 0; i < 8; i++) {
    vec4 im = u_imp[i];
    if (im.w <= 0.0) continue;
    vec2 d = (frag - im.xy) / unit;
    float age = im.z;
    float rad = 0.07 + age * 0.12;
    float fall = exp(-dot(d, d) / (rad * rad)) * im.w * exp(-age * 1.1);
    dens += fall;
    push += vec2(-d.y, d.x) * fall * 0.6 + vec2(0.0, -fall * 0.15);
  }
  vec2 p = uv * 1.6 + push;
  vec2 q = vec2(fbm(p + vec2(0.0, -t * 2.0)), fbm(p + vec2(5.2, 1.3) + t));
  vec2 r = vec2(fbm(p + 3.2 * q + vec2(1.7, 9.2) - t * 1.3), fbm(p + 3.2 * q + vec2(8.3, 2.8) + t));
  float n = fbm(p + 2.6 * r);
  float smoke = smoothstep(0.25, 0.95, n) + dens * 0.8;
  outColor = vec4(clamp(smoke * 0.5, 0.0, 1.0), r.x, n, clamp(dens, 0.0, 1.0));
}
`;function d(e){return e.getContext(`webgl2`,{alpha:!1,antialias:!1,depth:!1,stencil:!1,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:`high-performance`,desynchronized:!0})}function f(e,t,n){let r=e.createShader(t);if(!r)throw Error(`createShader failed`);return e.shaderSource(r,n),e.compileShader(r),r}function p(e,t,n,r){let i=e.getExtension(`KHR_parallel_shader_compile`),a=f(e,e.VERTEX_SHADER,t),o=f(e,e.FRAGMENT_SHADER,n),s=e.createProgram();e.attachShader(s,a),e.attachShader(s,o),e.linkProgram(s);let c=null;return{program:s,poll:()=>{if(c)return c;if(i&&!e.getProgramParameter(s,i.COMPLETION_STATUS_KHR))return null;if(!e.getProgramParameter(s,e.LINK_STATUS)&&!e.isContextLost()){let t=[e.getShaderInfoLog(a),e.getShaderInfoLog(o),e.getProgramInfoLog(s)].filter(Boolean).join(`
`);throw Error(`WebGL program failed to build:\n${t}`)}e.deleteShader(a),e.deleteShader(o);let t={};for(let n of r)t[n]=e.getUniformLocation(s,n);return c={program:s,uniforms:t},c}}}function m(e){let t=e.replace(`#`,``),n=t.length===3?t.replace(/./g,e=>e+e):t,r=Number.parseInt(n,16);return n.length!==6||Number.isNaN(r)?[1,1,1]:[(r>>16&255)/255,(r>>8&255)/255,(r&255)/255]}function h(e){return{capacity:e,count:0,x:new Float32Array(e),y:new Float32Array(e),vx:new Float32Array(e),vy:new Float32Array(e),life:new Float32Array(e),ttl:new Float32Array(e),size:new Float32Array(e),grav:new Float32Array(e),rgb:new Float32Array(e*3),gpu:new Float32Array(e*7)}}function g(e,t,n,r,i,a,o=Math.random){for(let s=0;s<r;s++){let r=_(e,o),s=o()*Math.PI*2,c=i*(.35+o()*.65);e.x[r]=t,e.y[r]=n,e.vx[r]=Math.cos(s)*c,e.vy[r]=Math.sin(s)*c,e.ttl[r]=.45+o()*.55,e.life[r]=e.ttl[r],e.size[r]=6+o()*16,e.grav[r]=1;let l=.75+o()*.25;e.rgb[r*3]=Math.min(1,a[0]*l+.15),e.rgb[r*3+1]=Math.min(1,a[1]*l+.15),e.rgb[r*3+2]=Math.min(1,a[2]*l+.15)}}function _(e,t){return e.count<e.capacity?e.count++:Math.floor(t()*e.capacity)}function ee(e,t,n,r,i,a,o,s,c,l=Math.random){let u=_(e,l);e.x[u]=t,e.y[u]=n,e.vx[u]=(r-t)*a,e.vy[u]=(i-n)*a,e.ttl[u]=o,e.life[u]=o,e.size[u]=s,e.grav[u]=0,e.rgb[u*3]=c[0],e.rgb[u*3+1]=c[1],e.rgb[u*3+2]=c[2]}function te(e,t,n=2.2,r=260){let i=Math.exp(-n*t),a=0;for(;a<e.count;){if(e.life[a]-=t,e.life[a]<=0){let t=--e.count;a!==t&&(e.x[a]=e.x[t],e.y[a]=e.y[t],e.vx[a]=e.vx[t],e.vy[a]=e.vy[t],e.life[a]=e.life[t],e.ttl[a]=e.ttl[t],e.size[a]=e.size[t],e.grav[a]=e.grav[t],e.rgb[a*3]=e.rgb[t*3],e.rgb[a*3+1]=e.rgb[t*3+1],e.rgb[a*3+2]=e.rgb[t*3+2]);continue}e.vx[a]*=i,e.vy[a]=e.vy[a]*i+r*e.grav[a]*t,e.x[a]+=e.vx[a]*t,e.y[a]+=e.vy[a]*t;let n=a*7;e.gpu[n]=e.x[a],e.gpu[n+1]=e.y[a],e.gpu[n+2]=e.size[a],e.gpu[n+3]=e.life[a]/e.ttl[a],e.gpu[n+4]=e.rgb[a*3],e.gpu[n+5]=e.rgb[a*3+1],e.gpu[n+6]=e.rgb[a*3+2],a++}return e.count}var v=.5;function ne(){return{scale:1,avgMs:16.7,cooldown:0}}function re(e,t){return!(t>0)||t>250?!1:(e.avgMs+=(t-e.avgMs)*.05,e.cooldown>0?(e.cooldown--,!1):e.avgMs>22&&e.scale>.5?(e.scale=Math.max(v,e.scale-.15),e.cooldown=90,!0):e.avgMs<13&&e.scale<1&&(e.scale=Math.min(1,e.scale+.1),e.cooldown=180,!0))}var ie=[`u_res`,`u_scale`,`u_time`,`u_tension`,`u_flash`,`u_shock`,`u_imp`,`u_tileCount`,`u_tiles`,`u_tinfo`,`u_ink`,`u_smokeLo`,`u_smokeHi`,`u_lit`,`u_litDeep`,`u_halo`,`u_haloDeep`,`u_ice`,`u_mint`,`u_grain`,`u_smokeTex`,`u_smokeMode`,`u_refract`,`u_light`],ae=[`u_res`,`u_div`,`u_time`,`u_imp`],oe=[`u_cssSize`,`u_dpr`],se=[`u_src`,`u_texel`,`u_prefilter`,`u_threshold`],ce=[`u_src`,`u_texel`,`u_radius`],le=[`u_scene`,`u_bloom`,`u_bloomGain`,`u_chroma`,`u_flash`],ue=5,de=2.4,fe=32,pe=8,me={empty:0,filled:1,ash:2,halo:3,lit:4},y=(f,_)=>{let v=d(f);if(!v)return null;let y=_.layout,b=_.theme?{..._.theme.palette}:{...e,..._.palette},he=_.theme?.threshold??.5,ge=_.theme?.refract??0,x=_.theme?.light??0,_e=!1,S={ink:m(b.ink),smokeLo:m(b.smokeLo),smokeHi:m(b.smokeHi),lit:m(b.lit),litDeep:m(b.litDeep),halo:m(b.halo),haloDeep:m(b.haloDeep),ice:m(b.ice),mint:m(b.mint),litHot:m(b.litHot)},C=_.quality??`auto`,w=t[C===`auto`?`high`:C],T=ne(),E=_.motion??!0,D=h(t.high.maxParticles),O={x:-1e4,y:-1e4,age:10,strength:0},k=new Float32Array(32),ve=0,A=new Float32Array(128),j=new Float32Array(128),M=new Float32Array(fe),N=1,P=1,ye=1,F=0,I=0,L=0,R=0,z=null,B=null,be=()=>null,xe=()=>null,V=null,H=null,U=null,Se=()=>!1,W=null,Ce=()=>null,G=null,K=!0,q=1,J=null,Y=[],we=!0,Te=[],X=null,Z=null,Q=null;function Ee(){z=B=null,f.dataset.ready=``;let e=p(v,n,r,ie),t=p(v,i,a,oe);be=e.poll,xe=t.poll,V=H=U=null;let d=p(v,o,s,se),m=p(v,o,c,ce),h=p(v,o,l,le),g=p(v,n,u,ae);W=null,G=null,q=1,Ce=()=>{if(W)return W;try{W=g.poll()}catch{K=!1}return W},Se=()=>{if(V&&H&&U)return!0;try{let e=d.poll(),t=m.poll(),n=h.poll();return!e||!t||!n?!1:(V=e,H=t,U=n,!0)}catch{return we=!1,!1}},Te=[e.program,t.program,d.program,m.program,h.program,g.program],J=null,Y.length=0,X=v.createVertexArray(),Z=v.createVertexArray(),Q=v.createBuffer(),v.bindVertexArray(Z),v.bindBuffer(v.ARRAY_BUFFER,Q),v.bufferData(v.ARRAY_BUFFER,D.gpu.byteLength,v.DYNAMIC_DRAW),v.enableVertexAttribArray(0),v.vertexAttribPointer(0,4,v.FLOAT,!1,28,0),v.enableVertexAttribArray(1),v.vertexAttribPointer(1,3,v.FLOAT,!1,28,16),v.bindVertexArray(null)}function De(e){v.useProgram(e.program);let t=e.uniforms;v.uniform3fv(t.u_ink,S.ink),v.uniform3fv(t.u_smokeLo,S.smokeLo),v.uniform3fv(t.u_smokeHi,S.smokeHi),v.uniform3fv(t.u_lit,S.lit),v.uniform3fv(t.u_litDeep,S.litDeep),v.uniform3fv(t.u_halo,S.halo),v.uniform3fv(t.u_haloDeep,S.haloDeep),v.uniform3fv(t.u_ice,S.ice),v.uniform3fv(t.u_mint,S.mint),v.uniform1f(t.u_refract,ge),v.uniform1f(t.u_light,x),v.uniform1i(t.u_smokeTex,2)}function Oe(){if(z&&B)return!0;let e=be(),t=xe();return!e||!t?!1:(De(e),z=e,B=t,f.dataset.ready=`1`,!0)}function ke(e,t){let n=v.createTexture(),r=v.createFramebuffer();v.bindTexture(v.TEXTURE_2D,n),v.texImage2D(v.TEXTURE_2D,0,v.RGBA8,e,t,0,v.RGBA,v.UNSIGNED_BYTE,null),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MIN_FILTER,v.LINEAR),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_MAG_FILTER,v.LINEAR),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_S,v.CLAMP_TO_EDGE),v.texParameteri(v.TEXTURE_2D,v.TEXTURE_WRAP_T,v.CLAMP_TO_EDGE),v.bindFramebuffer(v.FRAMEBUFFER,r),v.framebufferTexture2D(v.FRAMEBUFFER,v.COLOR_ATTACHMENT0,v.TEXTURE_2D,n,0);let i=v.checkFramebufferStatus(v.FRAMEBUFFER)===v.FRAMEBUFFER_COMPLETE;return v.bindFramebuffer(v.FRAMEBUFFER,null),i?{fbo:r,tex:n,w:e,h:t}:(v.deleteTexture(n),v.deleteFramebuffer(r),null)}function Ae(){if(!v.isContextLost())for(let e of J?[J,...Y]:Y)v.deleteTexture(e.tex),v.deleteFramebuffer(e.fbo);G&&!v.isContextLost()&&(v.deleteTexture(G.tex),v.deleteFramebuffer(G.fbo)),J=null,G=null,Y.length=0}function je(){if(!K)return!1;let e=Math.max(8,Math.round(f.width/w.smokeDiv)),t=Math.max(8,Math.round(f.height/w.smokeDiv));return G&&G.w===e&&G.h===t?!0:(G&&!v.isContextLost()&&(v.deleteTexture(G.tex),v.deleteFramebuffer(G.fbo)),G=ke(e,t),q=1,G||(K=!1),G!==null)}function Me(){let e=f.width,t=f.height,n=Math.min(ue,w.bloomMips);if(J&&J.w===e&&J.h===t&&Y.length===n)return!0;if(Ae(),J=ke(e,t),!J)return we=!1,!1;let r=e,i=t;for(let e=0;e<n;e++){r=Math.max(1,r>>1),i=Math.max(1,i>>1);let e=ke(r,i);if(!e)break;Y.push(e)}return!0}function Ne(){if(!v.isContextLost()){Ae();for(let e of Te)v.deleteProgram(e);Te=[],v.deleteVertexArray(X),v.deleteVertexArray(Z),v.deleteBuffer(Q),z=B=null}}let Pe=e=>{e.preventDefault(),z=B=null,V=H=U=null,J=null,G=null,W=null,Y.length=0},Fe=()=>Ee();f.addEventListener(`webglcontextlost`,Pe),f.addEventListener(`webglcontextrestored`,Fe),Ee();function Ie(){let e=Math.min(ye||1,w.dprCap)*w.renderScale*T.scale,t=Math.max(1,Math.round(N*e)),n=Math.max(1,Math.round(P*e));(f.width!==t||f.height!==n)&&(f.width=t,f.height=n)}let Le=e=>e===`lit`?S.lit:e===`halo`?S.halo:e===`mint`?S.mint:S.ice;function Re(e,t){let n=v;n.bindVertexArray(X),n.disable(n.BLEND),n.activeTexture(n.TEXTURE0);let r=Y.length;if(r>0){n.useProgram(V.program);let e=V.uniforms;n.uniform1i(e.u_src,0),n.uniform1f(e.u_threshold,he);let t=J;for(let i=0;i<r;i++){let r=Y[i];n.bindFramebuffer(n.FRAMEBUFFER,r.fbo),n.viewport(0,0,r.w,r.h),n.bindTexture(n.TEXTURE_2D,t.tex),n.uniform2f(e.u_texel,1/t.w,1/t.h),n.uniform1f(e.u_prefilter,+(i===0)),n.drawArrays(n.TRIANGLES,0,3),t=r}n.useProgram(H.program);let i=H.uniforms;n.uniform1i(i.u_src,0),n.uniform1f(i.u_radius,1),n.enable(n.BLEND),n.blendFunc(n.ONE,n.ONE);for(let e=r-1;e>0;e--){let t=Y[e],r=Y[e-1];n.bindFramebuffer(n.FRAMEBUFFER,r.fbo),n.viewport(0,0,r.w,r.h),n.bindTexture(n.TEXTURE_2D,t.tex),n.uniform2f(i.u_texel,1/t.w,1/t.h),n.drawArrays(n.TRIANGLES,0,3)}n.disable(n.BLEND)}n.bindFramebuffer(n.FRAMEBUFFER,null),n.viewport(0,0,e,t),n.useProgram(U.program);let i=U.uniforms;n.activeTexture(n.TEXTURE0),n.bindTexture(n.TEXTURE_2D,J.tex),n.uniform1i(i.u_scene,0),n.activeTexture(n.TEXTURE1),n.bindTexture(n.TEXTURE_2D,r>0?Y[0].tex:J.tex),n.uniform1i(i.u_bloom,1),n.uniform1f(i.u_bloomGain,r>0?.55+R*.15:0),n.uniform1f(i.u_chroma,w.chromatic&&E?1+I*3:0),n.uniform1f(i.u_flash,I),n.drawArrays(n.TRIANGLES,0,3),n.activeTexture(n.TEXTURE0)}let $=null;function ze(e,t,n,r,i){let a=[...e],o=Math.ceil(r),s=Math.ceil(i*1.4);$||=typeof OffscreenCanvas<`u`?new OffscreenCanvas(o,s):document.createElement(`canvas`),$.width=o,$.height=s;let c=$.getContext(`2d`);if(!c)return[];c.clearRect(0,0,o,s),c.fillStyle=`#fff`,c.textAlign=`center`,c.textBaseline=`middle`,c.font=`800 ${i}px system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif`;let l=o/a.length,u=[],d=(()=>{let e=[];for(let t=0;t<a.length;t++)c.clearRect(0,0,o,s),c.fillText(a[t],l*(t+.5),s/2),e.push({li:t,img:c.getImageData(0,0,o,s)});return e})(),f=Math.max(2,Math.round(i/14));for(let{li:e,img:r}of d)for(let i=0;i<s;i+=f)for(let a=0;a<o;a+=f)r.data[(i*o+a)*4+3]>140&&u.push(t-o/2+a,n-s/2+i,e);return u}let Be={get ready(){return z!==null&&B!==null},get quality(){return w},resize(e,t,n){N=Math.max(1,e),P=Math.max(1,t),ye=n,Ie()},render(e,t,n){F+=n,C===`auto`&&re(T,n*1e3)&&Ie();for(let n=0;n<t.length;n++){let r=t[n];r.type===`key`?Be.impulse(r.x,r.y,.5):r.type===`solved`&&e.mode!==`surge`&&(I=1)}R+=(e.tension-R)*Math.min(1,n*2),I=Math.max(0,I-n*2.2),L=Math.max(0,L-n*14),O.age+=n;for(let e=0;e<pe;e++)k[e*4+2]+=n;if(v.isContextLost())return;if(!Oe()||!z||!B){v.clearColor(S.ink[0],S.ink[1],S.ink[2],1),v.clear(v.COLOR_BUFFER_BIT);return}let r=f.width,i=f.height,a=r/N,o=i/P,s=E?(Math.random()-.5)*L*2:0,c=E?(Math.random()-.5)*L*2:0;f.style.transform=L>.05&&E?`translate(${s.toFixed(1)}px,${c.toFixed(1)}px)`:``;let l=y.tiles,u=0;for(let e=0;e<l.length&&u<fe;e++){let t=l[e],r=u*4;A[r]=t.x*a,A[r+1]=i-t.y*o,A[r+2]=t.w*a/2,A[r+3]=t.h*o/2;let s=me[t.state];s!==0&&(t.board===`afterglow`&&s===4&&(s=5),M[u]=M[u]+(1-M[u])*Math.min(1,n*6),j[r]=s,j[r+1]=(s>=3?1:.8)+t.emphasis*.6,j[r+2]=t.r*a,j[r+3]=t.flip,u++)}let d=Ce(),p=0;if(d&&je()){let e=G;if(q+=n,q>=1/w.smokeHz-.001){q=0,v.bindFramebuffer(v.FRAMEBUFFER,e.fbo),v.viewport(0,0,e.w,e.h),v.disable(v.BLEND),v.useProgram(d.program);let t=d.uniforms;v.uniform2f(t.u_res,r,i),v.uniform2f(t.u_div,r/e.w,i/e.h),v.uniform1f(t.u_time,F),v.uniform4fv(t.u_imp,k),v.bindVertexArray(X),v.drawArrays(v.TRIANGLES,0,3)}v.activeTexture(v.TEXTURE2),v.bindTexture(v.TEXTURE_2D,e.tex),v.activeTexture(v.TEXTURE0),p=1}_e&&=(De(z),!1);let m=we&&Se()&&Me()&&J!==null;v.bindFramebuffer(v.FRAMEBUFFER,m?J.fbo:null),v.viewport(0,0,r,i),v.disable(v.BLEND),v.useProgram(z.program);let h=z.uniforms;v.uniform2f(h.u_res,r,i),v.uniform1f(h.u_scale,a),v.uniform1f(h.u_time,F),v.uniform1f(h.u_tension,R),v.uniform1f(h.u_flash,I),v.uniform4f(h.u_shock,O.x*a,i-O.y*o,O.age,O.age<1.6?O.strength:0),v.uniform4fv(h.u_imp,k),v.uniform1i(h.u_tileCount,u),u>0&&(v.uniform4fv(h.u_tiles,A,0,u*4),v.uniform4fv(h.u_tinfo,j,0,u*4)),v.uniform1f(h.u_grain,+!!w.grain),v.uniform1f(h.u_smokeMode,p),v.bindVertexArray(X),v.drawArrays(v.TRIANGLES,0,3);let g=te(D,n,de,120);g>0&&(v.enable(v.BLEND),x>.5?v.blendFunc(v.ONE,v.ONE_MINUS_SRC_ALPHA):v.blendFunc(v.ONE,v.ONE),v.useProgram(B.program),v.uniform2f(B.uniforms.u_cssSize,N,P),v.uniform1f(B.uniforms.u_dpr,a),v.bindVertexArray(Z),v.bindBuffer(v.ARRAY_BUFFER,Q),v.bufferSubData(v.ARRAY_BUFFER,0,D.gpu,0,g*7),v.drawArrays(v.POINTS,0,g)),m&&Re(r,i),v.bindVertexArray(null)},setQuality(e){C=e,w=t[e===`auto`?`high`:e],T.scale=1,Ie()},setMotion(e){E=e},setTheme(e){let t=Object.keys(S);for(let n of t){let t=m(e.palette[n]),r=S[n];r[0]=t[0],r[1]=t[1],r[2]=t[2]}he=e.threshold,ge=e.refract,x=e.light,_e=!0},burst(e,t,n,r){let i=Math.min(w.maxParticles,D.capacity),a=Math.round(n*(E?1:.3)*(i/D.capacity));g(D,e,t,a,360,Le(r)),g(D,e,t,Math.ceil(a/4),200,S.litHot)},shock(e,t,n){E&&(O.x=e,O.y=t,O.age=0,O.strength=n)},shake(e){E&&(L=Math.max(L,e))},impulse(e,t,n){let r=f.height,i=f.width/N,a=ve*4;k[a]=e*i,k[a+1]=r-t*i,k[a+2]=0,k[a+3]=n,ve=(ve+1)%pe},constellation(e){let t=[...e].length;if(t===0)return;let n=1/0,r=1/0,i=-1/0,a=[];for(let e of y.tiles)e.board===`main`&&(n=Math.min(n,e.y-e.h/2),r=Math.min(r,e.x-e.w/2),i=Math.max(i,e.x+e.w/2));if(!Number.isFinite(n))return;for(let e of y.tiles)e.board===`main`&&e.state===`lit`&&a.push({x:e.x,y:e.y});let o=a.slice(-t),s=n-56,c=Math.max(26,Math.min(52,s*.6)),l=s>40?56+c*.62:y.boardCy,u=ze(e,y.boardCx,l,Math.max(160,i-r),c),d=u.length/3,f=Math.min(w.maxParticles,D.capacity)*(E?.45:.2),p=Math.min(1,f/Math.max(1,d));for(let e=0;e<d;e++){if(Math.random()>p)continue;let t=u[e*3],n=u[e*3+1],r=u[e*3+2],i=o[r]??{x:y.boardCx,y:y.boardCy},a=i.x+(Math.random()-.5)*30,s=i.y+(Math.random()-.5)*30,c=Math.random()<.18;ee(D,a,s,t,n,de,2.6+Math.random()*1.2,c?9+Math.random()*6:4+Math.random()*4,c?S.litHot:r%2?S.lit:S.ice)}},dispose(){f.removeEventListener(`webglcontextlost`,Pe),f.removeEventListener(`webglcontextrestored`,Fe),f.style.transform=``,Ne()}};return Be};export{y as createRenderer};