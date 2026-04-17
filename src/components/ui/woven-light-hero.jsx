import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import * as THREE from "three";

export const WovenLightHero = ({
    title = "Anexos",
    subtitle = "",
    label = "",
    buttonText,
    onButtonClick,
    height = "72vh",
}) => {
    const textControls = useAnimation();
    const buttonControls = useAnimation();

    useEffect(() => {
        const link = document.createElement("link");
        link.href =
            "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap";
        link.rel = "stylesheet";
        document.head.appendChild(link);

        textControls.start((i) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.08 + 0.7,
                duration: 0.9,
                ease: [0.2, 0.65, 0.3, 0.9],
            },
        }));

        buttonControls.start({
            opacity: 1,
            transition: { delay: 1.6, duration: 0.5 },
        });

        return () => {
            document.head.removeChild(link);
        };
    }, [textControls, buttonControls]);

    return (
        <section className="woven-hero-root" style={{ minHeight: height }}>
            <WovenCanvas />

            <div className="container woven-hero-content">
                {label && (
                    <motion.span
                        custom={0}
                        initial={{ opacity: 0, y: 30 }}
                        animate={textControls}
                        className="woven-hero-label"
                    >
                        {label}
                    </motion.span>
                )}

                <h1 className="woven-hero-title">
                    {title.split("").map((char, index) => (
                        <motion.span
                            key={`${char}-${index}`}
                            custom={index + 1}
                            initial={{ opacity: 0, y: 50 }}
                            animate={textControls}
                            style={{ display: "inline-block" }}
                        >
                            {char === " " ? "\u00A0" : char}
                        </motion.span>
                    ))}
                </h1>

                {subtitle && (
                    <motion.p
                        custom={title.length + 2}
                        initial={{ opacity: 0, y: 30 }}
                        animate={textControls}
                        className="woven-hero-subtitle"
                    >
                        {subtitle}
                    </motion.p>
                )}

                {buttonText && (
                    <motion.div initial={{ opacity: 0 }} animate={buttonControls} className="woven-hero-actions">
                        <button type="button" className="woven-hero-button" onClick={onButtonClick}>
                            {buttonText}
                        </button>
                    </motion.div>
                )}
            </div>

            <style jsx="true">{`
                .woven-hero-root {
                    position: relative;
                    overflow: hidden;
                    display: flex;
                    align-items: center;
                    background: #030b1a;
                    isolation: isolate;
                }
                .woven-hero-root::after {
                    content: "";
                    position: absolute;
                    inset: 0;
                    background: radial-gradient(circle at 30% 20%, rgba(0, 174, 239, 0.26), transparent 45%),
                        radial-gradient(circle at 75% 80%, rgba(84, 84, 255, 0.2), transparent 44%),
                        linear-gradient(180deg, rgba(2, 11, 31, 0.7) 0%, rgba(2, 11, 31, 0.88) 100%);
                    z-index: 1;
                }
                .woven-hero-content {
                    position: relative;
                    z-index: 2;
                    text-align: center;
                    padding-top: 110px;
                    padding-bottom: 70px;
                }
                .woven-hero-label {
                    display: inline-block;
                    margin-bottom: 14px;
                    color: #8fdfff;
                    font-family: "Inter", sans-serif;
                    font-weight: 700;
                    letter-spacing: 0.18em;
                    text-transform: uppercase;
                    font-size: 0.75rem;
                }
                .woven-hero-title {
                    margin: 0;
                    color: #ffffff;
                    font-family: "Inter", sans-serif;
                    font-weight: 800;
                    font-size: clamp(2.7rem, 8vw, 5.8rem);
                    line-height: 1.05;
                    text-shadow: 0 0 36px rgba(255, 255, 255, 0.24);
                }
                .woven-hero-subtitle {
                    margin: 22px auto 0;
                    max-width: 830px;
                    color: rgba(227, 242, 253, 0.88);
                    font-family: "Inter", sans-serif;
                    font-size: clamp(0.98rem, 2vw, 1.08rem);
                    line-height: 1.7;
                }
                .woven-hero-actions {
                    margin-top: 30px;
                }
                .woven-hero-button {
                    border: 1px solid rgba(255, 255, 255, 0.24);
                    background: rgba(255, 255, 255, 0.08);
                    color: #fff;
                    border-radius: 999px;
                    padding: 12px 28px;
                    font-family: "Inter", sans-serif;
                    font-weight: 600;
                    transition: all 0.25s ease;
                    backdrop-filter: blur(4px);
                }
                .woven-hero-button:hover {
                    background: rgba(255, 255, 255, 0.18);
                    transform: translateY(-1px);
                }
                @media (max-width: 991px) {
                    .woven-hero-content {
                        padding-top: 100px;
                        padding-bottom: 54px;
                    }
                }
            `}</style>
        </section>
    );
};

