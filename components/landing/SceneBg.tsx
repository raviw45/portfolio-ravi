"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ICONS: Record<string, (x: CanvasRenderingContext2D) => void> = {
  react: (x) => {
    x.strokeStyle = x.fillStyle as string;
    x.lineWidth = 1.4;
    x.fillStyle = "transparent";
    x.beginPath();
    x.ellipse(12, 12, 10.5, 4.2, 0, 0, 7);
    x.stroke();
    x.beginPath();
    x.ellipse(12, 12, 10.5, 4.2, Math.PI / 3, 0, 7);
    x.stroke();
    x.beginPath();
    x.ellipse(12, 12, 10.5, 4.2, -Math.PI / 3, 0, 7);
    x.stroke();
    x.fillStyle = "#ffffff";
    x.globalAlpha = 1;
    x.beginPath();
    x.arc(12, 12, 2.2, 0, 7);
    x.fill();
  },
  ts: (x) => {
    x.fillRect(2, 2, 20, 20);
    x.fillStyle = "#132537";
    x.font = "900 13px Inter, sans-serif";
    x.textAlign = "center";
    x.textBaseline = "middle";
    x.fillText("TS", 12, 12.5);
  },
  js: (x) => {
    x.fillRect(2, 2, 20, 20);
    x.fillStyle = "#2b2b0f";
    x.font = "900 13px Inter, sans-serif";
    x.textAlign = "center";
    x.textBaseline = "middle";
    x.fillText("JS", 12, 12.5);
  },
  sql: (x) => {
    x.beginPath();
    x.ellipse(12, 5, 9.5, 3.2, 0, 0, 7);
    x.fill();
    x.fillRect(2.5, 5, 19, 14);
    x.beginPath();
    x.ellipse(12, 19, 9.5, 3.2, 0, 0, 7);
    x.fill();
  },
  docker: (x) => {
    const cell = (cx: number, cy: number) => x.fillRect(cx, cy, 3.4, 3.4);
    cell(2, 10);
    cell(6, 10);
    cell(10, 10);
    cell(6, 6);
    cell(10, 6);
    cell(10, 2);
    x.beginPath();
    x.moveTo(1, 13.4);
    x.bezierCurveTo(1, 18.5, 6, 21.5, 13, 21.5);
    x.bezierCurveTo(19, 21.5, 22.7, 18, 23.5, 13.4);
    x.bezierCurveTo(22, 12.4, 20, 12.2, 18.5, 13);
    x.bezierCurveTo(17, 11.6, 14.5, 11.6, 13.2, 13);
    x.bezierCurveTo(11, 11.2, 1, 11.6, 1, 13.4);
    x.closePath();
    x.fill();
  },
};

const LOGOS: [string, string][] = [
  ["react", "61DAFB"],
  ["ts", "3178C6"],
  ["js", "F7DF1E"],
  ["sql", "6f9ae8"],
  ["docker", "2496ED"],
];

