export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 bg-[#05081c] flex items-center justify-center z-50">
      <div className="relative">
        {/* Outer spinning ring */}
        <div className="size-8 border-4 border-slate-700 border-t-blue-500 rounded-full animate-spin"></div>
        {/* Inner pulsing dot */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
