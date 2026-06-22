export default function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#05060a]">
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-blue-400 shadow-[0_0_80px_rgba(0,179,255,0.4)]">
        <div className="absolute inset-4 rounded-full border border-white/10 bg-[#05060a]" />
        <div className="absolute inset-8 rounded-full bg-cyan-300/80 animate-bounce" />
      </div>
    </div>
  )
}
