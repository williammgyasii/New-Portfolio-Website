export default function AnimatedPillTags({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <div className=" w-full item-center justify-center text-neutral-100 antialiased">
      <button
        className="shimmer relative inline-flex items-center rounded-full p-[2px]  bg-gradient-to-r from-sky-500 via-sky-400 to-sky-400 [background-size:200%_100%] focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300/60"
        aria-label="Live pill"
      >
        <span className="inline-flex items-center gap-2 rounded-full bg-sky-950 px-6 text-sky-200 py-2 text-sm">
          <span className="h-2 w-2 rounded-full bg-sky-400" />
          {children}
        </span>
      </button>

      {/* Local keyframes (no Tailwind config needed) */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 0% 0; }
          100% { background-position: 200% 0; }
        }
        .shimmer { animation: shimmer 6s linear infinite; }
      `}</style>
    </div>
  );
}

// <span className="group relative inline-flex items-center gap-2 rounded-full bg-neutral-900/70 px-3 py-1 text-sm ring-1 ring-white/10 transition hover:bg-neutral-900/90">
//           {/* Glow */}
//           <span className="pointer-events-none absolute -inset-0.5 rounded-full opacity-40 blur-md transition group-hover:opacity-60 bg-[radial-gradient(30%_60%_at_30%_50%,rgba(99,102,241,.55),transparent),radial-gradient(40%_80%_at_70%_50%,rgba(16,185,129,.5),transparent)]" />
//           <span className="relative font-medium">Pro</span>
//           <span className="relative inline-flex h-2 w-2">
//             <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400/80 opacity-75" />
//             <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-400" />
//           </span>
//         </span>

//         {/* 3) Status + Ping */}
//         <span className="inline-flex items-center rounded-full bg-neutral-900 px-3 py-1 text-sm ring-1 ring-white/10">
//           <span className="relative mr-2 flex h-2 w-2">
//             <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
//             <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
//           </span>
//           Online
//         </span>

//         {/* 4) Closable (hover to reveal X) */}
//         <button className="group inline-flex items-center rounded-full border border-white/10 bg-neutral-900/60 px-3 py-1 text-sm transition hover:border-white/20">
//           Beta
//           <svg
//             className="ml-2 h-3.5 w-3.5 opacity-60 transition group-hover:opacity-100"
//             viewBox="0 0 24 24"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             aria-hidden="true"
//           >
//             <path d="M18 6L6 18M6 6l12 12" />
//           </svg>
//         </button>
