export default function FloatingBlobs() {
  return (
    <div aria-hidden className="absolute inset-0 -z-20 pointer-events-none">
      <div className="absolute -left-28 top-24 h-72 w-72 rounded-full bg-gradient-to-tr from-purple-500 to-cyan-400 opacity-15 blur-3xl animate-blob"></div>
      <div className="absolute right-0 top-32 h-56 w-56 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 opacity-15 blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute left-1/2 top-[55%] h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-br from-cyan-400 to-violet-400 opacity-10 blur-3xl animate-blob animation-delay-4000"></div>
    </div>
  )
}
