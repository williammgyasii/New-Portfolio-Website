"use client";

import { useLoading } from "@/app/contexts/LoadingSpinnerProvider";
import { person } from "@/lib/content";
import { Projects } from "@/lib/projects";
import { capitalizeFirstLetter } from "@/utils/string.utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  ChevronRight,
  ChevronLeft,
  ExternalLink,
  ArrowLeft,
  Zap,
  Target,
  Lightbulb,
  Trophy,
  Gamepad2,
  ArrowRight,
  AlertTriangle,
  Rocket,
  Users,
  Clock,
  BarChart3,
  Calendar,
  Palette,
  Shield,
  Puzzle,
  BookOpen,
  CheckCircle2,
  Circle,
  ArrowUpRight,
  Layers,
  Code2,
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import {
  useEffect,
  useMemo,
  useState,
  useRef,
  Suspense,
  useCallback,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars, Sparkles, MeshDistortMaterial } from "@react-three/drei";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import * as THREE from "three";

// Hook to detect mobile/low-power devices
function useDeviceOptimization() {
  const [isMobile, setIsMobile] = useState(false);
  const [isLowPower, setIsLowPower] = useState(false);
  const [shouldReduceMotion, setShouldReduceMotion] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    // Check for mobile
    const checkMobile = () => {
      const mobile =
        window.innerWidth < 768 ||
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(mobile);
    };

    // Check for low-power mode or low-end device
    const checkLowPower = () => {
      // Check hardware concurrency (CPU cores)
      const lowCores =
        navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4;
      // Check device memory (if available)
      const lowMemory =
        (navigator as Navigator & { deviceMemory?: number }).deviceMemory &&
        (navigator as Navigator & { deviceMemory?: number }).deviceMemory! <= 4;
      // Check connection type
      const connection = (
        navigator as Navigator & { connection?: { effectiveType?: string } }
      ).connection;
      const slowConnection =
        connection?.effectiveType === "2g" ||
        connection?.effectiveType === "slow-2g";

      setIsLowPower(Boolean(lowCores || lowMemory || slowConnection));
    };

    checkMobile();
    checkLowPower();
    setShouldReduceMotion(Boolean(prefersReducedMotion));

    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [prefersReducedMotion]);

  return { isMobile, isLowPower, shouldReduceMotion };
}

// Interactive floating crystal that follows mouse (optimized for mobile)
function InteractiveCrystal({
  mousePosition,
  isMobile,
}: {
  mousePosition: { x: number; y: number };
  isMobile: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const glowRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      if (isMobile) {
        // Simple rotation on mobile, no mouse tracking
        meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
        meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      } else {
        // Smooth follow mouse on desktop
        meshRef.current.position.x = THREE.MathUtils.lerp(
          meshRef.current.position.x,
          mousePosition.x * 3,
          0.02
        );
        meshRef.current.position.y = THREE.MathUtils.lerp(
          meshRef.current.position.y,
          mousePosition.y * 2,
          0.02
        );
        meshRef.current.rotation.x =
          state.clock.elapsedTime * 0.3 + mousePosition.y * 0.5;
        meshRef.current.rotation.y =
          state.clock.elapsedTime * 0.5 + mousePosition.x * 0.5;
      }
    }
    if (glowRef.current && !isMobile) {
      glowRef.current.position.copy(
        meshRef.current?.position || new THREE.Vector3()
      );
      glowRef.current.scale.setScalar(
        1.5 + Math.sin(state.clock.elapsedTime * 2) * 0.2
      );
    }
  });

  return (
    <group>
      {/* Main crystal - simpler on mobile */}
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <octahedronGeometry args={[isMobile ? 0.6 : 0.8, 0]} />
        {isMobile ? (
          // Simple material on mobile
          <meshStandardMaterial
            color="#38bdf8"
            emissive="#0ea5e9"
            emissiveIntensity={0.3}
            metalness={0.8}
            roughness={0.2}
          />
        ) : (
          <MeshDistortMaterial
            color="#38bdf8"
            emissive="#0ea5e9"
            emissiveIntensity={0.5}
            metalness={0.9}
            roughness={0.1}
            distort={0.3}
            speed={2}
          />
        )}
      </mesh>
      {/* Glow effect - only on desktop */}
      {!isMobile && (
        <mesh ref={glowRef}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color="#38bdf8" transparent opacity={0.1} />
        </mesh>
      )}
    </group>
  );
}

