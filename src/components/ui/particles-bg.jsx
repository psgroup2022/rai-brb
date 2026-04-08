import { useEffect, useCallback } from "react";

export default function ParticlesComponent({
  id = "particles-js",
  className = "",
}) {
  const initParticles = useCallback((isDark) => {
    const host = document.getElementById(id);
    if (!host || !window.particlesJS) return;

    const oldCanvas = host.querySelector("canvas");
    if (oldCanvas) oldCanvas.remove();

    if (window.pJSDom?.length > 0) {
      window.pJSDom.forEach((p) => p?.pJS?.fn?.vendors?.destroypJS?.());
      window.pJSDom = [];
    }

    const colors = isDark
      ? {
          particles: "#00f5ff",
          lines: "#00d9ff",
          accent: "#0096c7",
        }
      : {
          particles: "#0277bd",
          lines: "#0288d1",
          accent: "#039be5",
        };

    window.particlesJS(id, {
      particles: {
        number: { value: 140, density: { enable: true, value_area: 800 } },
        color: { value: colors.particles },
        shape: { type: "circle", stroke: { width: 0.5, color: colors.accent } },
        opacity: {
          value: 0.7,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.3 },
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: true, speed: 2, size_min: 1 },
        },
        line_linked: {
          enable: true,
          distance: 160,
          color: colors.lines,
          opacity: 0.4,
          width: 1.2,
        },
        move: { enable: true, speed: 2, random: true, out_mode: "bounce" },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: { enable: true, mode: "grab" },
          onclick: { enable: true, mode: "push" },
          resize: true,
        },
        modes: {
          grab: { distance: 220, line_linked: { opacity: 0.8 } },
          push: { particles_nb: 4 },
          repulse: { distance: 180, duration: 0.4 },
        },
      },
      retina_detect: true,
    });
  }, [id]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    let observer;
    let script;

    const html = document.documentElement;
    const detectDark = () =>
      html.classList.contains("dark") || html.getAttribute("data-theme") === "dark";

    const ensureInit = () => initParticles(detectDark());

    const existingScript = document.querySelector('script[src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"]');

    if (existingScript && window.particlesJS) {
      ensureInit();
    } else {
      script = existingScript || document.createElement("script");
      script.src = "https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js";
      script.async = true;
      if (!existingScript) document.body.appendChild(script);
      script.onload = ensureInit;
    }

    observer = new MutationObserver(ensureInit);
    observer.observe(html, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => {
      observer?.disconnect();
    };
  }, [initParticles]);

  return <div id={id} className={className} />;
}
