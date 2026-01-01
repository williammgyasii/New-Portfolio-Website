"use client";

import React, { useRef, useEffect, Suspense, useState, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useMotionValue, useReducedMotion } from "framer-motion";

// Color themes
export type ColorTheme = "blue" | "amber" | "emerald" | "purple";

const themes = {
  blue: {
    primary: "#38bdf8",
    secondary: "#0ea5e9",
    accent: "#0284c7",
    particle: "#38bdf8",
  },
  amber: {
    primary: "#fbbf24",
    secondary: "#f59e0b",
    accent: "#d97706",
    particle: "#fcd34d",
  },
  emerald: {
    primary: "#34d399",
    secondary: "#10b981",
    accent: "#059669",
    particle: "#6ee7b7",
  },
  purple: {
    primary: "#a78bfa",
    secondary: "#8b5cf6",
    accent: "#7c3aed",
    particle: "#c4b5fd",
  },
};

// Hook to detect mobile/low-power devices
function useDeviceOptimization() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const checkMobile = () => {
      const mobile =
        window.innerWidth < 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(mobile);
    };

    const checkLowPower = () => {
      const lowCores =
        navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
      const lowMemory =
        (navigator as Navigator & { deviceMemory?: number }).deviceMemory &&
        (navigator as Navigator & { deviceMemory?: number }).deviceMemory! <= 4;
      setIsLowPower(Boolean(lowCores || lowMemory));
    };

    checkMobile();
    checkLowPower();

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return {
    isMobile,
    isLowPower,
    shouldSimplify: isMobile || isLowPower || Boolean(prefersReducedMotion),
  };
}

// Floating Particles - optimized for mobile
function Particles({
  count = 60,
  color = "#38bdf8",
  isMobile = false,
}: {
  count?: number;
  color?: string;
  isMobile?: boolean;
}) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Reduce particle count on mobile
  const actualCount = isMobile ? Math.floor(count / 3) : count;

  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < actualCount; i++) {
      const x = (Math.random() - 0.5) * 25;
      const y = (Math.random() - 0.5) * 25;
      const z = (Math.random() - 0.5) * 15;
      const scale = Math.random() * 0.08 + 0.02;
      temp.push({ x, y, z, scale, speed: Math.random() * 0.3 + 0.1 });
    }
    return temp;
  }, [actualCount]);

  useFrame((state) => {
    if (!mesh.current) return;

    // Skip some frames on mobile for better performance
    if (isMobile && Math.floor(state.clock.elapsedTime * 30) % 2 !== 0) return;

    particles.forEach((particle, i) => {
      const t = state.clock.elapsedTime * particle.speed * (isMobile ? 0.5 : 1);
      dummy.position.set(
        particle.x + Math.sin(t + i) * (isMobile ? 0.4 : 0.8),
        particle.y + Math.cos(t + i * 0.5) * (isMobile ? 0.4 : 0.8),
        particle.z + Math.sin(t * 0.5) * (isMobile ? 0.15 : 0.3)
      );
      dummy.scale.setScalar(particle.scale);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, actualCount]}>
      <sphereGeometry args={[1, isMobile ? 4 : 8, isMobile ? 4 : 8]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={isMobile ? 0.4 : 0.5}
      />
    </instancedMesh>
  );
}

// Floating Ring - simplified on mobile
function FloatingRing({
  color = "#0ea5e9",
  isMobile = false,
}: {
  color?: string;
  isMobile?: boolean;
}) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      // Slower animation on mobile
      const speed = isMobile ? 0.5 : 1;
      ringRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3 * speed) * 0.3;
      ringRef.current.rotation.y = state.clock.elapsedTime * 0.15 * speed;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, -6]}>
      <torusGeometry args={[4, 0.02, isMobile ? 8 : 16, isMobile ? 50 : 100]} />
      <meshBasicMaterial
        color={color}
        transparent
        opacity={isMobile ? 0.2 : 0.25}
      />
    </mesh>
  );
}

// Second Ring - skip on mobile
function FloatingRing2({
  color = "#0ea5e9",
  isMobile = false,
}: {
  color?: string;
  isMobile?: boolean;
}) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    // Skip animation on mobile
    if (isMobile || !ringRef.current) return;
    ringRef.current.rotation.x = state.clock.elapsedTime * 0.1;
    ringRef.current.rotation.z = Math.cos(state.clock.elapsedTime * 0.2) * 0.4;
  });

  // Skip rendering on mobile for performance
  if (isMobile) return null;

  return (
    <mesh ref={ringRef} position={[0, 0, -8]}>
      <torusGeometry args={[5.5, 0.015, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.15} />
    </mesh>
  );
}