// Floating tech orbs around the scene (optimized for mobile)
function TechOrbs({ isMobile }: { isMobile: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y =
        state.clock.elapsedTime * (isMobile ? 0.05 : 0.1);
    }
  });

  const orbs = useMemo(() => {
    // Fewer orbs on mobile
    const count = isMobile ? 4 : 8;
    return Array.from({ length: count }, (_, i) => ({
      position: [
        Math.cos((i / count) * Math.PI * 2) * (isMobile ? 3 : 4),
        Math.sin((i / count) * Math.PI * 2) * (isMobile ? 1.5 : 2) +
          Math.sin(i) * 0.5,
        Math.sin((i / count) * Math.PI * 2) * (isMobile ? 3 : 4),
      ] as [number, number, number],
      color: ["#38bdf8", "#0ea5e9", "#22d3ee", "#06b6d4"][i % 4],
      size: isMobile ? 0.12 : 0.15 + Math.random() * 0.15,
    }));
  }, [isMobile]);

  // On mobile, skip Float wrapper for better performance
  if (isMobile) {
    return (
      <group ref={groupRef}>
        {orbs.map((orb, i) => (
          <mesh key={i} position={orb.position}>
            <icosahedronGeometry args={[orb.size, 0]} />
            <meshBasicMaterial color={orb.color} />
          </mesh>
        ))}
      </group>
    );
  }

  return (
    <group ref={groupRef}>
      {orbs.map((orb, i) => (
        <Float key={i} speed={2} rotationIntensity={1} floatIntensity={2}>
          <mesh position={orb.position}>
            <icosahedronGeometry args={[orb.size, 0]} />
            <meshStandardMaterial
              color={orb.color}
              emissive={orb.color}
              emissiveIntensity={0.8}
              metalness={0.5}
              roughness={0.2}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

// Animated connection lines (skip on mobile for performance)
function ConnectionLines({ isMobile }: { isMobile: boolean }) {
  const linesRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  // Skip connection lines on mobile
  if (isMobile) return null;

  return (
    <group ref={linesRef}>
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const radius = 5;
        return (
          <mesh
            key={i}
            position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
            rotation={[0, angle, 0]}
          >
            <boxGeometry args={[0.02, 0.02, 3]} />
            <meshBasicMaterial color="#38bdf8" transparent opacity={0.3} />
          </mesh>
        );
      })}
    </group>
  );
}

// Interactive scene with mouse tracking (optimized for mobile)
function Scene3D({
  mousePosition,
  isMobile,
}: {
  mousePosition: { x: number; y: number };
  isMobile: boolean;
}) {
  const { camera } = useThree();

  useFrame(() => {
    // Skip camera animation on mobile
    if (isMobile) return;

    // Camera follows mouse slightly on desktop
    camera.position.x = THREE.MathUtils.lerp(
      camera.position.x,
      mousePosition.x * 0.5,
      0.01
    );
    camera.position.y = THREE.MathUtils.lerp(
      camera.position.y,
      mousePosition.y * 0.3 + 2,
      0.01
    );
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {/* Ambient lighting */}
      <ambientLight intensity={isMobile ? 0.5 : 0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#38bdf8" />
      {!isMobile && (
        <pointLight
          position={[-10, -10, -10]}
          intensity={0.5}
          color="#0ea5e9"
        />
      )}

      {/* Stars background - reduced on mobile */}
      <Stars
        radius={50}
        depth={50}
        count={isMobile ? 500 : 2000}
        factor={isMobile ? 3 : 4}
        saturation={0}
        fade
        speed={isMobile ? 0.5 : 1}
      />

      {/* Sparkles - reduced on mobile */}
      {!isMobile && (
        <Sparkles count={100} scale={10} size={2} speed={0.3} color="#38bdf8" />
      )}

      {/* Interactive elements */}
      <InteractiveCrystal mousePosition={mousePosition} isMobile={isMobile} />
      <TechOrbs isMobile={isMobile} />
      <ConnectionLines isMobile={isMobile} />

      {/* Ground plane with grid effect - simplified on mobile */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
        <planeGeometry args={isMobile ? [30, 30, 20, 20] : [50, 50, 50, 50]} />
        <meshBasicMaterial
          color="#0ea5e9"
          wireframe
          transparent
          opacity={0.1}
        />
      </mesh>
    </>
  );
}

// Animated stat card component
function StatCard({
  icon: Icon,
  title,
  value,
  delay,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  value: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300" />
      <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl p-6 overflow-hidden">
        {/* Animated corner glow */}
        <div className="absolute -top-10 -right-10 w-20 h-20 bg-sky-500/30 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

        <Icon className="w-8 h-8 text-sky-400 mb-3" />
        <h3 className="text-white/60 text-sm font-medium">{title}</h3>
        <p className="text-white text-2xl font-bold mt-1">{value}</p>
      </div>
    </motion.div>
  );
}

// Feature card with hover animation
function FeatureCard({
  feature,
  index,
}: {
  feature: { title: string; description?: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ x: 10 }}
      className="group relative"
    >
      <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-sky-500/30 transition-all duration-300">
        {/* Animated indicator */}
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-sky-500" />
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-sky-400 animate-ping" />
        </div>

        <div className="flex-1">
          <h4 className="text-white font-semibold text-lg group-hover:text-sky-400 transition-colors">
            {feature.title}
          </h4>
          {feature.description && (
            <p className="text-white/60 text-sm mt-1">{feature.description}</p>
          )}
        </div>

        {/* Arrow on hover */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight className="w-5 h-5 text-sky-400" />
        </motion.div>
      </div>
    </motion.div>
  );
}

// Tech badge with glow effect
function TechBadge({
  tech,
  index,
}: {
  tech: { name: string; icon: React.ReactNode };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: index * 0.05,
      }}
      whileHover={{ scale: 1.1, y: -5 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-sky-500/20 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-sky-500/50 transition-all duration-300">
        <span className="text-white/80">{tech.icon}</span>
        <span className="text-white text-sm font-medium">{tech.name}</span>
      </div>
    </motion.div>
  );
}

// Section with animated heading
function Section({
  title,
  icon: Icon,
  children,
  subtitle,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
  subtitle?: string;
}) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      {/* Section heading */}
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 rounded-lg bg-sky-500/20 border border-sky-500/30">
          <Icon className="w-5 h-5 text-sky-400" />
        </div>
        <h2 className="text-white text-2xl font-bold">{title}</h2>
        <div className="flex-1 h-px bg-gradient-to-r from-sky-500/50 to-transparent" />
      </div>
      {subtitle && (
        <p className="text-white/50 text-sm mb-6 ml-12">{subtitle}</p>
      )}
      {!subtitle && <div className="mb-6" />}

      {children}
    </motion.section>
  );
}

// Pain point item
function PainPointItem({ point, index }: { point: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex items-start gap-3 p-3 rounded-lg bg-red-500/5 border border-red-500/10"
    >
      <AlertTriangle className="w-4 h-4 text-red-400 mt-0.5 flex-shrink-0" />
      <span className="text-white/70 text-sm">{point}</span>
    </motion.div>
  );
}

// Principle card
function PrincipleCard({
  principle,
  index,
}: {
  principle: { title: string; description: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 to-cyan-500/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative p-5 rounded-xl bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all h-full">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-8 h-8 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold text-sm">
            {index + 1}
          </div>
          <h4 className="text-white font-semibold">{principle.title}</h4>
        </div>
        <p className="text-white/60 text-sm leading-relaxed">
          {principle.description}
        </p>
      </div>
    </motion.div>
  );
}

// Architecture layer card
function ArchitectureLayerCard({
  layer,
  index,
}: {
  layer: { name: string; tech: string; description: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <div className="flex gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all">
        <div className="w-1 bg-gradient-to-b from-sky-500 to-cyan-500 rounded-full" />
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-white font-semibold">{layer.name}</h4>
            <span className="px-2 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-mono">
              {layer.tech}
            </span>
          </div>
          <p className="text-white/60 text-sm">{layer.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Audience segment card
function AudienceCard({
  segment,
  index,
  isPrimary,
}: {
  segment: { segment: string; need: string };
  index: number;
  isPrimary: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className={`p-4 rounded-xl border transition-all ${
        isPrimary
          ? "bg-sky-500/10 border-sky-500/30"
          : "bg-white/5 border-white/10"
      }`}
    >
      <div className="flex items-center gap-2 mb-2">
        <Users
          className={`w-4 h-4 ${isPrimary ? "text-sky-400" : "text-white/40"}`}
        />
        <h4 className="text-white font-medium">{segment.segment}</h4>
      </div>
      <p className="text-white/60 text-sm">{segment.need}</p>
    </motion.div>
  );
}

// Development phase item
function PhaseItem({
  phase,
  index,
}: {
  phase: {
    phase: string;
    duration: string;
    status: string;
    description: string;
  };
  index: number;
}) {
  const statusColors = {
    completed: "bg-green-500",
    "in-progress": "bg-sky-500",
    planned: "bg-white/20",
  };

  const statusIcons = {
    completed: <CheckCircle2 className="w-4 h-4 text-green-400" />,
    "in-progress": <Circle className="w-4 h-4 text-sky-400 animate-pulse" />,
    planned: <Circle className="w-4 h-4 text-white/40" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex gap-4">
        {/* Timeline line */}
        <div className="flex flex-col items-center">
          <div
            className={`w-3 h-3 rounded-full ${
              statusColors[phase.status as keyof typeof statusColors]
            }`}
          />
          {index < 4 && <div className="w-0.5 h-full bg-white/10 mt-2" />}
        </div>

        <div className="flex-1 pb-6">
          <div className="flex items-center gap-3 mb-2">
            <h4 className="text-white font-semibold">{phase.phase}</h4>
            {statusIcons[phase.status as keyof typeof statusIcons]}
            <span className="text-white/40 text-xs">{phase.duration}</span>
          </div>
          <p className="text-white/60 text-sm">{phase.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// KPI card
function KPICard({
  kpi,
  index,
}: {
  kpi: { metric: string; target: string; description: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all h-full">
        <div className="flex items-center justify-between mb-3">
          <BarChart3 className="w-5 h-5 text-sky-400" />
          <span className="text-sky-400 font-bold text-lg">{kpi.target}</span>
        </div>
        <h4 className="text-white font-medium mb-1">{kpi.metric}</h4>
        <p className="text-white/50 text-xs">{kpi.description}</p>
      </div>
    </motion.div>
  );
}

// Roadmap item
function RoadmapItem({
  item,
  index,
}: {
  item: { feature: string; timeline: string; description: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex gap-4 items-start group"
    >
      <div className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-400 text-xs font-medium whitespace-nowrap">
        {item.timeline}
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2 mb-1">
          <h4 className="text-white font-medium group-hover:text-sky-400 transition-colors">
            {item.feature}
          </h4>
          <ArrowUpRight className="w-3 h-3 text-white/40 group-hover:text-sky-400 transition-colors" />
        </div>
        <p className="text-white/60 text-sm">{item.description}</p>
      </div>
    </motion.div>
  );
}

// Design decision card
function DesignDecisionCard({
  decision,
  index,
}: {
  decision: { decision: string; reasoning: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="p-5 rounded-xl bg-white/5 border border-white/10"
    >
      <div className="flex items-start gap-3 mb-3">
        <Palette className="w-5 h-5 text-purple-400 mt-0.5" />
        <h4 className="text-white font-semibold">{decision.decision}</h4>
      </div>
      <p className="text-white/60 text-sm leading-relaxed ml-8">
        {decision.reasoning}
      </p>
    </motion.div>
  );
}

// Security item
function SecurityItem({
  item,
  index,
}: {
  item: { area: string; implementation: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="flex items-start gap-3 p-3 rounded-lg bg-green-500/5 border border-green-500/10"
    >
      <Shield className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
      <div>
        <span className="text-white font-medium text-sm">{item.area}:</span>
        <span className="text-white/60 text-sm ml-1">
          {item.implementation}
        </span>
      </div>
    </motion.div>
  );
}

// Integration badge
function IntegrationBadge({
  integration,
  index,
}: {
  integration: { name: string; purpose: string; status: string };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
        delay: index * 0.05,
      }}
      className="group relative"
    >
      <div className="p-4 rounded-xl bg-white/5 border border-white/10 hover:border-sky-500/30 transition-all">
        <div className="flex items-center justify-between mb-2">
          <h4 className="text-white font-medium">{integration.name}</h4>
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-medium ${
              integration.status === "integrated"
                ? "bg-green-500/20 text-green-400"
                : "bg-yellow-500/20 text-yellow-400"
            }`}
          >
            {integration.status}
          </span>
        </div>
        <p className="text-white/50 text-xs">{integration.purpose}</p>
      </div>
    </motion.div>
  );
}

// Project card for the carousel
function ProjectCarouselCard({
  project,
  isActive,
}: {
  project: (typeof Projects)[0];
  isActive: boolean;
}) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        whileTap={{ scale: 0.98 }}
        className={`relative group cursor-pointer transition-all duration-300 ${
          isActive ? "opacity-50 pointer-events-none" : ""
        }`}
      >
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 group-hover:border-sky-500/30 rounded-2xl p-6 h-full overflow-hidden">
          {/* Corner accent */}
          <div className="absolute -top-10 -right-10 w-20 h-20 bg-sky-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />

          {/* Status badge */}
          <div className="flex items-center justify-between mb-4">
            <span className="px-3 py-1 rounded-full bg-sky-500/20 border border-sky-500/30 text-sky-400 text-xs font-medium">
              {project.status === "in-progress" ? "Building" : "Completed"}
            </span>
            <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-sky-400 group-hover:translate-x-1 transition-all duration-300" />
          </div>

          {/* Project name */}
          <h3 className="text-white text-xl font-bold mb-2 group-hover:text-sky-400 transition-colors">
            {project.name}
          </h3>

          {/* Subline */}
          <p className="text-white/50 text-sm mb-4 line-clamp-2">
            {project.subline}
          </p>

          {/* Tech stack preview */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="px-2 py-1 rounded-lg bg-white/5 text-white/60 text-xs"
              >
                {tech.name}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="px-2 py-1 rounded-lg bg-white/5 text-white/40 text-xs">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Bottom line reveal */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-sky-500 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
        </div>
      </motion.div>
    </Link>
  );
}

// Projects carousel section
function OtherProjectsCarousel({ currentSlug }: { currentSlug: string }) {
  const otherProjects = Projects.filter((p) => p.slug !== currentSlug);
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      const cardWidth = containerRef.current.scrollWidth / otherProjects.length;
      containerRef.current.scrollTo({
        left: cardWidth * index,
        behavior: "smooth",
      });
    }
  };

  const handlePrev = () => {
    const newIndex =
      currentIndex === 0 ? otherProjects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  const handleNext = () => {
    const newIndex =
      currentIndex === otherProjects.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    scrollToIndex(newIndex);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Section header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="h-1 w-16 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full mb-4" />
          <h2 className="text-white text-3xl font-bold">More Projects</h2>
          <p className="text-white/50 mt-2">
            Explore other things I&apos;m building
          </p>
        </div>

        {/* Navigation buttons */}
        <div className="flex items-center gap-2">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all duration-300"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="p-3 rounded-full bg-white/5 border border-white/10 hover:border-sky-500/50 hover:bg-sky-500/10 transition-all duration-300"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </motion.button>
        </div>
      </div>

      {/* Carousel */}
      <div
        ref={containerRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4 -mx-4 px-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {otherProjects.map((project) => (
          <div
            key={project.slug}
            className="flex-shrink-0 w-[300px] md:w-[350px]"
            style={{ scrollSnapAlign: "start" }}
          >
            <ProjectCarouselCard
              project={project}
              isActive={project.slug === currentSlug}
            />
          </div>
        ))}
      </div>

      {/* Dots indicator */}
      <div className="flex items-center justify-center gap-2 mt-6">
        {otherProjects.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              scrollToIndex(index);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-sky-500"
                : "bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default function ProjectItem() {
  const { slug } = useParams();
  const [startAnimation, setStartAnimation] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { isContentReady } = useLoading();
  const containerRef = useRef<HTMLDivElement>(null);

  // Device optimization
  const { isMobile, isLowPower, shouldReduceMotion } = useDeviceOptimization();
  const shouldSimplify = isMobile || isLowPower || shouldReduceMotion;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const findProjectBySlug = useMemo(() => {
    return Projects.find((project) => project.slug === slug);
  }, [slug]);

  // Throttled mouse position update for better performance
  const lastCallRef = useRef(0);
  const throttleMs = isMobile ? 100 : 16; // Slower updates on mobile

  const throttledSetMousePosition = useCallback(
    (x: number, y: number) => {
      const now = Date.now();
      if (now - lastCallRef.current >= throttleMs) {
        lastCallRef.current = now;
        setMousePosition({ x, y });
      }
    },
    [throttleMs]
  );

  // Track mouse position for 3D interaction (skip on mobile)
  useEffect(() => {
    if (shouldSimplify) return; // Skip mouse tracking on mobile/low-power

    const handleMouseMove = (e: MouseEvent) => {
      throttledSetMousePosition(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [shouldSimplify, throttledSetMousePosition]);

  useEffect(() => {
    if (isContentReady) {
      const timer = setTimeout(
        () => {
          setStartAnimation(true);
        },
        shouldSimplify ? 100 : 200
      );

      return () => clearTimeout(timer);
    }
  }, [isContentReady, shouldSimplify]);

  // Parallax effects - simplified on mobile
  const heroY = useTransform(
    scrollYProgress,
    [0, 0.3],
    shouldSimplify ? [0, -30] : [0, -100]
  );
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  if (!findProjectBySlug) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-white text-xl">Project not found</p>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Fixed 3D Background - with performance optimizations */}
      <div className="fixed inset-0 z-0">
        <Canvas
          camera={{ position: [0, 2, 8], fov: 60 }}
          dpr={isMobile ? [1, 1.5] : [1, 2]} // Lower resolution on mobile
          performance={{ min: 0.5 }} // Allow frame rate to drop
          gl={{
            antialias: !isMobile, // Disable antialiasing on mobile
            powerPreference: isMobile ? "low-power" : "high-performance",
            alpha: true,
          }}
        >
          <Suspense fallback={null}>
            <Scene3D mousePosition={mousePosition} isMobile={shouldSimplify} />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-transparent via-[#0a0a0f]/70 to-[#0a0a0f] pointer-events-none z-[1]" />

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section - Compact */}
        <motion.div
          style={{ y: heroY, opacity: heroOpacity }}
          className="min-h-[70vh] flex flex-col items-center justify-center px-4 pt-24"
        >
          {/* Back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-24 left-8"
          >
            <Link href="/projects">
              <Button
                variant="ghost"
                className="text-white/60 hover:text-white hover:bg-white/10 gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Button>
            </Link>
          </motion.div>

          {/* Project badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={startAnimation ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="relative mb-6"
          >
            <div className="absolute inset-0 bg-sky-500/30 blur-2xl rounded-full" />
            <div className="relative px-6 py-2 rounded-full bg-sky-500/20 border border-sky-500/30 backdrop-blur-xl">
              <span className="text-sky-400 font-medium flex items-center gap-2">
                <Gamepad2 className="w-4 h-4" />
                {findProjectBySlug.status === "in-progress"
                  ? "Currently Building"
                  : "Completed"}
              </span>
            </div>
          </motion.div>

          {/* Project title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold text-center mb-4"
          >
            <span className="bg-gradient-to-r from-white via-sky-200 to-sky-400 bg-clip-text text-transparent">
              {findProjectBySlug.name}
            </span>
          </motion.h1>

          {/* Subline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-xl md:text-2xl text-center max-w-2xl mb-8"
          >
            {findProjectBySlug.subline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-8"
          >
            <Link href={findProjectBySlug.link || "#"} target="_blank">
              <Button className="bg-sky-500 hover:bg-sky-600 text-white font-semibold px-8 py-6 rounded-full shadow-lg shadow-sky-500/30 transition-all duration-300 hover:shadow-sky-500/50 hover:scale-105">
                Visit Project
                <ExternalLink className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>

          {/* Author */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={startAnimation ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl"
          >
            <Avatar className="w-10 h-10 border-2 border-sky-500/50">
              <AvatarImage className="object-cover" src={person.avatar} />
              <AvatarFallback>WG</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-white font-medium">
                {capitalizeFirstLetter(person.name)}
              </p>
              <p className="text-white/40 text-sm">Developer</p>
            </div>
          </motion.div>

          {/* Scroll indicator - smaller, inline */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="mt-8"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="flex items-center gap-2 text-white/30 text-sm"
            >
              <div className="w-4 h-6 rounded-full border border-white/20 flex items-start justify-center p-1">
                <motion.div
                  animate={{ y: [0, 6, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="w-1 h-1 rounded-full bg-sky-400"
                />
              </div>
              <span>Scroll</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Content sections - Reduced spacing */}
        <div className="relative px-4 md:px-8 max-w-5xl mx-auto pb-20 space-y-16">
          {/* Stats section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard icon={Zap} title="Status" value="In Progress" delay={0} />
            <StatCard
              icon={Target}
              title="Category"
              value="Full Stack"
              delay={0.1}
            />
            <StatCard
              icon={Lightbulb}
              title="Technologies"
              value={`${findProjectBySlug.technologies.length}+`}
              delay={0.2}
            />
            <StatCard
              icon={Trophy}
              title="Features"
              value={`${findProjectBySlug.keyFeatures.length}+`}
              delay={0.3}
            />
          </div>

          {/* Overview */}
          <Section title="Overview" icon={Target}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-white/70 text-lg leading-relaxed"
            >
              {findProjectBySlug.description}
            </motion.p>
          </Section>

          {/* Problem Statement */}
          {findProjectBySlug.problemStatement && (
            <Section
              title={findProjectBySlug.problemStatement.title}
              icon={AlertTriangle}
              subtitle={findProjectBySlug.problemStatement.description}
            >
              <div className="grid md:grid-cols-2 gap-3">
                {findProjectBySlug.problemStatement.painPoints.map(
                  (point, index) => (
                    <PainPointItem key={index} point={point} index={index} />
                  )
                )}
              </div>
            </Section>
          )}

          {/* Solution Approach */}
          {findProjectBySlug.solutionApproach && (
            <Section
              title={findProjectBySlug.solutionApproach.title}
              icon={Rocket}
              subtitle={findProjectBySlug.solutionApproach.description}
            >
              <div className="grid md:grid-cols-3 gap-4">
                {findProjectBySlug.solutionApproach.principles.map(
                  (principle, index) => (
                    <PrincipleCard
                      key={index}
                      principle={principle}
                      index={index}
                    />
                  )
                )}
              </div>
            </Section>
          )}

          {/* Key Features */}
          <Section title="Key Features" icon={Zap}>
            <div className="grid md:grid-cols-2 gap-3">
              {findProjectBySlug.keyFeatures.map((feature, index) => (
                <FeatureCard key={index} feature={feature} index={index} />
              ))}
            </div>
          </Section>

          {/* System Architecture */}
          {findProjectBySlug.architecture && (
            <Section
              title={findProjectBySlug.architecture.title}
              icon={Layers}
              subtitle={findProjectBySlug.architecture.description}
            >
              <div className="space-y-3">
                {findProjectBySlug.architecture.layers.map((layer, index) => (
                  <ArchitectureLayerCard
                    key={index}
                    layer={layer}
                    index={index}
                  />
                ))}
              </div>
            </Section>
          )}

          {/* Technologies */}
          <Section title="Technologies Used" icon={Code2}>
            <div className="flex flex-wrap gap-3">
              {findProjectBySlug.technologies.map((tech, index) => (
                <TechBadge key={index} tech={tech} index={index} />
              ))}
            </div>
          </Section>

          {/* Target Audience */}
          {findProjectBySlug.targetAudience && (
            <Section title="Target Audience" icon={Users}>
              <div className="space-y-6">
                <div>
                  <h3 className="text-white/60 text-sm font-medium mb-3 uppercase tracking-wider">
                    Primary
                  </h3>
                  <div className="grid md:grid-cols-3 gap-3">
                    {findProjectBySlug.targetAudience.primary.map(
                      (segment, index) => (
                        <AudienceCard
                          key={index}
                          segment={segment}
                          index={index}
                          isPrimary
                        />
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="text-white/60 text-sm font-medium mb-3 uppercase tracking-wider">
                    Secondary
                  </h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {findProjectBySlug.targetAudience.secondary.map(
                      (segment, index) => (
                        <AudienceCard
                          key={index}
                          segment={segment}
                          index={index}
                          isPrimary={false}
                        />
                      )
                    )}
                  </div>
                </div>
              </div>
            </Section>
          )}

          {/* Development Timeline */}
          {findProjectBySlug.developmentPhases && (
            <Section title="Development Timeline" icon={Clock}>
              <div className="space-y-2">
                {findProjectBySlug.developmentPhases.map((phase, index) => (
                  <PhaseItem key={index} phase={phase} index={index} />
                ))}
              </div>
            </Section>
          )}

          {/* Success Metrics */}
          {findProjectBySlug.metrics && (
            <Section title={findProjectBySlug.metrics.title} icon={BarChart3}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {findProjectBySlug.metrics.kpis.map((kpi, index) => (
                  <KPICard key={index} kpi={kpi} index={index} />
                ))}
              </div>
            </Section>
          )}

          {/* Design Decisions */}
          {findProjectBySlug.designDecisions && (
            <Section title="Design Decisions" icon={Palette}>
              <div className="space-y-4">
                {findProjectBySlug.designDecisions.map((decision, index) => (
                  <DesignDecisionCard
                    key={index}
                    decision={decision}
                    index={index}
                  />
                ))}
              </div>
            </Section>
          )}

          {/* Security Considerations */}
          {findProjectBySlug.securityConsiderations && (
            <Section title="Security & Privacy" icon={Shield}>
              <div className="grid md:grid-cols-2 gap-3">
                {findProjectBySlug.securityConsiderations.map((item, index) => (
                  <SecurityItem key={index} item={item} index={index} />
                ))}
              </div>
            </Section>
          )}

          {/* Integrations */}
          {findProjectBySlug.integrations && (
            <Section title="Integrations" icon={Puzzle}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {findProjectBySlug.integrations.map((integration, index) => (
                  <IntegrationBadge
                    key={index}
                    integration={integration}
                    index={index}
                  />
                ))}
              </div>
            </Section>
          )}

          {/* Challenges & Learnings */}
          <Section title="Challenges & Learnings" icon={BookOpen}>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Challenges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-white/80 font-semibold text-lg border-b border-white/10 pb-2">
                  Challenges Faced
                </h3>
                <ul className="space-y-3">
                  {findProjectBySlug.challengesAndLearning?.challenges.map(
                    (challenge, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-white/60"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-2 flex-shrink-0" />
                        {challenge}
                      </motion.li>
                    )
                  )}
                </ul>
              </motion.div>

              {/* Learnings */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-white/80 font-semibold text-lg border-b border-white/10 pb-2">
                  Key Learnings
                </h3>
                <ul className="space-y-3">
                  {findProjectBySlug.challengesAndLearning?.learning.map(
                    (learning, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-start gap-3 text-white/60"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0" />
                        {learning}
                      </motion.li>
                    )
                  )}
                </ul>
              </motion.div>
            </div>
          </Section>

          {/* Future Roadmap */}
          {findProjectBySlug.futureRoadmap && (
            <Section title="Future Roadmap" icon={Calendar}>
              <div className="space-y-4">
                {findProjectBySlug.futureRoadmap.map((item, index) => (
                  <RoadmapItem key={index} item={item} index={index} />
                ))}
              </div>
            </Section>
          )}

          {/* Outcome */}
          <Section title="Project Outcome" icon={Trophy}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-sky-500/10 to-cyan-500/10 rounded-2xl blur-xl" />
              <div className="relative p-8 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-white/80 text-lg leading-relaxed">
                  {findProjectBySlug.outcomes}
                </p>
              </div>
            </motion.div>
          </Section>

          {/* Other Projects Carousel */}
          <OtherProjectsCarousel currentSlug={slug as string} />
        </div>
      </div>
    </div>
  );
}