const WovenCanvas = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return undefined;

        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );
        camera.position.z = 5;

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement);

        const mouse = new THREE.Vector2(0, 0);
        const mouseTarget = new THREE.Vector2(0, 0);
        const clock = new THREE.Clock();

        const particleCount = 12000;
        const positions = new Float32Array(particleCount * 3);
        const originalPositions = new Float32Array(particleCount * 3);
        const colors = new Float32Array(particleCount * 3);
        const velocities = new Float32Array(particleCount * 3);

        const geometry = new THREE.BufferGeometry();
        const torusKnot = new THREE.TorusKnotGeometry(1.5, 0.5, 200, 32);

        for (let i = 0; i < particleCount; i += 1) {
            const vertexIndex = i % torusKnot.attributes.position.count;
            const x = torusKnot.attributes.position.getX(vertexIndex);
            const y = torusKnot.attributes.position.getY(vertexIndex);
            const z = torusKnot.attributes.position.getZ(vertexIndex);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;
            originalPositions[i * 3] = x;
            originalPositions[i * 3 + 1] = y;
            originalPositions[i * 3 + 2] = z;

            const color = new THREE.Color();
            color.setHSL(Math.random(), 0.8, 0.62);
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
        geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

        const material = new THREE.PointsMaterial({
            size: 0.018,
            vertexColors: true,
            blending: THREE.AdditiveBlending,
            transparent: true,
            opacity: 0.82,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        const handleMouseMove = (event) => {
            mouseTarget.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseTarget.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener("mousemove", handleMouseMove);

        let rafId = null;
        const animate = () => {
            rafId = window.requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();
            mouse.x += (mouseTarget.x - mouse.x) * 0.12;
            mouse.y += (mouseTarget.y - mouse.y) * 0.12;
            const mouseWorld = new THREE.Vector3(mouse.x * 3, mouse.y * 3, 0);

            for (let i = 0; i < particleCount; i += 1) {
                const ix = i * 3;
                const iy = i * 3 + 1;
                const iz = i * 3 + 2;

                const currentPos = new THREE.Vector3(positions[ix], positions[iy], positions[iz]);
                const originalPos = new THREE.Vector3(
                    originalPositions[ix],
                    originalPositions[iy],
                    originalPositions[iz]
                );
                const velocity = new THREE.Vector3(velocities[ix], velocities[iy], velocities[iz]);

                const dist = currentPos.distanceTo(mouseWorld);
                if (dist < 2.4) {
                    const force = (2.4 - dist) * 0.045;
                    const direction = new THREE.Vector3()
                        .subVectors(currentPos, mouseWorld)
                        .normalize();
                    velocity.add(direction.multiplyScalar(force));
                }

                const returnForce = new THREE.Vector3()
                    .subVectors(originalPos, currentPos)
                    .multiplyScalar(0.0018);
                velocity.add(returnForce);
                velocity.multiplyScalar(0.9);

                positions[ix] += velocity.x;
                positions[iy] += velocity.y;
                positions[iz] += velocity.z;

                velocities[ix] = velocity.x;
                velocities[iy] = velocity.y;
                velocities[iz] = velocity.z;
            }

            geometry.attributes.position.needsUpdate = true;
            points.rotation.y = elapsedTime * 0.08;
            points.rotation.x = Math.sin(elapsedTime * 0.35) * 0.08;
            renderer.render(scene, camera);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener("resize", handleResize);

        return () => {
            window.cancelAnimationFrame(rafId);
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("mousemove", handleMouseMove);
            torusKnot.dispose();
            geometry.dispose();
            material.dispose();
            renderer.dispose();
            mountRef.current?.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={mountRef} style={{ position: "absolute", inset: 0, zIndex: 0 }} />;
};

export default WovenLightHero;