export default function SceneBg() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    // Tier the scene's weight to the viewport so low-power/small devices aren't
    // pushed to render as many particles, sprites and geometry segments as desktop.
    const tier = innerWidth < 480 ? "xs" : innerWidth < 700 ? "sm" : innerWidth < 980 ? "md" : "lg";
    const particleCount = { xs: 500, sm: 900, md: 1300, lg: 1800 }[tier];
    const maxPixelRatio = { xs: 1, sm: 1.2, md: 1.5, lg: 1.6 }[tier];
    const gridDivisions = { xs: 20, sm: 32, md: 44, lg: 52 }[tier];
    const torusSegments = { xs: 48, sm: 70, md: 110, lg: 140 }[tier];
    const spritesPerLogo = tier === "xs" ? 1 : tier === "sm" ? 2 : 4;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(62, 1, 0.1, 320);
    const renderer = new THREE.WebGLRenderer({ antialias: tier !== "xs", alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, maxPixelRatio));
    // setSize(w, h, false) below skips Three's own style sync, so the canvas must be
    // told to fill its host via CSS — otherwise its width/height attributes (already
    // scaled by devicePixelRatio) become its CSS size too, overflowing past the
    // viewport and getting clipped by the host's overflow:hidden.
    renderer.domElement.style.display = "block";
    renderer.domElement.style.width = "100%";
    renderer.domElement.style.height = "100%";
    host.appendChild(renderer.domElement);

    const ACCENT = new THREE.Color("#a99cf0");
    const COOL = new THREE.Color("#6f86d6");
    const WARM = new THREE.Color("#d6a0e8");

    const N = particleCount;
    const pos = new Float32Array(N * 3);
    const col = new Float32Array(N * 3);
    const siz = new Float32Array(N);
    const rnd = new Float32Array(N);
    for (let i = 0; i < N; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 150;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 110;
      pos[i * 3 + 2] = -Math.random() * 260;
      const r = Math.random();
      const c = r > 0.72 ? WARM : r > 0.4 ? ACCENT : COOL;
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
      siz[i] = 0.3 + Math.random() * 1.3;
      rnd[i] = Math.random() * 6.28;
    }
    const pg = new THREE.BufferGeometry();
    pg.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    pg.setAttribute("color", new THREE.BufferAttribute(col, 3));
    pg.setAttribute("size", new THREE.BufferAttribute(siz, 1));
    pg.setAttribute("seed", new THREE.BufferAttribute(rnd, 1));
    const pm = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true,
      uniforms: { uOpacity: { value: 1 }, uTime: { value: 0 } },
      vertexShader: `attribute float size; attribute float seed; uniform float uTime;
        varying vec3 vC; varying float vD; varying float vTw;
        void main(){ vC = color;
          vec3 p = position;
          p.x += sin(uTime * 0.35 + seed) * 1.6;
          p.y += cos(uTime * 0.28 + seed * 1.7) * 1.4;
          vec4 mv = modelViewMatrix * vec4(p, 1.0);
          vD = clamp(1.0 - (-mv.z) / 260.0, 0.0, 1.0);
          vTw = 0.65 + 0.35 * sin(uTime * 1.6 + seed * 3.0);
          gl_PointSize = size * (400.0 / -mv.z);
          gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `varying vec3 vC; varying float vD; varying float vTw; uniform float uOpacity;
        void main(){ float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          float core = smoothstep(0.5, 0.0, d);
          float halo = smoothstep(0.5, 0.18, d) * 0.45;
          gl_FragColor = vec4(vC, (core * 0.8 + halo) * vD * vTw * uOpacity); }`,
    });
    const points = new THREE.Points(pg, pm);
    scene.add(points);

    const lineMat = (op: number) =>
      new THREE.LineBasicMaterial({ color: 0x9c8ff0, transparent: true, opacity: op, blending: THREE.AdditiveBlending, depthWrite: false });

    const lattice = new THREE.Group();
    const shellAGeom = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(28, 1));
    const shellAMat = lineMat(0.34);
    const shellA = new THREE.LineSegments(shellAGeom, shellAMat);
    const shellBGeom = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(18, 2));
    const shellBMat = lineMat(0.2);
    const shellB = new THREE.LineSegments(shellBGeom, shellBMat);
    lattice.add(shellA, shellB);
    lattice.position.set(30, -2, -66);
    scene.add(lattice);

    const rings = new THREE.Group();
    const ringMats: THREE.MeshBasicMaterial[] = [];
    const ringGeoms: THREE.TorusGeometry[] = [];
    for (let i = 0; i < 3; i++) {
      const m = new THREE.MeshBasicMaterial({ color: i === 1 ? 0xc7a3ea : 0x8f9fe0, transparent: true, opacity: 0.3, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide });
      ringMats.push(m);
      const geom = new THREE.TorusGeometry(14 + i * 7, 0.09, 8, torusSegments);
      ringGeoms.push(geom);
      const r = new THREE.Mesh(geom, m);
      r.rotation.set(Math.PI / 2.6 + i * 0.4, i * 0.7, i * 0.3);
      rings.add(r);
    }
    rings.position.set(-34, 6, -78);
    scene.add(rings);

    const marks = new THREE.Group();
    scene.add(marks);
    const markData: { sp: THREE.Sprite; seed: number; amp: number; spin: number; base: THREE.Vector3 }[] = [];
    const markTextures: THREE.CanvasTexture[] = [];
    const badgeCanvas = (color: string, drawIcon: (x: CanvasRenderingContext2D) => void) => {
      const dpr = 2, size = 128;
      const c = document.createElement("canvas");
      c.width = size * dpr;
      c.height = size * dpr;
      const x = c.getContext("2d")!;
      x.scale(dpr, dpr);
      x.beginPath();
      x.arc(size / 2, size / 2, size / 2 - 6, 0, Math.PI * 2);
      x.fillStyle = "rgba(22,23,36,0.88)";
      x.fill();
      x.lineWidth = 2.5;
      x.strokeStyle = "#" + color + "aa";
      x.stroke();
      x.save();
      const pad = 30;
      x.translate(pad, pad);
      const scale = (size - pad * 2) / 24;
      x.scale(scale, scale);
      x.fillStyle = "#" + color;
      drawIcon(x);
      x.restore();
      const tex = new THREE.CanvasTexture(c);
      markTextures.push(tex);
      return tex;
    };
    // Badges are sized/placed smaller and kept further from the camera's scroll path
    // on narrow viewports so they never blow up into an oversized "zoomed" badge —
    // on a small screen the same world-space size fills far more of the frame.
    const badgeScale = { xs: 0.55, sm: 0.75, md: 1, lg: 1 }[tier];
    const spawn = (tex: THREE.CanvasTexture) => {
      const per = spritesPerLogo;
      for (let i = 0; i < per; i++) {
        const m = new THREE.SpriteMaterial({ map: tex, transparent: true, opacity: 0.95, depthWrite: false, depthTest: false });
        const sp = new THREE.Sprite(m);
        const scale = (1.1 + Math.random() * 0.7) * badgeScale;
        sp.scale.set(scale, scale, 1);
        sp.position.set((Math.random() - 0.5) * 90, (Math.random() - 0.5) * 65, -40 - Math.random() * 90);
        marks.add(sp);
        markData.push({ sp, seed: Math.random() * 6.28, amp: 0.9 + Math.random() * 1.6, spin: (Math.random() - 0.5) * 0.2, base: sp.position.clone() });
      }
    };
    LOGOS.forEach(([key, color]) => {
      const draw = ICONS[key];
      if (!draw) return;
      spawn(badgeCanvas(color, draw));
    });

    const grid = new THREE.GridHelper(360, gridDivisions, 0xa99cf0, 0x7b86c9);
    (grid.material as THREE.Material).transparent = true;
    (grid.material as THREE.Material).opacity = 0.1;
    (grid.material as THREE.LineBasicMaterial).blending = THREE.AdditiveBlending;
    (grid.material as THREE.Material).depthWrite = false;
    grid.position.set(0, -28, -70);
    scene.add(grid);

    const base = () => (innerWidth < 700 ? 0.7 : 1);
    let fadeAmt = 0;
    const aboutFade = () => {
      const aboutEl = document.getElementById("about");
      if (!aboutEl) return 1;
      const r = aboutEl.getBoundingClientRect();
      const dist = innerHeight - r.top;
      // Raw 0-1 scroll-distance fraction — callers apply their own ceiling below,
      // since the fine wireframe lines need to stay much fainter than the
      // floating tech-badge sprites to avoid fighting with body text.
      return Math.min(1, Math.max(0, dist / 300));
    };
    const applyTheme = () => {
      const light = !document.documentElement.classList.contains("dark");
      const k = light ? 0.55 : 1;
      // Lines (grid/lattice/rings) stay a faint low-contrast accent past the hero
      // fold. Badges get their own, higher ceiling — they're a deliberate floating
      // feature, not background texture, so they should stay clearly visible.
      const lineFade = Math.min(0.2, fadeAmt);
      const badgeFade = Math.min(0.7, fadeAmt);
      pm.uniforms.uOpacity.value = base() * (light ? 0.8 : 1.15);
      (grid.material as THREE.Material).opacity = 0.1 * k;
      shellAMat.opacity = 0.05 * k * lineFade;
      shellBMat.opacity = 0.035 * k * lineFade;
      ringMats.forEach((m, i) => {
        m.opacity = (i === 1 ? 0.05 : 0.04) * k * lineFade;
      });
      marks.children.forEach((sp) => {
        ((sp as THREE.Sprite).material as THREE.SpriteMaterial).opacity = (light ? 0.32 : 0.5) * badgeFade;
      });
    };
    const mo = new MutationObserver(applyTheme);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    const resize = () => {
      renderer.setSize(innerWidth, innerHeight, false);
      camera.aspect = innerWidth / innerHeight;
      camera.updateProjectionMatrix();
      applyTheme();
    };
    resize();
    addEventListener("resize", resize);

    let target = 0, cur = 0, vel = 0, mx = 0, my = 0, tmx = 0, tmy = 0;
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
      target = Math.min(1, Math.max(0, scrollY / max));
      fadeAmt = aboutFade();
      applyTheme();
    };
    const onMove = (e: PointerEvent) => {
      tmx = e.clientX / innerWidth - 0.5;
      tmy = e.clientY / innerHeight - 0.5;
    };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("pointermove", onMove, { passive: true });
    onScroll();

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const clock = new THREE.Clock();
    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      const t = clock.getElapsedTime();
      const prev = cur;
      cur += (target - cur) * 0.16;
      vel += (cur - prev - vel) * 0.2;
      mx += (tmx - mx) * 0.09;
      my += (tmy - my) * 0.09;
      pm.uniforms.uTime.value = t;

      camera.position.z = 20 - cur * 85;
      camera.position.x = mx * 11 + Math.sin(t * 0.15) * 1.5;
      camera.position.y = -my * 7 + cur * 12;
      camera.rotation.z = vel * 6;
      camera.lookAt(mx * 4, cur * 7, camera.position.z - 40);

      if (!reduce) {
        points.rotation.z = cur * 0.8 + t * 0.012;
        lattice.rotation.y = cur * 3.2 + t * 0.05;
        lattice.rotation.x = cur * 1.2;
        shellB.rotation.y = -t * 0.1;
        shellB.rotation.z = t * 0.06;
        rings.rotation.y = t * 0.12 + cur * 2;
        rings.rotation.x = cur * 1.4;
        rings.children.forEach((r, i) => {
          r.rotation.z += 0.002 + i * 0.001;
        });
        grid.rotation.y = cur * 0.5;
      }
      markData.forEach((d) => {
        d.sp.position.y = d.base.y + Math.sin(t * 0.4 + d.seed) * d.amp;
        d.sp.position.x = d.base.x + Math.cos(t * 0.3 + d.seed) * d.amp * 0.7;
        (d.sp.material as THREE.SpriteMaterial).rotation = Math.sin(t * 0.25 + d.seed) * d.spin;
      });
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      mo.disconnect();
      removeEventListener("resize", resize);
      removeEventListener("scroll", onScroll);
      removeEventListener("pointermove", onMove as EventListener);
      pg.dispose();
      pm.dispose();
      shellAGeom.dispose();
      shellAMat.dispose();
      shellBGeom.dispose();
      shellBMat.dispose();
      ringGeoms.forEach((g) => g.dispose());
      ringMats.forEach((m) => m.dispose());
      markTextures.forEach((t) => t.dispose());
      marks.children.forEach((sp) => ((sp as THREE.Sprite).material as THREE.Material).dispose());
      (grid.material as THREE.Material).dispose();
      grid.geometry.dispose();
      renderer.dispose();
      host.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      aria-hidden="true"
      style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}
    />
  );
}