// Floating geometric shapes - reduced on mobile
function FloatingShapes({
  theme,
  isMobile = false,
}: {
  theme: ColorTheme;
  isMobile?: boolean;
}) {
  const colors = themes[theme];

  // Only 2 shapes on mobile
  if (isMobile) {
    return (
      <>
        <mesh position={[4, 2, -4]} rotation={[0.5, 0.5, 0]}>
          <octahedronGeometry args={[0.5]} />
          <meshBasicMaterial color={colors.primary} wireframe />
        </mesh>
        <mesh position={[-4, -2, -3]} rotation={[0.3, 0.3, 0]}>
          <icosahedronGeometry args={[0.4]} />
          <meshBasicMaterial color={colors.secondary} wireframe />
        </mesh>
      </>
    );
  }

  return (
    <>
      <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
        <mesh position={[5, 3, -4]}>
          <octahedronGeometry args={[0.6]} />
          <meshStandardMaterial color={colors.primary} wireframe />
        </mesh>
      </Float>
      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh position={[-5, -2, -3]}>
          <icosahedronGeometry args={[0.5]} />
          <meshStandardMaterial color={colors.secondary} wireframe />
        </mesh>
      </Float>
      <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
        <mesh position={[-4, 4, -5]}>
          <dodecahedronGeometry args={[0.4]} />
          <meshStandardMaterial color={colors.accent} wireframe />
        </mesh>
      </Float>
      <Float speed={2.2} rotationIntensity={0.6} floatIntensity={0.9}>
        <mesh position={[4, -3, -4]}>
          <tetrahedronGeometry args={[0.5]} />
          <meshStandardMaterial color={colors.primary} wireframe />
        </mesh>
      </Float>
    </>
  );
}

// Camera that follows mouse - disabled on mobile
function CameraRig({ isMobile = false }: { isMobile?: boolean }) {
  const { camera } = useThree();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const lastUpdateRef = useRef(0);

  useEffect(() => {
    // Skip mouse tracking on mobile
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      // Throttle updates
      const now = Date.now();
      if (now - lastUpdateRef.current < 16) return;
      lastUpdateRef.current = now;

      mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY, isMobile]);

  useFrame(() => {
    // Skip camera animation on mobile
    if (isMobile) return;

    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mouseX.get() * 0.4,
      0.03
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      -mouseY.get() * 0.25,
      0.03
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// Main Scene - optimized version
function Scene({
  theme,
  isMobile = false,
}: {
  theme: ColorTheme;
  isMobile?: boolean;
}) {
  const colors = themes[theme];

  return (
    <>
      <CameraRig isMobile={isMobile} />
      <ambientLight intensity={isMobile ? 0.6 : 0.4} />
      <pointLight
        position={[10, 10, 10]}
        intensity={isMobile ? 0.6 : 0.8}
        color={colors.primary}
      />
      {!isMobile && (
        <pointLight
          position={[-10, -10, 5]}
          intensity={0.4}
          color={colors.secondary}
        />
      )}
      <Particles count={70} color={colors.particle} isMobile={isMobile} />
      <FloatingRing color={colors.primary} isMobile={isMobile} />
      <FloatingRing2 color={colors.secondary} isMobile={isMobile} />
      <FloatingShapes theme={theme} isMobile={isMobile} />
    </>
  );
}

// Exported 3D Background Component
interface Scene3DProps {
  theme?: ColorTheme;
  className?: string;
}

export function Scene3D({ theme = "blue", className = "" }: Scene3DProps) {
  const { isMobile, shouldSimplify } = useDeviceOptimization();
  const [isVisible, setIsVisible] = useState(true);

  // Pause rendering when not visible (saves battery on mobile)
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Don't render if page is hidden
  if (!isVisible) {
    return <div className={`fixed inset-0 z-0 bg-[#0a0a0f] ${className}`} />;
  }

  return (
    <div className={`fixed inset-0 z-0 ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 10], fov: 45 }}
        dpr={isMobile ? [1, 1.5] : [1, 2]} // Lower resolution on mobile
        performance={{ min: 0.5 }} // Allow frame rate to drop
        gl={{
          antialias: !shouldSimplify, // Disable antialiasing on mobile
          powerPreference: shouldSimplify ? "low-power" : "high-performance",
          alpha: true,
        }}
        frameloop={shouldSimplify ? "demand" : "always"} // Only render when needed on mobile
      >
        <Suspense fallback={null}>
          <Scene theme={theme} isMobile={shouldSimplify} />
        </Suspense>
      </Canvas>
    </div>
  );
}

// Gradient overlay that matches the theme
export function Scene3DOverlay({ theme = "blue" }: { theme?: ColorTheme }) {
  const overlayColors = {
    blue: "from-transparent via-[#0a0a0f]/60 to-[#0a0a0f]",
    amber: "from-transparent via-[#0f0a05]/60 to-[#0f0a05]",
    emerald: "from-transparent via-[#050f0a]/60 to-[#050f0a]",
    purple: "from-transparent via-[#0a050f]/60 to-[#0a050f]",
  };

  return (
    <div
      className={`fixed inset-0 bg-gradient-to-b ${overlayColors[theme]} pointer-events-none z-[1]`}
    />
  );
}
