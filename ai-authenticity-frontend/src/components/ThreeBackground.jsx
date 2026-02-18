import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    // ===== THEME COLOR (Deep AI Blue Gradient Feel) =====
    scene.background = new THREE.Color(0x0f172a); // dark navy

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({ alpha: false, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // =========================
    // CREATE AI NETWORK NODES
    // =========================
    const nodeCount = 140;
    const positions = new Float32Array(nodeCount * 3);

    for (let i = 0; i < nodeCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 120;
    }

    const nodesGeometry = new THREE.BufferGeometry();
    nodesGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const nodesMaterial = new THREE.PointsMaterial({
      color: 0x38bdf8, // soft cyan blue
      size: 1.4,
      transparent: true,
      opacity: 0.9,
      blending: THREE.AdditiveBlending,
    });

    const nodes = new THREE.Points(nodesGeometry, nodesMaterial);
    scene.add(nodes);

    // =========================
    // CREATE CONNECTION EDGES
    // =========================
    const linePositions = [];
    const threshold = 22;

    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];

        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);

        if (distance < threshold) {
          linePositions.push(
            positions[i * 3],
            positions[i * 3 + 1],
            positions[i * 3 + 2],
            positions[j * 3],
            positions[j * 3 + 1],
            positions[j * 3 + 2]
          );
        }
      }
    }

    const linesGeometry = new THREE.BufferGeometry();
    linesGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x60a5fa, // lighter AI blue
      transparent: true,
      opacity: 0.12,
    });

    const connections = new THREE.LineSegments(
      linesGeometry,
      lineMaterial
    );

    scene.add(connections);

    // =========================
    // SCANNING WAVE EFFECT
    // =========================
    const clock = new THREE.Clock();

    const animate = () => {
      requestAnimationFrame(animate);

      const elapsed = clock.getElapsedTime();

      // slow network rotation
      nodes.rotation.y = elapsed * 0.05;
      connections.rotation.y = elapsed * 0.05;

      // vertical subtle wave motion
      nodes.position.y = Math.sin(elapsed * 0.3) * 2;
      connections.position.y = Math.sin(elapsed * 0.3) * 2;

      // pulsing glow effect
      nodesMaterial.size = 1.4 + Math.sin(elapsed * 2) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // =========================
    // RESPONSIVE
    // =========================
    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    // =========================
    // CLEANUP
    // =========================
    return () => {
      window.removeEventListener("resize", handleResize);

      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }

      nodesGeometry.dispose();
      nodesMaterial.dispose();
      linesGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: -1,
      }}
    />
  );
};

export default ThreeBackground;
