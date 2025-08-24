export function ProjectFabCTA({
  href = "#",
  label = "View project",
  className = "",
}: {
  href?: string;
  label?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group fixed bottom-6 right-6 relative inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-white shadow-lg shadow-black/20
                 bg-gradient-to-br from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500
                 ring-1 ring-white/10 focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-300
                 transition-transform duration-200 hover:-translate-y-0.5 ${className}`}
    >
      {/* Shimmer sweep */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden rounded-full"
      >
        <span
          className="absolute -inset-x-10 -inset-y-2 opacity-0 group-hover:opacity-100
                     bg-[linear-gradient(90deg,transparent,rgba(255,255,255,.35),transparent)]
                     animate-[projshimmer_1.25s_linear_infinite]"
        />
      </span>

      <span className="relative">{label}</span>
      {/* ArrowUpRight icon (inline, so no imports needed) */}
      <svg
        className="relative h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M7 17L17 7M7 7h10v10" />
      </svg>

      {/* Local keyframes (no Tailwind config needed) */}
      <style>{`
        @keyframes projshimmer {
          0% { transform: translateX(-80%); }
          100% { transform: translateX(120%); }
        }
      `}</style>
    </a>
  );
}
