"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const STACK: [string, string][] = [
  ["React", "#61DAFB"],
  ["Next.js", "#e9e9ed"],
  ["TypeScript", "#3178C6"],
  ["Node.js", "#339933"],
  ["Java", "#dc7a4a"],
  ["Spring Boot", "#6DB33F"],
  ["PostgreSQL", "#4f8fc0"],
  ["MongoDB", "#47A248"],
  ["Redis", "#DC382D"],
  ["Docker", "#2496ED"],
  ["Kubernetes", "#5586e0"],
  ["AWS", "#FF9900"],
  ["GraphQL", "#E535AB"],
  ["Prisma", "#b5abfc"],
  ["LangChain", "#9184d9"],
  ["OpenAI", "#e9e9ed"],
  ["Claude", "#d97757"],
  ["RAG", "#9184d9"],
  ["Tailwind", "#38B2AC"],
  ["Kafka", "#b2b6ca"],
  ["CI/CD", "#b5abfc"],
  ["TurboRepo", "#e05b7a"],
];

function labelTexture(text: string, color: string) {
  const dpr = 2;
  const pad = 26;
  const fs = 44;
  const measure = document.createElement("canvas").getContext("2d")!;
  measure.font = `500 ${fs}px Inter, system-ui, sans-serif`;
  const w = Math.ceil(measure.measureText(text).width) + pad * 2;
  const h = fs + pad * 1.3;
  const c = document.createElement("canvas");
  c.width = w * dpr;
  c.height = h * dpr;
  const x = c.getContext("2d")!;
  x.scale(dpr, dpr);
  const r = 12;
  x.beginPath();
  x.moveTo(r, 0);
  x.arcTo(w, 0, w, h, r);
  x.arcTo(w, h, 0, h, r);
  x.arcTo(0, h, 0, 0, r);
  x.arcTo(0, 0, w, 0, r);
  x.closePath();
  x.fillStyle = "rgba(35,37,50,0.92)";
  x.fill();
  x.lineWidth = 1.5;
  x.strokeStyle = color + "aa";
  x.stroke();
  x.font = `500 ${fs}px Inter, system-ui, sans-serif`;
  x.fillStyle = color;
  x.textAlign = "center";
  x.textBaseline = "middle";
  x.fillText(text, w / 2, h / 2 + 1);
  const t = new THREE.CanvasTexture(c);
  t.anisotropy = 4;
  return { texture: t, aspect: w / h };
}

export default function TechOrb() {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
    camera.position.set(0, 0, 11.5);
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
    renderer.domElement.style.cursor = "grab";
    host.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const R = 3.05;
    const n = STACK.length;
    const textures: THREE.CanvasTexture[] = [];
    STACK.forEach(([text, color], i) => {
      const y = 1 - (i / (n - 1)) * 2;
      const rad = Math.sqrt(Math.max(0, 1 - y * y));
      const theta = Math.PI * (3 - Math.sqrt(5)) * i;
      const { texture, aspect } = labelTexture(text, color);
      textures.push(texture);
      const sp = new THREE.Sprite(
        new THREE.SpriteMaterial({ map: texture, transparent: true, depthWrite: false })
      );
      const s = 0.4;
      sp.scale.set(s * aspect, s, 1);
      sp.position.set(Math.cos(theta) * rad * R, y * R, Math.sin(theta) * rad * R);
      group.add(sp);
    });

    const wireGeom = new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(R * 1.02, 1));
    const wireMat = new THREE.LineBasicMaterial({ color: 0x9184d9, transparent: true, opacity: 0.4 });
    const wire = new THREE.LineSegments(wireGeom, wireMat);
    group.add(wire);

    const coreGeom = new THREE.IcosahedronGeometry(R * 0.34, 2);
    const coreMat = new THREE.MeshBasicMaterial({ color: 0x9184d9, wireframe: true, transparent: true, opacity: 0.35 });
    const core = new THREE.Mesh(coreGeom, coreMat);
    group.add(core);

    let vx = 0.0016, vy = 0.0035, dragging = false, px = 0, py = 0, hover = false;
    const el = renderer.domElement;
    const pointOf = (e: PointerEvent) => e;
    const down = (e: PointerEvent) => {
      dragging = true;
      el.style.cursor = "grabbing";
      const p = pointOf(e);
      px = p.clientX;
      py = p.clientY;
    };
    const move = (e: PointerEvent) => {
      if (!dragging) return;
      const p = pointOf(e);
      vy = (p.clientX - px) * 0.00035;
      vx = (p.clientY - py) * 0.00035;
      px = p.clientX;
      py = p.clientY;
    };
    const up = () => {
      dragging = false;
      el.style.cursor = "grab";
    };
    const onEnter = () => (hover = true);
    const onLeave = () => (hover = false);
    el.addEventListener("pointerdown", down);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    el.addEventListener("mouseenter", onEnter);
    el.addEventListener("mouseleave", onLeave);

    const resize = () => {
      const w = host.clientWidth || 480;
      const h = host.clientHeight || 480;
      renderer.setSize(w, h, false);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(host);

    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    const tick = () => {
      raf = requestAnimationFrame(tick);
      if (!dragging && !reduce) {
        const k = hover ? 0.35 : 1;
        vy += (0.0035 * k - vy) * 0.02;
        vx += (0.0009 * k - vx) * 0.02;
      }
      group.rotation.y += vy;
      group.rotation.x += vx;
      group.rotation.x = Math.max(-0.6, Math.min(0.6, group.rotation.x));
      core.rotation.y -= 0.004;
      renderer.render(scene, camera);
    };
    tick();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      el.removeEventListener("pointerdown", down);
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      el.removeEventListener("mouseenter", onEnter);
      el.removeEventListener("mouseleave", onLeave);
      textures.forEach((t) => t.dispose());
      wireGeom.dispose();
      wireMat.dispose();
      coreGeom.dispose();
      coreMat.dispose();
      renderer.dispose();
      host.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={hostRef} style={{ width: "100%", height: "100%" }} />;
}
