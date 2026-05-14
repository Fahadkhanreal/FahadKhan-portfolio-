export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-zinc-100 mb-4">404</h1>
        <p className="text-xl text-zinc-400 mb-8">Page not found</p>
        <a
          href="/"
          className="px-6 py-3 border-2 border-[#64ffda] text-[#64ffda] rounded font-medium hover:bg-[#64ffda]/10 transition-colors inline-block"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
